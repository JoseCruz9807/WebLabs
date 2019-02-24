
/*
1. Función que muestra y esconde la sección para hacer comentarios 
   al hacer click el botón "Escribe una reseña". 
   on click!
   (10 puntos)
*/
$("#escribe_reseña").on('click', function(event){
  let $comentatio = $("#seccion_comentario");
  $comentatio.toggleClass("hidden");
});

/*
```
2. Cargar los comentarios de el archivo comentarios.xml o bien de 
  https://barbaragabriela.github.io/misc/ 
  (función ajax, 30 puntos)
```
*/
$.ajax(
  {
      url : "data/comentarios.xml",
      type: "GET",
      dataType: "xml",
      success: function(data){
        let new_html="";
        $(data).find("comment").each(function(event){
            new_html+=`
            <div class="review commentBox">
              <div class="nombre">
                ${$(this).find("name").text()} </br>
              </div> 
              <div class="stars">
                  ${getStarsSpans(parseInt($(this).find("stars").text()))}
              </div>
              ${$(this).find("text").text()}
            </div>
                
            `;
        });
        $("#seccion_reviews").append(new_html);
    },

    error: function (error_msg){
          console.log(error_msg);
    }

  }
);

/*
```
3. Funcion que apendiza el nuevo comentario al darle click a PUBLICAR
  on click!
  (función, 35 puntos)
```
*/
$("#btn-publicar").on('click', function(event){
  let $comentario = $("#comentario");
  let $nombre = $("#nombre");
  let $email = $("#email");
  let $error= $("#error_comment");
  
  if($nombre.val()==""||$comentario.text()==""){
    $error.removeClass("hidden");
  }
  else{
    let star=0;
    for(let i=0;i<5;i++){
      let $stars = $("#star"+(i+1));
      if($stars.is(':checked')){
        star=i+1;
      }
    }
    var d = new Date();
    let new_html=`
               <div class="review commentBox">
                <div class="nombre">
                  ${$nombre.val()} <span class="date">${d.getDate()}/${(d.getMonth()+1)}</span></br>

                </div> 
                <div class="stars">
                    ${getStarsSpans(parseInt(star))}
                </div>
                ${$comentario.text()}
              </div>
    `
    $("#seccion_reviews").append(new_html);
    $error.addClass("hidden");
    $nombre.val("");
    $email.val("");
    $comentario.text("");
  }
});

/*

```
4. Funcion que limpia el nombre, el email y el div "#comentarios" al darle
   click en "btn-limpiar" con leyenda de "CANCELAR"
   on click!
  (5 puntos)
```
*/
$("#btn-limpiar").on('click', function(event){
  let $comentario = $("#comentario");
  let $nombre = $("#nombre");
  let $email = $("#email");
  let $error= $("#error_comment");
  $error.addClass("hidden");
  $nombre.val("");
  $email.val("");
  $comentario.text("");
});
/*
```
Funcion que recibe un numero de stars y regresa los 5 spans 
que simbolizan las estrellas del rating. por ejemplo:
let stars = 3;
let html = getStarsSpans(stars);

html = "
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
"
```
*/
function getStarsSpans(stars) {
  let new_html = "";
  for( let i = 0; i < stars; i++) {
    new_html += `
      <span class="fa fa-star checked"></span>
    `;
  }

  for ( let i = 0; i < 5 - stars; i++ ) {
    new_html += `
      <span class="fa fa-star notchecked"></span>
    `;
  }

  return new_html;
}
