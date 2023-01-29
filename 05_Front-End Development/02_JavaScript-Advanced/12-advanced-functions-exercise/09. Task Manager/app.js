function solve() {
    let addBtn = document.getElementById('add').addEventListener('click', addOnClick);

    function createElement(tag, content, cls) {
        let newElement = document.createElement(tag);
        newElement.textContent = content;
        newElement.className = cls;
        return newElement
    }


    function addOnClick(ev) {
        ev.preventDefault();
        const task = document.getElementById('task');
        const descr = document.getElementById('description');
        const date = document.getElementById('date');

        if (task.value && descr.value && date.value) {
            let newTask = createElement('article');

            let taskHeading = createElement('h3', task.value);
            let taskDescr = createElement('p', 'Description: ' + descr.value);
            let taskDate = createElement('p', 'Due Date: ' + date.value);

            let btnWrapper = createElement('div', undefined, 'flex');

            let greenBtn = createElement('button', 'Start', 'green');
            let redBtn = createElement('button', 'Delete', 'red')
            greenBtn.addEventListener('click', function(ev) {
                orangeBtn = createElement('button', 'Finish', 'orange');
                orangeBtn.addEventListener('click', function(e){
                let completeSection = document.querySelector('section:nth-of-type(4) div:nth-of-type(2)');
                newTask.removeChild(btnWrapper);
                completeSection.appendChild(newTask);
                });
                btnWrapper.removeChild(greenBtn);
                btnWrapper.appendChild(orangeBtn);
                let inProgressSection = document.querySelector('section:nth-of-type(3) div:nth-of-type(2)');
                inProgressSection.appendChild(newTask);

            });
            redBtn.addEventListener('click', onDelete);

            btnWrapper.appendChild(greenBtn);
            btnWrapper.appendChild(redBtn);

            newTask.appendChild(taskHeading);
            newTask.appendChild(taskDescr);
            newTask.appendChild(taskDate);
            newTask.appendChild(btnWrapper);

            let openSection = document.querySelector('section:nth-of-type(2) div:nth-of-type(2)');
            openSection.appendChild(newTask);
        }
    }



    function onDelete(ev) {
        let currentArticle = ev.target.parentNode.parentNode;
        currentArticle.parentNode.removeChild(currentArticle)
    }
    function onFinish(ev) {
        let currentArticle = ev.target.parentNode.parentNode;
        currentArticle.parentNode.removeChild(currentArticle)
    }

}
