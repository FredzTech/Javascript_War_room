//METHOD FOR ALL COMMENTS
async function rawdata() {
  let data = await fetch("https://jsonplaceholder.typicode.com/comments");
  let comments = await data.json();
  return comments;
}
//FILTER COMMENTS
let filter_comments = async (id) => {
  let comments = await rawdata();
  let new_comments = comments.filter((comment) => {
    return comment.id !== id;
  });
  return new_comments;
};

filter_comments(4);

//FIND ONE COMMENT.
let find_comment = async (id) => {
  let comments = await rawdata();
  console.log(comments);
  let new_comment = comments.find((comment) => {
    return comment.postId == id;
  });
  return new_comment;
};

let comments_console = async (id) => {
  let comment_1 = await find_comment(id);
  console.log(comment_1);
};

comments_console(2);
