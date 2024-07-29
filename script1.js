window.onload = function() {
  prepareAssets();
  styles = "";
}



upperI[0].ontouchstart = function() {
  if (pre[0].innerText != undefined) {
    upperFun[0].fun()
  }

  prep(pre, main, "")
}

upperI[1].ontouchstart = function() {
  upperFun[1].fun()
  localStorage.setItem("len", len)
  localStorage.setItem("iC", idCounter)
  localStorage.setItem("cC", classCounter)
  localStorage.setItem("saved", main.innerHTML)
  showEls()
}

upperI[2].ontouchstart = function() {
  showEls();
  let els = main.querySelectorAll("*");
  base = main.innerHTML;
  styles = "";
  let ic = document.querySelectorAll(".icon");
  let bgi = document.querySelectorAll(".bgi");
  let code = document.querySelector("#code");
  let b1 = codec
  let lenn = els.length;
  closeModal()
  modal = codec.id;
  prepCode();
  codec.style.display = 'block'
  main.style.filter = "blur(10px)";
  main.innerHTML = main.innerHTML.trim();
  code.innerText = main.innerHTML;


  bgi[0].style.background = "#B400FF"
  ic[0].style.color = "white"
  bgi[1].style.background = "white"
  ic[1].style.color = "#B400FF"

  bgi[0].onclick = function() {
    for (i in els) {
      els[i].style = ""
    }
    code.innerText = (main.innerHTML.trim() != "") ? main.innerHTML : "";
    this.style.background = "#B400FF"
    ic[0].style.color = "white"
    bgi[1].style.background = "white"
    ic[1].style.color = "#B400FF"
  }

  bgi[1].onclick = function() {
    code.innerText = (styles != "") ? styles : "";
    this.style.background = "#B400FF"
    ic[1].style.color = "white"
    bgi[0].style.background = "white"
    ic[0].style.color = "#B400FF"
  }

  hideCode.onclick = function() {

    for (el of els) {
      el.style.transition = ".3s";
    }
    codec.style.display = 'none';
    main.style.filter = "blur(0px)";
    main.innerHTML = localStorage.getItem("saved").replace(/ text;/g, ";\n-webkit-background-clip: text;");
    showEls();
    selectElement();
  }

  copy.onclick = () => {
    writeClipboard(code.innerText);
  }
}

upperI[3].ontouchstart = function() {
  let btn = warning.querySelector("button")
  let i = warning.querySelector("i")
  i.onclick = function() {
    warning.style.display = 'none'
  }

  btn.onclick = function() {
    selected.remove()
    warning.style.display = 'none';
    localStorage.setItem("len", len)
    localStorage.setItem("iC", idCounter)
    localStorage.setItem("cC", classCounter)
    localStorage.setItem("saved", main.innerHTML)
  }
  closeModal()
  modal = warning.id;
  warning.style.display = "block"
  selectElement();

}

upperI[4].ontouchstart = function() {

  let clone = selected.cloneNode(true);
  let parent = selected.parentElement;
  fadeEls();
  clone.style.opacity = "1";
  appendNewClass(clone);
  parent.appendChild(clone);


  let childNodes = clone.querySelectorAll("*");

  gEl = [].slice.call(main.querySelectorAll("*"));
  let len = gEl[gEl.length - 1];
  selected = len;
  selectElement();

  if (childNodes.length > 0) {
    for (children of childNodes) {
      appendNewClass(children);
    }
  }

  localStorage.setItem("len", len);
  localStorage.setItem("iC", idCounter);
  localStorage.setItem("cC", classCounter);
  localStorage.setItem("saved", main.innerHTML);
}

upperI[5].ontouchstart = function() {
  printInfo("Oops!, feature not yet added")
}

upperI[6].ontouchstart = function() {
  printInfo("Oops!, feature not yet added")
}

upperI[7].ontouchstart = function() {
  printInfo("Oops!, feature not yet added")
}


