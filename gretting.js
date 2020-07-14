const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";
function handleSubmit(event){//이벤트가 일어나면 일어나는 함수
    event.preventDefault();//submit의 이벤트 기본동작인 text 지우기를 막는다
    const currentValue= input.value;//입력값받기
    paintGreeting(currentValue);
    saveName(currentValue);

}
function deleteGreeting(event) {
    
    
    form.classList.add(SHOWING_CN);
    greeting.classList.remove(SHOWING_CN);
    localStorage.removeItem(USER_LS);
}
function saveName(text){
    localStorage.setItem(USER_LS,text);//웹에 입력한값을 저장
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);//이벤트와 함수를 연결
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    const delBtn = document.createElement("button");
    delBtn.innerText=`사용자 종료`;
    delBtn.addEventListener("click",deleteGreeting);
    greeting.innerText = `Hello ${text} \n`;
    greeting.appendChild(delBtn);
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser==null){
        askForName()
    }else{
        paintGreeting(currentUser)
    }
    
}
function init(){
    loadName();
}
//localStorage 개인 컴퓨터에 저장되는 정보
init();