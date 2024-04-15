
class Quiz{
    constructor(questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;

        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }
    
    getQuestion(){
        return this.questions[this.currentQuestionIndex];
    }
    moveToNextQuestion(){
        this.currentQuestionIndex++;
     }
        
     shuffleQuestions(){
        for (let i=0; i<this.questions.length; i++){
            const j = Math.random()* (i+1); i++;
            let newPosition = this.questions[i];
            this.questions[i] = this.questions[j];
            this.questions[j] = newPosition;
    
     }   
    
    }
    checkAnswer(answer){

        const currentQuestion = this.getQuestion();
        if (currentQuestion.answer === answer){
            this.correctAnswers++;
        }
    
    }
    hasEnded(){
        if (this.currentQuestionIndex < this.questions.length){
            return false;
        }else if 
            (this.currentQuestionIndex === this.questions.length){
                return true;
        
        }
    
    }
    }

