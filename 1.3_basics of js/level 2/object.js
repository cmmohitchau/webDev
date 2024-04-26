let obj = {
    key1 : "value 1",
    key2 : "value 2",
    key3 : "value 3"
}

let keys = Object.keys(obj) // It shows only keys
console.log(keys);

let values = Object.values(obj);        // It shows only values of object
console.log(values);

let hasProperty =  obj.hasOwnProperty("value1");    // It is a boolean value
console.log(hasProperty);

let newObj = Object.assign({} , obj , {property1 : "hero"});    // It assign a new property to the object
console.log(newObj);

let entries = Object.entries(obj); // It has both
console.log(entries);