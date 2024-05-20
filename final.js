let result_description = [
    {
        colour: "Red",
        description: 'Red ANGRY: Person characterized by ambition,' +
            ' dominance, decision, competitiveness and a fiery temper. They have no problem speaking their minds, and often rebel against the traditional way of doing things. They tend to lead, be the ones who make the decisions and do not have much patience.'
    },
    {
        colour: "Yellow",
        description: 'Yellow OPTIMISTIC: when others are desperate,' +
            ' yellows will continue to see the possibilities and find ways to move on and have fun. Known for their gift for chatter, being so positive they are often seen as entertaining and charming.'
    },
    {
        colour: "Green",
        description: 'Green MELANCHOLIC: calm, balanced, tolerant, easy-going and friendly nature. ' +
            'Unlike the yellow ones, they are good listeners, although they hate leading and standing out in any way, they like to go unnoticed. They are ideal for team work.'
    },
    {
        colour: "Blue",
        description: 'Blue PHLEGMATIC: some define them as pessimists, although it is more likely that they define themselves as realists.' +
            ' They also tend to be very detail-oriented, paying so much attention to fine detail that it sometimes slows down their work. They tend to keep their thoughts to themselves unless asked to speak openly. For these people silence is a virtue, but you can be sure that when they speak their words will be well thought out.'
    },
]

/* Load the result from Local Storage*/
window.onload = function(){
    let resultColour = localStorage.getItem("result_colour");
    console.log(resultColour);
    displayResult(resultColour);
};

function displayResult(colour) {
    let result = document.getElementById("result");
    document.getElementById("result-header");
    let resultObj = result_description.find(obj => obj.colour === colour);
    if (resultObj) {

        result.innerHTML =  `<div class="${colour.toLowerCase()}"><h2>Result: ${resultObj.colour}</h2><p>${resultObj.description}</p></div>`;
    } else {
        result.innerHTML = "<p>Result not found.</p>";
    }
}
