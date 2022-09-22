async function deletePostOnServer(postID) {
  console.log('async delete', postID);

  let response = await fetch(`http://localhost:8080/api/post/${postID}`, {
    method: 'DELETE',
  });
}

async function addPostOnServer(post) {
  console.log('async add');
  console.log(post);

  let response = await fetch(`http://localhost:8080/api/post`, {
    method: 'POST',
    body: JSON.stringify(post),
  });
}

export {deletePostOnServer, addPostOnServer};