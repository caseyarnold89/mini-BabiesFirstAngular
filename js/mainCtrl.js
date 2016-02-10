var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
    $scope.newFriend = '';
    
    $scope.friends = ['Lacey', 'Andrew', 'Matt', 'Braxton'];
    
    $scope.addFriend = function() {
        $scope.friends.push($scope.newFriend);
    }
});

