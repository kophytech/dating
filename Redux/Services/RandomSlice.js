import instance from './ApiServices';

const randomService = data => {
  return instance.post('/step/avatar', data?.values).then(response => {
    return response;
  });
};

const StepService = {
  postStep1Service,
};

export default StepService;
