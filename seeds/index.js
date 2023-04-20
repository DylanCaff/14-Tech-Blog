const seedUser = require('./userSeeds')
const seedComment = require('./commentSeeds');
const seedPost = require('./postSeeds');


const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
  console.log('\n------USERS SEEDED-------\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedPost();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
