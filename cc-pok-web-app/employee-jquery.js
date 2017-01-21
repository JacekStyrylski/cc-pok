$(document).ready(function () {
    var employeesJQ;

    getEmloyees();

    $('.addEmpJQ').click(function () {
        postEmployee();
    });

    $('.delEmpJQ').click(function () {
        delEmployee();
    });

    $('.modEmpJQ').click(function () {
        putEmployee();
    });
});

function delEmployee() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "DELETE",
        'dataType': 'json',
        crossDomain: true,
        url: "http://localhost:51321/api/employee" + '/' + employeesJQ[0].employeeID
    }).done(function () {
        getEmloyees();
    });
}

function getEmloyees() {
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: "http://localhost:51321/api/employee"
    }).then(function (data) {
        employeesJQ = data;
        $('.employees').text(JSON.stringify(employeesJQ));
    });
}

function postEmployee() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        'dataType': 'json',
        data: '{ "name": "Czeslaw", "address": "Szczecin" }',
        crossDomain: true,
        url: "http://localhost:51321/api/employee"
    }).done(function () {
        getEmloyees();
    });
}

function putEmployee() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "put",
        'dataType': 'json',
        data: '{"employeeID":"e9268f4c-f385-46b5-a06d-2129178c6e36","name":"EwaZmienionaNaJacek","address":"KatowicenaGLiwice, Łużycka 17"}',
        crossDomain: true,
        url: "http://localhost:51321/api/employee" + "/" + "e9268f4c-f385-46b5-a06d-2129178c6e36"
    }).done(function () {
        getEmloyees();
    });
}
