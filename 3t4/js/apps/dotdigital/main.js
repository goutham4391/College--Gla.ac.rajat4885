validated=function(e){return valid=!0,e.forEach((function(e){""==e.value.trim()||void 0===e.value?(e.classList.add("validate"),valid=!1):e.classList.remove("validate")})),valid},onSubmit=function(){var e=document.getElementById("dd-country"),t=document.getElementById("dd-firstname"),d=document.getElementById("dd-lastname"),n=document.getElementById("dd-email"),a=document.getElementById("dd-year"),s=document.getElementById("dd-register-interest").dataset.campaignid,o=document.getElementById("dd-source"),r=document.getElementById("dd-addrid");return new Promise((function(l,c){if(validated([t,d,n,a])){var m=grecaptcha.getResponse(),u={firstname:t.value,lastname:d.value,email:n.value,year:a.value,country:e.value,career:document.getElementById("dd-career").value,programme:document.getElementById("dd-programme").value,subjects:document.getElementById("dd-subjects").value,addressid:r?parseInt(r.value):9082541,campaign:s,source:o?o.value:"",feestatus:e.options[e.selectedIndex].dataset.status,"g-recaptcha-response":m};console.log(u),fetch("/feeds/dotdigital/index.html",{method:"post",body:JSON.stringify(u)}).then((function(e){return e.json()})).then((function(e){console.log(e),"success"==e.message?(document.getElementById("dd-register-interest").parentNode.removeChild(document.getElementById("dd-register-interest")),document.getElementById("dd-thanks").style.display="block"):document.getElementById("dd-error").style.display="block"}))}else grecaptcha.reset();l()}))},document.addEventListener("DOMContentLoaded",(function(){document.getElementById("dd-register-interest").addEventListener("submit",(function(e){e.preventDefault(),grecaptcha.execute()}))}));