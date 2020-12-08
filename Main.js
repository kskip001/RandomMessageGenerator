// Random Message Generator --- Aquascape Design

//Setup random plants
const plants = ['Anubias','Monte Carlo','HC Cuba','Pearlweed','S. Repens','Salvinia','Crypt Wendii','Crypt Pavelli','Buce - Wavy Green','Buce - Narrow Red'];

//Setup random livestock
const livestock = ['Neon Tetras','Chili Rasboras', 'Pea Puffers','Bettas','Pygmy Corys','Cherry Shrimp','Nerite Snails'];

//Setup random hardscape
const hardscape = ['Dragon Stone','Seiryu','Mopani Wood','Spider Wood','Iron Wood','Gravel','Sand','Terraced Rock'];

//Setup random theme
const theme=['Jungle', 'Iwagumi', 'Dutch','Brazillian','Taiwanese', 'Biotope','Walstad','Nature'];

//Setup random layout
const layout = ['Concave','Big Triangle','Golden Ratio - Plant Feature','Golden Ratio - Hardscape Feature','Golden Ratio - Empty Space','Convex','Sloped'];

//Select all random components needed to build final string

ranPlant = plants[Math.floor(Math.random()*plants.length)];
ranPlant2 = plants[Math.floor(Math.random()*plants.length)];
ranLivestock = livestock[Math.floor(Math.random()*livestock.length)];
ranHardscape = hardscape[Math.floor(Math.random()*hardscape.length)];
ranTheme = theme[Math.floor(Math.random()*theme.length)];
ranLayout = layout[Math.floor(Math.random()*layout.length)];

const randomAquascape = `Random Aquascape Layout: ${ranTheme} style tank with a ${ranLayout} layout using ${ranHardscape}, ${ranPlant}, ${ranPlant2}, and stocking it with ${ranLivestock}`;
console.log(randomAquascape);