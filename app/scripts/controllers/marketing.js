'use strict';

angular.module('arbitriumApp').factory('MarketingService', function() {

  var service = {};

  var questions = {

    sport: [
      {
        question: "Quel événement célèbre annuel est connu pour ses nombreuses publicités et ses shows?",
        options: ["Igfsd", "dfgs", "Super Bowl"],
        answer: 2
      },
      {
        question: "Quelle marque de sport a pour slogan “Just do it”?",
        options: ["Nike", "Adidas", "Fila"],
        answer: 0
      },
      {
        question: "Quel sportif était l’acteur principal des machines à café Jura?",
        options: ["Alexander Frei", "Laure Manaudou", "Roger Federer"],
        answer: 2
      },
      {
        question: "Quelle marque sponsorise la 'Spartan Race'?",
        options: ["Mammut", "Reebok", "fsd"],
        answer: 1
      },
      {
        question: "A qui appartient ce logo?",
        options: ["adf dfa", "adfasdf adsfell", "asdfadfa"],
        answer: 1,
        image: "http://smallbeerpress.com/wp-content/uploads/itunes.png"
      }
    ],
    food: [
      {
        question: "Food ?",
        options: ["Igfsd", "dfgs", "Super Bowl"],
        answer: 2
      },
      {
        question: "Quelle marque de sport a pour slogan “Just do it”?",
        options: ["Nike", "Adidas", "Fila"],
        answer: 0
      },
      {
        question: "Quel sportif était l’acteur principal des machines à café Jura?",
        options: ["Alexander Frei", "Laure Manaudou", "Roger Federer"],
        answer: 2
      },
      {
        question: "Quelle marque sponsorise la 'Spartan Race'?",
        options: ["Mammut", "Reebok", "fsd"],
        answer: 1
      },
      {
        question: "sgfd?",
        options: ["adf dfa", "adfasdf adsfell", "asdfadfa"],
        answer: 1
      }
    ],
    divertissement: [
      {
        question: "Divertissement",
        options: ["Igfsd", "dfgs", "Super Bowl"],
        answer: 2
      },
      {
        question: "Quelle marque de sport a pour slogan “Just do it”?",
        options: ["Nike", "Adidas", "Fila"],
        answer: 0
      },
      {
        question: "Quel sportif était l’acteur principal des machines à café Jura?",
        options: ["Alexander Frei", "Laure Manaudou", "Roger Federer"],
        answer: 2
      },
      {
        question: "Quelle marque sponsorise la 'Spartan Race'?",
        options: ["Mammut", "Reebok", "fsd"],
        answer: 1
      },
      {
        question: "sgfd?",
        options: ["adf dfa", "adfasdf adsfell", "asdfadfa"],
        answer: 1
      }
    ],
    business: [
      {
        question: "Business",
        options: ["Igfsd", "dfgs", "Super Bowl"],
        answer: 2
      },
      {
        question: "Quelle marque de sport a pour slogan “Just do it”?",
        options: ["Nike", "Adidas", "Fila"],
        answer: 0
      },
      {
        question: "Quel sportif était l’acteur principal des machines à café Jura?",
        options: ["Alexander Frei", "Laure Manaudou", "Roger Federer"],
        answer: 2
      },
      {
        question: "Quelle marque sponsorise la 'Spartan Race'?",
        options: ["Mammut", "Reebok", "fsd"],
        answer: 1
      },
      {
        question: "sgfd?",
        options: ["adf dfa", "adfasdf adsfell", "asdfadfa"],
        answer: 1
      }
    ],
    technologie: [
      {
        question: "Technologie",
        options: ["Igfsd", "dfgs", "Super Bowl"],
        answer: 2
      },
      {
        question: "Quelle marque de sport a pour slogan “Just do it”?",
        options: ["Nike", "Adidas", "Fila"],
        answer: 0
      },
      {
        question: "Quel sportif était l’acteur principal des machines à café Jura?",
        options: ["Alexander Frei", "Laure Manaudou", "Roger Federer"],
        answer: 2
      },
      {
        question: "Quelle marque sponsorise la 'Spartan Race'?",
        options: ["Mammut", "Reebok", "fsd"],
        answer: 1
      },
      {
        question: "sgfd?",
        options: ["adf dfa", "adfasdf adsfell", "asdfadfa"],
        answer: 1
      }
    ],
    mode: [
      {
        question: "Mode",
        options: ["Igfsd", "dfgs", "Super Bowl"],
        answer: 2
      },
      {
        question: "Quelle marque de sport a pour slogan “Just do it”?",
        options: ["Nike", "Adidas", "Fila"],
        answer: 0
      },
      {
        question: "Quel sportif était l’acteur principal des machines à café Jura?",
        options: ["Alexander Frei", "Laure Manaudou", "Roger Federer"],
        answer: 2
      },
      {
        question: "Quelle marque sponsorise la 'Spartan Race'?",
        options: ["Mammut", "Reebok", "fsd"],
        answer: 1
      },
      {
        question: "sgfd?",
        options: ["adf dfa", "adfasdf adsfell", "asdfadfa"],
        answer: 1
      }
    ]
  };

      service.getQuestion = function(category, id) {
        if(id < questions[category].length) {
          return questions[category][id];
        } else {
          return false;
        }
      };

  return service;
});


/**
 * @ngdoc function
 * @name arbitriumApp.controller:AbritriumCtrl
 * @description
 * # ArbitriumCtrl
 * Controller of the arbitriumApp
 */
angular.module('arbitriumApp')
  .controller('MarketingCtrl', function ($routeParams, MarketingService, $scope, $http) {
    $scope.marketingCtrl = {};
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var marketingCtrl = this;

    marketingCtrl.start = function() {
      marketingCtrl.id = 0;
      marketingCtrl.questionNo = 1;
      marketingCtrl.score = 0;
      marketingCtrl.quizzOver = false;
      marketingCtrl.inProgress = true;
      marketingCtrl.answerMode = true;
      marketingCtrl.getQuestion();
    };

    marketingCtrl.reset = function() {
      marketingCtrl.inProgress = false;
      marketingCtrl.score = 0;
    }

    marketingCtrl.getQuestion = function() {
      //console.log($routeParams.category);
      if ($routeParams.category) {

        var q = MarketingService.getQuestion($routeParams.category, marketingCtrl.id);
        if(q) {
          marketingCtrl.question = q.question;
          marketingCtrl.options = q.options;
          marketingCtrl.answer = q.answer;
          marketingCtrl.answerMode = true;
          //console.log(marketingCtrl.answerMode);
        } else {
          marketingCtrl.quizzOver = true;
        }
      }
    };

    marketingCtrl.checkAnswer = function() {
      console.log($('input[name=answer]:checked').length);
      if(!$('input[name=answer]:checked').length) return;
      var ans = $('input[name=answer]:checked').val();

      if(ans == marketingCtrl.options[marketingCtrl.answer]) {
        marketingCtrl.score++;
        marketingCtrl.correctAns = true;
      } else {
        marketingCtrl.correctAns = false;
      }

      marketingCtrl.answerMode = false;
      // !$('li').addClass( "correct" );
    };

    marketingCtrl.nextQuestion = function() {
      marketingCtrl.id++;
      marketingCtrl.questionNo++;
      marketingCtrl.getQuestion();

    }

    marketingCtrl.start();


<<<<<<< HEAD
    if(marketingCtrl.quizzOver == true){
      $scope.marketingCtrl = sexVal;


    }

});

=======
});
>>>>>>> 3168a5ff2bdc8ad5d5d61371a4e2db24c04359c9
