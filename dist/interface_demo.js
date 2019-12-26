"use strict";
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Unpublish"] = 0] = "Unpublish";
    PostStatus[PostStatus["Publish"] = 1] = "Publish";
    PostStatus[PostStatus["Draft"] = 2] = "Draft";
})(PostStatus || (PostStatus = {}));
var post = {
    title: 'ONE DAY',
    // content:'愉快的一天'
    status: PostStatus.Publish
};
console.log(post);
console.log(PostStatus[2]);
