var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["surname"] = document.getElementById("surname").value;
    formData["age"] = document.getElementById("age").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.surname;
    cell4 = newRow.insertCell(2);
		cell4.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button class="edit" onClick="onEdit(this)">Edit</button> <button class="delete" onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.surname;
    selectedRow.cells[2].innerHTML = formData.age;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("surname").value = '';
    document.getElementById("age").value = '';
    selectedRow = null;
}

document.getElementById("search").onkeyup = function(){
    var query = this.value.toUpperCase();
    var table = document.getElementsByTagName("table")[0];
    var table_row = document.getElementsByTagName("tr");

    for (var i = 0; i < table_row.length; i++) {
        var name_row = table_row[i].getElementsByTagName('td')[0];
        if (name_row) {
            var name = name_row.textContent || td.innerText;
            if (name.toUpperCase().indexOf(query)>-1) {
                table_row[i].style.display="";
            }
            else{
                table_row[i].style.display="none";
            }
        }
        
    }
}