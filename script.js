const button = document.getElementById("bookAnimation");

button.style.transition =
  "transform 0.15s cubic-bezier(0.175, 0.885, 0.3, 1.275)";

button.addEventListener("mousedown", () => {
  button.style.transform = "scale(0.5)";
});

button.addEventListener("mouseup", () => {
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 100);
});
