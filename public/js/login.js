// //MB
// const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
//  MB
//10-19-23
//login.js is ready for testing. awaiting handlebar forms




const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Error : Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  




//#MB option2 ///////////////////
// const __dirname = dirname(fileURLToPath(import.meta.url));
// //^^ change to requires vs import

// //MB  compare passwords to auth user
// let passWord = "user-db-password";
// let userPassWord = ""; //pull from db
// let isAuthorized = false;


// // MB - store user password from form. compare it to authenticate
// function passCode(req, res, next){
//     userPassWord = req.body["password"];

//     if(passWord === userPassWord){
//         isAuthorized=true;
//     }
//     next();
// };

// app.use(passCode);

// // MB - if authorized  app.post/check (show the form for user data/product input)
// let accessGranted = app.post("/check", (req, res) => {
//     if (isAuthorized){
//     res.sendFile(__dirname + "/public/secret.html") //page to render
//     } else {
//         res.sendFile(__dirname+"/public/index.html");
        
//     }
// });




