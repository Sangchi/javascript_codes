function myfun(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
const multitwo=myfun(2);
const multithree=multitwo(3);
const result=multithree(4);
console.log(result);


/*
output-
24


*/

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(1)(2)(3));

/* 

output-
6*/