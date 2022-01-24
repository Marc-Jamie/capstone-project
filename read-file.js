import { readFile } from "fs/promises";

readFile("./hello.json", "utf8").then((data) => {
  console.log(JSON.parse(data));
});
