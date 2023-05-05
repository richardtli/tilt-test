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
          const leftToRight = Math.floor(event.gamma); // gamma: left to right
          const frontToBack = Math.floor(event.beta); // beta: front back motion
          handleOrientationEvent(frontToBack, leftToRight);
        },
        true
      );
    }
  });
}


const handleOrientationEvent = (frontToBack, leftToRight) => {
  info.innerText = `Beta: ${frontToBack}, Gamma: ${leftToRight}`;
  center.style.transform = `translateX(${leftToRight}px translateY(${frontToBack}px)`
};
