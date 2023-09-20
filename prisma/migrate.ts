import prisma from "@/utils/db";

const images = [
  {
    public_id: "vindiary/dtu9rrvtjkjofi57flxb",
    url: "http://res.cloudinary.com/hyrme/image/upload/v1695172566/vindiary/dtu9rrvtjkjofi57flxb.png",
    format: "png",
    width: 204,
    height: 373,
    original_filename: "cline-ancient-vines-zinfandel",
    asset_id: "3634b4e267c04a9ba80a1a9c13a9ec2d",
    bytes: 57833
  },
  {
    public_id: "vindiary/f4dk9vhgukqdkxfhvgwz",
    url: "http://res.cloudinary.com/hyrme/image/upload/v1695172570/vindiary/f4dk9vhgukqdkxfhvgwz.png",
    format: "png",
    width: 429,
    height: 515,
    original_filename: "matua-sauvignon-blanc",
    asset_id: "4a5db67817ca7e6977f9fcae693a5759",
    bytes: 280584
  },
  {
    public_id: "vindiary/dbrq26lfoe0ahmbd04an",
    url: "http://res.cloudinary.com/hyrme/image/upload/v1695172576/vindiary/dbrq26lfoe0ahmbd04an.jpg",
    format: "jpg",
    width: 1440,
    height: 1318,
    original_filename: "martin-ray-sonoma-coast-pinot-noir",
    asset_id: "f22a8859f66e49024d0105e38b1dc0c9",
    bytes: 69173
  },
  {
    public_id: "vindiary/j5cud3k1owencpcklbw8",
    url: "http://res.cloudinary.com/hyrme/image/upload/v1695172581/vindiary/j5cud3k1owencpcklbw8.png",
    format: "png",
    width: 408,
    height: 455,
    original_filename: "kendall-jackson-vintners-reserve-chardonnay",
    asset_id: "ff00160be945cb1150b9012a724ebb11",
    bytes: 238999
  },
  {
    public_id: "vindiary/d7ym4yf420ixxdqcig3m",
    url: "http://res.cloudinary.com/hyrme/image/upload/v1695172585/vindiary/d7ym4yf420ixxdqcig3m.png",
    format: "png",
    width: 239,
    height: 329,
    original_filename: "double-canyon-heaven-hills-cabernet-sauvignon",
    asset_id: "829fde0163523bb50acd7bb55fa877a4",
    bytes: 177215
  }
]

async function migrate1() {
  const wines = await prisma.wine.findMany()
  for(let i=0; i < wines.length; i++) {
    const w = wines[i]
    if(w.media.length > 0 && !(w.images?.length)) {
      const [wine_slug] = w.media[0].split('.')
      const image = images.find(i => wine_slug?.endsWith(i.original_filename));
      if(image) {
        console.log('updating entry: ', w.id, wine_slug, image?.public_id, image?.original_filename)
        await prisma.wine.update({ where:  { id: w.id }, data: { images: [image]}})
      } else {
        console.log("updating entry: Unable to find matching image - ", w.id, wine_slug)
      }
    } else {
      console.log('skipping entry: ', w.id, w.name, ' - already includes image')
    }
  }
}

migrate1()