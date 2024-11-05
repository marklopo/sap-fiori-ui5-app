sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem",
  ],
  function (Controller, FlattenedDataset, FeedItem) {
    "use strict";

    return Controller.extend(
      "app.customers.newproject.controller.ProductsChart",
      {
        onInit: function () {
          var oDataModel = new sap.ui.model.json.JSONModel(
            sap.ui.require.toUrl("app/customers/newproject/model/products.json")
          );
          var oDataModel2 = new sap.ui.model.json.JSONModel(
            sap.ui.require.toUrl(
              "app/customers/newproject/model/products2.json"
            )
          );

          var oChartContainer = this.getView().byId("chartContainer");
          var oChartContainer2 = this.getView().byId("chartContainer2");

          oChartContainer.setModel(oDataModel);
          oChartContainer2.setModel(oDataModel2);

          var oDataset = new FlattenedDataset({
            dimensions: [
              {
                axis: 1,

                name: "Month",
                value: "{Month}",
              },
            ],
            measures: [
              {
                name: "Inventory Turnover Ratio",
                value: "{Inventory Turnover Ratio}",
              },
            ],
            data: {
              path: "/",
            },
          });
          var oDataset2 = new FlattenedDataset({
            dimensions: [
              {
                name: "Product name",
                value: "{Product name}",
              },
            ],
            measures: [
              {
                name: "Quantity",
                value: "{Quantity}",
              },
            ],
            data: {
              path: "/",
            },
          });

          oChartContainer.setDataset(oDataset);
          oChartContainer2.setDataset(oDataset2);

          var oCategoryFeed2 = new FeedItem({
            uid: "categoryAxis",
            type: "Dimension",
            values: ["Product name"],
          });

          var oRevenueFeed2 = new FeedItem({
            uid: "valueAxis",
            type: "Measure",
            values: ["Quantity"],
          });
          var oCategoryFeed = new FeedItem({
            uid: "categoryAxis",
            type: "Dimension",
            values: ["Month"],
          });

          var oRevenueFeed = new FeedItem({
            uid: "valueAxis",
            type: "Measure",
            values: ["Inventory Turnover Ratio"],
          });

          oChartContainer.addFeed(oCategoryFeed);
          oChartContainer.addFeed(oRevenueFeed);
          oChartContainer2.addFeed(oCategoryFeed2);
          oChartContainer2.addFeed(oRevenueFeed2);
        },
      }
    );
  }
);
