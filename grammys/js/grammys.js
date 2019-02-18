$.ajax(
    {
        url : "data/grammys.json",
        type: "GET",
        dataType: "json",
        success: function(data){
            let new_html="";
            for(let i=0; i<data.fields.length; i++){
                new_html+=`
                <option value="${data.fields[i].field_id}">
                    ${data.fields[i].field}
                </option>
                `
            }
            $("#category_types").append(new_html);
            loadData();
        },
        error: function (error_msg){
            console.log(error_msg);
        }

    }
);

//document.getElementById("category_types").addEventListener("change", loadData);

function loadData(){
    $.ajax({
        url : "data/grammys.json",
        typr : "GET",
        dataType : "json",
        success : function (data){
            $("#category_types").on('change', function(event){
                let id= parseInt($(this).val())-1;
                let new_html=`
                    <h2>${data.fields[id].field}</h2>
                    <div class="description">${data.fields[id].description}</div>
                `
                for (let i=0; i<data.fields[id].categories.length; i++){
                    new_html+=`
                    <h3>${data.fields[id].categories[i].category_name}</h3>
                    <ul>
                `
                    for (let j=0; j<data.fields[id].categories[i].nominees.length; j++){
                        if(j==data.fields[id].categories[i].winner_id){
                            new_html+=`<li>
                            <h4 class= "winner">${data.fields[id].categories[i].nominees[j].nominee}</h4> <span>WINNER!</span></br></br>
                            <div>${data.fields[id].categories[i].nominees[j].artist}</br></br></div>
                            
                            `
                        }
                        else{
                            new_html+=`<li>
                            <h4>${data.fields[id].categories[i].nominees[j].nominee}</h4> </br></br>
                            <div>${data.fields[id].categories[i].nominees[j].artist}</br></br></div>
                            
                            `
                        }
                        if(data.fields[id].categories[i].nominees[j].info!=""){
                            new_html+=`
                            <div>${data.fields[id].categories[i].nominees[j].info}</br></br></div>
                            </li>
                            `
                        }
                        else{
                            new_html+=`
                            </li>
                            `
                        }
                    }
                    new_html+="</ul>";
                }
                $("#nominees_section").html(new_html);
            });
        },
        error: function(error_msg){
            console.log(error_msg);
        }
    });

}