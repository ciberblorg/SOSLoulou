//Fct formulaire
function validerFormulaire() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var chiffre = document.getElementById("chiffre").value;

    // Vérifier si les champs nom et prénom sont corrects
    if (nom.toLowerCase() === "poggi" && prenom.toLowerCase() === "lou" && chiffre == 13) {
      // Rediriger vers la page d'accueil
      window.location.href = "accueil.html";
    } else {
      // Afficher un message d'erreur
      alert("Tu es soit bête, soit pas la bonne personne");
    }
  }

//Envoi sur page avec toutes les émotions
function changementDePage(){
  window.location.href = "allEmotions.html";
}

//Création du compteur de jour depuis une date de base

//Version de base
/*window.onload = function(){
  //date de référence
  var startDate = new Date('2021-08-06');

  //fonction pour mettre à jour le compteur
  function updateCounter(){
    var currentDate = new Date();
    var timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());

    var years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    var months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    document.getElementById('counter').innerHTML = '&#x2665 On est ensemble depuis ' + years + ' ans, ' + months + ' mois, ' + days + ' jours, ' + hours + ' heures, ' + minutes + ' minutes, ' + seconds + ' secondes &#x2665';
  }

  //mettre à jour le compteur initialement
  updateCounter();

  //mettre à jour le compteur toutes les secondes
  setInterval(updateCounter, 1000);
};*/

//fonctionne si on décale la date
window.onload = function() {
  // date de référence
  var startDate = moment('2021-08-05 00:00:00', 'YYYY-MM-DD HH:mm:ss');

  // fonction pour mettre à jour le compteur
  function updateCounter() {
    var currentDate = moment().utcOffset('+00:00'); // spécifier le fuseau horaire ici
    var duration = moment.duration(currentDate.diff(startDate));

    var years = duration.years();
    var months = duration.months();
    var days = duration.days();
    var hours = duration.hours();
    var minutes = duration.minutes();
    var seconds = duration.seconds();

    document.getElementById('counter').innerHTML = '&#x2665; On est ensemble depuis ' + years + ' ans, ' + months + ' mois, ' + days + ' jours, ' + hours + ' heures, ' + minutes + ' minutes, ' + seconds + ' secondes &#x2665;';
  }

  // mettre à jour le compteur initialement
  updateCounter();

  // mettre à jour le compteur toutes les secondes
  setInterval(updateCounter, 1000);
};

//Script diapo, passer d'une iamge à une autre, pouvant inclure des photos
/*$(document).ready(function() {
  var slideshow = $('#slideshow');
  var slides = slideshow.find('.slide');

  $('#slideshow').slick({
    dots: false, // Afficher les indicateurs de diapositives
    arrows: false, // Masquer les flèches de navigation
    autoplay: false, // Désactiver le défilement automatique
    adaptiveHeight: true // Ajuster la hauteur du diaporama en fonction du contenu
  });

  //lance le auto play seulement si le slide est une vidéo
  slideshow.on('afterChange', function(event, slick, currentSlide) {
    // Vérifier si le slide actuel contient une vidéo
    var currentSlideType = slides.eq(currentSlide).data('type');
    if (currentSlideType === 'video') {
      // Récupérer l'élément vidéo dans le slide
      var video = slides.eq(currentSlide).find('video')[0];
      // Lancer la lecture automatique de la vidéo
      video.play();
    }
});
});*/

$(document).ready(function() {
  var slideshow = $('#slideshow');
  var slidesData = [
    {
      type: 'photo',
      src: 'img/diaPhoto1.jpg',
      description: 'Ma vision du bonheur c\'est ça, une compilation de nos moments (pense à slide sur le coté)'
    },
    {
      type: 'video',
      src: 'video/diaVideo12.mp4',
      description: 'Tes épisodes de la reporter Lou Poggi (part 1/4)'
    },
    {
      type: 'video',
      src: 'video/diaVideo14.mp4',
      description: '(part 2/4) full paumé mais tout va bien hein ?'
    },
    {
      type: 'video',
      src: 'video/diaVideo1.mp4',
      description: '(part 3/4) ça n\'en fini plus'
    },
    {
      type: 'video',
      src: 'video/diaVideo6.mp4',
      description: 'Ca se voit que je suis déserpéré ou pas ?'
    },
    {
      type: 'photo',
      src: 'img/diaPhoto4.jpg',
      description: 'Mais final, je veux juste être avec toi'
    },
    {
      type: 'video',
      src: 'video/diaVideo9.mp4',
      description: 'TON PTIT NEZ'
    },
    {
      type: 'video',
      src: 'video/diaVideo8.mp4',
      description: 'Juste pour nos bisous'
    },
    {
      type: 'video',
      src: 'video/diaVideo10.mp4',
      description: 'Mais le bonheur avec toi c\' est aussi nos cotés débile'
    },
    {
      type: 'video',
      src: 'video/diaVideo4.mp4',
      description: 'Et y en a beaucoup...'
    },
    {
      type: 'video',
      src: 'video/diaVideo5.mp4',
      description: 'J\'ai aussi mes moments tkt'
    },
    {
      type: 'video',
      src: 'video/diaVideo7.mp4',
      description: 'OUPS JE SUIS PAS CADREUR OK ?'
    },
    {
      type: 'photo',
      src: 'img/diaPhoto2.jpg',
      description: 'Bref, juste nous'
    },
    {
      type: 'video',
      src: 'video/diaVideo3.mp4',
      description: 'Pour toujours'
    },
    // Ajoutez ici d'autres diapositives (photos ou vidéos)
  ];

  // Créer les diapositives dynamiquement en fonction des données
  slidesData.forEach(function(slideData) {
    var slide = $('<div>').addClass('slide').attr('data-type', slideData.type);

    if (slideData.type === 'photo') {
      var img = $('<img>').attr('src', slideData.src);
      slide.append(img);
    } else if (slideData.type === 'video') {
      var video = $('<video>').attr('src', slideData.src).attr('controls', true).attr('preload', 'auto');
      slide.append(video);
    }

    var description = $('<p>').addClass('description').text(slideData.description);
    slide.append(description);

    slideshow.append(slide);
  });

  slideshow.slick({
    dots: false,
    arrows: false,
    autoplay: false,
    adaptiveHeight: true
  });

  slideshow.on('afterChange', function(event, slick, currentSlide) {
    var currentSlideType = slidesData[currentSlide].type;
    if (currentSlideType === 'video') {
      var video = slideshow.find('.slide[data-type="video"]').eq(currentSlide).find('video')[0];
      video.addEventListener('canplaythrough', function() {
        video.play();
      }, false);
    }
  });
});


