const button = document.querySelector(".button");

button.addEventListener("click", () => {
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
    button
      .querySelector("i")
      .classList.replace("bx-cloud-download", "bx-check-circle");
    button.querySelector("a").innerText = "Completed";


  }, 6000);
});