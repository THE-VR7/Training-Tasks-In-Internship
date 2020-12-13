
console.log("script loaded");

// Add onclick eventlistner to Clear Form Button
document.getElementById("reset_form").addEventListener('click',function (){
    document.getElementById("contact_form").reset();
    document.getElementById("name_error").classList.add("d-none");                    
    document.getElementById("error_required_values").classList.add("d-none"); 
    document.getElementById("org_error").classList.add("d-none");
    document.getElementById("email_pattern_error").classList.add("d-none");
    document.getElementById("email_empty_error").classList.add("d-none");
});

// Add alert for Gender:
document.getElementById("gender_male").addEventListener('change',function(){
    alert("Hello Sir");
});

document.getElementById("gender_female").addEventListener('change',function(){
    alert("Hello Lady");
});


// Function to change promo code
function changepromo_code(){
    var el = document.getElementById("state_Selection");
    var val = el.options[el.selectedIndex].text;
    var promo = document.getElementById("promo_id");
    promo.value = val+" - PROMO";
}

function checkform(){
    var form = document.forms["contactus_form"];
    var name = form["fname"];
    var email = form["femail"];
    var org_name = form["forg_name"];
    let x1 = checkname(name.value,org_name.value);
    let x2 = checkemail(email.value);
    if(x1 && x2)
        {
            document.getElementById("error_required_values").classList.add("d-none");
            return true;
        }
    else
        {
            document.getElementById("error_required_values").classList.remove("d-none");
        }   
        return false; 
}

// Check that the Name and Organization name are not empty
function checkname(name, org_name)
{
    let x1= true;
    let x2 = true;
    if(name.length == 0)
    {
        document.getElementById("name_error").classList.remove("d-none");
        x1 = false;
    }
    if(org_name.length == 0)
    {
        document.getElementById("org_error").classList.remove("d-none");
        x2=false;
    }
    if(x1)
    {
            document.getElementById("name_error").classList.add("d-none");                
    }
    if(x2)
    {
            document.getElementById("org_error").classList.add("d-none");
    }
    if(x1 && x2)
        return true;
    return false;    
}


// Check Email is not empty and it follows the desired pattern
function checkemail(email){
    if(email.length == 0)
    {
        document.getElementById("email_empty_error").classList.remove("d-none");
        return false;
    }
    else
    {
    document.getElementById("email_empty_error").classList.add("d-none");
    var pattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)+$/;
    if(!email.match(pattern))
    {
        document.getElementById("email_pattern_error").classList.remove("d-none");
        return false;
    }
    else
    {
        document.getElementById("email_pattern_error").classList.add("d-none");
    }
    }
    return true;
}

// Add active class to the current Option selected from Nav Menu:

var list = document.getElementById("navbar-list");
var items = list.getElementsByClassName("list-group-item");
for(let i=0;i<items.length;i++)
{
    items[i].addEventListener("click",function(){
        var current = list.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.classList.add("active");
        var section = document.getElementsByTagName("section");
        for(let k=0;k<section.length;k++)
        {
            section[k].classList.add("d-none");
        }
        section[i].classList.remove("d-none");
    });
}