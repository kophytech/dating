import instance from './ApiServices';

const randomPerson = data => {
  return instance.get('/find/random').then(response => {
    return response.data;
  });
};

const filterPerson = data => {
  return instance.get('/find/match').then(response => {
    return response.data;
  });
};

const randomService = {
  randomPerson,
  filterPerson,
};

export default randomService;
