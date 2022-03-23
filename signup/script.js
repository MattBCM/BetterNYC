const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx)=>`<span style="transition-delay:${idx*30}ms">${letter}</span>`)
    .join('')
})

function unBlur(){
    var img = document.querySelector(".left");
    img.classList.add("noBlur");
    console.log("class added");
}