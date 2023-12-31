import slugify from "slugify"

export const clarityOptions = [
    {name: "Clear"},
    {name: "Hazy", color: ""}
]

export const appearanceIntensityOptions = [
    {name: "Pale"},
    {name: "Medium"},
    {name: "Deep"}
]

export const colorOptions = [
    {name: "Lemon Green", color: "#ADF802"},
    {name: "Lemon", color: "#FAFA33"},
    {name: "Gold", color: "#FFD700"},
    {name: "Amber", color: "#FFBF00" },
    {name: "Brown", color: "#964B00"},
    {name: "Pink", color: "#FFC0CB"},
    {name: "Salmon", color: "#fa8072"},
    {name: "Orange", color: "#FFA500"},
    {name: "Purple", color: "#800080"},
    {name: "Ruby", color: "#E0115F"},
    {name: "Garnet", color: "#733635"},
    {name: "Tawney", color: "#643a48"},
]

export const wineColors = [
  {name: "Lemon Green", color: "#F0EEC0", family: "whites"},
  {name: "Lemon", color: "#E5E192", family: "whites"},
  {name: "Gold", color: "#F2C64F", family: "whites"},
  {name: "Amber", color: "#F4952C", family: "whites"},
  {name: "Brown", color: "#1F150F", family: "whites-hidden"},
  {name: "Purple", color: "#470A1E", family: "reds"},
  {name: "Ruby", color: "#55081D", family: "reds"},
  {name: "Garnet", color: "#6D0D15", family: "reds"},
  {name: "Tawney", color: "#94291C", family: "reds"},
  {name: "Brown", color: "#32110E", family: "reds"},
  {name: "Pink", color: "#FEB1C0", family: "pink"},
  {name: "", color: "#FC7CC0", family: "pinks-hidden"},
  {name: "Salmon", color: "#FC658C", family: "pink"},
  {name: "", color: "#F72A63", family: "pinks-hidden"},
  {name: "Orange", color: "#F83F45", family: "pink"},
]

export const conditionOptions = [
    {name: "Clean"},
    {name: "Unclean (faulty)"}
]

export const noseIntensityOptions = [
    {name: "Light"},
    {name: "Medium-"},
    {name: "Medium"},
    {name: "Medium+"},
    {name: "High"},
]

export const developmentOptions = [
    {name: "Youthful", description: "Fruity and floral from the grapes - green, citrus, stone, tropical"},
    {name: "Developing", description: "Fruity and floral with hints of oaky, nutty, buttery, creamy aromas"},
    {name: "Fully Developed", description: "Fruity and floral aromas balanced with oak, nuts, coffee, toffee, caramel, chocolate, vanilla, toast, mushrooms"},
    {name: "Tired, past best", description: "Dark notes overpower the fruity and floral aromas"},
]

export const sweetnessOptions = [
    {name: "Dry", description:"Less than 4g/L. Less than one tsp of sugar in a liter"},
    {name: "Off Dry", description:"between 5-9g/L. Between one to two tsp of sugar in a liter"},
    {name: "Medium Dry", description:"between 10-18g/L. 1 to 1.5 tbsps of sugar in a liter"},
    {name: "Medium Sweet", description:"between 19-45g/L. This is as much as one tablespoon of sugar in a cup of coffee or tea."},
    {name: "Sweet", description: "Above 45g/L. Now you are going much sweeter than a tablespoon in your cup and upto 1.5 times the sugar in a regular coke or pepsi 108g/L) "},
    {name: "Luscious", description: "Over 150g/L. This well sweeter than a can of coke. Now you are thinking sweet desserts and ice-cream"},
]

//https://jackyblisson.com/acidity-in-wine/
export const acidityOptions = [
    {name: "Light", description: "Described as flabby, none to little saliva production. Think of milk even water."},
    {name: "Medium-", description: "Moderate and round - look for about as much acidity as in a black coffee or even tomato juice"},
    {name: "Medium", description: "Described as Crisp, like a fresh squeezed lemonade, or a red apple. Its not overpoweringly acidic and generates a moderate amount of saliva."},
    {name: "Medium+", description: "Described as Zesty. A tart green apple for example. You get a rush of saliva all over but its still enjoyable."},
    {name: "High", description: "Sharp, jagged, tart - your mouth puckers."} ,
]

