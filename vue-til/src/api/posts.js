//학습 노트 조작과 관련된 CRUD API 함수 파일

const { posts } = require('.');

//학습 노트 데이터를 생성하는 api
function createPost(postData) {
  return posts.post('/', postData);
}

//학습 노트 데이터를 조회하는 api
function fetchPosts() {
  return posts.get('/');
}

//학습 노트 데이터를 id값으로 조회하는 api
function fetchPost(postid) {
  return posts.get(postid);
}

//학습 노트 데이터를 삭제하는 api
function deletePost(postId) {
  return posts.delete(postId);
}

//학습 노트 데이터를 수정하는 api
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { createPost, fetchPosts, deletePost, fetchPost, editPost };
