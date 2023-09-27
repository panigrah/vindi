import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await db.retailer.deleteMany()
  await Promise.all(
    /*
    getWines().map((w) => {
      //return db.wine.create({ data: {...w, user: "650443ef74fb76540aa1b9c6" }});
    })*/
    getRetailers().map(r => {
      return db.retailer.create({ data: r })
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

function getRetailers() {
  return [
    {
      name: '75cl',
      lastChecked: new Date("2023-09-25T03:23:54.049Z"),
      status: 'active', 
      url: 'https://www.75cl.sg/'
    },
    {
      name: 'templecellars',
      lastChecked: new Date("2023-09-23T21:48:15.602Z"),
      status: 'active', 
      url: 'https://www.templecellars.com/'
    },
    {
      name: 'boundbywine',
      lastChecked: new Date("2023-09-26T21:12:58.545Z"),
      status: 'active', 
      url: 'https://boundbywine.com'
    },
    {
      name: 'standish',
      lastChecked: new Date("2023-09-25T22:00:40.150Z"),
      status: 'active', 
      url: 'https://thestandish.rtlstore.net'
    },
    {
      name: 'bottleshop',
      lastChecked: new Date("2023-09-25T21:34:34.473Z"),
      status: 'active', 
      url: 'https://www.1855thebottleshop.com',
    },
    {
      name: 'cogitowines',
      lastChecked: new Date("2023-09-25T21:19:16.206Z"),
      status: 'active', 
      url: 'https://cogitowines.com'
    },
    {
      name: 'cellarbration',
      lastChecked: new Date("2023-09-25T05:12:24.891Z"),
      status: 'active', 
      url: 'https://cellarbration.com.sg/'
    },
    {
      name: 'grandvin',
      lastChecked: new Date("2023-09-25T20:54:16.192Z"),
      status: 'active', 
      url: 'https://www.grandvin.com.sg'
    },
    {
      name: 'centurywines',
      lastChecked: new Date("2023-09-25T04:59:34.785Z"),
      status: 'active', 
      url: 'https://centurywines.com.sg/'
    },
    {
      name: 'culina',
      lastChecked: new Date("2023-09-24T22:30:52.592Z"),
      status: 'active', 
      url: 'https://eshop.culina.com.sg'
    },
    {
      name: 'wine.delivery',
      lastChecked: new Date("2023-09-25T06:42:19.445Z"),
      status: 'active', 
      url: 'https://wine.delivery'
    },
    {
      name: 'millesima',
      lastChecked: new Date("2023-09-25T05:53:55.979Z"),
      status: 'active', 
      url: 'https://www.millesima.sg'
    },
    {
      name: 'singaporewines',
      lastChecked: new Date("2023-09-25T19:26:15.336Z"),
      status: 'active', 
      url: 'https://www.singaporewines.com'
    },
    {
      name: 'winesonline',
      lastChecked: new Date("2023-09-25T22:08:13.715Z"),
      status: 'active', 
      url: 'https://winesonline.com.sg/'
    },
    {
      name: 'petersonwines',
      lastChecked: new Date("2023-09-24T21:55:25.242Z"),
      status: 'active', 
      url: 'https://www.petersonswines.com.sg'
    },
    {
      name: 'ewineasia',
      lastChecked: new Date("2023-09-25T06:20:40.762Z"),
      status: 'active', 
      url: 'https://ewineasia.com/'
    },
    {
      name: 'asiawinenetwork',
      lastChecked: new Date("2023-09-25T18:20:26.768Z"),
      status: 'active', 
      url: 'https://www.awn.com.sg'
    },
    {
      name: 'vinomofo',
      lastChecked: new Date("2023-09-24T20:23:54.319Z"),
      status: 'active', 
      url: 'https://www.vinomofo.com.sg'
    },
    {
      name: 'winehours',
      lastChecked: new Date("2023-09-24T21:25:05.470Z"),
      status: 'active', 
      url: 'https://winehours.com'
    },
    {
      name: 'providore',
      lastChecked: new Date("2023-09-25T20:20:33.864Z"),
      status: 'active', 
      url: 'https://shop.theprovidore.com'
    },
    {
      name: 'pontiwinecellars',
      lastChecked: new Date("2023-09-25T19:50:50.736Z"),
      status: 'active', 
      url: 'https://www.pontiwinecellars.com.sg/'
    },
    {
      name: 'bnb',
      lastChecked: new Date("2023-09-24T07:32:17.637Z"),
      status: 'active', 
      url: 'https://www.bnb.com.sg'
    },
    {
      name: 'wineconnection',
      lastChecked: new Date("2023-09-26T06:03:03.077Z"),
      status: 'active', 
      url: 'https://wineconnection.com.sg/'
    },
    {
      name: 'wineswholesales',
      lastChecked: new Date("2023-09-26T06:42:17.243Z"),
      status: 'active', 
      url: 'https://www.wineswholesales.com.sg'
    },
    {
      name: 'benchmarkwines',
      lastChecked: new Date("2023-09-26T21:38:32.848Z"),
      status: 'active', 
      url: 'https://benchmarkwines.com'
    },
    {
      name: 'theliquorshop',
      lastChecked: new Date("2023-09-25T18:01:31.965Z"),
      status: 'active', 
      url: 'https://www.theliquorshop.com.sg/'
    },
    {
      name: 'cornerstonewines',
      lastChecked: new Date("2023-09-26T21:06:26.115Z"),
      status: 'active', 
      url: 'https://shop.cornerstonewines.com/'
    },
    {
      name: 'winedelivery',
      lastChecked: new Date("2023-09-25T17:26:14.189Z"),
      status: 'active', 
      url: 'https://winedelivery.com/'
    },
    {
      name: 'thecellar',
      lastChecked: new Date("2023-09-23T19:21:47.384Z"),
      status: 'active', 
      url: 'https://thecellar.sg/collections'
    },
    {
      name: 'straitswines',
      lastChecked: new Date("2023-09-26T06:18:17.599Z"),
      status: 'active', 
      url: 'https://straitswine.com'
    },
    {
      name: 'winculture',
      lastChecked: new Date("2023-09-25T03:38:53.868Z"),
      status: 'active', 
      url: 'https://wineculture.com.sg/'
    },
    {
      name: 'popupwine',
      lastChecked: new Date("2023-09-24T18:42:00.210Z"),
      status: 'active', 
      url: 'https://popupwine.com.sg'
    }
  ]
}