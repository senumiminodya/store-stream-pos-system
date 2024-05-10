import CustomerModel from "../model/CustomerModel.js";
import {customers} from "../db/Db.js";

$(document).ready(function () {

    var recordIndex;

    /* Load customers to the table */
    function loadTable() {

        $('#customer-table-tbody').empty();

        customers.map((item, index) => {
            console.log(item)
            let record = `<tr>
                <td class="customer_id_value">${item.c_id}</td>
                <td class="customer_nic_value">${item.nic}</td>
                <td class="customer_name_value">${item.name}</td>
                <td class="customer_phoneNo_value">${item.phoneNo}</td>
            </tr>`;
            $('#customer-table-tbody').append(record);
        });
    }

    /* Search a customer from table */
    $('#customer-table-tbody').on('click', 'tr', function (){
        let index = $(this).index();
        recordIndex = index;
        console.log("index: ", index);

        let cus_id = $(this).find(".customer_id_value").text();
        let cus_nic = $(this).find(".customer_nic_value").text();
        let cus_name = $(this).find(".customer_name_value").text();
        let cus_phoneNo = $(this).find(".customer_phoneNo_value").text();

        $("#cus_id").val(cus_id);
        $("#cus_nic").val(cus_nic);
        $("#cus_name").val(cus_name);
        $("#cus_phoneNo").val(cus_phoneNo);
    });

    /* save customer */
    $('#cus_save_btn').on('click', () =>{
        var cus_id = $('#cus_id').val();
        var cus_nic = $('#cus_nic').val();
        var cus_name = $('#cus_name').val();
        var cus_phoneNo = $('#cus_phoneNo').val();

        var customer = new CustomerModel(cus_id, cus_nic, cus_name, cus_phoneNo);

        customers.push(customer);
        loadTable();
        clear();
    });

    /* update customer */
    $('#cus_update_btn').on('click', () =>{
        var cus_id = $('#cus_id').val();
        var cus_nic = $('#cus_nic').val();
        var cus_name = $('#cus_name').val();
        var cus_phoneNo = $('#cus_phoneNo').val();

        let customerObject = customers[recordIndex];
        customerObject.c_id = cus_id;
        customerObject.nic = cus_nic;
        customerObject.name = cus_name;
        customerObject.phoneNo = cus_phoneNo;

        loadTable();
        clear();
    });

    /* delete customer */
    $("#cus_delete_btn").on('click', () => {
        customers.splice(recordIndex, 1);
        loadTable();
        clear();
    });

    $('#cus_clear_btn').on('click', () =>{
        clear();
    });

    /* clear fields */
    function clear() {
        $('#cus_id').val('');
        $('#cus_nic').val('');
        $('#cus_name').val('');
        $('#cus_phoneNo').val('');
    }

    /* Load All Customers */
    $('#cus_getAll_btn').on('click', ()=>{
        console.log(customers);
    });
});

