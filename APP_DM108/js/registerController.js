var RegisterController = {
  init: () => {
    RegisterController.refreshRegister();
  },

  refreshRegister: () => {
    mainView.router.back();
  },

  save: () => {
      var now = new Date();
      date = now.getDate()+'/'+now.getMonth()+'/'+now.getFullYear();
      time = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
      RegisterService.save(date,time);
      RegisterController.refreshList();
  },

  limpaNative: () =>{
    RegisterService.limpaNative();
  },

  refreshList: () => {
    var register = RegisterService.getRegisterToday();
    console.log(register);
    if(register != null){
      myApp.virtualList('.list-block.virtual-list', {
        items: register,
        // Template 7 template ira renderizar os itens
        template: 
                '<li>' +
                  '<div class="item-content">' + 
                    '<div class="item-inner">' +
                      '<div class="item-title">{{date}}</div>' +
                      '<div class="item-after">{{time}}</div>' +
                      '<div class="item-after">{{status}}</div>' +
                    '</div>' +
                  '</div>' +
                '</li>'
        });
    }  
  }
};
