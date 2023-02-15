function solve() {
    let recipiantEl = document.getElementById('recipientName');
    let titleEl = document.getElementById('title');
    let messageEl = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');
    let listOfMailsEl = document.getElementById('list');
    let sentMailsSection = document.querySelector('.sent-list');
    let deletedMailsSection = document.querySelector('.delete-list');

    resetBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        titleEl.value = '';
        messageEl.value = '';
        recipiantEl.value = '';
    })

    addBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (!recipiantEl.value || !titleEl.value || !messageEl.value) {
            return;
        }

        const listElement = document.createElement('li');

        const title = document.createElement('h4');
        title.textContent = `Title: ${titleEl.value}`;
        let editTitle = titleEl.value;
        titleEl.value = '';

        const recipiant = document.createElement('h4');
        recipiant.textContent = `Recipient Name: ${recipiantEl.value}`;
        let editRecipiant = recipiantEl.value;
        recipiantEl.value = '';

        const message = document.createElement('span');
        message.textContent = messageEl.value;
        let editMessage = messageEl.value;
        messageEl.value = '';

        const btnSection = document.createElement('div');
        btnSection.className = 'list-action';

        const sendBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        sendBtn.textContent = 'Send';
        deleteBtn.textContent = 'Delete';
        sendBtn.setAttribute("id", "send");
        deleteBtn.setAttribute("id", "delete");

        btnSection.appendChild(sendBtn);
        btnSection.appendChild(deleteBtn);

        listElement.appendChild(title);
        listElement.appendChild(recipiant);
        listElement.appendChild(message);
        listElement.appendChild(btnSection);
        listOfMailsEl.appendChild(listElement);

        let recipiantSpan = document.createElement('span');
        recipiantSpan.textContent = `To: ${editRecipiant}`;
        let titleSpan = document.createElement('span');
        titleSpan.textContent = `Title: ${editTitle}`;

        sendBtn.addEventListener('click', function () {
            let deleteBtnSection = document.createElement('div');
            deleteBtnSection.className = 'btn';
            deleteBtn.className = 'delete';
            deleteBtnSection.appendChild(deleteBtn);

            listElement.remove();
            let newListElement = document.createElement('li');



            newListElement.appendChild(recipiantSpan);
            newListElement.appendChild(titleSpan);
            newListElement.appendChild(deleteBtnSection);
            sentMailsSection.appendChild(newListElement);

        })

        deleteBtn.addEventListener('click', function (ev) {
            let currentListElement = ev.target.parentNode.parentNode;
            let deleteListItem = document.createElement('li');
            deleteListItem.appendChild(recipiantSpan);
            deleteListItem.appendChild(titleSpan);
            deletedMailsSection.appendChild(deleteListItem);

            currentListElement.remove();
        })

    })

}
solve()