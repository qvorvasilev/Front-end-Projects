/**
 * Created by Yavor Vasilev on 8/13/2016.
 */

document.addEventListener('DOMContentLoaded', function () {

    // WARNING
    document.getElementById('submit-btn').addEventListener('click', function(evt) {
        evt.preventDefault();
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var x = document.forms["email-subs"]["email"].value;
        var result = document.getElementById('warning');

        function validateEmail(mail){
            if (pattern.test(mail))
            {
                result.style.visibility = 'hidden';
                return (true);
            }
            result.style.visibility = 'visible';
            document.forms["email-subs"]["email"].value = "";
            return (false);
        }
        validateEmail(x);
    });


    // CHECKBOX
    document.getElementById('select-outer-btn').addEventListener('click', function () {
        var property = document.getElementById('select-inner-btn');
        // console.log('property');
        if (property.style.float === 'left')
        {
            return property.style.float = 'right';
        }else{
            return property.style.float = 'left';
        }
    });


});
