// ====================== ÂM THANH =========================
const hoverSound = new Audio('hover.mp3');
const selectSound = new Audio('.15nin/click.mp3');
const winSound = new Audio('15min/win.mp3');
winSound.volume = 0.35;
hoverSound.volume = 1;
selectSound.volume = 1;

// ====================== DỮ LIỆU =========================
const questions = [
  {
    text: 'Mùa Chay bắt đầu khi nào?',
    choices: {
      A: 'Lễ Chúa Giêsu chịu Phép Rửa',
      B: 'Thứ Tư lễ Tro',
      C: 'Thứ Bảy Tuần Thánh',
      D: 'Tất cả đều sai',
    },
    correct: 'B',
  },
  {
    text: 'Mùa Vọng gồm 4 Chúa Nhật bắt đầu từ Kinh chiều I Chúa Nhật I Mùa Vọng đến Kinh chiều ngày nào?',
    choices: {
      A: 'Lễ Chúa Giêsu Chịu Phép Rửa',
      B: 'Thứ Tư lễ Tro',
      C: 'Vọng lễ Giáng Sinh',
      D: 'Vọng lễ Phục Sinh',
    },
    correct: 'C',
  },
  {
    text: 'Trong Mùa Giáng Sinh, chúng ta cần phải có tâm tình nào?',
    choices: {
      A: 'Hết lòng cảm tạ Thiên Chúa là Cha, đã thương sai Con Một đến cứu độ nhân loại',
      B: 'Không ngừng cộng tác với ơn Chúa để Mầu nhiệm Giáng Sinh đem lại ơn cứu độ cho bản thân và cho mọi người',
      C: 'Luôn canh tân cuộc sống để ngày càng nên xứng đáng với ơn cứu độ Chúa ban và nên con thảo của Người',
      D: 'Tất cả đều đúng',
    },
    correct: 'D',
  },
  {
    text: 'Lễ Chúa Giêsu chịu Phép Rửa được cử hành trong mùa nào của năm Phụng vụ?',
    choices: {
      A: 'Mùa Vọng',
      B: 'Mùa Giáng Sinh',
      C: 'Mùa Chay',
      D: 'Mùa Phục Sinh',
    },
    correct: 'B',
  },
  {
    text: 'Phụng Vụ Công Giáo gồm các mùa nào?',
    choices: {
      A: 'Mùa Vọng – Mùa Giáng Sinh – Mùa Chay – Mùa Phục Sinh – Mùa Thường Niên',
      B: 'Mùa Vọng – Mùa Giáng Sinh – Mùa Chay – Mùa Phục Sinh – Mùa Tạ Ơn',
      C: 'Mùa Chay – Mùa Giáng Sinh – Mùa Vọng – Mùa Gieo Hạt – Mùa Lễ Lá',
      D: 'Mùa Vọng – Mùa Chay – Mùa Giáng Sinh – Mùa Thu Hoạch – Mùa Thường Niên',
    },
    correct: 'A',
  },
  {
    text: 'Mùa nào dưới đây là thời gian Hội Thánh chuẩn bị tâm hồn tín hữu tham dự Mầu nhiệm Tử nạn - Phục sinh của Đức Kitô?',
    choices: {
      A: 'Mùa Vọng',
      B: 'Mùa Giáng Sinh',
      C: 'Mùa Chay',
      D: 'Mùa Phục Sinh',
    },
    correct: 'C',
  },
  {
    text: 'Mùa Vọng là thời gian người tín hữu chuẩn bị tâm hồn xứng đáng để làm gì?',
    choices: {
      A: 'Đón chờ và mừng Chúa Kitô đến lần thứ nhất (Đại lễ Giáng Sinh) tại Bêlem xứ Palestina',
      B: 'Hân hoan vì Chúa Kitô đã chiến thắng sự chết để sống lại vinh hiển',
      C: 'Tỉnh thức và sẵn sàng đón chờ Chúa đến lần thứ hai trong vinh quang (ngày quang lâm, ngày cánh chung)',
      D: 'Cả A và C đều đúng',
    },
    correct: 'D',
  },
  {
    text: 'Mùa nào là thời gian Hội Thánh hân hoan mừng kính Mầu nhiệm Nhập thể, Con Thiên Chúa đến ngự giữa trần gian?',
    choices: {
      A: 'Mùa Vọng',
      B: 'Mùa Giáng Sinh',
      C: 'Mùa Chay',
      D: 'Mùa Phục Sinh',
    },
    correct: 'B',
  },
  {
    text: 'Tư thế sẵn sàng và tỉnh thức trong Mùa Vọng được diễn tả như thế nào?',
    choices: {
      A: 'Sống ngay thẳng thật thà, không dối trá gian ngoa, nhưng hết lòng suy phục Thiên Chúa qua tiếng nói của lương tâm và lời Hội Thánh dạy bảo',
      B: 'Không thiếu sót việc bổn phận, sửa chữa những khuyết điểm như giận hờn, oán ghét, tị hiềm',
      C: 'Dứt khoát xa lánh kiêu ngạo, tự cao, ương ngạnh, khinh miệt bạn bè…',
      D: 'Tất cả đều đúng',
    },
    correct: 'D',
  },
  {
    text: 'Sau khi chịu Phép Rửa tại sông Gio-đan, Chúa Giêsu đi đâu?',
    choices: {
      A: 'Chúa Giêsu rao giảng Tin Mừng tại Ga-li-lê',
      B: 'Chúa Giêsu ăn chay ròng rã 40 đêm ngày trong hoang địa',
      C: 'Chúa Giêsu tiến vào đền thờ Giê-ru-sa-lem',
      D: 'Tất cả đều sai',
    },
    correct: 'B',
  },
];

