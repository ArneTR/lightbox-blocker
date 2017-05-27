
(function(){

  Element.prototype.highlightMeAndClose = function(){
    var current_background = this.style['background-color'];
    if(current_background == undefined || current_background == '') current_background = '#fff';
    var el = this;
    setTimeout(function(){
      el.style['background-color'] = '#ffc';
    }, 200);
    setTimeout(function(){
      el.style['background-color'] = current_background;
    }, 400);
    setTimeout(function(){
      el.style['background-color'] = '#ffc';
    }, 600);
    setTimeout(function(){
      el.style['background-color'] = current_background;
    }, 800);
    setTimeout(function(){
      el.style.display = 'none';
      console.log('[Lightbox Blocker] EL Removed');
    }, 5000);
  }

  console.log('[Lightbox Blocker] Lighbox Blocker content script injected');
  
  if(document.location.href.indexOf('https://www.facebook.com') === 0
    &&
    document.getElementById('pagelet_growth_expanding_cta') !== null
    &&
    document.getElementById('pagelet_growth_expanding_cta') !== undefined
  ) {
    console.log('[Lightbox Blocker] Found facebook lightbox');
    document.getElementById('pagelet_growth_expanding_cta').highlightMeAndClose();
  }

  if(document.location.href.indexOf('https://www.facebook.com') === 0
    &&
    document.getElementById('dialog_0') !== null
    &&
    document.getElementById('dialog_0') !== undefined
  ) {
    console.log('[Lightbox Blocker] Found facebook login force dialog');
    document.getElementById('dialog_0').highlightMeAndClose();
  }

})();







