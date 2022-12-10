// main.js - S.Cattin - A rendre pour le 10/12/22
// fichier comportant toute la partie javascript du projet rpg 


// -----------------------------------------------------------------------------------------------------
// ----------------------------------- DECLARATION DES VARIABLES ---------------------------------------
// -----------------------------------------------------------------------------------------------------

// ----- Boite de dialogue -----
var ui = document.getElementById("UI");


// ----- Images des personnages -----
var sorciere1_html= document.getElementById('Sorciere1');
var sorciere2_html= document.getElementById('Sorciere2');
var sorciere3_html= document.getElementById('Sorciere3');

var chat1_html= document.getElementById('Chat1');
var chat2_html= document.getElementById('Chat2');
var chat3_html= document.getElementById('Chat3');
var chat4_html= document.getElementById('Chat4');


// ----- PV des heros -----
var PVChat1_html = document.getElementById('PVChat1');
var PVChat2_html = document.getElementById('PVChat2');
var PVChat3_html = document.getElementById('PVChat3');
var PVChat4_html = document.getElementById('PVChat4');

var PVChat1 = "150";
var PVChat2 = "150";
var PVChat3 = "150";
var PVChat4 = "150";

// ----- PA des heros -----
var PAChat1_html = document.getElementById('PAChat1');
var PAChat2_html = document.getElementById('PAChat2');
var PAChat3_html = document.getElementById('PAChat3');
var PAChat4_html = document.getElementById('PAChat4');

var PAChat1 = "50";
var PAChat2 = "50";
var PAChat3 = "50";
var PAChat4 = "50";

// ----- PV des ennemis -----
var PVSorciere1_html = document.getElementById('PVSorciere1');
var PVSorciere2_html = document.getElementById('PVSorciere2');
var PVSorciere3_html = document.getElementById('PVSorciere3');

var PVSorciere1 = "100";
var PVSorciere2 = "100";
var PVSorciere3 = "100";


// ----- Differentes competences des chats -----
var attaqueChatNoir = document.getElementById('attaqueChatNoir');
var defenseChatNoir = document.getElementById('defenseChatNoir');
var speChatNoir = document.getElementById('speChatNoir');

var attaqueChatCalico = document.getElementById('attaqueChatCalico');
var defenseChatCalico = document.getElementById('defenseChatCalico');
var speChatCalico = document.getElementById('speChatCalico');

var attaqueChatOrange = document.getElementById('attaqueChatOrange');
var defenseChatOrange = document.getElementById('defenseChatOrange');
var speChatOrange = document.getElementById('speChatOrange');

var attaqueChatBlanc = document.getElementById('attaqueChatBlanc');
var defenseChatBlanc = document.getElementById('defenseChatBlanc');
var speChatBlanc = document.getElementById('speChatBlanc');


// ----- Variables verifiant si les personnages ont joué -----
var chatNoirAJoue = false;
var chatCalicoAJoue = false;
var chatOrangeAJoue = false;
var chatBlancAJoue = false;


// ----- Variables verifiant le choix d'action effectué au denrier tour -----
var attaqueNoirDernierTour = false;
var attaqueCalicoDernierTour = false;
var attaqueOrangeDernierTour = false;
var attaqueBlancDernierTour = false;

var defenseNoirDernierTour = false;
var defenseCalicoDernierTour = false;
var defenseOrangeDernierTour = false;
var defenseBlancDernierTour = false;

var speNoirDernierTour = false;
var speCalicoDernierTour = false;
var speOrangeDernierTour = false;
var speBlancDernierTour = false;


// ----- Variables verifiant la defense des heros -----
var chatNoirDefendu = false;
var chatCalicoDefendu = false;
var chatOrangeDefendu = false;
var chatBlancDefendu = false;


// ----- Variables verifiant si les heros sont en vie -----
var vie_chatNoir = true;
var vie_chatCalico = true;
var vie_chatOrange = true;
var vie_chatBlanc = true;




