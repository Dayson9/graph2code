const upperContent = ["<h1>New Text</h1>", "<h2>New Text</h2>", "<h3>New Text</h3>", "<h4>New Text</h4>", "<h5>New Text</h5>", "<h6>New Text</h6>", "<p>Paragraph</p>", "<input type='text'>", "<input type='number'>", "<input type='password'>", "<input type='file'>", "<input type='radio'>", "<textarea></textarea>", "<button>Button</button>", "<video controls></video>", "<def>Def</def>", "<img src='#'>", "<div>Div</div>", "<a href=''>Link</a>", "<i>Icon</i>", "<span>Span</span>", "<form>Form</form>", "<header>Header</header>", "<section>Section</section>", "<article>Article</article>", "<footer>Footer</footer>", "<iframe>Iframe</iframe>", "<sup>Superscript</sup>", "<sub>Subscript</sub>", "<cite>Cite</cite>", "<center>Center</center>", "<strong>Strong</strong>", "<b>Bold</b>", "<strike>Strike</strike>"];


const upperFun = [{ fun: function() { for (i in pre) { pre[i].innerText = upperContent[i]; } toggle(content); } }, { fun: function() { showEls(); } }];

const lowerContent = ["<h2>InnerText</h2> <textarea id=\"in\"></textarea><button id=\"done\"><span class='fa fa-check-circle'></span> Done</button>", "<h2></h2><input type=\"range\" id=\"in\" min=\"1\" max=\"900\"><button id=\"done\"><span class='fa fa-check-circle'></span> Done</button>", "<h2></h2> <select  id=\"inn\"><option value=\"static\">Static</option><option value=\"absolute\">Absolute</option><option value=\"relative\">Relative</option><option value=\"sticky\">Sticky</option><option value=\"fixed\">Fixed</option></select> <button id=\"done\"><span class='fa fa-check-circle'></span> Done</button>", ""];

