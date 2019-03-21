console.log(5+5);

simcapi.Transporter.addInitialSetupCompleteListener(function(configObject) { console.log(JSON.stringify(configObject)); });

var subjectId = simcapi.Transporter.getConfig();

console.log(subjectId);

let transporter = simcapi.Transporter.getInstance();

let studId = transporter.getConfig();

simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {
  console.log(JSON.stringify(args));
};

simcapi.Transporter.notifyOnReady();
console.log(studId);
