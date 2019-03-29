console.log(5+5);

console.oldLog = console.log;

console.log = function(value)
{
    console.oldLog(value);
    window.$log = value;
};

simcapi.Transporter.addInitialSetupCompleteListener(init);

function init(args) {
  console.log(JSON.stringify(args));
};

simcapi.Transporter.notifyOnReady();

console.oldLog($log);
