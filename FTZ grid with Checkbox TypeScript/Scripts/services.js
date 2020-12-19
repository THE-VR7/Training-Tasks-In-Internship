"use strict";
exports.__esModule = true;
$(document).ready(function () {
    console.log("jquery working");
});
console.log("scripts loaded");
var boxes = document.getElementsByClassName('input-checkbox');
var table = document.getElementsByClassName("grid-table");
var table_rows = table[0].getElementsByTagName("tr");
var scores = document.getElementsByClassName("score");
// Function to for the head checkbox to select or unselect all checkboxes 
function selectallboxes() {
    // console.log("ran checkbox all function");
    var headbox_value = boxes[0].checked;
    for (var i = 1; i < boxes.length; i++) {
        boxes[i].checked = headbox_value;
    }
}
window.onload = function () {
    // Adding Event Listener for all the checkboxes below the head checkbox
    var boxes = document.getElementsByClassName('input-checkbox');
    var _loop_1 = function (i) {
        boxes[i].addEventListener('click', function () {
            Validate_boxes(boxes, i);
        });
    };
    for (var i = 1; i < boxes.length; i++) {
        _loop_1(i);
    }
    // Adding Event Listener for the Calculate Button
    document.getElementById('calculate_score').addEventListener('click', function () {
        var maximum = 0;
        var average = 0;
        var users = 0;
        for (var i = 1; i < boxes.length; i++) {
            if (boxes[i].checked) {
                var curr = scores[i].innerHTML;
                if (curr.length > 0) {
                    var curr_number = parseInt(curr);
                    average = average + curr_number;
                    users++;
                    if (curr_number > maximum) {
                        maximum = curr_number;
                    }
                }
            }
        }
        if (users > 0) {
            average = Math.floor(average / users);
        }
        document.getElementById("average").innerHTML = "Average : " + average;
        document.getElementById("max").innerHTML = "Max : " + maximum;
    });
    // Adding Event Listener for the Search bar
    document.getElementById('search_bar').addEventListener("keyup", function () {
        var search_string = document.getElementById('search_bar').value;
        search_string = search_string.trim();
        var reg = new RegExp(search_string, "i");
        // console.log(search_string.value);
        for (var i = 1; i < table_rows.length; i++) {
            for (var j = 1; j < table_rows[i].cells.length; j++) {
                var name_box = table_rows[i].getElementsByTagName("td")[j];
                var curr_name = name_box.innerText.trim();
                if (curr_name.length > 0 && search_string.length > 0) {
                    var match = curr_name.match(reg);
                    var newtext = curr_name.replace(match, "<mark>" + match + "</mark>");
                    table_rows[i].getElementsByTagName("td")[j].innerHTML = newtext;
                }
                else {
                    table_rows[i].getElementsByTagName("td")[j].innerHTML = table_rows[i].getElementsByTagName("td")[j].innerText;
                }
            }
        }
    });
};
// Function to validate the checkboxes i.e if they are unchecked then the 
// head checkbox should also be unchecked else we need to check every box.
function Validate_boxes(boxes, index) {
    var curr_value = boxes[index].checked;
    // console.log("curr value is "+curr_value);
    if (!curr_value) {
        boxes[0].checked = false;
    }
    else {
        var counter = 0;
        for (var i = 1; i < boxes.length; i++) {
            if (!boxes[i].checked) {
                break;
            }
            counter++;
        }
        if (counter == boxes.length - 1) {
            boxes[0].checked = true;
        }
    }
}
