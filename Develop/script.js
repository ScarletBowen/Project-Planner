// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  
// tells computer to load 1)html & 2)css first.
// code to display the current date in the header of the page

    var todayDate = dayjs().format('D MMMM YYYY');
    $("#currentDay").text(todayDate);


  // TODO: Add a listener for click events on the save button. 

  $(".saveBtn").on("click", function () {
    console.log(this);
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    // picking up change from sibling html description attribute
    var time = $(this).parent().attr("id");
    // picking up change from parent html id attribute

    // Save text in local storage
    localStorage.setItem(time, text);

})

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


  // How can Day.js be used to get the current hour in 24-hour time?
  
    function timeBlocks() {
    var currentTime = dayjs().format('H');
  
  // apply the past, present, or future class to each time
  // block by comparing the id to the current hour

  // https://api.jquery.com/each/

    $(".time-block").each(function() {
      var calendarHour = parseInt($(this).attr("id").split("hour")[1]);
  
      if (calendarHour < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
  }
      else if (calendarHour === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
  }
      else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
      }
 
    } )
  
  }

  // code to . HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
    timeBlocks();


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
})