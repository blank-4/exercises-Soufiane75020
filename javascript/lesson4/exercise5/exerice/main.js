function exercice5() {
    var mastring = "contenue à plusieurs mots pour faire chier"
    console.log(mastring.substr(mastring.length/2));
    var tab = mastring.substr(mastring.length/2).split(" ").reverse().join(" ");
    console.log(tab);   
}
exercice5();