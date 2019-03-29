console.log(5+5);

simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {
  let myObject = JSON.stringify(args);
};

simcapi.Transporter.notifyOnReady();

console.log(myObject);
