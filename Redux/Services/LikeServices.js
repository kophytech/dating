import instance from './ApiServices';

const likePerson = id => {
  return instance.post(`/actions/like?user_id=${id}`).then(response => {
    return response;
  });
};

const dislikelikePerson = id => {
  return instance.post(`/actions/dislike?user_id=${id}`).then(response => {
    return response;
  });
};
const LikingService = {
  likePerson,
  dislikelikePerson,
};

export default LikingService;
