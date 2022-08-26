document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
    fetch('data.json')
        .then(function (res)    {
            return res.json();
    })
        .then(function(data){
            let html = '';
                data.forEach(function(data) {
                    html += `
                        <li>${id.nombre} ${id.precio} </li>
            `;
    })
    document.getElementById('resultado').innerHTML= html;
})
.catch(function(error){
    console.log(error);
})
}
