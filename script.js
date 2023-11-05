// var arr=["Picture1.jpg","Picture2.jpg","Picture3.jpg","Picture1=4.jpg","Picture5.jpg","Picture6.jpg","Picture7.jpg"]
var arr=['https://500px.com/photo/1080153138/picture7-by-shriraj-mardi','https://500px.com/photo/1080153134/picture4-by-shriraj-mardi',"https://drscdn.500px.org/photo/1080153132/q%3D50_w%3D1000_of%3D1/v2?sig=30188c34014292b22ff71882955953e98aecbdf191cec97a2ced999dc0705938",
"https://drscdn.500px.org/photo/1080153137/q%3D50_w%3D1000_of%3D1/v2?sig=f0837e9e25e14efdaabf8e5dfe65e8a1bd27fd5bb485d6df6493a5c3953a8f9c","https://drscdn.500px.org/photo/1080153136/q%3D50_w%3D1000_of%3D1/v2?sig=3c1b71ef606982b961c7ba2c63aae5077e0c2c156c48f92dbcaa9f2f537bbd95",
"https://drscdn.500px.org/photo/1080153135/q%3D50_w%3D1000_of%3D1/v2?sig=42bebd88e2165d42f0ee5e6564e8d55da4cd2d8beaae6aee0e6944839c25b29e","https://drscdn.500px.org/photo/1080153133/q%3D50_w%3D1000_of%3D1/v2?sig=ee666edb5ce4c5995d973237e870f46197afad36e17d76ff4e753295b38d9e12"];


const throttleFunction=(func, delay)=>{
    let prev = 0; 
    return (...args) => {
      let now = new Date().getTime(); 
      if(now - prev> delay){ 
        prev = now;
        return func(...args);  
      }
    }
  }
  document.querySelector("#centre").addEventListener("mousemove", throttleFunction((dets)=>{

    let lettr=Math.floor(Math.random()*6);
    let path=arr[lettr];
    var div=document.createElement('div');
    div.classList.add("imagediv");
    div.style.left=dets.clientX+'px';
    div.style.top=dets.clientY+'px';
    document.body.appendChild(div);
    var img=document.createElement("img");
    img.addEventListener("error", function(event) {
      event.target.src = 'https://500px.com/photo/1080153138/picture7-by-shriraj-mardi','https://500px.com/photo/1080153134/picture4-by-shriraj-mardi';
      event.onerror = null
    })
    // img.setAttribute("src","https://images.unsplash.com/photo-1698778873718-014dd4ce22bb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8");
    img.setAttribute("src",path);
    // img.setAttribute("onerror","https://images.unsplash.com/photo-1698778873718-014dd4ce22bb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8")
    img.classList.add("thisImage");
    div.appendChild(img);
    gsap.to(img,{
        y: "0",
        ease: Power3,
        duration:1
    });
    
    gsap.to(img,{
        y:"100",
        delay: 2,
        duration:0.5,
        ease: Power1
    });
    setTimeout(function(){
        div.remove();
    },1000)
  },400));
  
