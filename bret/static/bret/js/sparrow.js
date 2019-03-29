console.log(5+5);

simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {
  console.log(JSON.stringify(args));
};

simcapi.Transporter.notifyOnReady();

var studId2=simcapi.Transporter.getConfig().userData.id;
console.log(studId2);
