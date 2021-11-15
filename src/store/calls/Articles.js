const axios = require('axios');
export const getArticlesCall = (
  order = 'desc',
  sort = 'activity',
  filter = 'default',
) => {
  let url = `https://api.stackexchange.com/docs/articles-by-ids#order=${order}&sort=${sort}&filter=${filter}&site=stackoverflow`;
  console.log(url);
  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
