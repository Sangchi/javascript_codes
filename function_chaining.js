let calculator={
    result:0,

    add:function(x){
        this.result +=x;
        return this;
    },
    substract:function(x){
        this.result -=x;
        return this;
    },
    multiplication:function(x){
        this.result *=x;
        return this;
    },
    division:function(x){
        this.result /=x;
        return this;
    }
}
let results=calculator.add(3).substract(4).multiplication(5).division(6).result;
console.log(results);