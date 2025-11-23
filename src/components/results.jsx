import yay_z from "../assets/yay_z.wav";
import bicycle from "../assets/Bicycle.wav"


function Results({restartQuiz,questionBank,userAnswers}) {


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
    function playwav(){
        if (score === 1) {
            new Audio(bicycle).play()
    } else { 
        new Audio(yay_z).play()
        }
  }
    return (
        <div>
            {playwav()}
            <h2>Quiz completed</h2>
            <p>Your Score: {score}/{questionBank.length}</p>
            <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
};

export default Results;