// -----------------------------------------------------------------------------------------------------
// ------------------------------------------ FONCTIONS ------------------------------------------------
// -----------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------
// ----- Ensemble de fonctions permettant d'afficher les boites de choix d'attaque des 4 heros

// Fonction affichant la boite de choix du Chat noir
function showSkillChatN() {
    var div = document.getElementById("skillChatN");

    if (div.style.display === "none") {
      div.style.display = "block";

      skillChatC.style.display = "none";
      skillChatO.style.display = "none";
      skillChatB.style.display = "none";

    } else {
      div.style.display = "none";
    }
}


// Fonction affichant la boite de choix du Chat calico
function showSkillChatC() {
    var div = document.getElementById("skillChatC");

    if (div.style.display === "none") {
      div.style.display = "block";

      skillChatN.style.display = "none";
      skillChatO.style.display = "none";
      skillChatB.style.display = "none";

    } else {
      div.style.display = "none";
    }
}


// Fonction affichant la boite de choix du Chat orange
function showSkillChatO() {
    var div = document.getElementById("skillChatO");

    if (div.style.display === "none") {
      div.style.display = "block";

      skillChatC.style.display = "none";
      skillChatN.style.display = "none";
      skillChatB.style.display = "none";

    } else {
      div.style.display = "none";
    }
}


// Fonction affichant la boite de choix du Chat blanc
function showSkillChatB() {
    var div = document.getElementById("skillChatB");

    if (div.style.display === "none") {
      div.style.display = "block";

      skillChatC.style.display = "none";
      skillChatO.style.display = "none";
      skillChatN.style.display = "none";

    } else {
      div.style.display = "none";
    }
}



// -----------------------------------------------------------------------------------------------------
// ----- Ensemble de fonctions permettant l'attaque des heros

// Fonction attaque du Chat noir
function attaque_chatNoir() {

    // L'attaque ne se fait que si le chat noir n'a pas deja joué
    if (!chatNoirAJoue && !attaqueNoirDernierTour) {

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Choisissez la sorciere a attaquer"

        // Le monstre choisit prend les degats (fonctions degatMonstre)
        sorciere1_html.onclick = degatsSurSorciere(1);
        sorciere2_html.onclick = degatsSurSorciere(2);
        sorciere3_html.onclick = degatsSurSorciere(3);


        // Le chat noir a joué
        chatNoirAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été def ni spe
        attaqueNoirDernierTour = true;
        defenseNoirDernierTour = false;
        speNoirDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatNoir.onclick = null;
        defenseChatNoir.onclick = null;
        speChatNoir.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }    
}


// Fonction attaque du Chat calico
function attaque_chatCalico() {

    // L'attaque ne se fait que si le chat calico n'a pas deja joué
    if (!chatCalicoAJoue && !attaqueCalicoDernierTour) {

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Choisissez la sorciere a attaquer"

        // Le monstre choisit prend les degats (fonctions degatMonstre)
        sorciere1_html.onclick = degatsSurSorciere(1);
        sorciere2_html.onclick = degatsSurSorciere(2);
        sorciere3_html.onclick = degatsSurSorciere(3);


        // Le chat calico a joué
        chatCalicoAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été def ni spe
        attaqueCalicoDernierTour = true;
        defenseCalicoDernierTour = false;
        speCalicoDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatCalico.onclick = null;
        defenseChatCalico.onclick = null;
        speChatCalico.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }
}


// Fonction attaque du Chat orange
function attaque_chatOrange() {

    // L'attaque ne se fait que si le chat orange n'a pas deja joué
    if (!chatOrangeAJoue && !attaqueOrangeDernierTour) {

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Choisissez la sorciere a attaquer"

        // Le monstre choisit prend les degats (fonctions degatMonstre)
        sorciere1_html.onclick = degatsSurSorciere(1);
        sorciere2_html.onclick = degatsSurSorciere(2);
        sorciere3_html.onclick = degatsSurSorciere(3);


        // Le chat orange a joué
        chatOrangeAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été def ni spe
        attaqueOrangeDernierTour = true;
        defenseOrangeDernierTour = false;
        speOrangeDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatOrange.onclick = null;
        defenseChatOrange.onclick = null;
        speChatOrange.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }
}


