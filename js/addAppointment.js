function submitAppt() {

    var appt = {};
    appt.appointment = {};

    appt.appointment.appointment_date = $("#appointment_date")[0].value;
    //= $("#appointment_date")[0].value;
    appt.appointment.location = $("#location")[0].value;
    appt.appointment.vet_name = $("#vet_name")[0].value;

    var xmlRequests = new XMLHttpRequest();
    xmlRequests.onreadystatechange = function(){
        if (xmlRequests.status === 200 && xmlRequests.readyState === 4){
            document.location.href = "yourDog.html?id=" + params[0].split('=')[1];
        }
   };

    $.post (
   'http://dog-tracker-api.herokuapp.com/appointments',
   {appointments: appt},
       function() {
          document.location.href = "yourDog.html?id=" + params[0].split("=")[1];
       });

}

