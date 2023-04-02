const paragraph = document.querySelector('p');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',() =>{
    const number = input.value;
    input.value = '';
    input.focus();
    paragraph.textContent = 'Result: ';
    for (let i = 1; i <= number; i++){
        let sqRootInteger = Math.sqrt(i);
        if (sqRootInteger !== Math.floor(sqRootInteger)){
            continue;
        }
        paragraph.textContent +=`${i} `;
    }
});