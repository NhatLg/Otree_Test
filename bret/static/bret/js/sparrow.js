

simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {

  console.log(JSON.stringify(args));
  let studentID = simcapi.Transporter.getConfig().userData.id;
  console.log(studentID);
};

simcapi.Transporter.notifyOnReady();
var studID = studentID;
