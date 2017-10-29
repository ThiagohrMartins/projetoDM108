var app = {
  initialize: function() {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );

    $$(document).on("click", "#PageRegister", this.loadPageRegister);

    $$(document).on("click", "#PageHistorico", this.loadPageHistorico);

    $$(document).on("click", "#PageConfig", this.loadPageConfig);

    $$(document).on("click", "#registerTime", this.registerTime);

    $$(document).on("click", "#limpaNative", this.limpaNative);
  },  
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    //myApp.alert("Exemplo modal", "Exemplo modal!");
    //navigator.notification.beep(2);
    // navigator.notification.alert(
    //   "Local de trabalho",
    //   app.alertCallbackTrabalho,
    //   "Marcar Ponto?",
    //   "Sim"
    // );
    var date = new Date();
    var dateToday = date.getDate();
    var dayName = new Array(
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado"
    );
    var listHTML =
      "<ul>" +
      "<h3>" +
      dayName[date.getDay()] +
      " - " +
      date.getDate() +
      " / " +
      date.getMonth() +
      "/ " +
      date.getFullYear() +
      "</h3>" +
      "</ul>";
    // And insert generated list to page content
    $$(document).find(".content-block-title").append(listHTML);
    RegisterController.refreshList();      
  },

  registerTime: () => {
    RegisterController.save();
  },

  limpaNative: () => {
    RegisterController.limpaNative();
  },

  alertCallbackTrabalho: function() {
    navigator.vibrate([1000, 1000, 2000, 1000, 4000]);
    navigator.geolocation.getCurrentPosition(
      app.onGetPositionSuccess,
      app.onGetPositionError,
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  },

  onGetPositionSuccess: function(position) {
    alert(
      "Latitude: " +
        position.coords.latitude +
        "\n" +
        "Longitude: " +
        position.coords.longitude +
        "\n" +
        "Altitude: " +
        position.coords.altitude +
        "\n" +
        "Accuracy: " +
        position.coords.accuracy +
        "\n" +
        "Altitude Accuracy: " +
        position.coords.altitudeAccuracy +
        "\n" +
        "Heading: " +
        position.coords.heading +
        "\n" +
        "Speed: " +
        position.coords.speed +
        "\n" +
        "Timestamp: " +
        position.timestamp +
        "\n"
    );
  },

  onGetPositionError: function() {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
  },
  loadPageRegister: () => {
    mainView.router.loadPage("register.html");
  },

  loadPageHistorico: () => {
    mainView.router.loadPage("historico.html");
  },

  loadPageConfig: () => {
    mainView.router.loadPage("config.html");
  }
};
app.initialize();
