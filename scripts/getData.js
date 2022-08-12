        let allNamesElm = document.getElementById("book-shelf")
		let loaderElm = document.getElementById("loader")
		let errorMessageElm = document.getElementById("errorMessage")
		
		function setErrorDisplay(){
			loaderElm.style.display = "none"
			allNamesElm.style.display = "none"
			errorMessageElm.style.display = "flex"
		}
		
		 $.ajax({
			// http may be used instead of https if required
			url: "https://sheetlabs.com/MRE/bookdata",
			crossDomain : true,
		  })
		  .done(function(data) {
			if (data.length == 0) {
				setErrorDisplay()
			  return;
			}
			$.each(data, function(key, value) {
			   console.log(value.imagesource);

			   loaderElm.style.display = "none"
			   allNamesElm.style.display = "block"
			   errorMessageElm.style.display = "none"

			   let anchor=document.createElement("a")
			   anchor.href= value.downloadlink
			   anchor.target="_blank"

			   let rowInfoDiv = document.createElement("span")
			   rowInfoDiv.classList.add("bookInfoContainer")
			   rowInfoDiv.style="margin-top:5px ;"
			   rowInfoDiv.display="inline"
			   
			   
			   
			   let imageOfBook = document.createElement("img")
			   imageOfBook.src = new URL(value.imagesource)



			   let rowName = document.createElement("h3")
			   let rowNameNode = document.createTextNode(value.booktitle)
			   rowName.appendChild(rowNameNode)
			   rowName.id="book-title"
			   rowName.style="margin: 5px;"
			   rowName.title="Book Title"
			   

			   let bookTitle = document.createElement("h4")
			   let bookTitleNode = document.createTextNode(value.author)
			   bookTitle.appendChild(bookTitleNode)
			   bookTitle.id="Author"
			   bookTitle.style="margin:5px;color:rgb(96, 113, 55); "

			   let rowWritten = document.createElement("p")
			   let rowWrittenNode = document.createTextNode(value.downloadsize)
			   rowWritten.appendChild(rowWrittenNode)
			   rowWritten.classList.add("download-size")
			   rowWrittenNode.style="margin: 5px; color: green; font-family: Arial, Helvetica, sans-serif;"

			   
			   let rowBook = document.createElement("div")
			   rowBook.id = "book-Info"
			   rowBook.classList.add("book-Info")
			   rowBook.appendChild(rowName)
			   rowBook.appendChild(bookTitle)
			   rowBook.appendChild(rowWritten)


			   rowInfoDiv.appendChild(imageOfBook)
			   rowInfoDiv.appendChild(rowBook)
			   anchor.appendChild(rowInfoDiv)
			   allNamesElm.appendChild(anchor)
			});
		  })
		  .fail(function() {
			setErrorDisplay()
		  });
			
		
		
