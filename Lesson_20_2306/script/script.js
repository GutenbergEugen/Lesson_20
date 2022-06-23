const user_add_form_elem = document.querySelector('#user_add_form');
const clearBtn = user_add_form_elem.querySelector('.clear');
const users = [];

user_add_form_elem.addEventListener('submit', event =>{ //обработчик события (submit), ссылка на объект (event), с которым произошло событие (форма)
    event.preventDefault();
    const {name, lastname, avatar} = event.target;

    const user = {
        name: name.value, 
        lastname: lastname.value,
        avatar: avatar.value
    }
    users.push(user);
})

clearBtn.addEventListener('click', event =>{
    event.preventDefault();

    const {name, lastname, avatar} = user_add_form_elem; //деструктивное присвоение, позволяет создавать переменные если они есть в объекте

    name.value = ''; // свойство value очищает поле в форме
    lastname.value = '';
    avatar.value = ''; 
})


