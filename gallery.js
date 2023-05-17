let arrImages= [
    { title: "troi",
      type:".jpg",
      text: "Троицкое",
      description: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь."
    },
    {title: "mir",
    type:".jpg",
    text: "Мир",
    description: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Белоруссии"
    },
    {
    title: "red",
    type:".jpg",
    text: "Костел",
    description: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы."
}
]

for(i=0; i<arrImages.length;i++)
{
    gallery_small.innerHTML +=
    `<div class="image">
      <img id="${i}" src="im/${arrImages[i].title}${arrImages[i].type}">
      <p>${arrImages[i].text} </p>
     </div>`;
}

function show_big_img()
 {
    div_big.innerHTML =
    `<img src="im/${arrImages[this.id].title}${arrImages[this.id].type}">
    <p>${arrImages[this.id].description}</p>`;
 div_big.style= 'opacity: 1;'; 
 }
 function hide_big_img()
 {div_big.style= 'opacity: 0;'; 
 } 
for(i=0; i<arrImages.length;i++)
{
    document.getElementById(`${i}`).addEventListener("click",show_big_img);
}

document.getElementById("div_big").addEventListener("click",hide_big_img);