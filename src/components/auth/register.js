import React, { useState } from 'react';
import './auth.css';
import { emailReg } from './../../utils/reg';
import { errorHandler } from './../../utils/err';

const Register = () => {
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRe, setPasswordRe] = useState('');

    const [bornDate, setBornDate] = useState('');
    const [username, setUsername] = useState('');

    //-------------------------------------------------
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
    const checkLength = (input, min, max) => {
        if (input.value.length < min) {
            return showError(
                input,
                `${getFeildName(input)} must be at least ${min} characters`
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
    const checkRequireds = (inputArray) => {
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
                } else {
                    let errorx = checkLength(input[0], input[1], input[2]);
                    if (errorx) errors.push(errorx);

                    return;
                }
            } else {
                showSuccess(input[0], 'good');
            }
        });
        console.log('***', errors);
        return errors;
    };

    const formValidator = (arr) => {
        let errors = [];
    };

    const submit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('inputName');
        const family = document.getElementById('inputFamily');
        const username = document.getElementById('inputUserame');
        const email = document.getElementById('inputEmail');
        const bd = document.getElementById('birthday');
        const password = document.getElementById('inputPassword');
        const password2 = document.getElementById('inputConfirmPassword');
        try {
            const erx = await checkRequireds([
                [name, 3, 255],
                [family, 3, 255],
                [username, 3, 255],
                [email, 3, 255],
                [password2, 8, 1024],
                [password, 8, 1024],
                [bd, 10, 11],
            ]);
            if (erx.length === 0) {
                alert('success');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <React.Fragment>
            <div className="containe auth">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card card-signin flex-row my-5">
                            <div className="card-img-left d-none d-md-flex"></div>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    Register
                                </h5>
                                <form
                                    className="form-signin"
                                    onSubmit={(e) => submit(e)}
                                >
                                    <div className="form-label-group ">
                                        <input
                                            type="text"
                                            id="inputName"
                                            className="form-control"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                        <small>
                                            no adscbksdbhcuihsddliucfhiulHRF
                                        </small>
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            id="inputFamily"
                                            className="form-control"
                                            placeholder="Family"
                                            value={family}
                                            onChange={(e) =>
                                                setFamily(e.target.value)
                                            }
                                        />
                                        <small>no</small>
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            id="inputUserame"
                                            className="form-control"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                        <small>no</small>
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            id="inputEmail"
                                            className="form-control"
                                            placeholder="Example@info.com"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <small>no</small>
                                    </div>

                                    <div className="form-label-group">
                                        <input
                                            type="date"
                                            id="birthday"
                                            name="birthday"
                                            className="form-control"
                                            value={bornDate}
                                            onChange={(e) =>
                                                setBornDate(e.target.value)
                                            }
                                        />
                                        <small>no</small>
                                    </div>

                                    <hr />
                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            id="inputPassword"
                                            className="form-control"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <small>no</small>
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            id="inputConfirmPassword"
                                            className="form-control"
                                            placeholder="Password"
                                            value={passwordRe}
                                            onChange={(e) =>
                                                setPasswordRe(e.target.value)
                                            }
                                        />
                                        <small>no</small>
                                    </div>
                                    <button
                                        className="btn btn-lg btn-primary btn-block text-uppercase mt-4"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                    <a
                                        className="d-block text-center mt-2 small"
                                        href="/"
                                    >
                                        Sign In
                                    </a>
                                    <hr className="my-4" />
                                    <button
                                        className="btn btn-lg btn-google btn-block text-uppercase"
                                        type="submit"
                                    >
                                        <i className="fa fa-google mr-2"></i>{' '}
                                        Sign up with Google
                                    </button>
                                    <button
                                        className="btn btn-lg btn-facebook btn-block text-uppercase"
                                        type="submit"
                                    >
                                        <i className="fa fa-facebook-f mr-2"></i>{' '}
                                        Sign up with Facebook
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Register;
