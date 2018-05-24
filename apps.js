
document.getElementById("add").addEventListener("click", function(){
    let numb1 = parseInt(document.getElementById("numb1").value);
    let numb2 = parseInt(document.getElementById("numb2").value);
    let total = numb1 + numb2;
    document.querySelector("#total").innerHTML = `The answer to ${numb1} plus ${numb2} is ${total}`
})

document.getElementById("sub").addEventListener("click", function(){
    let numb1 = parseInt(document.getElementById("numb1").value);
    let numb2 = parseInt(document.getElementById("numb2").value);
    let total = numb1 - numb2;
    document.querySelector("#total").innerHTML = `The answer to ${numb1} minus ${numb2} is ${total}`
})

document.getElementById("mult").addEventListener("click", function(){
    let numb1 = parseInt(document.getElementById("numb1").value);
    let numb2 = parseInt(document.getElementById("numb2").value);
    let total = numb1 * numb2;
    document.querySelector("#total").innerHTML = `The answer to ${numb1} multiplied by ${numb2} is ${total}`
})

document.getElementById("div").addEventListener("click", function(){
    let numb1 = parseInt(document.getElementById("numb1").value);
    let numb2 = parseInt(document.getElementById("numb2").value);
    let total = numb1 / numb2;
    document.querySelector("#total").innerHTML = `The answer to ${numb1} divided by ${numb2} is ${total}`
})