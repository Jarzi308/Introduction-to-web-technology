const todoList = document.querySelector('#todo-list');
const input = document.querySelector('.add-todo-input');

document.querySelector('.add-todo-form').addEventListener('submit', event => {

    event.preventDefault();

    if(input.value === '') {
        return;
    }

    const newLi = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const editBtn = document.createElement('button');

    newLi.classList.add('list-item');
    delBtn.classList.add('btn');
    span.classList.add('text');
    editBtn.classList.add('btn');

    delBtn.setAttribute('type', 'button');
    editBtn.setAttribute('type', 'button');

    delBtn.textContent = 'DELETE';
    span.textContent = '- ' + input.value;
    editBtn.textContent = 'EDIT';

    newLi.appendChild(span);
    newLi.appendChild(editBtn);
    newLi.appendChild(delBtn);

    todoList.appendChild(newLi);

    delBtn.addEventListener('click', () => {
        todoList.removeChild(newLi);
    });

    editBtn.addEventListener('click', () => {

        const editInput = document.createElement('input');
        const save = document.createElement('button');

        editInput.value = input.value;

        save.classList.add('btn');
        save.setAttribute('type', 'button');
        save.textContent = 'SAVE';

        newLi.removeChild(span);
        newLi.removeChild(editBtn);
        newLi.removeChild(delBtn);

        newLi.appendChild(editInput);
        newLi.appendChild(save);

        save.addEventListener('click', () => {

            if(editInput.value === '') {
                return;
            }

            newLi.removeChild(editInput);
            newLi.removeChild(save);

            span.textContent = '- ' + editInput.value;

            newLi.appendChild(span);
            newLi.appendChild(editBtn);
            newLi.appendChild(delBtn);
        });
    })
}); 