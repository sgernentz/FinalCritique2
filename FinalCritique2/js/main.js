// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
  $("#email_form").validate({
        rules: {
            "email_1": {
                required: true,
                email: true
            },
           
            "full_name": {
                required: true,
                name: true
            },
                    
        },
        messages: {
            "email_1": {
                required: "Enter email address",
               
            },
           
            "full_name": {
                required: "Please enter Full Name",
            },         
        }
    });      
  });                       