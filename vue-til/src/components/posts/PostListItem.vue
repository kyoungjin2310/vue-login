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
      <i class="icon ion-md-create"></i>
      <i class="icon ion-md-trash"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      //필수 data는 표시해야함
      required: true,
    },
  },
};
</script>

<style></style>
