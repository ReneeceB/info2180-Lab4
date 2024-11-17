document.getElementById('searchButton').addEventListener('click', function() {
    let query = document.getElementById('search').value;
    query = encodeURIComponent(query); // Sanitize user input
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php?query=' + query, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('result').innerHTML = xhr.responseText;
        } else {
            document.getElementById('result').innerHTML = 'An error occurred.';
        }
    };
    xhr.send();
});
