document.getElementById("payBtn").addEventListener("click", () => {
  const upiID = "titus@okicici"; // Replace with your actual UPI ID
  const name = "Titus Dithin";
  const amount = 1;
  const note = "Coffee Payment";

  // Construct the UPI deep link
  const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

  // Check if user is on a mobile device
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // Open UPI payment chooser
    window.location.href = upiLink;

    // Optional fallback timer in case no UPI app is detected
    setTimeout(() => {
      alert("If no UPI app opened, please ensure you have Google Pay / PhonePe installed and try again.");
    }, 3000);
  } else {
    // On desktop: show QR / message
    alert("Please open this site on your mobile device to complete the UPI payment.");
  }
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
