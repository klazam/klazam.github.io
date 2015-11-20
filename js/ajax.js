// AJAX


/*


$.getJSON('../data/employees.json', function(response) {
  var statusHTML = "<ul class='bulleted'>";
  $(response).each(function (index, employee) {
    if (employee.inoffice === true) {
      statusHTML += '<li class="in">';
    } else {
      statusHTML += '<li class="out">';
    };
    statusHTML += employee.name;
    statusHTML += '</li>';
  });
  statusHTML += '</ul>'
  $('#employeeList').html(statusHTML);
});



$('form').submit(function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    var url = $(this).attr('action');
    $.getJSON(url, data, function() {
        
    });
});


*/




function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = 1;
  printNumber(result);
};






