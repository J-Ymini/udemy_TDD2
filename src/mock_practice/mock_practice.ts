export const fn = {
  getName: (callback: (name: string) => void) => {
    const name = "yongmin";
    setTimeout(() => {
      callback(name);
    }, 2000);
  },
};
