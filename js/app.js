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
    // displayNewsCard(newsData)
    return newsData;
    // console.log(newsData.data);
}

const displayNewsCard = async() =>{
    // console.log(newsData);
    const allNewsData =await loadAllNews();
    const newsAllData = allNewsData.data;
    // console.log(newsAllData);
    
    
    newsAllData.forEach(newsData =>{
         const newsContainer = document.getElementById('newsCard-container');
         const detailsNews = document.createElement('div');
         detailsNews.innerHTML = `
          <div class="card mt-5">
                <div class="d-flex">
                    <img class="card-img-top w-40" src="..." alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quaerat nihil sint asperiores possimus!
                            Officia consequatur soluta dolor, expedita fugit magnam voluptate incidunt animi aliquid ipsum dolorem
                            reprehenderit mollitia debitis quos facilis laborum quidem. Minus nihil, porro quas vero inventore
                            molestias molestiae. Officiis odit modi, veniam blanditiis corrupti sed. Molestiae? content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        
        `;
        newsContainer.appendChild(detailsNews)
        

        })
}

displayNewsCard()

loadAllNews()



