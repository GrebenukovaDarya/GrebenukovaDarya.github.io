window.addEventListener("DOMContentLoaded", (event) => {
    const openBtn = document.getElementById("open-form");
      openBtn.addEventListener("click", () => {
        popup.style.display = "block";
        overlay.classList.add("show");
        window.history.pushState('', '', 'index1.html');
      });

// Получаем элементы формы
const form = document.getElementById('myform');

// Восстанавливаем значения из LocalStorage при загрузке страницы
window.onload = function() {
    const storedFio = localStorage.getItem('field-fio');
    const storedEmail = localStorage.getItem('field-email');
    const storedMessage = localStorage.getItem('field-message');

    if (storedFio) {
        document.getElementsByName('field-fio').value = storedFio;
    }
    if (storedEmail) {
        document.getElementsByName('field-email').value = storedEmail;
    }
    if (storedMessage) {
        document.getElementsByName('field-message').value = storedMessage;
    }
};

// Сохраняем значения в LocalStorage при каждом вводе
form.addEventListener('input', function(event) {
    localStorage.setItem(event.target.name, event.target.value);
});

/*
// Обработка событий навигации для контроля за поведением при переходах
window.addEventListener('popstate', function(event) {
  if(popup.style.display=="block")
  {
    popup.style.display = "none";
    overlay.classList.remove("show");
    window.history.replaceState('', '', 'index.html');
  }
  updateContent(event.state.content);
});

*/

$(function() {
    $(".formcarryForm").submit(function(e){
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "https://formcarry.com/s/5HKia9oLyPf",
            data: new FormData(this),
            dataType: "json",
            processData: false,
            contentType: false,
            success: function(response){
                if(response.status == "success"){
                    alert("Форма отправлена!");
                    document.getElementById("myform").reset();
                }
                else{
                    alert("Ошибка");
                    document.getElementById("myform").reset();
                }
          },
            error: function(jqXHR, textStatus){
                const errorObject = jqXHR.responseJSON
  
                alert("Ошибка: "+ errorObject.title + ": " + errorObject.message);
            },
          
            complete: function(){
                document.getElementById("myform").reset();
          }
      });
    });
});
});
