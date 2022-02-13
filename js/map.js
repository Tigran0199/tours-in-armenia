let text = document.querySelector(".map_text");
let elements = document.querySelectorAll("path");
function getMainInfo(name) {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let language = localStorage.getItem("language") || "armenian";
      for (let key in data["main"]["map"][language][name]) {
        document.querySelector(`${key}`).innerHTML =
          data["main"]["map"][language][name][key];
      }
    });
  for (let elem of elements) {
    if (elem.style.fill == "white") {
      elem.style.fill = "#007dc4";
      elem.style.stroke = "white";
    }
    if (elem.id == name) {
      elem.style.fill = "white";
      elem.style.stroke = "#007dc4";
    }
  }
}

map_svg.addEventListener("click", function (event) {
  let name = event.target.id;
  for (let elem of elements) {
    if (elem.id == name) {
      getMainInfo(name);
    }
  }
});
