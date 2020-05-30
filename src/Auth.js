class Authentication {

    constructor() {
        this.isLogin = false;
    }

    onLogin(data,cb) {
        localStorage.setItem('cryptotoken', data);
        this.isLogin = true;
        cb();
    };

    onLogout(cb) {
        localStorage.removeItem('cryptotoken')
        cb();
    };

    isAuthenticated() {
        if (localStorage.getItem('admincodeotoken')) {
            return true;
        }else {
            return false;
        }
    }

};

export default new Authentication();