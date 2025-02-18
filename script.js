let sortby_btn =  document.getElementById('sortby_btn');
let sortby_opt = document.getElementsByClassName('sortby_opt')[0];

sortby_btn.addEventListener("click", () =>{
    sortby_opt.classList.toggle('sortby_opt_active');
});