// Fonction attaque du Chat blanc
function attaque_chatBlanc() {

    // L'attaque ne se fait que si le chat orange n'a pas deja joué
    if (!chatBlancAJoue && !attaqueBlancDernierTour) {

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Choisissez la sorciere a attaquer"

        // Le monstre choisit prend les degats (fonctions degatMonstre)
        sorciere1_html.onclick = degatsSurSorciere(1);
        sorciere2_html.onclick = degatsSurSorciere(2);
        sorciere3_html.onclick = degatsSurSorciere(3);


        // Le chat blanc a joué
        chatBlancAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été def ni spe
        attaqueBlancDernierTour = true;
        defenseBlancDernierTour = false;
        speBlancDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatBlanc.onclick = null;
        defenseChatBlanc.onclick = null;
        speChatBlanc.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }
}


// -----------------------------------------------------------------------------------------------------
// ----- Ensemble de fonctions permettant la defense des heros

// Fonction de defense du Chat Noir
function defense_chatNoir() {

    // La defense ne se fait que si le chat noir n'a pas deja joué
    if (!chatNoirAJoue && !defenseNoirDernierTour) {

        // Le chat noir ne prend aucun degat
        chatNoirDefendu = true;

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Le Chat Noir se defend, il ne subira aucun degats au prochain tour";


        // Le chat Noir a joué
        chatNoirAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été atq ni spe
        attaqueNoirDernierTour = false;
        defenseNoirDernierTour = true;
        speNoirDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatNoir.onclick = null;
        defenseChatNoir.onclick = null;
        speChatNoir.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }
}


// Fonction de defense du Chat Calico
function defense_chatCalico() {

    // La defense ne se fait que si le chat calico n'a pas deja joué
    if (!chatCalicoAJoue && !defenseCalicoDernierTour) {

        // Le chat calico ne prend aucun degat
        chatCalicoDefendu = true;

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Le Chat Calico se defend, il ne subira aucun degats au prochain tour";


        // Le chat calico a joué
        chatCalicoAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été atq ni spe
        attaqueCalicoDernierTour = false;
        defenseCalicoDernierTour = true;
        speCalicoDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatCalico.onclick = null;
        defenseChatCalico.onclick = null;
        speChatCalico.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }
}


// Fonction de defense du Chat Orange
function defense_chatOrange() {

    // La defense ne se fait que si le chat orange n'a pas deja joué
    if (!chatOrangeAJoue && !defenseOrangeDernierTour) {

        // Le chat orange ne prend aucun degat
        chatOrangeDefendu = true;

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Le Chat Orange se defend, il ne subira aucun degats au prochain tour";


        // Le chat orange a joué
        chatOrangeAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été atq ni spe
        attaqueOrangeDernierTour = false;
        defenseOrangeDernierTour = true;
        speOrangeDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatOrange.onclick = null;
        defenseChatOrange.onclick = null;
        speChatOrange.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }
}


// Fonction de defense du Chat Blanc
function defense_chatBlanc() {

    // La defense ne se fait que si le chat blanc n'a pas deja joué
    if (!chatBlancAJoue && ! defenseBlancDernierTour) {

        // Le chat blanc ne prend aucun degat
        chatBlancDefendu = true;

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Le Chat Blanc se defend, il ne subira aucun degats au prochain tour";


        // Le chat blanc a joué
        chatBlancAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été atq ni spe
        attaqueBlancDernierTour = false;
        defenseBlancDernierTour = true;
        speBlancDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatBlanc.onclick = null;
        defenseChatBlanc.onclick = null;
        speChatBlanc.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }
}


// -----------------------------------------------------------------------------------------------------
// ----- Ensemble de fonctions permettant l'attaque speciale des heros

