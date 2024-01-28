//Nesse código, estou ativando todos os popovers

/*Lista de ativação de popover. Essa variável vai ter todos os popovers existentes no site.
    Posso ter 10,20, 1. Não importa a quantidade popovers. */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))


/*Ativação do popover. vai inserir de botão em botão o evento return new bootstrap.popover(popoverTriggerEl).
Esse evento é o disparador de popover */
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    //objeto do próprio bootstrap
    return new bootstrap.Popover(popoverTriggerEl)
})


//Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //objeto do próprio bootstrap
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
