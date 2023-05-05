const info = document.querySelector(".info");
const center = document.querySelector(".center");
const MAX_X_CHANGE = 90
const MAX_Y_CHANGE = 90
let FIRST_ITER = true
let first_beta = 0
let first_gamma = 0
let first_beta_distance_from_90
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
            first_beta_distance_from_90 = 90 - first_beta
          }
          const gamma = Math.floor(event.gamma); // gamma: left to right
          const beta = Math.floor(event.beta); // beta: front back motion
          if(beta < 80 && beta > 2* first_beta - 90){
            let rel_beta = beta - first_beta
            let rel_gamma = gamma - first_gamma
            handleOrientationEvent(rel_gamma, rel_beta);
          }
          FIRST_ITER = false;
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
