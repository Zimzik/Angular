/*let model = {
  user: "User1",
  courses: [{name: "HTML&CSS", description: "Some course", date: "22.12.2016", passed: true},
    {name: "JS Essentials", description: "Some course", date: "21.05.2014", passed: true},
    {name: "JS Advanced", description: "Some course", date: "09.08.2016", passed: true},
    {name: "Angular JS", description: "Some course", date: "17.10.2016", passed: false}]
};*/
let model = (function() {
  let data = [];
  var temp = window.localStorage["courses"]

  if (!temp) data = [];
  else data = JSON.parse(temp);
  console.log(data);
  return data;
  
})();


angular.module("coursesListApp", [])
  .controller("coursesListCtrl", function ($scope) {
    $scope.data = {};
    $scope.data.courses = model;
  

    $scope.addCourse = function () {
      $scope.data.courses.push({
        name: $scope.courseName,
        description: $scope.description,
        date: $scope.date,
        passed: $scope.passed
      });
      
      window.localStorage["courses"] = JSON.stringify($scope.data.courses, function (key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val
        });

      $scope.courseName = "";
      $scope.description = "";
      $scope.date = "";
      $scope.passed = "";
    }
    
    $scope.clearList = function() {
      $scope.data.courses = [];
      delete window.localStorage["courses"];
    }
    
    $scope.showText = function(passed) {
      passed = passed ? "Yes" : "No";
      return passed;
    }
  });

