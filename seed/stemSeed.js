const db = require('../db/index')
const { Stem, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const carbon = await Material.findOne({ name: 'Carbon' })
    const pro = await Levels.findOne({ name: 'Pro' })

    const bikeStems = [
        {
            name: 'Enve Road',
            brand: 'Enve',
            description: 'Road, Gravel, and Cyclocross riders turn to the ENVE Road Carbon Stem for a lightweight and reliable setup with optimized road feel.',
            material: [carbon._id],
            image: 'https://enve.com/cdn/shop/products/ENVE_RoadStem_HiRez_12-scaled.jpg?v=1700065021&width=1800',
            level: [pro._id],
            price: '$300',
        },
        {
            name: 'SL Sprint',
            brand: 'ZIPP',
            description: `The SL Sprint Stem is an ideal balance of stiffness and lightweight. The stem weighs in at just 1.8g per newton meter of stiffness using SRAM's Exogram technology. Designed with feedback from top pros to meet the unrelenting demands of Grand Tour sprinters. Zipp also tapped into expertise gained from its pioneering carbon stems and exhaustively researched the marketplace to create the SL Sprint Stem. The SL Sprint comes with its own stem cap that's designed to be aerodynamically efficient by blending into the stem body. Available in six sizes ranging from 90 to 140mm to meet any rider's fit needs.`,
            material: [carbon._id],
            image: 'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/stems/stems/st-sl-sprint-a3/productassets_st-sl-spnt-a3_fg/stslsprint31812110118mtbka3csides.png?w=1600&quality=80&format=webp',
            level: [pro._id],
            price: '$285',
        },
        {
            name: 'WCS Carbon Matrix C220',
            brand: 'Ritchey',
            description: `You really can have it all—the new WCS C220 stem rivals the performance of the revolutionary C260 stem design, but it's quicker and easier to install and remove, thanks to a press-fit handlebar clamp interface and forward-facing hardware.`,
            material: [carbon._id],
            image: 'https://cdn.sanity.io/images/pbcwwn3b/production/a5ee742b5f7f59ca7bfaf45f534925cb7848c8bc-1180x640.jpg?w=3840&q=75&auto=format',
            level: [intermediate._id],
            price: '$180',
        },
        {
            name: 'Service Course SL',
            brand: 'ZIPP',
            description: `Zipp's Service Course SL Stem, crafted from 7075 aluminum, features a shape that's strong and lightweight, resulting in a best-in-class 1.85 grams per newton meter of stiffness. That results in no-flex sprints and accelerations. To meet every rider's fit needs, the stem is available in ±6° and ±17° angles and seven lengths from 70 to 130mm as well as a 140 & 150mm lengths for the ±6° stem only. This stem is a favorite of Zipp ambassadors and pro athletes.`,
            material: [carbon._id],
            image: '',
            level: [intermediate._id],
            price: '$140',
        },
        {
            name: 'Whisky No. 7',
            brand: 'Whisky',
            description: `No.7 Stems offer a refined, classic look to match all Whisky cockpit items.`,
            material: [aluminum._id],
            image: 'https://www.worldwidecyclery.com/cdn/shop/products/SM7912-01_729d736d-db5d-42f0-aef0-12c874db907c_x1024.jpg?v=1674958714',
            level: [entry._id],
            price: '$45'
        }
    ]

    const createAndSaveStem = async (stem) => {
        try {
            const newStems = new Stem(stem)
            console.log(newStems)
            await newStems.save()
        } catch(error) {
            console.error('Error saving stems:', error)
        }
    }

    const stemSeed = async () => {
        try {
            for (const stem of bikeStems) {
                await createAndSaveStem(stem)
            }
            console.log('Stem seeding completed')
        } catch (error) {
            console.error('Error seeding stems:', error)
        } finally {
            db.close()
        }
    }

    await stemSeed()
}

main()