import React, { useState } from 'react';
import { checkRequirement } from '../../utils/validator';
import { httpRegister } from './../../services/httpAuth';
import './auth.css';
import { notify } from './../../utils/toast';

const Register = (props) => {
    const [namex, setName] = useState('');
    const [familyx, setFamily] = useState('');
    const [emailx, setEmail] = useState('');
    const [passwordx, setPassword] = useState('');
    const [passwordRex, setPasswordRe] = useState('');
    const [range, setRange] = useState('');
    const [bornDatex, setBornDate] = useState('');
    const [usernamex, setUsername] = useState('');

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
        const rd = document.getElementById('inputRange');
        try {
            const erx = await checkRequirement([
                [name, 3, 255],
                [family, 3, 255],
                [username, 3, 255],
                [email, 3, 255],
                [password2, 8, 1024],
                [password, 8, 1024],
                [rd, 3, 10],
                [bd, 10, 11],
            ]);
            if (erx.length === 0) {
                const res = await httpRegister(
                    namex,
                    familyx,
                    usernamex,
                    emailx,
                    passwordx,
                    bornDatex
                );
                notify('success', 'User successfully registered');
                if (res.headers['x-auth-token']) {
                    await localStorage.setItem(
                        'token',
                        res.headers['x-auth-token']
                    );
                }
                props.history.replace('/');
            } else {
                await notify('error', 'Please fill in all fields');
            }
        } catch (err) {
            if (err.response && err.response.status === 404) {
                notify('error', err.response.data);
            } else {
                notify('error', 'something went wrong');
            }
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
                                            value={namex}
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
                                            value={familyx}
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
                                            value={usernamex}
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
                                            value={emailx}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <small>no</small>
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            id="inputRange"
                                            className="form-control"
                                            placeholder="range"
                                            value={range}
                                            onChange={(e) =>
                                                setRange(e.target.value)
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
                                            value={bornDatex}
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
                                            value={passwordx}
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
                                            value={passwordRex}
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
