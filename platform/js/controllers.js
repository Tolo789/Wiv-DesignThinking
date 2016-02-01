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

        .controller('CompetencesController', ['$scope', function($scope) {

              $scope.competences = [
                                      {
                                        active: 0,
                                        nom: 'Excel'
                                      },
                                      {
                                        active: 0,
                                        nom: 'Photoshop'
                                      },
                                      {
                                        active: 0,
                                        nom: 'Word'
                                      },
                                      {
                                        active: 0,
                                        nom: 'PowerPoint'
                                      },
                                      {
                                        active: 0,
                                        nom: 'Marketing'
                                      }
                                    ];

              $scope.select = function(item) {
                      if (item.active === 0)
                      {
                        item.active = 1;
                      }
                      else
                      {
                        item.active = 0;
                      }
          };

        }])

        
        .controller('InteretsController', ['$scope', function($scope) {

              $scope.interets = [
                                      {
                                        active: 0,
                                        nom: 'Cuisine'
                                      },
                                      {
                                        active: 0,
                                        nom: 'Jeux vidéo'
                                      },
                                      {
                                        active: 0,
                                        nom: 'Yoga'
                                      },
                                      {
                                        active: 0,
                                        nom: 'Running'
                                      },
                                      {
                                        active: 0,
                                        nom: 'Bricolage'
                                      },
                                      {
                                        active: 0,
                                        nom: 'Cinema'
                                      }
                                    ];

              $scope.select = function(item) {
                      if (item.active === 0)
                      {
                        item.active = 1;
                      }
                      else
                      {
                        item.active = 0;
                      }
              };

          }])

        .controller('AddCompCtrl', ['$scope', function($scope) {

              $scope.tmp = {
                            active: 1,
                            nom: ''
              };

              $scope.submitSkill = function () {

                // Step 3: Push your comment into the dish's comment array
                //$scope.dish.comments.push("Your JavaScript Object holding the comment");
                $scope.competences.push($scope.tmp);

                //Step 4: reset your form to pristine
                $scope.compForm.$setPristine();
                //Step 5: reset your JavaScript object that holds your comment
                $scope.tmp = {
                                  active:1,
                                  nom: ''
                                };
              };

        }])

        .controller('AddIntCtrl', ['$scope', function($scope) {

              $scope.tmp = {
                            active: 1,
                            nom: ''
              };

              $scope.submitPassions = function () {

                // Step 3: Push your comment into the dish's comment array
                //$scope.dish.comments.push("Your JavaScript Object holding the comment");
                $scope.interets.push($scope.tmp);

                //Step 4: reset your form to pristine
                $scope.intForm.$setPristine();
                //Step 5: reset your JavaScript object that holds your comment
                $scope.tmp = {
                                  active:1,
                                  nom: ''
                                };
              };

        }])

;