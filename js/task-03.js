const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
for (const { url, alt } of images) {
  // const li = document.createElement("li");
  // const img = document.createElement("img");
  // img.setAttribute("src", url);
  // img.setAttribute("alt", alt);
  // img.style.width = "360px";
  // console.log(src1);
  // li.appendChild(img);
  // list.appendChild(li);

  const imgWidth = "360px";
  const string = `<li> <img src=${url} alt=${alt} style="width:${imgWidth};"></li>`;
  list.insertAdjacentHTML("afterbegin", string);
}
list.style.display = "flex";
list.style.alignItems = "center";
list.style.listStyleType = "none";
list.style.justifyContent = "space-around";
