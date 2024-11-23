var nameErrorMsg = document.getElementsByClassName('nameErrorMsg')[0]
var ageErrorMsg = document.getElementsByClassName('ageErrorMsg')[0]
var inputName = document.getElementById('name')
var inputAge = document.getElementById('age')
var tbody = document.getElementById('tbody')
var thead=document.getElementsByTagName('thead')[0]
// ()

var std_id = 1

function addStudent() {
    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')


    nameErrorMsg.innerHTML = "";
    ageErrorMsg.innerHTML = "";

    var validName = validateName();
    var validAge = validateAge();

    if (!validName || !validAge) {
        return;
    }

    if (isDuplicate(inputName.value, inputAge.value)) {
        alert("This student is already Exist");
        return;
    }

    document.querySelector('thead').style.display = 'table-header-group';
    td1.innerHTML = std_id++
    td2.innerHTML = inputName.value
    td3.innerHTML = inputAge.value
    td4.innerHTML = '<a href="#" onclick="deleteItem(this)">delete student</a>'
    tr.append(td1, td2, td3, td4)
    tbody.append(tr)

    inputName.value = "";
    inputAge.value = "";

}

function validateName() {
    if (inputName.value == '') {
        nameErrorMsg.innerHTML = "Student Name is Required";
        return false
    } else if (inputName.value.length < 3) {
        nameErrorMsg.innerHTML = "Name Length Must be Greater than 3 characters"
        return false
    }
    return true
}

function validateAge() {
    if (inputAge.value == '') {
        ageErrorMsg.innerHTML = "Student Age is Required";
        return false
    } else if (parseInt(inputAge.value) <= 18) {
        ageErrorMsg.innerHTML = "Age Must be Greater than 18"
        return false
    }
    return true
}

function isDuplicate(name, age) {
    var rows = tbody.getElementsByTagName('tr')
    for (var i = 0; i < rows.length; i++) {
        var col = rows[i].getElementsByTagName('td');
       var existName = col[1].innerHTML;
       var existAge = col[2].innerHTML
        if (existName === name && existAge === age) {
            return true
        }
    }
    return false
}

function deleteItem(element) {
    var row = element.parentNode.parentNode;
    row.remove();
}