upperI[8].ontouchstart = function() {
  let els = main.querySelectorAll("*");
  let regex = /^[a-zA-Z]{1,}[0-9]*\.html$/;
  let d = document.querySelector("#download");
  let input = d.querySelector("input");
  let b1 = d.querySelectorAll("button")[0];
  let b2 = d.querySelectorAll("button")[1];

  let first = "<!DOCTYPE html>\n<html lang='en'>\n<head>\n<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>\n<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.4/css/boxicons.min.css'>\n<style>\n";


  let validated = false;
  d.style.display = "block";

  main.style.filter = "blur(10px)";

  input.oninput = () => {
    if (!regex.test(input.value)) {
      input.style.border = "2px solid red"
      validated = false;
    } else {
      input.style.border = "2px solid #00D705"
      validated = true;
    }
  }

  b2.onclick = function() {
    main.style.filter = "";
    d.style.display = "none"
    main.innerHTML = localStorage.getItem("saved").replace(/ text;/g, ";\n-webkit-background-clip: text;");
    for (el of els) {
      el.style.transition = ".3s"
    }
    selectElement()

  }


  b1.onclick = function() {
    let xml = (main.innerHTML);
    let fileContent = first + styles + "\n</style>\n</head>\n<body>\n" + (xml) + "\n</body>\n</html>";
    if (validated) {
      let link = document.createElement("a");
      let file1 = new Blob([fileContent], { type: 'text/html' });
      link.href = URL.createObjectURL(file1);
      link.download = input.value;
      link.click();
      URL.revokeObjectURL(link.href);
      main.style.filter = "blur(0px)";
      d.style.display = "none"
    } else {
      printInfo("Invalid HTML filename")
    }

    for (el of els) {
      el.style.transition = ".3s"
    }
    main.innerHTML = localStorage.getItem("saved").replace(/ text;/g, ";\n-webkit-background-clip: text;");
    selectElement()

  }
  prepCode();
}

upperI[9].ontouchstart = function() {
  printInfo("Oops!, feature not yet added")
}


lowerI[0].onclick = () => {
  closeModal()
  modal = style1.id;
  attribute = "innerText"
  style1.innerHTML = lowerContent[0];

  let input = style1.querySelectorAll("*")[1]

  input.value = selected[attribute]

  let h2 = style1.querySelector("h2")
  h2.innerText = "InnerText"
  style1.style.display = "block";


  let done = style1.querySelector("#done");

  input.oninput = function() {
    selected[attribute] = this.value;

  }

  done.onclick = function() {
    localStorage.setItem("len", len)
    localStorage.setItem("iC", idCounter)
    localStorage.setItem("cC", classCounter)
    localStorage.setItem("saved", main.innerHTML)
    style1.style.display = 'none'
  }
}

lowerI[1].onclick = () => {
  upperFun[0].fun()
  prep(pre, selected, "")
}

lowerI[2].onclick = () => appendStyle("Width", "width", "style", 0, 0);

lowerI[3].onclick = () => appendStyle("Height", "height", "style", 0, 0);

lowerI[4].onclick = () => {
  closeModal()
  modal = style1.id;
  attribute = "color"
  style1.innerHTML = lowerContent[0];

  let input = style1.querySelectorAll("*")[1]
  let bg = selected.style["background"];
  input.value = selected.style[attribute]

  let h2 = style1.querySelector("h2")
  h2.innerText = "Color"
  style1.style.display = "block";


  let done = style1.querySelector("#done");

  if (selected.style["background"] != "" && selected.style["color"] == "" && selected.style["background"].includes("linear-gradient")) {
    input.value = selected.style["background"];
  } else {
    input.value = selected.style["color"]
  }

  input.oninput = function() {
    if (input.value.includes("linear-gradient")) {
      selected.style["background"] = this.value;
      gradientify(selected, true)
    } else {
      gradientify(selected, false)
      selected.style[attribute] = this.value;
      selected.style["background"] = bg;
    }
  }

  done.onclick = function() {
    localStorage.setItem("len", len)
    localStorage.setItem("iC", idCounter)
    localStorage.setItem("cC", classCounter)
    localStorage.setItem("saved", main.innerHTML)
    style1.style.display = 'none'
  }

}

