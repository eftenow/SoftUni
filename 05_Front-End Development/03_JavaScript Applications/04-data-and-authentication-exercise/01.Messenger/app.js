function attachEvents() {
    const baseUrl = `http://localhost:3030/jsonstore/messenger`;
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    const authorEl = document.querySelector('input[name="author"]');
    const contentEl = document.querySelector('input[name="content"]');
    const textarea = document.getElementById('messages');

    refreshBtn.addEventListener('click', async ()=>{
        let response = await fetch(baseUrl);
        let messages = await response.json();
        console.log(messages);
        let allMessages = Object.values(messages).map(m => `${m.author}: ${m.content}`).join('\n');
        textarea.value = allMessages;
    })

    sendBtn.addEventListener('click', async ()=>{
        const message = {
            author: authorEl.value,
            content: contentEl.value
        };
        
        let response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        
        let sendNewMsg = await response.json();
        let newMsgText = `${sendNewMsg.author}: ${sendNewMsg.content}\n`
        textarea.value += newMsgText;
    })
}

attachEvents();