//console.log(process.argv[3])
var i = 2;
var sum = 0;
while(process.argv[i] != undefined){
  sum += Number(process.argv[i])
  i++;
}
console.log(sum)
