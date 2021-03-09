/**
 * 监听token过期时间
 * @return: Boolean
 */
export const tokenExpressInTime = (): boolean => {
  const date = new Date();
  const tokenTime = localStorage.getItem('tokenTime');
  return date.getTime() - Number(tokenTime) > 0 ? true : false;
};
