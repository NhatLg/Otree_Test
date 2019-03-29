
simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {
  JSON.stringify(args);
};

simcapi.Transporter.notifyOnReady();
