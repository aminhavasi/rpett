import { errorHandler } from './err';
import { emailReg, usernamePattern } from './reg';

const getFeildName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
const showError = (input, message) => {
    const formCotrol = input.parentElement;
    formCotrol.className = 'form-label-group error';
    const small = formCotrol.querySelector('small');
    small.innerText = message;
    return errorHandler(`${getFeildName(input)} has wrong `, 1000);
};
const showSuccess = (input, message) => {
    const formCotrol = input.parentElement;
    formCotrol.className = 'form-label-group success';
    const small = formCotrol.querySelector('small');
    small.innerText = message;
};

const checkEmail = (email) => {
    if (emailReg.test(email.value.trim())) {
        showSuccess(email, 'good');
    } else {
        return showError(email, 'Email is not valid');
    }
};

const checkUsername = (username) => {
    if (usernamePattern.test(username.value.trim())) {
        showSuccess(username, 'good');
    } else {
        return showError(username, 'Username is not valid');
    }
};
const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        return showError(
            input,
            `${getFeildName(input)} حداقل  ${min} کارارکتر`
        );
    } else if (input.value.length > max) {
        return showError(
            input,
            `${getFeildName(input)} nust be  less than  ${max} characters`
        );
    } else {
        showSuccess(input, 'good');
    }
};

const passwordCompire = (pass1, pass2) => {
    if (pass1.value === pass2.value) {
        showSuccess(pass2, 'good');
    } else {
        return showError(pass2, 'password confiremd failed!');
    }
};

const checkRequirement = (inputArray) => {
    let errors = [];
    inputArray.forEach((input) => {
        if (input[0].value.trim() === '') {
            let errorx = showError(
                input[0],
                `${getFeildName(input[0])} is required`
            );

            errors.push(errorx);

            return;
        } else if (input[0].value.trim() !== '') {
            if (input[0].id === 'inputEmail') {
                let errorx = checkEmail(input[0]);
                if (errorx) errors.push(errorx);
                return;
            } else if (input[0].id === 'inputUserame') {
                let errorx = checkUsername(input[0]);
                if (errorx) errors.push(errorx);
                return;
            } else if (input[0].id === 'inputRange') {
                if (!typeof Number(input[0].value)) {
                    let errorx = showError(input[0], 'invalid input');
                    if (errorx) errors.push(errorx);
                    return;
                }
                if (
                    Number(input[0].value) < input[1] ||
                    Number(input[0].value) > input[2]
                ) {
                    let errorx = showError(input[0], 'range is invalid');
                    if (errorx) errors.push(errorx);
                } else {
                    showSuccess(input[0], 'good');
                }
            } else {
                let errorx = checkLength(input[0], input[1], input[2]);
                if (errorx) errors.push(errorx);
                else if (input[0].id === 'inputConfirmPassword') {
                    let errorx = passwordCompire(
                        inputArray[5][0],
                        inputArray[4][0]
                    );
                    if (errorx) errors.push(errorx);
                }
                return;
            }
        } else {
            showSuccess(input[0], 'good');
        }
    });

    return errors;
};

export { checkRequirement };