const essayQuestions = [
  {
    text: 'Phụng vụ là gì?',
    keywords: [
      { word: ['thờ phượng Thiên Chúa'], point: 1 },
      { word: ['công khai'], point: 0.5 },
      { word: ['chính thức'], point: 0.5 },
    ],
    sample:
      'Phụng vụ là việc thờ phượng Thiên Chúa công khai và chính thức của toàn thể Hội Thánh.',
  },
  {
    text: 'Phụng Vụ gồm các việc thờ phượng nào?',
    keywords: [
      { word: ['thánh lễ'], point: 1 },
      { word: ['bí tích'], point: 1 },
      { word: ['phụng vụ các giờ kinh'], point: 1 },
    ],
    sample: `Phụng vụ gồm các việc thờ phượng sau:\n- Thánh lễ\n- Các Bí Tích và Á Bí Tích (Phụ tích)\n- Phụng Vụ các Giờ kinh`,
  },
];

// ====================== BIẾN =========================
let current = 0,
  scoreChoice = 0,
  totalTime = 15 * 60,
  globalTimer,
  userAnswers = [];
const quizContent = document.getElementById('quiz-content');
const timeDisplay = document.getElementById('time');

// ====================== ĐỒNG HỒ =========================
function formatTime(sec) {
  let m = Math.floor(sec / 60),
    s = sec % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}
function startGlobalTimer() {
  clearInterval(globalTimer);
  timeDisplay.textContent = formatTime(totalTime);
  globalTimer = setInterval(() => {
    totalTime--;
    timeDisplay.textContent = formatTime(totalTime);
    if (totalTime <= 0) {
      clearInterval(globalTimer);
      autoSubmit();
    }
  }, 1000);
}

// ====================== RANDOM =========================
function getRandomItems(arr, n) {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
}
const quizQuestions = getRandomItems(questions, 10);
const essayQuizQuestions = getRandomItems(essayQuestions, 2);

// ====================== LOAD TRẮC NGHIỆM =========================
function loadQuestion() {
  const q = quizQuestions[current];
  quizContent.innerHTML = `
    <h5>Câu ${current + 1}: ${q.text}</h5>
    <div class="mt-3">
      ${Object.entries(q.choices)
        .map(
          ([k, v]) =>
            `<div class="choice" data-key="${k}"><strong>${k}.</strong> ${v}</div>`
        )
        .join('')}
    </div>
    <button id="skipBtn" class="mt-3 w-100 fw-bold">Câu tiếp theo</button>
  `;
  document.querySelectorAll('.choice').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play();
    });
    btn.addEventListener('click', () => {
      selectSound.currentTime = 0;
      selectSound.play();
      handleAnswer(btn.dataset.key);
    });
  });
  document.getElementById('skipBtn').addEventListener('click', () => {
    userAnswers.push({
      question: q.text,
      selected: 'Không trả lời',
      correct: q.correct,
    });
    nextQuestion();
  });
}

// ====================== HANDLE ANSWER =========================
function handleAnswer(selectedKey) {
  const q = quizQuestions[current];
  userAnswers.push({
    question: q.text,
    selected: selectedKey,
    correct: q.correct,
  });
  const allChoices = document.querySelectorAll('.choice');
  allChoices.forEach(btn => {
    btn.style.pointerEvents = 'none';
    if (btn.dataset.key === q.correct) btn.classList.add('correct');
    else if (btn.dataset.key === selectedKey) btn.classList.add('wrong');
  });
  if (selectedKey === q.correct) scoreChoice++;
  const correctEl = [...allChoices].find(btn => btn.dataset.key === q.correct);
  correctEl.classList.add('blink');
  setTimeout(nextQuestion, 900);
}

function nextQuestion() {
  current++;
  if (current < quizQuestions.length) loadQuestion();
  else showEssayPart();
}

