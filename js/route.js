var app = angular.module("cars", ["ngRoute","cars.controller","home.filter"]);
app.config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
  
        .when("/", {
          templateUrl: "views/cars.html",
        })
        .when("/dashboard", {
          templateUrl: "views/dashboard.html",
        })
        .when("/cars", {
          templateUrl: "views/cars.html",
        })
        .when("/about", {
          templateUrl: "views/about.html",
        })
        .when("/contact", {
          templateUrl: "views/contact.html",
        })
        .when("/description/:id", {
          templateUrl: "views/description.html",
        })
        .when("/edit/:id", {
          templateUrl: "views/edit.html",
        })
        .when("/add", {
          templateUrl: "views/add.html",
        })
        .when("/addcategory", {
          templateUrl: "views/addcategory.html",
          controller: "categoryCtrl"
        });
    },
  ]);
  app.run(function($http,$rootScope){
    $http.get("/json/cars.json").then(function (response) {
      $rootScope.carItem = response.data.cars;
     
    });
    $http.get("json/type.json").then(function (response){
      $rootScope.categories = {
        category: response.data,
        
        selected: {},
      };
      console.log($rootScope.categories);
    })
  })