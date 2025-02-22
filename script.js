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





});