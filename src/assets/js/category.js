var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    console.log(JSON.parse(localStorage.getItem("USER").token));
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "https://localhost:44385/api/admin/category/getall",
            "type": "GET",
            "datatype": "json",
            "headers":{"Authorization":'Bearer ' + JSON.parse(localStorage.getItem("USER").token)}
        },
        "columns": [
            { "data": "name", "width": "50%" },
            { "data": "displayOrder", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    console.log(data);
                    return `<div class="text-center">
                                <a routerLink="/category/Upsert/${data}" class='btn btn-success text-white' style='cursor:pointer; width:100px;'>
                                    <i class='far fa-edit'></i> Edit
                                </a>
                                &nbsp;
                                <a (click)="Delete(${data})" class='btn btn-danger text-white' style='cursor:pointer; width:100px;'>
                                    <i class='far fa-trash-alt'></i> Delete
                                </a>
                            </div>
                            `;
                }, "width": "30%"
            }
        ],
        "language": {
            "emptyTable":"No records found."
        },
        "width":"100%"
    });
}


