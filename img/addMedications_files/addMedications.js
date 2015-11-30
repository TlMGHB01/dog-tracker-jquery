var params = decodeURI(document.location.search);
params = params.split('&');

document.getElementById("name").innerHTML = params[1].split('=')[1];
document.getElementById("breed").innerHTML = params[2].split('=')[1];
document.getElementById("sex").innerHTML = params[3].split('=')[1];
document.getElementById("weight").innerHTML = params[4].split('=')[1];
document.getElementById("age").innerHTML = params[5].split('=')[1];
document.getElementById("fixed").innerHTML = params[6].split('=')[1];

if (params[6].split('=')[1] === "true"){
    document.getElementById("fixed").innerHTML = "Yes";}
else{
    document.getElementById("fixed").innerHTML = "No";
}

function submitMedication() {

    var med = {};
    med.medication = {};

    med.medication.dog_id = params[0].split('=')[1];
    med.medication.name = document.getElementById("medicinename").value;
    med.medication.dose = document.getElementById("dose").value;
    med.medication.comment = document.getElementById("comment").value;

    var xmlRequests = new XMLHttpRequest();
    xmlRequests.onreadystatechange = function(){
        if (xmlRequests.status === 200 && xmlRequests.readyState === 4){
            document.location.href = 'addMedication.html';
        }
    };

    xmlRequests.open('POST','http://dog-tracker-jquery-api.herokuapp.com/medications',true);
    xmlRequests.setRequestHeader('Content-Type', 'application/json');

    xmlRequests.send(JSON.stringify(med));
}

function back() {
    document.location.href = "yourDog.html?id=" + params[0].split('=')[1];
}
