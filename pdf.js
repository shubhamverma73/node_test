const express = require('express');
var app = express();
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("views/template.html", "utf8");
data = html.toString();

var options = {
	format: "A3",
	orientation: "portrait",
	border: "10mm",
	header: {
		height: "0mm", //45mm
		contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
	},
	footer: {
		height: "0mm", //25mm
		contents: {
			first: 'Cover page',
			2: 'Second page', // Any page number is working. 1-based index
			default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
			last: 'Last Page'
		}
	}
};

var users = [
	{
	  name: "Shyam",
	  age: "26",
	},
	{
	  name: "Navjot",
	  age: "26",
	},
	{
	  name: "Vitthal",
	  age: "26",
	},
];
var document = {
	html: html,
	data: {
	  users: users,
	},
	path: "./pdf/output.pdf",
	type: "",
};

app.get('/', (req, res) => {
    res.send(		
			pdf.create(document, options)
				.then((res) => {
					console.log(res);
				})
				.catch((error) => {
					console.error(error);
			})
	);
});

app.listen(700, () => {
    console.log('listeing the port 700');
});