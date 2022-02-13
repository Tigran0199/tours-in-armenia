const beautiful_svg = new Vivus("beautiful_svg", {
    type: "oneByOne",
    duration: 100,
    reverseStack: true,
  });
  function playBeautifulAnim() {
    beautiful_svg.stop().reset().play();
  }