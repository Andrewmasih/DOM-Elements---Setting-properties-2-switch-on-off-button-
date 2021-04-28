function switchOn ()  {
  document.getElementById ("bulb").src = "img/on.png";
  document.getElementById ("mainbody").style.backgroundColor="yellow";
  

}

function switchOff () {
  document.getElementById ("bulb").src = "img/off.png";
  document.getElementById ("mainbody").style.backgroundColor="black";
  
};

/* retrieve or set 'properties' such as 'innerText' & 'Style' */

/* SETTING PROPERTIES, when the DOM is loaded, it will generate properties for every standard attritube, just as we set the 'style' attritube we can GET or SET other attritube in the same way, so to change the SRC attritube for an <img> TAG, we could write:
document.getElementById("myImage").src = "img/newImage.png"; or we could change the 'href' attritube of anchor element in the same way */

/* in the example above, we changed the SRC attritube of our <img> element to switch a lightbulb ON or OFF */