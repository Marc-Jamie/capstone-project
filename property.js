import { readFile, writeFile } from "fs/promises";
import process from "process";
// import process from "node:process"; <- more precise (only works in nodejs)

readFile("./hello.json", "utf8")
  //first step: parse string to JSON
  .then((data) => {
    return JSON.parse(data);
  })
  //second step: modify the object
  .then((data) => {
    const [key, value] = process.argv.slice(2);
    // data.name = value;
    data[key] = value;
    return data;
  })
  //third step: update object to file
  .then((data) => {
    writeFile("hello.json", JSON.stringify(data, null, 4));
  });
