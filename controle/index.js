
document.querySelector('#signup-form .actions ul li:last-child a').onclick = function(){
    let arrInput = document.querySelectorAll('input, select');
    console.log(arrInput);
    let thongTin = {};
    let htmlThongTin = '';

    for(let input of arrInput){
        let {value,id} = input;
        thongTin = {...thongTin,[id]:value};
    }
    console.log(thongTin);

    for(let key in thongTin){
        htmlThongTin += `
                <span>${key}:</span>
                <span>  ${thongTin[key]}</span>
                </br>  
        `;
    }
    document.querySelector('.donate-us').innerHTML = htmlThongTin;
}

