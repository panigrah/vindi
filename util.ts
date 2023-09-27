const temp = 
  [
    {
      url: 'https://www.75cl.sg/product-category/wines/',
      name: 'https://www.75cl.sg/',
      prefix: '75cl',
      meta: 'woocommerce',
      notes: 'disables if too many requests'
    },
    {
      url: 'https://www.awn.com.sg/our-products.html',
      name: 'https://www.awn.com.sg',
      prefix: 'asiawinenetwork',
      meta: 'woocommerce',
      notes: ''
    },
    {
      url: '  https://benchmarkwines.com.sg/product-category/singapore-online-wine-shop/?layout=list',
      name: 'https://benchmarkwines.com',
      prefix: 'benchmarkwines',
      meta: 'woocommerce',
      notes: ''
    },
    {
      url: 'https://www.bnb.com.sg/wine?limit=500',
      name: 'https://www.bnb.com.sg',
      prefix: 'bnb',
      meta: 'tbc'
    },
    {
      url: 'https://www.bnb.com.sg/wine?limit=500',
      name: 'https://www.bnb.com.sg',
      prefix: 'bnb',
      meta: 'tbc'
    },
    {
      url: 'https://boundbywine.com/collections/all',
      name: 'https://boundbywine.com',
      prefix: 'boundbywine',
      meta: 'shopify',
      notes: ''
    },
    {
      url: 'https://cellarbration.com.sg/all-wine.html?product_list_limit=60',
      name: 'https://cellarbration.com.sg/',
      prefix: 'cellarbration',
      meta: 'tbc',
      notes: 'custom magestore'
    },
    {
      url: 'https://centurywines.com.sg/product-category/wine/',
      name: 'https://centurywines.com.sg/',
      prefix: 'centurywines',
      meta: 'tbc',
      notes: 'woocommerce'
    },
    {
      url: 'https://cogitowines.com/online-shop-for-natural-wines-in-singapore/?product_view=list&product_count=60',
      name: 'https://cogitowines.com',
      prefix: 'cogitowines',
      meta: 'woocommerce',
      notes: 'simple layout and css - easy'
    },
    {
      url: 'https://shop.cornerstonewines.com/ajax_load_grid.php',
      base: 'https://shop.cornerstonewines.com/',
      prefix: 'cornerstonewines',
      meta: 'post and receive html from backend',
      notes: ''
    },
    {
      url: 'https://eshop.culina.com.sg/collections/wine',
      name: 'https://eshop.culina.com.sg',
      prefix: 'culina',
      meta: 'shopify',
      notes: 'throttles if too many requests from same IP - missing last couple of pages of data. Add delay'
    },
    {
      url: 'https://ewineasia.com/buy-wine-online&price_min=26.00&price_max=2816.00&limit=100',
      name: 'https://ewineasia.com/',
      prefix: 'ewineasia',
      meta: 'tbc',
      notes: ''
    },
    {
      url: 'https://www.grandvin.com.sg/12-wines',
      name: 'https://www.grandvin.com.sg',
      prefix: 'grandvin',
      meta: 'custom?',
      notes: ''
    },
    {
      url: 'https://www.theliquorshop.com.sg/collections/wine?view=view-48&grid_list=list-view',
      name: 'https://www.theliquorshop.com.sg/',
      prefix: 'theliquorshop',
      meta: 'woocommerce',
      notes: 'page size can only POST to backend.'
    },
    {
      url: 'https://www.millesima.sg/our-fine-wines.html',
      name: 'https://www.millesima.sg',
      prefix: 'millesima',
      meta: 'tbc',
      notes: 'not a singapore company - they ship their wines from abroad after order placed. Only does 6-12 bottle cases - can mix and match to make case also'
    },
    {
      url: 'https://www.petersonswines.com.sg/?rest_route=/withwine/api/wine/products?id=1474&pageSize=10000&channel=website&includeWebsiteStockCounts=true&includeAwards=true&includeOtherProducts=true&includeGiftCards=true&includeProductsThatAreVariations=false&includeCalculatedUserPrice=true&includeProductDetailImages=true&sessionKey=d01oCnDjIUhO4YJPJ6GbrK',
      name: 'https://www.petersonswines.com.sg',
      basepath: 'https://www.petersonswines.com.sg',
      prefix: 'petersonwines',
      meta: 'nextjs custom'
    },
    {
      url: 'https://www.pontiwinecellars.com.sg/3-wines',
      name: 'https://www.pontiwinecellars.com.sg/',
      prefix: 'pontiwinecellars',
      meta: 'custom efusiontech',
      notes: ''
    },
    {
      url: 'https://popupwine.com.sg/collections/all?page=1',
      name: 'https://popupwine.com.sg',
      prefix: 'popupwine',
      meta: 'tbc'
    },
    {
      url: 'https://shop.theprovidore.com/collections/wine',
      name: 'https://shop.theprovidore.com',
      prefix: 'providore',
      meta: 'shopify',
      notes: ''
    },
    {
      url: 'https://www.singaporewines.com/wine',
      name: 'https://www.singaporewines.com',
      prefix: 'singaporewines',
      meta: 'wix',
      notes: 'possibly angular site..'
    },
    {
      url: 'https://thestandish.rtlstore.net/wines-2?pagesize=9',
      name: 'https://thestandish.rtlstore.net',
      prefix: 'standish',
      meta: 'custom?',
      notes: ''
    },
    {
      url: 'https://straitswine.com/view-all-wines/',
      name: 'https://straitswine.com',
      prefix: 'straitswines',
      meta: 'woocommerce'
    },
    {
      url: 'https://www.templecellars.com/collections/wines',
      name: 'https://www.templecellars.com/',
      prefix: 'templecellars',
      meta: 'shopify'
    },
    {
      url: 'https://thecellar.sg/collections/all-wines',
      name: 'https://thecellar.sg/collections',
      prefix: 'thecellar',
      meta: 'shopify'
    },
    {
      url: 'https://nziokvneid-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia+for+JavaScript+(4.14.2)',
      name: 'https://www.vinomofo.com.sg',
      prefix: 'vinomofo',
      meta: 'reactjs algolia'
    },
    {
      url: 'https://wineculture.com.sg/shop?count=%2048&paged=',
      name: 'https://wineculture.com.sg/',
      prefix: 'winculture',
      meta: 'tbc',
      notes: 'woocommerce'
    },
    {
      url: 'https://wine.delivery/production/rest/V1/wd/products/search?wine[sort]=-updated_date&wine[q]=*&wine[currentPage]=1&wine[pageSize]=128&=',
      name: 'https://wine.delivery',
      prefix: 'wine.delivery',
      meta: 'nextjs custom'
    },
    undefined,
    {
      url: 'https://winedelivery.sg/product-category/wine/?ppp=96',
      name: 'https://winedelivery.com/',
      prefix: 'winedelivery',
      meta: 'woocommerce',
      notes: 'page size can only POST to backend.'
    },
    {
      url: 'https://winehours.com/products/wine-shop?limit=192',
      name: 'https://winehours.com',
      prefix: 'winehours',
      meta: 'tbc'
    },
    {
      url: 'https://winesonline.com.sg/collections/wines',
      name: 'https://winesonline.com.sg/',
      prefix: 'winesonline',
      meta: 'shopify'
    },
    {
      url: 'https://www.wineswholesales.com.sg/collections/all-products?view=32',
      name: 'https://www.wineswholesales.com.sg',
      prefix: 'wineswholesales',
      meta: 'tbc'
    }
  ]

  const b = [
    { name: "75cl", sdate: new Date("2023-09-25 11:23:54.049")},
    { name: "wws", sdate: new Date("2023-09-25 01:48:27.827")},
    { name: "templecellars", sdate: new Date("2023-09-24 05:48:15.602")},
    { name: "boundbywine", sdate: new Date("2023-09-27 05:12:58.545")},
    { name: "standish", sdate: new Date("2023-09-26 06:00:40.15")},
    { name: "bottleshop", sdate: new Date("2023-09-26 05:34:34.473")},
    { name: "cogitowines", sdate: new Date("2023-09-26 05:19:16.206")},
    { name: "cellarbration", sdate: new Date("2023-09-25 13:12:24.891")},
    { name: "grandvin", sdate: new Date("2023-09-26 04:54:16.192")},
    { name: "centurywines", sdate: new Date("2023-09-25 12:59:34.785")},
    { name: "culina", sdate: new Date("2023-09-25 06:30:52.592")},
    { name: "wine.delivery", sdate: new Date("2023-09-25 14:42:19.445")},
    { name: "millesima", sdate: new Date("2023-09-25 13:53:55.979")},
    { name: "singaporewines", sdate: new Date("2023-09-26 03:26:15.336")},
    { name: "winesonline", sdate: new Date("2023-09-26 06:08:13.715")},
    { name: "petersonwines", sdate: new Date("2023-09-25 05:55:25.242")},
    { name: "ewineasia", sdate: new Date("2023-09-25 14:20:40.762")},
    { name: "asiawinenetwork", sdate: new Date("2023-09-26 02:20:26.768")},
    { name: "vinomofo", sdate: new Date("2023-09-25 04:23:54.319")},
    { name: "winehours", sdate: new Date("2023-09-25 05:25:05.47")},
    { name: "providore", sdate: new Date("2023-09-26 04:20:33.864")},
    { name: "pontiwinecellars", sdate: new Date("2023-09-26 03:50:50.736")},
    { name: "bnb", sdate: new Date("2023-09-24 15:32:17.637")},
    { name: "wineconnection", sdate: new Date("2023-09-26 14:03:03.077")},
    { name: "wineswholesales", sdate: new Date("2023-09-26 14:42:17.243")},
    { name: "benchmarkwines", sdate: new Date("2023-09-27 05:38:32.848")},
    { name: "theliquorshop", sdate: new Date("2023-09-26 02:01:31.965")},
    { name: "cornerstonewines", sdate: new Date("2023-09-27 05:06:26.115")},
    { name: "winedelivery", sdate: new Date("2023-09-26 01:26:14.189")},
    { name: "thecellar", sdate: new Date("2023-09-24 03:21:47.384")},
    { name: "straitswines", sdate: new Date("2023-09-26 14:18:17.599")},
    { name: "winculture", sdate: new Date("2023-09-25 11:38:53.868")},
    { name: "popupwine", sdate: new Date("2023-09-25 02:42:00.21")},
  ]

const c = b.map( item => {
  return({
    ...item,
    url: temp.find(u => u?.prefix === item.name)?.basepath ||  temp.find(u => u?.prefix === item.name)?.base || temp.find(u => u?.prefix === item.name)?.name
  })
})

console.log(c)