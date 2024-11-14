window.addEventListener("load", initialize);

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);
}

function add() {
    var ingredients = document.getElementById("ingredients");

    if (ingredients.selectedIndex > -1 ) {
        document.getElementById("choice").appendChild(ingredients.options[ingredients.selectedIndex]);
        // ingredients.removeChild(ingredients.options[ingredients.selectedIndex]);
    }
}

function remove() {
    var choice = document.getElementById("choice");
    if (choice.selectedIndex > -1 ) {
        
        document.getElementById("ingredients").appendChild(choice.options[choice.selectedIndex]);
        // choice.removeChild(choice.options[choice.selectedIndex]);
        //todo: ausgewählte Zutat von der rechten in die linke Listbox verschieben
    }
}