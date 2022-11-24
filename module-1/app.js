(
  function () {
      angular.module('LunchCheck',[])
      .controller('LunchCheckController', ctrl );
      ctrl.$inject = ['$scope'];
      function ctrl($scope) {
          $scope.items = '';
          $scope.message = '';
          $scope.green_opacity = '';
          $scope.red_opacity = '';

          $scope.check = function (){
              let arrayOfItems = $scope.items.split(',');
              let counter = 0;

              arrayOfItems.forEach((item) => {
                  if (item != false) {
                      counter++;
                  }
              });

              if (counter > 0 && counter < 4){
                  $scope.message = 'Enjoy!';
                  $scope.green_opacity = 'opaque';
                  $scope.red_opacity = '';
              }else if(counter >= 4){
                  $scope.message = 'Too much!';
                  $scope.red_opacity = 'opaque';
                  $scope.green_opacity = '';

              }else{
                  $scope.message = 'Please enter data first';
                  $scope.red_opacity = '';
                  $scope.green_opacity = '';
              }
          }
      }

  }
)()
