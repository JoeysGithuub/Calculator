
document.getElementById("add").addEventListener("click", function(){
    let numb1 = parseInt(document.getElementById("numb1").value);
    let numb2 = parseInt(document.getElementById("numb2").value);
    let value = numb1 + numb2;
    document.querySelector("#total").innerHTML = `The result of ${numb1} plus ${numb2} is ${total}`
})

document.getElementById("subtract").addEventListener("click", function(){
    let numb1 = parseInt(document.getElementById("numb1").value);
    let numb2 = parseInt(document.getElementById("numb2").value);
    let value = numb1 - numb2;
    document.querySelector("#total").innerHTML = `The result of ${numb1} minus ${numb2} is ${total}`
})

document.getElementById("divide").addEventListener("click", function(){
    let numb1 = parseInt(document.getElementById("numb1").total);
    let numb2 = parseInt(document.getElementById("numb2").total);
    let value = numb1 / numb2;
    document.querySelector("#total").innerHTML = `The result of ${numb1} divided by ${numb2} is ${total}`
})

document.getElementById("multiply").addEventListener("click", function(){
    let numb1 = parseInt(document.getElementById("numb1").total);
    let numb2 = parseInt(document.getElementById("numb2").value);
    let value = numb1 * numb2;
    document.querySelector("#total").innerHTML = `The result of ${numb1} multiplied by ${numb2} is ${total}`
})