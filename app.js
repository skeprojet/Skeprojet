// === Générateur de sujet ===
function generateSubject() {
  const sujets = [
    "L’impact du numérique sur l’éducation",
    "L’IA dans le secteur médical",
    "La transition écologique en Afrique",
    "L’influence des réseaux sociaux sur les jeunes",
    "L’économie solidaire à l’ère digitale"
  ];
  const sujet = sujets[Math.floor(Math.random() * sujets.length)];
  document.getElementById("generated-subject").innerText = sujet;
}

// === Bloc-notes ===
function saveNotes() {
  const notes = document.getElementById("notes-area").value;
  localStorage.setItem("mesNotes", notes);
  alert("Notes enregistrées !");
}

function clearNotes() {
  document.getElementById("notes-area").value = "";
  localStorage.removeItem("mesNotes");
}

function downloadNotes() {
  const text = document.getElementById("notes-area").value;
  const blob = new Blob([text], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mes-notes.txt";
  a.click();
  window.URL.revokeObjectURL(url);
}

window.onload = () => {
  const saved = localStorage.getItem("mesNotes");
  if (saved) document.getElementById("notes-area").value = saved;
};

// === Intelligence Artificielle ===
 async function askAI() {
  alert("Le bouton fonctionne !");
}


  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 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"
      <script src="app.js"></script>
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 100,
        temperature: 0.7
      })
    });

    const data = await response.json();
    responseBox.innerHTML = data.choices[0].text.trim();
  } catch (err) {
    responseBox.innerHTML = "❌ Erreur : " + err.message;
  }
}


