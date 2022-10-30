<template>
  <div>
    <input :type="inputType" :id="inputId" />
    <label :for="inputId">{{ inputText }}</label>
  </div>
</template>

<script>
export default {
  props: ['inputType', 'inputId', 'inputText'],
};
</script>

<style></style>
