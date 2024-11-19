var quoteList = [
    {
        quote: "“So many books, so little time.”",
        author: "-- Frank Zappa"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "-- Mark Twain"
    },
    {
        quote: "“It is never too late to be what you might have been.”",
        author: "-- George Eliot"
    },
    {
        quote: "“If you can't explain it to a six year old, you don't understand it yourself.”",
        author: "-- Albert Einstein"
    },
    {
        quote: "“Everything you can imagine is real.”",
        author: "-- Pablo Picasso"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "-- Mae West"
    }
]
var randomList = []
function generateQuote() {
    randomList.push(Math.trunc(Math.random() * quoteList.length))
    if (randomList[randomList.length - 1] === randomList[randomList.length - 2]) {
        generateQuote()
    }
    console.log(randomList)

    document.getElementById("quote").innerHTML = quoteList[randomList[randomList.length - 1]].quote
    document.getElementById("author").innerHTML = quoteList[randomList[randomList.length - 1]].author
}

