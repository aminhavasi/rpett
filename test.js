const { errorHandler } = require('./src/utils/err');
const bf = () => {
    return errorHandler('salam', 104);
};

const res = bf();
console.log(res);
