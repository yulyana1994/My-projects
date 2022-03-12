let a = ''; // первое число
let b = '';// второе число
let sign = '';// знак операции
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];

const out = document.querySelector('.calc-screen p');

function clearAll () {
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
    out.textContent = 0;
    console.log(a,b,sign);
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) =>{
    if(!event.target.classList.contains('btn'))return;
    if(event.target.classList.contains('ac'))return;
    out.textContent = '';
    const key = event.target.textContent;
    if (digit.includes(key)){
        if (b === '' && sign === ''){
        a = a + key
        out.textContent = a;
        console.log(a,b,sign);
        }
        else if (!a=='' && !b== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else{
            b = b+key;
            out.textContent = b;
            console.log(a,b,sign); 
        }
        return;
    }

    if (action.includes(key)){
        sign = key
        console.log(a,b,sign);
        out.textContent = sign;
        return;
    }

    if (key === '='){
        if (b === '') b = a;
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0' ){
                    out.textContent = 'Ошибка';
                    let a = '';
                    let b = '';
                    let sign = '';
                    return
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a,b,sign);
    }
}
