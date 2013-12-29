console.log(process.argv)
var i = 2;
var sum = 0;
while(i<5){
  sum += Number(process.argv[i])
  i++;
}
console.log(sum)
