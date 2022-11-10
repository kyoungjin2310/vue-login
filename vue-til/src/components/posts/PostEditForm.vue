<template>
  <div class="contents">
    <h1 class="pageHeader">Edit Post</h1>
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
        <p v-if="!isContentsValid" class="validation-text">
          Contents must be less than 200
        </p>
      </div>
      <button type="submit" class="btn">Edit</button>
    </form>
    <p class="log">
      {{ logMessage }}
    </p>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
    console.log(data);
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.logMessage = error;
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
