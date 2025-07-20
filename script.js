document.getElementById("gymForm").addEventListener("submit", function (e) {
      e.preventDefault();
      this.style.display = "none";
      document.getElementById("successMessage").style.display = "block";
    });

function toggleMenu() {
  document.querySelector(".navbar").classList.toggle("open");
}
