const myModal = new bootstrap.Modal("#register-modal");
let Logged = sessionStorage.getItem("Logged");
const session =localStorage.getItem("session");

checklogged();

//logar no sistema
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); 

   


    const email = document.getElementById("E-mail-input").value;
    const password = document.getElementById("password-input").value;
    const sessiom = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account) {
        alert("OOOps... verifique o usuario ou a senha.");
        return;
    }

    if(account) {
        if(account.password !== password) {
            alert("OOOps... verifique o usuario ou a senha.");   
            return;           
        }

        saveSession(email, checkedSession);

        window.location.href = "home.html";
    }
});

document.getElementById("creat-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("E-mail-creat-input").value;
    const password = document.getElementById("password-creat-input").value;
    
    if(email.length < 5) {
        alert("preecha o campo com um e-mail valido.");
        return;
     }

     if(password.length < 4) {
         alert("preencha a senha com no minimo 4 digitos.");
         return;
     }
     saveAccount({
        login: email,
        password: password,
        transactions:[] 

     });

        myModal.hide();

        alert("conta criada com sucesso.");

});

function checkLogged(){
    if(session){
        sessionStorage.setItem("Logged, session");
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);
        window.location.href = "home.html";
    }
}
 
function saveAccount(data) {
    localStorage.setItem(data. login, JSON.stringify(data));
}

function Account(key) {
    const account = localStorage.getItem(key);
    if(account) {
        return JSON.parse(account);
        
    }
    return"";
}
