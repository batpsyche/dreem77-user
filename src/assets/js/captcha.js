
grecaptcha.ready (function() {
    grecaptcha.execute('6LfI0agUAAAAAOVCkSrcC2vSr98vH8FTZ_No_ABa', {action: 'login'}).then(function(token) {
// pass the token to the backend script for verification
      //  var recaptchaResponse = document.getElementById('recaptchaResponse');
     //   recaptchaResponse.value = token;
        localStorage.setItem('v3token',token);
    });
});



