

function HandlePrice(){
    let TotalKiloPrice = document.getElementById("kiloPrice")
    let TotalQunatityPrice = document.getElementById("quantity")
    let totalGrams = document.getElementById("TotalGrams")
    let KiloGrams = 1000
let check = KiloGrams / TotalKiloPrice.value
let check1 = check * TotalQunatityPrice.value

totalGrams.innerHTML = `<p>  Total Grams give ${check1.toFixed(2)}</p> 
Total Amount ${TotalQunatityPrice.value}
`
totalGrams.style.color ="green"
}

