n = 20; 

var countPrimes = function (n) {
const record = new Array(n).fill(true);
record[0] = false;
record[1] = false;
for(let i = 2; i*i <n; i++) {
    for(let j = i*i; j < n; j+=i)   // j = i * i is to cross out the multiples of i
    record[j] = false
}

return record.filter(v => v).length
};

console.log(countPrimes(n));
