function toggle(el){
closeModal()
modal = "content";
if(opened != ""){
opened.style.opacity= 0;
opened.style.display= 'none';
}

if(state == 0){
el.style.opacity= 1
el.style.display = 'block';
opened = el;
state = 1;
}else{
el.style.opacity = 0;
el.style.display= 'none';
state = 0;
}
}

function closeModal(){
if(modal != ""){
let md = document.getElementById(modal)
md.style.display = 'none'
}
}

function prep(element, outt, indicator){
 for(el of element){
el.onclick = function(){
if(indicator != "r"){
outt.innerHTML = outt.innerHTML.replace(/ text;/g, ";\n-webkit-background-clip: text;");
outt.innerHTML+= this.innerText+"\n";
}
this.parentElement.style.display = 'none';
if(indicator != "r"){
let child = outt.querySelectorAll("*");
let len = (child.length-1);
selected = child[len];
selected.className = "el"+classCounter;
selected.id = idCounter;
selected.style.textAlign= "center";
selected.style.transform = "translate(0px,0px)";
selected.style.transition = ".3s";

fadeEls()
selected.style.opacity = "1"
idCounter++;
classCounter++;
}
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML.replace(/ text;/g, ";\n-webkit-background-clip: text;"));

selectElement();
justNow = outt;
justNow.style.opacity = "1"
}
}
}

function printInfo(info) {
let op =   document.querySelector(".cp1");

op.textContent = info;
op.style.opacity= '0';
op.style.display = 'block';
 
 setTimeout(() => {
 op.style.opacity = '1';
 }, 10);
 setTimeout(() => {
 op.style.opacity = '0';
}, 2000);
}
function appendStyle(innertext, attr, type, i, a){
closeModal()
modal = style1.id;
attribute = attr
style1.innerHTML = lowerContent[i];

let input = style1.querySelectorAll("*")[1]

if(type == "style"){
input.value = selected.style[attribute];
}else{
input.value = selected[attribute];
}

let h2 = style1.querySelector("h2")
h2.innerText = innertext
style1.style.display= "block";
if(a == 1){
reg()
}else{
reg1()
} 
}


function prepCode() {
 showEls();
let els= main.querySelectorAll("*");
base = main.innerHTML;
styles = "";
let lenn = els.length;
for(j=0; j<lenn; j++){
base = base.replaceAll('class="'+els[j].className+'"', '')
base = base.replaceAll('id="'+els[j].id+'"', '')
base = base.replaceAll('type="'+els[j].type+'"', '')
base = base.replaceAll('min="'+els[j].min+'"', '')
base = base.replaceAll('max="'+els[j].max+'"', '')
base = base.replaceAll('value="'+els[j].value+'"', '')
base = base.replaceAll('href="'+els[j].href+'"', '')
if(els[j].src != undefined){
let src = els[j].src;
src = src.replace("file:///storage/emulated/0/Documents/Graph2Code/", "");
base = base.replaceAll('src="'+src+'"', '')
}

base = base.replaceAll('controls=""', '')
styles+= elementStyle(els[j]);
styles = styles.replaceAll("undefined", "")
styles = styles.replaceAll("&quot;", "")
styles = styles.replaceAll("background-position: initial;\nbackground-size: initial;\nbackground-repeat: initial;\nbackground-attachment: initial;\nbackground-origin: initial;\nbackground-color: initial;", "");

}
styles = "body {\npadding: 0px;\nmargin: 0px;\nmax-width: 100%;\noverflow-x: hidden;\n}"+styles;
for(i in els){
els[i].style=""   
}
main.innerHTML = main.innerHTML.replaceAll('style=""', "")
}

function toSelect(){
let s = [].slice.call(main.querySelectorAll("*"));
len = (s.length-1);
selected = s[len];
selected.className = "el"+classCounter;
selected.id = idCounter;
selected.style.textAlign = "center";
selected.style.marginTop = "10px";
selected.style.transform = "translate(0px,0px)";
selected.style.transition = ".3s";

fadeEls()
selected.style.opacity = "1"
idCounter++;
classCounter++;
}




function fadeEls(){
let els = main.querySelectorAll("*")
for(j of els){
j.style.opacity = 0.3;
} 
}

function showEls(){
let els = main.querySelectorAll("*")
for(j of els){
j.style.opacity = 1;
}    
}

function reg(){
let inn = style1.querySelector("#in");
let done = style1.querySelector("#done");

inn.oninput = function() {
selected[attribute] = this.value;
}


done.onclick = function(){
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML)
style1.style.display= 'none'
}
}

function reg1(){
let inn = style1.querySelector("#in");
let done = style1.querySelector("#done");

inn.oninput = function() {
selected.style[attribute] = this.value;
}

done.onclick = function(){
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML)
style1.style.display= 'none'    
}
}

function elementStyle(el){
//computes the css style of an element
let txt = "\n\n\n .el"+el.id+" {\n"
let ini = strBetween(base, 'style="', '"')
txt+= ini;
txt= txt.replaceAll("; ", ";\n")
base = base.replaceAll("opacity: 1;", "")
base = base.replace('style="', '')
base = base.replace('"', '')
txt+= "\n}"
txt = txt.replace("\n", "")
txt = txt.replace(/ text;/, ";\n-webkit-background-clip: text;");
return txt;
}


function strBetween(str, f, s){
//function returns the strings between 'f' and 's'
let out = "";
let indexF = str.indexOf(f);
str = str.replace(f, "")
let indexS = str.indexOf(s);
out = str.slice(indexF, indexS);

return out;
}

