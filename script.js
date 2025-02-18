// sortby button
let sortby_btn =  document.getElementById('sortby_btn');
let sortby_opt = document.getElementsByClassName('sortby_opt')[0];

sortby_btn.addEventListener("click", () =>{
    sortby_opt.classList.toggle('sortby_opt_active');
});



// Fetching Json File and targeting the sortby options
let newest = document.getElementById('newest');
let all_shoes = document.getElementById('all_shoes');
let low = document.getElementById('low');
let high = document.getElementById('high');

let url = "json.json";
let main_shoes_bx = document.getElementsByClassName('main_shoes_bx')[0];

fetch(url).then((Response => Response.json())).then((data)=>{
    const all_shoes_array = [...data]; //this help to get the array in the json and also can fetch or get other arrays by using comma ... its an eg. of the process

    const low_array =[...data];
    const high_array =[...data];
    const newest_array = data.splice(0,8);

    //getting all the cards ;
    data.forEach((el,i) => {
        const{Img,Name,Category,MRP,Price,Tag,Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `<img src="${Img}" alt="${Name}">
                    <h5 class="title" title = "${Name}">${Name}</h5>
                    <p>${Category} shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>Rs ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

main_shoes_bx.appendChild(card)
    });


    //targetting newest option in sortby
    newest.addEventListener("click", () =>{
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = `<h5>Sort By: Newest</h5>
                            <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');

        newest_array.forEach((el,i) => {
            const{Img,Name,Category,MRP,Price,Tag,Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
                        <h5 class="title" title = "${Name}">${Name}</h5>
                        <p>${Category} shoes</p>
                        <div class="price">
                            <h5>Rs ${Price}</h5>
                            <h5>MRP: <del>Rs ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>`;
    
    main_shoes_bx.appendChild(card)
        });
    });


});