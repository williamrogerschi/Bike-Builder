const db = require('../db/index')
const { Frame, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const carbon = await Material.findOne({ name: 'Carbon' })
  const pro = await Levels.findOne({ name: 'Pro' })

  const bikeFrames = [
    {
      name: 'SuperSix EVO LAB71 Frameset',
      brand: 'Cannondale',
      description: `The ultimate road racing frameset. Ultra-light carbon construction and fanatical attention to detail elevate the LAB71 SuperSix EVO to the pinnacle – and its rider to the podium. Dream-builds start here.`,
      color: 'Black',
      material: [carbon._id],
      image: 'https://embed.widencdn.net/img/dorelrl/0zavucjihn/1100px@1x/C23_C11082U_LAB71_SuperSix_EVO_AM_Frm_BLK_PD.webp?color=f3f3f3&q=99',
      level: [pro._id],
      price: '$6000',
    },
    {
      name: 'S-Works Aethos Frameset',
      brand: 'Specialized',
      description: `The Aethos frame has been designed with the perfect combination of ultimate ride feel, light weight, and style—from accelerating up steep pitches and descending technical descents, to all-day saddle comfort on even the longest coffee rides, the Aethos hits the mark. But how, you ask? By reinventing the traditional road shape found on bikes of the past, we've subtly altered these shapes to deliver massive gains in stiffness and balance, all without affecting weight or durability. Pair that with an entirely new layup and process that we've perfected over multiple decades and you have the lightest frame out there (585 grams, S-Works, size 56cm). The Aethos is more than just a new bike, it's the first of a new breed.`,
      color: 'Cool Grey/Chameleon Eyris',
      material: [carbon._id],
      image: 'https://assets.specialized.com/i/specialized/77222-01_AETHOS-SW-FRMSET-CLGRY-CMLNEYRS-BRSHCP_HERO?$scom-pdp-product-image-zoom$&fmt=auto',
      level: [pro._id],
      price: '$5500',
    },
    {
      name: 'Canyon Endurance CF SLX Frameset',
      brand: 'Canyon',
      description: `Who says you're giving up power for comfort? The Endurace CF SLX balances frame flex with geometry that keeps you comfortable on the longest rides. As Canyon's flagship endurance bike, the choice is easy when it comes to your go-to companion`,
      color: 'Merlot',
      material: [carbon._id],
      image: 'https://www.theproscloset.com/cdn/shop/files/frd13085_PH3_3_3000x2000.jpg?v=1692816634',
      level: [intermediate._id],
      price: '$1900'
    },
    {
      name: 'Cannondale Synapse Carbon 1 RLE Frameset',
      brand: 'Cannondale',
      description: `Designed for long adventures, smooth climbs, and rapid descents, the Synapse geometry helps the rider feel good for mile after mile. Cannondale's carbon frame options are mind-blowingly light for the climbs, stiff for responsiveness, and nimble in the turns. The Synapse is the perfect bike for those all day adventures.`,
      color: 'Gunmetal',
      material: [carbon._id],
      image: 'https://www.theproscloset.com/cdn/shop/files/FRD13057_PH3_3_3000x2000.jpg?v=1689712026',
      level: [intermediate._id],
      price: '$2000'
    },
    {
      name: 'Cannondale CAAD13 Frameset',
      brand: 'Cannondale',
      description: 'This is the speediest, smoothest, best handling, finest performing aluminum race frameset on the planet.',
      color: 'Glacier Blue',
      material: [aluminum._id],
      image: 'https://embed.widencdn.net/img/dorelrl/zrzoqesxiy/1100px@1x/C22_C13582U_CAAD13_Frm_GLB_PD.webp?color=d6f9ff&q=99',
      level: [entry._id],
      price: '$850'
    }
  ]

  const createAndSaveFrames = async (frame) => {
    try {
      const newFrame = new Frame(frame)
      console.log(newFrame)
      await newFrame.save()
    } catch (error) {
      console.error('Error saving frames:', error)
    }
  }

  const frameSeed = async () => {
    try {
      for (const frame of bikeFrames) {
        await createAndSaveFrames(frame)
      }
      console.log('Frame seeding completed')
    } catch (error) {
      console.error('Error seeding frames:', error)
    } finally {
      db.close()
    }
  }

  await frameSeed()
}

main()
