let rows = 5;
let output = "";

for (let i = 0; i < rows; i++) {
  for (let j = 0; j <= i; j++) {
    output += "*";
  }
  output += "\n";
}

console.log(output);
