export const getUser = () => {
  const user = localStorage.getItem("user");

  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
};

export const getToken = () => {
  const user = getUser();
  const token = user?.token;
  return token;
};