export const tanninOptions = [
    {name: "Light", description: "No dryness sensation in the mouth after drinking"},
    {name: "Medium-", description: "in between Light and Medium"},
    {name: "Medium", description: "Dryness similar to that from eating walnuts, pomegranates, ripe bananas, grapes"},
    {name: "Medium+", description: "in between Medium and High. The mouthfeel may be that of soft fur, suede, perhaps the taste of certain unripe fruits like bananas, grapes"},
    {name: "High", description: "Chalky, abrasive, grainy and similar sensation to an over-extracted black tea, mouth puckering"},
]

export const alcoholOptions = [
    {name: "Low", description: "< 10.5%"},
    {name: "Medium-", description: "10.5-11.5%%"},
    {name: "Medium", description: "12-13% - begins to be noticeable as a warming sesation at the back of your throat"},
    {name: "Medium+", description: "13-14%"},
    {name: "High", description: "> 14% - warming at back of throat is intense and immediately noticeable"},
]

export const bodyOptions = [
    {name: "Light", description: "Feels like water in your mouth; just a water with artificial flavoring. Has the texture of skimmed milk. The wine does not coat the insides of your mouth if you swirl it."},
    {name: "Medium-", description: "Between Light and Medium"},
    {name: "Medium", description: "In the middle; with the texture of a semi-skimmed milk, there is some coating left in your mouth."},
    {name: "Medium+", description: "Between Medium and Full"},
    {name: "Full", description: "Feel like a juice with pulp, or a full fat milk with a lot of things going on and a bite to it. You can almost chew it. A full-bodied wine will coat your mouth and move around your mouth slowly. It will feel thicker and heavier."},
]

export const flavorIntensityOptions = [
    {name: "Light", description: "Flavors are faint and difficult to capture. It takes time for the flavors to appear in your mouth."},
    {name: "Medium-", description: "You can taste flavors but identifying the flavors is difficult because they are faint or the flavors are easily identified as simple flavors"},
    {name: "Medium", description: "In between Light and Pronounced"},
    {name: "Medium+", description: "Flavors are prominent in your mouth, but easily identifiable and not very complex."},
    {name: "Pronounced", description: "Flavors are strong and concentrated. You only need a little bit of wine to get the flavors appear in your mouth. Flavors are complex - but identifiable."},
]

export const finishOptions = [
    {name: "Short", description: "Lasts a couple of seconds and stops adruptly"},
    {name: "Medium-", description: ""},
    {name: "Medium", description: "Lasts 6-10seconds"},
    {name: "Medium+", description: ""},
    {name: "Long", description: "Lasts for 20 seconds"},
]

export const qualityLevelOptions = [
    {name: "Poor"},
    {name: "Acceptable"},
    {name: "Good"},
    {name: "Very Good"},
    {name: "Outstanding"},
]

export const readinessOptions = [
    {name: "Can Drink now (aging potential)"},
    {name: "Drink now (not suitable for aging)"},
    {name: "Too Old"},
]

type EntryType = {
  name: string;
  value: number;
  color?: string;
  children: EntryType[]
}

export const aromaTree = () => {
  const aromas = aromaList()
  const getChildren = (name: string) => aromas.filter(f => f.family === name).map( f => ({ name: f.name, color: f.color, value: 1, children: [] as EntryType[]}))
  const data = {name: "root", children: getChildren('root')}
  data.children.forEach(f => {
    f.children.push(...getChildren(f.name))
    f.children.forEach(c => {
      c.children.push(...getChildren(c.name))
    })
  })
  return data;
}

const mediaFilePath = (aromaName: string) => {
  const slug = slugify(aromaName, { lower: true, strict: true, trim: true})
  return `/aromas/${slug}.png`
}

export const aromaList = () => {  
  const averageColors = (aromaName: string) => {
    const rgb = aromaWheel
      .filter(a => a.family === aromaName)
      .reduce( (prev, item,_, array) => {
        const color = item.color ? item.color : getColor(item.name)
        if(!color) return ({ r: 0, g: 0, b: 0})
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
          if(result) {
            prev.r += parseInt(result[1], 16)/array.length
            prev.g += parseInt(result[2], 16)/array.length
            prev.b += parseInt(result[3], 16)/array.length
          }
          return prev
        }, {r: 0, g: 0, b: 0})
    return "#" + (1 << 24 | rgb.r << 16 | rgb.g << 8 | rgb.b).toString(16).slice(1);
  }

  const getColor = (aromaName: string) => {
    if(aromaWheel.find(a => a.name == aromaName)?.color) {
      return aromaWheel.find(a => a.name == aromaName)?.color
    }
    //calculate average of the colors of each of the children..
    return averageColors(aromaName)
  }
  return aromaWheel.map(aroma => ({ ...aroma, color: getColor(aroma.name), media: mediaFilePath(aroma.name)}))
}

