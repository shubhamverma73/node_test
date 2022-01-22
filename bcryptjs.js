var bcrypt = require('bcryptjs');

const pass = bcrypt.hashSync("India@123", 12);
console.log(pass); //$2a$12$BVOox01j8YFHN2WNhfxVduXzyVROzWOLUC2j31aejLfQQMok1VUqW

const isMatch = bcrypt.compareSync('India@123', pass);
console.log(isMatch); //true