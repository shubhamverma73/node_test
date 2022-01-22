var jwt = require('jsonwebtoken');

var token = jwt.sign({ id: '987123' }, 'Sec$%159');
console.log(token);
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4NzEyMyIsImlhdCI6MTY0MjM2NzM2OX0.0w4I2zltjd23L7PgNi2Vo8ad5cNoSGV-qylizKwUTQM

var decoded = jwt.verify(token, 'Sec$%159');
console.log(decoded);
//{ id: '987123', iat: 1642367369 }