const info = document.querySelector(".info");
document.querySelector(".permission").addEventListener('click', () => {
    askPermission()
})

function askPermission() {
  DeviceOrientationEvent.requestPermission().then((response) => {
    if (response == "granted") {
      let initial = window.DeviceOrientationEvent.beta
      window.addEventListener(
        "deviceorientation",
        (event) => {
          const leftToRight = Math.floor(event.gamma); // gamma: left to right
          const frontToBack = Math.floor(event.beta); // beta: front back motion
          handleOrientationEvent(frontToBack, leftToRight, initial);
        },
        true
      );
    }
  });
}


const handleOrientationEvent = (frontToBack, leftToRight, intial) => {
  info.innerText = `Beta: ${frontToBack}, Gamma: ${leftToRight},  Initial:${intial}`;
};
