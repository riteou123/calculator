window.onload = function()
{let c = document.getElementById("celcius");
let f = document.getElementById("fahrenheit");
let k = document.getElementById("kelvin");
    c.oninput= function(){
    k.value= c.value - (-273);
    f.value= (c.value *(9/5)) + 32;};
    k.oninput= function(){
    c.value= k.value - 273;
    f.value = ((k.value -273) * 9/5) + 32;
    };
    f.oninput= function(){
    k.value= ((f.value - 32) * 5/9) + 273;
    c.value= (f.value - 32) * 5/9;};
};