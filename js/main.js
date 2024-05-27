const count = document.querySelectorAll(".count");
const ArrayCount = Array.from(count);
// map
ArrayCount.map((item) => {
  let countDigit = item.innerHTML;
  let solidDigit = countDigit.split("+")[0];
  let countNumber = 1;
  // function
  function CounterUp() {
    item.innerHTML = `${countNumber++} +`;
    if (countNumber > solidDigit) {
      clearInterval(stop);
    }
  }
  // time
  let stop = setInterval(() => {
    CounterUp();
  }, 10);
});
