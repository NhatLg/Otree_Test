function log(data){
 console.log(data);
 return data;
};

simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {

  log(JSON.stringify(args));

};

simcapi.Transporter.notifyOnReady();
let myObject = $_;
log(myObject);
