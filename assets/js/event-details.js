$(document).ready(function () {
  function validateBasicInfo() {
    const fullName = $("#full-name").val();
    const email = $("#email-address").val();
    valid = true;
    $(".error-message").remove();
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName == "") {
      valid = false;
      $("#full-name").after(
        '<p class="mb-0 error-message text-danger">Full name is required</p>'
      );
    } else if (!nameRegex.test(fullName)) {
      valid = false;
      $("#full-name").after(
        '<p class="mb-0 error-message text-danger">Full name can only contain letters and spaces</p>'
      );
    }

    if (email == "") {
      valid = false;
      $("#email-address").after(
        '<p class="mb-0 error-message text-danger">Email is required</p>'
      );
    } else if (!emailRegex.test(email)) {
      valid = false;
      $("#email-address").after(
        '<p class="mb-0 error-message text-danger">Invalid email format</p>'
      );
    }
    return valid;
  }
  $("#basic-info-form").submit(function (e) {
    e.preventDefault();
    let valid = validateBasicInfo();
    if (valid == true) {
      $("#basic-info-modal").modal("hide");
      // $("#card-info-modal").modal("show");
    }
    // const form = $(this);
    //  url = form.attr("action");
    // $.ajax({
    //   type: "POST",
    //   url: url,
    //   data: form.serialize(),
    //   success: function (response) {
    //     if(response.status == true){

    //     }
    //     else if(response.status == true){

    //     }
    //     $("#basic-info-modal").modal("hide");
    //     $("#basic-info-modal").find("input").val("");
    //     $("#basic-info-modal").find("select").val("");
    //     $("#basic-info-modal").find("textarea").val("");
    //     $("#basic-info-modal").find("input").removeClass("is-invalid");
    //   },
    // });
  });
});
