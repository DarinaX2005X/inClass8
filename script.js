// Task 1: Highlight words over 8 characters long
const paragraph = document.getElementById("text");
const text = paragraph.innerHTML;
const highlightedText = text.replace(/\b\w{9,}\b/g, function (word) {
    return `<span style="background-color: yellow">${word}</span>`;
});
paragraph.innerHTML = highlightedText;

// Task 2: Add a link back to the source after the paragraph
const link = document.createElement("a");
link.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
link.textContent = "Source of the text";
document.body.appendChild(link);

// Task 3: Split each sentence onto a new line
paragraph.innerHTML = paragraph.innerHTML.replace(/\.\s/g, '.<br>');

// Task 4: Count the number of words in the paragraph
const wordCount = text.split(/\s+/).length;
const wordCountDisplay = document.getElementById("wordCount");
wordCountDisplay.textContent = `Word count: ${wordCount}`;

// Task 5: Replace all question marks and exclamation marks with emojis
paragraph.innerHTML = paragraph.innerHTML
    .replace(/\?/g, '🤔')
    .replace(/\!/g, '😲');