// ====================== TỰ LUẬN =========================
function showEssayPart() {
  const title = document.querySelector('.section-title');
  title.textContent = 'PHẦN II: TỰ LUẬN';
  title.style.display = 'block';
  let html = '';
  essayQuizQuestions.forEach((q, i) => {
    html += `<h5 class="mt-3">Câu ${i + 1}. ${
      q.text
    }</h5><textarea id="essay${i}" class="form-control mt-2" rows="4" placeholder="Nhập câu trả lời của bạn..."></textarea>`;
  });
  quizContent.innerHTML = `${html}<button id="submitEssay" class="btn btn-primary mt-3 w-100">Nộp bài</button>`;
  document.getElementById('submitEssay').addEventListener('click', checkEssay);
}

// ====================== CHẤM TỰ LUẬN =========================
function checkEssay() {
  // ẩn tiêu đề tự luận
  document.querySelector('.section-title').style.display = 'none';

  let totalEssayScore = 0;

  essayQuizQuestions.forEach((q, i) => {
    const ansRaw = document.getElementById(`essay${i}`)?.value || ''; // giữ nguyên để hiển thị
    const ans = ansRaw.toLowerCase(); // chuyển về lowercase để so sánh
    let score = 0;

    // kiểm tra từng keyword, dùng lowercase keyword
    q.keywords.forEach(item => {
      const keywordLower = item.word.map(w => w.toLowerCase());
      if (keywordLower.every(w => ans.includes(w))) score += item.point;
    });

    totalEssayScore += score;
  });

  const avgEssayScore = totalEssayScore.toFixed(2);
  const choiceScoreFixed = ((scoreChoice / quizQuestions.length) * 5).toFixed(2);

  showResults(
    choiceScoreFixed,
    avgEssayScore,
    (parseFloat(choiceScoreFixed) + parseFloat(avgEssayScore)).toFixed(1)
  );
}

// ====================== AUTO SUBMIT =========================
function autoSubmit() {
  clearInterval(globalTimer);
  for (let i = current; i < quizQuestions.length; i++) {
    userAnswers.push({
      question: quizQuestions[i].text,
      selected: 'Không trả lời',
      correct: quizQuestions[i].correct,
    });
  }
  checkEssay();
}

// ====================== HIỂN THỊ KẾT QUẢ =========================
function showResults(choiceScore, essayScore, total) {
  document.querySelector('.title-quiz').style.display = 'none';
  document.querySelector('.section-title').style.display = 'none';
  document.querySelector('.timer').style.display = 'none';
  // MCQ review
  let mcqReview = quizQuestions
    .map((q, i) => {
      const ua = userAnswers[i];
      const selected = ua ? ua.selected : null;
      const selectedText =
        selected && selected !== 'Không trả lời'
          ? q.choices[selected]
          : selected === 'Không trả lời'
          ? 'Không trả lời'
          : 'Chưa trả lời';
      const correctText = q.choices[q.correct];
      let statusClass = 'text-muted';
      if (selected === q.correct) statusClass = 'text-success fw-bold';
      else if (selected === 'Không trả lời' || selected === null)
        statusClass = 'text-secondary';
      else statusClass = 'text-danger fw-bold';
      return `<div class="answer-box mb-3 p-3"><p><strong>Câu ${i + 1}. ${
        q.text
      }</strong></p><p>Đáp án của bạn: <span class="${statusClass}">${selectedText}</span></p><p>Đáp án đúng: <strong style="color:#0b6e4f">${correctText}</strong></p></div>`;
    })
    .join('');
  // Essay review
  const essayReview = essayQuizQuestions
    .map((q, i) => {
      const ans =
        document.getElementById(`essay${i}`)?.value || 'Không trả lời';
      return `
    <div class="answer-box essay-review">
      <div>
        <strong>Câu ${i + 1}. ${q.text}</strong><br>
        <span class="correct-answer">${q.sample.replace(/\n/g, '<br>')}</span>
      </div>
      <div>
        <strong>Câu trả lời của bạn:</strong><br>
        <span class="user-answer">${ans}</span>
      </div>
    </div>
  `;
    })
    .join('');

  quizContent.innerHTML = `
    <h1 class="text-center text-success mb-3">Hoàn thành bài kiểm tra!</h1>
    <p class="text-center fs-5">Điểm trắc nghiệm: ${choiceScore}/5</p>
    <p class="text-center fs-5">Điểm tự luận: ${essayScore}/5</p>
    <hr>
    <p class="text-center fw-bold fs-4 color-red">Tổng điểm: ${total}/10</p>
    <h4 class="mt-4">Xem lại phần trắc nghiệm:</h4>${mcqReview}
    <h4 class="mt-4">Xem lại phần tự luận:</h4>${essayReview}
    <div class="text-center mt-3"><button class="btn btn-secondary" onclick="location.reload()">Làm lại</button></div>
  `;
  winSound.play();
}

// ====================== KHỞI TẠO =========================
loadQuestion();
startGlobalTimer();
