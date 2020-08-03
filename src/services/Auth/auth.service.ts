const AuthServices = {
  auth: async (email: string, password: string) => {
    if (email === "teste@gmail.com" && password === "1234") {
      return true;
    } else return false;
  },
};

export { AuthServices };
