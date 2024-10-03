// I have 1 kg of rice and it;s price 280 kilo and some one want 30 rs how much it cost How it will it's gram

function KiloCounter (Kilo , Price , ){
let TotalGrams = 1000
let gram =  TotalGrams / Kilo
console.log(gram)
let totalgive = gram * Price
return "Total Grams" + totalgive.toFixed(2)
+ "totalPrice" + Price 


}

console.log(KiloCounter(  20,  15)) //500 gran