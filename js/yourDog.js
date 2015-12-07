//var xhr = new XMLHttpRequest();
//var dog;
//xhr.onreadystatechange = function() {
//    if (xhr.status == 200 && xhr.readyState == 4){
//        dog = JSON.parse(xhr.responseText);

var myId = document.location.search.split('=')[1];
var dog;
var id_of_med_to_update;
var id_of_app_to_update;
var id_of_vac_to_update;
var id_of_die_to_update;
//xhr.open('GET','http://dog-tracker-api.herokuapp.com/dogs/' + myId, true);

function editAppointment(appointment) {
    console.log(appointment);
    id_of_app_to_update = appointment.id;
    $('#appointment_date').val(appointment.appointment_date);
    $('#location').val(appointment.location);
    $('#vet_name').val(appointment.vet_name);
    $('.modal-edit-appointment').modal({show: true});
}

function hideEditAppointment() {
    $('.modal-edit-appointment').modal('hide');
}

function editMedication(medication) {
    console.log(medication);
    id_of_med_to_update = medication.id;
    $('#med_name').val(medication.name);
    $('#dose').val(medication.dose);
    $('#med_comment').val(medication.comment);
    $('.modal-edit-medication').modal({show: true});
}

function hideEditMedication() {
    $('.modal-edit-medication').modal('hide');
}

function editVaccination(vaccination) {
    console.log(vaccination);
    id_of_vac_to_update = vaccination.id;
    $('#vacc_name').val(vaccination.name);
    $('#last').val(vaccination.last);
    $('#next').val(vaccination.next);
    $('.modal-edit-vaccination').modal({show: true});
}

function hideEditVaccination() {
    $('.modal-edit-vaccination').modal('hide');
}

function editDietaryRestriction(dietary_restrictions) {
    console.log(dietary_restrictions);
    id_of_die_to_update = dietary_restrictions.id;
    $('#food_name').val(dietary_restrictions.food_name);
    $('#comment').val(dietary_restrictions.comment);
    $('.modal-edit-dietary-restrictions').modal({show: true});
}

function hideEditDietaryRestriction() {
    $('.modal-edit-dietary-restrictions').modal('hide');
}

