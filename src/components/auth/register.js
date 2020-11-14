import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './auth.css';

const Register = () => {
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRe, setPasswordRe] = useState('');

    const [bornDate, setBornDate] = useState('');
    const [username, setUsername] = useState('');

    //-------------------------------------------------
    const showError = (input, message) => {
        const formCotrol = input.parentElement;
        formCotrol.className = 'form-label-group error';
        const small = formCotrol.querySelector('small');
        small.innerText = message;
    };
    const showSuccess = (input, message) => {
        const formCotrol = input.parentElement;
        formCotrol.className = 'form-label-group success';
        const small = formCotrol.querySelector('small');
        small.innerText = message;
    };

    const checkEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email.value.trim())) {
            alert('success');
        } else {
            showError(email, 'Email is not valid');
            return 'amin';
        }
    };
    const getFeildName = (input) => {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    };
    const checkLength = (input, min, max) => {
        if (input.value.length < min) {
            showError(
                input,
                `${getFeildName(input)} must be at least ${min} characters`
            );
        } else if (input.value.length > max) {
            showError(
                input,
                `${getFeildName(input)} nust be  less than  ${max} characters`
            );
        } else {
            showSuccess(input, 'good');
        }
    };
    const checkRequired = (inputArray) => {
        let status = 0;
        inputArray.forEach((input) => {
            if (input.value.trim() === '') {
                showError(input, `${getFeildName(input)} is required`);
                status = 1;
                return;
            } else {
                showSuccess(input, 'good');
            }
        });
        if (status === 1) {
            return 'amin';
        }
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
            const e = await checkRequired([
                name,
                family,
                username,
                email,
                password2,
                password,
                bd,
            ]);

            await checkLength(name, 3, 256);
            await checkLength(family, 3, 256);
            await checkLength(password, 8, 1024);
            await checkLength(username, 3, 256);
            console.log(e);
            await checkEmail(email);
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
                                            type="email"
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
                                        href="#"
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
