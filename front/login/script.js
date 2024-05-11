let button = document.querySelector('button');

button.onclick = async function (e) {
    e.preventDefault();
    //cancela o comportamento padrão de um formulario, tem que colocar o "e" no parametro

    let name = document.getElementById('name').value;
    let senha = document.getElementById('senha').value;


    let data = { name, senha }

    // POST
    const response = await fetch('http://localhost:3000/api/users/listUsers', {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" }
    });

    let content = await response.json();
    console.log(content);

    for (let i = 0; i < content.data.length; i++) {

        if (content.data[i].name === name && content.data[i].senha === senha) {
            Swal.fire({
                icon: "success",
                title: "Login realizado com sucesso!",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                // window.location.href = "/front/saibamais/index.html"
            }, 1500);

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Conta não encontrada!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
}