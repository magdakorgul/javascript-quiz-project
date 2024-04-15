class Question{
    constructor(text, choices, answer, difficulty){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
    }
    shuffleChoices(){
       for (let i=0; i<this.choices.length; i++){
        const j = Math.random()* (i+1); i++;
        let newPosition = this.choices[i];
        this.choices[i] = this.choices[j];
        this.choices[j] = newPosition;
       }
}
}