// Fonction attaque speciale du Chat noir
function spe_chatNoir() {

    // L'attaque speciale ne se fait que si le chat noir n'a pas deja joué
    if (!chatNoirAJoue && !speNoirDernierTour) {

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Choisissez la sorciere a attaquer"

        // Le monstre choisit prend les degats (fonctions degatSpeChatNoir)
        
        sorciere1_html.onclick = degatSpeChatNoir(1);
        sorciere2_html.onclick = degatSpeChatNoir(2);
        sorciere3_html.onclick = degatSpeChatNoir(3);
        

        // Le chat noir a joué
        chatNoirAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été atq ni def
        speNoirDernierTour = true;
        attaqueNoirDernierTour = false;
        defenseNoirDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatNoir.onclick = null;
        defenseChatNoir.onclick = null;
        speChatNoir.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }
}


// Fonction attaque speciale du Chat Calico
function spe_chatCalico() {

    // L'attaque speciale ne se fait que si le chat calico n'a pas deja joué
    if (!chatCalicoAJoue && !speCalicoDernierTour) {

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Choisissez la sorciere a attaquer"

        // Le monstre choisit prend les degats (fonctions degatSpeChatCalico)
        sorciere1_html.onclick = degatSpeChatCalico(1);
        sorciere2_html.onclick = degatSpeChatCalico(2);
        sorciere3_html.onclick = degatSpeChatCalico(3);


        // Le chat calico a joué
        chatCalicoAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été atq ni def
        speCalicoDernierTour = true;
        attaqueCalicoDernierTour = false;
        defenseCalicoDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatCalico.onclick = null;
        defenseChatCalico.onclick = null;
        speChatCalico.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }
}


// Fonction attaque speciale du Chat Orange
function spe_chatOrange() {

    // L'attaque speciale ne se fait que si le chat orange n'a pas deja joué
    if (!chatOrangeAJoue && !speOrangeDernierTour) {

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Choisissez la sorciere a attaquer"

        // Le monstre choisit prend les degats (fonctions degatSpeChatOrange)
        sorciere1_html.onclick = degatSpeChatOrange(1);
        sorciere2_html.onclick = degatSpeChatOrange(2);
        sorciere3_html.onclick = degatSpeChatOrange(3);
        

        // Le chat orange a joué
        chatOrangeAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été atq ni def
        speOrangeDernierTour = true;
        attaqueOrangeDernierTour = false;
        defenseOrangeDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatCalico.onclick = null;
        defenseChatCalico.onclick = null;
        speChatCalico.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }

}


// Fonction attaque speciale du Chat Blanc
function spe_chatBlanc() {

    // L'attaque speciale ne se fait que si le chat blanc n'a pas deja joué
    if (!chatBlancAJoue && !speBlancDernierTour) {

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Choisissez la sorciere a attaquer"

        // Le monstre choisit prend les degats (fonctions degatSpeChatBlanc)
        sorciere1_html.onclick = degatSpeChatBlanc(1);
        sorciere2_html.onclick = degatSpeChatBlanc(2);
        sorciere3_html.onclick = degatSpeChatBlanc(3);


        // Le chat blanc a joué
        chatBlancAJoue = true;

        // Le choix a été enrigistré et on enregistre aussi que le dernier choix n'a pas été atq ni def
        speBlancDernierTour = true;
        attaqueBlancDernierTour = false;
        defenseBlancDernierTour = false;

        // Remet les onclick en valeur null
        attaqueChatBlanc.onclick = null;
        defenseChatBlanc.onclick = null;
        speChatBlanc.onclick = null;

        // Riposte des sorcieres si tous les chats ont joué
        risposteSorcieres();
    }
}


// -----------------------------------------------------------------------------------------------------
// ----- Fonction infligeant les degats

