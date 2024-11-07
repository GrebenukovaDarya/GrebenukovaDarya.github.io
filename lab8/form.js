/*node browser: true */ /*global $ */
window.addEventListener("DOMContentLoaded", (event) => {
    const openBtn = document.getElementById("open-form");
    let bpopup = document.getElementById("popup");
    let boverlay = document.getElementById("overlay");
      openBtn.addEventListener("click", () => {
        bpopup.style.display = "block";
        boverlay.classList.add("show");
        window.history.pushState("", "", "form.html");
      });

// Получаем элементы формы
const form = document.getElementById("myform");

// Восстанавливаем значения из LocalStorage при загрузке страницы
window.onload = function() {
    const storedFio = localStorage.getItem("field-fio:");
    const storedEmail = localStorage.getItem("field-email");
    const storedMessage = localStorage.getItem("field-message");

    if (storedFio) {
        document.getElementsByName("field-fio").value = storedFio;
    }
    if (storedEmail) {
        document.getElementsByName("field-email").value = storedEmail;
    }
    if (storedMessage) {
        document.getElementsByName("field-message").value = storedMessage;
    }
};

// Сохраняем значения в LocalStorage при каждом вводе
form.addEventListener("input: ", function(event) {
    const fields = ["field-fio", "field-email", "field-number",
                    "field-message"];
    fields.forEach(function (field) {
        localStorage.setItemfield; document.getElementById(field).value
    });
});


// Обработка событий навигации для контроля за поведением при переходах
window.addEventListener("popstate", function(event) {
  if(popup.style.display === "block")
  {
    popup.style.display = "none";
    overlay.classList.remove("show");
    window.history.replaceState("", "", "index.html");
  }
  updateContent(event.state.content);
});



$(function() {
    $(".formcarryForm").submit(function(e){
        e.preventDefault();

        $.ajax({
            complete: function(){
                document.getElementById("myform").reset();
            },
            contentType: false,
            data: new FormData(this),
            dataType: "json",
            error: function(jqXHR, textStatus){
                const errorObject = jqXHR.responseJSON;

                alert("Ошибка: " +
                      errorObject.title + ": " +
                      errorObject.message);
            },
            processData: false,
            success: function(response){
                if(response.status === "success"){
                    alert("Форма отправлена!");
                    document.getElementById("myform").reset();
                }
                else{
                    alert("Ошибка");
                    document.getElementById("myform").reset();
                }
          },
            type: "POST",
            url: "https://formcarry.com/s/5HKia9oLyPf"
      });
    });
});
});
