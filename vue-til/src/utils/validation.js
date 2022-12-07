const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
