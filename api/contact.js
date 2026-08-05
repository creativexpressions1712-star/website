const TO_EMAIL = "creativexpressions1712@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = req.body || {};
  const formType = body.formType === "signup" ? "signup" : "contact";
  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const phone = (body.phone || "").toString().trim();
  const age = (body.age || "").toString().trim();
  const day = (body.day || "").toString().trim();
  const subject = (body.subject || "").toString().trim();
  const message = (body.message || "").toString().trim();

  if (!name || !email || !EMAIL_RE.test(email)) {
    res.status(400).json({ error: "Missing or invalid required fields" });
    return;
  }
  if (formType === "contact" && (!subject || !message)) {
    res.status(400).json({ error: "Missing or invalid required fields" });
    return;
  }

  const subjectLine =
    formType === "signup"
      ? `Nieuwe aanmelding: ${name}`
      : `Contactformulier: ${subject}`;

  const lines = [`Naam: ${name}`, `E-mail: ${email}`];
  if (phone) lines.push(`Telefoon: ${phone}`);
  if (age) lines.push(`Leeftijd danser: ${age}`);
  if (day) lines.push(`Voorkeursdag: ${day}`);
  if (subject) lines.push(`Onderwerp: ${subject}`);
  lines.push("", "Bericht:", message || "(geen bericht)");

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "CreativeXpressions website <no-reply@creativexpressions.nl>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: subjectLine,
        text: lines.join("\n"),
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error("Resend error", resendRes.status, errBody);
      res.status(502).json({ error: "Failed to send email" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending email", err);
    res.status(500).json({ error: "Unexpected error" });
  }
};
