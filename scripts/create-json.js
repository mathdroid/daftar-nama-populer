const { writeFileSync } = require("fs");
const { join } = require("path");

const getTabel = require("./tabel");
const getDaftar = require("./daftar");

const tabel = getTabel();
const daftar = getDaftar();

writeFileSync(
  join(__dirname, "..", "names.json"),
  JSON.stringify({ names: [...tabel, ...daftar] })
);
