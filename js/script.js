const username = document.querySelector('#username');
const password = document.querySelector('#password');
const btnLogin = document.querySelector('#btnLogin');
const pesan = document.querySelector('#pesan');
let database = [
    {
        'user' : 'sayang',
        'pass' : '210703'
    },
    {
        'user' : 'Sayang',
        'pass' : '210703'
    }
]
btnLogin.addEventListener('click',()=>{
    pesan.innerHTML = '';
    let user = username.value;
    let pass = password.value;
    let validate = true;
    if (user == ''){
        validate = false;
        pesan.innerHTML += '<div class="alert alert-danger">Username tidak boleh kosong</div>';
    }
    if (pass == ''){
        validate = false;
        pesan.innerHTML += '<div class="alert alert-danger">Password tidak boleh kosong</div>';
    }
    if (validate) {
        let success = {'user' : false, 'pass' : false};
        for (let i = 0; i < database.length; i++) {
            if (user == database[i]['user']) {
                success.user = true;
                if (pass == database[i]['pass']) {
                    success.pass = true;
                }
            }
        }
        if (success.user) {
            if (success.pass) {
                document.location.href = 'home.html';
            }else{
                pesan.innerHTML += '<div class="alert alert-danger">Password salah</div>';
            }
        }else{
            pesan.innerHTML += '<div class="alert alert-danger">Username tidak dikenali</div>';
        }
    }

});
