let a = Number (prompt('Введите стоимость товара'));
let b = Number (prompt('Введите количество ваших денег'));

if(a == b){
    alert('покупка совершена');
}
else{
    if(a > b){
        let x = a - b;
         alert('для покупки не хватает' + x + 'р');
     }else{
         let y = b - a;
         alert('Покупка совершена. Ваша сдача' + y + 'р');
     }
}
