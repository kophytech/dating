import instance from './ApiServices';

const randomPerson = data => {
  return instance.post('/find/random').then(response => {
    return response.data;
  });
};

const randomService = {
  randomPerson,
};

export default randomService;
