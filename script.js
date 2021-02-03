$( document ).ready(function(){
    console.log("let's get ready to party with jQuery!")
});

$("img").addClass("image-center");

$("p").last().remove();

const pixelSize = Math.floor((Math.random() * 100) + 1);
$("#title").css("font-size", `${pixelSize}px`);

$("ol").append("<li>This is Jack's list element</li>");

$("aside").empty().append("<p> Sorry for the existence of that list :( </p>");


$(".mb-5").change(function(){
    const red = $("input").eq(0).val();
    const blue = $("input").eq(1).val();
    const green = $("input").eq(2).val();
    $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
});

$("img").on("click", function() {
    $("img").remove();
});