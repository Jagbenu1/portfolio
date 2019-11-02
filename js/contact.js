$(document).ready(function(){
    console.log("this is working");
    $('#myform').validate({
        rules:{
          name: {
              required: true
          },
          mail:{
              required: true,
              email: true
          },
          subject:{
            required: true
          },
          message:{
            required: true,
            minlength: 10
          }
        },
        messages :{
           name: {
             required: "please enter your name."
           },
           mail:{
             required: "Please enter your email address."
           },
           subject:{
             required: "Please enter the subject for your message."
           },
           message:{
             required: "Please enter your message",
             minlength: "That message seems a little short."
           }
        }
    });
});
