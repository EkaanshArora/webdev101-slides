---
theme: apple-basic
# colorSchema: "light"
# highlighter: shiki
lineNumbers: true
zoom: 1.25
drawings:
  persist: false
transition: fade
---

<br>

# Build _your_ web home

<br>

#### Let's paint _your_ <span v-if="$clicks>0" style="color:#0070f3">masterpiece</span><span v-else>masterpiece</span> together!

<br><br><br><br><br><br>
<a href="https://twitter.com/ekaansh" target=_blank>@ekaansh</a>

<v-clicks>
<img src="https://c.tenor.com/sWLizV5Y9zgAAAAC/tenor.gif" style="position: absolute;top:30%;left:55%;width: 40%;"/>

</v-clicks>

---
layout: two-cols
---

<div style="display: flex; place-items: center;flex-direction: column;">
<br><br>

# About me

<br>
<img src="/images/me.jpg" style="width: 45%;border-radius: 5%;"/>
<br>

## Ekaansh Arora

<br>
<img src="/images/zoom-logo.svg" style="width: 15%;"/>
</div>

::right::

<br> <br> <br>

<div style="display: flex; place-items: center; flex-direction:column;">

- Developer Advocate Engineer, <a href="https://zoom.us" target=_blank>Zoom</a>

- Building websites for a decade

- Didn't clear JEE advanced but still at IITD

<br> <br>

<div>
<Fa6BrandsXTwitter /> <a href="https://twitter.com/ekaansh" target=_blank>@ekaansh</a>
<span style="margin:10px"></span>
<fa-github /> <a href="https://github.com/ekaansharora" target=_blank>@ekaansharora</a>
</div>
</div>

---
layout: two-cols
clicks: 5
---

# Notes

<v-clicks>

- we need a code editor
  <!-- - no you can't use notepad, i mean u can but.. -->
  <!-- - please just get VS Code -->
- i speak fast
  - please ask me to slow down
- talk vs. workshop
  - please stop me & ask questions
- beginner friendly
  - we'll go over the very basics
  - i'll also try to showcase some cool things

</v-clicks>

::right::

<br/>
<img src="./images/vscode-qr.png" style="width: 80%;margin:10% auto" v-click=1 v-click.hide="5" >
<img src="https://c.tenor.com/BravUCrUqT8AAAAd/tenor.gif" v-click="5" style="width: 40%;position:absolute;top:25%;left:55%;"/>

---
layout: two-cols
---

# The Plan

<br />

<v-clicks>

- What is a website?

- How do we build one?

- How do we make it look cool?

- How do we make it do something?

- Sidequest: Let's make some art!

- What's next?

</v-clicks>

::right::

<img src="https://c.tenor.com/aFnZvuhD65kAAAAC/tenor.gif" style="width: 80%;margin:10% auto"/>

---

# What does it take to build a web page?

<iframe src="https://ekaansharora.com" frameborder="0" width="1400" height="700" style="zoom:0.6"></iframe>

---

# Where do I start?

<v-clicks>

<div>

HTML: Hyper Text **Markup** Language

</div>

<div>

Markup? A way to represent the formatting of text in a document

</div>

<div style="background-color:#1B8755;color:white;padding:2px 12px;border-radius:5px;width:50%;">

_Italic_ = \_text\_

**Bold** = \*text\*

~~Strikethrough~~ = \~text\~

- Bulleted list = \- text

</div>

</v-clicks>

---

# HTML

```html {monaco-run}
Hello World!
```

<!--
show bold, h1, etc
end tag important
-->

---

```html {monaco-run}
<html>
  <head>
    <title>things i type here don't show up on the page</title>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

<small style="position:absolute;bottom:0;color:#333">head, tags, nesting, empty tag: br, attributes: link, img</small>

<!--
show tags, nesting, empty tag<br> img
show attributes
-->

---

# Okay great, but I like <span style="text-decoration-line: spelling-error;">colors</span>

<v-clicks>

<div>

## CSS: Cascading Style Sheets

</div>

Let's you add some _style_ to your page

```html {monaco-run}
<html>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

</v-clicks>

<small style="position:absolute;bottom:0;color:#333">color, background-color, box-shadow, border, padding, margin</small>

---

```html {monaco-run}
<html>
  <body>
    <h2>Hello World!</h2>
    <div>
      <p>Here's some text</p>
      <p>And some more <span>important text</span></p>
      <img
        src="https://pbs.twimg.com/profile_images/1553384187805171712/xjOdl5bz_400x400.jpg"
      />
    </div>
  </body>
</html>
```

<!--
<html>
  <body>
    <h2>Hello World!</h2>
    <div style="display:flex;">
      <div>
      <p>- Here's some text</p>
      <p>- And some more <span style="color:red">important text</span>.</p>
      </div>
      <img style="width:20%;margin-left: 100px"
        src="https://pbs.twimg.com/profile_images/1553384187805171712/xjOdl5bz_400x400.jpg"
      />
    </div>
  </body>
</html>
-->

---

# more resources

- <a href="https://www.w3schools.com/html/" target=_blank>w3schools</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target=_blank>MDN</a>

---

# Okay but how do we make it do stuff?

## JavaScript

```js {monaco-run}
// alert("Hello World!");
```

<small style="position:absolute;bottom:0;color:#333">variables, comments, logging, functions, conditionals, loops</small>

---
layout: two-cols
---

# Let's make some art!

<img src="https://c.tenor.com/CAFdHQQ3NS0AAAAd/tenor.gif" />
<br>

## On to your code editors, follow along!

---

# Inspiration

<iframe src="https://boxes-five.vercel.app/" frameborder="0" width="1400" height="700" style="zoom:0.6"></iframe>

---

# More inspiration

<iframe src="https://color-wander.surge.sh/" frameborder="0" width="1400" height="650" style="zoom:0.6"></iframe>
<p>credit: <a href="https://github.com/mattdesl/color-wander" target=_blank>mattdesl</a></p>

<!--
threejs stuff
-->

---

<img src="https://c.tenor.com/i60o0DoB74wAAAAC/tenor.gif" style="position:absolute;top:50%;left:50%;transform:translate(-51%,-51%);" />

---

# Embeds

```html {monaco-run}
<iframe
  style="border-radius: 12px"
  src="https://open.spotify.com/embed/playlist/2C2rWVmiNMd1M7U2iXI0iW?utm_source=generator&theme=0"
  width="100%"
  height="152"
  frameborder="0"
  allowfullscreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>
```

---

# APIs

Application Programming Interface

```js {monaco-run}
// "https://dog.ceo/api/breeds/image/random"
```

```html {monaco-run}
<div id="image" style="width: 200px; height: 200px;background-color:#333"></div>
```

<!--
const data = await fetch("https://dog.ceo/api/breeds/image/random");
const dog = await data.json();
const img = document.createElement("img");

img.src = dog.message;
document.getElementById("image").appendChild(img);
-->

---

# Inspiration, again

<!-- <a href="songstellation-3d-production.up.railway.app">Songstellation</a> -->
<iframe src="https://songstellation-3d-production.up.railway.app/" frameborder="0" width="1400" height="700" style="zoom:0.6"></iframe>

---

# Questions?

---

# Tips

<v-clicks>

- just make stuff
- share it
- "steal" (open-source) code
- learn fundamentals at some point

</v-clicks>

---

<div style="display: flex; place-items: center;flex-direction: column;">

<br><br><br><br>

# Thank you!

<br>

<a href="https://twitter.com/ekaansh" target=_blank>x.com/ekaansh</a>

</div>

---

