//Script quizz nulle

const quizData = [
    {
      question: "Petit quiz pour te changer les idées ok ?",
      a: "OUI SERGENT CHEF",
      b: "Bof flemme",
      c: "cmor",
      d: "42",
      correct: "a",
    },
    {
      question: "Tu n'es pas nulle, tu as juste un coup de mou, j'ai raison ?",
      a: "Absolument pas",
      b: "Tu as toujours raison, tu es trop parfait",
      c: "Nan et tu es même c**",
      d: "Je ne souhaite pas répondre",
      correct: "b",
    },
    {
      question: "Pour te montrer que tu n'es pas nulle, on va voir si tu me connais. Quelle est ma couleur préférée ?",
      a: "Rouge",
      b: "Vert",
      c: "Bleu",
      d: "Orange",
      correct: "c",
    },
    {
      question: "Pourquoi est ce que je t'aime ?",
      a: "Parce que tu me rends heureux",
      b: "Aucune idée",
      c: "Parce que tu es bg",
      d: "Dsl je t'ai jamais aimé (rip my heart)",
      correct: "a",
    },
    {
      question: "Sur une échelle de un à dix, à combien estime-tu mon amour pour toi ?",
      a: "0",
      b: "10",
      c: "5",
      d: "3 X 1000",
      correct: "d",
    },
    {
    question: "Quand ça va pas, à qui fais tu appel ?",
      a: "A TON GROS BEBOU D'AM",
      b: "A personne",
      c: "La réponse a",
      d: "T'as intérêt à répondre a",
      correct: "a",
    },
    {
    question: "Tu es ma source de motivation",
      a: "Vrai",
      b: "Faux",
      c: "Plutôt le fiak ouais",
      d: "Jamais de la vie",
      correct: "c",
    },
    {
    question: "Combien je veux de niom niom avec toi ?",
       a: "0",
      b: "1",
      c: "2",
      d: "3",
      correct: "d",
    },
    {
    question: "Je suis là pour toi...",
      a: "Seulement de temps en temps",
      b: "Jamais",
      c: "Peut importe l'heure du jour ou de la nuit",
      d: "Non merci",
      correct: "c",
    },
    {
    question: "Oublie pas, tu as une nouvelle maman avec qui tu pourras faire des sorties",
      a: "Oooooh",
      b: "C'est ma maman maintenant",
      c: "Po envie",
      d: "Bvui",
      correct: "b",
    },
    {
    question: "Mon plus grand rêve est...",
      a: "D'avoir notre chez nous",
      b: "De vieillir avec toi",
      c: "De pouvoir t'emmener en voyage n'importe où",
      d: "Tout à la fois et plus encore",
      correct: "d",
    },
    {
    question: "Merci d'être dans ma vie mon amour",
      a: "Je t'aime",
      b: "Ouais je sais",
      c: "jtm bb",
      d: "Il parait oui",
      correct: "a",
    },
    {
    question: "Si jamais ça ne va toujours pas mieux, tu peux me faire un compte rendu de ce qui ne va pas ?",
      a: "Oui promis",
      b: "Non merci",
      c: "Vais essayer (ça veut dire nan)",
      d: "Je sais pas faire",
      correct: "a",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

};
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        let message = "";
        switch (score) {
            case 0:
                message = "Il y a un bug dans la matrix ou tu n'as pas fais d'effort";
                break;
            case 1:
                message = "Nan mais sans déconner on est où là";
                break;
            case 2:
                message = "Tu n'as pas fais d'effort RECOMMENCE";
                break;
            case 3:
                message = "Clique sur le bouton en dessous c'est pas sérieux";
                break;
            case 4:
                message = "Tu as fais exprès là nan ?";
                break;
            case 5:
                message = "Tu dois répondre au pif je pense";
                break;
            case 6:
                message = "Oui oui y a un message par cas possible mais RECOMMENCE";
                break;
            case 7:
                message = "C'est à peu près la moitié mais pas suffisant RECOMMENCE";
                break;
            case 8:
                message = "Hm peux mieux faire, on vise plus haut ici";
                break;
            case 9:
                message = "Résultat acceptable NAN JDECONNE";
                break;
            case 10:
                message = "3 fautes vraiment ?";
                break;
            case 11:
                message = "Pas mal mais le bebou doit avoir tout juste";
                break;
            case 12:
                message = "T'as le seu hein ? A une faute près rip";
                break;
            case 13:
                message = "C'EST BIEN GROS BEBOU GG BRAVO A TOUS T'ES LA MEILLEURE";
                break;     
        }
        quiz.innerHTML = `
              <h2 class="titre-h2-quiz">Tu as obtenu ${score}/${quizData.length} <br>${message}</h2>
              <button class="submit-quiz" onclick="location.reload()">C'est retipar</button>
          `;
      }
    }
  });