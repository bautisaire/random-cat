const URL = "https://api.thecatapi.com/v1/images/search";
const btn = document.querySelector(".btn");

function getData(){
    fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    const img = document.querySelector(".img-container");
    img.innerHTML = `<img src=${data[0].url} alt="photo of a cat">`;
  });
}
getData();

btn.onclick = getData;
