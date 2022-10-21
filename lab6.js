function myLeft() {
    event.preventDefault();

    document.getElementById('left_column').style.width = "75%";
    document.getElementById('right_column').style.width = "25%";
}
function myCenter() {
    event.preventDefault();
    document.getElementById('left_column').style.width = "50%";
    document.getElementById('right_column').style.width = "50%";
}
function myRight() {
    event.preventDefault();
    document.getElementById('left_column').style.width = "25%";
    document.getElementById('right_column').style.width = "75%";
}

