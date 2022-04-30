var form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {

      alert("We've recived your submission. Thanks!")
    });
  });

  const form1 = document.getElementById('sheetdb-form');

form1.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form1.reset();
});

