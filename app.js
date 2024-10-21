document.addEventListener('DOMContentLoaded', function () {
    var textInput = document.getElementById('text-input');
    var wordCountDisplay = document.getElementById('word-count');
    var charCountDisplay = document.getElementById('char-count');
    var sentenceCountDisplay = document.getElementById('sentence-count');
    var updateCounts = function () {
        var text = textInput.value.trim();
        var words = text.length > 0 ? text.split(/\s+/) : [];
        var wordCount = words.length;
        var charCount = text.length;
        var sentenceCount = text.split(/[.!?]/).filter(function (sentence) { return sentence.trim().length > 0; }).length;
        wordCountDisplay.textContent = "Words: ".concat(wordCount);
        charCountDisplay.textContent = "Characters: ".concat(charCount);
        sentenceCountDisplay.textContent = "Sentences: ".concat(sentenceCount);
    };
    textInput.addEventListener('input', updateCounts);
});
