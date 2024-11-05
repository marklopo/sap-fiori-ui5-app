sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem",
  ],
  function (Controller, FlattenedDataset, FeedItem) {
    "use strict";

    return Controller.extend(
      "app.customers.newproject.controller.CustomersChart",
      {
        onInit: function () {
          var oDataModel = new sap.ui.model.json.JSONModel(
            sap.ui.require.toUrl(
              "app/customers/newproject/model/customers.json"
            )
          );
          var oDataModel2 = new sap.ui.model.json.JSONModel(
            sap.ui.require.toUrl(
              "app/customers/newproject/model/customers2.json"
            )
          );

          var oChartContainer = this.getView().byId("chartContainer3");
          var oChartContainer2 = this.getView().byId("chartContainer4");

          oChartContainer.setModel(oDataModel);
          oChartContainer2.setModel(oDataModel2);

          var oDataset = new FlattenedDataset({
            dimensions: [
              {
                axis: 1,

                name: "Country",
                value: "{Country}",
              },
            ],
            measures: [
              {
                name: "Number of customers",
                value: "{Number of customers}",
              },
            ],
            data: {
              path: "/",
            },
          });
          var oDataset2 = new FlattenedDataset({
            dimensions: [
              {
                name: "City",
                value: "{City}",
              },
            ],
            measures: [
              {
                name: "Number of Customers",
                value: "{Number of Customers}",
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
            values: ["City"],
          });

          var oRevenueFeed2 = new FeedItem({
            uid: "valueAxis",
            type: "Measure",
            values: ["Number of Customers"],
          });
          var oCategoryFeed = new FeedItem({
            uid: "categoryAxis",
            type: "Dimension",
            values: ["Country"],
          });

          var oRevenueFeed = new FeedItem({
            uid: "valueAxis",
            type: "Measure",
            values: ["Number of customers"],
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
