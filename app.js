// import { promises as fs } from "fs";
import { writeFile, readFile } from "fs/promises";

console.log("Hello world");

writeFile("foo", " anderes");

writeFile("hello.json", JSON.stringify({ x: 5, y: 6 }, null, 4));

readFile("hello.json", "utf8").then((data) => {
  console.log(JSON.parse(data));
});
