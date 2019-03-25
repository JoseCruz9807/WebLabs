
document.getElementById("newitem").addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13 && this.value!="") {
        var valor = document.getElementsByTagName("span").length+1;
        var ul = document.getElementsByTagName("ul");
        var li = document.createElement("LI");
        var span = document.createElement("SPAN");
        var descripcion = document.createTextNode(this.value);
        var input = document.createElement("INPUT");
        span.appendChild(descripcion);
        span.setAttribute("value", valor);
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "todo");
        input.setAttribute("value", valor);
        input.setAttribute("onclick", "done(this)");
        li.appendChild(input);
        li.appendChild(span);
        ul[0].insertAdjacentElement("afterbegin", li);
        this.value="";
    }
});

function done(elemento){
    var posicion=0;
    var span=document.body.getElementsByTagName("span");
    var inputs=document.body.getElementsByTagName("input");
    var list=document.body.getElementsByTagName("li");
    elementoPadre=elemento.parentNode;
    elementoPadre.parentNode.removeChild(elementoPadre);
    var ul = document.getElementsByTagName("ul");
    var originalLength=span.length;
    for (var i = 0; i < inputs.length-1; i++) {
        if (inputs[i].checked) {
            list[i].insertAdjacentElement('beforebegin',elementoPadre);
            posicion=i;
            break;
        }
    }
    if(originalLength==document.body.getElementsByTagName("span").length){
        ul[0].appendChild(elementoPadre);
        posicion=originalLength;
    }
    if(elemento.checked){
        span[posicion].classList.add("done");
    }
    else{
        span[posicion].classList.remove("done");
    }
}



$('input[type="checkbox"]').click(function(){
    $parent=$(this).parent();
    $(this).parent().css("color", "#8f9196");
    $(this).parent().css("text-decoration", "line-through");
    
    if($($parent).css("color")=="rgb(143, 145, 156)"){
        ($parent).css({
            color :"4f545f",
            textDecoration:"none"
        });
    }
    else{
        ($parent).css({
            color :"8f9196",
            textDecoration:"line-through"
        });
    }
    $($parent).toggleClass("done");/*
    $($parent).fadeOut(500, function(){     //Desaparece el elemento
        $($parent).remove();    //Remueve el elemento*/
})