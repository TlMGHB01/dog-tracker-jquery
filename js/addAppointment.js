function submitAppt() {

    var appt = {};
    appt.appointment = {};
    appt.appointment.dog_id = params[0].split('=')[1];
    appt.appointment.appointment_date = $("#appointment_date")[0].value;
    appt.appointment.location = $("#location")[0].value;
    appt.appointment.vet_name = $("#vet_name")[0].value;


    $.post (
   'http://dog-tracker-api.herokuapp.com/appointments',
    appt,
       function() {
           document.location.href = "yourDog.html?id=" + params[0].split("=")[1];
       });

    //xmlRequests.open('POST','http://dog-tracker-api.herokuapp.com/appointments',true);
    //xmlRequests.setRequestHeader('Content-Type', 'application/json');
    //xmlRequests.send(JSON.stringify(appt));
}

