//var xhr = new XMLHttpRequest();
//var dog;
//xhr.onreadystatechange = function() {
//    if (xhr.status == 200 && xhr.readyState == 4){
//        dog = JSON.parse(xhr.responseText);

var myId = document.location.search.split('=')[1];
var dog;
//xhr.open('GET','http://dog-tracker-api.herokuapp.com/dogs/' + myId, true);

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

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel1 = document.createElement("label");
            newLabel1.innerHTML = "Comment: ";
            var newSpan1 = document.createElement("span");
            newSpan1.innerHTML = dog.dietary_restrictions[d].comment;
            newDiv.appendChild(newLabel1);
            newDiv.appendChild(newSpan1);
        }
        //$
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