function selectElement(){
let els = main.querySelectorAll("*");
for(s in els){
els[s].addEventListener("dblclick", function(event){
if(this.parentElement.id != "main") {
event.stopPropagation()
}
fadeEls()
if(this.parentElement.id != "main") {
this.parentElement.style.opacity = "1" 
}
this.style.opacity = "1"
selected = this;
});
}

}


async function writeClipboard(text){
//copy to clipboard algorithm
let cp = document.querySelector(".cp");
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    alert(error.message);
  }
  
  if(text == ""){
 cp.textContent = "Nothing to copy"
 cp.style.transform = "translate(70px,-100px)"
  }else{
cp.textContent = "Copied"
cp.style.transform = "translate(100px, -100px)"
  }
  
  cp.style.opacity= '0';
 cp.style.display = 'block';
 
 setTimeout(() => {cp.style.opacity = '1';}, 10);
 setTimeout(() => {
 cp.style.opacity = '0';
}, 2000);

}

function helper(){
//helps to prevent some certain bugs
 for(i in pre){
 pre[i].innerText= upperContent[i];
 }
  prep(pre, main, "r");
}

const uploadImage = function(input, output){
input.addEventListener('change', function(){
    if (this.files && this.files[0]) {
 URL.revokeObjectURL(output.src);
 output.src = URL.createObjectURL(this.files[0]);
 main.appendChild(output);
  
  toSelect();
  selectElement();
  localStorage.setItem("saved", main.innerHTML)
    }
  });  
}


function appendNewClass(el){
let classN = el.className;

//Regex for checking whether an element has an icon based className
let fa = [new RegExp("fa fa[-][a-z]{1,}[-][a-z]{1,}"), new RegExp("fa fa[-][a-z]{1,}")];
let bx = [new RegExp("bx [a-z]{2,3}[-][a-z]{1,}[-][a-z]{1,}[-][a-z]{1,}"), new RegExp("bx [a-z]{2,3}[-][a-z]{1,}[-][a-z]{1,}"),  new RegExp("bx [a-z]{2,3}[-][a-z]{1,}")];

for(reg of fa){
if(reg.test(classN)){
el.className = reg.exec(classN);
break;
}
}

for(reg of bx){
if(reg.test(classN)){
el.className = reg.exec(classN);
break;
}
}
el.id = idCounter;
el.className+= " el"+classCounter;

let ping = /el[0-9]{1,}\sel[0-9]{1,}/.test(el.className);

//checks whether 'el' has two classNames
if(ping){
el.className = el.className.replace(/el[0-9]{1,}/, "");
}


classCounter++;
idCounter++;
}


function gradientify(el, condition){
/* makes 'el' a gradient text based on whether  'condition' is true or false */
if(condition){
el.style["-webkit-text-fill-color"] = "transparent";
el.style["-webkit-background-clip"] = "text";
}else{
el.style["-webkit-text-fill-color"] = "";
el.style["-webkit-background-clip"] = "";
el.style["background"] = "";
}
}

function templateHTML(str){
let lenn = templates[str].length;
let s = '<img src="';
let e = '">\n';
let html = '';
for(d= 0; d<lenn; d++){
//contructs innerHTML for template gallery
html+= s+str+d+".png"+e;
}
return '<div>\n<span>\n<span class="bx bxs-magic-wand"></span> Choose Templates</span>\n<i class="fa fa-times"></i>\n</div>\n'+html;
}

function handleClick(){
let imgs = tempGallery.querySelectorAll("img");
let fil, title, digit, str, len1 = imgs.length;
let cancel = tempGallery.querySelector("i");

cancel.onclick = function(){
tempGallery.style.display = 'none';
}

for(d = 0; d<len1; d++){

fil = (imgs[d].src).replace("file:///storage/emulated/0/Documents/Graph2Code/", "");

if(fil.includes("_")){
title = /[A-Za-z]{1,}_[a-z]{1,}/.exec(fil) 
}else{
title = /[A-Za-z]{1,}/.exec(fil);
}

digit = /[0-9]{1,}/.exec(fil);


imgs[d].onclick = function(){
let inn = style1.querySelector("#in");
//bad*ss line
str = templates[title][digit];

tempHolder.innerHTML = str;
let children = tempHolder.querySelectorAll("*");

for(el of children){
appendNewClass(el);
}
tempGallery.style.display = 'none';

//Appends clicked template to the editor
main.innerHTML+= tempHolder.innerHTML;
setTimeout(selectElement, 20);
helper();
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML);
}
}
}

function handleTemplate(){
for(c in templateEl){
templateEl[c].onclick = function(){
closeModal();
modal = "template-gallery";
let span = this.querySelector("span");
let str = (span.innerText).replaceAll(" ", "_");

tempGallery.innerHTML = templateHTML(str);
tempGallery.style.display = 'block';
handleClick();
}
}
}

function prepareAssets(){
handleTemplate();
let html= localStorage.getItem("saved").replace(/ text;/g, ";\n-webkit-background-clip: text;");

main.innerHTML = html;
helper()
setTimeout(()=> selectElement(), 20)
let code = document.querySelector("#code");
code.innerText = "";

len = (localStorage.getItem("len") != null)? localStorage.getItem("len") : 0;
let sels = [].slice.call(main.querySelectorAll("*"));
selected = sels[len];

classCounter = (localStorage.getItem("cC") != null)? localStorage.getItem("cC") : 0;
idCounter = (localStorage.getItem("iC") != null)? localStorage.getItem("iC") : 0;


if(html === null || html === ""){
len = 0;
idCounter = 0;
classCounter = 0;
}

showEls();
}