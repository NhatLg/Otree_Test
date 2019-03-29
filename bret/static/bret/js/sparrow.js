function log(data){
 console.log(data);
 return data;
};

simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {

  log(JSON.stringify(args));
  let myObject = $_;
};

simcapi.Transporter.notifyOnReady();

log(myObject);
