const buff = Buffer.alloc(10);
buff.write('How r u');
console.log(buff);
console.log(buff.toString());


const buff2 = Buffer.from('How was your day?');
console.log(buff2);
console.log(buff2.toString());

/* It stores temporary storage in RAM. If our data is small peace than we can use Buffer. In javascript, there are no any machanish to read
binary data so that why we used Buffer class. It is used for fast transaction data,
and its memory is very less so that's why we should use small peace of data. */