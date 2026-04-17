
const questions = [
  {
    "number": 1,
    "text": "¿A una frustración siempre opones un pensamiento positivo?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 2,
    "text": "¿Te dedicarías a socorrer a personas accidentadas o atacadas por asaltantes?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 3,
    "text": "¿Cuando eras chico, te interesaba saber cómo estaban construidos tus juguetes?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 4,
    "text": "¿Escuchas atentamente los problemas que te plantean tus amigos?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 5,
    "text": "¿Te ofrecerías para explicar a tus compañeros un determinado tema que ellos no entendieron?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 6,
    "text": "¿Eres exigente y criticón con tu equipo de trabajo?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 7,
    "text": "¿Usar uniforme te hace sentir distinto, importante?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 8,
    "text": "¿Convences fácilmente a otras personas sobre la validez de tus argumentos?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 100,
      "Siempre": 50
    }
  },
  {
    "number": 9,
    "text": "¿Ante una situación de emergencia actúas rápidamente?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 10,
    "text": "¿Cuando tienes que resolver un problema matemático, perseveras hasta encontrar la solución?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 11,
    "text": "¿Crees que los detalles son tan importantes como el todo?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 12,
    "text": "¿Pasarías varias horas leyendo algún libro de tu interés?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 13,
    "text": "¿Planificas detalladamente tus trabajos antes de empezar?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 14,
    "text": "¿Ayudas habitualmente a los no videntes (a quien lo necesite) a cruzar la calle?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 15,
    "text": "¿Aceptas que las mujeres formen parte de las fuerzas armadas bajo las mismas normas y condiciones que los hombres?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 16,
    "text": "¿Participarías en una campaña de prevención contra la ludopatía?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 17,
    "text": "¿Te interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas y de algún peligro?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 18,
    "text": "¿Te gusta más el trabajo manual que el trabajo intelectual?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 19,
    "text": "¿Participarías de una investigación sobre la violencia y riesgo público?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 20,
    "text": "¿Arriesgarías tu vida para salvar la vida de otro que no conoces?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 21,
    "text": "¿Te agradaría hacer un curso de primeros auxilios?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 22,
    "text": "¿Te resulta fácil coordinar un grupo de trabajo?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 23,
    "text": "¿Aceptarías colaborar con el cumplimiento de las normas en lugares públicos?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 24,
    "text": "¿Al conversar haces preguntas y comentarios sobre el tema?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 100,
      "Siempre": 50
    }
  },
  {
    "number": 25,
    "text": "¿Ante un conflicto evades la situación?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 26,
    "text": "¿Cuándo alguien expresa un problema, escuchas pero normalmente no sabes qué decir?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 27,
    "text": "¿Cuándo conoces a alguien nuevo te muestras abierto y amigable?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 100,
      "Siempre": 50
    }
  },
  {
    "number": 28,
    "text": "¿Al recibir un cumplido, lo minimizo o lo desestimo?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 29,
    "text": "¿Si veo a alguien en apuros, evalúo la situación antes de intervenir?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 30,
    "text": "¿Ante la crítica constructiva, reflexiono aunque a veces me cuesta asumirla?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 31,
    "text": "¿En el ambiente laboral, mantengo distancia profesional?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 32,
    "text": "¿Ante un malentendido, espero a que el tiempo lo resuelva?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 33,
    "text": "¿Al trabajar en equipo defiendo activamente mis ideas?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 100,
      "Siempre": 50
    }
  },
  {
    "number": 34,
    "text": "¿Cuándo alguien se muestra tímido o inseguro, me enfoco en personas más seguras?",
    "scores": {
      "Nunca": 50,
      "Casi nunca": 100,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 35,
    "text": "¿Ante mensajes ambiguos, pido aclaración para entender mejor?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 100,
      "Siempre": 50
    }
  },
  {
    "number": 36,
    "text": "¿Prefiero relacionarme con personas de mi cultura?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 37,
    "text": "¿Hablar en público me afecta y siento temor de hacerlo?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 38,
    "text": "¿Cuándo se trata de expresar agradecimiento, prefiero no hacerlo aunque lo sienta?",
    "scores": {
      "Nunca": 50,
      "Casi nunca": 100,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 39,
    "text": "¿En una conversación verifico que me hago entender solicitando retroalimentación?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 100,
      "Siempre": 50
    }
  },
  {
    "number": 40,
    "text": "¿Tienes problemas con estar algunos meses alejado de tu familia por razones laborales?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 41,
    "text": "¿Cuando estás en un grupo trabajando, te entusiasma producir ideas originales y que sean tenidas en cuenta?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 42,
    "text": "¿Descubriste algún filósofo o escritor que haya expresado tus mismas ideas con antelación?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 43,
    "text": "¿Crees que tus ideas son importantes, y haces todo lo posible para ponerlas en práctica?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 44,
    "text": "¿Cuándo se descompone un artefacto en tu casa, te dispones prontamente a repararlo?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 45,
    "text": "¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y la fauna en extinción?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 46,
    "text": "¿Leerías revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 47,
    "text": "¿Preservar las raíces culturales de nuestro país, te parece importante y necesario?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 48,
    "text": "¿Te gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 49,
    "text": "¿Crees que un país debe poseer la más alta tecnología armamentista, a cualquier precio?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 50,
    "text": "¿La libertad y la justicia son valores fundamentales en tu vida?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 51,
    "text": "¿En un equipo de trabajo, preferís el rol de coordinador?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 52,
    "text": "¿En una discusión entre amigos, te ofreces como mediador?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 53,
    "text": "¿Lucharías por una causa justa hasta las últimas consecuencias?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 54,
    "text": "¿Te cohíbes/inhibes –cortas- al entrar a un lugar nuevo con gente desconocida?",
    "scores": {
      "Nunca": 50,
      "Casi nunca": 100,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 55,
    "text": "¿Harías el diseño de un cartel o afiche para una campaña contra la ludopatía?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 56,
    "text": "¿Participarías en un grupo de defensa internacional?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 57,
    "text": "¿Eres de los que defiendes causas perdidas?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 58,
    "text": "¿Ante una emergencia epidémica participarías en una campaña brindando tu ayuda?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 59,
    "text": "¿El trabajo individual te resulta más rápido y efectivo que el trabajo grupal?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 60,
    "text": "¿Dedicarías parte de tu tiempo a ayudar a personas con carencias o necesitadas?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 61,
    "text": "¿Cuándo eliges tu ropa o decoras un ambiente, tienes en cuenta la combinación de los colores, las telas o el estilo de los muebles?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 62,
    "text": "¿Ignoras qué es ludopatía?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 63,
    "text": "¿Sientes nervios al iniciar una conversación?",
    "scores": {
      "Nunca": 50,
      "Casi nunca": 100,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 64,
    "text": "¿Cuándo debes opinar prefieres no hacerlo para evitar conflictos?",
    "scores": {
      "Nunca": 50,
      "Casi nunca": 100,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 65,
    "text": "¿Si un amigo te critica, te defiendes de inmediato?",
    "scores": {
      "Nunca": 50,
      "Casi nunca": 100,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 66,
    "text": "¿Ante un silencio incómodo, te apartas de la situación?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 67,
    "text": "¿Ante la llegada de un nuevo compañero actúas cordial pero reservado?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 68,
    "text": "¿En una reunión grupal, aporto cuando se me pide?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 69,
    "text": "¿Ante un desacuerdo, cambio de tema?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 70,
    "text": "¿Expresas emociones intensas en público?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 100,
      "Siempre": 50
    }
  },
  {
    "number": 71,
    "text": "¿Evito pedir ayuda para no parecer débil y lo resuelvo solo?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 72,
    "text": "¿Cuándo me molestan respondo de forma impulsiva y emocional?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 73,
    "text": "¿Ante un imprevisto me altero y trato de adaptarme?",
    "scores": {
      "Nunca": 50,
      "Casi nunca": 100,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 74,
    "text": "¿Al tener una opinión contraria a la mayoría, me expreso sin temor?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 100,
      "Siempre": 50
    }
  },
  {
    "number": 75,
    "text": "¿Al interactuar con personas de diferentes culturas, me comporto con apertura y respeto?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  },
  {
    "number": 76,
    "text": "¿Al liderar un proyecto, me enfoco más en los objetivos más que ven las personas?",
    "scores": {
      "Nunca": 100,
      "Casi nunca": 50,
      "Casi siempre": 0,
      "Siempre": 0
    }
  },
  {
    "number": 77,
    "text": "¿Recibo el feedback como una herramienta para crecer y mejorar?",
    "scores": {
      "Nunca": 0,
      "Casi nunca": 0,
      "Casi siempre": 50,
      "Siempre": 100
    }
  }
];

const questionOptions = ["Nunca", "Casi nunca", "Casi siempre", "Siempre"];

const questionsContainer = document.getElementById("questionsContainer");
const quizForm = document.getElementById("quizForm");
const resetBtn = document.getElementById("resetBtn");

const resultModal = document.getElementById("resultModal");
const closeModalBtn = document.getElementById("closeModalBtn");

const scoreValue = document.getElementById("scoreValue");
const percentageValue = document.getElementById("percentageValue");
const answeredValue = document.getElementById("answeredValue");
const resultMessage = document.getElementById("resultMessage");
const resultStudent = document.getElementById("resultStudent");
const studentName = document.getElementById("studentName");

const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

const scoreLabel = scoreValue.previousElementSibling;
const percentageLabel = percentageValue.previousElementSibling;
const answeredLabel = answeredValue.previousElementSibling;

const maxScore = questions.reduce((acc, q) => acc + Math.max(...Object.values(q.scores)), 0);

function renderQuestions() {
  questionsContainer.innerHTML = questions.map((question) => {
    const optionsHtml = questionOptions.map((option) => `
      <label class="option">
        <input type="radio" name="q${question.number}" value="${question.scores[option]}">
        ${option}
      </label>
    `).join("");

    return `
      <article class="question-card" data-question="${question.number}">
        <p class="question-title"><strong>${question.number}.</strong> ${question.text}</p>
        <div class="options">${optionsHtml}</div>
      </article>
    `;
  }).join("");

  addProgressListeners();
  updateProgress();
}

function addProgressListeners() {
  const inputs = quizForm.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      removeMissingHighlight(input.name);
      updateProgress();
    });
  });
}

