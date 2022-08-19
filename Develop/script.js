//using moment to generate today's date
var todaysdate = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(todaysdate);

//trying to add save function

    $(".saveBtn").on("click", function() {
        var notes = $(this).siblings('description').val();
        var hour = $(this).parent().attr('id');

        //save in local
        JSON.stringify.localStorage.setItem(notes, hour);
        // console.log('this is working');
    })

    var findHour = function() {
        var currentHour = moment().hour();
    

    //check time in time blocks
    // $('.time-block').each(function() {
    //     var timeBlock = parseInt($(this).attr('#id').split('hour')[1]);
    function timeBlock1() {
       var check = parseInt($('hour5').split('hour')[1]);

        if(check < currentHour) {
            $('time-block').removeClass('future');
            $('time-block').removeClass('present');
            $('time-block').addClass('past');
        }
        else if (check === currentHour) {
            $('time-block').removeClass('past');
            $('time-block').removeClass('future');
            $('time-block').addClass('present');
        }
        else {
            $('time-block').removeClass('present');
            $('time-block').removeClass('past');
            $('time-block').addClass('future');
        }
        
    
    }
    


    function getLocal() {

    
    $('#hour5' .description).val(localStorage.getItem('hour5'));
    $('#hour6' .description).val(localStorage.getItem('hour6'));   
    $('#hour7' .description).val(localStorage.getItem('hour7'));
    $('#hour8' .description).val(localStorage.getItem('hour8'));
    $('#hour9' .description).val(localStorage.getItem('hour9'));
    $('#hour10' .description).val(localStorage.getItem('hour10'));
    }

    findHour();
    getLocal();
};







//add a function that can track time 
 //1. get current time prob using moment
 //2. check time hours to see if i can add the colors neeeded
 //3. remove them if current time is passed
 

 //add retrieval from local storage at end.