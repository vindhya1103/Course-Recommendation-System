// app.js
document.getElementById("submit-btn").addEventListener("click", function () {
  const interest = document.getElementById("interest").value;
  const learningStyle = document.getElementById("learning-style").value;
  const experience = document.getElementById("experience").value;

  const recommendations = generateRecommendations(
    interest,
    learningStyle,
    experience
  );
  displayRecommendations(recommendations);
});

function generateRecommendations(interest, learningStyle, experience) {
  const courses = {
    "web development": {
      video: ["FreeCodeCamp", "Traversy Media", "Academind"],
      interactive: ["Codecademy", "Scrimba", "Frontend Mentor"],
      reading: ["MDN Web Docs", "Eloquent JavaScript", "CSS Tricks"],
    },
    "data science": {
      video: ["StatQuest", "Kaggle", "DataCamp"],
      interactive: ["DataQuest", "Coursera Projects", "Kaggle"],
      reading: ["Towards Data Science", "Deep Learning Book", "KDNuggets"],
    },
    "graphic design": {
      video: ["The Futur", "Skillshare", "Domestika"],
      interactive: ["Canva Design School", "Figma Academy", "DesignLab"],
      reading: ["Smashing Magazine", "A Book Apart", "Adobe Blogs"],
    },
    cybersecurity: {
      video: ["John Hammond", "NetworkChuck", "HackerSploit"],
      interactive: ["TryHackMe", "Hack The Box", "Cybrary"],
      reading: ["OWASP", "Cybersecurity Ventures", "Security Boulevard"],
    },
  };

  return courses[interest][learningStyle];
}

function displayRecommendations(recommendations) {
  const outputDiv = document.getElementById("output");
  outputDiv.style.display = "block";
  outputDiv.innerHTML = `
      <h2>Recommended Courses:</h2>
      <ul>${recommendations.map((course) => `<li>${course}</li>`).join("")}</ul>
    `;
}
