let total = 150,
    totalCorp = 225,
    totalShop = 310,
    tabsLand = document.querySelector("#tabs_land"),
    tabsCorp = document.querySelector("#tabs_corp"),
    tabsShop = document.querySelector("#tabs_shop"),
    // >>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<
    div = document.getElementsByClassName("add_service"),
    pageBlock = document.querySelector("#page_block"),
    thumbs = document.getElementsByClassName("thumbs"),
    // все иконки пальца вверх
    iconThumb = document.querySelectorAll(".fa-thumbs-up"),
    // все инпуты для очистки при переключении
    inputForClear = document.querySelectorAll("input"),
    // Все чекбоксы для подсчета
    inputAll = document.querySelectorAll("input[type='checkbox']:not(.no)"),
    // Все инпуты внизу number
    inputAllNumber = document.querySelectorAll("input[type='number']"),
    // Палец вверх
    thumbUp = document.querySelectorAll(".thumbs"),
    // Общая сумма
    totalValue = document.querySelector("#total-value"),
    // Иконка выбора всех чекбоксов
    inputChange = document.querySelector(".tasks"),
    inputChange2 = document.querySelector(".tasks1"),
    inputChange3 = document.querySelector(".tasks2"),
    // Все чекбосы первого блока
    checkFirstBlock = document.querySelectorAll(".firlst_block"),
    // Все чекбосы втоорого блока
    checkFirstBlock2 = document.querySelectorAll(".second_block"),
        // Все чекбосы третьего блока
    checkFirstBlock3 = document.querySelectorAll(".third_block");
    console.log(checkFirstBlock)

// >>>>>>>>>>> Delete class !page_land <<<<<<<<<<<

    for(let i = 0; i < div.length; i++) {
        if (div[i].classList.contains("page_land")) {
            div[i].style.display = "block";
        } else  {
            div[i].style.display = "none"
        }
    }
// >>>>>>>>>>>>>>>>>>> Add action on click TAB's <<<<<<<<<<<<<<<<<<<<
const landDefaultPrice = 150,
    corpDefaultPrice = 225,
    shopDefaultShop = 310;


let eraseThumbUp = () => iconThumb.forEach((elem) => elem.style.display = "none");


window.addEventListener("DOMContentLoaded", () => {
    tabsLand.addEventListener("click", () => {
        tabsLand.classList.add("active");
        tabsCorp.classList.remove("active");
        tabsShop.classList.remove("active");
        textTest = document.querySelector("#text-test")

 // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        eraseThumbUp();

        for(let i = 0; i < div.length; i++) {
            if (div[i].classList.contains("page_land")) {
                div[i].style.display = "block";
            } else  {
                div[i].style.display = "none";
            }
        }

        for(let i = 0; i < inputForClear.length; i++){
            inputForClear[i].value = "";

            if(inputForClear[i].checked) {
                inputForClear[i].checked = false;
            }
        }
        total = landDefaultPrice
        totalValue.value = total;

    });

    tabsCorp.addEventListener("click", () => {
        tabsCorp.classList.add("active");
        tabsLand.classList.remove("active");
        tabsShop.classList.remove("active");

        eraseThumbUp();

        for(let i = 0; i < div.length; i++) {
            if (div[i].classList.contains("page_corp")) {
                div[i].style.display = "block";
            } else  {
                div[i].style.display = "none";
            }
        }

        for(let i = 0; i < inputForClear.length; i++){
            inputForClear[i].value = "";

            if(inputForClear[i].checked) {
                inputForClear[i].checked = false;
            }
        }
        total = corpDefaultPrice
        totalValue.value = total;
    });

    tabsShop.addEventListener("click", () => {
        tabsShop.classList.add("active");
        tabsLand.classList.remove("active");
        tabsCorp.classList.remove("active");

        eraseThumbUp();

        for(let i = 0; i < div.length; i++) {
            if (div[i].classList.contains("page_shop")) {
                div[i].style.display = "block";
            } else  {
                div[i].style.display = "none";
            }
        }

        for(let i = 0; i < inputForClear.length; i++){
            inputForClear[i].value = "";

            if(inputForClear[i].checked) {
                inputForClear[i].checked = false;
            }
        }

        total = shopDefaultShop
        totalValue.value = total;
    });
// >>>>>>>>>>>>> Yellow Sign COOL MAN <<<<<<<<<<<<<<<<<<<<<<

let thumbIcon = document.querySelectorAll(".fa-thumbs-up");

thumbUp.forEach((key, i) => {
    key.addEventListener("change", () => key.value.length >= 2 ? thumbIcon[i].style.display = "inline-block" : thumbIcon[i].style.display = "none");
    })
});

// >>>>>>>>>>>>>>>>>>>> Добавление и отнимание 

for(let i = 0; i < inputAll.length; i++) {

    inputAll[i].addEventListener("change", () => {

     if(inputAll[i].checked) {

        total += +(inputAll[i].dataset.price);
        totalValue.value = total;
        
        } else {

            total -= +(inputAll[i].dataset.price);
            totalValue.value = total;
        }
    })
};

// >>>>>>>>>>>>>>>>>>>   Выделение всех чекбоксов

inputChange.addEventListener("change", () => {

    for(let i = 0; i < checkFirstBlock.length; i++) {
        if (inputChange.checked) {
                checkFirstBlock[i].checked = "true"
                total += +(checkFirstBlock[i].dataset.price);
                totalValue.value = total;
            } else {
                checkFirstBlock[i].checked = ""
                total -= checkFirstBlock[i].dataset.price;
                totalValue.value = total;
            }
    }
})

inputChange2.addEventListener("change", () => {
    for(let i = 0; i < checkFirstBlock2.length; i++) {
        if (inputChange2.checked) {
            checkFirstBlock2[i].checked = "true"
                total += +(checkFirstBlock2[i].dataset.price);
                totalValue.value = total;
            } else {
                checkFirstBlock2[i].checked = ""
                total -= checkFirstBlock2[i].dataset.price;
                totalValue.value = total;
            }
    }
})

inputChange3.addEventListener("change", () => {
    for(let i = 0; i < checkFirstBlock3.length; i++) {
        if (inputChange3.checked) {
            checkFirstBlock3[i].checked = "true"
                total += +(checkFirstBlock3[i].dataset.price);
                totalValue.value = total;
            } else {
                checkFirstBlock3[i].checked = ""
                total -= checkFirstBlock3[i].dataset.price;
                totalValue.value = total;
            }
    }
})



//  >>>>>>>>>>>>>>>>>>>>>> Добавление в и отнимание в inut number

let valuess = Array.from(inputAllNumber).map((item) => {
    item.addEventListener('input', () => {

        let testSum = total + getTotal()
    
             if(total < testSum) {
            totalValue.value = testSum;
            } else {
             totalValue.value = testSum
            }
      
        })
})
function getTotal() {
    let values = Array.from(inputAllNumber).map(item => +item.value * +item.dataset.price)
    return values.reduce((sum, current) => sum + current)
}