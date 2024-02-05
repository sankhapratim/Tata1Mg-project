let strip=document.querySelector(".product-container");

let pop=[
    {name:"Best Offers",image:"https://onemg.gumlet.io/859adc35-4c39-4094-a74d-281ffff9a3e6.png?format=auto"},
    {name:"Vitamins & Supplements",image:"https://onemg.gumlet.io/67be6470-4f74-4a2e-a37a-ececb775afeb.png?format=auto"},
    {name:"Nutritional Drinks",image:"https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706010756_Women+care.jpg?format=auto"},
    {name:"Skin Care",image:"https://onemg.gumlet.io/624f6cd2-f857-4f8c-a689-75c849516ea8.png?format=auto"},
    {name:"Hair Care",image:"https://onemg.gumlet.io/4e4b7cd8-0885-42c2-8915-65b7355fc1d8.png?format=auto"},
    {name:"Sexual Wellness",image:"https://onemg.gumlet.io/263346eb-82a4-4cb2-9611-63fa046beaf2.png?format=auto"},
    {name:"Pain Relief",image:"https://onemg.gumlet.io/33d8bac6-26c1-4828-8b39-4f6183430833.png?format=auto"},
    {name:"Ayurveda",image:"https://onemg.gumlet.io/59e2ffed-ab85-496d-9423-d97cd0305b52.png?format=auto"},
    {name:"Homeopathy",image:"https://onemg.gumlet.io/f1683989-9e0d-4a8b-9c6c-55ef674cfc0f.png?format=auto"},

]

displaySlider(pop,strip);
function displaySlider(data,n){
data.forEach(function(el){
    let inner=document.createElement("div");
    let im=document.createElement("img");
    let tag=document.createElement("p");
    inner.setAttribute("class","product-card");
    im.src=el.image;
    tag.innerText=el.name;
    inner.append(im,tag);
    n.append(inner); 
})
}

// lab test card
let fullbody=document.querySelector("#fbc");

let test=[
    {name:"Comprehensive Full Body Checkup",
    price:2000,
    strikeoff:4198,},
    {name:"Fever Pakage Extensive",
    price:999,
    strikeoff:1689,},
    {name:"Comprehensive Silver Full Body Checkup",
    price:1699,
    strikeoff:3098,},
    {name:"Good Health Gold Package",
    price:949,
    strikeoff:1898,},
    {name:"Comprehensive Platinum Full Body Checkup",
    price:3499,
    strikeoff:4998,},
    {name:"Monsoon Health Screening",
    price:1299,
    strikeoff:2598,},
    {name:"Women Wellness Premium Package",
    price:1799,
    strikeoff:2598,},
    {name:"Women Wellness Advanced Package",
    price:1499,
    strikeoff:2998,}
]

test.forEach(function(el){
let outn=document.createElement("div");
    outn.setAttribute("class","name")
    let names=document.createElement("h5");
    names.innerText=el.name;
    let imgs=document.createElement("img");
    imgs.src="https://onemg.gumlet.io/safe_bjisiz.svg";
    outn.append(names,imgs);

let test=document.createElement("p");
    test.innerText="Included 40 Tests";

let noname=document.createElement("div");
noname.setAttribute("class","imstar")
    
let tata=document.createElement("img");
tata.setAttribute("class","tata")
tata.src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto";
    
let star=document.createElement("div");
star.setAttribute("class","star");
     let rat=document.createElement("p");
     rat.innerText=4.9;
     let font=document.createElement("i");
     font.setAttribute("class","fa-solid fa-star");
     star.append(rat,font);
noname.append(tata,star);

let pri=document.createElement("div");
pri.setAttribute("class","price"); 
     let sp=document.createElement("p");
     sp.innerText="Rs "+el.price;
     let mp=document.createElement("p");
     mp.innerText="Rs "+el.strikeoff;
     pri.append(sp,mp);

let disc=document.createElement("div");
disc.setAttribute("class","disc");
    let per=document.createElement("p");
    let fp=+(el.price);
    let ip=+(el.strikeoff);
    let discount=((ip-fp)/ip)*100;
    discount=discount.toFixed(0);
    per.innerText=discount+"%Off";
    disc.append(per);

let out=document.createElement("div");
out.setAttribute("class","box");
out.append(outn,test,noname,pri,disc);

fullbody.append(out);
    
})

