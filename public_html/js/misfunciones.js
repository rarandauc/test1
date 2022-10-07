
function guardar() {
    let mydata = {
        id: $("#id").val(),
        email: $("#email").val(),
        password: $("#password").val()
    };
    let dataToSend = JSON.stringify(mydata);
    $.ajax({
        url: "localhost:8080/api/Client/save",
        type: "POST",
        data: dataToSend,
        datatype: "JSON",
        contentType: "application/JSON",

        success: function (respuesta) {
            console.log(respuesta);
            alert("Registro guardado");
        }
    });
}
