chrome.runtime.onMessage.addListener(receiver);
console.log("Coderly...");

window.word = "";
function receiver(request, sender, sendResponse) {
    word = request.text;
    console.log(word);
}
