async function fetching (url){
    try {

        let response = await fetch(url)
        let res =await response.json();
        let data=res.meals;
        console.log("fetching data :",data)
        return data ;
        
    } 
          
     catch (error) {
         console.log("fetching error :",error)
          
    }
    
}    
  
function appendItems( appendData,where){
    appendData
    .then((dataRes)=>{
        console.log("dataRes :",dataRes)
       dataRes.forEach(({strMeal,strMealThumb,idMeal})=> {
           let div = document.createElement("div")
           let name =document.createElement("p")
           let image= document.createElement("img")
           name.textContent=strMeal;
           image.src=strMealThumb;
           div.append(image,name)
           where.append(div) 
           div.onclick=()=>{
               singleMeal(idMeal)
           }   
       });
    })
    .catch((error)=>{
        console.log(error)
    })
}

function singleMeal (el){
    let id= el
    window.location.href=`singleMeal.html?${id}`

}

function appendSingle( appendData,where){
    appendData
    .then((dataRes)=>{
        console.log("dataRes :",dataRes)
       dataRes.forEach((el)=> {

        let {strMeal,strMealThumb,strCategory,
            strInstructions,strYoutube,strArea,
            strIngredient1,strIngredient2,strIngredient3,
            strIngredient4,strIngredient5

             }=el

           let divMain = document.createElement("div")
           divMain.id="divMain"      
           let div = document.createElement("div")
           div.id="div"
           let divInner1 = document.createElement("div")
           divInner1.id="divInner1"
           let divInner2 = document.createElement("div")
           divInner2.id="divInner2"

          
           let Category =document.createElement("h4")
           Category.textContent=`CATAGORY : ${strCategory}`
           let Area =document.createElement("h4")
           Area.textContent=`AREA : ${strArea}`

           let incredients =document.createElement("h2")
           incredients.innerText="INCREDIENTS"

           let ic1=document.createElement("li")
           ic1.textContent=strIngredient1
           let ic2=document.createElement("li")
           ic2.textContent=strIngredient2
           let ic3=document.createElement("li")
           ic3.textContent=strIngredient3
           let ic4=document.createElement("li")
           ic4.textContent=strIngredient4
           let ic5=document.createElement("li")
           ic5.textContent=strIngredient5

           divInner1.append(Category,Area,incredients,ic1,ic2,ic3,ic4,ic5)


           let name =document.createElement("h1")
           let image= document.createElement("img")

           let about=document.createElement("p")
           about.innerText=strInstructions
           let Desription =document.createElement("h2")
           Desription.innerText="DESCRIPTION"
           divInner2.append(about)

           let divYt = document.createElement("div")
           divYt.id="divYt"

           let yt=document.createElement("iframe")
           yt.setAttribute("allowfullscreen", true);
           let x=strYoutube.split("=")
           yt.src=`https://www.youtube.com/embed/${x[1]}`
           divYt.append(yt)

           name.textContent=strMeal;
           image.src=strMealThumb;
           div.append(name,divInner1,Desription,divInner2)
           divMain.append(image,div)
           where.append(divMain,divYt) 
   
       });
    })
    .catch((error)=>{
        console.log(error)
    })
}

function sugestions (search,showDiv){

      let recepeName = search.value
      if(search.value==""){
          showDiv.innerHTML=""
          return;
      }


      let sugestionName= fetching (`https://www.themealdb.com/api/json/v1/1/search.php?s=${recepeName}`)
      appendItems(sugestionName,showDiv)
      
      console.log(recepeName,sugestionName)

}
function debounce(func,delay,globalVariable,search,showDiv){
    if(globalVariable){
        clearTimeout(globalVariable)
    }
    globalVariable = setTimeout(() => {
       func(search,showDiv)
    }, delay);
}



export {fetching,appendItems,appendSingle,debounce,sugestions}
