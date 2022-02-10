const typeIcon = new Vivus("type", {
  type: "sync",
  duration: 30,
});
const clockIkon = new Vivus("clock", {
  type: "sync",
  duration: 40,
  reverseStack: true,
});
const peopleIcon = new Vivus("people_count", {
  type: "sync",
  duration: 30,
});
const hotelIcon = new Vivus("hotel", {
  type: "sync",
  duration: 50,
});
const seasonIcon = new Vivus("season", {
  type: "sync",
  duration: 30,
});
const startIcon = new Vivus("start_end", {
  type: "sync",
  duration: 30,
});
function playTypeAnim() {
  typeIcon.stop().reset().play();
}
function playClockAnim() {
  clockIkon.stop().reset().play();
}
function playPeopleAnim() {
  peopleIcon.stop().reset().play();
}

function playHotelAnim() {
  hotelIcon.stop().reset().play();
}
function playSeasonAnim() {
  seasonIcon.stop().reset().play();
}
function playStartAnim() {
  startIcon.stop().reset().play();
}