let febrand=[
    {name:"Tata 1mg",image:"https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706589492_Tata+1mg.png?format=auto"},
    {name:"Mamaearth",image:"https://onemg.gumlet.io/diagnostics%2F2024-02%2F1707110020_Mamaearth.png?format=auto"},
    {name:"HealthKart",image:"https://onemg.gumlet.io/diagnostics%2F2024-02%2F1707110042_Healthkart.png?format=auto"},
    {name:"Novology",image:"https://onemg.gumlet.io/diagnostics%2F2024-02%2F1707110055_Novology.png?format=auto"},
    {name:"Zinga Vita",image:"https://onemg.gumlet.io/diagnostics%2F2024-02%2F1707110064_Zingavita.jpg?format=auto"},
    {name:"Nivea",image:"https://onemg.gumlet.io/diagnostics%2F2024-02%2F1706765998_Nivea.png?format=auto"},
    {name:"Optimum Nutrition",image:"https://onemg.gumlet.io/diagnostics%2F2024-02%2F1706851620_Optimum+Nutrition.png?format=auto"},
    {name:"Cetaphil",image:"https://onemg.gumlet.io/diagnostics%2F2024-02%2F1706851630_Cetaphil.png?format=auto"},
    {name:"Tejasya",image:"https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706589484_tejasya.png?format=auto"}
];
let bc=document.querySelector(".bc");
displaySlider(febrand,bc);

// Pathology Tests
let pt=[
    {name:"Complete Blood Count",
     test:"CBC",
     lab:"Contains 21 tests",
     MRP:299,
     strikeoff:400},

     {name:"Coronavirus Covid-19 Test",
     test:"Also known as RT-PCR technique, SARS",
     lab:"Provided By 4 Labs",
     MRP:400,
    },

     {name:"Thyroid profile Total(T3,T4)",
     test:"Thyroid Function Test, TFT",
     lab:"Provided By 4 Labs",
     MRP:220,
     strikeoff:600},

     {name:"Lipid Profile, non Fasting",
     test:"Contains 8 tests",
     lab:"Provided By 4 Labs",
     MRP:320,
     strikeoff:600},

     {name:"Frequent Pain Check Profile",
     test:"Contains 4 tests",
     lab:"Provided By 4 Labs",
     MRP:299,
     strikeoff:600},

     {name:"Lipid Profile",
     test:"Contains 8 tests",
     lab:"Provided By 3 Labs",
     MRP:1220,
     strikeoff:2158},

     {name:"Glycosylated Hemoglobin",
     test:"Glycated Haemoglobin",
     lab:"Provided By 4 Labs",
     MRP:399,
     strikeoff:659},

     {name:"LFT(Liver Fuction Test)",
     test:"Contains 11 tests",
     lab:"Provided By 4 Labs",
     MRP:399,
     strikeoff:675},

     {name:"Kidney with Electrolytes(Kidn...",
     test:"Contains 6 tests",
     lab:"Provided By 3 Labs",
     MRP:220,
     strikeoff:680},

     {name:"Vitamin B12",
     test:"Also known as Cyanocobalamin",
     lab:"Provided By 4 Labs",
     MRP:475,
     strikeoff:1749}
];
let ticket=document.querySelector(".pt");
pt.forEach(function(el){
    let outn=document.createElement("div");
    outn.setAttribute("class","safename")
    let names=document.createElement("h5");
    names.innerText=el.name;
    let imgs=document.createElement("img");
    imgs.src="https://onemg.gumlet.io/safe_bjisiz.svg";
    outn.append(names,imgs);

    let type=document.createElement("p");
    type.innerText=el.test;

    let pro=document.createElement("p");
    pro.innerText=el.lab;

    let pri=document.createElement("div");
pri.setAttribute("class","cost"); 
     let sp=document.createElement("p");
     sp.innerText="Rs "+el.MRP;
     if(el.strikeoff!=undefined){
     let mp=document.createElement("p");
     mp.innerText="Rs "+el.strikeoff;
    
let disc=document.createElement("div");
disc.setAttribute("class","disc");
    let per=document.createElement("p");
    let fp=+(el.MRP);
    let ip=+(el.strikeoff);
    let discount=((ip-fp)/ip)*100;
    discount=discount.toFixed(0);
    per.innerText=discount+"%Off";
    pri.append(sp,mp,per);}

    else{
        pri.append(sp);
    }

let inner=document.createElement("div");
    inner.append(outn,type,pro,pri);
    ticket.append(inner);
});

