$("button").click(function() {
    let name = $(".Username").val();
    let age = 10 + parseInt($(".age").val());
    let job = $(".Userjob").val();
    $(".text").hide();
    $("input").hide();
    $(".answer").append(`<p class="new">${name}, in 10 years, you will be ${age} years old, and work as a ${job}.</p>`);
});
$(".reset").click(function() {
    $(".new").hide();
    $(".text").show();
    $("input").show();
    $(".start").show();
    let name = $(".Username").val("");
    let age = 10 + parseInt($(".age").val(""));
    let job = $(".Userjob").val("");
});