var congelados = [];
var cong = document.getElementById('btncong');

var cafedamanha = [];
var cafe = document.getElementById('btncafe');

var higieneebeleza = [];
var  higi = document.getElementById('btnhigi');

var hortifrutis = [];
var hort = document.getElementById('btnhort');

var acougue = [];
var acou = document.getElementById('btnacou');

var frioselaticinios = [];
var frios = document.getElementById('btnfrios')

var limpeza = [];
var limp = document.getElementById('btnlimp');

var bazar = [];
var bazar = document.getElementById('btnbazar');

var festivos = [];
var fest= document.getElementById('btnfest');

var mercearia = [];
var merc= document.getElementById('btnmerc');

var bebidas = [];
var bebi = document.getElementById('btnbebi');

var petshop = [];
var pet = document.getElementById('btnpet');

var mamaeebebe = [];
var mamae = document.getElementById('btnmamae');



function comecar() {
    document.getElementById('comeco').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
}

function novoProduto() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('produtos').style.display = 'block';
    document.getElementById('categorias').style.display = 'block';
}

 const erro = `Por favor, preencha o campo com o nome do item.`;

 var prdt = document.getElementById('produto');

 function adicionarNaLista() {
    
    if (prdt.value === "") {
        alert(erro);
    } else if (cong.clicked == true) {
        cong.push(prdt.value);
    } else if (cafe.clicked == true) {
        cafe.push(prdt.value);
    } else if (higi.clicked == true) {
        higi.push(prdt.value);
    } else if (hort.clicked == true) {
        hort.push(prdt.value);
    } else if (acou.clicked == true) {
        acou.push(prdt.value);
    } else if (frios.clicked == true) {
        frios.push(prdt.value);
    }  else if (limp.clicked == true) {
        limp.push(prdt.value);
    } else if (bazar.clicked == true) {
        bazar.push(prdt.value);
    } else if (fest.clicked == true) {
        fest.push(prdt.value);
    } else if (merc.clicked == true) {
        merc.push(prdt.value);
    } else if (bebi.clicked == true) {
        bebi.push(prdt.value);
    } else if (pet.clicked == true) {
        pet.push(prdt.value);
    } else if (mamae.clicked == true) {
        mamae.push(prdt.value);
    } else {
        document.getElementById('inicio').style.display = 'block';
        document.getElementById('produtos').style.display = 'none';
        document.getElementById('categorias').style.display = 'none';
    }
    prdt.value = "";
 }

function encerrarLista() {
    
}