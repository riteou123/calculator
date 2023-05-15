window.onload = function()
{
    let mi = document.getElementById("mm");
    let ce = document.getElementById("cm");
    let de = document.getElementById("dm");
    let met = document.getElementById("me");
    let ki = document.getElementById("km");
    
    mi.oninput = function(){
        ce.value = mi.value / 10;
        de.value = mi.value / 100;
        met.value = mi.value / 1000;
        ki.value = mi.value / 1000000;};
    ce.oninput = function(){
        mi.value = ce.value * 10;
        de.value = ce.value / 10;
        met.value = ce.value / 100;
        ki.value = ce.value / 100000;};
    de.oninput = function(){
        ce.value = de.value * 10;
        mi.value = de.value * 100;
        met.value = de.value / 10;
        ki.value = de.value / 10000;};
    met.oninput = function(){
        ce.value = met.value * 100;
        de.value = met.value * 10;
        mi.value = met.value * 1000;
        ki.value = met.value / 1000;};
    ki.oninput = function(){
        ce.value = ki.value * 10000;
        de.value = ki.value * 100000;
        met.value = ki.value * 1000;
        mi.value = ki.value * 1000000;};
};