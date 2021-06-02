console.log("Hello, This is fetch practice");

fetch("https://api.unsplash.com/search/photos?page=1&query=table&client_id=e1lPg8hu5eMKx3CbfYx9vO8N6mZ7kgjzq9pnAU5YHZI").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
    // data.results[0].urls.small
    console.log(data.results[0].urls.small);
    getImageUrl(data)
})

const getImageUrl = (data) => {
    const dataObject = data.results.map((each)=>{ 
        const url = each.urls.small
        const imageDiv = document.getElementById("imagecontainer")
        const image = document.createElement('img')
        image.src = url
        image.setAttribute("width", "400px")
        // console.log(image)
        // const image = document.getElementsByClassName("unplashImage")
        // console.log(image)
        imageDiv.appendChild(image)
    })
    return dataObject
};
