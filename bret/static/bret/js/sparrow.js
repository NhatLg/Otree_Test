console.log(5+5);

simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {
  var myObj=JSON.stringify(args);
};

simcapi.Transporter.notifyOnReady();
console.log(myObj.handshake.config.userData.id)
