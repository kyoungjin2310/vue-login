<template>
  <div class="contents">
    <h1 class="pageHeader">Create Post</h1>
    <form class="form" @submit.prevent="submitForm">
      <div>
        <label for="title">Title:</label>
        <input id="title" type="text" v-model="title" />
      </div>
      <div>
        <label for="contents">Contents:</label>
        <textarea
          id="contents"
          type="text"
          rows="3"
          v-model="contents"
        ></textarea>
      </div>
      <button type="submit" class="btn">Create</button>
    </form>
  </div>
</template>

<script>
import { createPost } from '@/api/index';
export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
      } catch (error) {
        //console로 찍으면 나옴
        console.log(error.response.data.message);
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>
