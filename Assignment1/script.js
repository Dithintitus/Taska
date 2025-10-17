// Pay via UPI
document.getElementById("payBtn").addEventListener("click", () => {
  const upiID = "titus@okicici"; // Replace this with your actual UPI ID
  const name = "Titus Dithin";
  const amount = 1;
  const note = "Coffee Payment";

  const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

  // Redirect to the UPI app
  window.location.href = upiLink;
});

// Manual confirmation
document.getElementById("confirmBtn").addEventListener("click", () => {
  const txnId = document.getElementById("txnId").value.trim();
  const statusEl = document.getElementById("status");

  if (txnId.length > 5) {
    statusEl.textContent = "✅ Payment Confirmed! Thank you for your support.";
    statusEl.style.color = "#00ff99";
  } else {
    statusEl.textContent = "⚠️ Invalid Transaction ID. Please check and try again.";
    statusEl.style.color = "#ffcc00";
  }
});
