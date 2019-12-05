// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 44.852150, lng: 20.345020 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map') 
   , {
       zoom: 14,
       center: loc
   });
   // The marker, positioned at location
   const marker = new google.maps.Marker({ position: loc, map: map });
}


// Sticky menu background
window.addEventListener('scroll', function() {
  if (this.window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.8;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

sr.reveal('.btn1', { origin: 'top', distance: '70px', duration: 2000});