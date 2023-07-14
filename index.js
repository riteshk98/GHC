
document.getElementById('track-menu').addEventListener('click', function () {
    document.getElementById('track').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.querySelector('.nav__menu a[href*=' + "track" + ']').classList.add('active-link');
    document.querySelector('.nav__menu a[href*=' + "home" + ']').classList.remove('active-link');
    document.querySelector('.nav__menu a[href*=' + "search" + ']').classList.remove('active-link');
    document.querySelector('.nav__menu a[href*=' + "about" + ']').classList.remove('active-link');
  });
  document.getElementById('home-menu').addEventListener('click', function () {
    document.getElementById('home').style.display = 'block';
    document.getElementById('track').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.querySelector('.nav__menu a[href*=' + "track" + ']').classList.remove('active-link');
    document.querySelector('.nav__menu a[href*=' + "home" + ']').classList.add('active-link');
    document.querySelector('.nav__menu a[href*=' + "search" + ']').classList.remove('active-link');
    document.querySelector('.nav__menu a[href*=' + "about" + ']').classList.remove('active-link');
  });
  document.getElementById('search-menu').addEventListener('click', function () {
    document.getElementById('search').style.display = 'block';
    document.getElementById('track').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.querySelector('.nav__menu a[href*=' + "track" + ']').classList.remove('active-link');
    document.querySelector('.nav__menu a[href*=' + "home" + ']').classList.remove('active-link');
    document.querySelector('.nav__menu a[href*=' + "search" + ']').classList.add('active-link');
    document.querySelector('.nav__menu a[href*=' + "about" + ']').classList.remove('active-link');
  });
  document.getElementById('about-menu').addEventListener('click', function () {
    document.getElementById('track').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('about').style.display = 'block';
    document.querySelector('.nav__menu a[href*=' + "track" + ']').classList.remove('active-link');
    document.querySelector('.nav__menu a[href*=' + "home" + ']').classList.remove('active-link');
    document.querySelector('.nav__menu a[href*=' + "search" + ']').classList.remove('active-link');
    document.querySelector('.nav__menu a[href*=' + "about" + ']').classList.add('active-link');
  });