let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
}) // Requerimiento 2 - Habilita Tooltips con Popper

$('#enviarCorreo').click(function () {
    alert('El correo fue enviado exitosamente...')
}) // Requerimiento 3

$('article span').on('dblclick', function () {
    $(this).css('color', 'red');
}); // Requerimiento 4

$('.card-title').click(function() {
    $('.card-text, .card img').toggle();
}); // Requerimiento 5 