import instance from './ApiServices';

const profilePerson = data => {
  return instance.get('/my/profile').then(response => {
    return response.data;
  });
};

const Payment = data => {
  return instance.post('/pro', data).then(response => {
    return response.data;
  });
};

const getMembershipPrice = data => {
  return instance.get('/prices/membership', data).then(response => {
    return response.data;
  });
};

const creditPayment = data => {
  return instance.post('/credit', data).then(response => {
    return response.data;
  });
};

// https://naijaconnect.herokuapp.com/ref/pro?membership=binary_pro_plan
const paystack_get_ref = data => {
  return instance.get(`/ref/pro?membership=${data}`).then(response => {
    return response.data;
  });
};

const profileService = {
  profilePerson,
  Payment,
  creditPayment,
  getMembershipPrice,
  paystack_get_ref,
};

export default profileService;
