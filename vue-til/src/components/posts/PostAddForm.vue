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
export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  methods: {
    submitForm() {
      console.log;
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>
