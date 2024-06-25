
console.log("Worker script loaded");

var id = 0;

const doWork = () => {
    // console.log("doWork");
    fetch('/log?page=worker')
    .then((response) => {
        console.log(response); 
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
    // postMessage("doWork");
}

// 進入點？
onmessage = function (message) {
    console.log("Message received from main script", message);
    const data = message.data;

    var result = "Result: " + data.join(" ");
    console.log("Posting message back to main script");
    postMessage(result);

    if (data.includes("start")) {
        id = setInterval(doWork, 5000);
    }
    if (data.includes("stop")) {
        clearInterval(id);
        this.close();
    }
};
