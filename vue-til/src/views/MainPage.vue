<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <loading-spinner v-if="isLoading" />
      <ul v-else>
        <post-list-item
          v-for="postItem in postItems"
          :key="postItem._id"
          :item="postItem"
          @refresh="fetchData"
        ></post-list-item>
      </ul>
    </div>
    <!-- icon 활용 - https://ionic.io/ionicons/usage -->
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/posts';
import PostListItem from '../components/posts/PostListItem.vue';
import LoadingSpinner from '../components/common/LoadingSpinner.vue';
export default {
  components: { PostListItem, LoadingSpinner },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const { data } = await fetchPosts();
        this.isLoading = false;
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
