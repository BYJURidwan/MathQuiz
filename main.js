function addUser(){
    p1name = document.getElementById("p1input").value;
    p2name = document.getElementById("p2input").value;
    localStorage.setItem("p1name", p1name);
    localStorage.setItem("p2name", p2name);
    window.location = "quiz.html";
}