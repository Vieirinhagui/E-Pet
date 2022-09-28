function iniciaModalFun(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add("mostrar");
}

const cadFun = document.querySelector("#cad_fun");
cadFun.addEventListener('click', () => iniciaModalFun('modal-cad-fun'));

function iniciaModalCli(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add("mostrar");
}

const cadCli = document.querySelector("#cad_cli");
cadCli.addEventListener('click', () => iniciaModalCli('modal-cad-cli'));








// cad_cli,cad_ser,cad_pet, fun, cli, ser, estoque