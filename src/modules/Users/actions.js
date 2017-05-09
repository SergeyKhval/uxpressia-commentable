export const USER_SET = 'USER_SET';

export function setUser(user) {
  return {
    type: USER_SET,
    payload: user,
  }
}
