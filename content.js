let elements = document.getElementById("file_parent");
elements.innerHTML = "<textarea style=\"height: 300px; width:98%;\" id=\"abhineet\">//Coderly is working...</textarea>";

console.log("Coderly is running!");

var div = document.getElementsByClassName('right-sidebar');
div[0].innerHTML = "<b><h3>   Coderly</h3></b><br>  Suggestions: <br>";
div[0].style.backgroundColor = "white";

let code = "";
document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === "Space") {
        code = "";
    }
    else if (event.key === "Enter") {
        code = "";
    }
    else if (event.key === "Backspace") {
        code = "";
        div[0].innerHTML = "<b><h3>   Coderly</h3></b><br>  Suggestions: <br>";
    }
    else if (event.key === "Shift" || event.key === "Control") {
    }
    else {
        code = code + event.key;
    }
    console.log(code);
    if (code.length > 0) {
        if (code.charAt(0) === "#") {
            let els = document.getElementById('abhineet');
            els.value = "#include";
            div[0].innerHTML = "<b><h3>   Coderly</h3></b><br>  Suggestions: <br> <button>#include &lt;iostream&gt;</button>"
            div[0].innerHTML += "<button>#include &lt;unistd&gt;</button>";
        }
        if (code === "for") {
            let els = document.getElementsByTagName('textarea');
            els[1].value = "for (int i = 0; i < n; i++) {// insert code here}";
        }
        if (code === 'ifel') {
            let els = document.getElementsByTagName('textarea');
            els[1].value = "if(condition) {//insert code} else {// insert code}";
        }
    }
}, false);



// var intervalId = window.setInterval(function () {
//     code = elements[1].innerHTML;
//     console.log(code);
// }, 500);


// switch statement to complete code (.innerHTMl)
// a popup on the website

// ideone.com

// 

