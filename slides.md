---
theme: apple-basic
# colorSchema: "light"
# highlighter: shiki
lineNumbers: true
zoom: 1.25
drawings:
  persist: false
transition: fade
layout: two-cols
---

<br>

# Build _your_ web home

<br>

#### Let's build _your_ masterpiece together!

<br><br><br><br><br><br>
<a href="https://twitter.com/ekaansh" target=_blank>@ekaansh</a>

::right::

<br /><br /><br />
<v-clicks>
<img src="https://c.tenor.com/sWLizV5Y9zgAAAAC/tenor.gif" />

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

- JavaScript Nerd​

- Maker of 3D art and taylor swift metal covers

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

<!--
show color, background-color, box-shadow, border, padding, margin
-->

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
        style="width: 80px;"
      />
    </div>
  </body>
</html>
```

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

<!--
variables, comments, logging, functions, conditionals, loops?
-->

---

# Let's make some art!

<br>
 
## On to our code editors!

---

# Inspiration

<!--
canvas sketch examples
-->

---

# More inspiration

<!--
threejs stuff
-->

---

# Embeds

---

# APIs

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

