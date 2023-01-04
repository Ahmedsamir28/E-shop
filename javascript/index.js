// landing page

let image = document.getElementById('image')
let slide = image.getElementsByTagName('img');

let i = 0;

function nextslide() {
    slide[i].classList.remove('active');
    i = (i + 1) % slide.length;
    slide[i].classList.add('active')
}
function backslide() {
    slide[i].classList.remove('active');
    i = (i - 1 + slide.length) % slide.length;
    slide[i].classList.add('active')
}

//active head for filter gallery

let filter = document.querySelectorAll('.filter li');
let filterBox = document.querySelectorAll('.contain-filter');

filter.forEach(el => {
    el.addEventListener('click', function () {
        filter.forEach(li => {
            li.classList.remove('act')
            this.classList.add('act')
        })
    })
})

// choose items from head of filter gallery

filter.forEach((li) => {
    li.addEventListener("click", manageImgs);
});
function manageImgs() {
    filterBox.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.name).forEach((el) => {
        el.style.display = "block";
    });
}

// load more whem click on button

let loadMore =document.querySelector('.load-more');
let currenItem = 4;
loadMore.onclick = ()=>{
    let boxes = [...document.querySelectorAll('.contain-filter')];
    for(var i = currenItem; i < currenItem + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currenItem  += 4;
    if (currenItem >= boxes.length) {
        loadMore.style.display = 'none'
        
    }
}

// remove button from under the list header
function removebtn() {
    loadMore.style.display = 'none'
}





// product slider


const productContainers = document.querySelectorAll('.product-container');
const nxtBtn =document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




