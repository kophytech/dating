import instance from './ApiServices';

const profilePerson = data => {
  return instance.get('/my/profile').then(response => {
    return response.data;
  });
};

const Payment = data => {
  return instance.post('/pro',data).then(response => {
    return response.data;
  });
};

const profileService = {
  profilePerson,
  Payment,
};

export default profileService;