// Fonction infligeant les degats de l'attaque basique a la sorciere dont l'indice est passé en parametre
function degatsSurSorciere(sorciere) {

    // Les degats faits par le heros sur la sorciere : nombre aleatoire entre 10 et 30
    var degatsHeros = Math.floor(Math.random()*20) + 10;
  
    if (sorciere == 1) {
        // Enleve les PV sur l'affichage html
        PVSorciere1_html.innerHTML = PVSorciere1 -= degatsHeros;
    
        // Affichage d'un message dans la boite de dialogue
        dialoguehtml.innerHTML = "- " +  degatsHeros + " sur la sorciere bleue !";

        // Verification de la vie de la sorciere
        sorciere1EnVie();

    } else if (sorciere == 2) {
        PVSorciere2_html.innerHTML = PVSorciere2 -= degatsHeros;
    
        dialoguehtml.innerHTML = "- " +  degatsHeros + " sur la sorciere verte !";

        sorciere2EnVie();

    } else if (sorciere == 3) {

        PVSorciere3_html.innerHTML = PVSorciere3 -= degatsHeros;
    
        dialoguehtml.innerHTML = "- " +  degatsHeros + " sur la sorciere rose !";

        sorciere3EnVie();
    }
  
    // Remet les onclick en valeur null
    sorciere1_html.onclick = null;
    sorciere2_html.onclick = null;
    sorciere3_html.onclick = null;
}




// -----------------------------------------------------------------------------------------------------
// ----- Ensemble de fonctions realisant les attaques speciales des chats

// Fonction faisant l'attaque speciale du chat noir sur la sorciere dont l'indice est passé en parametre
function degatSpeChatNoir(sorciere) {    

    // Si il reste au moins 25 PA au chat
    if (PAChat1-25 >= 0) {
        // Les degats faits par le heros sur la sorciere : nombre aleatoire entre 20 et 50
        var degatsHeros = Math.floor(Math.random()*30) + 20;
    
        // Affichage d'un message dans la boite de dialogue
        dialoguehtml.innerHTML = "Attaque speciale du Chat Noir ! Gros coup d'epee : -" +  degatsHeros + " sur la sorciere";

        // 25 PA sont retirés au chat
        PAChat1_html.innerHTML = PAChat1 -= 25;

        if (sorciere == 1) {
            PVSorciere1_html.innerHTML = PVSorciere1 -= degatsHeros;

            // Verification de la vie de la sorciere
            sorciere1EnVie();

        } else if (sorciere == 2) {
            PVSorciere2_html.innerHTML = PVSorciere2 -= degatsHeros;

            sorciere2EnVie();

        } else if (sorciere == 3) {
            PVSorciere3_html.innerHTML = PVSorciere3 -= degatsHeros;

            sorciere3EnVie();
        }
    
        // Remet les onclick en valeur null
        sorciere1_html.onclick = null;
        sorciere2_html.onclick = null;
        sorciere3_html.onclick = null;
    }    
}


// Fonction faisant l'attaque speciale du chat calico sur la sorciere dont l'indice est passé en parametre
function degatSpeChatCalico(sorciere) {    

    // Si il reste au moins 25 PA au chat
    if (PAChat2-25 >= 0) {
        // Les degats faits par le heros sur la sorciere : nombre aleatoire entre 20 et 50
        var degatsHeros = Math.floor(Math.random()*30) + 20;
    
        // Affichage d'un message dans la boite de dialogue
        dialoguehtml.innerHTML = "Attaque speciale du Chat Calico ! Coup de foudre : -" +  degatsHeros + " sur la sorciere";

        // 25 PA sont retirés au chat
        PAChat2_html.innerHTML = PAChat2 -= 25;

        if (sorciere == 1) {
            PVSorciere1_html.innerHTML = PVSorciere1 -= degatsHeros;

            // Verification de la vie de la sorciere
            sorciere1EnVie();

        } else if (sorciere == 2) {
            PVSorciere2_html.innerHTML = PVSorciere2 -= degatsHeros;

            sorciere2EnVie();

        } else if (sorciere == 3) {
            PVSorciere3_html.innerHTML = PVSorciere3 -= degatsHeros;

            sorciere3EnVie();
        }
    
        // Remet les onclick en valeur null
        sorciere1_html.onclick = null;
        sorciere2_html.onclick = null;
        sorciere3_html.onclick = null;
    }    
}


