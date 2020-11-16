import { toast } from 'react-toastify';

const toastOption = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};
export const notify = (level, message) => {
    if (level === 'warning') {
        toast.warning(message, toastOption);
    } else if (level === 'info') {
        toast.info(message, toastOption);
    } else if (level === 'success') {
        toast.success(message, toastOption);
    } else if (level === 'error') {
        toast.error(message, toastOption);
    } else {
        toast(message);
    }
};
