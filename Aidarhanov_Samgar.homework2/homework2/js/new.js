var myTextareaElement = document.getElementById("myWordsToCount");

myTextareaElement.onkeyup = function () {
    // your code goes here
    document.getElementById("wordcount").innerHTML = wordCountFunction();
}

function wordCountFunction() {
    let words = myTextareaElement.value;
    let arrayWords = words.split(' ');
    var wordCount = arrayWords.length
    for (let i = 0; i <= arrayWords.length; i++) {
        if (arrayWords[i] == ' ') {
            arrayWords.splice[i];
        }
    }

    return wordCount;
}
