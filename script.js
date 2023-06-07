function myfunc(val){
    var eyeArea=document.getElementById('eye-area');
    // console.log(eyeArea);
    


    var body=document.getElementsByClassName('body');
    console.log(body);
   
    var imgTag=document.getElementsByClassName('parts')
    var bodyPart=document.getElementsByClassName('body-part')
    console.log(bodyPart)
    // console.log(imgTag)
    if(val==1 && imgTag[0].id=='eye'){
    var span=createSpan();
    var span1=createSpan()
    var span2=createSpan()
    span.classList.add('eye-span')
    span1.classList.add('eye-span1');
    span2.classList.add('eye-span2');
    body[0].appendChild(span);
    body[0].appendChild(span1)
    imgTag[0].id=""
    bodyPart[0].appendChild(span2);
    }
    else if (imgTag[0].id=='eye' && val != 1){
    var span=createSpanX();
    var span1=createSpanX()
    var span2=createSpanX()
    span.classList.add('eye-span')
    span1.classList.add('eye-span1');
    span2.classList.add('eye-span2');
    
    body[0].appendChild(span);
    body[0].appendChild(span1)
    imgTag[0].id=""
    bodyPart[0].appendChild(span2);
    }
    else if(imgTag[1].id=='ear' && val== 2){
    var span=createSpan();
    var span1=createSpan();
    var span2=createSpan();

    span.classList.add('ear-span')
    span1.classList.add('ear-span1');
    span2.classList.add('ear-span2');
    body[0].style.display='flex';
    body[0].appendChild(span);
    body[0].appendChild(span1)
    imgTag[1].id=""
    bodyPart[0].appendChild(span2);
    }
    else if (imgTag[1].id=='ear' && val != 2){
        var span=createSpanX();
        var span1=createSpanX()
        var span2=createSpanX()
        span.classList.add('ear-span')
        span1.classList.add('ear-span1');
        span2.classList.add('ear-span2');
        
        body[0].appendChild(span);
        body[0].appendChild(span1)
        imgTag[1].id=""
        bodyPart[0].appendChild(span2);
        }
    else if(imgTag[2].id=='hand' && val==3){
    var span=createSpan();
    var span1=createSpan();
    var span2=createSpan();

    span.style.marginTop='275px';
    span.style.marginLeft='85px';
    span1.style.marginTop='215px';
    span1.style.marginLeft='450px'
    span2.style.marginTop='-255px';
    span2.style.marginLeft='15px';
    body[0].style.display='flex';
    body[0].appendChild(span);
    body[0].appendChild(span1)
    imgTag[1].id=""
    bodyPart[0].appendChild(span2);
    }
    else if(imgTag[3].id=='mouth' && val==4){
        var span=createSpan();
        var span1=createSpan();
        console.log(span)
        span.style.marginTop='195px';
        span.style.marginLeft='275px';
        span1.style.marginTop='-160px';
        span1.style.marginLeft='15px';
        body[0].appendChild(span);
        imgTag[1].id=""
        bodyPart[0].appendChild(span1);
    }
    else if(imgTag[4].id=='nose' && val==5){
        var span=createSpan();
        var span1=createSpan();
        console.log(span)
        span.style.marginTop='160px';
        span.style.marginLeft='275px';
        span1.style.marginTop='-70px';
        span1.style.marginLeft='15px';
        body[0].appendChild(span);
        imgTag[1].id=""
        bodyPart[0].appendChild(span1);
    }
}
function eye(i){
    
    i.id="eye";
    i.style.scale='2'
    i.style.opacity='0.5'
    
}
function ear(i){
    i.id="ear";
}
function hand(i){
    i.id='hand';
}
function mouth(i){
    i.id='mouth';
}
function nose(i){
    i.id='nose';
}
function createSpan(){
    var span=document.createElement('span');
    span.classList.add('span')
    span.innerHTML="&#10003";
    return span;
}
function createSpanX(){
    var span=document.createElement('span');
    span.classList.add('span-x')
    span.innerHTML="&#10007;";
    return span;

}
