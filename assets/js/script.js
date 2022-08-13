
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
//tracking function//
$(document).ready(function () {
   
    $(".saveBtn").on("click", function () {
        
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        
        localStorage.setItem(time, text);
    })
   //time tracker
    function timeTracker() {
        
        let timeNow = moment().hour();

         $(".time-block").each(function () {
            let blockTime = parseInt($(this).attr("id").split("hour")[1]);
                   //conditionals            
             if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
//time storage//
    
    $("#8thhour .description").val(localStorage.getItem("8thhour"));
    $("#9thhour .description").val(localStorage.getItem("9thhour"));
    $("#10thhour .description").val(localStorage.getItem("10thhour"));
    $("#11thhour .description").val(localStorage.getItem("11thhour"));
    $("#12thhour .description").val(localStorage.getItem("12thhour"));
    $("#13thhour .description").val(localStorage.getItem("13thhour"));
    $("#14thhour .description").val(localStorage.getItem("14thhour"));
    $("#15thhour .description").val(localStorage.getItem("15thhour"));
    $("#16thhour .description").val(localStorage.getItem("16thhour"));
    $("#17thhour .description").val(localStorage.getItem("17thhour"));

    timeTracker();
})