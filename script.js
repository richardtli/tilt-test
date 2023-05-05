const info = document.querySelector(".info");
const center = document.querySelector(".center");
const MAX_X_CHANGE = 90
const MAX_Y_CHANGE = 90
const FIRST_ITER = true
let first_beta = 0
let first_gamma = 0
document.querySelector(".permission").addEventListener('click', () => {
    askPermission()
})
function askPermission() {
  DeviceOrientationEvent.requestPermission().then((response) => {
    if (response == "granted") {
      window.addEventListener(
        "deviceorientation",
        (event) => {
          if (FIRST_ITER){ 
            first_beta = Math.floor(event.beta)
            first_gamma = Math.floor(event.gamma)
          }
          const gamma = Math.floor(event.gamma); // gamma: left to right
          const beta = Math.floor(event.beta); // beta: front back motion
          handleOrientationEvent(gamma - first_gamma, beta - first_beta);
        },
        true
      );
    }
  });
}


const handleOrientationEvent = (gamma, beta) => {
  info.innerText = `Beta: ${beta}, Gamma: ${gamma}`;
  if (beta <= 80 && beta >= -80){
    center.style.transform = `translate(${gamma}px,${beta}px)`
  }
  // else if (beta >= 90) {
  //   center.style.transform = `translate(${gamma}px,${MAX_X_CHANGE}px)`
  // }
  // else if (beta <= -90) {
  //   center.style.transform = `translate(${gamma}px,${-MAX_X_CHANGE}px)`
  // }
};
