
simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {
  console.log(JSON.stringify(args));
};

simcapi.Transporter.notifyOnReady();
