const openBtn = document.getElementById("open-form");

openBtn.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.classList.add("show");
  });


/*
window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button");
    b.addEventListener("click", open_form);
});

function open_form(event) {
    const bform = document.getElementById('bform');
    bform.style.display = 'block';
}


const formWrap = document.getElementById('bform');

function openForm() {
    formWrap.style.display='none';
    //formWrap.classList.add('open');
}

function closeForm() {
    formWrap.style.display='block';
    //formWrap.classList.add('close');
}
    */