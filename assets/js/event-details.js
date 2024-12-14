$(document).ready(function () {
  $("#basic-info-form").submit(function (e) {
    e.preventDefault();
    const form = $(this);
    //  url = form.attr("action");
    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(),
      success: function (response) {
        if(response.status == true){

        }
        else if(response.status == true){

        }
        $("#basic-info-modal").modal("hide");
        $("#basic-info-modal").find("input").val("");
        $("#basic-info-modal").find("select").val("");
        $("#basic-info-modal").find("textarea").val("");
        $("#basic-info-modal").find("input").removeClass("is-invalid");
      },
    });
  });
});
