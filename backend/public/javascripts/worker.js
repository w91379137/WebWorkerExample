
console.log("Worker script loaded");

// 進入點？
onmessage = function (message) {
    console.log("Message received from main script", message);
    const data = message.data;
    var result = "Result: " + data[0] + data[1];
    console.log("Posting message back to main script");
    postMessage(result);
};
