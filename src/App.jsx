import { useEffect, useState } from "react";
import quizzing from "../quizzing";

function App() {
  const [quiz, setQuiz] = useState(quizzing);

  useEffect(() => {
    setQuiz(quizzing);
  }, []);
  console.log(quiz[2].category);
}

export default App;
