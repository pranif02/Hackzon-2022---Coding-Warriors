const button = document.getElementById("button1");
button.onclick = connect;
async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        document.getElementById("button").innerHTML = "Connected!";
    } else {
        document.getElementById("button").innerHTML = "Install metamask";
    }
}