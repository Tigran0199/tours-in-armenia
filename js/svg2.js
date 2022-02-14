const beautiful_svg = new Vivus("beautiful_svg", {
  type: "sync",
  duration: 100,
  reverseStack: true,
});
function playBeautifulAnim() {
  beautiful_svg.stop().reset().play();
}
