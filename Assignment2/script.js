document.getElementById("generateBtn").addEventListener("click", generateAIQuote);

async function generateAIQuote() {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");

  quoteText.textContent = "Generating inspiration...";
  authorText.textContent = "";

  try {
    const res = await fetch("/api/quote");
    const data = await res.json();

    if (data.quote) {
      quoteText.textContent = `"${data.quote}"`;
      authorText.textContent = `— ${data.author}`;
    } else {
      quoteText.textContent = "⚠️ Couldn't fetch a quote. Try again later.";
    }
  } catch (err) {
    console.error("Network error:", err);
    quoteText.textContent = "⚠️ Network error. Please try again.";
  }
}
