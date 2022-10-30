<template>
  <div>
    <label :for="inputId">{{ inputText }}</label>
    <input :type="inputType" :id="inputId" />
  </div>
</template>

<script>
export default {
  props: ['inputType', 'inputId', 'inputText'],
};
</script>

<style></style>
