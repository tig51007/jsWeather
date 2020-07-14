const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText=`${hours > 12 ? `오후 \n${hours-12}` : `오전 \n${hours}`}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds<10 ?`0${seconds}` : seconds}`;//삼항연산자.. 작은 if문

}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();