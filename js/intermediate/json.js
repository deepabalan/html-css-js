

var jsonString = JSON.stringify({
    make: "abc",
    model: "mp4",
    miles: 5023
});

var car = JSON.parse(jsonString);

console.log(jsonString);
console.log(car);
