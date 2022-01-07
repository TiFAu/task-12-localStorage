let collection = document.querySelectorAll(
    "input[type='checkbox']"
)
var fruits=[]

function selectFruits (collection){
    if(this.checked)fruits.push(this.value)
    else fruits.splice (fruits.indexOf(this.value),
    1)
}

function saveChoice(){
    localStorage.setItem(
        "selectedFruits",
        JSON.stringify(fruits)
    )
    console.log (collection)
    console.log (localStorage)
}