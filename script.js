new Vue({
  el: "#flashcards-app",
  data: {
    Question:"",
    Answer:"",
    Category:"",
    
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },
      {
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]
  },

 methods:{
   newCard:function(){
     this.cards.push({
      question:this.Question,
      answer:this.Answer,
      category:this.Category,  
      flipped:false 
 })
     
     this.Question="",
     this.Answer="",
     this.Category=""
     
    }
  }
})