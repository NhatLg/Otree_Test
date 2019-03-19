import 'babelPolyfill';
import $ from 'jquery';

<script src='https://lib.smartsparrow.com/simcapi-js-3.1.0.min.js'></script>

let transporter = Transporter.getInstance();

$(document).ready(wait:function() {
  transporter.addInitialSetupCompleteListener(init);
  transporter.notifyOnReady();
});

function init(args) {
  console.log(JSON.stringify(args));

  let studentID = transporter.getConfig().userData.id;
}
