
var saver = function (value) {
    return function () {
        return value;
    };
};

var retriever = saver(10);
console.log(retriever());
