function validieren(e) {
    e.preventDefault();
    var email = document.forms[0].elements["email"].value;
    var selections = document.getElementById("tickets");
    var slctvalue = selections.options[selections.selectedIndex].value;
    if (email.length > 0 && email.includes("@") && email.includes(".")) {
        if (slctvalue){
        
            document.forms[0].submit();
            
        }
        else {
            alert("Bitte wählen Sie aus, wie viele Tickets sie bestellen möchten.");
        }
    
    } else {
    alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    }
};