const { readFileSync } = require("fs");
const { join } = require("path");

const getNames = () => {
  const raw = readFileSync(join(__dirname, "..", "data", "tabel.txt"), {
    encoding: "utf-8"
  });

  const lines = raw.split("\n");
  const names = lines.map(line => line.split("\t")[1]);
  return names;
};

module.exports = getNames;
