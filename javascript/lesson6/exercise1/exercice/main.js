
var aujourdhui = new Date();
var annee = aujourdhui.getFullYear();  
var mois =aujourdhui.getMonth()+1;
var jour = aujourdhui.getDate(); 
document.write('nous sommes le : ' + jour +'/' + mois + '/' + annee) ; 

var boite = document.querySelector('div'); 
    function horloge() { var heure =new Date(); boite.textContent = "il est : " + heure.getHours()+":"+heure.getMinutes()+":"+heure.getSeconds();
     } setInterval("horloge()", 1000); 