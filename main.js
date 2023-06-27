var congelados = [];
var cong = document.getElementById('btncong');
var congHTML = document.getElementById('licong');

var cafedamanha = [];
var cafe = document.getElementById('btncafe');
var cafeHTML = document.getElementById('licafe');

var higieneebeleza = [];
var higi = document.getElementById('btnhigi');
var higiHTML = document.getElementById('lihigi');

var hortifrutis = [];
var hort = document.getElementById('btnhort');
var hortHTML = document.getElementById('lihort');

var acougue = [];
var acou = document.getElementById('btnacou');
var acouHTML = document.getElementById('liacou');

var frioselaticinios = [];
var frios = document.getElementById('btnfrios')
var frioHTML = document.getElementById('lifrio');

var limpeza = [];
var limp = document.getElementById('btnlimp');
var limpHTML = document.getElementById('lilimp');

var bazar = [];
var baza = document.getElementById('btnbazar');
var bazarHTML = document.getElementById('libazar');

var festivos = [];
var fest= document.getElementById('btnfest');
var festHTML = document.getElementById('lifest');

var mercearia = [];
var merc = document.getElementById('btnmerc');
var mercHTML = document.getElementById('limerc');

var bebidas = [];
var bebi = document.getElementById('btnbebi');
var bebiHTML = document.getElementById('libebi');

var petshop = [];
var pet = document.getElementById('btnpet');
var petHTML = document.getElementById('lipet');

var mamaeebebe = [];
var mamae = document.getElementById('btnmamae');
var mamaeHTML = document.getElementById('limamae');

const erro = `Por favor, preencha o campo com o nome do item.`;

var prdt = document.getElementById('produto');

function comecar() {
    document.getElementById('comeco').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
}

function novoProduto() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('produtos').style.display = 'block';
    document.getElementById('categorias').style.display = 'block';
}

function perguntarNovamente() {
        document.getElementById('inicio').style.display = 'block';
        document.getElementById('produtos').style.display = 'none';
        document.getElementById('categorias').style.display = 'none';
}

function addCong() {

    if (cong.onclick) {
        congelados.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    } 
        prdt.value = "";
        perguntarNovamente();
}

function addCafe() {
    if (cafe.onclick) {
        cafedamanha.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
     }   
        prdt.value = "";
        perguntarNovamente();
}

function addHigi() {
    if (higi.onclick) {
        higieneebeleza.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }    
        prdt.value = "";
        perguntarNovamente();
}     

function addHort() {
    if (hort.onclick) {
        hortifrutis.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }    
    }
        prdt.value = "";
        perguntarNovamente();
}

function addAcou() {
    if (acou.onclick)  {
        acougue.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }    
        prdt.value = "";
        perguntarNovamente();
}

function addFrios() {
    if (frios.onclick) {
        frioselaticinios.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }    
        prdt.value = "";
        perguntarNovamente();
}

function addLimp() {
    if (limp.onclick) {
        limpeza.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }    
        prdt.value = "";
        perguntarNovamente();
}

function addBazar() {
    if (baza.onclick) {
        bazar.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}

function addFest() {
    if (fest.onclick) {
        festivos.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}

function addMerc() {
    if (merc.onclick) {
        mercearia.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}

function addBebi() {
    if (bebi.onclick) {
        bebidas.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}

function addPet() {
    if (pet.onclick) {
        petshop.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}
    
function addMamae() {
    if (mamae.onclick) {
        mamaeebebe.push(prdt.value);
         if (prdt.value == "") {
            alert(erro);
         }
    }
        prdt.value = "";
        perguntarNovamente();
}



// switch (categorias) {
//     case cong.onclick:
//         congelados.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case cafe.onclick:
//         cafedamanha.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case higi.onclick:
//         higieneebeleza.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case hort.onclick:
//         hortifrutis.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case acou.onclick:
//         acougue.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case frios.onclick:
//         frioselaticinios.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case limp.onclick:
//         limpeza.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case bazar.onclick:
//         bazar.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case fest.onclick:
//         festivos.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case merc.onclick:
//         mercearia.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case bebi.onclick:
//         bebidas.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case pet.onclick:
//         petshop.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;

//     case mamae.onclick:
//         mamaeebebe.push(prdt.value);
//         prdt.value = "";
//         perguntarNovamente();
//     break;
        
//     default:
//     break;
// }

 function encerrarLista() {
     document.getElementById('inicio').style.display = 'none';
     document.getElementById('lista').style.display = 'block';
    congHTML.innerHTML = congelados;
    cafeHTML.innerHTML = cafedamanha;
    higiHTML.innerHTML = higieneebeleza;
    hortHTML.innerHTML = hortifrutis;
    acouHTML.innerHTML = acougue;
    frioHTML.innerHTML = frioselaticinios;
    limpHTML.innerHTML = limpeza;
    bazarHTML.innerHTML = bazar;
    festHTML.innerHTML = festivos;
    mercHTML.innerHTML = mercearia;
    bebiHTML.innerHTML = bebidas;
    petHTML.innerHTML = petshop;
    mamaeHTML.innerHTML = mamaeebebe;

}

// let lista = document.getElementById('mensagem');

// let mensagem = `

// <div class="apresentacao__conteudo__divs" id="lista">
//     <h1 class="apresentacao__titulo">Sua Lista</h1>
//     <p><span>Congelados: </span>${congelados}</p>
//     <p><span>Café da Manhã: </span>${cafedamanha}</p>
//     <p><span>Higiene e Beleza: </span>${higieneebeleza}</p>
//     <p><span>Hortifrutis: </span>${hortifrutis}</p>
//     <p><span>Açougue: </span>${acougue}</p>
//     <p><span>Frios e Laticínios: </span>${frioselaticinios}</p>
//     <p><span>Limpeza: </span>${limpeza}</p>
//     <p><span>Bazar: </span>${bazar}</p>
//     <p><span>Festivos: </span>${festivos}</p>
//     <p><span>Mercearia: </span>${mercearia}</p>
//     <p><span>Bebidas: </span>${bebidas}</p>
//     <p><span>PetShop: </span>${petshop}</p>
//     <p><span>Mamãe e Bebê: </span>${mamaeebebe}</p>
// </div>

// `
// lista.innerHTML =  mensagem

// let container = document.getElementById('mensagem')

// let mensagem = `
//     <h1>Lista de compras</p>
//     <p>Frutas: ${lista['frutas']}</p>
//     <p>Laticinios: ${lista['laticinios']}</p>
//     <p>Congelados: ${lista['congelados']}</p>
//     <p>Doces: ${lista['doces']}</p>
// `
// container.innerHTML = mensagem
