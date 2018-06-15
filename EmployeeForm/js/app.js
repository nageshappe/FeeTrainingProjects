function addDetails()
{
    
     if(validateFirstName())
     {
         if(validateFullName())
         {
             //Do POst
             postData();
         }else{
            /* Display Error message for Full name*/
            displayErrFullName();
         }
        }else{
        /* Display Error message for Full name*/
        displayErrFirstName();
    }
}

function validateFirstName(){
    const firstName = $('#firstName').val();
     console.log(firstName);
    if(firstName === ' ')
      return false
    return true;
}

function validateFullName(){
    const fullName = $('#fullName').val();
    console.log(fullName);
    if(fullName === ' ')
      return false
    return true;
}
function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://project1-720e5.firebaseio.com/appIDs.json',
        data: JSON.stringify(data),
        
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    alert(data);
    console.log('Posting to firebase success');
    console.log(data);
}

function displayErrFirstName()
{

    $('#span-for-errors').show();
}

function displayErrFullName()
{

    $('#span-for-errors1').show();
}

$('document').ready(() =>{
    console.log("App ready");
    $('#span-for-errors').hide();
    $('#span-for-errors1').hide();
});
