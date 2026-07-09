fetch("data/status.json")
    .then(response => response.json())
    .then(data => {

        document.getElementById("application").textContent = data.application;
        document.getElementById("version").textContent = data.version;
        document.getElementById("environment").textContent = data.environment;
        document.getElementById("server").textContent = data.server;
        document.getElementById("status").textContent = data.status;
        document.getElementById("deployment").textContent = data.lastDeployment;

    })
    .catch(error => {

        console.error("Błąd podczas odczytu status.json:", error);

    });
