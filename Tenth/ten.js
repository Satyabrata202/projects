const form = document.querySelector(".quiz-form");
console.log("JS Loaded")
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;
    const correctAnswer = {
      q1: "noneoftheabove",
      q2: "script",
      q3: "functionmyFunction",
      q4: "add",
      q5: "javascriptObjectNotation"
    };
    for (const [name,value] of data.entries()) {
        if(correctAnswer[name] == value){
            finalScore++;
        }
    }
    document.getElementById('scoreMessage').textContent = `Your quiz score is ${finalScore}`;
})
