const db = require('../db/index')
const { Frame, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const frameSeed = async () => {
  try {
    const aluminum = await Material.findOne({ name: 'Aluminum' })
    const carbon = await Material.findOne({ name: 'Carbon' })
    const steel = await Material.findOne({ name: 'Steel' })
    const pro = await Levels.findOne({ name: 'Pro' })
    const intermediate = await Levels.findOne({ name: 'Intermediate' })
    const entry = await Levels.findOne({ name: 'Entry' })



    const bikeFrames = [
      {
        name: 'SuperSix EVO LAB71',
        brand: 'Cannondale',
        description: `Ultimate racing frame. Ultra-light, podium-ready.`,
        color: 'Black',
        material: [carbon._id],
        image: 'https://embed.widencdn.net/img/dorelrl/0zavucjihn/2000px@1x/C23_C11082U_LAB71_SuperSix_EVO_AM_Frm_BLK_PD.png',
        level: [pro._id],
        price: '$6000',
      },
      {
        name: 'S-Works Aethos',
        brand: 'Specialized',
        description: `Ultimate ride feel, lightweight, style. Reinvented for stiffness, balance, and record lightness (585g).`,
        color: 'Cool Grey/Chameleon Eyris',
        material: [carbon._id],
        image: 'https://ibkbike.vtexassets.com/arquivos/ids/990601/77224-02_AETHOS-SW-FRMSET-CLY-PDRNDGO-CMLNLPS_HERO.jpg?v=638321540913630000',
        level: [pro._id],
        price: '$5500',
      },
      {
        name: 'Canyon Endurance CF SLX',
        brand: 'Canyon',
        description: `Power meets comfort. Canyon's top endurance ride.`,
        color: 'Merlot',
        material: [carbon._id],
        image: 'https://www.theproscloset.com/cdn/shop/files/frd13085_PH3_3_3000x2000.jpg?v=1692816634',
        level: [intermediate._id],
        price: '$1900'
      },
      {
        name: 'Cannondale Synapse Carbon 1 RLE',
        brand: 'Cannondale',
        description: `Smooth, light, and nimble. Cannondale's all-day adventure bike.`,
        color: 'Gunmetal',
        material: [carbon._id],
        image: 'https://www.theproscloset.com/cdn/shop/files/FRD13057_PH3_3_3000x2000.jpg?v=1689712026',
        level: [intermediate._id],
        price: '$2000'
      },
      {
        name: 'Cannondale CAAD13',
        brand: 'Cannondale',
        description: 'This is the speediest, smoothest, best handling, finest performing aluminum race frameset on the planet.',
        color: 'Glacier Blue',
        material: [aluminum._id],
        image: 'https://embed.widencdn.net/img/dorelrl/zrzoqesxiy/2000px@1x/C22_C13582U_CAAD13_Frm_GLB_PD.png',
        level: [entry._id],
        price: '$850'
      }
    ]
    

    const createAndSaveFrame = async (frame) => {
      try {
        const newFrame = new Frame(frame)
        console.log(newFrame)
        await newFrame.save()
      } catch (error) {
        console.error('Error saving frames:', error)
      }
    }

    for (const frame of bikeFrames) {
      await createAndSaveFrame(frame)
    }

    console.log('Frame seeding completed')
  } catch (error) {
    console.error('Error seeding frames:', error)
  }
}

module.exports = { frameSeed }


