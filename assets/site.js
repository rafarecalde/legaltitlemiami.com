(function(){var b=document.querySelector('.menu-toggle'),n=document.querySelector('nav.main');if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
var f=document.getElementById('order-form');if(f){f.addEventListener('submit',function(e){var w=f.querySelector('input[name="website"]');if(w&&w.value){e.preventDefault();return false}})}
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();})();
