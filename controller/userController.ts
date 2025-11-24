import * as db from "../fake-db";

export const getUserByEmailIdAndPassword = async (
  uname: string,
  password: string
) => {
  const user = db.getUserByUsername(uname);
  if (!user) {
    return null;
  }
  if (user.password === password) {
    return user;
  }
  return null;
};

export const getUserById = async (id: string | number) => {
  const user = db.getUser(Number(id));
  return user ? user : null;
};
