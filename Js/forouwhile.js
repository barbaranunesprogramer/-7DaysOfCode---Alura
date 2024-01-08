const nome = prompt("Qual e o seu nome?")
const frontOuBack = prompt(nome + " se você  quiser seguir Front-End digite (1), se for Back-End digite (2)");


if (frontOuBack === 2) {
    alert(nome + " você poderá aprender C# ou  aprender JAVA");

} else {
    alert(nome + " você podera aprender React ou aprender Vue")
}


const prosseguir = prompt(nome + "  se você quiser prosseguir na área escolhida digite (1) , se voce quer se tornar um desenvolvedor Fullstack digite (2):");
const tecnologia = prompt(nome + " há mais alguma tecnologia que voce gostaria de aprender ?")

document.write("seu nome e " + nome + "<br>")

document.write(" voce gostaria de  especializar em " + tecnologia + "<br>");

alert(" você gostaria de se especializar na(s) seguinte (s) tecnologia(s) :" + tecnologia)

const comentario = prompt("você gostaria de acrescentar mais alguma coisa ?")

if (comentario != "") {
    alert(comentario);
    document.write(nome + " você fez o seguinte comentario " + comentario)
} else {
    alert("muito obrigado por ter preenchido meu questionario");

}

