console.log(5+5);
var simModel = new simcapi.CapiAdapter.CapiModel({
    studId: '5',
});

simcapi.CapiAdapter.expose(studId, simModel);
simcapi.Transporter.notifyOnReady();

simModel.set('studId', simcapi.Transporter.getConfig());

var valueId = simModel.get('studId');
console.log(valueId);
