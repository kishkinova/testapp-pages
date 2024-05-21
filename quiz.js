let question_count = 0;
let result_colour = '';
let total_weight = 0;
let currentResult = new Map;
let currentState = { currentQuestion: 0, weight: 0 };
localStorage.removeItem("total_weight");
localStorage.removeItem("result_colour");

/* Show questions */
window.onload = function(){
    show(question_count);
};

/* Save page state */
window.history.pushState({ currentQuestion: 0, weight: 0 }, null, window.location.href);

/* Handle browser navigation button click */
window.onpopstate = function (event) {
    console.log(event.state);
    if (!event.state || event.state.currentQuestion < currentState.currentQuestion) {
        if (!event.state) {
            history.back();
        } else  {
            currentState = event.state;
            total_weight = total_weight - currentResult.get(question_count - 1);
            question_count--;
            show(question_count);
        }
    }
}

/* Handle question option click */
document.getElementById("questions").addEventListener("click", function(event) {
    if (event.target && event.target.matches("li.option")) {
        let questionIndex = question_count;
        let optionWeight = parseInt(event.target.getAttribute("data-weight"));
        total_weight += optionWeight;
        localStorage.setItem("total_weight", total_weight);
        currentState = { currentQuestion: question_count + 1, weight: optionWeight };
        history.pushState(currentState, null, document.location.href);
        currentResult.set(question_count, optionWeight);

        question_count++;
        if (question_count < questions.length) {
            show(question_count);
        } else {
            calculate_result(total_weight);
            let animationElement = document.getElementById("animation");
            animationElement.classList.add('visible');
            setTimeout(() => window.location.href = "final.html", 3000);
        }
    }
    });

/* Show questions */
    function show(count) {
        let question = document.getElementById("questions");
        let optionsHTML = "";
        questions[count].options.forEach(option => {
            optionsHTML += `<li class="option" data-weight="${option.weight}">${option.text}</li>`;
        });

        question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
                      <ul class="option_group">${optionsHTML}</ul>`;
    }

/* Calculate character type results */
    function calculate_result(weight){
        if (weight <= 40 && weight >= 35){
            result_colour = "Red";
        }
        else if (weight < 35 && weight >= 25){
            result_colour = "Yellow";
        }
        else if (weight < 25 && weight >= 15){
            result_colour = "Green";
        }
        else {
            result_colour = "Blue";
        }
        localStorage.setItem("result_colour", result_colour); // Store result colour in local storage
    }



