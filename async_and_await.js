const HelperPromis=function(){
const promise=new Promise(function(resolve,reject){

    const x="shantanu";
    const y=1;

    if(x===y){
        console.log("strings are same");
    }
    else{
        console.log("strings are not same ");
    }



});
return promise;

};

async function depromis(){
    let message=await HelperPromis();

    try{
        console.log(message);
    }
    catch(error){
        console.log("error"+error);
    }
}

depromis();