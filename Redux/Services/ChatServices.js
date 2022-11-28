import instance from './ApiServices';

const previousMessages = id => {
  return instance.get('/previous-message').then(response => {
    return response;
  });
};
const chatWithOtherServices = data => {
  return instance.get(`previous-message?to=8`).then(response => {
    return response;
  });
};

const ChatService = {
  previousMessages,
  chatWithOtherServices,
};

export default ChatService;