function updateProgress() {
  let answered = 0;

  for (const question of questions) {
    const selected = quizForm.querySelector(`input[name="q${question.number}"]:checked`);
    if (selected) answered++;
  }

  const percent = Math.round((answered / questions.length) * 100);

  progressText.textContent = `${answered} de ${questions.length} preguntas respondidas`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

function clearMissingHighlights() {
  document.querySelectorAll(".question-card.missing").forEach((card) => {
    card.classList.remove("missing");
  });
}

function removeMissingHighlight(questionName) {
  const number = questionName.replace("q", "");
  const card = document.querySelector(`.question-card[data-question="${number}"]`);
  if (card) {
    card.classList.remove("missing");
  }
}

function highlightMissingQuestions(missingNumbers) {
  clearMissingHighlights();

  missingNumbers.forEach((number) => {
    const card = document.querySelector(`.question-card[data-question="${number}"]`);
    if (card) {
      card.classList.add("missing");
    }
  });
}

function getLevelByPercentage(percentage) {
  if (percentage <= 39) {
    return {
      level: "Baja alineación con el perfil esperado",
      interpretation: "Tus respuestas muestran una baja correspondencia con el perfil esperado en varios de los aspectos evaluados. Esto sugiere que actualmente existen diferentes elementos que convendría revisar y fortalecer para acercarse más al perfil de referencia."
    };
  }

  if (percentage <= 59) {
    return {
      level: "Alineación parcial con el perfil esperado",
      interpretation: "Tus respuestas muestran coincidencia con el perfil esperado en algunos aspectos, aunque todavía se observan varios elementos por fortalecer. Esto sugiere una proyección intermedia, con avances parciales, pero aún no consolidada."
    };
  }

  if (percentage <= 79) {
    return {
      level: "Buena alineación con el perfil esperado",
      interpretation: "Tus respuestas reflejan una buena correspondencia con el perfil esperado en la mayoría de los aspectos evaluados. Esto sugiere una proyección favorable, aunque todavía pueden existir algunos puntos específicos susceptibles de mejora."
    };
  }

  return {
    level: "Alta alineación con el perfil esperado",
    interpretation: "Tus respuestas muestran una correspondencia sólida y consistente con el perfil esperado. Esto sugiere una proyección muy favorable en los aspectos evaluados, con pocos elementos por fortalecer."
  };
}

function openModal() {
  resultModal.classList.remove("hidden");
}

function closeModal() {
  resultModal.classList.add("hidden");
}

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quizForm);
  let total = 0;
  let unansweredQuestions = [];
  let alignedCount = 0;
  let partialCount = 0;
  let strengthenCount = 0;
  let strengthenItems = [];

  for (const question of questions) {
    const rawValue = formData.get(`q${question.number}`);

    if (rawValue === null) {
      unansweredQuestions.push(question.number);
    } else {
      const numericValue = Number(rawValue);
      total += numericValue;

      if (numericValue === 100) {
        alignedCount++;
      } else if (numericValue === 50) {
        partialCount++;
      } else {
        strengthenCount++;
        strengthenItems.push(question.number);
      }
    }
  }

  if (unansweredQuestions.length > 0) {
    highlightMissingQuestions(unansweredQuestions);

    const firstMissing = document.querySelector(`.question-card[data-question="${unansweredQuestions[0]}"]`);
    if (firstMissing) {
      firstMissing.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

    alert(
      "Por favor responda todas las preguntas antes de calcular el resultado.\n\n" +
      "Le faltan las preguntas: " + unansweredQuestions.join(", ")
    );
    return;
  }

  clearMissingHighlights();

  const percentage = Number(((total / maxScore) * 100).toFixed(1));
  const result = getLevelByPercentage(percentage);
  const name = studentName.value.trim();

  resultStudent.textContent = name
    ? `Participante: ${name}`
    : "Resultado general del cuestionario";

  scoreLabel.textContent = "Puntaje total";
  percentageLabel.textContent = "Porcentaje obtenido";
  answeredLabel.textContent = "Resultado general";

  scoreValue.textContent = `${total} de ${maxScore}`;
  percentageValue.textContent = `${percentage}%`;
  answeredValue.textContent = result.level;

const strengthenText = strengthenItems.length > 0
  ? strengthenItems.join(", ")
  : "No se identifican ítems con respuestas que sugieran aspectos por fortalecer.";

resultMessage.innerHTML = `
  <div class="detail-card">
    <h3 class="detail-title">Detalle del resultado</h3>

    <div class="detail-list">
      <div class="detail-item">
        <span>Puntaje total obtenido</span>
        <strong>${total} de ${maxScore}</strong>
      </div>
      <div class="detail-item">
        <span>Porcentaje obtenido</span>
        <strong>${percentage}%</strong>
      </div>
    </div>

    <div class="summary-grid">
      <div class="summary-item success">
        <strong>${alignedCount}</strong>
        <p>respuestas presentan una alineación clara con el perfil esperado y aportaron <strong>100 puntos</strong> cada una.</p>
      </div>

      <div class="summary-item warning">
        <strong>${partialCount}</strong>
        <p>respuestas presentan una alineación parcial con el perfil esperado y aportaron <strong>50 puntos</strong> cada una.</p>
      </div>

      <div class="summary-item neutral">
        <strong>${strengthenCount}</strong>
        <p>respuestas sugieren aspectos por fortalecer frente al perfil esperado y <strong>no aportaron puntaje</strong>.</p>
      </div>
    </div>

    <div class="items-box">
      <h4>Ítems cuyas respuestas sugieren aspectos por fortalecer frente al perfil esperado</h4>
      <p>${strengthenText}</p>
    </div>

    <div class="interpret-box">
      <h4>Interpretación</h4>
      <p>${result.interpretation}</p>
    </div>

    <div class="note-box">
      <h4>Nota final</h4>
      <p>Este resultado tiene un carácter orientativo y académico. Su propósito es ofrecer una aproximación general al nivel de alineación de las respuestas con el perfil esperado.</p>
    </div>
  </div>
`;

  openModal();
});


resetBtn.addEventListener("click", () => {
  quizForm.reset();
  studentName.value = "";
  updateProgress();
  closeModal();
  clearMissingHighlights();

  scoreLabel.textContent = "Puntaje total";
  percentageLabel.textContent = "Porcentaje obtenido";
  answeredLabel.textContent = "Preguntas respondidas";
  scoreValue.textContent = "0";
  percentageValue.textContent = "0%";
  answeredValue.textContent = "0 / 77";
  resultMessage.textContent = "";
  resultStudent.textContent = "";
});

closeModalBtn.addEventListener("click", closeModal);

resultModal.addEventListener("click", (event) => {
  if (event.target === resultModal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

renderQuestions();
