var exercises = []
var duration = 0;
function next(){
    $("#rep").hide();
    $("#seconds").hide();
    $("#next").show();
}
function choose(){
    $("#exercise").hide();
    $("#choose").show();
}
function exercise(){
    if(exercises.length==0)
        return choose();
    duration = 3;
    $("#next").hide();
    $("#rep").show();
    $("#rep").html(exercises.pop());
    countdown();
}
function countdown(){
    if(duration==0){
        $("#seconds").html("");
        next();
    }
    $("#seconds").html(duration);
    duration = duration - 1;
    setTimeout(countdown);
}
function calfquad(){
    $("#choose").hide();
    $("#exercise").show();
    exercises = [];
    var legs = ["Left", "Right"];
    var reps = "10 9 8 7 6 5 4 3 2 1".split(" ");
    var parts = ["Quad", "Calf"];
    for(var i=0;i<reps.length;i++)
        for(var j=0;j<parts.length;j++)
            for(var k=0;k<legs.length;k++){
                exercises.push([legs[k],parts[j],"rep",reps[i]].join(" "));
            }
    console.log(exercises);
    $("#next").show();
    $("rep").hide();
    $("seconds").hide();
}
$(document).ready(function(){
    $("#calfquad").click(calfquad);
    $("#next").click(exercise);
});
