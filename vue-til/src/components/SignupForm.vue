<template>
  <div>
    <form @submit.prevent="submitFrom">
      <input-item
        v-for="item in inputList"
        :key="item.id"
        :inputType="item.inputType"
        :inputId="item.id"
        :inputText="item.inputText"
        :v-model="item.vModel"
      />
    </form>
    <button type="submit">login</button>
  </div>
</template>

<script>
import InputItem from './common/InputItem.vue';
export default {
  data() {
    return {
      inputList: [
        {
          id: 'username',
          inputType: 'text',
          inputText: 'id:',
          vModel: this.username,
        },
        {
          id: 'password',
          inputType: 'text',
          inputText: 'pw:',
          vModel: this.password,
        },
        {
          id: 'nickmame',
          inputType: 'text',
          inputText: 'nickmame:',
          vModel: this.nickmame,
        },
      ],
      username: '',
      password: '',
      nickmame: '',
    };
  },
  components: { InputItem },
  methods: {
    submitFrom() {
      console.log('220');
    },
  },
};
</script>

<style></style>
