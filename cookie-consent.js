(function(){
  var KEY = "michelastech_cookie_consent";
  function alreadyAnswered(){
    try{ return !!localStorage.getItem(KEY); }catch(e){ return true; }
  }
  function setConsent(value){
    try{ localStorage.setItem(KEY, value); }catch(e){}
    hide();
  }
  function hide(){
    var b = document.getElementById("cookieBanner");
    if(b) b.classList.remove("show");
  }
  function build(){
    if(alreadyAnswered()) return;
    var div = document.createElement("div");
    div.id = "cookieBanner";
    div.setAttribute("role","dialog");
    div.setAttribute("aria-label","Cookies");
    div.innerHTML =
      '<p>Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement (mémorisation de connexion, préférences). Aucun cookie publicitaire ni traceur tiers. En savoir plus : <a href="rgpd.html" style="color:var(--primary-light);">politique de confidentialité</a>.</p>' +
      '<div class="actions">' +
        '<button class="btn btn-primary" id="cookieAccept">Compris</button>' +
        '<a class="btn btn-link" href="rgpd.html">En savoir plus</a>' +
      '</div>';
    document.body.appendChild(div);
    requestAnimationFrame(function(){ div.classList.add("show"); });
    document.getElementById("cookieAccept").addEventListener("click", function(){ setConsent("accepted"); });
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
