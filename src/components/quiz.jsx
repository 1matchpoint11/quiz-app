import {useState} from "react";
import Results from "./results";

function Quiz () {
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Rome"],
            answer: "Paris",
        },
        {
            question: "How many stars are on the US Flag?",
            options: ["52", "50", "48", "1"],
            answer: "50",
        },
        {
            question: "What fruit is most eaten in the world?",
            options: ["Apples","Bananas","Oranges","Pears"],
            answer: "Bananas",
        },        
    ];

    const initialAnswers = questionBank.map(() => null);
    
    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const selectedAnswer = userAnswers[currentQuestion];
    const [isQuizFinished, setIsQuizFInished] = useState(false);
    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

 
    function goToNext() {
        if (currentQuestion === questionBank.length -1) {
            setIsQuizFInished(true)} else {};
        setCurrentQuestion(currentQuestion + 1)};
    function goToPrev() {
        if (currentQuestion > 0)
            setCurrentQuestion(currentQuestion - 1);
    };
    
    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0)
        setIsQuizFInished(false);
    };

    if (isQuizFinished) {
        return ( 
            <Results 
            userAnswers={userAnswers} 
            questionBank={questionBank} 
            restartQuiz={restartQuiz}/>);
    };
    return (<div>
        <h2> Question {currentQuestion+1}</h2>
        <p className="question">{questionBank[currentQuestion].question} </p>
        {questionBank[currentQuestion].options.map((option) => (
        <button 
          className={"option" + (selectedAnswer === option ? " selected": "")}
        onClick={() => handleSelectOption(option)}>
            {""}
            {option}{""}
        </button>
        ))}
        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0}> Previous</button>
            <button onClick={goToNext} disabled={!selectedAnswer}>
                {currentQuestion === questionBank.length -1 ? "Finish Quiz" : "Next"}
                </button>

        </div>
       

    </div>);

    };
export default Quiz
    
