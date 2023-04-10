export const logged = (data: boolean) => {
  return {
    type: "LOGGED",
    payload: data,
  };
};

export const nav = (data: boolean) => {
  return {
    type: "NAV",
    payload: data,
  };
};