const templates = {
  Header: ['<header class="el5" id="5" style="transform: translate(0px, 0px); transition: all 0.3s ease 0s; opacity: 1; width: 100%; height: 60px; box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 16px; position: absolute;"><i class="el6 bx bx-menu-alt-left" id="6" style="transform: translate(10px, 44%); transition: all 0.3s ease 0s; opacity: 1; font-weight: 538; font-size: 30px; text-align: left;"></i> <h3 class="el7" id="7" style="transform: translate(60px, -155%); transition: all 0.3s ease 0s; opacity: 1; text-align: left; position: static;">Brand Name</h3><i class="el16 bx bx-search" id="16" style="text-align: center; transform: translate(270px, -430%); transition: all 0.3s ease 0s; opacity: 1; position: absolute;"> </i><i class="el18 bx bx-user" id="18" style="transform: translate(320px, -430%); transition: all 0.3s ease 0s; opacity: 1; position: absolute; text-align: right;"></i></header>'],

  Text_image: ['<div class="el2" id="2" style="transform: translate(0%, 30px); transition: all 0.3s ease 0s; opacity: 1; width: 100%; height: 200px; padding: 10px; border-radius: 3px;"><h2 class="el3" id="3" style="transition: all 0.3s ease 0s; opacity: 1; text-align: left; width: 50%; font-size: 22px; transform: translate(0px, 0px); font-family: Nunito;">A product design studio building digital experience</h2> <p class="el4" id="4" style="transform: translate(0px, -10px); transition: all 0.3s ease 0s; opacity: 1; text-align: left; width: 40%; font-size: 14px; font-family: Nunito;">Lorem Ipsum dolor sit amet sino nevo blah blah blah.</p> <img src="wdi.png" class="el5" id="5" style="text-align: center; transform: translate(180px, -170px); transition: all 0.3s ease 0s; opacity: 1; position: static; width: 44%; height: 90%; border-radius: 15px; font-family: Nunito;"> <button class="el8" id="8" style="text-align: center; transform: translate(-158px, -20px); transition: all 0.3s ease 0s; opacity: 1; position: absolute; width: 30%; height: 30px; border: 0px solid transparent; color: white; border-radius: 3px; background: rgb(255, 129, 175); font-family: Nunito;">Learn more</button> </div>'],

  Login_form: ['<h3 class="el0" id="0" style="text-align: center; transform: translate(0px, 0px); transition: all 0.3s ease 0s; opacity: 1; color: rgb(60, 150, 120);">LOGIN TO YOUR ACCOUNT</h3> <center class="el2" id="2" style="text-align: center; transform: translate(0px, 0px); transition: all 0.3s ease 0s; opacity: 1;"><input type="text" class="el3" id="3" style="text-align: center; transform: translate(0px, 0px); transition: all 0.3s ease 0s; opacity: 1; height: 40px; width: 70%; border-radius: 3px; border: 0px solid transparent; color: rgba(0, 0, 0, 0.5); background: rgba(0, 0, 0, 0.07);"> <input type="password" class="el3 el4" id="4" style="text-align: center; transform: translate(0px, 10px); transition: all 0.3s ease 0s; opacity: 1; height: 40px; width: 70%; border-radius: 3px; border: 0px solid transparent; color: rgba(0, 0, 0, 0.5); background: rgba(0, 0, 0, 0.07);"></center><center class="el6" id="6" style="text-align: center; transform: translate(0px, 20px); transition: all 0.3s ease 0s; opacity: 1;"><button class="el7" id="7" style="text-align: center; transform: translateX(90%); margin-top: 10px; width: 25%; height: 37px; border-radius: 60px; border: 0px solid transparent; color: white; background: rgb(60, 150, 120);">Login</button> </center><span class="el8" id="8" style="text-align: center; transform: translate(53px, -8px); transition: all 0.3s ease 0s; opacity: 1; position: absolute; font-size: 13px; color: dodgerblue;">Forgotten password?</span>'],

  Signup_form: ['<h2 class="el0" id="0" style="text-align: center; transform: translate(0px, 0px); transition: all 0.3s ease 0s; opacity: 1; font-family: Nunito;">Sign Up</h2> <center class="el1" id="1" style="text-align: center; transform: translate(0px, 0px); transition: all 0.3s ease 0s; opacity: 1;"><input type="text" class="el2" id="2" style="transform: translate(0px, 0px); transition: all 0.3s ease 0s; opacity: 1; width: 70%; height: 42px; border: 1px solid rgba(0, 0, 0, 0.3); color: rgba(0, 0, 0, 0.5); padding: 0px 15px; border-radius: 3px; text-align: center;"> <input type="password" class="el2 el3" id="3" style="transform: translate(0px, 10px); transition: all 0.3s ease 0s; opacity: 1; width: 70%; height: 42px; border: 1px solid rgba(0, 0, 0, 0.3); color: rgba(0, 0, 0, 0.5); padding: 0px 15px; border-radius: 3px; text-align: center;"><input type="password" class="el2 el3 el4" id="4" style="transform: translate(0px, 20px); transition: all 0.3s ease 0s; opacity: 1; width: 70%; height: 42px; border: 1px solid rgba(0, 0, 0, 0.3); color: rgba(0, 0, 0, 0.5); padding: 0px 15px; border-radius: 3px; text-align: center;"></center> <center class="el5" id="5" style="text-align: center; transform: translate(0px, 20px); transition: all 0.3s ease 0s; opacity: 1;"><button class="el6" id="6" style="text-align: center; transform: translate(0px, 10px); transition: all 0.3s ease 0s; opacity: 1; width: 79%; height: 42px; border: 0px solid transparent; color: white; background: rgb(255, 45, 190); border-radius: 3px;">Sign Up</button> </center>']
}


const tempGallery = document.getElementById("template-gallery");
const tempHolder = document.getElementById("template-holder");
const templateEl = document.querySelectorAll("#low .template");
const upperRow = document.querySelector('#upper-row');
const main = document.querySelector("#main");
const content = document.querySelector('.content');
const pre = document.querySelectorAll('.content > pre');

const lower = document.querySelector("#ls");
const style1 = document.querySelector("#style1");
const warning = document.querySelector("#warning");
const upperI = upperRow.getElementsByTagName('span');
const lowerI = lower.getElementsByTagName('span');
const codec = document.querySelector("#codec");
const upload = document.getElementById("upload");
const low = document.getElementById("low");
var attribute, len = 0,
  selected, state = 0,
  opened = "",
  classCounter = 0,
  idCounter = 0,
  justNow, base, styles, modal = "";