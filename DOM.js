<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-slate-900">
    <div id="root" class="bg-slate-50">
        <h1 id="title" class="heading" >DOM learning on chai and code <span class="hidden">test test</span></h1>
            <h2>Lorem ipsum dolor sit.</h2>
            <h2>Lorem ipsum dolor sit.</h2>
            <h2>Lorem ipsum dolor sit.</h2>
            <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit.</p>
                       <!-- Password field -->
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password" required><br><br>
    <ul>
        <li class="list-item">1</li>
        <li class="list-item">3</li>
        <li class="list-item">4</li>
        <li class="list-item">4</li>
    </ul>
    </div>
</body>
</html>

// video 32

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-slate-950 text-white">
    <div class="parent">
        <div class="day">monday</div>
        <div class="day">tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">thursday </div>
        <div class="day">friday</div>
        <div class="day">saturday</div>
        <!-- this ic comment -->
        <div class="day">sunday</div>

    </div>
</body>
<script>
    const parent = document.querySelector('.parent')
    // console.log(parent.children)
    // console.log(parent.children[1].innerHTML)

    for(let i = 0; i<parent.children.length; i++) {
       console.log(parent.children[i].innerHTML);
        
    }
    parent.children[1].style.color = "orange"
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    // const day1 = document.querySelector('.day')

    // console.log(day1)
    // console.log(day1.parentElement)
    // console.log(day1.nextElementSibling)

    console.log("nodes:",parent.childNodes);
    

</script>
</html>

// video 33
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>video 33</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-slate-900 text-white">
    
</body>
<script>
  const div =  document.createElement('div');
  console.log(div);
  div.className = "main"
  div.id = Math.round(Math.random() * 10 + 1)
  div.setAttribute("title","generated title")
  div.style.backgroundColor ="green"
  div.style.width = "100px"
  div.style.height = "100px"
  div.style.position = "absolute"
  div.style.padding ="15px"
//   div.innerText = "chai aur code"
  const addtext = document.createTextNode("chai aur code ")

  div.appendChild(addtext);

  document.body.appendChild(div);

</script>
</html>

// video 34
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-slate-900 text-white">
    <ul class="language">
        <li>javascript</li>
    </ul>
    
</body>
<script>
    // function addLang(lanName)
    // {
    //     const li = document.createElement('li');
    //     li.innerHTML = `${lanName}`
    //     document.querySelector('language').appendChild(li);

    // }

    // addLang("python")
    // addLang("java")

    function  addoptLanguage (langName)
    {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(langName));
        document.querySelector('.language').appendChild(li)

    }
    addoptLanguage('golang')

    //edit

   const secondLang = document.querySelector("li:nth-child(2)")
//    secondLang.textContent = "java"
   const newLi = document.createElement('li')
   newLi.textContent = "Mojo"
   secondLang.replaceWith(newLi);

   //edit
   const firstLang = document.querySelector("li:first-child")
   firstLang.outerHTML = "<li>typescript</li>"
    const lastLang = document.querySelector("li:last-child")
    lastLang.remove()


    const thirdlang = document.querySelector("li")
    

</script>
</html>
