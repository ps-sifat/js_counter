const count = document.querySelectorAll('.count');
const ArrayCount = Array.from(count);
ArrayCount.map((item)=>{
    let countDigit = item.innerHTML;
    let solidDigit = countDigit.split("+") [0];
    let countNumber = 1;
    function CounterUp() {
        item.innerHTML = `${countNumber++} +`;
        if(countNumber > solidDigit) {
            clearInterval(stop);
        }
    }
    let stop = setInterval(() =>{
        CounterUp();
    }, 10);
});