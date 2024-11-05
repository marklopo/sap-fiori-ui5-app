/*global QUnit*/

sap.ui.define([
	"appcustomers/new_project/controller/Zadanie_rekrutacyjne_TOYA_SA.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Zadanie_rekrutacyjne_TOYA_SA Controller");

	QUnit.test("I should test the Zadanie_rekrutacyjne_TOYA_SA controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
