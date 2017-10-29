// Inicializacao
var myApp = new Framework7({
  material: false
});
// Exportando os seletores
var $$ = Dom7;

var mainView = myApp.addView(".view-main", {
  // Configurado para o modo de navegação dinâmico
  dynamicNavbar: true
});

$$(document).on('deviceready', function(){
  StatusBar.backgroundColorByHexString("#EE7600"); 
  navigator.splashscreen.show();
  setTimeout(function() {
    navigator.splashscreen.hide();
  }, 2000);
  ConfigController.init();  
  RegisterController.init();
  RegisterController.init();
  // navigator.notification.prompt(
  //   'Please enter your name',  // message
  //   onPrompt,                  // callback to invoke
  //   'Registration',            // title
  //   ['Ok','Exit'],             // buttonLabels
  //   'Jane Doe'                 // defaultText
  // );
});

myApp.onPageInit('config', (page)=>{
  NativeStorage.getItem("config", ConfigController.loadSuccess, ConfigController.loadError);
});

function onPrompt(results) {
  alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}



