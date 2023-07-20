var pages=["home","about","services","resume","portafolio","footer"];
var blob_home1=document.querySelector(".blob-home-1");
var blob_home2=document.querySelector(".blob-home-2");
var about=document.getElementById("about");
var load_menu=document.getElementById("load_menu");
 



window.onload=function(){
    if(window.location.hash == '#home'){
        setStyle();
    }
    window.onmousemove=function(e){
        // aquí es donde se "mueve la foto"
        /*blob_home1.style.transform='translate('+((e.pageX - blob_home1.clientLeft) / blob_home1.clientWidth) * 50 + 'px,' + ((e.pageY - blob_home1.clientTop) / blob_home1.clientHeight) * 50 +'px)';
        blob_home2.style.transform='translate('+((e.pageX - blob_home1.clientLeft) / blob_home1.clientWidth) * 50 + 'px,' + ((e.pageY - blob_home1.clientTop) / blob_home1.clientHeight) * 50 +'px)';*/
        
    }
    
}

function setStyle(){
    var div_class='';
    var urls = ['#home', '#about', '#services', '#resume', '#portafolio','#footer'];

    for(var i=0; i< urls.length; i++){
        if(window.location.hash == urls[i]){
            div_class = urls[i].toString().split('#')[1];
            break;
        };
    }
    setStyleBackground(div_class);

    //set style for each window`s elements
    switch (div_class) {
        case "home":

            break;
        case "about":

            break;
        case "services":

            break;
        case "resume":
            
            break;
        case "portafolio":

            break;
        case "footer":
            
            break;
    }
}


function setStyleBackground(div_class){
    switch (div_class) {
        case "home":
            blob_home2.setAttribute('style',`transition:1s linear; opacity:0;transform: translate3d(0px, -260px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); left: 32%;bottom: -400px; max-width: 66%;`);
            blob_home1.setAttribute('style',`transition:1s linear; transform: translate3d(0px, 481px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); left: -2%; bottom: 62%; max-width: 50%;`);
           // blob_home2.setAttribute('style',`transition:1s;left: 877px; margin-top: -99vh;`);
           
           load_menu.setAttribute('style','height:35%');
            break;
        case "about":
            blob_home1.setAttribute('style',`transition:1s linear;  transform: translate(249.701px, 91.8429px);left: 57%; bottom: 4%; max-width: 12%;`);
            blob_home2.setAttribute('style',`transition:1s linear; transform: translate3d(0px, -9px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);left: 73%; bottom: -2%;max-width: 34%;`);
            load_menu.setAttribute('style','height:51%');
            break;
        case "services":
            load_menu.setAttribute('style','height:68%');
            blob_home1.setAttribute('style',`transition:1s linear; transform: translate(-1201.299px, -32.157100000000014px); left: 57%; max-width: 62%;`);
            blob_home2.setAttribute('style',`transition:1s linear; transform: translate3d(0px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); left: 45%; bottom: 24%; max-width: 77%;`);
            break;
        case "resume":
            load_menu.setAttribute('style','height:84%');
            break;
        case "portafolio":
            document.getElementById('gradientSvg').setAttribute('style','display: none;')

            load_menu.setAttribute('style','height:101%');
            break;
        case "footer":
            blob_home1.setAttribute('style',`display:none; transition:1s linear;  transform: translate(249.701px, 91.8429px);left: 57%; bottom: 4%; max-width: 12%;`);
            blob_home2.setAttribute('style',`display:none; transition:1s linear; transform: translate3d(0px, -9px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);left: 73%; bottom: -2%;max-width: 34%;`);
            document.getElementById('gradientSvg').setAttribute('style','display: initial;')
           
            load_menu.setAttribute('style','height:118%');
            break;
    }
}

/*function test(){
    var ld1 =document.querySelectorAll(".ld1");
    for(var i =0; i< ld1.length; i++){
        var ld1value =ld1[i].attributes.transform.value;
        var ld1splited=ld1value.split('(');
        var ld1splited_1=ld1splited[1].split(')');
        var ld1splited_2=ld1splited_1[0].split(' ');

        var wd=ld1[i].attributes.width.value;
        var hd=ld1[i].attributes.height.value;
        var newStyle1=(parseFloat(ld1splited_2[0])+parseFloat(wd));
        var newStyle2=(parseFloat(ld1splited_2[1])+parseFloat(hd));

        ld1[i].setAttribute('transform',`translate(${newStyle1} ${newStyle2}) rotate(180)`);
    }

}*/