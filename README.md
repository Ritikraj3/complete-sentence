
> # _All about QuestionPage._


# Overview

A dynamic and interactive **Quiz Application** built using **React.js**. This app supports various question formats, real-time score tracking, a timer, and beautifully styled result screens. Ideal for testing knowledge and creating engaging quiz challenges!

---

## 🚀 Demo

[![Quiz App Demo](https://img.shields.io/badge/Demo-Click%20Here-blue?style=for-the-badge&logo=vercel)](https://correctsentence.netlify.app/)

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)


---

## 📁 Project Structure

```
quiz-app/
│
├── index.html
├── App.jsx
├── index.js
├── data.js
│
├── components/
│   ├── Header.jsx
│   ├── QuestionList.jsx
│   ├── Question.jsx
│   ├── Options.jsx
│   ├── Timer.jsx
│   ├── ProgressBar.jsx
│   ├── NextButton.jsx
│   ├── ResultComponent.jsx
│
└── styles/
    └── style.css
```

---

## ✨ Features

✅ Multiple choice and fill-in-the-blank question support  
✅ Interactive options with immediate feedback  
✅ Timer countdown per question  
✅ Result summary at the end  
✅ Dynamic progress bar  
✅ Responsive design and clean UI

---

## 📸 Screenshots

### 🔹 Home / Start Screen
![Home Screen](/mnt/data/{4B47D4F4-D4C9-4598-974E-ADEFFA280B8F}.png)

### 🔹 Question Page
![Question Page](/mnt/data/{CFE476DD-C98B-4587-850B-E749CB841E50}.png)

### 🔹 Result Page
![Result Page](/mnt/data/{DDB7B205-502B-46F8-9E6B-7516C1932B6E}.png)

---

## 🧩 Component Overview

### 🔹 `App.jsx`
Handles the quiz logic and manages states like:
- `index` for tracking current question
- `points` to store score
- `status` for tracking quiz progress (`ready`, `active`, `finished`)
- `selectedAnswer`, `isCorrect`, `secondsRemaining`, and others

### 🔹 `Header.jsx`
Displays the quiz title.

### 🔹 `QuestionList.jsx`
Responsible for:
- Rendering questions
- Handling answer validation
- Managing timer logic
- Moving to the next question

### 🔹 `Question.jsx`
Displays the current question text and passes data to `Options`.

### 🔹 `Options.jsx`
Shows all possible answers and highlights the selected one.
Also validates if the selected option is correct or not.

### 🔹 `NextButton.jsx`
Navigates to the next question or result screen.

### 🔹 `ProgressBar.jsx`
Dynamically visualizes how far the user has progressed through the quiz.

### 🔹 `Timer.jsx`
Displays a countdown and changes color near timeout for urgency.

### 🔹 `ResultComponent.jsx`
Final result screen showing:
- Total correct answers
- Score with animated number counter
- Performance emojis based on score
- Restart button

---

## 🧠 Logic Highlights

- **Scoring System:** Adds points only when correct answer is selected.
- **Timer Countdown:** Deducts time using `setInterval`, and auto-submits when time runs out.
- **Blank Question Detection:** Checks for `question.includes("___")` to render input field.
- **Answer Matching:** Trims and lowercases input for accurate comparison.

---

## 🧪 Sample Question Format (in `data.js`)

```js
{
  question: "JavaScript is a ___ language?",
  options: ["Functional", "Object-Oriented", "Procedural", "All of the above"],
  correctOption: 3
}
```

---

## 💡 How to Use / Run Locally

```bash
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
npm install
npm run start
```

---

## 🎯 Future Improvements

- Add categories and difficulty levels
- Backend support for storing questions
- User authentication and history tracking
- Animations and transition enhancements

---



## 1️⃣ **QuestionSet.jsx**

```jsx
import React from 'react';
import QuestionList from './QuestionList';

export default function QuestionSet() {
  return <QuestionList />;
}
```

### ✅ Purpose:
- This is a **wrapper component** that simply renders the `QuestionList`.

---

## 2️⃣ **QuestionList.jsx**

This is the **main logic component**.

### ✅ Responsibilities:
- Loads all questions from `sample.json`.
- Maintains all **state**: current question, selected options, user answers, and timer.
- Manages **navigation** using `useNavigate`.
- Implements **timer logic**, answer checking, and routing to results.

### 🧠 Important States:
```jsx
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [selectedOptions, setSelectedOptions] = useState([]);
const [userAnswers, setUserAnswers] = useState([]);
const [timer, setTimer] = useState(30);
```

---

### 🔁 `useEffect` (on index change)
```jsx
useEffect(() => {
  setTimer(30);
  clearInterval(intervalRef.current);

  intervalRef.current = setInterval(() => {
    setTimer((prev) => {
      if (prev <= 1) {
        clearInterval(intervalRef.current);
        handleNextQuestion();
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(intervalRef.current);
}, [currentQuestionIndex]);
```
**This handles:**
- Resetting timer every question.
- Auto-submitting if time runs out.

---

### 🔘 `handleOptionClick`

```jsx
const handleOptionClick = (option) => {
  // toggle option selection
};
```

- Updates selected options array
- Plays a **click sound**

---

### ⏭️ `handleNextQuestion`

```jsx
const handleNextQuestion = () => {
  // Save selected answers
  // Move to next question or go to results
};
```

---

### 🧮 `calculateAndNavigateToResult`

Compares user answers with correct answers from `sample.json`.

Sends to `ResultContainer` via:
```js
navigate("/ResultContainer", {
  state: {
    questions,
    userAnswers,
    score,
  },
});
```

---

### 🧠 `renderQuestionWithBlanks`

Builds HTML with:
- `<strong>` for selected answers
- Empty span with underline for remaining blanks

This is passed to `QuestionDisplay`.

---

### ⏱️ `getBackgroundClass`

Based on timer, it returns:
- Green (30–21s)
- Yellow (20–11s)
- Red (10–0s)

Adds animation class like `animate-soft-blink-red`.

---

### 📦 Renders `QuestionContainer` and passes all props:

```jsx
<QuestionContainer
  timer={timer}
  onQuit={handleQuit}
  currentIndex={currentQuestionIndex}
  totalQuestions={questions.length}
  questionHTML={renderQuestionWithBlanks()}
  options={currentQuestion.options}
  selectedOptions={selectedOptions}
  onSelect={handleOptionClick}
  showNextButton={selectedOptions.length === blanks}
  onNext={handleNextQuestion}
/>
```

---

## 3️⃣ **QuestionContainer.jsx**

This is the **layout component** for a single question.

### ✅ Responsibilities:
- Arranges child components
- Displays current question number and total
- Displays the main question, options, and next button

### 🧩 Children rendered:
- `<QuestionTimer timer={timer} onQuit={onQuit} />`
- `<ProgressBar total={totalQuestions} current={currentIndex} />`
- `<QuestionDisplay renderedHtml={questionHTML} />`
- `<OptionList options={...} onSelect={...} />`
- `<NextButton show={...} onNext={...} />`

---

## 4️⃣ **QuestionTimer.jsx**

```jsx
const QuestionTimer = ({ timer, onQuit }) => (
  <div className="flex justify-between items-center mb-3">
    <span className="text-gray-800 font-semibold text-sm">
      {timer < 10 ? `0:0${timer}` : `0:${timer}`}
    </span>
    <button onClick={onQuit} className="...">Quit</button>
  </div>
);
```

### ✅ Props:
- `timer`: Remaining seconds
- `onQuit`: Function to quit quiz

---

## 5️⃣ **ProgressBar.jsx**

```jsx
const ProgressBar = ({ total, current }) => (
  <div className="flex items-center space-x-1">
    {[...Array(total)].map((_, i) => (
      <div
        key={i}
        className={`h-1 flex-1 rounded-full ${
          i <= current ? 'bg-yellow-400' : 'bg-gray-200'
        }`}
      />
    ))}
  </div>
);
```

### ✅ Props:
- `total`: Total number of questions
- `current`: Index of current question

**Displays progress bar segments with yellow for completed/current**

---

## 6️⃣ **QuestionDisplay.jsx**

```jsx
const QuestionDisplay = ({ renderedHtml }) => (
  <p
    className="text-lg text-gray-800 text-center"
    dangerouslySetInnerHTML={{ __html: renderedHtml }}
  />
);
```

### ✅ Props:
- `renderedHtml`: Question with filled blanks

Uses `dangerouslySetInnerHTML` to safely render HTML with bold text and spans.

---

## 7️⃣ **OptionList.jsx**

```jsx
const OptionList = ({ options, selectedOptions, onSelect }) => (
  <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {options.map((option, index) => (
      <li key={index}>
        <button
          onClick={() => onSelect(option)}
          className={`... ${selectedOptions.includes(option) ? 'bg-blue-100' : 'hover:bg-gray-50'}`}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);
```

### ✅ Props:
- `options`: All possible answers
- `selectedOptions`: Currently selected ones
- `onSelect`: Handler for clicks

---

## 8️⃣ **NextButton.jsx**

```jsx
const NextButton = ({ show, onNext, isLastQuestion }) => {
  if (!show) return null;

  return (
    <button onClick={onNext} className="...">
      {isLastQuestion ? 'Result' : 'Next Question'}
    </button>
  );
};
```

### ✅ Props:
- `show`: Boolean, whether to show or hide the button
- `onNext`: Handler for next question
- `isLastQuestion` (Optional): Decides button label (`Result` or `Next`)

Note: You're not currently passing `isLastQuestion`, so it’ll always show “Next Question.” You may want to update that.

---

## 🔗 Props Flow Summary

| Component            | Receives From      | Props                                 |
|---------------------|--------------------|----------------------------------------|
| `QuestionTimer`      | QuestionContainer  | `timer`, `onQuit`                      |
| `ProgressBar`        | QuestionContainer  | `total`, `currentIndex`               |
| `QuestionDisplay`    | QuestionContainer  | `questionHTML`                        |
| `OptionList`         | QuestionContainer  | `options`, `selectedOptions`, `onSelect` |
| `NextButton`         | QuestionContainer  | `showNextButton`, `onNext`             |
| `QuestionContainer`  | QuestionList       | All above as props                     |
| `QuestionList`       | Self-Managed       | Reads from `questionsData`             |

---

## 🎯 Summary

Your quiz app is very well-structured:

- **Single source of truth** (`QuestionList`) handles all logic.
- **Presentational components** (like `ProgressBar`, `OptionList`) are dumb and purely visual.
- **Props are passed cleanly** down the tree.
- Timer, background animation, sounds, and navigation are **well implemented**.

---

If you want, I can also help:
- Add `isLastQuestion` logic to `NextButton`
- Show answers after result
- Add total time taken
- Improve styling or transitions

Let me know!