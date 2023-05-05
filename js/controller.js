angular
  .module("cars.controller", [])

  .controller("myCtrl", function ($scope,  $rootScope) {
    
      $scope.cars = $rootScope.cars;
      
  
  })

  .controller("carCtrl", function ($scope, $rootScope) {
    $scope.cars = $rootScope.carItem;
    $scope.lastClickedButton = "";
    $scope.sedan = () => {
      $scope.lastClickedButton = "sedan()";
      $scope.cars = $rootScope.carItem.filter((car) => {
        return car.type == "Sedan";
      });
    };
    $scope.sports = () => {
      $scope.lastClickedButton = "sports()";
      $scope.cars = $rootScope.carItem.filter((car) => {
        return car.type == "Sports Car";
      });
    };
    $scope.suv = () => {
      $scope.lastClickedButton = "suv()";
      $scope.cars = $rootScope.carItem.filter((car) => {
        return car.type == "SUV"
      });
    };
    $scope.reset = () => {
      $scope.lastClickedButton = "";
      $scope.cars = $rootScope.carItem;
    };
  })

  .controller("descCtrl", function ($scope, $location, $rootScope) {
    var path = $location.path().split("/").pop();
    $scope.car = $rootScope.carItem[path - 1];
  })

  .controller("dashCtrl", function ($scope, $rootScope, $routeParams, $window) {
    $scope.cars = $rootScope.carItem;
    var path = $routeParams.id;
    console.log($rootScope.carItem);
    $scope.lastClickedButton = "";
    $scope.delete = (id) => {
      let idx = $rootScope.carItem.findIndex((carItem) => {
        return carItem.id == id;
      });
      $rootScope.carItem.splice(idx, 1);
      console.log("hrlokpjji");
    };
    $scope.sedan = () => {
      $scope.lastClickedButton = "sedan()";

      $scope.cars = $rootScope.carItem.filter((car) => {
        return car.type == "Sedan";
      });
    };
    $scope.sports = () => {
      $scope.lastClickedButton = "sports()";
      $scope.cars = $rootScope.carItem.filter((car) => {
        return car.type == "Sports Car";
      });
    };
    $scope.suv = () => {
      $scope.lastClickedButton = "suv()";
      $scope.cars = $rootScope.carItem.filter((car) => {
        return car.type == "SUV";
      });
    };
    $scope.reset = () => {
      $scope.lastClickedButton = "";

      $scope.cars = $rootScope.carItem;
    };
    $scope.reloadPage = function () {
      $window.location.reload();
    };
    $scope.goToDescription = function (id) {
      // Redirect to the description page with the car id in the URL
      $location.url(`/description/${id}`)
    };
  })

  .controller("editCtrl", function ($scope, $rootScope, $routeParams) {
    var path = $routeParams.id;
    $scope.car = $rootScope.carItem[path - 1];

    $scope.submit = () => {
      $scope.car = $rootScope.carItem[path - 1];
      $scope.carObj = {
        id: $scope.car.id,
        make: $scope.make,
        model: $scope.model,
        type: $scope.type,
        year: $scope.year,
        color: $scope.color,
        price: $scope.price,
        image: $scope.car.image,
      };
      $rootScope.carItem[path - 1] = $scope.carObj;
      console.log($rootScope.carItem);
    };
  })

  .controller("addCtrl", function ($scope, $rootScope, $location) {
    $scope.options = $rootScope.carType;
    $scope.add = () => {
      $scope.carObj = {
        id: $rootScope.carItem.length + 1,
        make: $scope.make,
        model: $scope.model,
        type: $scope.type,
        year: $scope.year,
        color: $scope.color,
        price: $scope.price,
        image: $scope.image,
      };
      $rootScope.carItem.push($scope.carObj);
      console.log($rootScope.carItem);
      alert("new product added succesfuly........");

      $location.path("/");
    };
  })
  .controller("categoryCtrl", function ($scope, $rootScope) {
    $scope.model = $rootScope.categories;
    $scope.categoryInput = "";
    $scope.addCategory = function () {
      var idx = $scope.model.category.length;
      var updateObj = {
        id: idx,
        type: $scope.categoryInput,
      };
      $scope.model.category.push(updateObj);
      $scope.categoryInput = "";
    };

    $scope.getTemplate = function (category) {
      if (category.id === $scope.model.selected.id) return "edit";
      else return "display";
    };

    $scope.editCategory = function (category) {
      $scope.model.selected = angular.copy(category);
    };

    $scope.deleteCategory = function (id) {
      let idx = $scope.model.category.findIndex((category) => {
        return category.id == id;
      });

      $rootScope.categories.category.splice(idx, 1);
    };
    $scope.saveCategory = function (idx) {
      $scope.model.category[idx] = angular.copy($scope.model.selected);
      $scope.reset();
    };

    $scope.reset = function () {
      $scope.model.selected = {};
    };
  })
