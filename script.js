const info = document.querySelector(".info");
const center = document.querySelector(".center");
document.querySelector(".permission").addEventListener('click', () => {
    askPermission()
})
function askPermission() {
  DeviceOrientationEvent.requestPermission().then((response) => {
    if (response == "granted") {
      window.addEventListener(
        "deviceorientation",
        (event) => {
          const gamma = Math.floor(event.gamma); // gamma: left to right
          const beta = Math.floor(event.beta); // beta: front back motion
          handleOrientationEvent(gamma, beta);
        },
        true
      );
    }
  });
}


const handleOrientationEvent = (gamma, beta) => {
  info.innerText = `Beta: ${beta}, Gamma: ${gamma}`;
  if (beta <= 90 && beta >= -90){
    center.style.transform = `translate(${beta}px,${gamma}px)`
  }
};
