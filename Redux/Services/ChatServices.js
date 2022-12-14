import instance from './ApiServices';

const previousMessages = id => {
  return instance.get('/previous-message').then(response => {
    return response;
  });
};
const chatWithOtherServices = data => {
  return instance.get(`/previous-message?to=${data}`).then(response => {
    return response.data;
  });
};

const sendMessageServices = data => {
  return instance.post(`/send-message`,data).then(response => {
    return response.data;
  });
};
const ChatService = {
  previousMessages,
  chatWithOtherServices,
  sendMessageServices,
};

export default ChatService;