$.get('http://dog-tracker-api.herokuapp.com/dogs/' + myId,
    function(data){
        dog = data;

        $("#name")[0].innerHTML = dog.name;
        $("#breed")[0].innerHTML = dog.breed;
        $("#weight")[0].innerHTML = dog.weight;
        $("#age")[0].innerHTML = dog.age;
        $("#sex")[0].innerHTML = dog.sex;

        if (dog.is_spayed_or_neutered) {
            $("#fixed")[0].innerHTML = 'Yes';
        } else {
            $("#fixed")[0].innerHTML = 'No';
        }
        //$("#appnt")[0];
        var appointments = $("#apptBody")[0];
        for (var i = 0; i < dog.appointments.length; i++ ) {
            var containerDiv = document.createElement("div");
            containerDiv.className = "items-container";
            appointments.appendChild(containerDiv);

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel1 = document.createElement("label");
            newLabel1.innerHTML = "Date: ";
            var newSpan1 = document.createElement("span");
            newSpan1.innerHTML = new Date(dog.appointments[i].appointment_date).toDateString();
            newDiv.appendChild(newLabel1);
            newDiv.appendChild(newSpan1);
            containerDiv.onclick =(function() {
                var temp_appointment = dog.appointments[i];
                return function() {
                    editAppointment(temp_appointment);
                }
            })();

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel2 = document.createElement("label");
            newLabel2.innerHTML = "Location: ";
            var newSpan2 = document.createElement("span");
            newSpan2.innerHTML = dog.appointments[i].location;
            newDiv.appendChild(newLabel2);
            newDiv.appendChild(newSpan2);

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel3 = document.createElement("label");
            newLabel3.innerHTML = "Vet Name: ";
            var newSpan3 = document.createElement("span");
            newSpan3.innerHTML = dog.appointments[i].vet_name;
            newDiv.appendChild(newLabel3);
            newDiv.appendChild(newSpan3);
        }

        var vaccinations = $("#vaccBody")[0];
        for (var v = 0; v < dog.vaccinations.length; v++ ) {
            var containerDiv = document.createElement("div");
            containerDiv.className = "items-container";
            vaccinations.appendChild(containerDiv);

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel1 = document.createElement("label");
            newLabel1.innerHTML = "Name: ";
            var newSpan1 = document.createElement("span");
            newSpan1.innerHTML = dog.vaccinations[v].name;
            newDiv.appendChild(newLabel1);
            newDiv.appendChild(newSpan1);
            containerDiv.onclick =(function() {
                var temp_vaccination = dog.vaccinations[v];
                return function() {
                    editVaccination(temp_vaccination);
                }
            })();

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel1 = document.createElement("label");
            newLabel1.innerHTML = "Last: ";
            var newSpan1 = document.createElement("span");
            newSpan1.innerHTML = new Date(dog.vaccinations[v].last).toDateString();
            newDiv.appendChild(newLabel1);
            newDiv.appendChild(newSpan1);

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel1 = document.createElement("label");
            newLabel1.innerHTML = "Next: ";
            var newSpan1 = document.createElement("span");
            newSpan1.innerHTML = new Date(dog.vaccinations[v].next).toDateString();
            newDiv.appendChild(newLabel1);
            newDiv.appendChild(newSpan1);
        }

        var dietary_restrictions = $("#dietBody")[0];
        for (var d = 0; d < dog.dietary_restrictions.length; d++ ) {
            var containerDiv = document.createElement("div");
            containerDiv.className = "items-container";
            dietary_restrictions.appendChild(containerDiv);

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel1 = document.createElement("label");
            newLabel1.innerHTML = "Food name: ";
            var newSpan1 = document.createElement("span");
            newSpan1.innerHTML = dog.dietary_restrictions[d].food_name;
            newDiv.appendChild(newLabel1);
            newDiv.appendChild(newSpan1);
            containerDiv.onclick =(function() {
                var temp_dietary_restrictions = dog.dietary_restrictions[d];
                return function() {
                    editDietaryRestriction(temp_dietary_restrictions);
                }
            })();

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel1 = document.createElement("label");
            newLabel1.innerHTML = "Comment: ";
            var newSpan1 = document.createElement("span");
            newSpan1.innerHTML = dog.dietary_restrictions[d].comment;
            newDiv.appendChild(newLabel1);
            newDiv.appendChild(newSpan1);
        }

        var medications = $("#medBody")[0];
        for (var i = 0; i < dog.medications.length; i++ ) {
            var containerDivB = document.createElement("div");
            containerDivB.className = "items-container";
            medications.appendChild(containerDivB);

            var newDivB = document.createElement("div");
            containerDivB.appendChild(newDivB);
            var newLabelB1 = document.createElement("label");
            newLabelB1.innerHTML = "Name: ";
            var newSpanB1 = document.createElement("span");
            newSpanB1.innerHTML = dog.medications[i].name;
            newDivB.appendChild(newLabelB1);
            newDivB.appendChild(newSpanB1);
            containerDivB.onclick =(function() {
                var temp_medication = dog.medications[i];
                return function() {
                    editMedication(temp_medication);
                }
            })();

            var newDivB = document.createElement("div");
            containerDivB.appendChild(newDivB);
            var newLabelB2 = document.createElement("label");
            newLabelB2.innerHTML = "Dose: ";
            var newSpanB2 = document.createElement("span");
            newSpanB2.innerHTML = dog.medications[i].dose;
            newDivB.appendChild(newLabelB2);
            newDivB.appendChild(newSpanB2);

            var newDivB = document.createElement("div");
            containerDivB.appendChild(newDivB);
            var newLabelB3 = document.createElement("label");
            newLabelB3.innerHTML = "Comment: ";
            var newSpanB3 = document.createElement("span");
            newSpanB3.innerHTML = dog.medications[i].comment;
            newDivB.appendChild(newLabelB3);
            newDivB.appendChild(newSpanB3);
        }

});

