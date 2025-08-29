function obterEquipas() {
  const element = document.getElementById("footer");
  console.log(element.className.indexOf("expand"));
  if (element.className.indexOf("expand") === -1) {
    element.className = element.className.replace("encolher", "expand");
  }

  var url = "http://localhost:3000/api/equipas";
  fetch(url)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (dados) {
      console.log(dados);
      div = document.getElementById("ListarEquipas");
      div.innerHTML = "";
      for (let i = 0; i < dados.length; i++) {
        //texto = document.getElementsByClassName("cardEquipa");
        texto = document.createElement("div");

        if (dados[i].img === null) {
          dados[i].img = "../website/assets/gf.png";
        }
        texto.innerHTML = `<div class="col-sm-12">
                            <div class="card card-body mb-4 cardEquipa">
                             <div class="container">
                               <h5 class="nomeEquipa"> ${dados[i].name} </h5>   
                                <p></p>
                                <img class="card-img-top" src=${dados[i].img} width="100" height="140">
                                <p></p>    
                                Data de Fundação:  ${dados[i].year} 
                                <p></p>    
                                Nº de Titulos: ${dados[i].cl_titles}
                                </div>
                             </div>
                           </div>`;
        // <img class="imgTeams"src="data:image;base64,.base64_encode(${dados[i].img})." width="200" height="250">
        div.appendChild(texto);
      }
    });
}

function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    console.log("RESULT", reader.result);
    document.getElementById("imagemId").value = reader.result;
  };
  reader.readAsDataURL(file);
}
