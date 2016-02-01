'use strict';
 angular.module('wivApp')

        .controller('UserController', ['$scope', function($scope) {

            $scope.user = {
                            firstName: '',
                            lastName: '',
                            shortName: '',
                            photo: 'img/emma.jpg',
                            bkg: ''
                          };

            $scope.noBkg = function() {
              $scope.user.bkg = '';
            };

            $scope.bkg = function() {
              $scope.user.bkg = 'img/visuel.jpg';
            };
        }])

        .controller('AnnouncementController', ['$scope', function($scope) {

          $scope.moiAussi = function(announcement) {
                      console.log(announcement);
                      if (announcement.voted === 0)
                      {
                        announcement.interested++;
                        announcement.voted = 1;
                      }
                      else
                      {
                        announcement.interested--;
                        announcement.voted = 0;
                      }
          };

        }])
;