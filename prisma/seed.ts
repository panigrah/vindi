import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getWines().map((w) => {
      //return db.wine.create({ data: {...w, user: "650443ef74fb76540aa1b9c6" }});
    })
  );
}

seed();

function getWines() {
    return [
        {
          variety: "Cabernet Sauvignon",
          name:  "Double Canyon Heaven Hills Cabernet Sauvignon",
          appelation: "Heaven Hills",
          description: "Impactful deep plum aromas with hints of raspberry jam and the feeling of fresh ocean spray open your mind to the tasting experience to ensue. The first entry to the pallet is silky smooth and opens with delicately assembled blackberry, plum, and peach cobbler, all supported by a dusty tannin structure which is complemented by a mouthwatering sensation approximately five seconds from the beginning of the experience. The finish is lengthy and subtle with hints of South American coffee and heath candies.",
          vintage: 2016,
          alcohol: 14.2,
          media: ['/double-canyon-heaven-hills-cabernet-sauvignon.png']
        },
        {
          variety: "Chardonnay",
          name:  "Kendall-Jackson Vintner’s Reserve Chardonnay",
          appelation: "Kendal-Jackson Vintner's Reserve",
          description: "No.1 selling Chardonnay in US for over 25 years. Pineapple, mango and papaya, with citrus notes that explode in your mouth.",
          vintage: 2018,
          alcohol: 13.5,
          media: ['/kendall-jackson-vintners-reserve-chardonnay.png']
        },        
        {
          variety: "Pinot Noir",
          name:  "Martin Ray Sonoma Coast Pinot Noir",
          appelation: "Martin Ray Sonoma Coast",
          description: "Bright Bing cherry, raspberry gastrique, and underripe plum with hints of spice layered over earthy mushroom. Vivid red fruit carries throughout with touches of clove and citrus zest. Fresh acidity throughout, with structured yet plush tannins on the finish. ",
          vintage: 2018,
          alcohol: 14.1,
          media: ['/martin-ray-sonoma-coast-pinot-noir.jpg']
        },        
        {
          variety: "Sauvinon Blanc",
          name:  "Matua Sauvignon Blanc",
          appelation: "Matua New Zealand",
          description: "This classic Marlborough Sauvignon Blanc is deliciously pure, bursting with citrus notes with a hint of grapefruit and basil. The palate is fresh and vibrant with concentrated blackcurrant leaf and a hint of nettle and green melon. So refreshing, you'll be left wanting more. ",
          vintage: 2020,
          alcohol: 13,
          media: ['/matua-sauvignon-blanc.png']
        },        
        {
          variety: "Zinfandel",
          name:  "Cline Ancient Vines Zinfandel",
          appelation: "Cline Ancient Vines",
          description: "The 2018 Ancient Vines Zinfandel shows ripe fruit flavors and soft tannins, which make this a mouth-coating rich vintage. Aging on new and used oak has lent this wine a subtle vanilla quality that is nicely complemented by explosive fruit notes. Accompany this wine with slow-cooked BBQ pork, chicken mole or spinach mushroom casserole.",
          vintage: 2018,
          alcohol: 14.5,
          media: ['/cline-ancient-vines-zinfandel.png']
        },
    ]
}