
var tableData = data;

//create variables and append objects on data.js to html table
function buildTable(tableData) {
  

  var table = d3.select("#ufo-table");
  var tbody = table.select("tbody");
  tbody.empty()
  var trow;
  for (var i = 0; i < tableData.length ; i++) {
   
    trow = tbody.append("tr");
    trow.append("td").text(tableData[i].datetime);
    trow.append("td").text(tableData[i].city);
    trow.append("td").text(tableData[i].state);
    trow.append("td").text(tableData[i].country);
    trow.append("td").text(tableData[i].shape);
    trow.append("td").text(tableData[i].durationMinutes);
    trow.append("td").text(tableData[i].comments);


  }
}

console.log("Populationg table data")
buildTable(tableData);
console.log("Table data done")

//adding filters on html page and filter using 4 different values: date, city, state, country

function myFunction() {
  // Declare variables 
  var input_date, filter,table, tr, td, i, txtValue;
  input_date = document.getElementById("datetime");
  filter = input_date.value.toUpperCase();
  console.log(filter)

  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
  
      }
    } 
  }
}

function citySearch() {
  // Declare variables 
  var input_city,filter,table, tr, td, i, txtValue;
  input_city = document.getElementById("city");
  filter = input_city.value.toUpperCase();
  console.log(filter)

  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
  
      }
    } 
  }
}

function stateSearch() {
  // Declare variables 
  var input_state,filter,table, tr, td, i, txtValue;
  input_state = document.getElementById("state");
  filter = input_state.value.toUpperCase();
  //console.log(filter)
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
  
      }
    } 
  }
}

function coutrySearch() {
  // Declare variables 
  var input_country,filter,table, tr, td, i, txtValue;
  input_country = document.getElementById("state");
  filter = input_country.value.toUpperCase();
  //console.log(filter)
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
  
      }
    } 
  }
}
