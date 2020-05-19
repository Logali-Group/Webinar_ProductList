sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("logaligroup.ProductsList.controller.Products", {
		onInit: function () {

		},
		
		onFilterProducts: function (oEvent) {
			
			var prodFilter = [];
			var sQuery = oEvent.getParameter("query");
			
			if (sQuery) {
				prodFilter.push( new Filter("ProductName", FilterOperator.Contains, sQuery ));
			}
			
			var oList = this.byId("productList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(prodFilter);
		}
	});
});