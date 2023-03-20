export const logged = (data: boolean) => {
  return {
    type: "LOGGED",
    payload: data,
  };
};
