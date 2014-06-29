$(function () {
"use strict";
var $sentDialog = $("#sent-dialog");

$("#contact-form").on('submit', function () {
	$sentDialog.modal('show');
	return false;
});

var $sentAlert = $("#sent-alert");

$sentDialog.on("hidden.bs.modal", function () {
	$sentAlert.show();
});

$sentAlert.on("close.bs.alert", function () {
	$sentAlert.hide();
	return false;
});

});


