import axios from 'axios';

import {otherUrl} from '../Constant/Constants';
import instance from './ApiServices';

const API_URL = `${otherUrl}/`;

const postRfQJobService = data => {
  // console.log(value, token, ' vaaaaaa')
  return instance.post('/rfq', data?.values).then(response => {
    return response;
  });
};

const getRfQJobService = token => {
  // console.log(token, 'token')
  return instance.get(`rfq/all-rfqs`).then(response => {
    return response.data;
  });
};

const postRfQMaterialService = data => {
  const {rfqArray, rfq_id} = data;
  console.log(rfq_id, 'sss.dkankdnkankndkjan');
  console.log(data, 'data from rfq material');
  const obj = {
    rfqArray: rfqArray,
  };
  return instance.post(`rfq/${rfq_id}/material`, obj).then(response => {
    console.log(response, 'response');

    return response.data;
  });
};

const postRfQVendorService = data => {
  const {dataVendor, token, rfq_id} = data;
  console.log(rfq_id, 'from 1111111 backend');
  const obj = {
    vendorArray: dataVendor,
  };
  return instance
    .post(`rfq/${rfq_id}/vendor`, obj, {
      headers: {Authorization: `${token}`},
    })
    .then(response => {
      console.log(response, 'response11111');

      return response.data;
    });
};

const selectItemServices = vendorData => {
  console.log(vendorData, 'adlnaknksnknkankdnkndkanknkdnk');
  return instance
    .post(`/rfq/select/${vendorData?.id}`, vendorData?.vendor)
    .then(response => {
      console.log(response, 'selectItemServicesselectItemServices');
      return response.data;
    });
};

const RfqService = {
  postRfQJobService,
  getRfQJobService,
  postRfQMaterialService,
  postRfQVendorService,
  selectItemServices,
};

export default RfqService;
