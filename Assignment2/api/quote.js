export default async function handler(req, res) {
  try {
    // Fetch a random quote from DummyJSON API
    const response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch quote." });
    }

    const data = await response.json();
    const quote = data.quote;
    const author = data.author || "Anonymous";

    res.status(200).json({ quote, author });
  } catch (error) {
    console.error("Error fetching quote:", error);
    res.status(500).json({ error: "Server error while fetching quote." });
  }
}
