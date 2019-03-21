console.log(5+5);

simcapi.Transporter.addInitialSetupCompleteListener(function(configObject) { console.log(JSON.stringify(configObject)); });

var subjectId = simcapi.Transporter.getConfig();
console.log(JSON.stringify(args))
console.log(subjectId);
