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

// API call
fetch(url).then((Response => Response.json())).then((data)=>{
    const all_shoes_array = [...data]; //this help to get the array in the json and also can fetch or get other arrays by using comma ... its an eg. of the process

    const low_array =[...data];
    const high_array =[...data];
    const newest_array = [...data].splice(0,8);

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

    //targetting all shoes option in sortby

    all_shoes.addEventListener("click", () =>{
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = `<h5>Sort By: All Shoes</h5>
                            <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');

        all_shoes_array.forEach((el,i) => {
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

    //targetting low option in sortby

    low.addEventListener("click", () =>{
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = `<h5>Sort By: Low</h5>
                            <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');

        low_array.sort(({Price : a}, {Price : b}) => a-b) //low to high price logic

        low_array.forEach((el,i) => {
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

    //targetting high option in sortby

    high.addEventListener("click", () =>{
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = `<h5>Sort By: High</h5>
                            <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');

        high_array.sort(({Price : a}, {Price : b}) => a-b); // high to low logic
        high_array.reverse();

        high_array.forEach((el,i) => {
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


    // filter system for boot 

    let boot_array = all_shoes_array.filter((el) => {  //filterng type - boots
        return el.Type === 'Boots';
    });
    let All_Main_filter_array = [];
    let boots = document.getElementById('boots');

    boots.addEventListener('click', () => {
        if (boots.title=== "boots_filter_on"){
            main_shoes_bx.innerHTML = '';
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off'); //help to change the uton on click
            boots.classList.toggle('bi-toggle2-on');
            boots.title = 'boots_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(boot_array); //merging the boot array into the all main array 

            All_Main_filter_array.forEach((el,i) => {
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
        }
        else {
            main_shoes_bx.innerHTML = '';
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off'); 
            boots.classList.toggle('bi-toggle2-on');
            boots.title = 'boots_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=> { //helping to prevent from copying the same boots multiple times on click
                return boot_array.indexOf(el) < 0 ;
            });

            All_Main_filter_array.forEach((el,i) => {
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
        }
    });


    //filter system for loafer 

    let loafer_array = all_shoes_array.filter((el) => {  //filterng type - boots
        return el.Type === 'Loafer';
    });
    let loafer = document.getElementById('loafer');

    loafer.addEventListener('click', () => {
        if (loafer.title=== "loafer_filter_on"){
            main_shoes_bx.innerHTML = '';
            loafer.classList.toggle('i_active');
            loafer.classList.toggle('bi-toggle2-off'); //help to change the uton on click
            loafer.classList.toggle('bi-toggle2-on');
            loafer.title = 'loafer_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(loafer_array); //merging the loafer array into the all main array 

            All_Main_filter_array.forEach((el,i) => {
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
        }
        else {
            main_shoes_bx.innerHTML = '';
            loafer.classList.toggle('i_active');
            loafer.classList.toggle('bi-toggle2-off'); 
            loafer.classList.toggle('bi-toggle2-on');
            loafer.title = 'loafer_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=> { //helping to prevent from copying the same loafer multiple times on click
                return loafer_array.indexOf(el) < 0 ;
            });

            All_Main_filter_array.forEach((el,i) => {
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
        }
    });


    //filter for air_force_1
    
    let air_force_1_array = all_shoes_array.filter((el) => {  //filterng type - boots
        return el.Type === 'Air Force';
    });
    let air_force_1 = document.getElementById('air_force_1');

    air_force_1.addEventListener('click', () => {
        if (air_force_1.title=== "air_force_1_filter_on"){
            main_shoes_bx.innerHTML = '';
            air_force_1.classList.toggle('i_active');
            air_force_1.classList.toggle('bi-toggle2-off'); //help to change the uton on click
            air_force_1.classList.toggle('bi-toggle2-on');
            air_force_1.title = 'air_force_1_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(air_force_1_array); //merging the loafer array into the all main array 

            All_Main_filter_array.forEach((el,i) => {
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
        }
        else {
            main_shoes_bx.innerHTML = '';
            air_force_1.classList.toggle('i_active');
            air_force_1.classList.toggle('bi-toggle2-off'); 
            air_force_1.classList.toggle('bi-toggle2-on');
            air_force_1.title = 'air_force_1_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=> { //helping to prevent from copying the same loafer multiple times on click
                return air_force_1_array.indexOf(el) < 0 ;
            });

            All_Main_filter_array.forEach((el,i) => {
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
        }
    });

    
    // filter for Air Max

    let air_max_array = all_shoes_array.filter((el) => {  //filterng type - boots
        return el.Type === 'Air Max';
    });
    let air_max = document.getElementById('air_max');

    air_max.addEventListener('click', () => {
        if (air_max.title=== "air_max_filter_on"){
            main_shoes_bx.innerHTML = '';
            air_max.classList.toggle('i_active');
            air_max.classList.toggle('bi-toggle2-off'); //help to change the uton on click
            air_max.classList.toggle('bi-toggle2-on');
            air_max.title = 'air_max_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(air_max_array); //merging the loafer array into the all main array 

            All_Main_filter_array.forEach((el,i) => {
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
        }
        else {
            main_shoes_bx.innerHTML = '';
            air_max.classList.toggle('i_active');
            air_max.classList.toggle('bi-toggle2-off'); 
            air_max.classList.toggle('bi-toggle2-on');
            air_max.title = 'air_max_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=> { //helping to prevent from copying the same loafer multiple times on click
                return air_max_array.indexOf(el) < 0 ;
            });

            All_Main_filter_array.forEach((el,i) => {
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
        }
    });

    //filter for zoom rival

    let zoom_max_array = all_shoes_array.filter((el) => {  //filterng type - boots
        return el.Type === 'Zoom Rival';
    });
    let zoom_max = document.getElementById('zoom_max');

    zoom_max.addEventListener('click', () => {
        if (zoom_max.title=== "zoom_max_filter_on"){
            main_shoes_bx.innerHTML = '';
            zoom_max.classList.toggle('i_active');
            zoom_max.classList.toggle('bi-toggle2-off'); //help to change the uton on click
            zoom_max.classList.toggle('bi-toggle2-on');
            zoom_max.title = 'zoom_max_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(zoom_max_array); //merging the loafer array into the all main array 

            All_Main_filter_array.forEach((el,i) => {
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
        }
        else {
            main_shoes_bx.innerHTML = '';
            zoom_max.classList.toggle('i_active');
            zoom_max.classList.toggle('bi-toggle2-off'); 
            zoom_max.classList.toggle('bi-toggle2-on');
            zoom_max.title = 'zoom_max_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=> { //helping to prevent from copying the same loafer multiple times on click
                return zoom_max_array.indexOf(el) < 0 ;
            });

            All_Main_filter_array.forEach((el,i) => {
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
        }
    });

    
    //filter for metacon 

    let metacon_array = all_shoes_array.filter((el) => {  //filterng type - boots
        return el.Type === 'Pegasus';
    });
    let metacon = document.getElementById('metacon');

    metacon.addEventListener('click', () => {
        if (metacon.title=== "metacon_filter_on"){
            main_shoes_bx.innerHTML = '';
            metacon.classList.toggle('i_active');
            metacon.classList.toggle('bi-toggle2-off'); //help to change the uton on click
            metacon.classList.toggle('bi-toggle2-on');
            metacon.title = 'metacon_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(metacon_array); //merging the loafer array into the all main array 

            All_Main_filter_array.forEach((el,i) => {
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
        }
        else {
            main_shoes_bx.innerHTML = '';
            metacon.classList.toggle('i_active');
            metacon.classList.toggle('bi-toggle2-off'); 
            metacon.classList.toggle('bi-toggle2-on');
            metacon.title = 'metacon_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=> { //helping to prevent from copying the same loafer multiple times on click
                return metacon_array.indexOf(el) < 0 ;
            });

            All_Main_filter_array.forEach((el,i) => {
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
        }
    });


    //filter for nike dunk 

    let nike_dunk_array = all_shoes_array.filter((el) => {  //filterng type - boots
        return el.Type === 'Nike Dunk';
    });
    let nike_dunk = document.getElementById('nike_dunk');

    nike_dunk.addEventListener('click', () => {
        if (nike_dunk.title=== "nike_dunk_filter_on"){
            main_shoes_bx.innerHTML = '';
            nike_dunk.classList.toggle('i_active');
            nike_dunk.classList.toggle('bi-toggle2-off'); //help to change the uton on click
            nike_dunk.classList.toggle('bi-toggle2-on');
            nike_dunk.title = 'nike_dunk_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(nike_dunk_array); //merging the loafer array into the all main array 

            All_Main_filter_array.forEach((el,i) => {
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
        }
        else {
            main_shoes_bx.innerHTML = '';
            nike_dunk.classList.toggle('i_active');
            nike_dunk.classList.toggle('bi-toggle2-off'); 
            nike_dunk.classList.toggle('bi-toggle2-on');
            nike_dunk.title = 'nike_dunk_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=> { //helping to prevent from copying the same loafer multiple times on click
                return nike_dunk_array.indexOf(el) < 0 ;
            });

            All_Main_filter_array.forEach((el,i) => {
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
        }
    });

    // filtering according to price 

let right_input = document.getElementById("right_input");
let left_input = document.getElementById("left_input");
let left_input_icon = document.getElementById("left_input_icon");
let right_input_icon = document.getElementById("right_input_icon");


//filtering using left price input

left_input.addEventListener("click", () => {
    let array_1000_50000 = all_shoes_array.filter((el) => {
        return el.Price <= 50000;
    });

    
    left_input_icon.style.left = left_input.value + "%";

    let price_box_value_left = (50000/100)*left_input.value;
    let array_1000_50000_left = array_1000_50000.filter((el) => {
        return el.Price >= price_box_value_left;
    });

    document.getElementById('left_input_price').innerText = price_box_value_left;

    main_shoes_bx.innerHTML = '';

    array_1000_50000_left.forEach((el,i) => {
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
})



// filtering by right price 

right_input.addEventListener("click", () => {
    let array_50001_100000 = all_shoes_array.filter((el) => {
        return el.Price >= 50000;
    });
    
    right_input_icon.style.left = right_input.value + "%";

    let price_box_value_right = (50000/100)*right_input.value;
    let array_50001_100000_right = array_50001_100000.filter((el) => {
        return el.Price <= (price_box_value_right+50000);
    });

    document.getElementById('right_input_price').innerText = price_box_value_right + 50000;

    main_shoes_bx.innerHTML = ''; 

    array_50001_100000_right.forEach((el,i) => {
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

})

    //filter by colours 

    const color = ['white','gray-white','yellow','yellow-black','orange','green','sky-blue','pink','red','blue','gray-black','brown','black'];

    Array.from(document.getElementsByClassName('color')).foreach((el,i) => {
        el.addEventListener('click', () => {
            const color_array = all_shoes_array.filter((el)=>{
                return el.ColorTag === color[i];
            });
            main_shoes_bx.innerHTML = '';

            color_array.forEach((el,i) => {
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

    document.getElementsByClassName('colors')[0].addEventListener('click', () => {
        main_shoes_bx.innerHTML = '';

        all_shoes_array.forEach((el,i) => {
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


    //filter by shoes size 

    const number = [4,7,9,6,5,8,10,11.5,9.5,16,17,18,11,8.5];
    let size = document.getElementsByClassName('size')[0];
    size.addEventListener('click', () =>{
        main_shoes_bx.innerHTML = '';
        
        let number_array = all_shoes_array.filter((el) => {
            return el.Size4 === number[0];
        })

        number_array.forEach((el,i) => {
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




