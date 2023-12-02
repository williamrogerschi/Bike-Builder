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
        const user = await new User (req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

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
  

// Function to handle user login
// const handleUserLogin = async (userId) => {
//   try {
//     const user = await User.findById(userId);

//     if (!user.current_build) {
//       const emptyBuildId = await createEmptyBuild();

//       if (emptyBuildId) {
//         user.current_build = emptyBuildId;
//         await user.save();
//         console.log('Empty build created and associated with the user.');
//       } else {
//         console.error('Failed to create an empty build.');
//       }
//     }
//   } catch (error) {
//     console.error('Error handling user login:', error);
//   }
// };

// const userId = '656a4bcd740a15232ebbd3d1';
// handleUserLogin(userId);


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
    updateUserBuild,
    getUserBuild,
}