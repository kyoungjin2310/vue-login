<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <post-list-item
          v-for="postItem in postItems"
          :key="postItem._id"
          :item="postItem"
        ></post-list-item>
        <!-- <li v-for="postItem in postItems" :key="postItem._id">
          <div class="post-title">
            {{ postItem.title }}
          </div>
          <div class="post-contents">
            {{ postItem.contents }}
          </div>
          <div class="post-title">
            {{ postItem.createdAt }}
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '../components/posts/PostListItem.vue';
export default {
  components: { PostListItem },
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await fetchPosts();
        this.postItems = data.posts;
        console.log(data.posts);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
