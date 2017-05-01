'use strict';

angular.module('arbitriumApp').factory('MarketingService', function() {

  var service = {};

  var questions = {

    sport: [
      {
        question: "Quel événement célèbre annuel est connu pour ses nombreuses publicités et ses shows?",
        options: ["Coupe Spengler", "Tour de France", "Super Bowl"],
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
        options: ["Mammut", "Reebok", "Columbia"],
        answer: 1
      },
      {
        question: "A qui appartient ce logo?",
        options: ["nadfdfvc", "basdfvc", "nbvc"],
        answer: 1,
        image: "http://smallbeerpress.com/wp-content/uploads/itunes.png"
      }
    ],
    food: [
      {
        question: "Quelle chaîne de restaurant a pour mascotte un clown jaune et rouge?",
        options: ["Burger King", "McDonald's", ""],
        answer: 1
      },
      {
        question: "Quel producteur de boisson a utilisé un célèbre dj suisse pour sa publicité?",
        options: ["asdfasd", "asdfasdf", "Coca Cola"],
        answer: 2,
        image: "http://smallbeerpress.com/wp-content/uploads/itunes.png"
      },
      {
        question: "Quelle marque a pour slogan 'What Else?'?",
        options: ["Nespresso", "asdfas", "adfa"],
        answer: 0
      },
      {
        question: "A quelle entreprise correspond cette illustration?",
        options: ["adsfasdf", "adsfaadfa", "KFC"],
        answer: 2,
        image: "http://smallbeerpress.com/wp-content/uploads/itunes.png"
      },
      {
        question: "Qui dit 'On n’a pas fini de vous faire aimer la viande'?",
        options: ["asdfasdfasd", "Charal", "asdf"],
        answer: 1
      }
    ],
    divertissement: [
      {
        question: "Quelle société utilise ce logo?",
        options: ["Vimeo", "Rutube", "YouTube"],
        answer: 2
      },
      {
        question: "A quelle console de jeux-vidéo correspond le slogan 'For the player'",
        options: ["Nintendo Switch", "XBOX One", "PS4"],
        answer: 2
      },
      {
        question: "Quelle marque a utilisé le clip de la chanson “Blurred Lines” (Robin Thike ft. T.I., Pharrell) pour promouvoir ses hauts-parleurs?",
        options: ["Beats by Dre", "UE Boom", "JBL"],
        answer: 0
      },
      {
        question: "Quel célèbre jeu en ligne a fait appel à des célébrités telles que Jean-Claude Van Damme, Mister-T ou encore Alexandre Astier pour sa publicité?",
        options: ["Counter Strike", "World of Warcraft", "League of Legend"],
        answer: 1
      },
      {
        question: "Quelle société utilise cetet lampe dans son logo?",
        options: ["Ikea", "Microsoft", "Pixar"],
        answer: 2
      }
    ],
    business: [
      {
        question: "Quelle célèbre entreprise de vente en ligne utilise une loutre comme mascotte?",
        options: ["QoQa", "Zalando", "Amazon"],
        answer: 0
      },
      {
        question: "Laquelle de ces entreprises représente une image familiale dans toutes ses publicités?",
        options: ["Groupe Mutuel", "Concordia", "Zurich Assurance"],
        answer: 1
      },
      {
        question: "Quelle entreprise n'utilise pas la télévision pour sa communication pour cette raison suivant : Notre public cible n’est pas de ceux qui passent du temps devant la télévision. ",
        options: ["Audi", "Mitsubishi", "Rolls Royce"],
        answer: 2
      },
      {
        question: "Quelle banque a pour slogan 'Grandir ensemble'?",
        options: ["UBS", "Allianz", "La Banque Cantonale"],
        answer: 2
      },
      {
        question: "Quelle entreprise utilise ce logo?",
        options: ["CSS", "Credit Suisse", "Manpower"],
        answer: 0,
        image: "http://smallbeerpress.com/wp-content/uploads/itunes.png"
      }
    ],
    technologie: [
      {
        question: "Parmi les propositions suivantes, quelle société utilise un oiseau comme symbole?",
        options: ["Twitter", "Facebook", "QoQa"],
        answer: 0
      },
      {
        question: "A quelle marque appartient ce logo?",
        options: ["Logitech", "Windows", "HP"],
        answer: 0,
        image: "http://smallbeerpress.com/wp-content/uploads/itunes.png"
      },
      {
        question: "Quelle célèbre fabricant de boisson à utiliser le domaine des sciences avec le saut de Félix Baumgartner depuis la stratosphère en 2012?",
        options: ["Pepsi", "Lipton", "Red Bull"],
        answer: 2
      },
      {
        question: "Quelle application utilise les publicités dans sa version gratuite et propose un abonnement payant pour les supprimer et profiter de plus de fonctionnalités?",
        options: ["Youtube", "Spotify", "iTunes"],
        answer: 1
      },
      {
        question: "De quelle entreprise cet homme est-il le fondateur??",
        options: ["BMW", "Novartis", "Apple"],
        answer: 2,
        image: "http://smallbeerpress.com/wp-content/uploads/itunes.png"
      }
    ],
    mode: [
      {
        question: "Quel est le nom de la marque du célèbre fabricant de montre appelé parfois “la marque à la couronne” ?",
        options: ["Longine", "Tissot", "Rolex"],
        answer: 2
      },
      {
        question: "Quelle personnalité célèbre a tourné pour des publicités H&M?",
        options: ["Johnny Depp", "George Clooney", "Will Smith"],
        answer: 2
      },
      {
        question: "Quelle marque utilise les films de “James Bond 007” pour promouvoir ses montres?",
        options: ["Flik Flak", "Omega", "Cartier"],
        answer: 1
      },
      {
        question: "Quelle célèbre marque utilise ce logo?",
        options: ["Lacoste", "Christian Louboutin", "Guess"],
        answer: 0,
        image: "http://smallbeerpress.com/wp-content/uploads/itunes.png"
      },
      {
        question: "A quelle marque appartient cette publicité",
        options: ["Chanel", "Dior", "Lanvin"],
        answer: 1,
        image: "http://smallbeerpress.com/wp-content/uploads/itunes.png"
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
  .controller('MarketingCtrl', function ($routeParams, MarketingService, $scope, $http, AuthService, store, $location) {
    $scope.userSchema = {};
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
          console.log('image:' + (q.image || ''));
          marketingCtrl.image = (q.image || 'images/Clear.gif');
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
        // parent.parent is ugly but since the selector does not work, we cannot change this (https://api.jquery.com/parent/)
        $('input[name=answer]:checked').parent().parent().addClass('wrong');

      }
      $('#options li:nth-child(' +  (marketingCtrl.answer+1) + ')').addClass('correct');

      marketingCtrl.answerMode = false;
      // !$('li').addClass( "correct" );
    };

    marketingCtrl.nextQuestion = function() {
      marketingCtrl.id++;
      marketingCtrl.questionNo++;
      marketingCtrl.image = null;
      marketingCtrl.getQuestion();

    }

    marketingCtrl.start();

    // Le code pour le patch commence ICI
    
    // Pour tester le patch, décommentez la ligne ci-dessous
    //marketingCtrl.quizzOver = true;

    if(marketingCtrl.quizzOver == true){

      var actualUserId = AuthService.userInf.id;
      $scope.userSchema.marketingComDone = true;
      console.log($scope.userSchema.marketingComDone);
      // Make the request to retrieve or create the user.
          $http({
            method: 'PATCH',
            url: 'http://hexagon-api-dev.comem.ch/users/'+ actualUserId,
            data: {"marketingComDone" : "true"},
            contentType: 'application/json'
          }).then(function(res) {

            console.log("AUTOP");

              $http({
                method: 'GET',
                url: 'http://hexagon-api-dev.comem.ch/users/'+ actualUserId,
              }).then(function(res) {

                if(res.data.codingDone && res.data.marketingComDone && res.data.businessManagementDone && res.data.multimediaDone){
                  console.log("Bravo, tu as fait les 5 epreuves d'entrainements !");
                }else{
                  console.log("Il te manque encore des entraienemtns");
                }
            });

            $location.path('kallax');
                      
          }).catch(function(res) {
            console.log("Ca marche pas ton patch");
            console.log(res);
            // If an error occurs, hide the loading message and show an error message.
            //MarketingCtrl.error = "Problème avec le post marketing done";
          });
     } 

});