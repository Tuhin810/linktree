const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });


  var git = document.getElementById("git");
  var l = document.getElementById("link");
  var m = document.getElementById("mail");
  var g = document.getElementById("game");
  var e =document.getElementById("empty")

git.addEventListener("click",()=>{
  console.log("git")
e.innerHTML=`<a id="source-link" class="meta-link" href="https://github.com/Tuhin810">
<img src="/g.png" alt="" >
  
 
</a>`
})

l.addEventListener("click",()=>{
  console.log("link")
  e.innerHTML=`<a id="source-link" class="meta-link" href="https://www.linkedin.com/in/tuhin-thakur-3b6711243/" target="_blank">
  <img src="/l.png" alt="" >
  
 
  </a>`
})

m.addEventListener("click",()=>{
  console.log("mail")
  e.innerHTML=`<a id="source-link" class="meta-link" href="https://mail.google.com/mail/u/0/?hl=en/#inbox" target="_blank">
  <img src="/m.png" alt="" >
 
</a>`
})

g.addEventListener("click",()=>{
  console.log("game")
  e.innerHTML=`<a id="source-link" class="meta-link" href="https://stellular-custard-68cc37.netlify.app/" target="_blank" >
  <img src="/ga.png" alt="" >
  
 
</a>
`
})

var clear = document.getElementById("menu-background-pattern")

clear.addEventListener("click",()=>{
  e.innerHTML=" "
})