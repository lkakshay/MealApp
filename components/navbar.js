function navbar(){
    return `
    <div id="nav" >
        <div id="main"> <a class="navText" href="index.html">MAIN</a></div>
        <div id="searchBox">
            <input id="search" type="text" placeholder="search for meals">
            <div id="sugestionDiv">
            </div>
        </div>
        <div class="myclass"></div>
        <ul>
            <li><a  class="navText" href="randomRecipe.html">RANOM RECIPE</a></li>
            <li><a class="navText" href="recepeOfTheDay.html">RECIPE OF THE DAY</a></li>     
        </ul>
     </div>  `

}
export default navbar