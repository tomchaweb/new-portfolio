const getIntouchButton = document.getElementById("get-in-touch-btn");

function SendMail(){
    const link = "mailto:tom.chapman97@btinternet.com";
    window.location.href = link;
}

getIntouchButton.addEventListener("click", SendMail);