import yay_z from "../assets/yay_z.wav";

function Results({restartQuiz,questionBank,userAnswers}) {
      function play(){
    new Audio(yay_z).play()
  }
    function getScore(){
        let finalScore = 0;
        userAnswers.forEach((answer,index) => {
            if  (answer === questionBank[index].answer) {
                finalScore++;
            }
        });
        return finalScore;
    }

    const score = getScore();
    return (
        <div>
            {play()}
            <h2>Quiz completed</h2>
            <p>Your Score: {score}/{questionBank.length}</p>
            <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
};

export default Results;