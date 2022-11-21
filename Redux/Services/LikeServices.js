import instance from './ApiServices';

const likePerson = id => {
  console.log(id, '111');
  return instance.post(`/actions/like?user_id=${id}`).then(response => {
    return response;
  });
};

const LikingService = {
  likePerson,
};

export default LikingService;
