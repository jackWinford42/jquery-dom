let listLength = 0;
$("#submit").click(function(e) {
    e.preventDefault();
    const title = $("input").eq(0).val();
    const rating = $("input").eq(1).val();
    $("#movies").append(`<p id="${listLength}"> Title: ${title} Rating: ${rating} </p>`);
    $(`#${listLength}`).append("<button class='remove'>remove</button>");
    $(".remove").click(function(evt) {
        evt.preventDefault();
        $(evt.target).parent().remove();
    });
    listLength++;
});