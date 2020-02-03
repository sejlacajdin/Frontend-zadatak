
$(".owl-carousel").owlCarousel({
    items:5,
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    margin:40,
    autoWidth:true
});
var sliders=document.getElementsByClassName("slider");

for(var i=0;i<sliders.length;i++){
    var element=sliders[i];
    element.oninput=function(){
        
        this.style.background="linear-gradient(to right, #00def8 0%, #18b3fa "+this.value+"%, #f4fafa "+this.value+"%,#f4fafa 100%)";
    }
}


