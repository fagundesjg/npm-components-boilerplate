declare const AuthServices: {
    auth: (email: string, password: string) => Promise<boolean>;
};
export { AuthServices };
