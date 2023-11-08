let paswordbox=document.getElementById('password');
const size=12;

const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase='abcdefghijklmnopqrstuvwxyz';
const number='0123456789';
const symbol='!@#$%^&*(){}"<>?|\][';

let all=uppercase+lowercase+number+symbol;


function createPasaword(){
  let GeneratedePassword='';
  GeneratedePassword+=uppercase[Math.floor(Math.random()*uppercase.length)];
  GeneratedePassword+=lowercase[Math.floor(Math.random()*lowercase.length)];
  GeneratedePassword+=number[Math.floor(Math.random()*number.length)];
  GeneratedePassword+=symbol[Math.floor(Math.random()*symbol.length)];
  while(size>GeneratedePassword.length){
    GeneratedePassword+=all[Math.floor(Math.random()*all.length)];
  }
  paswordbox.value=GeneratedePassword;
}

function copyPassword(){
  paswordbox.select();
  document.execCommand('copy');
}
