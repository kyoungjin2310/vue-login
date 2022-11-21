import { validateEmail } from '@/utils/validation';

export const email = {
  methods: {
    isEmailValid(username) {
      return validateEmail(username);
    },
  },
};
