function person(name,age){
    this.name=name;
    this.age=age;

};

let person1=new person("alice",18);
let person2=new person("bob",20);

person.prototype.hello=function(){
    console.log(`hello ,i am ${this.name} and i'm ${this.age} years old`);
};



person1.hello();
person2.hello();