let ts=[
   {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/540dcbff114440cfacda6052b30fb24f.jpg",
    name:"Volini Pain Relief Gel for Sprain,Muscle",
    content:"tube of 100 gm gel",
    MRP:340,
    sp:272},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tri1qxerh611gi5u6gdv.jpg",
    name:"Scalpe+ Expert Anti Dandruff Shampoo",
    content:"bottle of 75 ml Shampoo",
    MRP:306,
    sp:276},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/4aa01fca08e1427d9bb6cb62d11a864e.jpg",
    name:"Stayfree Cottony Soft Cover Secure",
    content:"packet of 40 pads",
    MRP:275,
    sp:234},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/wfn4x8vobmgqbxdjo9rx.jpg",
    name:"Organic India Moringa Powder",
    content:"Tin of 100gm Powder",
    MRP:250,
    sp:218},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/bac8a5daa98047deb893fe540f0d10fa.jpg",
    name:"Protinex High Quality protein | Nutration",
    content:"tin of 400gm Powder",
    MRP:675,
    sp:587},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/f5bd636c4c8d44e5b6d6e4939b4a38cd.jpg",
    name:"CeraVe Moisturising Cream for Dry to Sensitive Skin",
    content:"tube of 50 gm Cream",
    MRP:475,
    sp:399},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/1105d05f945642a8a9f4d5daa326a1d5.jpg",
    name:"Dabur Honitus Hot Sip Ayurvedic",
    content:"packet of 30 Sachets",
    MRP:680,
    sp:634},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/273918a6f87b43e4ada805065f8df4d9.jpg",
    name:"Little's Comfy Cottonsoft Baby...",
    content:"packet of 42 diapers",
    MRP:449,
    sp:337},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/qpue3feihueazzsmprwx.png",
    name:"Nutrigo By Complan Protein | 2 to 6 Years",
    content:"jar of 400gm Powder",
    MRP:750,
    sp:708}
];
let pro=document.querySelector(".ts");
displayProducts(ts,pro)
function displayProducts(data,out){
    data.forEach(function(el){
    let card=document.createElement("div");
        card.setAttribute("class","card");

    let pic=document.createElement("img");
        pic.setAttribute("class","picture");
        pic.src=el.image;

    let name=document.createElement("h5");
        name.innerText=el.name;

    let cont=document.createElement("p");
        cont.innerText=el.content;

    let box1=document.createElement("div");
        let MRP=document.createElement("p");
        MRP.innerText="MRP Rs "+el.MRP;
        
        let mp=+(el.MRP);
        let sp=+(el.sp);
        let discount=((mp-sp)/mp)*100;
        discount=discount.toFixed(0)+"%Off";
        let dis=document.createElement("p");
        dis.innerText=discount;
        box1.append(MRP,dis);
    
    let box2=document.createElement("div");
        let sell=document.createElement("h5");
        sell.innerText="Rs "+el.sp;
        let cart=document.createElement("button");
        cart.innerText="Add to Cart";
        box2.append(sell,cart);    
    
    card.append(pic,name,cont,box1,box2);

    out.append(card);
    })
}


