import instance from './ApiServices';

const profilePerson = data => {
  return instance.get('my/profile').then(response => {
    return response.data;
  });
};

const profileService = {
  profilePerson,
};

export default profileService;
