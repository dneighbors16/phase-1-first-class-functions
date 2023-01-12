function receivesAFunction(callback){
    callback();
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I'm an anonymous function.");
    }
}

function returnsANamedFunction(){
     return function namedFunction(){
        console.log("I'm a named function.");
    }
}