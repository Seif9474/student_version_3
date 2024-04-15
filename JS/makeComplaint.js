let messagesArea = document.querySelector(".exchang_messages"),
    inputMessage = document.querySelector(".user_profile .complaint .write_message input"),
    sendBtn = document.querySelector(".user_profile .complaint .write_message .img"),
    userImgComplaint = document.querySelector(".user_profile .complaint .exchang_messages .user_message .img img");

    sendBtn.addEventListener("click", (e) => {
        if(inputMessage.value.length > 0){

            let userMessage = document.createElement("div");
                userMessage.className = "user_message";

            let messageTetx = document.createElement("div");
                messageTetx.className = "message";
                messageTetx.innerText = inputMessage.value;
            
            let userImageContainer = document.createElement("div"); 
                userImageContainer.className = "img";  

            let userImage = document.createElement("img");
                userImage.src = userImgComplaint.src;
                userImageContainer.appendChild(userImage);

                userMessage.appendChild(userImageContainer);
                userMessage.appendChild(messageTetx);

                messagesArea.appendChild(userMessage);

            inputMessage.value = ""    ;
        }
    })