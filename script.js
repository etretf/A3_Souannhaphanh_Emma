// To reset the checked radio inputs upon reloading the page
// Will make radio inputs unchecked by default
window.onload = function(){
    quizQuestions.reset();
    }

//https://stackoverflow.com/questions/7146322/radio-button-needs-to-be-reset-while-refreshing
function checkResult(){
    let score=0; // define overall quiz score
    let selected1; //variable for storing question1 input
    let selected2;  //variable for storing question2 input
    let selected3; //variable for storing question3 input
    let selected4; //variable for storing question4 input
    let question1; //variable for question1 array
    let question2; //variable for question2 array
    let question3; //variable for question3 array
    let question4; //variable for question4 array
    let checkCount=0; // define variable for count of radio inputs checked

    question1=document.getElementsByName('question1');// define input array for question 1
    question2=document.getElementsByName('question2');// define input array for question 2
    question3=document.getElementsByName('question3');// define input array for question 3
    question4=document.getElementsByName('question4');// define input array for question 4
    
    //scan through each input for question 1 and store value in selected1
    question1.forEach((item, i) => {
        if (question1[i].checked){
            selected1 = question1[i].value;
            console.log(selected1);
            checkCount++;//keep count of number of checked inputs
        }
    });
     //scan through each input for question 2 and store value in selected2
    question2.forEach((item, i) => {
        if (question2[i].checked){
            selected2 = question2[i].value;
            console.log(selected2);
            checkCount++;//keep count of number of checked inputs
        }
    });
     //scan through each input for question 3 and store value in selected3
     question3.forEach((item, i) => {
        if (question3[i].checked){
            selected3 = question3[i].value;
            console.log(selected3);
            checkCount++;//keep count of number of checked inputs
        }
    });
     //scan through each input for question 4 and store value in selected4
     question4.forEach((item, i) => {
        if (question4[i].checked){
            selected4 = question4[i].value;
            console.log(selected4);
            checkCount++; //keep count of number of checked inputs
        }
    });
    //Check if answer for question 1 is correct
    if (selected1=='b'){
        score++;
        console.log(score);
    }
    //Check if answer for question 2 is correct
    if (selected2=='a'){
        score++;
        console.log(score);
    }
    //Check if answer for question 3 is correct
    if (selected3=='c'){
        score++;
        console.log(score);
    }
    //Check if answer for question 4 is correct
    if (selected4=='b'){
        score++;
        console.log(score);
    }
    
    console.log(checkCount); //check if checkCount is incrementing

    //if all questions are answered (checkCount is 4), the following code will run
    if (checkCount==4){
        disableButton(); //will only call function to disable button if ALL radio inputs are checked
        let resultDiv = document.createElement("div"); // creates new div
        resultDiv.classList.add("resultDiv"); //adds class of "resultDiv" to new div
        let result = document.createElement("h3"); //creates h3 in new div
        let scoreDisplay = document.createElement("p"); //displays score results in new div
        let imgDiv=document.createElement("div"); //create image div
        let img = document.createElement("img"); //create image in image div
        imgDiv.classList.add("imgDiv");//adds class of "imgDiv" to imgDiv

        let formColour1 = document.getElementById("correct1"); //will display correct answer
        formColour1.style.backgroundColor="#5DBA7E";//correct answer will have green background colour
        let formColour2 = document.getElementById("correct2");//repeated for all questions and answers
        formColour2.style.backgroundColor="#5DBA7E";
        let formColour3 = document.getElementById("correct3");
        formColour3.style.backgroundColor="#5DBA7E";
        let formColour4 =document.getElementById("correct4");
        formColour4.style.backgroundColor="#5DBA7E";


        //if selected answer is wrong, this will set the selected answer to have a background colour of red
        if (selected1 != 'b'){
            question1.forEach((item, i) => {
            if (question1[i].checked){
                let wrongAnswer = question1[i];
                let nextSibling = wrongAnswer.nextElementSibling;//selects label
                nextSibling.style.backgroundColor="#e03a48";//makes label green
            }
        });       
        }
        //if selected answer is wrong, this will set the selected answer to have a background colour of red
        if (selected2 != 'a'){
            question2.forEach((item, i) => {
            if (question2[i].checked){
                let wrongAnswer = question2[i];
                let nextSibling = wrongAnswer.nextElementSibling;//selects label
                nextSibling.style.backgroundColor="#e03a48";//makes label green
            }
        });       
        }
        //if selected answer is wrong, this will set the selected answer to have a background colour of red
        if (selected3 != 'c'){
            question3.forEach((item, i) => {
            if (question3[i].checked){
                let wrongAnswer = question3[i];
                let nextSibling = wrongAnswer.nextElementSibling;//selects label
                nextSibling.style.backgroundColor="#e03a48";//makes label green
            }
        });       
        }
        //if selected answer is wrong, this will set the selected answer to have a background colour of red
        if (selected4 != 'b'){
            question4.forEach((item, i) => {
            if (question4[i].checked){
                let wrongAnswer = question4[i];
                let nextSibling = wrongAnswer.nextElementSibling;//selects label
                nextSibling.style.backgroundColor="#e03a48";//makes label green
            }
        });       
        }

        switch(score) //this will generate different text and images for each possible score from 0 to 4
        {
            case 0: 
            resultText = document.createTextNode("Did you even watch the show?");
            scoreText = document.createTextNode("0 out of 4");
            img.src="images/catra0.webp";
            img.alt="Catra making pained face at Adora, 0 out of 4";
            break;
            case 1: 
            resultText = document.createTextNode("Time to rewatch the show.");
            scoreText = document.createTextNode("1 out of 4");
            img.src="images/catra1.webp";
            img.alt="Catra in distraught, 1 out of 4";
            break;
            case 2: 
            resultText = document.createTextNode("Not bad. For a princess.");
            scoreText = document.createTextNode("2 out of 4");
            img.src="images/catra2.webp";
            img.alt="Catra frowning and looking over her shoulder, 2 out of 4";
            break;
            case 3: 
            resultText = document.createTextNode("Wow, you really like Catra!");
            scoreText = document.createTextNode("3 out of 4");
            img.src="images/catra3.webp";
            img.alt="Catra smiling down on you, 3 out of 4";
            break;
            case 4: 
            resultText = document.createTextNode("I crown you as a Catra superfan.");
            scoreText = document.createTextNode("4 out of 4");
            img.src="images/catra4.webp";
            img.alt="Catra is happy and smiling, 4 out of 4";
        }
        resultDiv.appendChild(result)//These are creating and appending the newly created elements
        document.body.appendChild(resultDiv);
        result.appendChild(resultText);
        resultDiv.appendChild(result);
        scoreDisplay.appendChild(scoreText);
        resultDiv.appendChild(scoreDisplay);
        resultDiv.appendChild(imgDiv);
        imgDiv.appendChild(img);

        goTo(); // call function goTo() that will scroll to bottom of the html page after results generated
    }
    else {
    alert("Please answer every question"); //If not all questions are answered, this will alert the user
    };
};

//I learned how to disable the button from here: https://thewebdev.info/2021/08/14/how-to-disable-an-html-button-after-one-click-with-javascript/

// this function will disable the submit button after one click so results only show once
// (prevents result spamming)
function disableButton(){
   document.getElementById("submitBtn").setAttribute('disabled', 'disabled');
   once:true;
}

function goTo(){  
    let scrollHeight = document.body.scrollHeight;
    window.scroll(0,scrollHeight);//will scroll to bottom of page
}


