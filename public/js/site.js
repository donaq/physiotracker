var exercises = []
var duration = 0;
var soundelement = null;
function next(){
    $("#seconds").hide();
    if(exercises.length==0) $("#rep").html("");
    else $("#rep").html(exercises[exercises.length-1]);
    $("#next").show();
}
function choose(){
    $("#exercise").hide();
    $("#choose").show();
}
function exercise(){
    if(exercises.length==0)
        return choose();
    duration = 30;
    $("#next").hide();
    $("#seconds").show();
    $("#rep").html(exercises.pop());
    countdown();
}
function countdown(){
    if(duration==0){
        $("#seconds").html("");
        next();
        soundelement.play();
        return;
    }
    $("#seconds").html(duration);
    duration = duration - 1;
    setTimeout(countdown, 1000);
}
function calfquad(){
    setupexercise(["Quad", "Calf"]);
}
function hamstring(){
    setupexercise(["Hamstring"]);
}
function setupexercise(parts){
    $("#choose").hide();
    $("#exercise").show();
    exercises = [];
    var legs = ["Left", "Right"];
    var reps = "10 9 8 7 6 5 4 3 2 1".split(" ");
    for(var i=0;i<reps.length;i++)
        for(var j=0;j<parts.length;j++)
            for(var k=0;k<legs.length;k++){
                exercises.push([legs[k],parts[j],"rep",reps[i]].join(" "));
            }
    console.log(exercises);
    next();
}
$(document).ready(function(){
    soundelement = document.getElementById("nextsound");
    $("#calfquad").click(calfquad);
    $("#play").click(function(){soundelement.play()});
    $("#hamstring").click(hamstring);
    $("#next").click(exercise);
});
