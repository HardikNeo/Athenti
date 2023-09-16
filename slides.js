async function slides() {
  while (true) {
    await setTimeout(() => {
      document.getElementById("slide1").style.display = "none";
    }, 5000);
    await setTimeout(() => {
      document.getElementById("slide2").style.display = "none";
    }, 5000);
    await setTimeout(() => {
      document.getElementById("slide1").style.display = "block";
    }, 5000);
  }
}

slides();
