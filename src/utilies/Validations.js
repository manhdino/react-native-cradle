//Validate Email
export const isValidEmail = stringEmail => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail);
};

//Validate Password
export const isValidPassword = stringPassword => {
  return /(?=.*\d)(?=.*[a-z]).{8,}/.test(stringPassword);
};

//Validate User
export const isValidUser = stringUser => {
  return /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(stringUser);
};
