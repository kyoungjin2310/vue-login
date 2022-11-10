<template>
  <li>
    <div class="post-title">
      {{ item.title }}
    </div>
    <div class="post-contents">
      {{ item.contents }}
    </div>
    <div class="post-title">
      {{ item.createdAt }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem(item._id)"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
  props: {
    item: {
      type: Object,
      //필수 data는 표시해야함
      required: true,
    },
  },
  methods: {
    async deleteItem(id) {
      try {
        if (confirm('Do you want to delete it?')) {
          await deletePost(id);
          //강제로 랜더링 - 클릭후 랜더링이 안되어서 목록이 그대로
          this.$emit('refresh');
        }
      } catch (error) {
        console.log(error);
      }
    },
    routeEditPage() {
      const id = this.item._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style></style>
