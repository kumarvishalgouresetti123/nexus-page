var sing = document.querySelector('.sign')
var sing1 = document.querySelector('.center')
function singin(){
  sing.classList.toggle('signinpage')
  sing1.classList.toggle('singincenter')
}

var we = document.querySelector('.g')
function more(){
  we.classList.toggle('showmore')
}

/------------------------------------questions page--------------------------/
var pluse = document.querySelector('.center5p1')
var int11 = document.querySelector('.center5s1')

function center5pluse1(){
  if(int11.textContent == '+'){
    pluse.style.display = "block";
    int11.textContent = 'x';

    pluse1.style.display = 'none';
    int12.textContent = '+';
    pluse2.style.display = "none";
    int13.textContent = '+';
    pluse3.style.display = "none";
    int14.textContent = '+';
    pluse4.style.display = "none";
    int15.textContent = '+';
    pluse5.style.display = "none";
    int16.textContent = '+';
  }else { 
    pluse.style.display = 'none';
    int11.textContent = '+';
  }
}


var pluse1 = document.querySelector('.center5p2')
var int12 = document.querySelector('.center5s2')
function center5pluse2(){
  if(int12.textContent == '+'){
    pluse1.style.display = "block";
    int12.textContent = 'x';

    pluse.style.display = 'none';
    int11.textContent = '+';
    pluse2.style.display = "none";
    int13.textContent = '+';
    pluse3.style.display = "none";
    int14.textContent = '+';
    pluse4.style.display = "none";
    int15.textContent = '+';
    pluse5.style.display = "none";
    int16.textContent = '+';
  }else{
    pluse1.style.display = 'none';
    int12.textContent = '+';
  }
}

var pluse2 = document.querySelector('.center5p3')
var int13 = document.querySelector('.center5s3')
function center5pluse3(){
  if(int13.textContent == '+'){
    pluse2.style.display = "block";
    int13.textContent = "x";
    
    pluse1.style.display = 'none';
    int12.textContent = '+';
    pluse.style.display = "none";
    int11.textContent = '+';
    pluse3.style.display = "none";
    int14.textContent = '+';
    pluse4.style.display = "none";
    int15.textContent = '+';
    pluse5.style.display = "none";
    int16.textContent = '+';
  }else{
    pluse2.style.display = "none"
    int13.textContent = "+"
  }
}

var pluse3 = document.querySelector('.center5p4')
var int14 = document.querySelector('.center5s4')
function center5pluse4(){
  if(int14.textContent == '+'){
    pluse3.style.display = "block";
    int14.textContent = 'x';
    
    pluse1.style.display = 'none';
    int12.textContent = '+';
    pluse2.style.display = "none";
    int13.textContent = '+';
    pluse.style.display = "none";
    int11.textContent = '+';
    pluse4.style.display = "none";
    int15.textContent = '+';
    pluse5.style.display = "none";
    int16.textContent = '+';
  }else{
    pluse3.style.display = 'none';
    int14.textContent = '+';
  }
}

var pluse4 = document.querySelector('.center5p5')
var int15 = document.querySelector('.center5s5')
function center5pluse5(){
  if(int15.textContent == '+'){
    pluse4.style.display = "block";
    int15.textContent = 'x';
    
    pluse1.style.display = 'none';
    int12.textContent = '+';
    pluse2.style.display = "none";
    int13.textContent = '+';
    pluse3.style.display = "none";
    int14.textContent = '+';
    pluse.style.display = "none";
    int11.textContent = '+';
    pluse5.style.display = "none";
    int16.textContent = '+';
  }else{
    pluse4.style.display = 'none';
    int15.textContent = '+';
  }
}

var pluse5 = document.querySelector('.center5p6')
var int16 = document.querySelector('.center5s6')
function center5pluse6(){
  if(int16.textContent == '+'){
    pluse5.style.display = "block";
    int16.textContent = 'x';
    
    pluse1.style.display = 'none';
    int12.textContent = '+';
    pluse2.style.display = "none";
    int13.textContent = '+';
    pluse3.style.display = "none";
    int14.textContent = '+';
    pluse4.style.display = "none";
    int15.textContent = '+';
    pluse.style.display = "none";
    int11.textContent = '+';
  }else{
    pluse5.style.display = 'none';
    int16.textContent = '+';
  }
}




/----------------------------------signpage for tab-------------------/

var signjtb = document.querySelector('.signtb')
function singinbut(){
  signjtb.classList.toggle('signjjtb')
}
function removetb(){
  signjtb.classList.remove('signjjtb')
}

/---------------------------------signpage for mobile--------------------/


var signjmb = document.querySelector('.signmb')
function singinbut1(){
signjmb.classList.toggle('signjjmb')
}
function removemb(){
signjmb.classList.remove('signjjmb')
}