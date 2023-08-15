const posts = [];
let lastActivityTime = null;

function updateLastUserActivityTime() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function createPost(postTitle) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push({ title: postTitle });
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } 
            else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

createPost("Post1")
    .then(() => updateLastUserActivityTime())
    .then(() => createPost("Post2"))
    .then(() => updateLastUserActivityTime())
    .then(() => createPost("Post3"))
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log("All posts:", posts);
        console.log("Last activity time:", lastActivityTime);

        return deleteLastPost();
    })
    .then((deletedPost) => {
        console.log(`Deleted Post: ${deletedPost.title}`);
        console.log("Remaining posts:", posts);
    })
    .catch((error) => {
        console.log(error);
    });





