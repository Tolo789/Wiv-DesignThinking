'use strict';

 angular.module('wivApp')

 	// you can change to service instead of factory
        .factory('menuFactory', function() {

	// if you want to use the factory as a service just delete
	// this line and the return line, then use this. insteand of
	// all other menufac.
        	var menufac = {}; 

          var annnouncement = [
                                {
                                    author: 'Marie A.',
                                    userPhoto: 'img/marie.jpg',
                                    interested: 32,
                                    voted: 0,
                                    description: 'Hello tout le monde, des gens chaud pour courrir ?'
                                },
                                {
                                    author: 'Luc C.',
                                    userPhoto: 'img/alberto.png',
                                    interested: 1,
                                    voted: 0,
                                    description: 'Bonjour à tous ! J\'ai du mal avec les tableau croisè dynamique. Qui veut bien m\'aider ?'
                                },  
                                {
                                    author: 'Emma W.',
                                    userPhoto: 'img/emma.jpg',
                                    interested: 127,
                                    voted: 0,
                                    description: 'Salut les gars (et filles!),qui peut m\'expliquer comment marches l\'imprimante ?'
                                }


          ]

            menufac.getDishes = function(){
            	return annnouncement;
            };

            menufac.getDish = function(index){
            	return annnouncement[index];
            };

            return annnouncement;

        })
;