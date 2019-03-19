import Transporter from 'api/snapshot/Transporter';

let transporter = Transporter.getInstance();

$(document).ready(wait:function() {
  transporter.addInitialSetupCompleteListener(init);
  transporter.notifyOnReady();
});

function init(args) {
  console.log(JSON.stringify(args));

  let studentID = transporter.getConfig().userData.id;
};
