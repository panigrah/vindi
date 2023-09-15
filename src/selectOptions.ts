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
    {name: "Lemon Green"},
    {name: "Lemon"},
    {name: "Gold"},
    {name: "Amber"},
    {name: "Brown"},
    {name: "Pink"},
    {name: "Salmon"},
    {name: "Orange"},
    {name: "Purple"},
    {name: "Ruby"},
    {name: "Garnet"},
    {name: "Tawney"},
]

export const conditionOptions = [
    {name: "Clean"},
    {name: "Unclean (faulty)"}
]

export const noseIntesityOptions = [
    {name: "Light"},
    {name: "Medium-"},
    {name: "Medium"},
    {name: "Medium+"},
    {name: "High"},
]

export const developmentOptions = [
    {name: "Youthful"},
    {name: "Developing"},
    {name: "Fully Developed"},
    {name: "Tired, past best"},
]

export const sweetnessOptions = [
    {name: "Dry"},
    {name: "Off Dry"},
    {name: "Medium Dry"},
    {name: "Medium Sweet"},
    {name: "Sweet"},
    {name: "Luscious"},
]

export const acidityOptions = [
    {name: "Light"},
    {name: "Medium-"},
    {name: "Medium"},
    {name: "Medium+"},
    {name: "High"},
]

export const tanninOptions = [
    {name: "Light"},
    {name: "Medium-"},
    {name: "Medium"},
    {name: "Medium+"},
    {name: "High"},
]

export const alcoholOptions = [
    {name: "Light"},
    {name: "Medium-"},
    {name: "Medium"},
    {name: "Medium+"},
    {name: "High"},
]

export const bodyOptions = [
    {name: "Light"},
    {name: "Medium-"},
    {name: "Medium"},
    {name: "Medium+"},
    {name: "Full"},
]

export const flavorIntensityOptions = [
    {name: "Light"},
    {name: "Medium-"},
    {name: "Medium"},
    {name: "Medium+"},
    {name: "Pronounced"},
]

export const finishOptions = [
    {name: "Short"},
    {name: "Medium-"},
    {name: "Medium"},
    {name: "Medium+"},
    {name: "Long"},
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

export const aromaList = () => {  
  const averageColors = (aromaName: string) => {
    console.log('averaging colors for: ', aromaName)
    const rgb = aromaWheel
      .filter(a => a.family === aromaName)
      .reduce( (prev, item,_, array) => {
        const color = item.color ? item.color : getColor(item.name)
        if(!color) return ({ r: 0, g: 0, b: 0})
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
          console.log('rgb', color, result)
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
  return aromaWheel.map(aroma => ({ ...aroma, color: getColor(aroma.name)}))
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
  
    { family: "root", name: "Herbacious", color: ""},
    { family: "Herbacious", name: "Fresh", color: ""},
      { family: "Fresh", name: "Cut Green grass", color: "#558367"},
      { family: "Fresh", name: "Bell Pepper", color: "#4E6314"},
      { family: "Fresh", name: "Equalyptus", color: "#5F8575"},
      { family: "Fresh", name: "Mint", color: "#009E6D"},
  
    { family: "Herbacious", name: "Canned/Cooked", color: ""},
      { family: "Canned/Cooked", name: "Green bean", color: "#A98B42"},
      { family: "Canned/Cooked", name: "Asparagus", color: "#87A96B"},
      { family: "Canned/Cooked", name: "Green olive", color: "#8D8B55"},
      { family: "Canned/Cooked", name: "Black olive", color: "#3C3D36"},
      { family: "Canned/Cooked", name: "Artichoke", color: "#8F9779"},
  
    { family: "Herbacious", name: "Dried", color: ""},
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