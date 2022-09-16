var time = new Date().getHours();

if (time >= 7 && time <= 12) {
    alert("Good Morning");
    document.body.style.backgroundColor = "blue";
}

else if (time > 12 && time <= 18) {
    alert("Good Afternoon");
    document.body.style.backgroundColor = "red";
}

else {
    alert("Good Evening");
    document.body.style.backgroundColor = "black";
}