


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

const dropdown = document.querySelectorAll('.dropdown');
const dropdownActivator = document.querySelectorAll('.header-item-div-container');
const dropdownDiv = document.querySelector('.dropdown');

for(var i=0; i<justinListItems.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = justinListItems[i];
    li.classList.add("dropdown-container__li");
    dropdownDiv.appendChild(li);
}

for(var i=0; i<dropdown.length; i++) {
    dropdown[i].style.display = 'none';
}



for(var i=0; i<dropdownActivator.length; i++) {
    dropdownActivator[i].addEventListener("mouseover", function(evt){
        this.children[1].style.display = 'block';
    })
    dropdownActivator[i].addEventListener("mouseout", function(evt){
        this.children[1].style.display = 'none';
    })
}
