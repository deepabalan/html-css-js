

var helloFrom = function (name) {
    return "hello from " + name;
}

var people = ['abc', 'def', 'ghi', 'jkl', 'mno'];

for (var i = 0; i < people.length; i++) {
    var greet = helloFrom(people[i]);
    alert(greet);
}
