const db = require('../db/index')
const { Wheels, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const wheelSeed = async () => {
  try {
    const aluminum = await Material.findOne({ name: 'Aluminum' })
    const carbon = await Material.findOne({ name: 'Carbon' })
    const pro = await Levels.findOne({ name: 'Pro' })
    const intermediate = await Levels.findOne({ name: 'Intermediate' })
    const entry = await Levels.findOne({ name: 'Entry' })


    const bikeWheels = [
      {
        name: 'SES 6.7',
        brand: 'Enve',
        description: 'Striking the ultimate balance between weight savings, stability, aerodynamics, and rolling efficiency, the SES 6.7 defines Real-World Fast and raises the bar for modern aero wheel performance. Grams of rim, versus grams of drag, make the SES 6.7 the outright fastest wheel on the road.',
        image: 'https://enve.com/cdn/shop/products/ENVE_SES_67_Hero3-2400x0-c-default.png?v=1683742075&width=1800',
        material: [carbon._id],
        level: [pro._id],
        price: '$2850',
      },
      {
        name: '454 NSW Tubular Disc-brake',
        brand: 'ZIPP',
        description: `Our top road pros demanded we offer the revolutionary Zipp 454 NSW as a Tubular, so we made it just for them… and for you! The 454 NSW Tubular Disc-brake wheelset brings together the advanced aerodynamics and stability of its biomimicry-derived Sawtooth™ rim profile with the benefits of disc braking. This wheelset was developed for professional racers as well as cyclists who prefer the time-proven ride qualities of riding tubulars with cutting-edge aero technology. Utilizing the principles of the emerging science of biomimicry, Zipp engineers studied the environment around them for instances of how nature achieved speed, control, and efficiency. A humpback whale's fast and graceful movements thanks to the tubercles on its pectoral fins. These structures inspired Zipp advanced development engineers to, for the first time, systematically apply biomimicry to solve the complex challenge of designing a wheel, with the undulating Hyperfoil™ nodes, that reduces both aerodynamic drag and side force. The 454 NSW's Cognition DB V2 Hubset is re-engineered with Axial Clutch V2™ for quicker engagement and lower friction Every time a conventional hubset starts to coast, friction within the freehub ratchet mechanism works like a drum brake to slow the rider down. The drag between the hub shell and driver body during coasting is considered as efficiency loss, especially for road wheels. The solution? The rear Cognition V2™ hub with AxialClutch V2™ technology reduces drag by disengaging the ratchet mechanism when coasting. The AxialClutch V2's™ wave spring acts to re-engage the ratchet mechanism quickly and consistently once the rider starts pedaling. The hubset also is lightweight and durable.`,
        image: 'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/wheels/wheels/wh-454-nsw-tu-disc-brake-b1/productassets_wh-454-ntud-b1_fg/amwh-454-nsw-tudbcl-7r-xdr-12x142-std-b1-c-side-s.png?w=1000',
        material: [carbon._id],
        level: [pro._id],
        price: '$2321',
      },
      {
        name: '303 Firecrest Tubeless Disc-Brake',
        brand: 'ZIPP',
        description: `Zipp's 303 Firecrest® Tubeless Disc-brake wheelset is designed for the real world… a world of imperfect conditions, road surfaces, and elements where the bottom line is simple. Efficiency = speed. It's faster, lighter, and more capable over varied terrain—whether the surface is pavement in all its conditions or no pavement at all. Deeply rooted in Zipp's drive to conquer the Spring Classics, the new 303 Firecrest is remade with a purpose-made approach for the demands of modern road bikes. When it comes to going fast on a bicycle, efficiency means reduced: Wind resistance, rolling resistance, rider fatigue, weight. The 303 Firecrest Tubeless Disc-brake was designed using real-world direct measurements (vs. primarily wind tunnel or computer simulation). The results were huge. Its rim is slightly more bulbous in design than its predecessor, with a 30mm outside width, a 25mm internal width, and a 40mm rim depth. The profile provides low drag and an improved transition between rim and tire, boosting aero efficiency on the road. The wide rim stance also features less tire deflection for reduced rolling resistance. The combination of the wider tire, increased tire volume, and lower tire pressure helps to reduce rider fatigue by smoothing out the ride over imperfect pavement and road conditions—the tire and wheel system absorbs the shaking, not the rider. At the center of the 303 Firecrest Tubeless Disc brake is a versatile and durable new hubset, the German-engineered ZR1 DB. This hubset features 66 points of engagement for quicker response. The 303 Firecrest Tubeless Disc-brake wheelset is for dedicated cyclists who aspire to the latest in technology. Its competitors… in races, against peers, or simply conquering personal limits. This is about becoming faster and matching your motivation to the most advanced technology.`,
        image: 'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/wheels/wheels/wh-303-firecrest-tl-db-a1/productassets_wh-303-ftld-a1_fg/amwh303fctldbcl700f12x100stda1csides2.png?w=1000',
        material: [carbon._id],
        level: [intermediate._id],
        price: '$1050',
      },
      {
        name: 'Cosmic SL 32 Disc',
        brand: 'Mavic',
        description: `This carbon road wheel climbs and corners faster with a lighter weight 32mm rim featuring UST Road Tubeless technology and disc-brake-specific engineering.`,
        image: 'https://cdn.mavic.com/media/cache/default/dam/P13351_0.png.webp',
        material: [carbon._id],
        level: [intermediate._id],
        price: '$1500',
      },
      {
        name: 'EA90 SL Disc',
        brand: 'Easton',
        description: `At only 1537 grams this stiff, wide and stealthy aluminum wheelset is a knockout punch to just about every carbon wheel in the category.`,
        image: 'https://eastoncycling.com/cdn/shop/products/EA90SL_Disc_SL_Wheelset_1024x1024.png?v=1565825130',
        material: [aluminum._id],
        level: [entry._id],
        price: '$400',
      },
    ]

    const createAndSaveWheels = async (wheel) => {
      try {
        const newWheels = new Wheels(wheel)
        console.log(newWheels)
        await newWheels.save()
      } catch (error) {
        console.error('Error saving wheels:', error)
      }
    }

    for (const wheel of bikeWheels) {
      await createAndSaveWheels(wheel)
    }

    console.log('Wheel seeding completed')
  } catch (error) {
    console.error('Error seeding wheels:', error)
  }
}

module.exports = { wheelSeed }
