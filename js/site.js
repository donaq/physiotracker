var duration = 3;
var exercises = []
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
    // start timing
}
$(document).ready(function(){
    $("#calfquad").click(calfquad);
});
