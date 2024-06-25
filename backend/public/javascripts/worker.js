
onmessage = function (e) {
    console.log("Message received from main script", e);
    const data = e.data;
    var workerResult = "Result: " + data[0] + data[1];
    console.log("Posting message back to main script");
    postMessage(workerResult);
};
