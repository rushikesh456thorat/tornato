const search = () =>{
     var tom=document.getElementById("search-box").value
    
    const searchbox = document.getElementById("search-box").value.toUpperCase();
    const storeitems = document.getElementById("book-shelf")
    const product= document.querySelectorAll(".bookInfoContainer")
    const productname= storeitems.getElementsByTagName("h3")

    for(var i=0;i<productname.length;i++)
    {
        let match =product[i].getElementsByTagName('h3')[0];

        if(match){
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox)>-1){
            product[i].style.display = "flex";
           }else{
               product[i].style.display="none";
           }
           
        }
    }
}