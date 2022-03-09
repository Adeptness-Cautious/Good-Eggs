


const justinListItems = ["New Seasonal Favorites", "New to the Market", "Breadwinners", "Celebrating 10 Years Together", "Takeout at Home", "Keen on Green", "Fresh Catch", "St. Patrick's Day"]

const mealKits = ["Main Course", "Special Diets", "Celebrations", "Appetizers", "Boards & Platters", "Side Dishes", "Side Salads", "Quick & Easy Lunch", "Desserts", "Cooking With Kids", "One-Pot Cooking", "Family Favorites", "Cocktails"]

const produce = ["New & Peak Season", "CSA Boxes", "Prepped Fruit", "Prepped Vegetables", "Flowers", "Fruits", "Avocados", "Vegetables", "Greens", "Mushrooms", "Potatoes & Beets", "Garlic & Onions", "Herbs", "Bulk Produce", "Frozen Fruit & Vegetables"]

const listItems = [justinListItems, mealKits, produce]


const dropdown = document.querySelectorAll('.dropdown');
const dropdownActivator = document.querySelectorAll('.header-item-div-container');
const dropdownDiv = document.querySelectorAll('.dropdown');

const addListElements = (List, divIndex) => {
        console.log(List);
        for(var i=0; i<List.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = List[i];
            li.classList.add("dropdown-container__li");
            dropdownDiv[divIndex].appendChild(li);
        }
}

for(var i=0; i<3; i++) {
    addListElements(listItems[i], i);
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
