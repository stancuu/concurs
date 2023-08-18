document.addEventListener("DOMContentLoaded", function() {
    // Adaugă un eveniment de click pe linkul "Location"
    var locationLink = document.getElementById("location-link");
    locationLink.addEventListener("click", function() {
      // Redirecționează utilizatorul către harta cu locația specifică
      window.location.href = "https://www.google.com/maps/place/Iulius+Mall+Timisoara";
    });
  });
  var Home = document.getElementById("acasa");
  Home.addEventListener("click", function() {
        var a= document.getElementById("navbar");
        var b= document.getElementById("prezentare");
        var c= document.getElementById("selectie");
        var d= document.getElementById("sale"); 
        var e= document.getElementById("sale1"); 
        var f= document.getElementById("sale2"); 
        var g= document.getElementById("mh1"); 
        var h= document.getElementById("poze");
        var k= document.getElementById("blog1"); 

        a.style.display="blocked";
        b.style.display="block";
        c.style.display="block";
        d.style.display="block";
        e.style.display="block";
        f.style.display="block";
        g.style.display="block";
        h.style.display="block";
        k.style.display="none";

  });

  var Shop = document.getElementById("shop");
  Shop.addEventListener("click", function() {
        var a= document.getElementById("navbar");
        var b= document.getElementById("prezentare");
        var c= document.getElementById("selectie");
        var d= document.getElementById("sale"); 
        var e= document.getElementById("sale1"); 
        var f= document.getElementById("sale2"); 
        var g= document.getElementById("mh1"); 
        var h= document.getElementById("poze"); 
        var k= document.getElementById("blog1"); 

        a.style.display="blocked";
        b.style.display="none";
        c.style.display="none";
        d.style.display="block";
        e.style.display="block";
        f.style.display="block";
        g.style.display="block";
        h.style.display="none";
        k.style.display="none";

  });

  var blogul = document.getElementById("blog");
  blogul.addEventListener("click", function() {
        var a= document.getElementById("navbar");
        var b= document.getElementById("prezentare");
        var c= document.getElementById("selectie");
        var d= document.getElementById("sale"); 
        var e= document.getElementById("sale1"); 
        var f= document.getElementById("sale2"); 
        var g= document.getElementById("mh1"); 
        var h= document.getElementById("poze"); 
        var k= document.getElementById("blog1"); 
      

        a.style.display="blocked";
        b.style.display="none";
        c.style.display="none";
        d.style.display="none";
        e.style.display="none";
        f.style.display="none";
        g.style.display="none";
        h.style.display="none";
        k.style.display="blocked";
      
        
        

  });

 




 




  var Abtus = document.getElementById("abtus");
  Abtus.addEventListener("click", function() {
        var a= document.getElementById("navbar");
        var b= document.getElementById("prezentare");
        var c= document.getElementById("selectie");
        var d= document.getElementById("sale"); 
        var e= document.getElementById("sale1"); 
        var f= document.getElementById("sale2"); 
        var g= document.getElementById("mh1"); 
        var h= document.getElementById("poze"); 
        var k= document.getElementById("blog1"); 
        var l= document.getElementById("contact"); 

        a.style.display="blocked";
        b.style.display="none";
        c.style.display="none";
        d.style.display="none";
        e.style.display="none";
        f.style.display="none";
        g.style.display="none";
        h.style.display="none";
        k.style.display="none";
        l.style.display="blocked";
  })
   
   
       