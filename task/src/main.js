document.addEventListener("keydown", function(e) {
    switch (e.code) {
        case "KeyA":
            let auKeyA = new Audio("./sound/white_keys/A.mp3");
            auKeyA.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'A' key is pressed.";
                document.getElementById("keyA").style.backgroundColor = "#B4D6D3";
            });
            break;
        case "KeyS":
            let auKeyS = new Audio("./sound/white_keys/S.mp3");
            auKeyS.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'S' key is pressed.";
                document.getElementById("keyS").style.backgroundColor = "#b4d6d3";
            });

            break;
        case "KeyD":
            let auKeyD = new Audio("./sound/white_keys/D.mp3");
            auKeyD.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'D' key is pressed.";
                document.getElementById("keyD").style.backgroundColor = "#B4D6D3";
            });

            break;
        case "KeyF":
            let auKeyF = new Audio("./sound/white_keys/F.mp3");
            auKeyF.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'F' key is pressed.";
                document.getElementById("keyF").style.backgroundColor = "#B4D6D3";
            });

            break;
        case "KeyG":
            let auKeyG = new Audio("./sound/white_keys/G.mp3");
            auKeyG.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'G' key is pressed.";
                document.getElementById("keyG").style.backgroundColor = "#B4D6D3";
            });

            break;
        case "KeyH":
            let auKeyH = new Audio("./sound/white_keys/H.mp3");
            auKeyH.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'H' key is pressed.";
                document.getElementById("keyH").style.backgroundColor = "#B4D6D3";
            });

            break;
        case "KeyJ":
            let auKeyJ = new Audio("./sound/white_keys/J.mp3");
            auKeyJ.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'J' key is pressed.";
                document.getElementById("keyJ").style.backgroundColor = "#B4D6D3";
            });
            break;

        //Black keys
        case "KeyW":
            let auKeyW = new Audio("./sound/black_keys/W.mp3");
            auKeyW.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'W' key is pressed.";
                document.getElementById("keyW").style.boxShadow = "0 0 0 0";
            });
            break;
        case "KeyE":
            let auKeyE = new Audio("./sound/black_keys/E.mp3");
            auKeyE.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'E' key is pressed.";
            });
            break;
        case "KeyT":
            let auKeyT = new Audio("./sound/black_keys/T.mp3");
            auKeyT.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'T' key is pressed.";
            });
            break;
        case "KeyY":
            let auKeyY = new Audio("./sound/black_keys/Y.mp3");
            auKeyY.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'Y' key is pressed.";
            });
            break;
        case "KeyU":
            let auKeyU = new Audio("./sound/black_keys/W.mp3");
            auKeyU.play().then(r => {
                document.getElementById("quote").innerHTML = "The 'U' key is pressed.";
            });
            break;
        default:
            document.getElementById("quote").innerHTML = "The key is pressed incorrectly.";
            break;
    }
});


document.addEventListener("keyup", function(e) {
    switch (e.code) {
        case "KeyA":
            document.getElementById("keyA").style.backgroundColor = "white"
            break;
        case "KeyS":
            document.getElementById("keyS").style.backgroundColor = "white"
            break;
        case "KeyD":
            document.getElementById("keyD").style.backgroundColor = "white"
            break;
        case "KeyF":
            document.getElementById("keyF").style.backgroundColor = "white"
            break;
        case "KeyG":
            document.getElementById("keyG").style.backgroundColor = "white"
            break;
        case "KeyH":
            document.getElementById("keyH").style.backgroundColor = "white"
            break;
        case "KeyJ":
            document.getElementById("keyJ").style.backgroundColor = "white"
            break;
        default:
            document.getElementById("quote").innerHTML = "The key is pressed incorrectly.";
            break;
    }
});


