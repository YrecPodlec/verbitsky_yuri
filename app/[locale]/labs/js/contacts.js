document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('errorModal');
    const closeBtn = document.getElementById('closeError');
    const messageEl = document.getElementById('errorMessage');

    const fields = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        message: document.getElementById('message')
    };

    const errorEls = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        message: document.getElementById('messageError')
    };

    const boxes = {
        name: document.getElementById('nameBox'),
        email: document.getElementById('emailBox'),
        message: document.getElementById('messageBox')
    };

    // Регулярки
    const nameRegex = /^[A-Za-zА-Яа-яё\s-]{10,50}$/;
    const emailRegex1 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const emailRegex2 = /^.{1,64}@/;
    const emailRegex3 = /^[a-zA-Z0-9._%+-]+@/;
    const emailRegex4 = /@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    const emailRegex5 = /^[^\s]+$/;
    const emailRegex6 = /^[^"(),:;<>@\[\]\\]+@[^\s@]+$/;
    const emailRegex7 = /^.+@.+\..+$/;
    const messageRegex = /^(?=.{10,1000}$)(?!.*<[^>]+>)[\s\S]*$/;

    const isEmailValid = (email) => {
        return (
            emailRegex1.test(email) &&
            emailRegex2.test(email) &&
            emailRegex3.test(email) &&
            emailRegex4.test(email) &&
            emailRegex5.test(email) &&
            emailRegex6.test(email) &&
            emailRegex7.test(email)
        );
    };

    const isNameValid = (name) => nameRegex.test(name);
    const isMessageValid = (message) => messageRegex.test(message);

    // Валидация
    const validate = () => {
        let valid = true;

        // Имя
        if (!isNameValid(fields.name.value.trim())) {
            showError('name', 'Name must be 10–50 letters');
            valid = false;
        } else {
            clearError('name');
        }

        // Email
        if (!isEmailValid(fields.email.value.trim())) {
            showError('email', 'Incorrect email');
            valid = false;
        } else {
            clearError('email');
        }

        // Сообщение
        if (!isMessageValid(fields.message.value.trim())) {
            showError('message', 'Message must be 10–1000 characters, no HTML');
            valid = false;
        } else {
            clearError('message');
        }

        return valid;
    };

    const showError = (field, text) => {
        errorEls[field].textContent = text;
        boxes[field].classList.add('error');
    };

    const clearError = (field) => {
        errorEls[field].textContent = '';
        boxes[field].classList.remove('error');
    };

    // Отправка формы
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validate()) {
            alert('Форма успешно отправлена!');
            form.reset();
        } else {
            messageEl.textContent = 'Please fix some mistakes';
            modal.classList.add('active');
        }
    });

    // Закрытие модалки
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Закрытие по клику вне окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
