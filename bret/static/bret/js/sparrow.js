var studentID = simcapi.Transporter.getConfig();
console.log(5+5);
console.log(studentID);
simcapi.Transporter.addInitialSetupCompleteListener(function(configObject) { console.log(JSON.stringify(configObject)); });
