        let allNamesElm = document.getElementById("book-shelf")
		let loaderElm = document.getElementById("loader")
		let errorMessageElm = document.getElementById("errorMessage")
		
		function setErrorDisplay(){
			loaderElm.style.display = "none"
			allNamesElm.style.display = "none"
			errorMessageElm.style.display = "block"
		}
			
		fetch("https://api.apispreadsheets.com/data/YVRSNmEyZ4y3aPw9/").then(res=>{
			if (res.status === 200){
				res.json().then(data=>{
					const yourData = data["data"]
					for(let i = 0; i < yourData.length; i++){
						let rowInfo = yourData[i]

						loaderElm.style.display = "none"
					    allNamesElm.style.display = "block"
					   errorMessageElm.style.display = "none"

					    let anchor=document.createElement("a")
						anchor.href= rowInfo["downloadLink"]
						anchor.target="_blank"

						let rowInfoDiv = document.createElement("span")
						rowInfoDiv.classList.add("bookInfoContainer")
                        rowInfoDiv.style="margin-top:5px ;"
						rowInfoDiv.display="inline"
						
						
                        
                        let imageOfBook = document.createElement("img")
                        imageOfBook.src = new URL(rowInfo["imageSource"])



						let rowName = document.createElement("h3")
						let rowNameNode = document.createTextNode(rowInfo["bookTitle"])
						rowName.appendChild(rowNameNode)
                        rowName.id="book-title"
                        rowName.style="margin: 5px;"
                        rowName.title="Book Title"
						console.log(rowInfo["bookTitle"])

                        let bookTitle = document.createElement("h4")
						let bookTitleNode = document.createTextNode(rowInfo["Author"])
						bookTitle.appendChild(bookTitleNode)
                        bookTitle.id="Author"
                        bookTitle.style="margin:5px;color:rgb(96, 113, 55); "

						let rowWritten = document.createElement("p")
						let rowWrittenNode = document.createTextNode(rowInfo["downloadSize"])
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

						
						

					}
					
					

				}).catch(err => {
					setErrorDisplay()
					console.log(err);
				})
			}
			else{
				setErrorDisplay()
			}
		}).catch(err =>{
			setErrorDisplay()
		})