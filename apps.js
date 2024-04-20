let myString = "tHis iS my mINi aSsiGNmENT";
myString = myString.toLowerCase();

let words = myString.split(" ");

let result = "";
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  result += words[i][0].toUpperCase() + word.slice(1);
}
console.log(result);