// Fonction faisant l'attaque speciale du chat orange sur la sorciere dont l'indice est passé en parametre
function degatSpeChatOrange(sorciere) {    

    // Si il reste au moins 25 PA au chat
    if (PAChat3-25 >= 0) {
        // Les degats faits par le heros sur la sorciere : nombre aleatoire entre 20 et 50
        var degatsHeros = Math.floor(Math.random()*30) + 20;
    
        // Affichage d'un message dans la boite de dialogue
        dialoguehtml.innerHTML = "Attaque speciale du Chat Orange ! Boule de feu : -" +  degatsHeros + " sur la sorciere";

        // 25 PA sont retirés au chat
        PAChat3_html.innerHTML = PAChat3 -= 25;

        if (sorciere == 1) {
            PVSorciere1_html.innerHTML = PVSorciere1 -= degatsHeros;

            // Verification de la vie de la sorciere
            sorciere1EnVie();

        } else if (sorciere == 2) {
            PVSorciere2_html.innerHTML = PVSorciere2 -= degatsHeros;

            sorciere2EnVie();

        } else if (sorciere == 3) {
            PVSorciere3_html.innerHTML = PVSorciere3 -= degatsHeros;

            sorciere3EnVie();
        }
    
        // Remet les onclick en valeur null
        sorciere1_html.onclick = null;
        sorciere2_html.onclick = null;
        sorciere3_html.onclick = null;
    }    
}


// Fonction faisant l'attaque speciale du chat blanc sur la sorciere dont l'indice est passé en parametre
function degatSpeChatBlanc(sorciere) {    

    // Si il reste au moins 25 PA au chat
    if (PAChat4-25 >= 0) {
        // Les degats faits par le heros sur la sorciere : nombre aleatoire entre 20 et 50
        var degatsHeros = Math.floor(Math.random()*30) + 20;
    
        // Affichage d'un message dans la boite de dialogue
        dialoguehtml.innerHTML = "Attaque speciale du Chat Blanc ! Pics de glace : -" +  degatsHeros + " sur la sorciere";

        // 25 PA sont retirés au chat
        PAChat4_html.innerHTML = PAChat4 -= 25;

        if (sorciere == 1) {
            PVSorciere1_html.innerHTML = PVSorciere1 -= degatsHeros;

            // Verification de la vie de la sorciere
            sorciere1EnVie();

        } else if (sorciere == 2) {
            PVSorciere2_html.innerHTML = PVSorciere2 -= degatsHeros;

            sorciere2EnVie();

        } else if (sorciere == 3) {
            PVSorciere3_html.innerHTML = PVSorciere3 -= degatsHeros;

            sorciere3EnVie();
        }
    
        // Remet les onclick en valeur null
        sorciere1_html.onclick = null;
        sorciere2_html.onclick = null;
        sorciere3_html.onclick = null;        
    }    
}


// -----------------------------------------------------------------------------------------------------
// ----- Ensemble de fonctions permettant la risposte des sorcieres

function risposteSorcieres() {
    if (chatBlancAJoue && chatCalicoAJoue && chatNoirAJoue && chatOrangeAJoue) {
        risposteSorciere1();
        risposteSorciere2();
        risposteSorciere3();

        // Si les chats sont encore en vie, on leur permet de jouer un nouveau tour
        if (vie_chatNoir) { chatNoirAJoue = false; }
        if (vie_chatCalico) { chatCalicoAJoue = false; }
        if (vie_chatOrange) { chatOrangeAJoue = false; }
        if (vie_chatBlanc) { chatBlancAJoue = false; }
    }
}


