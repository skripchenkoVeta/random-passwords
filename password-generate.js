let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
let arr_symb = ['/','|','.',':','!',';', '@','_', '#', '$','{','}', '%', '?', '-', '+', '=', '~','^','*',','];

const compareRandom = ( ) => Math.random() - 0.5;

const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatePassword() {
    let arr = [];
    if (document.querySelector('#arr_num').checked) arr = arr.concat(arr_num);
    if (document.querySelector('#arr_en').checked) arr = arr.concat(arr_en);
    if (document.querySelector('#arr_EN').checked) arr = arr.concat(arr_EN);
    if (document.querySelector('#arr_ru').checked) arr = arr.concat(arr_ru);
    if (document.querySelector('#arr_RU').checked) arr = arr.concat(arr_RU);
    if (document.querySelector('#arr_symb').checked) arr = arr.concat(arr_symb);

    arr.sort(compareRandom);

    let password = '';
    let passLenght = document.querySelector('#passLenght').value;

    for (let i = 0; i < passLenght; i++) {
        password += arr[randomInteger(0, arr.length - 1)];
    }

    result.value = password;
}

document.querySelector('#pass_start').addEventListener('click', generatePassword);

$( document ).ready(function(){
    $( "#RUS" ).click(function(){ 
      $( "#eng" ).hide();
      $( "#rus" ).show();
    });
    $( "#ENG" ).click(function(){ 
        $( "#eng" ).show();
        $( "#rus" ).hide();
    });
    $( ".allShow" ).click(function(){ 
        $( "#eng" ).show();
        $( "#rus" ).show();
    });
  });
  function copyText() {
    let copyText = document.getElementById("result");
    copyText.select();
    document.execCommand("copy");
  }

