"use strict";
var createPost;
createPost = function (post) {
    return 'post has been create';
};
console.log(createPost({ title: 'test' }));
var myFunc = function (a, b) {
    return a > b;
};
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2));
