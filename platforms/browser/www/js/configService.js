var ConfigService = {
    save: function(name, email, password, phone, gender, birth,latitude, longitude ){
        data = {
            username: name,
            email : email,
            password : password,
            phone : phone,
            gender : gender,
            birth : birth,
            latitude : latitude,
            longitude : longitude
         }
         NativeStorage.setItem("config",data, ConfigController.onSuccess, ConfigController.onError)
    }
}