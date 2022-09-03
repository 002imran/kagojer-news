const loadAllNewsCatagories = async () =>{
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await response.json();
    
    return data;
}

const setAllNewsMenu = async () => {
    
    const allData = await loadAllNewsCatagories();
   
    const newsArray = allData.data.news_category;
    
    // console.log(newsArray);
    newsArray.forEach(news=>{
        //  console.log(news);
         const newsItem = document.getElementById('all-news');
         const li = document.createElement("li");
         li.innerHTML = `
         
         <a class="container nav-item nav-link px-4 text-secondary" href="#">${news.category_name}</a>
         `;
         
         newsItem.appendChild(li)
       
    })    

}



setAllNewsMenu()





const loadAllNews = async () =>{
    const response = await fetch("https://openapi.programming-hero.com/api/news/category/01")
    const newsData = await response.json();
    displayNewsCard(newsData)
    // return newsData;
}



