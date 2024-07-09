const promieses=new Promise(function(resolve,reject){
    const name1="prashant";
    const name2="prashant";

    if(name1==name2){
        resolve();
    }    
    else{
        reject();
    }

});
promieses.then(function(){
    console.log("strings are matched");
})

.catch(function(){
    console.log("promise is rejected")
})
.finally(function(){
    console.log("promises are working!!");
})



/*

output-

strings are matched

*/

