sap.ui.define(
  ["sap/ui/core/mvc/Controller"],

  function (Controller) {
    "use strict";

    return Controller.extend("app.customers.newproject.controller.Dash", {
      onCardReady: function (oCard) {
        this.oCard = oCard;
      },
      goToCustomersTable: function () {
        var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
        oRoute.navTo("RouteCustomers");
      },
      goToProductsTable: function () {
        var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
        oRoute.navTo("RouteProducts");
      },
    });
  }
);
