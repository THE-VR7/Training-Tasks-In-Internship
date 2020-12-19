import { ready } from "jquery";
$(document).ready(function(){
    console.log("jquery working");
})
console.log("scripts loaded");
var boxes:any =  document.getElementsByClassName('input-checkbox');
var table:any = document.getElementsByClassName("grid-table");
var table_rows:any = table[0].getElementsByTagName("tr");
var scores = document.getElementsByClassName("score");


// Function to for the head checkbox to select or unselect all checkboxes 
function selectallboxes():void{    
    // console.log("ran checkbox all function");
    var headbox_value:boolean = boxes[0].checked;
    for(let i = 1;i<boxes.length;i++)
    {
        boxes[i].checked = headbox_value;
    }
}

window.onload = function(){


    // Adding Event Listener for all the checkboxes below the head checkbox
    var boxes:any =  document.getElementsByClassName('input-checkbox');
    for(let i = 1;i<boxes.length;i++)
    {
        boxes[i].addEventListener('click',function(){
            Validate_boxes(boxes,i);
        })
    }
    

    // Adding Event Listener for the Calculate Button
    document.getElementById('calculate_score').addEventListener('click',function(){
        var maximum:number = 0;
        var average:number = 0;
        var users:number = 0;

        for(let i = 1;i<boxes.length;i++)
        {
        if(boxes[i].checked)
        {
            let curr:any = scores[i].innerHTML;
            if(curr.length>0)
            {
                let curr_number : number = parseInt(curr);
                average = average + curr_number;
                users++;

                if(curr_number > maximum)
                {
                    maximum = curr_number;
                }
            }
        }
        }
        if(users>0)
        {
            average = Math.floor(average/users);
        }
        document.getElementById("average").innerHTML = "Average : " + average;
        document.getElementById("max").innerHTML = "Max : " + maximum;
    });


    // Adding Event Listener for the Search bar
    document.getElementById('search_bar').addEventListener("keyup",function(){
        let search_string:string = (<HTMLInputElement>document.getElementById('search_bar')).value;
            search_string = search_string.trim();
        let reg = new RegExp(search_string, "i");
        // console.log(search_string.value);
        for(let i=1;i<table_rows.length;i++)
        {
            for(let j=1;j<table_rows[i].cells.length;j++)
            {
                let name_box = table_rows[i].getElementsByTagName("td")[j];
            let curr_name:string = name_box.innerText.trim();
            if( curr_name.length>0 && search_string.length>0 )
            {
                var match:any = curr_name.match(reg);
                let newtext = curr_name.replace(match,"<mark>"+match+"</mark>");
                table_rows[i].getElementsByTagName("td")[j].innerHTML = newtext;
            }
            else{
                table_rows[i].getElementsByTagName("td")[j].innerHTML = table_rows[i].getElementsByTagName("td")[j].innerText;
            }
          }    
        }
    })
}


// Function to validate the checkboxes i.e if they are unchecked then the 
    // head checkbox should also be unchecked else we need to check every box.
function Validate_boxes(boxes:any, index:number)
{
    var curr_value:boolean = boxes[index].checked;
    // console.log("curr value is "+curr_value);
    if(!curr_value)
    {
        boxes[0].checked = false;
    }
    else
    {
        let counter:number = 0;
        for(let i=1;i<boxes.length;i++)
        {
            if(!boxes[i].checked)
                {
                    break;
                }
                counter++;
        }
        if(counter == boxes.length-1)
        {
            boxes[0].checked = true;
        }
    }
}


