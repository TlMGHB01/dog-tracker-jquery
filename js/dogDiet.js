function svbttn() {

    var dietaryrestObj = {};

    $(document).ready(function(){
        $("p").hide();
    });

    dietaryrestObj.dog_id = params[0].split("=")[1];
    dietaryrestObj.food_name = $("#drname")[0].value;
    dietaryrestObj.comment = $("#drcomments")[0].value;

          $.post (
            'http://dog-tracker-api.herokuapp.com/dietary_restriction',
            {dietary_restriction: dietaryrestObj},
                function() {
                    document.location.href = "yourDog.html?id=" + params[0].split("=")[1];

        });

};
