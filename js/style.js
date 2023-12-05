const handleData = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories");
  const data = await response.json();
  const loadedCategory = data.data;
  // console.log(loadedCategory);
    
  const tabContainer = document.getElementById("tab-container");
 
    loadedCategory.forEach((category) => {
        // if(loadedCategory.length === 0){
        //     const div = document.createElement('div');
        //     div.innerHTML = `
        //         <img src="images/icon.png"/>
        //     `
        //     tabContainer.appendChild(div);
        // }
        const div = document.createElement("div");
        div.innerHTML = `
            <a onclick = "handleLoadCourse(${category.category_id})" class="tab tab-active bg-gray-300 m-4 rounded-lg font-semibold">${category.category}</a>
        `
        tabContainer.appendChild(div);
      });
  
};


const handleLoadCourse = async(categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    // console.log(data.data);
    courseData = data.data;

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    courseData.forEach((course) =>{
        
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card-body rounded-xl h-96">
                    <div>
                        <img src="${course.thumbnail}" alt="" class = "w-[400px] h-[200px] rounded-xl" />
                    </div>
                    <div class="flex">
                        <div>
                            <img src="${course.authors[0].profile_picture}" alt="" class = "w-10 h-10 rounded-full mr-8">
                        </div>
                        <div>
                            <h3 class = "text-xl font-bold">${course.title.slice(0,15)}</h3>
                        </div>
                    </div>
                    <div class= "flex justify-center items-center">

                        <p class = "text-lg">${course.authors[0].profile_name}</p>
                        <p>${course.authors[0].verified?"<img src ='images/verified.png' class = 'w-5 h-5'/>": ""}
                        </p>
                    </div>
                    
                    <p>${course.others.views}</p>
                    <p>${course.others.posted_date}</p>
                     

                </div>
        `
        cardContainer.appendChild(div);
    })
    
}

const timeConversion = () => {}



handleData();
handleLoadCourse("1000");


