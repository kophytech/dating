import instance from './ApiServices';

const postStep1Service = data => {
  return instance
    .post('/step/avatar', data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
      },
    })
    .then(response => {
      return response;
    });
};

const postStep2Service = data => {
  return instance
    .post('/step/snapshot', data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
      },
    })
    .then(response => {
      return response.data;
    });
};

const postStep3Service = data => {
  return instance.post('/step/information', data).then(response => {
    return response;
  });
};

const StepService = {
  postStep1Service,
  postStep2Service,
  postStep3Service,
};

export default StepService;
