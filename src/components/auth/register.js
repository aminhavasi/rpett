import React, { useState } from 'react';
import { checkRequirement } from '../../utils/validator';
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
            const erx = await checkRequirement([
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
