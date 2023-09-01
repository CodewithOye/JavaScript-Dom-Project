const sendChatBtn = document.querySelector('.chat-input span');
const chatInput = document.querySelector('.chat-input textarea');
const chatBox = document.querySelector('.chatbox');

let userMessage = null;

const API_KEY = "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";

const createChatLi = (message , className) => {
  const chatLi = document.createElement('li');
  chatLi.classList.add('chat', className);
  let chatContent =  className === 'outgoing' ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
}

const generateResponse = (incomingChatLi) => {
  const API_URL = 'https://api.openai.com/v1/chat/completions';
  const messageElement = incomingChatLi.querySelector("p");

  const requestOptions = {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: 'user', content: userMessage }]
    })
  }


  fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
    messageElement.textContent = data.choices[0].message.content.trim();
  }).catch((error) =>{
    messageElement.textContent = "Oops! something went wrong. Please try again." ;
  })
}




const handleChat = () => {
  userMessage = chatInput.value.trim();
  if(!userMessage) return;
  chatBox.appendChild(createChatLi(userMessage, 'outgoing'));
  chatInput.value = '';


  setTimeout(() => {
    const incomingChatLi = createChatLi('Thinking...', 'incoming')
    chatBox.appendChild(incomingChatLi);
    generateResponse(incomingChatLi);

  },600);

}






sendChatBtn.addEventListener('click', handleChat)