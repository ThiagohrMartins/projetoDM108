var RegisterService = {

    registerArray: new Array(),
    
    ini: ()=>{

    },
    save: (date,time) => {
        NativeStorage.getItem('registerArray', RegisterService.getRegistersSuccess, (error)=>{console.log(error.code);
            if (error.exception !== "") console.log(error.exception);});
        
        var register = new Register(date,time,"entrada");
        RegisterService.registerArray.push(register);

        NativeStorage.setItem('registerArray',
        RegisterService.registerArray, RegisterService.setRegistersSuccess,
            RegisterService.setRegistersError);        
    },

    limpaNative: () => {
        NativeStorage.remove('registerArray', RegisterService.removeSuccess,
         RegisterService.removeError);
    },

    getRegisterToday: () => {
        NativeStorage.getItem('registerArray', RegisterService.getRegistersSuccess,
         RegisterService.getRegistersError);
        return RegisterService.registerArray;
    },

    cancel: () =>{

    },

    getLastRegister: () => {

    },
    getRegistersSuccess: (obj) => {
        console.log(obj);
        if(obj != undefined ){
            RegisterService.registerArray = obj;
        }
                    
    },
    getRegistersError: (error) => {
        console.log(error.code);
        if (error.exception !== "") console.log(error.exception);
    },
    setRegistersSuccess: (obj) => {
        myApp.alert('Ponto Registrado');
        console.log(obj);
    },
    setRegistersError: (error) => {
        console.log(error);
        if (error.exception !== "") console.log(error.exception);
    },
    removeSuccess: () => {
        myApp.alert('limpo');
    },
    removeError: (error) =>  {
        console.log(error.code);
        if (error.exception !== "") console.log(error.exception);
    }
}