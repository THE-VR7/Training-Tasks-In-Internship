console.log("script loaded");

$("#reset_form").click(function(){
    document.getElementById("contact_form").reset();
    $(".error-class").addClass("d-none");
});

$('#my-button').click(function(){
    $('#my-file').click();
});

$("#my-file").change(function(){
    let value = $("#my-file").val().split('\\');
    // console.log(value);
    $("#file_name").text(""+value[2]);
});

$("#reset_form").click(function(){
    $("#file_name").text("No File Choosen");
});

// Only Numeric Values allowed in Telephone Number
$("#number_id").on('input',function(){
    $(this).val($(this).val().replace(/[^0-9]/g,''));
});

// Add alert for Gender:

$("#gender_male").change(function(){
    alert("Hello Sir");
});

$("#gender_female").change(function(){
    alert("Hello Lady");
});

// Prevent default form submission by using Enter

$(document).on("keydown",":input:not(textarea)",function(event){
    return event.key!= "Enter";
})

var isvalid = false;

// Function to change promo code
function changepromo_code(){
    var el = document.getElementById("state_Selection");
    var val = el.options[el.selectedIndex].text;
    var promo = document.getElementById("promo_id");
    promo.value = val+" - PROMO";
}


function common_validation(){
    var form = document.forms["contactus_form"];
    var name = form["fname"];
    var email = form["femail"];
    let x1 = checkname(name.value);
    let x2 = checkemail(email.value);
    if(x1 && x2)
        {
            return true;
        }
        return false; 
}

// Function for the contact us page form validation
function checkform(){
    var form = document.forms["contactus_form"];
    var org_name = form["forg_name"];
    var website = form["website_name"];
    let x3 = checkOrganization(org_name.value);
    let x4 = checkwebsite(website.value);
    if(common_validation() && x3 && x4)
        {
            $("#error_required_values").addClass("d-none");
            document.getElementById("contact_form").reset();
            alert("Your form is successfully Submitted.");
            return true;
        }
    else
        {
            $("#error_required_values").removeClass("d-none");
        }   
        return false; 
}

// Function for the Careers us page form validation

function callalert(){
    // console.log(isvalid+" callalert called");
    if(isvalid)
    {
        document.getElementById("contact_form").reset();
        alert("this is the alert message");
        return true;
    }
    return false;
}


function checkform1(){
    if(common_validation())
        {
            console.log("Inside common validation ");
            $("#error_required_values").addClass("d-none");
            isvalid =  true;
            return;
        }
    else
        {
            $("#error_required_values").removeClass("d-none");
        }   
        isvalid =  false; 
}

// Check that the Name is not empty
function checkname(name)
{
    if(name.length == 0)
    {
        $("#name_error").removeClass("d-none");
        return false;
    }
    $("#name_error").addClass("d-none");  
    console.log("At the end of name");              
    return true;    
}

// Check that the Organization Name is not empty
function checkOrganization(org_name){
    if(org_name.length == 0)
    {
        $("#org_error").removeClass("d-none");
        return false;
    }
    $("#org_error").addClass("d-none");
    console.log("At the end of check organization");
    return true;
}

// Check Email is not empty and it follows the desired pattern
function checkemail(email){
    if(email.length == 0)
    {
        $("#email_empty_error").removeClass("d-none");
        $("#email_pattern_error").addClass("d-none");
        return false;
    }
    else
    {
        $("#email_empty_error").addClass("d-none");
        var pattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)+$/;
        if(!email.match(pattern))
        {
            $("#email_pattern_error").removeClass("d-none");
            return false;
        }
        else
        {
            $("#email_pattern_error").addClass("d-none");
        }
    }
    console.log("At the end of check email");
    return true;
}

// Website Pattern Validator
function checkwebsite(website){
    if(website.length==0)
        return true;
        var pattern = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
        if(!website.match(pattern))
        {
            $("#website_pattern_error").removeClass("d-none");
            return false;
        }
        else
        {
            $("#website_pattern_error").addClass("d-none");
        }
    return true;
}


