document.getElementById("search").addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "superheroes.php", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert(xhr.responseText);
        }
    };
    xhr.send();
});
