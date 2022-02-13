let text = document.querySelector(".map_text");
let elements = document.querySelectorAll("path");
function getMainInfo(name) {
  head.innerHTML = ` ${mainInfo[name]["head"]}`;
  main.innerHTML = `${mainInfo[name]["info"]}`;
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let language = languageSelector.value;
      let country = data["main"]["map"][language][name];
      for (let elem in country) {
        document.querySelector(elem).innerHTML = country[elem];
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
