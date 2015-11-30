function svbttn() {

    var vaccinationObj = {};
    vaccinationObj.dog_id = params[0].split("=")[1];
    vaccinationObj.name = $("#vname")[0].value;
    vaccinationObj.last = $("#vlast")[0].value;
    vaccinationObj.next = $("#vnext")[0].value;


    $.post (
        'http://dog-tracker-api.herokuapp.com/vaccinations',
        {vaccination: vaccinationObj},
            function() {
        document.location.href = "yourDog.html?id=" + params[0].split("=")[1];
            });

}
