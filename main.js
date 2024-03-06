const quoteContent = document.querySelector(".quote-container .quote-content");
const quoteAuthor = document.querySelector(".quote-container .quote-author");
const quoteBtn = document.querySelector(".quote-container .new-quote-button")


const updateQuote = (data) => {
    quoteContent.innerHTML = data.content;
    quoteAuthor.innerHTML = data.author;
}

const nextQuote = () => {
    fetch('https://api.quotable.io/random?maxLength=200')
    .then(response => response.json())
    .then(data => {
      updateQuote(data);
    })
}

nextQuote();

quoteBtn.addEventListener("click", nextQuote);



// async function randomQuote() {
//     const response = await fetch('https://api.quotable.io/random')
//     const quote = await response.json()
    
//     // Output the quote and author name
//     console.log(quote.content)
//     console.log(`- ${quote.author}`)
//   }