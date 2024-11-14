import Swal from 'sweetalert2'

export const useRegister = (userRegisterObject: object) => {
    const register = async () => {
        try {
            const response: { _data: string } = await $fetch('/v1/user/signup', {
                method: 'POST',
                body: { ...userRegisterObject },
                baseURL: 'https://nuxr3.zeabur.app/api',
            });

            userRegisterObject = {
                name: "",
                email: "",
                password: "",
                phone: "",
                birthday: "",
                address: {
                    zipcode: '',
                    detail: ''
                }
            };

            Swal.fire({
                position: "center",
                icon: 'success',
                title: '註冊成功',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error: any) {
            const { message } = error.response._data;

            Swal.fire({
                position: "center",
                icon: 'error',
                title: message || '註冊失敗',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return { register };
};