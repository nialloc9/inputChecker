//INPUT CHANGE
function inputChecker(className, btnId, messageAreaId, messageError, messageSuccess){
    var c = '.'+className;
    var btn = '#'+ btnId;

    //on key down
    $(c).keydown(function(){
        var infoArea = '#' + messageAreaId;
        var result = false;


        $(c).on('change', function () {
            var reqlength = $(c).length;
            console.log(reqlength);
            var value = $(c).filter(function () {
                return this.value != '';
            });

            if(value.length>=0 && (value.length !== reqlength)) {
                pOrN = true;
            } else {
                pOrN = false;
            }

            //add styling
            if(pOrN){
                if($(infoArea).hasClass('success-message')){
                    $(infoArea).removeClass('success-message');
                }

                if($(infoArea).hasClass('error-message')){

                }else{
                    $(infoArea).addClass('error-message');
                }

                //add error message
                message = messageError;

                //disable button
                if($(btn).attr('disabled') == 'disabled'){

                }else{
                    $(btn).attr('disabled', 'disabled');
                }
            }else{
                if($(infoArea).hasClass('error-message')){
                    $(infoArea).removeClass('error-message');
                }

                if($(infoArea).hasClass('success-message')){

                }else{
                    $(infoArea).addClass('success-message');
                }

                //add success message
                message = messageSuccess;

                //enable button
                if($(btn).attr('disabled') == 'disabled'){
                    $(btn).removeAttr('disabled');
                }else{

                }

                result = true;
            }

            //render info
            $(infoArea).text(message);
            return result;
        });
    });
}
