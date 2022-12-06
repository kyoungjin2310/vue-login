const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(?!.*__.*)[a-z0-9]{4,20}(_?)+(?:\.[a-z0-9!#$%&*+/=?^`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/,
    );
};

const validatePassword = (pw) => {
  return /^(?=.*[a-z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/.test(
    pw,
  );
};

const validatePwConfirm = (pw, pw_) => {
  if (pw !== '' && pw_ !== '') {
    return pw === pw_;
  } else {
    return false;
  }
};

export { validateEmail, validatePassword, validatePwConfirm };
