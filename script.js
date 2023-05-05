const info = document.querySelector(".info");
document.querySelector(".permission").addEventListener('onclick', () => {
    askPermission()
})

function askPermission() {
  DeviceOrientationEvent.requestPermission().then((response) => {
    if (response == "granted") {
      window.addEventListener(
        "deviceorientation",
        (event) => {
          const rotateDegrees = event.alpha; // alpha: rotation around z-axis
          const leftToRight = event.gamma; // gamma: left to right
          const frontToBack = event.beta; // beta: front back motion
          handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
        },
        true
      );
    }
  });
}


const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
  info.innerText = `Alpha: ${rotateDegrees}, Beta: ${frontToBack}, Gamma: ${leftToRight}`;
};
