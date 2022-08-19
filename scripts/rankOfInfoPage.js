let allNamesElm = document.getElementById("list-artical-like")
const articalNameInPage = document.querySelector(".heading-of-content").innerText.toUpperCase();





let onlyGiveTwo = new Boolean();
let n = new Int16Array();
n=0;

onlyGiveTwo = true;
function setErrorDisplay(){
  
}

$.ajax({
    // http may be used instead of https if required
    url: "https://sheetlabs.com/MRE/tornatoDatabase",
    crossDomain : true,
  })
  .done(function(data) {
    if (data.length == 0) {
        setErrorDisplay()
      return;
    }
    $.each(data, function(key, value) {
      
        console.log(articalNameInPage)
     
        
     if(articalNameInPage != value.articalname.toUpperCase() )
      {  let infoDiv= document.createElement("div")


       let anchor = document.createElement("a")
       anchor.href= value.link
       

       let articalSpan = document.createElement("span")
       articalSpan.display="inline"


       let artical = document.createElement("h2")
       let articalNode = document.createTextNode(value.articalname)
       artical.appendChild(articalNode)
       artical.id="articalName"
       
       let date = document.createElement("p")
       let dateNode =  document.createTextNode(value.date)
       date.appendChild(dateNode)

       let dot = document.createElement("p")
       let dotNode =  document.createTextNode("•")
       dot.appendChild(dotNode)
       
       let readTime = document.createElement("p")
       let readTimeNode= document.createTextNode(value.readtime + " min read")
       readTime.appendChild(readTimeNode)

       let description = document.createElement("p")
       let descriptionNode = document.createTextNode(value.description)
       description.appendChild(descriptionNode)
      
       

      
       
       let image = document.createElement("img")
       image.src= new URL(value.imagesource)
       
       
       let articalBox = document.createElement("div")
       articalBox.id = "artical-box"
       articalBox.classList.add("artical-box")
       
       infoDiv.appendChild(date)
       infoDiv.appendChild(dot)
       infoDiv.appendChild(readTime)
 
       articalBox.appendChild(articalSpan)

       articalSpan.appendChild(artical)
       articalSpan.appendChild(description)
       articalSpan.appendChild(infoDiv)
      
       anchor.appendChild(articalSpan)
       anchor.appendChild(image)

       
       articalBox.appendChild(anchor)
       
      
       allNamesElm.appendChild(articalBox)
    }else
    {
        
    }
    });
  })
  .fail(function() {
    setErrorDisplay()
  });