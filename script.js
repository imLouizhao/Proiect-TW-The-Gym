
function modifyColor() {
    document.getElementById("Tipuri_de_abonamente").className = 'red';
}


var show = false;
function showDetails() {

    if (show == false) {
        document.getElementById("buton").style.backgroundColor = "green";

        const p = document.createElement("p");
        p.innerText = "Aparate de ultimă generație, atent alese, fabricate in S.U.A.";
        p.className = "p2";
        document.getElementById("despre").appendChild(p);

        const p2 = document.createElement("p");
        var str = String("Ring octagonal de MMA");
        
        p2.innerHTML = str.toUpperCase();
        p2.className = "p2";
        document.getElementById("despre").appendChild(p2);

        const p3 = document.createElement("p");
        p3.innerHTML = "Spațiu de 2000mp amenajat corespunzător";
        p3.className = "p2";
        document.getElementById("despre").appendChild(p3);

        p4 = document.createElement("p");
        p4.innerHTML = "Sală de aerobic cu suprafață de 250mp";
        p4.className = "p2";
        document.getElementById("despre").appendChild(p4);

        p5 = document.createElement("p");
        p5.innerHTML = "2 zone SPA prezente în vestiare";
        p5.className = "p2";
        document.getElementById("despre").appendChild(p5);

        p6 = document.createElement("p");
        p6.innerHTML = "Program NON STOP cu personal prezent în recepție";
        p6.className = "p2";
        document.getElementById("despre").appendChild(p6);

        p7 = document.createElement("p");
        p7.innerHTML = "Opțiuni variate pentru antrenori personali";
        p7.className = "p2";
        document.getElementById("despre").appendChild(p7);

        show = true;
    }
}