export const aromaWheel = [
    { family: "root", name: "Fruity", color: ""},
    { family: "Fruity", name: "Citrus", color: ""},
      { family: "Citrus", name: "Grapefruit", color: "#CC4D46"},
      { family: "Citrus", name: "Lemon", color: "#FFFF9F"},
  
    { family: "Fruity", name: "Berry", color: ""},
      { family: "Berry", name: "Blackberry", color: "#262826"},
      { family: "Berry", name: "Raspberry", color: "#E30B5C"},
      { family: "Berry", name: "Strawberry", color: "#9A1900"},
      { family: "Berry", name: "Black currant",color: "#492950"},
  
    { family: "Fruity", name: "Tree Fruit", color: ""},
      { family: "Tree Fruit", name: "Cherry", color: "#84172C"},
      { family: "Tree Fruit", name: "Apricot", color: "#FADCD6"},
      { family: "Tree Fruit", name: "Peach", color: "#F0A484"},
      { family: "Tree Fruit", name: "Apple", color: "#C7372F"},
    
    { family: "Fruity", name: "Tropical Fruit", color: ""},
      { family: "Tropical Fruit", name: "Lychee", color: "#DC5349"},
      { family: "Tropical Fruit", name: "Pineapple", color: "#FEEA63"},
      { family: "Tropical Fruit", name: "Melon", color: "#F69268"},
      { family: "Tropical Fruit", name: "Banana", color: "#F1CF2E"},
  
    { family: "Fruity", name: "Dried/Cooked Fruit", color: ""},
      { family: "Dried/Cooked Fruit", name: "Strawberry (jam)", color: "#8B171A"},
      { family: "Dried/Cooked Fruit", name: "Raisin", color: "#100818"},
      { family: "Dried/Cooked Fruit", name: "Prune", color: "#1F1D30"},
      { family: "Dried/Cooked Fruit", name: "Fig", color: "#573B4C"},
  
    { family: "Fruity", name: "Other fruity", color: ""},
      { family: "Other fruity", name: "Artificial Fruit", color: "#538B45"},
      { family: "Other fruity", name: "Methyl Anthranilate (foxy)", color: "#f595f6"},
  
    { family: "root", name: "Herbaceous", color: ""},
    { family: "Herbaceous", name: "Fresh", color: ""},
      { family: "Fresh", name: "Cut Green grass", color: "#558367"},
      { family: "Fresh", name: "Bell Pepper", color: "#4E6314"},
      { family: "Fresh", name: "Equalyptus", color: "#5F8575"},
      { family: "Fresh", name: "Mint", color: "#009E6D"},
  
    { family: "Herbaceous", name: "Canned/Cooked", color: ""},
      { family: "Canned/Cooked", name: "Green bean", color: "#A98B42"},
      { family: "Canned/Cooked", name: "Asparagus", color: "#87A96B"},
      { family: "Canned/Cooked", name: "Green olive", color: "#8D8B55"},
      { family: "Canned/Cooked", name: "Black olive", color: "#3C3D36"},
      { family: "Canned/Cooked", name: "Artichoke", color: "#8F9779"},
  
    { family: "Herbaceous", name: "Dried", color: ""},
      { family: "Dried", name: "Hay/Straw", color: "#C2A770"},
      { family: "Dried", name: "Tea", color: "#4C1208"},
  
    { family: "root", name: "Nutty", color: ""},
      { family: "Nutty", name: "Walnut", color: "#B28965"},
      { family: "Nutty", name: "Hazelnut", color: "#B85F2F"},
      { family: "Nutty", name: "Almond", color: "#EED9C4"},
  
    { family: "root", name: "Caramel", color: "#DE793C"},
      { family: "Caramel", name: "Honey", color: "#E0A761"},
      { family: "Caramel", name: "Butterscotch", color: "#E19640"},
      { family: "Caramel", name: "Butter", color: "#F5E8AA"},
      { family: "Caramel", name: "Soy Sauce", color: "#702D08"},
      { family: "Caramel", name: "Chocolate", color: "#513235"},
      { family: "Caramel", name: "Molasses", color: "#74563D"},
  
    { family: "root", name: "Woody", color: "#9D6C3C"},
      { family: "Woody", name: "Resinous", color: ""},
        {family: "Resinous", name: "Tobacco", color: "#6C3821"},
        {family: "Resinous", name: "Oak", color: "#87633A"},
        {family: "Resinous", name: "Cedar", color: "#928E64" },
        {family: "Resinous", name: "Vanilla", color: "#FCF8E8" },
  
      { family: "Woody", name: "Phenolic", color: ""},
        { family: "Phenolic", name: "Medicinal", color: "#FFFA68", notes: "Iodoform"},
        { family: "Phenolic", name: "Bacon", color: "#E53B3B"},
  
      { family: "Woody", name: "Burned", color: "#A66445"},
        { family: "Burned", name: "Smokey", color: "#5E6064"},
        { family: "Burned", name: "Burnt Toast", color: "#CA9978"},
        { family: "Burned", name: "Coffee", color: "#3C302F"},
  
    { family: "root", name: "Earthy", color: ""},
      { family: "Earthy", name: "Dirt", color: "#9B7653"},
        { family: "Dirt", name: "Mushroom Dusty", color: "#2C2520"},
        { family: "Dirt", name: "Dusty", color: "#B2AA98"},
  
      { family: "Earthy", name: "Moldy", color: ""},
        { family: "Moldy", name: "Moldy Cork", color: "#A5846A"},
  
    { family: "root", name: "Chemical", color: ""},
      { family: "Chemical", name: "Pungent", color: ""},
        { family: "Pungent", name: "Vinegar (Acetic acid)", color: "#BBCB73"},
        { family: "Pungent", name: "Nail Polish Remover (Ethyl Acetate)", color: "#BD4E84"},
        { family: "Pungent", name: "Sulfur Dioxide", color: "#FEFB64"},
  
      { family: "Chemical", name: "Sulphur", color: ""},
        { family: "Sulphur", name: "Wet dog/wool", color: "#E5AA70"},
        { family: "Sulphur", name: "Burnt match", color: "#473C39"},
        { family: "Sulphur", name: "Cooked Cabbage", color: "#CCBC5E"},
        { family: "Sulphur", name: "Skunk", color: "#807F7C"},
        { family: "Sulphur", name: "Garlic", color: "#B0AAA1"},
        { family: "Sulphur", name: "Natural Gas (mercaptan)", color: "#1A81C0"},
        { family: "Sulphur", name: "Rotten Eggs (Hydrogen Sulfide)", color: "#291A17"},
        { family: "Sulphur", name: "Rubber", color: "#7D8A88"},
  
      { family: "Chemical", name: "Petroleum", color: ""},
        { family: "Petroleum", name: "Diesel", color: "#1C6A51"},
        { family: "Petroleum", name: "Kerosene", color: "#6F2409"},
        { family: "Petroleum", name: "Plastic", color: "#291E1D"},
        { family: "Petroleum", name: "Tar", color: "#706E6A"},
    
    { family: "root", name: "Oxidized", color: ""},
      { family: "Oxidized", name: "Sherry", color: "#692F17"},
    
    { family: "root", name: "Microbiological", color: ""},
      { family: "Microbiological", name: "Lactic", color: ""},
        { family: "Lactic", name: "Yogurt", color: "#F2EED2"},
        { family: "Lactic", name: "Sweaty", color: "#AA7160"},
        { family: "Lactic", name: "Saurekraut", color: "#E8D5AF"},
  
      { family: "Microbiological", name: "Yeasty", color: ""},
        { family: "Yeasty", name: "Leesy", color: "#E6DBBD", notes: "creamy, specially in sparkling wines"},
        { family: "Yeasty", name: "Baker's Yeast", color: "#FDF4DC"},
  
      { family: "Microbiological", name: "Other", color: ""},
        { family: "Other", name: "Mousey", color: "#6B6E6B"},
        { family: "Other", name: "Horsey", color: "#8D5F4C"},
  
    { family: "root", name: "Floral", color: ""},
      { family: "Floral", name: "Geranium", color: "#AE5B6C "},
      { family: "Floral", name: "Violet", color: "#513E64"},
      { family: "Floral", name: "Rose", color: "#C51959"},
      { family: "Floral", name: "Linalool (Earl Gray Tea)", color: "#5A2121"},
      { family: "Floral", name: "Orange Blossom", color: "#FF7300"},
   
    { family: "root", name: "Spicy", color: ""},
      { family: "Spicy", name: "Licorice/Anise", color: "#B0AC98"},
      { family: "Spicy", name: "Black Pepper", color: "#5D5951"},
      { family: "Spicy", name: "Clove", color: "#876155"},
  ]
  
  export const colorList = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];