import { writeFile } from "fs";
const data = "Data to be written to file";
writeFile("output.txt", data, (err) => {
	if (err) throw err;
	console.log("Data written to file");
});
