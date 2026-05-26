fetch("https://quotes.osaidii.hackclub.app/get")
    .then(response => response.json())
    .then(data => {
    document.getElementById("quote").innerText = `"${data.quote}"`;
    })
    .catch(err => {
        document.getElementById("quote").innerText = "Failed to load quote.";
        console.error(err);
        });