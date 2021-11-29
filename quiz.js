p1name = localStorage.getItem("p1name");
p2name = localStorage.getItem("p2name");

p1score = 0;
p2score = 0;
document.getElementById("p1name").innerHTML = p1name + ":";
document.getElementById("p2name").innerHTML = p2name + ":";
document.getElementById("p1score").innerHTML = p1score;
document.getElementById("p2score").innerHTML = p2score;
document.getElementById("playerQ").innerHTML = "Question Turn - " + p1name;
document.getElementById("playerA").innerHTML = "Answer Turn - " + p2name;

function sendEq(){
    N1 = document.getElementById("N1").value;
    N2 = document.getElementById("N2").value;
    acAns = parseInt(N1)*parseInt(N2)
    qNum = "<h4>" + N1 + " × " + N2 + "</h4>";
    inputBox = "<br> Answer: <input type='text' id='inputCheckBox'>";
    checkButton = "<br> <br> <button class='btn-info' onclick = 'check()'> CHECK </button>";
    ROW = qNum + inputBox + checkButton;
    document.getElementById("output").innerHTML = ROW;
    document.getElementById("N1").value = null;
    document.getElementById("N2").value = null;
};

questionTurn = "player1";
answerTurn = "player2";

function check(){
    getAnswer = document.getElementById("inputCheckBox").value;
    if(getAnswer == acAns){
        if(answerTurn == "player1"){
            p1score = p1score + 1;
            document.getElementById("p1score").innerHTML = p1score;
        } else {
            p2score = p2score + 1;
            document.getElementById("p2score").innerHTML = p2score;
        }
        
    }

    if(questionTurn == "player1"){
        questionTurn = "player2"
        document.getElementById("playerQ").innerHTML = "Question Turn - " + p2name;
    } else {
        questionTurn = "player1"
        document.getElementById("playerQ").innerHTML = "Question Turn - " + p1name;
    }

    if(answerTurn == "player1"){
        answerTurn = "player2"
        document.getElementById("playerA").innerHTML = "Answer Turn - " + p2name;
    } else {
        answerTurn = "player1"
        document.getElementById("playerA").innerHTML = "Answer Turn - " + p1name;
    }
    document.getElementById("output").innerHTML = null;
};
