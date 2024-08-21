import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
//This is for storing the selected answers
selected={}
correctAnswers = 0 //to show the number of correct answers
isSubmitted = false // use to show the tresult
myQuestions=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"WHich one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    get allNotSelected(){
        //the return will evaluate to true if each questions selected is answer.
        //this is a way to see if no question is left unanswer.
        //This method will also disable the select button if all the question is not selected
       //    return !(Object.keys(this.selected).length === this.myQuestions.length)
             return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
        
   // }

    
    // This is the submit handler
    //submitHandler(event){
    //    event.preventDefault()

    // changeHandler get's called on every click on the options
    //changeHandler(event){
        // event.target has two properties, the name and the value
        // target.name is the value of the input
        // target.value is the name of the input
        // We can store the value in the component state to display the question
       // console.log("The name is: ", event.target.value)
      //  console.log("The value is: ", event.target.name)

     
   // }

   // for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }




    changeHandler(event){

        // We can store the value in the component state to display the question
        //this.myQuestions[0].correctAnswer=event.target.value
        console.log("The name is: ", event.target.name)
        console.log("The value is: ", event.target.value)

        //const {name, value} = event.target
        //the below is the same as the above which is just the short hand.
        const name = event.target.name
        const value = event.target.value
        //this.selected={The selected is: [name]:value} Or Use the below which is the same but display in the console
        console.log("The selected is: ", this.selected, {[name]: value})
    }

     //form submit handler
    submitHandler(event){
        event.preventDefault()
        //We can store the value in the component state to display the question
        // this.selected = this.selected||{}
       // this.selected[this.myQuestions[0].id] = this.myQuestions[0].correctAnswer
       
        //store the selected answers in the state
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        // the corrct answers is the number of questions that are correct
        this.correctAnswers = correct.length
        
        // this is to display the selected answers in the console
        console.log("The selected is: ", this.correctAnswers)

        // this set the value to true to display the result
        this.isSubmitted = true
    }

    //This is the result handler function
    resetHandler(){
        // this array holds the reset the selected answers
        this.selected ={}
        // this sets the reset correct answer to 0
        this.correctAnswers=0
        // this sets the isSubmitted to false and disable the submit buttom
        this.isSubmitted = false
    }

    //This is the result handler function
   // resultHandler(){
        //this.isSubmitted = true
        //this.isSubmitted = false
       // this.isSubmitted = false
   // }

    


}