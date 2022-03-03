


const justinListItems = ["New Seasonal Favorites",
                         "New to the Market",
                         "Breadwinners",
                         "Celebrating 10 Years Together",
                         "Takeout at Home",
                         "Keen on Green",
                         "Fresh Catch",
                         "St. Patrick's Day"
                        ]

// const testElement = document.querySelector(
//     ".header-item-div-margin-left"
//     ).querySelectorAll('.header-item-div-link__text');

const testElement= document.querySelectorAll('.dropdown');
const testElement1= document.querySelectorAll('.header-item-div-container');



for(var i=0; i<testElement.length; i++) {
    testElement[i].style.display = 'none';
}

testElement[0].style.display = 'block';


for(var i=0; i<testElement1.length; i++) {
    testElement1[i].addEventListener("mouseover", function(evt){
        // this.children[1].style.display = 'block';
    })
    testElement1[i].addEventListener("mouseout", function(evt){
        // this.children[1].style.display = 'none';
    })
}