lowerI[5].onclick = () => {
  closeModal()
  modal = style1.id;
  attribute = "background"
  style1.innerHTML = lowerContent[0];

  let input = style1.querySelectorAll("*")[1]

  input.value = selected.style[attribute]

  let h2 = style1.querySelector("h2")
  h2.innerText = "Background"
  style1.style.display = "block";


  let done = style1.querySelector("#done");

  if (selected.style["background"] != "") {
    input.value = selected.style["background"];
  }
  else if (selected.style["background-image"] != "") {
    input.value = selected.style["background-image"];
  } else {
    input.value = selected.style["background-color"];
  }

  input.oninput = function() {
    selected.style[attribute] = this.value;

  }

  done.onclick = function() {
    localStorage.setItem("len", len)
    localStorage.setItem("iC", idCounter)
    localStorage.setItem("cC", classCounter)
    localStorage.setItem("saved", main.innerHTML)
    style1.style.display = 'none'
  }
}

lowerI[6].onclick = () => appendStyle("Translate(x,y)", "transform", "style", 0, 0);

lowerI[7].onclick = () => appendStyle("Border", "border", "style", 0, 0);

lowerI[8].onclick = () => appendStyle("Border-radius", "borderRadius", "style", 0, 0);

lowerI[9].onclick = () => appendStyle("Outline", "outline", "style", 0, 0);


lowerI[10].onclick = () => appendStyle("Font-family", "fontFamily", "style", 0, 0);

lowerI[11].onclick = () => appendStyle("Font-size", "fontSize", "style", 0, 0);

lowerI[12].onclick = () => appendStyle("Font-weight", "fontWeight", "style", 1, 0);

lowerI[13].onclick = () => appendStyle("Rotate", "rotate", "style", 0, 0);

lowerI[14].onclick = () => {
  closeModal()
  modal = style1.id;
  attribute = "type"
  style1.innerHTML = lowerContent[0];

  let input = style1.querySelectorAll("*")[1]

  input.value = selected[attribute]

  let h2 = style1.querySelector("h2")
  h2.innerText = "Type"
  style1.style.display = "block";


  let done = style1.querySelector("#done");

  input.oninput = function() {
    selected[attribute] = this.value;

  }

  done.onclick = function() {
    localStorage.setItem("len", len)
    localStorage.setItem("iC", idCounter)
    localStorage.setItem("cC", classCounter)
    localStorage.setItem("saved", main.innerHTML)
    style1.style.display = 'none'
  }
}

lowerI[15].onclick = () => appendStyle("Shadow", "boxShadow", "style", 0, 0);


lowerI[16].onclick = () => appendStyle("Text-shadow", "textShadow", "style", 0, 0);

lowerI[17].onclick = () => {
  let str;
  attribute = "className"
  style1.innerHTML = lowerContent[0];

  let input = style1.querySelectorAll("*")[1]

  input.value = selected[attribute];

  let h2 = style1.querySelector("h2")
  h2.innerText = "Class-name"
  style1.style.display = "block";

  done.onclick = function() {
    style1.style.display = 'none'
    selected.className = "el" + selected.id + " " + input.value;
    localStorage.setItem("len", len)
    localStorage.setItem("iC", idCounter)
    localStorage.setItem("cC", classCounter)
    localStorage.setItem("saved", main.innerHTML)
  }
}

lowerI[18].onclick = () => appendStyle("Text-align", "textAlign", "style", 0, 0);


lowerI[19].onclick = () => {
  attribute = "position"
  style1.innerHTML = lowerContent[2];

  let input = style1.querySelectorAll("*")[1]

  input.value = selected.style[attribute];

  let h2 = style1.querySelector("h2")
  h2.innerText = "Position"
  style1.style.display = "block";

  done.onclick = function() {
    localStorage.setItem("len", len)
    localStorage.setItem("iC", idCounter)
    localStorage.setItem("cC", classCounter)
    localStorage.setItem("saved", main.innerHTML)
    style1.style.display = 'none'
  }

  input.onchange = function() {
    selected.style[attribute] = input.value;
  }
}

lowerI[20].onclick = () => appendStyle("Padding", "padding", "style", 0, 0);

lowerI[21].onclick = () => appendStyle("Src", "src", "", 0, 1);