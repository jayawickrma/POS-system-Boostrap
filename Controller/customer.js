import customerModel from "../Model/customerModel";
import {customers} from "../DB/Db";

function displayCustomers() {
    $("#customerTable").empty();
    customers.forEach(function(customer, index) {
        $("#customerTable").append(
            "<tr><td>" + customer.name + "</td><td>" + customer.address + "</td><td>" + customer.nic + "</td><td>" + customer.phone + "</td><td><button class='btn btn-info btn-sm updateBtn' data-index='" + index + "'>Update</button> <button class='btn btn-danger btn-sm deleteBtn' data-index='" + index + "'>Delete</button></td></tr>"
        );
    });
}

// Controller
$(document).ready(function(){
    // Add customer
    $("#addCustomer").click(function(){
        var name = $("#name").val();
        var address = $("#address").val();
        var nic = $("#nic").val();
        var phone = $("#phone").val();
        var customer = new customerModel(name, address, nic, phone);
        customers.push(customer);
        displayCustomers();
        $("#name, #address, #nic, #phone").val("");
    });

    // Update button click
    $(document).on("click", ".updateBtn", function(){
        var index = $(this).data("index");
        var customer = customers[index];
        $("#name").val(customer.name);
        $("#address").val(customer.address);
        $("#nic").val(customer.nic);
        $("#phone").val(customer.phone);
        customers.splice(index, 1);
        displayCustomers();
    });

    // Delete button click
    $(document).on("click", ".deleteBtn", function(){
        var index = $(this).data("index");
        customers.splice(index, 1);
        displayCustomers();
    });
});