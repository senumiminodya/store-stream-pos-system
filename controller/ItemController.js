import ItemModel from "../model/ItemModel.js";
import {items} from "../db/Db.js";

$(document).ready(function () {

    var recordIndex;

    /* Load items to the table */
    function loadTable() {

        $('#item-table-tbody').empty();

        items.map((item, index) => {
            console.log(item)
            let record = `<tr>
                <td class="item_code_value">${item.item_code}</td>
                <td class="item_name_value">${item.item_name}</td>
                <td class="item_price_value">${item.price}</td>
                <td class="item_quantity_value">${item.quantity}</td>
            </tr>`;
            $('#item-table-tbody').append(record);
        });
    }

    /* Search an item from table */
    $('#item-table-tbody').on('click', 'tr', function (){
        let index = $(this).index();
        recordIndex = index;
        console.log("index: ", index);

        let item_code = $(this).find(".item_code_value").text();
        let item_name = $(this).find(".item_name_value").text();
        let item_price = $(this).find(".item_price_value").text();
        let item_quantity = $(this).find(".item_quantity_value").text();

        $("#item_code").val(item_code);
        $("#item_name").val(item_name);
        $("#item_price").val(item_price);
        $("#item_quantity").val(item_quantity);
    });

    /* save item */
    $('#item_save_btn').on('click', () =>{
        var item_code = $('#item_code').val();
        var item_name = $('#item_name').val();
        var item_price = $('#item_price').val();
        var item_quantity = $('#item_quantity').val();

        var item = new ItemModel(item_code, item_name, item_price, item_quantity);

        items.push(item);
        loadTable();
        clear();
    });

    /* update item */
    $('#item_update_btn').on('click', () =>{
        var item_code = $('#item_code').val();
        var item_name = $('#item_name').val();
        var item_price = $('#item_price').val();
        var item_quantity = $('#item_quantity').val();

        let itemObject = items[recordIndex];
        itemObject.item_code = item_code;
        itemObject.item_name = item_name;
        itemObject.price = item_price;
        itemObject.quantity = item_quantity;

        loadTable();
        clear();
    });

    /* delete item */
    $("#item_delete_btn").on('click', () => {
        items.splice(recordIndex, 1);
        loadTable();
        clear();
    });

    $('#item_clear_btn').on('click', () =>{
        clear();
    });

    /* clear fields */
    function clear() {
        $('#item_code').val('');
        $('#item_name').val('');
        $('#item_price').val('');
        $('#item_quantity').val('');
    }
});