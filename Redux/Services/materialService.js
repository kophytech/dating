import axios from 'axios';
import instance from './ApiServices';
import {otherUrl} from '../Constant/Constants';

const API_URL = `${otherUrl}/`;

const getMaterialService = data => {
  return instance.get(`material/all-materials`).then(response => {
    return response.data;
  });
};

const postMaterialService = data => {
  const {value, token} = data;
  console.log(value, token, ' vaaaaaa');
  return instance.post('material', value).then(response => {
    console.log(response, 'response');

    return response.data;
  });
};

const deleteMaterialService = data => {
  const {_id, token} = data;
  // console.log(_id, token,data, ' vaaaaaa')
  // console.log(API_URL + `material/${_id}`);
  return instance.delete(`/material/${_id}`).then(response => {
    // console.log(response, 'response')

    return response.data;
  });
};

const updateMaterialService = data => {
  const {_id, updatedData, token} = data;
  // console.log(_id,updatedData, token, ' updatedJobService')
  // console.log(API_URL + `material/${_id}`);

  return instance.put(`material/${_id}`, updatedData).then(response => {
    // console.log(response, 'response')

    return response.data;
  });
};
// https://demo-server-quotesconnect.herokuapp.com/api/v1.1/material/62ab3adcd19c463c76fead1c/description

const addSubMaterialService = data => {
  return instance
    .post(`material/${data?.id}/description`, {
      content: data.content,
    })
    .then(response => {
      console.log(response, 'response');

      return response.data;
    });
};

// https://demo-server-quotesconnect.herokuapp.com/api/v1.1/material/62ab3adcd19c463c76fead1c/description/62ab3e34bf56575be4d99f78

// 2x4x8'

const subUpdateMaterialService = data => {
  const {_id, updatedData, token, primary_id} = data;
  console.log(primary_id, '1111');

  console.log(updatedData?.content, 'sss');
  return instance
    .put(`material/${primary_id}/description/${_id}`, {
      content: updatedData?.content,
    })
    .then(response => {
      // console.log(response, 'response')

      return response.data;
    });
};

const subDeleteMaterialService = data => {
  const {_id, updatedData, token, primary_id} = data;
  console.log(
    _id,
    updatedData,
    token,
    primary_id,
    '_id, updatedData, token, primary_id',
  );
  return instance
    .delete(`material/${primary_id}/description/${_id}`, {
      content: updatedData?.content,
    })
    .then(response => {
      console.log(response, 'response');

      return response.data;
    });
};

const materialService = {
  getMaterialService,
  postMaterialService,
  deleteMaterialService,
  updateMaterialService,
  subUpdateMaterialService,
  subDeleteMaterialService,
  addSubMaterialService,
};

export default materialService;