// Fonction engeandrant la riposte de la sorciere bleue
function risposteSorciere1() {

    // Chat ciblé aléatoirement (nombre entre 1 et 4)
    cible = Math.floor(Math.random()*5) + 1;

    // Les degats infligés par la sorciere est un nombre aleatoire entre 15 et 45
    var degatsSorciere = Math.floor(Math.random()*30) + 15;
      
    // La cible est le Chat Noir
    if (cible == 1) {
        // Si le chat Noir a choisi de son defendre lors du dernier tour, on reinitialise la variable defense
        if (chatNoirDefendu == true) {
            chatNoirDefendu = false;

        // Sinon il prend les degats infliges par la sorciere
        } else {
            PVChat1_html.innerHTML = PVChat1 -= degatsSorciere;
        }
    }
  
    // La cible est le Chat Calico
    if (cible == 2) {
        if (chatCalicoDefendu == true) {
            chatCalicoDefendu = false;

        } else {
            PVChat2_html.innerHTML = PVChat2 -= degatsSorciere;
        }
    }
  
    // La cible est le Chat Orange
    if (cible == 3) {
        if (chatOrangeDefendu == true) {
            chatOrangeDefendu = false;

        } else {
            PVChat3_html.innerHTML = PVChat3 -= degatsSorciere;
        }
    }
      
    // La cible est le Chat Blanc
    if (cible == 4) {
        if (chatBlancDefendu == true) {
            chatBlancDefendu = false;

        } else {
            PVChat4_html.innerHTML = PVChat4 -= degatsSorciere;
        }
    }
  
    // Affichage d'un message dans la boite de dialogue
    ui.innerHTML = "La sorciere bleue a fait " + degatsSorciere + " degats...";

    // Verification de la vie des 4 chats
    chatNoirEnVie();
    chatCalicoEnVie();
    chatOrangeEnVie();
    chatBlancEnVie();
}


// Fonction engeandrant la riposte de la sorciere verte
function risposteSorciere2() {

    // Chat ciblé aléatoirement (nombre entre 1 et 4)
    cible = Math.floor(Math.random()*5) + 1;

    // Les degats infligés par la sorciere est un nombre aleatoire entre 15 et 45
    var degatsSorciere = Math.floor(Math.random()*30) + 15;
      
    // La cible est le Chat Noir
    if (cible == 1) {
        // Si le chat Noir a choisi de son defendre lors du dernier tour, on reinitialise la variable defense
        if (chatNoirDefendu == true) {
            chatNoirDefendu = false;

        // Sinon il prend les degats infliges par la sorciere
        } else {
            PVChat1_html.innerHTML = PVChat1 -= degatsSorciere;
        }
    }
  
    // La cible est le Chat Calico
    if (cible == 2) {
        if (chatCalicoDefendu == true) {
            chatCalicoDefendu = false;

        } else {
            PVChat2_html.innerHTML = PVChat2 -= degatsSorciere;
        }
    }
  
    // La cible est le Chat Orange
    if (cible == 3) {
        if (chatOrangeDefendu == true) {
            chatOrangeDefendu = false;

        } else {
            PVChat3_html.innerHTML = PVChat3 -= degatsSorciere;
        }
    }
      
    // La cible est le Chat Blanc
    if (cible == 4) {
        if (chatBlancDefendu == true) {
            chatBlancDefendu = false;

        } else {
            PVChat4_html.innerHTML = PVChat4 -= degatsSorciere;
        }
    }
  
    // Affichage d'un message dans la boite de dialogue
    ui.innerHTML = "La sorciere verte a fait " + degatsSorciere + " degats...";

    // Verification de la vie des 4 chats
    chatNoirEnVie();
    chatCalicoEnVie();
    chatOrangeEnVie();
    chatBlancEnVie();
}


