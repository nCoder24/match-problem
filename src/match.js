const fs = require("fs");

const match = (set1, set2, matchLength = 4) => {
  const referenceTable = Object.fromEntries(
    set2.map((input) => [input.slice(0, matchLength), input.slice(matchLength)])
  );

  return set1.map(
    (input) => input + referenceTable[input.substr(-matchLength)]
  );
};

const readFile = (file) => {
  try {
    return fs.readFileSync(file, "utf-8");
  } catch {
    console.log("Error reading file");
  }
};

const parse = (text) => text.trim().split("\n");

const main = () => {
  const [inputset1File, inputset2File] = process.argv.slice(2);
  const [set1Contents, set2Contents] = [
    readFile(inputset1File),
    readFile(inputset2File),
  ];
  const [firstSet, secondSet] = [parse(set1Contents), parse(set2Contents)];

  console.log(match(firstSet, secondSet).join("\n"));
};

main();

exports.match = match;