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

const getAllNotifications = data => {
  return instance.get('/notifications').then(response => {
    return response.data;
  });
};

const getPeopleILikedService = data => {
  return instance.get('/actions/i-liked').then(response => {
    return response.data;
  });
};

const getCountryServices = data => {
  return instance.get('/provinces/countries').then(response => {
    return response.data;
  });
};

const getCountryStateServices = data => {
  return instance.get(`/provinces/states/${data}`).then(response => {
    return response.data;
  });
};

const updateProfileService = data => {
  return instance.post('/update/profile', data).then(response => {
    return response.data;
  });
};

const blockUserService = data => {
  return instance.post(`/block/${data?.id}`).then(response => {
    return response.data;
  });
};

const profileService = {
  profilePerson,
  Payment,
  creditPayment,
  getMembershipPrice,
  paystack_get_ref,
  getAllNotifications,
  getPeopleILikedService,
  getCountryServices,
  getCountryStateServices,
  updateProfileService,
  blockUserService,
};

export default profileService;
