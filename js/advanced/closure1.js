

var add = function (a) {
    return function (b) {
        return a + b;
    };
};

var addFive = add(5);

console.log(addFive(10));

var hello = add('Hello ');

console.log(hello('tom'));
