function submitMedication() {
    var myId = document.location.search.split('=')[1];

    var med = {};
    med.medication = {};
    med.medication.dog_id = myId;
    med.medication.name = $("#medicinename")[0].value;
    med.medication.dose = $("#dose")[0].value;
    med.medication.comment = $("#comment")[0].value;

            $.post (
                'http://dog-tracker-api.herokuapp.com/medications',
                med,
                function() {
                    document.location.href = "yourDog.html?id=" + myId;
        }
    );
}
