

simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {

  console.log(JSON.stringify(args));
  studentID = simcapi.Transporter.getConfig().userData.id;
};
console.log(studentID)
simcapi.Transporter.notifyOnReady();

document.getElementById('id_spStudentID').value = studentID ;