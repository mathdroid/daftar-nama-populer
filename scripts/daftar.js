const { readFileSync } = require("fs");
const { join } = require("path");

const getNames = () => {
  const raw = readFileSync(join(__dirname, "..", "data", "daftar.txt"), {
    encoding: "utf-8"
  });
  const names = [];

  const lines = raw.split("\n");
  for (const line of lines) {
    const entries = line.split(", ");
    console.log(entries.length);
    const rawNames = entries.map(entry => entry.split(" ")[1]);
    rawNames.forEach(name => {
      names.push(name);
    });
    return names;
  }
};

module.exports = getNames;
