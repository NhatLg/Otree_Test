console.log(5+5);

var simModel = new simcapi.CapiAdapter.CapiModel({
    studentId: '5',
    });

simcapi.CapiAdapter.expose('studentId', simModel,
                                            {readonly: true});

simcapi.Transporter.notifyOnReady();

simModel.set('studentId', simcapi.Transporter.getConfig());

var valueId = simModel.get('studentId');
console.log(valueId);
