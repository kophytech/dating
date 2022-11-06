import axios from 'axios';

import {otherUrl} from '../Constant/Constants';
import instance from './ApiServices';

const API_URL = `${otherUrl}/`;

const getJobService = token => {
  // console.log(token, 'token')
  return instance.get(`job/all-jobs`).then(response => {
    return response.data;
  });
};

const mygetVendorService = () => {
  // console.log(token, 'token')
  return instance.get('vendor/all-vendors').then(response => {
    return response.data;
  });
};

const postJobService = data => {
  const {value, token} = data;
  // console.log(value, token, ' vaaaaaa')
  return instance.post('/job', value).then(response => {
    console.log(response, 'response');

    return response.data;
  });
};

const deleteJobService = data => {
  const {_id, token} = data;
  // console.log(_id, token, ' vaaaaaa')
  // console.log(API_URL + `job/${_id}`);
  return instance.delete(`/job/${_id}`).then(response => {
    
    return response.data;
  });
};

const updateJobService = data => {
  const {_id, updatedData, token} = data;
  // console.log(_id,updatedData, token, ' updatedJobService')
  // console.log(API_URL + `job/${_id}`);

  return instance.put(`job/${_id}`, updatedData).then(response => {
    // console.log(response, 'response')

    return response.data;
  });
};

const JobService = {
  getJobService,
  postJobService,
  deleteJobService,
  updateJobService,
  mygetVendorService,
};

export default JobService;
