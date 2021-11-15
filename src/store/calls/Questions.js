const axios = require('axios');
export const getQuestionsCall = (order, id, filter, sort) => {
  let url = `https://api.stackexchange.com/docs/questions-on-users#order=desc&sort=activity&ids=${id}&filter=default&site=stackoverflow`;
  return axios.get(url);
};
