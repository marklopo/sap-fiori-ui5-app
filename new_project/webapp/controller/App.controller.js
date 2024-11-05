sap.ui.define(
  [
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/base/Log",
  ],
  function (MessageToast, Controller, Device, Log) {
    "use strict";

    return Controller.extend("app.customers.newproject.controller.App", {
      onInit: function () {
        this.getSplitAppObj().setHomeIcon({
          phone: "phone-icon.png",
          tablet: "tablet-icon.png",
          icon: "desktop.ico",
        });

        Device.orientation.attachHandler(this.onOrientationChange, this);
      },

      onExit: function () {
        Device.orientation.detachHandler(this.onOrientationChange, this);
      },

      onOrientationChange: function (mParams) {
        var sMsg =
          "Orientation now is: " +
          (mParams.landscape ? "Landscape" : "Portrait");
        MessageToast.show(sMsg, { duration: 5000 });
      },

      onPressNavToDetail: function () {
        this.getSplitAppObj().to(this.createId("detailDetail"));
      },

      onPressDetailBack: function () {
        this.getSplitAppObj().backDetail();
      },

      onPressMasterBack: function () {
        this.getSplitAppObj().backMaster();
      },

      onPressGoToMasterProducts: function () {
        this.getSplitAppObj().toMaster(this.createId("products"));
      },
      onPressGoToMasterCustomers: function () {
        this.getSplitAppObj().toMaster(this.createId("customers"));
      },
      onPressGoToMasterOrders: function () {
        this.getSplitAppObj().toMaster(this.createId("orders"));
      },

      onListItemPress: function (oEvent) {
        var sToPageId = oEvent
          .getParameter("listItem")
          .getCustomData()[0]
          .getValue();

        this.getSplitAppObj().toDetail(this.createId(sToPageId));
      },

      onPressModeBtn: function (oEvent) {
        var sSplitAppMode = oEvent
          .getSource()
          .getSelectedButton()
          .getCustomData()[0]
          .getValue();

        this.getSplitAppObj().setMode(sSplitAppMode);
        MessageToast.show(
          "Split Container mode is changed to: " + sSplitAppMode,
          { duration: 5000 }
        );
      },

      getSplitAppObj: function () {
        var result = this.byId("app1");
        if (!result) {
          Log.info("SplitApp object can't be found");
        }
        return result;
      },
      goToCustomersTable: function () {
        var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
        oRoute.navTo("RouteCustomers");
      },
      goToCustomersChart: function () {
        var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
        oRoute.navTo("RouteCustomersChart");
      },
      goToDash: function () {
        var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
        oRoute.navTo("RouteDash");
      },
      goToProductsTable: function () {
        var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
        oRoute.navTo("RouteProducts");
      },
      goToProductsChart: function () {
        var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
        oRoute.navTo("RouteProductsChart");
      },
      goToOrdersTable: function () {
        var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
        oRoute.navTo("RouteOrders");
      },
    });
  }
);
