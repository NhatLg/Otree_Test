console.log(5+5);

simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {
  console.log(window.$log = JSON.stringify(args));
};

simcapi.Transporter.notifyOnReady();

console.log(window.$log);
