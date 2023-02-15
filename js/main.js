var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var signUp = document.getElementById('signUp');
var Login =document.getElementById('Login');
var homeName = document.getElementById('homeName');
var nameActive;

var accountContainer = [];

if(localStorage.getItem('account') != null)
{
    accountContainer = JSON.parse(localStorage.getItem('account'));
}

if(localStorage.getItem('nameActive') != null)
{
    nameActive = JSON.parse(localStorage.getItem('nameActive'));
}

if(signUp!==null){
    signUp.addEventListener('click',function(e){
        addAcount();
    })
}
if(Login!==null){
    
Login.addEventListener('click',function(e){
    signIn();
})
}

if(homeName !== null){
    homeName.innerHTML =`Welcome ${nameActive}` ;
    //  console.log(x);
}

function addAcount()
{
    var account = {
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    if(searchAccount(account.email) == false)
    {
        accountContainer.push(account);
        localStorage.setItem("account",JSON.stringify(accountContainer));
        localStorage.setItem("nameActive",JSON.stringify(account.name));

        clearForm();
    
        console.log(accountContainer);
        alert("acount added");
        // nameActive = account.name;
        window.location.href="home.html";

    }
    else
    {
        alert("write another email or sign in");
    }
    
     
}


function signIn()
{
    var acountSignIn = searchAccount(emailInput.value);
    if(acountSignIn == false)
    {
        alert("wrong account")
    }
    else{ 
        alert("hello");
        console.log(acountSignIn)
        if(acountSignIn.password == passwordInput.value)
        {
            localStorage.setItem("nameActive",JSON.stringify(acountSignIn.name));
            // document.getElementById('homeName').innerHTML
            //  var x= displayHome(acountSignIn.name);
            //  console.log(x);
            // nameActive = displayHome(acountSignIn.name);
            alert(`welcome ${acountSignIn.name}`);
            window.location.href="home.html";
        }
    }
}


// function deleteAccount(x)
// {
//     accountContainer.splice(x,1);
//     localStorage.setItem("account",JSON.stringify(accountContainer));
// }

function clearForm()
{
    nameInput.value="";
    emailInput.value="";
    passwordInput.value="";
}

function searchAccount(term)
{
    var x = 0;
    var number;
    console.log(term);
    if (accountContainer.length == 0) {
      return false;
     
    } else {
        for (var i = 0; i < accountContainer.length; i++) {
            if (accountContainer[i].email == term) {
                x = 1;
                number = i ;
                console.log("i="+number);
            } 
          }
          if(x == 0)
          {
            console.log("false");
            return false;
          } else  {
            console.log(x);
              console.log("true");
              return accountContainer[number];
            }

    }
    
}

// function displayHome(name)
// {
//     var x =`welcome ${name}`;
//     console.log(name);
//     console.log(x);
//     return x;
//     // document.getElementById('homeName').innerHTML = x ;
// }