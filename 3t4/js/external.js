var runExternal = function(customisations){
    document.title = customisations.name;
    var breadcrumbs = document.getElementById('breadcrumbs'); //breadcrumbs;
  logotag = '<a href="'+customisations.url+'" aria-label="'+customisations.description+'" ><img style="padding:'+customisations.logo.padding+'" src="'+customisations.logo.src+'" alt="'+customisations.logo.description+'"></a>';
  var header = document.getElementById('header');
  var sectionheader = document.getElementById('section-header');
  var sectionnav = document.getElementById('section-navigation');
  if(customisations.hidesectionname === 'true'){sectionheader.parentNode.removeChild(sectionheader);} else{sectionheader.classList.add('external');}
  var content_container = document.getElementById('content-container');
  var footer = document.getElementById('footerContact');
  var az = document.getElementById('az'); //az links and search;
  
  var countcolumns = 0;
  az.parentNode.removeChild(az); //clear az
  header.classList.add('external');
  sectionnav.classList.add('external');
  content_container.classList.add('external');
  header.innerHTML = logotag; //insert logo
  
  //if nav then add it
  customisations.navigation ? header.insertAdjacentHTML("beforeend", '<span id="external-global-nav">'+customisations.navigation+'</span>') : false;
  customisations.breadcrumbs ? header.insertAdjacentElement('beforeend', breadcrumbs) : false;
  //first count columns
  customisations.footer.forEach(function(element){
      if(element.content.length > 0){
          countcolumns++
      }	
  });
  var columnwidth = 12/countcolumns;
  footer.innerHTML = "";
  customisations.footer.forEach(function(element){
      var column = document.createElement('div');
      column.classList.add('columns','large-'+columnwidth,'medium-'+columnwidth,'small-12');
      column.innerHTML = element.content;
      footer.appendChild(column);
  });
  //add mobile navigation
  
  
}
document.addEventListener("DOMContentLoaded", function() {runExternal(customisations);});