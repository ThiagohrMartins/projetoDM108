var ConfigController = {

    init: function () {
        $$(document).on('click',
            '#saveConfig', ConfigController.save);

        $$(document).on('click',
            '#clear', ConfigController.clear);

        $$(document).on('click',
            '#btnLocation', ConfigController.getLocation);        
    },

    save: function() {
        var name = $$('#username').val();
        var email = $$('#email').val();
        var password = $$('#password').val();
        var phone = $$('#phone').val();
        var gender = $$('#gender').val();
        var birth = $$('#birth').val();
        var latitude = $$('#latitude').val();
        var longitude = $$('#longitude').val();
        ConfigService.save(name, email, password, phone, gender, birth, latitude, longitude );
    },

    clear: function() {
        myApp.alert('limpa');
        $$('#username').val('') ;
        $$('#email').val('');
        $$('#password').val('');
        $$('#phone').val('');
        $$('#birth').val('');
        $$('#latitude').val('');
        $$('#longitude').val('');

    },
    getLocation: function(){
        navigator.geolocation.getCurrentPosition(ConfigController.onGetPositionSuccess,
            ConfigController.onGetPositionError, {enableHighAccuracy: true, timeout: 15000, maximumAge: 0});
    },
    onGetPositionSuccess: function(position){
        $$('#latitude').val(position.coords.latitude);
        $$('#longitude').val(position.coords.longitude);
        myApp.alert("Localização encontrada");
    },
    onGetPositionError: function(){
        alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    },
    onSuccess: function(){
        myApp.alert("Configuração Salva com Sucesso ");
    },
    onError: function(){
        myApp.alert("Erro ao salvar config");
    },
    loadSuccess: function(obj){
        console.log(obj);
        $$('#username').val(obj.username) ;
        $$('#email').val(obj.email);
        $$('#password').val(obj.password);
        $$('#phone').val(obj.phone);
        $$('#birth').val(obj.birth);
        $$('#latitude').val(obj.latitude);
        $$('#longitude').val(obj.longitude);
    },
    loadError: function(){
        myApp.alert("erro ao buscar Config");
    },

    
}