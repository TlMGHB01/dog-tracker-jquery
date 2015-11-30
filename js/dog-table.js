
$.get ('http://dog-tracker-api.herokuapp.com/dogs',
    function(dogs){

        var pt = $("#pet-table-body")[0];
        for (var x = 0; x < dogs.length; x++) {

             var row = pt.insertRow();
             var cell1 = row.insertCell();
             var cell2 = row.insertCell();
             var cell3 = row.insertCell();
             var cell4 = row.insertCell();
             var cell5 = row.insertCell();
             var cell6 = row.insertCell();

            cell1.innerHTML= dogs[x].name;
            cell2.innerHTML= dogs[x].breed;
            cell3.innerHTML= dogs[x].weight;
            cell4.innerHTML= dogs[x].age;
            cell5.innerHTML= dogs[x].sex;
            if(dogs[x].is_spayed_or_neutered) {
                cell6.innerHTML= "Yes";
            } else {
                cell6.innerHTML= "No";
            }
            row.onclick = (function () {
                var dogRow = x;
                return function () {
                    document.location.href = 'yourDog.html?id=' + dogs[dogRow].id;
                }
            })();
        }
        $(function(){
            $("#petable"). tablesorter();
        });

        var $table = $('#petable');
        $table.floatThead({
            scrollContainer: function($table){
                return $table.closest('.wrapper');
            }
        });

        $('.floatThead-container').css("margin","auto");
        $('.floatThead-container').css("position","relative");
        $('.size-row').hide();

    });

function home(){
    document.location.href = "home.html";
}

