5
var questions = [
    {
        prompt: "What color is the sky?",
        options: ["a> Red", "b> Green", "c> Blue"],
        answer: "a> Red"

    },
    {
        prompt: "What is your favorite animal?",
        options: ["a> dog", "b> cat", "c> mouse"],
        answer: "b"

    },
    {
        prompt: "Whats your prefered mode of transport?",
        options: ["a> ufo", "b> car", "c> boat"],
        answer: "c"
    }

]

let score = 0;

var DOMobject = document.createElement('div');

DOMobject.id = "myDiv";
DOMobject.style.width = "50%";
DOMobject.style.height = "200px";
DOMobject.style.background = "red";


for(let x = 0; x < questions.length; x++){
  var ques = document.createElement("h3");
  ques.innerHTML = questions[x].prompt;
  document.body.appendChild(ques);

  //===============================================================================
  createRadioButtonFromArray();
//===============================================================================


    function createRadioButtonFromArray() {
       var len = questions.length;
       let i = 0;
       let c = 0;


           for ( i ; i < len; i++){
            for(c ; c < 3; c++){
                var radio = document.createElement("input");
                    radio.type = "radio";
                    radio.name = "choices" + x;
                    radio.class = "radioButtons";
                    radio.value = i;
                    radio.id = "choice" + c;

                        var radioText = document.createElement("div");
                            radioText.id = x + "c"+ c;
                            radioText.class = "choiceText";
                            radioText.innerHTML = questions[x].options[c];
 
 
                            radioText.appendChild(radio);
                            console.log(radioText);
                            document.body.appendChild(radioText);
                    }

        }
    }
       
}

function calcScore(){

           let s = 0;
           let l = 3;

                for (s; s < l; s++){}
       //    if ( s.valujd)

    

}


let calculate = document.createElement("input");
calculate.setAttribute('type', 'button');
calculate.setAttribute('value', 'Calculate Score');
document.body.appendChild(calculate);

calculate.onclick = calcScore;


  
  

//console - log =========================================================================================================================== 



/*document.body.appendChild( DOMobject );

let inputBox = document.createElement('input');
inputBox.id = "quizQuestion";

document.body.appendChild( inputBox );

    choice = document.createElement('input');
    choice.setAttribute('type', 'radio');
    choice.setAttribute('value', 'Read Table Data');

    document.body.appendChild(choice);


let name = document.getElementById("quizQuestions");
console.log(name);
    

// button.setAttribute('onclick', 'console.log(name);');

/*
for (let i=0; i<questions.length; i++){
    let response = window.prompt(questions[i].prompt)
        if(response == questions[i].answer){
            score++;
            alert("correct");
        }
        else {
            alert("correct");
        }
}

alert("you got "+ score + " correct");
*/
