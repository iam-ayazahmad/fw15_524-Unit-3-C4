async function apiCall(url) {

    try{
        let res=await fetch(url)

        let data=await res.json()

        return data
    }
    catch(err){
        
        return data
    }


    //add api call logic here


}




function appendArticle(article, main) {

    article.map((item)=>{

        let image=document.createElement("img")
        image.src=item.urlToImage
        image.style.width="190px"
        image.style.height="110px"

        let title=document.createElement("h5")
        title.textContent=item.title


        let mydiv=document.createElement("div")
        mydiv.id="mydiv"

        mydiv.append(image,title)


        mydiv.addEventListener("click",function myfun(){
            localStorage.setItem("article",JSON.stringify(item))

            window.location="news.html"
        })

        

        main.append(mydiv)

        


    })

    //add append logic here

}

export { apiCall, appendArticle }