// Fonction engeandrant la riposte de la sorciere rose
function risposteSorciere3() {

    // Chat ciblé aléatoirement (nombre entre 1 et 4)
    cible = Math.floor(Math.random()*5) + 1;

    // Les degats infligés par la sorciere est un nombre aleatoire entre 15 et 45
    var degatsSorciere = Math.floor(Math.random()*30) + 15;
      
    // La cible est le Chat Noir
    if (cible == 1) {
        // Si le chat Noir a choisi de son defendre lors du dernier tour, on reinitialise la variable defense
        if (chatNoirDefendu == true) {
            chatNoirDefendu = false;

        // Sinon il prend les degats infliges par la sorciere
        } else {
            PVChat1_html.innerHTML = PVChat1 -= degatsSorciere;
        }
    }
  
    // La cible est le Chat Calico
    if (cible == 2) {
        if (chatCalicoDefendu == true) {
            chatCalicoDefendu = false;

        } else {
            PVChat2_html.innerHTML = PVChat2 -= degatsSorciere;
        }
    }
  
    // La cible est le Chat Orange
    if (cible == 3) {
        if (chatOrangeDefendu == true) {
            chatOrangeDefendu = false;

        } else {
            PVChat3_html.innerHTML = PVChat3 -= degatsSorciere;
        }
    }
      
    // La cible est le Chat Blanc
    if (cible == 4) {
        if (chatBlancDefendu == true) {
            chatBlancDefendu = false;

        } else {
            PVChat4_html.innerHTML = PVChat4 -= degatsSorciere;
        }
    }
  
    // Affichage d'un message dans la boite de dialogue
    ui.innerHTML = "La sorciere rose a fait " + degatsSorciere + " degats...";

    // Verification de la vie des 4 chats
    chatNoirEnVie();
    chatCalicoEnVie();
    chatOrangeEnVie();
    chatBlancEnVie();
}



// -----------------------------------------------------------------------------------------------------
// ----- Ensemble de fonctions permettant de verifier la vie des personnages

// Fonction verifiant la vie de la sorciere bleue
function sorciere1EnVie() {

    // Verification des PV
    if (PVSorciere1 <= 0) {

        // L'image de la sorciere disparait
        sorciere1_html.style.visibility = "hidden";

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "La sorciere bleue a ete vaincue";
    }
}


// Fonction verifiant la vie de la sorciere verte
function sorciere2EnVie() {

    // Verification des PV
    if (PVSorciere2 <= 0) {

        // L'image de la sorciere disparait
        sorciere2_html.style.visibility = "hidden";

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "La sorciere verte a ete vaincue";
    }
}


// Fonction verifiant la vie de la sorciere rose
function sorciere3EnVie() {

    // Verification des PV
    if (PVSorciere3 <= 0) {

        // L'image de la sorciere disparait
        sorciere3_html.style.visibility = "hidden";

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "La sorciere rose a ete vaincue";
    }
}


// Fonction verifiant la vie du Chat Noir
function chatNoirEnVie() {

    // Verification des PV
    if (PVChat1 <= 0) {

        // L'image du chat disparait
        chat1_html.style.visibility = "hidden";

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Le Chat Noir a ete vaincu...";

        // Le chat Noir n'est plus en vie et ne pourra plus jouer
        vie_chatNoir = false;
    }
}


// Fonction verifiant la vie du Chat Calico
function chatCalicoEnVie() {

    // Verification des PV
    if (PVChat2 <= 0) {

        // L'image du chat disparait
        chat2_html.style.visibility = "hidden";

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Le Chat Calico a ete vaincu...";

        // Le chat Calico n'est plus en vie et ne pourra plus jouer
        vie_chatCalico = false;
    }
}


// Fonction verifiant la vie du Chat Orange
function chatOrangeEnVie() {

    // Verification des PV
    if (PVChat3 <= 0) {

        // L'image du chat disparait
        chat3_html.style.visibility = "hidden";

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Le Chat Orange a ete vaincu...";

        // Le chat Orange n'est plus en vie et ne pourra plus jouer
        vie_chatOrange = false;
    }
}


// Fonction verifiant la vie du Chat Blanc
function chatBlancEnVie() {

    // Verification des PV
    if (PVChat4 <= 0) {

        // L'image du chat disparait
        chat4_html.style.visibility = "hidden";

        // Affichage d'un message dans la boite de dialogue
        ui.innerHTML = "Le Chat Blanc a ete vaincu...";

        // Le chat Blanc n'est plus en vie et ne pourra plus jouer
        vie_chatBlanc = false;
    }
}


