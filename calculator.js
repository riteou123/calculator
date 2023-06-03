let name = " CALCv2.1.0"; 
document.write(name);
//document.write(Date());
window.onload = function(){
    let one = document.getElementById("on");
    let two = document.getElementById("tw");
    let three = document.getElementById("th");
    let four = document.getElementById("fou");
    let five = document.getElementById("fiv");
    let equal = document.getElementById("eq");
    let six = document.getElementById("si");
    let seven = document.getElementById("se");
    let eight = document.getElementById("ei");
    let nine = document.getElementById("ni");
    let zero = document.getElementById("ze");
    let point = document.getElementById("do");
    let bropen = document.getElementById("bro");
    let brclose = document.getElementById("brc");
    let cube = document.getElementById("cu");
    let cuberoot = document.getElementById("curoot");
    let minus = document.getElementById("mi");
    let plus = document.getElementById("pl");
    let divide = document.getElementById("div");
    let multiply = document.getElementById("mul");
    let square = document.getElementById("squ");
    let squareroot = document.getElementById("root");
    let percent= document.getElementById("per");
    let clear = document.getElementById("clear");
    let fa = document.getElementById("fac");
    one.onclick = function(){
        ans.result.value += 1 ;
    };
    two.onclick = function(){
        ans.result.value += 2 ;
    };
    three.onclick = function(){
      ans.result.value += 3  ;  
    };
    four.onclick = function(){
        ans.result.value += 4 ;
    };
    five.onclick = function(){
      ans.result.value += 5 ;  
    };
    equal.onclick = function(){
      ans.result.value = eval(ans.result.value);
      if (eval(ans.result.value) === Infinity ) {
      ans.result.value = "MATH ERROR";
      };
    };
    six.onclick = function(){
      ans.result.value += 6 ;  
    };
    seven.onclick = function(){
        ans.result.value += 7 ;
    };
    eight.onclick = function(){
        ans.result.value += 8 ;
    };
    nine.onclick = function(){
        ans.result.value += 9 ;
    };
    zero.onclick = function(){
      ans.result.value += 0 ;  
    };
    cube.onclick = function(){
        ans.result.value = (eval(ans.result.value) ** 3) ;
    };
    bropen.onclick = function(){
        ans.result.value += "(" ;
    };
    brclose.onclick = function(){
        ans.result.value += ")" ;
    };
    point.onclick = function (){
      ans.result.value += "." ;  
    };
    cuberoot.onclick = function (){
        ans.result.value = (eval(ans.result.value) ** (1/3));
        ans.result.value == integer;
        };
    minus.onclick = function(){
        ans.result.value += "-" ;
    };
    divide.onclick = function(){
        ans.result.value += "/" ;
    };
    multiply.onclick = function(){
        ans.result.value += "*" ;
    };
    plus.onclick = function(){
        ans.result.value += "+" ;
    };
    square.onclick = function(){
        ans.result.value =  (eval(ans.result.value) ** 2);
    };
    squareroot.onclick = function (){
        ans.result.value = (eval(ans.result.value) ** (1/2));
    };
    percent.onclick = function(){
        ans.result.value = (eval(ans.result.value) * 0.01);
    };
    clear.onclick = function(){
        ans.result.value  = " " ;
        };
    fa.onclick = function(){
         var  fac = 1;
         for( let x = 1; x <= eval(ans.result.value) ; x++){
                fac *= x;
            };
          ans.result.value = fac;
        };
};
