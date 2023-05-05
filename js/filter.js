angular.module("home.filter", []).filter("searchFilter", function () {
  return function (cars, searchText) {
    if (searchText == "") {
      return cars;
    }
    let searchRegExp = new RegExp(searchText, "i");
    return cars.filter((car) => {
      return searchRegExp.test(car.make + car.model + car.price + car.type);
    });
  };
});
