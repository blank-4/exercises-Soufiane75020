function exercice4(params) {
        var montableau = ["matin","midi","soir","nuit"];
        console.log(montableau.shift());
        montableau.push("après-midi");
        console.log(montableau);
        console.log(montableau.length);
        var reunion = montableau.join("-");
        console.log(reunion);
        console.log(reunion.toUpperCase());
        
        
}
exercice4()