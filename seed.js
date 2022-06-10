require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// Pattern:  IIFE
(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'T-Shirts', sortOrder: 10},
    {name: 'Crop-Top', sortOrder: 20},
    {name: 'Sweatshirts', sortOrder: 30},
    
    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Champagne Diet', image: ['https://i.imgur.com/aKgoa2L.jpg', 'https://i.imgur.com/BJLpWc0.jpg' ], category: categories[0], price: 44.95},
    {name: 'Save Water Drink Champagne', image: 'https://i.imgur.com/S3BgU14.jpg', category: categories[0], price: 44.95},
    {name: 'Logo Back', image: 'https://i.imgur.com/zfJOgtP.jpg', category: categories[0], price: 44.95},
    {name: 'Logo Front', image: 'https://i.imgur.com/h8oDNZW.jpg', category: categories[0], price: 44.95},
    {name: 'Beverly Hills Club', image: 'https://i.imgur.com/7wDigCC.jpg', category: categories[0], price: 44.95},
    {name: 'Classic Bitch', image: 'https://i.imgur.com/xbEG1lf.jpg', category: categories[0], price: 44.95},
    {name: 'Good Vibes Only', image: 'https://i.imgur.com/0JxwvKd.jpg', category: categories[1], price: 41.95},
    {name: 'Know Your Worth then add tax', image: ['https://i.imgur.com/TXgmZqd.jpg', 'https://i.imgur.com/WOJgx8S.jpg'], category: categories[2], price: 59.95},
    {name: 'Brooklyn', image: 'https://i.imgur.com/sDwJHHZ.jpg', category: categories[2], price: 59.95},
    {name: 'Rebel Rebel', image: ['https://i.imgur.com/pYz3k6V.jpg', 'https://i.imgur.com/EWe2ChN.jpg'], category: categories[2], price: 59.95},
    {name: 'Malibu', image: 'https://i.imgur.com/iui9mz3.jpg', category: categories[2], price: 59.95},
    {name: 'Find Something Positive Every Moment', image: ['https://i.imgur.com/q059L4E.jpg', 'https://i.imgur.com/llIPice.jpg'], category: categories[2], price: 59.95},

  ]);

  console.log(items)

  process.exit();

})();