function addAppmnt() {
    document.location.href = 'addAppointment.html?id=' + myId + '&name=' + dog.name + '&breed=' + dog.breed + '&sex=' + dog.sex + '&weight=' + dog.weight +
        '&age=' + dog.age + '&is_fixed='+ dog.is_spayed_or_neutered;
}
function addMeds() {
    document.location.href = 'addMedication.html?id=' + myId + '&name=' + dog.name + '&breed=' + dog.breed + '&sex=' + dog.sex + '&weight=' + dog.weight +
        '&age=' + dog.age + '&is_fixed='+ dog.is_spayed_or_neutered;
}
function addVacs() {
    document.location.href = 'dogVaccs.html?id=' + myId + '&name=' + dog.name + '&breed=' + dog.breed + '&sex=' + dog.sex + '&weight=' + dog.weight +
        '&age=' + dog.age + '&is_fixed='+ dog.is_spayed_or_neutered;

}
function addDiet() {
    document.location.href = 'dogDiet.html?id=' + myId + '&name=' + dog.name + '&breed=' + dog.breed + '&sex=' + dog.sex + '&weight=' + dog.weight +
        '&age=' + dog.age + '&is_fixed=' + dog.is_spayed_or_neutered;
}

function back(){
    document.location.href = "dog-table.html";
}

function home(){
    document.location.href = "home.html";
}

$('#activateAppt').click(function(){
    $("#apptBody").slideToggle();
});

$('#activateMed').click(function(){
    $("#medBody").slideToggle();
});

$('#activateVaccs').click(function(){
    $("#vaccBody").slideToggle();
});

$('#activateDiet').click(function(){
    $("#dietBody").slideToggle();
});

function updateAppointment() {
    var app = {};
    app.appointment = {
        date: $('#appointment_date')[0].value,
        location: $('#location')[0].value,
        vet_name: $('#vet_name')[0].value
    };
    $.ajax({
        type: "PUT",
        url: 'http://dog-tracker-api.herokuapp.com/appointments/' + id_of_app_to_update,
        contentType: "application/json",
        data: JSON.stringify(app),
        success: function() {
            hideEditAppointment();
            window.location.reload();
        }
    });
}


function updateMedication() {
    var med = {};
    med.medication = {
        name: $('#med_name')[0].value,
        dose: $('#dose')[0].value,
        comment: $('#med_comment')[0].value
    };
    $.ajax({
        type: "PUT",
        url: 'http://dog-tracker-api.herokuapp.com/medications/' + id_of_med_to_update,
        contentType: "application/json",
        data: JSON.stringify(med),
        success: function() {
            hideEditMedication();
            window.location.reload();
        }
     });
}

    function updateVaccination() {
    var vac = {};
    vac.vaccination = {
        name: $('#vacc_name')[0].value,
        last: $('#last')[0].value,
        next: $('#next')[0].value
    };
    $.ajax({
        type: "PUT",
        url: 'http://dog-tracker-api.herokuapp.com/vaccinations/' + id_of_vac_to_update,
        contentType: "application/json",
        data: JSON.stringify(vac),
        success:function() {
            hideEditVaccination();
            window.location.reload();

        }

    });
}

function updateDietaryRestriction() {
    var die = {};
    die.dietary_restriction = {
        food_name: $('#food_name')[0].value,
        comment: $('#comment')[0].value
    };
    $.ajax({
        type: "PUT",
        url: 'http://dog-tracker-api.herokuapp.com/dietary_restrictions/' + id_of_die_to_update,
        contentType: "application/json",
        data: JSON.stringify(die),
        success: function() {
            hideEditDietaryRestriction();
            window.location.reload();

        }
    });
}
