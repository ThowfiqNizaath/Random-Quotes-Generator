const QuoteText = document.getElementById("quote");
const AuthorText = document.getElementById("author");
const btn = document.getElementById("generate");
var quotesAuthor = [];
var arr = [3, 4, 35, 342, 3, 3];
const uniqueQuotes = new Set();

fetch("https://type.fit/api/quotes")
.then((res) => res.json())
.then((res) => apiQuotes(res));

var apiQuotes = (arr) => {
  var quotesObj = Object.entries(arr);
  for (var i = 0; i < quotesObj.length; i++) {
    quotesAuthor.push(quotesObj[i][1]);
  }
};

btn.addEventListener("click", () => {
  if (uniqueQuotes.size >= quotesAuthor.length) {
    uniqueQuotes.clear();
  }
  while (true) {
    var randomIndex = Math.floor(Math.random() * quotesAuthor.length);
    if (uniqueQuotes.has(randomIndex)) {
      continue;
    }
    uniqueQuotes.add(randomIndex);
    var currentQuote = quotesAuthor[randomIndex]["text"];
    var currentAuthor = quotesAuthor[randomIndex]["author"];
    QuoteText.textContent = currentQuote;
    AuthorText.textContent = currentAuthor;
    break;
  }
});
