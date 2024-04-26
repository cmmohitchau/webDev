function sayHello()
{
    return new Promise(function (res,rej){
        setTimeout(function (){
            res("hello")
        }, 6* 1000)
    })
}

async function main()
{
    let value = await sayHello()
    console.log(value);
    
}

main()


function sayhi()
{
    return new Promise(function (res,rej){
        setTimeout(()=>{
            res("hi");
        },5*1000)
    })
}
function log(data)
{
    console.log(data);
}
sayhi().then(log)