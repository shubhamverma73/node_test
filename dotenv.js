const dotenv = require('dotenv');
const path = require('path');

const envpath = path.join(__dirname, "./");
dotenv.config({ path: envpath + 'config.env' });

console.log(process.env.PORT);
console.log(process.env.SECRET_KEY);
console.log(process.env.DATABASE);