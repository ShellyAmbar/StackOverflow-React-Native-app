const axios = require('axios');
export const getProfileCall = (
  order = 'desc',
  sort = 'activity',
  filter = 'default',
) => {
  let url = `https://api.stackexchange.com/docs/users-by-ids#order=${order}&sort=${sort}&filter=${filter}&site=stackoverflow`;
  return axios.get(url);
};
