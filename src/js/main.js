$(document).ready(function(){

  // Napojení knihovny wow.js
  new WOW().init();

  var button = $("#button");
  var modal = $("#modal");
  var close = $("#close");

  button.on("click", function(){
    modal.addClass("modal_active");
  });

  close.on("click", function(){
    modal.removeClass("modal_active");
  });


  // Validace formulářů
  $("#brief-form",).validate({
    rules: {
      username: "required",
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        number: true,
      }
    },
    messages: {
      username: "Uveďte Vaše jmnéno",
      email: "Uveďte Váš email",
      phone: "Uveďte Vaše telefonní číslo"
    }
  });

  $("#offer-form").validate({
    rules: {
      username: "required",
      phone: {
        required: true,
        number: true,
      }
    },
    messages: {
      username: "Uveďte Vaše jmnéno",
      phone: "Uveďte Vaše telefonní číslo"
    }
  });

  // Napojení knihovny slideru
  $(".slider").slick({
    slidesToShow: 3,
    prevArrow: $(".arrows__left"),
    nextArrow: $(".arrows__right"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },]
  });

    

});