// Shop by Health
let sbh=[
    {name:"Diabetes Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e3katuw3w1qdfiv0cbjn.png"},
    {name:"Cardiac Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bal76mxxccyhrti2erkn.png"},
    {name:"Stomach Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/l2zrxcsfyguccggnkp4m.png"},
    {name:"Liver Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/klrkvhzloqbyt6z8cvgv.png"},
    {name:"Bone, Joint & Muscle Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zd1jcixlqcmxlxlmgitc.png"},
    {name:"Kidney Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c0o3w8wdjnzesk2pshcr.png"},  
    {name:"Pain Relief",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/vsyneobahnsdqzllvzuv.png"},  
    {name:"Respiratory Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/wgixpbxnlrd79lzhpsi3.png"},
    {name:"Eye Care",image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/laztovaqkws3bo1ywff0.png"}
]
let hc=document.querySelector(".hc");
displaySlider(sbh,hc);

// Popular Combo Deals

let deals=[
    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qb28shpydallvrjqumup.jpg",
    name:"Pain Relief Combo of Healththotokri",
    content:"combo pack of 2 Packs",
    MRP:820,
    sp:459},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/se3cxo2mvzgqmtogtmof.jpg",
    name:"Dettol Disinfection Combo",
    content:"combo pack of 2 bottle",
    MRP:352,
    sp:305},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qdkxnbhl24dgn02m7fc4.jpg",
    name:"Anti-oxidants Combo of Organic",
    content:"combo pack of 2 Packs",
    MRP:669,
    sp:581},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/uca5jm0uqfqpjoyydzh0.jpg",
    name:"TATA 1mg Diabetes Care Combo Pack",
    content:"combo pack of 4 bottle",
    MRP:1580,
    sp:681},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/kig1l1egf5xcijweblix.jpg",
    name:"Durex Pleasure Pack",
    content:"combo pack of 4 Packs",
    MRP:989,
    sp:785},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/pfqnfyojsqwtn6hrce32.jpg",
    name:"Combo Pack of Sri Sri Tattva Tulasi arka",
    content:"combo pack of 2 bottles",
    MRP:435,
    sp:212},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tamf9xnrq7ncapgc04t6.jpg",
    name:"Tata 1mg Women Care Combo Pack",
    content:"combo pack of 4 bottles",
    MRP:1695,
    sp:839},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg",
    name:"Immunity Care Combo of 1mg Panch Tulsi",
    content:"combo pack of 2 Packs",
    MRP:335,
    sp:278},

    {image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/f9fbe0c6e4ae496c8876affeb25590a0.jpg",
    name:"Combo Pack of HealthKart",
    content:"box of 2 Combo Packs",
    MRP:1349,
    sp:674}
]

let pc=document.querySelector(".pc");
displayProducts(deals,pc);

// Signup popup
let signup=document.querySelector(".signup");
function signpop(){
    signup.classList.add("si-popup");
    loginp.classList.remove("pop");
}

// Signup Submit
let form=document.querySelector("#signup");
form.addEventListener("submit",sisub);

let signdata=JSON.parse(localStorage.getItem("signupdata")) || [];
function sisub(event){
     event.preventDefault();
     let em=form.mail.value;
     let pas=form.pass.value;
     let obj={
        email:em,
        pass:pas,
     }
     if(form.first.value=="" || form.last.value=="" || form.mail.value=="" || form.pass.value==""){
        alert("Please fill all the details");
        console.log("Please fill all the details");
     }
     else{
    signdata.push(obj);
    localStorage.setItem("signupdata",JSON.stringify(signdata));
    form.first.value="" 
    form.last.value=""
    form.mail.value="" 
    form.pass.value=""
    signup.classList.remove("si-popup")}    
}

// Login popup
let loginp=document.querySelector(".login");
function logpop(){
    loginp.classList.add("pop");
    signup.classList.remove("si-popup");
}

// login data
let logindata=document.querySelector("#lform");
logindata.addEventListener("submit",login)

let Logsuccess=document.querySelector(".LS");

function login(event){
    event.preventDefault();
    let flag=false;
    signdata.forEach(function(el){
        if(logindata.lmail.value==el.email && logindata.lpass.value==el.pass){
            Logsuccess.classList.add("pop");
            flag=true;
            loginp.classList.remove("pop");
            logindata.lmail.value="";
            logindata.lpass.value="";
        }
    })
    if(!flag){
        alert("Wrong Email Id or Password");
    }
}

function closeLS(){
    Logsuccess.classList.remove("pop");
}


function closeall(){
    loginp.classList.remove("pop");
    signup.classList.remove("si-popup");
    console.log("a");
    
}

function opencart(){
    window.open("cart.html");
}