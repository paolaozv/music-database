// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var cargarPagina = function() {
	$("#boton").click(validaciones);
};


$(document).ready(cargarPagina);

var validaciones = function(e) {
	e.preventDefault();
	var titulo = $("#titulo").val().trim().length;
	var artista = $("#artista").val().trim().length;
	var year = $("#year").val().trim().length;
	var genero = $("#genero").val().trim().length;
	if(titulo == 0 || titulo > 40) {
		alert("Ingrese un título de máximo 40 caracteres");
	}
	if(artista == 0 || artista > 60) {
		alert("Ingrese un artista de máximo 60 caracteres");
	}
	if(year == 0 || year < 1900) {
		alert("Ingrese un año mayor a 1900");
	}
	if(genero == 0 || genero > 30) {
		alert("Ingrese un género");
	}
}