function privateFunc() {
  console.log("This is a private function");
}

function exportedFunc() {
  console.log("This function was exported");
  privateFunc();
}

module.exports = {
  exportedFunc: exportedFunc
}

