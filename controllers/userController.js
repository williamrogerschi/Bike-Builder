const { User } = require('../models/Index')
const { Build } = require('../models/Index')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneUser = async (req, res) => {
    try {
        id = req.params.id
        const user = await User.findById(id)
        if(user) {
            return res.json(user)
        }
        return res.status(404).send('User with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createNewUser = async (req, res) => {
    try {
        const { user_name, current_build, saved_builds } = req.body;

        const user = new User({
            user_name,
            current_build: current_build || null, // Set to null if not provided
            saved_builds: saved_builds || null, // Set to null if not provided
        });

        await user.save();
        return res.status(201).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};



const  updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, req.body, {new: true})
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('User not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user =  await User.findByIdAndDelete(id)
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('User not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getUserBuild = async (req, res) => {
    try {
      const userId = req.params.userId;
      const buildId = req.params.buildId;
    
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User build not found');
      }
  
      const build = await Build.findById(buildId);
      if (!build) {
        throw new Error('Build Item not found');
      }
  
      return res.status(200).json(build);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  

  const updateUserBuild = async (req, res) => {
    try {
      const userId = req.params.userId;
      const buildId = req.params.buildId;
    
      const user = await User.findByIdAndUpdate(userId);
      if (!user) {
        throw new Error('User build not found');
      }
  
      const build = await Build.findByIdAndUpdate(buildId);
      if (!build) {
        throw new Error('Build Item not found');
      }
      return res.status(200).json(build);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  const createNewUserBuild = async (req, res) => {
    try {
        const userId = req.params.userId;
        const newBuild = await Build.create({
            user: userId, // Reference to the user ID
            frame: null,
            groupset: null,
            wheelset: null,
            tires: null,
            saddle: null,
            handlebar: null,
            stem: null,
            seatpost: null,
            total_price: "0",
            isCurrent: true,
            name: "New Build", // Default name for a new build
            createdAt: new Date(),
            updatedAt: new Date(),
            __v: 0
        });
        await User.findByIdAndUpdate(userId, { current_build: newBuild._id });
        return res.status(200).json({ newBuildId: newBuild._id });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

  

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
    updateUserBuild,
    getUserBuild,
    createNewUserBuild,
}