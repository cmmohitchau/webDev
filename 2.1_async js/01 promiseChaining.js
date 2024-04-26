function sayHello()
{
    return new Promise(function (res , rej){
        res("Hello ");
    });
}

sayHello().then( (value) => {
    console.log(value);

    return new Promise(function (res , rej) {
        res("World");
    });
}).then( (value2) => {
    console.log(value2);
})