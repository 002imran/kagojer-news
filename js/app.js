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
         
         <a class="container nav-item nav-link px-4 text-secondary" href="#" onclick="loadAllNews('${news.category_id}')">
                    ${news.category_name}
         </a>
         `;
         
         newsItem.appendChild(li)
       
    })    

}

setAllNewsMenu()



const loadAllNews = category_id =>{
    
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayNewsCard(data.data))
}



const displayNewsCard = allData =>{
         const newsContainer = document.getElementById('newsCard-container');
         newsContainer.innerHTML = ``
       
        
        allData.forEach(newsData =>{

        //  console.log(newsData);
         const {author, title, image_url,total_view, details, others_info, rating, _id} = newsData;
          
         const detailsNews = document.createElement('div');
         detailsNews.innerHTML = `
          <div class="card mt-5">
                <div class="d-flex">
                    <img class="card-img-top w-25" src="${image_url}" alt="Card image cap">
                    <div class="card-body h-100">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text"> ${details.length > 500 ? details.slice(0,500) + '...' : details }</p>
                        
                    <div class="card-detials d-flex text-align-center gap-5 mt-5">
                        <div class="d-flex pe-5">
                            <img class="author-image" src="${author.img}">
                            <h5 class="ps-3">Jhane Copper</h5>
                        </div>

                        <div class="ps-5 pe-5">
                            <h5><i class="fa-solid fa-eye px-2"></i>${total_view}</h5>
                        </div>
                       
                        
                        <div>

                           <button onClick="newsDetails('${_id}')" href="#" class="btn btn-primary" 
                                data-toggle="modal" data-target="#newsDetailModal">Show Details
                            </button> 
                        </div>  

                    </div>   
                </div>
                    
                </div>
            </div>
        
        `;
        newsContainer.appendChild(detailsNews)
        

        })
        
} 
loadAllNews()



const newsDetails = _id =>{
    const url = fetch(`https://openapi.programming-hero.com/api/news/${_id}`);
    fetch(url)
    .then(res => res.json())
    .then(newsData => displayNewsDetails(newsData.data))
}

const displayNewsDetails = allDetails =>{
console.log(allDetails);
    
}


displayNewsDetails()






