// To use Html5QrcodeScanner (more info below)
import { Html5QrcodeScanner } from "html5-qrcode";

function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  alert(decodedText)
  console.log(`Code matched = ${decodedText}`, decodedResult);
}
function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

const scanCode = () => {
  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    /* verbose= */ false
  );
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
};

const Attendance = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          
          <button onClick={scanCode}>Click to scane</button>
          <div id="reader" width="600px"></div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
