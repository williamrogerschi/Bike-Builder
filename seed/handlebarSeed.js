const db = require('../db/index')
const { Levels, Material, Handlebar } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const handlebarSeed = async () => {
  try {
    const aluminum = await Material.findOne({ name: 'Aluminum' })
    const carbon = await Material.findOne({ name: 'Carbon' })
    const steel = await Material.findOne({ name: 'Steel' })
    const pro = await Levels.findOne({ name: 'Pro' })
    const intermediate = await Levels.findOne({ name: 'Intermediate' })
    const entry = await Levels.findOne({ name: 'Entry' })


    const bikeHandlebars = [
      {
        name: 'SES AR Road Handlebar',
        brand: 'Enve',
        description: 'Purpose-built for the modern road rider, the SES AR handlebar features compound flared drops for confident handling, aerodynamic shaping with internal/external routing options for clean airflow and aesthetics, and a carbon laminate that has been tuned for responsive handling without sacrificing comfort.',
        material: [carbon._id],
        image: 'https://enve.com/cdn/shop/products/ENVE_ARBar_HeroTopSide-1.jpg?v=1683741799&width=1800',
        level: [pro._id],
        price: '$400',
      },
      {
        name: 'SL-70 Aero',
        brand: 'ZIPP',
        description: `The SL-70 Aero is a unidirectional carbon handlebar is packed with the innovations for best-in-class fit, ergonomics, and aerodynamic performance. With its wing-shaped bar top, the SL-70 Aero features Zipp's latest bar refinements while building on the trend-setting aero legacy of the VukaSprint. The wing-shaped top was designed using Computational Fluid Dynamics (CFD). The difference of that design is real, saving 6.4 watts over a round-tube section bar top. Beyond aero performance, the SL-70 Aero features a 70mm reach to allow proper fit without compromising stem length and steering control. The revised 10° ramp angle to the brake hoods eliminated need for up-rotated bars. The bar also provides ample wrist clearance for riding and sprinting in drops.`,
        material: [carbon._id],
        image: 'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/handlebars/handlebars---drop/hb-drop-bar-sl-70aero-a3/productassets_hb-dbsl-70a-a3_fg/hbsl70aero42ccmtbka3c3qs.png?w=1000',
        level: [pro._id],
        price: '$352',
      },
      {
        name: 'EC70 SL Handlebar',
        brand: 'Easton',
        description: `We took our lightest, most comfort-advanced bar, the EC90SLX, and used our second-tier carbon fiber for a more affordable package. The EC70 SL features the same top of the line MCD shape technology for easy position transferring; Taperwall to maintain stiffness while reducing weight; and Intelligent Flexibility for added vibration dampening comfort. It also features recesses for cables and comes in four lengths. The EC70 SL is the full race package deal. Please see below for our handlebar measurement guide.`,
        material: [carbon._id],
        image: 'https://eastoncycling.com/cdn/shop/products/EC70SL_RB_3QView_16_63969e56-e8a7-4a36-85cc-750148f84bde_1024x1024.png?v=1565373946',
        level: [intermediate._id],
        price: '$175',
      },
      {
        name: 'Service Course SL-80',
        brand: 'ZIPP',
        description: `The Service Course SL-80 provides comfortable and efficient positions on the bar tops, brake hoods or down in the drops. The bar allows a neutral wrist position on the drops and a flat brake-hood transition. This minimizes the need for up-rotated bars. Drops are angled outward by 4 degrees, reducing wrist strain. Named after its 80mm reach to bring the hoods and control levers back where you want them. The ergonomic 125mm drop places the angled drop position where you can easily reach it while maintaining a neutral wrist angle. The SL-80's rounded bar top is clip compatible. Forged from lightweight 7075 aluminum.`,
        material: [aluminum._id],
        image: 'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/handlebars/handlebars---drop/hb-drop-svc-crs-sl-80-a2/productassets_hb-dbsc-sl80-a2_fg/hbsvccrssl8042ccbdbka2c3qs.png?w=1000',
        level: [intermediate._id],
        price: '$118',
      },
      {
        name: 'Cowbell',
        brand: 'Salsa',
        description: `Cowbell blends speed, comfort, and efficiency for high performance efforts on gravel and paved roads. Designed with gravel racing and riding in mind, Cowbell bars feature a 12° flare that puts your hands, wrists, and arms into a natural, comfortable position in the drops. Cowbell 44cm 314g`,
        material: [aluminum._id],
        image: 'https://www.salsacycles.com/assets/salsa-cowbell-bar-HB8260-1920x720.jpg',
        level: [entry._id],
        price: '$58',
      },
    ]


    const createAndSaveHandlebar = async (handlebar) => {
      try {
        const newHandlebar = new Handlebar(handlebar)
        console.log(newHandlebar)
        await newHandlebar.save()
      } catch (error) {
        console.error('Error saving handlebars:', error)
      }
    }

    for (const handlebar of bikeHandlebars) {
      await createAndSaveHandlebar(handlebar)
    }

    console.log('Handlebar seeding completed')
  } catch (error) {
    console.error('Error seeding handlebars:', error)
  }
}

module.exports = { handlebarSeed }

