'use strict';
let tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
function formatDate(dateString) {
    const parts = dateString.split('-');
    if (parts.length !== 3) {
        return dateString;
    }
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];
    return `${day}.${month}.${year}`;
}
function formatDateForInput(dateString) {
    const parts = dateString.split('.');
    if (parts.length !== 3) {
        return dateString;
    }
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    return `${year}-${month}-${day}`;
}
function createNewTask() {
    const titleInput = document.getElementById('titleInput').value;
    const dateInput = document.getElementById('dateInput').value;
    const descriptionInput = document.getElementById('descriptionInput').value;
    if (!titleInput) {
        alert('Заполните заголовок задачи!');
        return;
    }
    if (!dateInput) {
        alert('Выберите дату!');
        return;
    }
    if (!descriptionInput) {
        alert('Заполните описание задачи!');
        return;
    }
    const formattedDate = formatDate(dateInput);
    const newTask = {
        date: formattedDate,
        title: titleInput,
        description: descriptionInput,
    };
    let insertionIndex = tasksArray.findIndex(task => task.date > newTask.date);
    if (insertionIndex === -1) {
        insertionIndex = tasksArray.length;
    }
    tasksArray.splice(insertionIndex, 0, newTask);
    // tasksArray.push(newTask); // до сортировки
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    renderTasks();
    goHomeLink();
}
const createTaskButton = document.getElementById('createTaskButton');
if (createTaskButton) {
    createTaskButton.addEventListener('click', createNewTask);
}
function createTaskElement(task) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('card');
    taskCard.innerHTML = `
      <div class="date">
          <div class="icon">
            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_499)">
                <rect width="13.5484" height="13.5484" fill="white"/>
                <path d="M5.4081 6.5242H4.42596C4.2639 6.5242 4.13131 6.39764 4.13131 6.24295V5.30545C4.13131 5.15076 4.2639 5.0242 4.42596 5.0242H5.4081C5.57015 5.0242 5.70274 5.15076 5.70274 5.30545V6.24295C5.70274 6.39764 5.57015 6.5242 5.4081 6.5242ZM8.05988 6.24295V5.30545C8.05988 5.15076 7.92729 5.0242 7.76524 5.0242H6.7831C6.62104 5.0242 6.48846 5.15076 6.48846 5.30545V6.24295C6.48846 6.39764 6.62104 6.5242 6.7831 6.5242H7.76524C7.92729 6.5242 8.05988 6.39764 8.05988 6.24295ZM10.417 6.24295V5.30545C10.417 5.15076 10.2844 5.0242 10.1224 5.0242H9.14024C8.97819 5.0242 8.8456 5.15076 8.8456 5.30545V6.24295C8.8456 6.39764 8.97819 6.5242 9.14024 6.5242H10.1224C10.2844 6.5242 10.417 6.39764 10.417 6.24295ZM8.05988 8.49295V7.55545C8.05988 7.40076 7.92729 7.2742 7.76524 7.2742H6.7831C6.62104 7.2742 6.48846 7.40076 6.48846 7.55545V8.49295C6.48846 8.64764 6.62104 8.7742 6.7831 8.7742H7.76524C7.92729 8.7742 8.05988 8.64764 8.05988 8.49295ZM5.70274 8.49295V7.55545C5.70274 7.40076 5.57015 7.2742 5.4081 7.2742H4.42596C4.2639 7.2742 4.13131 7.40076 4.13131 7.55545V8.49295C4.13131 8.64764 4.2639 8.7742 4.42596 8.7742H5.4081C5.57015 8.7742 5.70274 8.64764 5.70274 8.49295ZM10.417 8.49295V7.55545C10.417 7.40076 10.2844 7.2742 10.1224 7.2742H9.14024C8.97819 7.2742 8.8456 7.40076 8.8456 7.55545V8.49295C8.8456 8.64764 8.97819 8.7742 9.14024 8.7742H10.1224C10.2844 8.7742 10.417 8.64764 10.417 8.49295ZM12.7742 2.3992V10.6492C12.7742 11.2703 12.2463 11.7742 11.5956 11.7742H2.95274C2.30207 11.7742 1.77417 11.2703 1.77417 10.6492V2.3992C1.77417 1.77811 2.30207 1.2742 2.95274 1.2742H4.13131V0.0554504C4.13131 -0.0992371 4.2639 -0.2258 4.42596 -0.2258H5.4081C5.57015 -0.2258 5.70274 -0.0992371 5.70274 0.0554504V1.2742H8.8456V0.0554504C8.8456 -0.0992371 8.97819 -0.2258 9.14024 -0.2258H10.1224C10.2844 -0.2258 10.417 -0.0992371 10.417 0.0554504V1.2742H11.5956C12.2463 1.2742 12.7742 1.77811 12.7742 2.3992ZM11.5956 10.5086V3.5242H2.95274V10.5086C2.95274 10.5859 3.01904 10.6492 3.10006 10.6492H11.4483C11.5293 10.6492 11.5956 10.5859 11.5956 10.5086Z" fill="#353535"/>
                </g>
                <defs>
                <clipPath id="clip0_1_499">
                <rect width="13.5484" height="13.5484" fill="white"/>
                </clipPath>
                </defs>
            </svg>
          </div>
          <div class="number">
              <p>${task.date}</p>
          </div>
          <div class="more">
              <svg viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="1.99974" cy="2.70889" rx="1.99974" ry="1.86523" fill="#9A9A9A"/>
                <ellipse cx="1.99974" cy="9.23718" rx="1.99974" ry="1.86523" fill="#9A9A9A"/>
                <ellipse cx="1.99974" cy="15.7655" rx="1.99974" ry="1.86523" fill="#9A9A9A"/>
              </svg>
          </div>
      </div>
      <div class="info">
          <h1>${task.title}</h1>
          <p>${task.description}</p>
      </div>
      <div class="footer">
          <button>Завершить задачу</button>
      </div>
    `;
    return taskCard;
}
function renderTasks() {
    const container = document.querySelector('.tasks');
    if (container) {
        container.innerHTML = '';
        const sortedTasks = tasksArray.slice().sort((a, b) => {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            return 0;
        });
        sortedTasks.forEach(itm => {
          const taskCard = createTaskElement(itm);
          container.appendChild(taskCard);
        });
        // tasksArray.forEach(itm => {
        //     const taskCard = createTaskElement(itm);
        //     container.appendChild(taskCard);
        // }); // до сортировки
    }
};
function completeTask(event) {
    const taskCard = event.target.closest('.card');
    if (taskCard) {
        taskCard.classList.toggle('complete');
        const completeButton = taskCard.querySelector('.footer button');
        if (completeButton) {
            if (taskCard.classList.contains('complete')) {
                completeButton.innerHTML = `
                <div>
                    <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="13" cy="11.5" rx="12.25" ry="11.25" fill="#00FFC7"/>
                        <g clip-path="url(#clip0_6_39)">
                        <path d="M13 17.3929C9.46176 17.3929 6.58331 14.7494 6.58331 11.5C6.58331 8.25061 9.46176 5.60714 13 5.60714C14.1986 5.60714 15.3677 5.91263 16.3811 6.49071C16.5582 6.59165 16.6125 6.80539 16.5026 6.96807C16.3925 7.13073 16.1598 7.18094 15.9828 7.07964C15.0891 6.56978 14.0576 6.30044 13 6.30044C9.87805 6.30044 7.33821 8.63303 7.33821 11.5C7.33821 14.367 9.87805 16.6996 13 16.6996C16.1218 16.6996 18.6617 14.367 18.6617 11.5C18.6617 10.9237 18.5599 10.3579 18.359 9.81827C18.2916 9.63718 18.397 9.44003 18.5941 9.37811C18.7917 9.31654 19.006 9.41296 19.0734 9.59404C19.3011 10.2061 19.4167 10.8474 19.4167 11.5C19.4166 14.7494 16.5382 17.3929 13 17.3929Z" fill="#C63031"/>
                        <path d="M12.9998 13.4994C12.904 13.4994 12.8115 13.466 12.7414 13.4053L9.72177 10.8003C9.56981 10.6693 9.56233 10.4499 9.70507 10.3103C9.84781 10.171 10.0866 10.1637 10.2386 10.2952L12.9678 12.6496L17.9269 7.24312C18.061 7.0967 18.2992 7.07793 18.4587 7.2014C18.6181 7.32472 18.6385 7.54334 18.5041 7.68976L13.2884 13.3761C13.2217 13.4488 13.1252 13.4933 13.0218 13.4989C13.0145 13.4992 13.0071 13.4994 12.9998 13.4994Z" fill="#C63031"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_6_39">
                        <rect width="12.8333" height="11.7857" fill="white" transform="translate(6.58331 5.60714)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                Задача завершена`;
            } else {
                completeButton.innerHTML = `Завершить задачу`;
            }
        }
    }
};
function deleteTask(event) {
    const taskCard = event.target.closest('.card');
    if (taskCard) {
        taskCard.classList.add('hide');
        setTimeout(() => {
            const container = document.querySelector('.tasks');
            const index = Array.from(container.children).indexOf(taskCard);
            if (index > -1) {
                tasksArray.splice(index, 1);
                container.removeChild(taskCard);
                document.addEventListener('click', handleMoreClick);
                localStorage.setItem('tasks', JSON.stringify(tasksArray));
            }    
        }, 300);
    }
};
function handleMoreClick(event) {
    const moreButton = event.target.closest('.more');
    if (moreButton) {
        const taskCard = moreButton.closest('.card');
        if (taskCard) {
            const dropdownMenu = document.createElement('div');
            dropdownMenu.classList.add('dropdown');
            dropdownMenu.innerHTML = `
                <div class="select" onclick="deleteTask(event)">Удалить</div>
                <div class="select" onclick="goToEditPage(event)">Редактировать</div>
            `;
            taskCard.appendChild(dropdownMenu);
            setTimeout(() => {
                dropdownMenu.style.transform = 'scale(1)';
            }, 0);
        }
    }
};
function goToEditPage(event) {
    const taskCard = event.target.closest('.card');
    if (taskCard) {
        const index = Array.from(taskCard.parentElement.children).indexOf(taskCard);
        const title = taskCard.querySelector('.info h1').innerText;
        const date = taskCard.querySelector('.number p').innerText;
        const description = taskCard.querySelector('.info p').innerText;
        const queryParams = new URLSearchParams({
            index: index,
            title: title,
            date: date,
            description: description,
        });
        window.location.href = `src/templates/edit-form.html?${queryParams.toString()}`;
    }
}
function urlDataEdit() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const date = urlParams.get('date');
    const description = urlParams.get('description');
    if (title) {
        document.getElementById('titleInput').value = title;
    }
    if (date) {
        const formattedDate = formatDateForInput(date);
        document.getElementById('dateInput').value = formattedDate;
    }
    if (description) {
        document.getElementById('descriptionInput').value = description;
    }
}
function saveEditedTask() {
    const titleInput = document.getElementById('titleInput').value;
    const dateInput = document.getElementById('dateInput').value;
    const descriptionInput = document.getElementById('descriptionInput').value;
    const formattedDate = formatDate(dateInput);
    if (!titleInput) {
        alert('Заполните заголовок задачи!');
        return;
    }
    if (!dateInput) {
        alert('Выберите дату!');
        return;
    }
    if (!descriptionInput) {
        alert('Заполните описание задачи!');
        return;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get('index'));
    if (!isNaN(index) && index >= 0 && index < tasksArray.length) {
        tasksArray[index] = {
            date: formattedDate,
            title: titleInput,
            description: descriptionInput,
        };
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }
    window.location.href = '../../index.html';
}
document.addEventListener('DOMContentLoaded', urlDataEdit);
document.addEventListener('DOMContentLoaded', renderTasks);
document.addEventListener('click', (event) => {
    const completeButton = event.target.closest('.footer button');
    if (completeButton) {
      completeTask(event);
    };
    const dropdownMenu = document.querySelector('.dropdown');
    if (dropdownMenu && !dropdownMenu.contains(event.target)) {
        setTimeout(() => {
            dropdownMenu.classList.remove('show');
        }, 300);
        dropdownMenu.remove();
    };
});
document.addEventListener('click', handleMoreClick);
const goForm = document.querySelector('.add');
function goFormLink() {
    if (goForm)
    location.href = 'src/templates/form.html';
}
if (goForm) {
    goForm.addEventListener('click', goFormLink);
}
const goHome = document.querySelector('.home');
const goHomeBack = document.querySelector('.back');
function goHomeLink() {
    if (goHome && goHomeBack)
    location.href = '../../index.html';
}
if (goHome && goHomeBack) {
    goHome.addEventListener('click', goHomeLink);
    goHomeBack.addEventListener('click', goHomeLink);
} 
function getCurrentPage() {
    const path = window.location.pathname;
    const currentPage = path.split('/').pop().split('.')[0];
    return currentPage;
};
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = getCurrentPage();
    if (currentPage === 'edit-form') {
        urlDataEdit();
        const saveButton = document.getElementById('saveEditButton');
        if (saveButton) {
            saveButton.addEventListener('click', saveEditedTask);
        }
    } else {
        renderTasks();
    }
});