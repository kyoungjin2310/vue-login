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
    <button type="submit">회원 가입</button>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import InputItem from './common/InputItem.vue';
import { registerUser } from '@/api/index';
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
      logMessage: '',
    };
  },
  components: { InputItem },
  methods: {
    async submitFrom() {
      console.log('220');
      const userData = {
        username: this.username,
        password: this.password,
        nickmame: this.nickmame,
      };
      const { data } = await registerUser(userData);
      console.log(data);
      this.logMessage = `${data.username}님 가입 되셨습니다.`;
      this.initForm();
    },
  },
  initForm() {
    this.username = '';
    this.password = '';
    this.nickmame = '';
  },
};
</script>

<style></style>
