
var myObject = simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {
  JSON.stringify(args);
};

simcapi.Transporter.notifyOnReady();

console.log(myObject);
