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

//학습 노트 데이터를 삭제하는 api
function deletePost(postId) {
  return posts.delete(postId);
}

export { createPost, fetchPosts, deletePost };
