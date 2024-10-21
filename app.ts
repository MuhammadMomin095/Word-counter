document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input') as HTMLTextAreaElement;
    const wordCountDisplay = document.getElementById('word-count') as HTMLDivElement;
    const charCountDisplay = document.getElementById('char-count') as HTMLDivElement;
    const sentenceCountDisplay = document.getElementById('sentence-count') as HTMLDivElement;

    const updateCounts = () => {
        const text = textInput.value.trim();

        const words = text.length > 0 ? text.split(/\s+/) : [];
        const wordCount = words.length;
        const charCount = text.length;
        const sentenceCount = text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;

        wordCountDisplay.textContent = `Words: ${wordCount}`;
        charCountDisplay.textContent = `Characters: ${charCount}`;
        sentenceCountDisplay.textContent = `Sentences: ${sentenceCount}`;
    };

    textInput.addEventListener('input', updateCounts);
});
