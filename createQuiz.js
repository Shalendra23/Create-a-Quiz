
let status = document.createElement("h1");  // h1 element created from js to display status of questions 
document.body.appendChild(status);

let quiz = document.createElement("div");  // div contatiner element created from js to display question and results 
document.body.appendChild(quiz);

let pos = 0;
let correct = 0;
let question;
let choices;
let choice;
let chA, chB, chC, chD;

    let questions = [   // Array of objects for quiz questions & answers
    [' Into which sea does the Nile flow?', 'Pacific', 'Indian', 'Mediterranean', 'Black Sea', 'C'],
    ['Three continents lie on the Tropic of Capricorn, South America is one, name any of the other two?', 'Europe, Africa', 'Australia, Africa', 'USA, Europe', 'Aisa, Africa', 'B'],
    ['In American currency 10 cents make a what?', 'Dime', 'Quarter', '50 Cent', 'Dollar', 'A'],
    ['Afrikaans was developed from which European language?', 'German', 'French', 'Greek', 'Dutch', 'D'],
    ['An Ortanique is a cross between a tangerine and what other fruit?', 'Grape', 'Melon', 'Orange', 'Peach', 'C'],
    ['What Italian word for "Scratched Drawing" can be found on walls all over the world?', 'Wall Art', 'Graffitti', 'Pizza', 'Pasta', 'B'],
    ['What musical features "Some Enchanted Evening" and "There Is Nothing Like A Dame"?', 'South Pacific', 'Lady & the Tramp', 'Cats', 'Madam Butterfly', 'A'],
    ['What was the name of the first manned lunar landing mission in 1969?', 'Apollo I', 'Apollo X', 'Apollo VIII', 'Apollo XI', 'D'],
    ['Which boxer was nicknamed "The Dark Destroyer"?', 'Mohamed Ali', 'George Forman', 'Nigel Benn', 'Rocky', 'C'],
    ['What was the name of Ritchie Valens girlfriend?', 'Jill', ' Donna', 'Stacey', 'Eva', 'B'],
    ['What is the procedure called where an anaesthetic is injected close to the spinal cord?', 'Epidural', 'Spinal Tap', 'Effusion', 'Hemorage', 'A'],
    ['What poisonous oily liquid occurs naturally in tobacco leaves?', 'THC', 'Tar', 'NC14D', 'Nicotine', 'D'],
    ['Who had his first UK top 10 hit with "Wichita Lineman"?', 'Adele', 'Westlife', 'Glen Cambell', 'Robby Williams', 'C'],
    ['Which sign of the Zodiac is represented by the Scales?', 'Picies', 'Libra', 'Virgo', 'Taurus', 'B'],
    ['In which country was Rudyard Kipling born?', 'India', 'France', 'South Africa', 'Germany', 'A'],
    ['What is the gemstone for September?', 'Diamond', 'Ruby', 'Quartz', 'Sapphire', 'D'],
    ['What instrument has been nicknamed the "Mississippi Saxaphone"?', 'Banjo', 'Flute', 'Harmonica', 'Triangle', 'C'],
    ['One and a half litres of champagne is known as a what?', 'Quart', 'Magnum', 'Big Box', 'Case', 'B'],
    ['In alphabetical order name the three particles that make up an atom?', 'Electron, Neutron, Proton', 'Neutron, Electron, Proton', 'Proton, Atom, Neutron', 'Atom, Electron, Neutron', 'A'],
    ['What is the common name of the "Auora Borealis"?', 'Shooting Star', 'Stone Henge', 'Rainbow', 'Northern Lights', 'D'],
    ];

        function renderQuestion(){   // funnction that renders the questions to the DOM
        status.innerHTML = 'Question ' + (pos+1) + ' of ' + questions.length;

        if(pos >= questions.length){
            status.innerHTML = 'Test Completed';
        
            if( correct < 10) {   // funnction that checks score and displays approiate message
                quiz.innerHTML = '<h2>Try Harder, you got ' + correct + ' / ' + questions.length + ' - please try the quiz again to improve your score </h2>';
            } else if ( correct >= 10 && correct <= 15){
                quiz.innerHTML = '<h2>Well done - Average score , you got ' + correct + ' / ' + questions.length + ' - with a bit more work you can ace this quiz </h2>';
            } else if ( correct > 15){
                quiz.innerHTML = '<h2>Congratulations, you got ' + correct + ' / ' + questions.length + ' - Awesome </h2>';
            } else {
            quiz.innerHTML = 'Null Error';
            }

            return false;
        }

                    if ( pos < 19) {   // changes the Next question button to Caluclate Score on last question
                            question = questions[pos][0];
                            chA = questions[pos][1];
                            chB = questions[pos][2];
                            chC = questions[pos][3];
                            chD = questions[pos][4];

                            quiz.innerHTML = '<h2>' + question + '</h2>';
                            quiz.innerHTML += '<input type="radio" name="choices" value="A">' + chA + '<br>';
                            quiz.innerHTML += '<input type="radio" name="choices" value="B">' + chB + '<br>';
                            quiz.innerHTML += '<input type="radio" name="choices" value="C">' + chC + '<br>';
                            quiz.innerHTML += '<input type="radio" name="choices" value="D">' + chD + '<br> <br>';
                            quiz.innerHTML += '<button onclick="checkAnswer()"> Next Question</button>';
                    } else{
                            question = questions[pos][0];
                            chA = questions[pos][1];
                            chB = questions[pos][2];
                            chC = questions[pos][3];
                            chD = questions[pos][4];
            
                            quiz.innerHTML = '<h2>' + question + '</h2>';
                            quiz.innerHTML += '<input type="radio" name="choices" value="A">' + chA + '<br>';
                            quiz.innerHTML += '<input type="radio" name="choices" value="B">' + chB + '<br>';
                            quiz.innerHTML += '<input type="radio" name="choices" value="C">' + chC + '<br>';
                            quiz.innerHTML += '<input type="radio" name="choices" value="D">' + chD + '<br> <br>';
                            quiz.innerHTML += '<button onclick="checkAnswer()"> Calulate Score</button>';
                        }

        }

        function checkAnswer(){  // function that checks answers against array and increments score via for loop
        choice = null
        choices = document.getElementsByName('choices');
        for(let i = 0; i < choices.length; i++){
            if(choices[i].checked){
            choice = choices[i].value;
            }
        }

        if(choice === questions[pos][5]){
            correct++;  
            console.log(correct);
        }

        pos++;
        renderQuestion();
        }

        window.addEventListener('load', renderQuestion, false);
                        