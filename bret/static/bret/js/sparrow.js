<script src='https://lib.smartsparrow.com/simcapi-js-3.1.0.min.js'></script>

let transporter = Transporter.getInstance();

function init(args) {
  console.log(JSON.stringify(args));

  let studentID = transporter.getConfig().userData.id;
}
