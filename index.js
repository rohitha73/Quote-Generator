const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');   


const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The mind is a wonderful servant but a terrible master.",
        author: "Robin Sharma"
    }
];

function newQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote.quote;
    authorText.textContent = "- " + randomQuote.author;   

}

newQuoteBtn.addEventListener('click', newQuote);