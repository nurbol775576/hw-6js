

function getAverage(num){
let sum = 0

for(i=0; i<num.length; i++){
 sum += num[i]
}

return sum/num.length

}

console.log(getAverage([2,7,4,8,7,5]));
getAverage()
