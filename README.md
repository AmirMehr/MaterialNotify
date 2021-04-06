# MaterialNotify
An ultra super lightweight material notification with Javascript and css.

<a href="https://codepen.io/AmirMhr/pen/ZELJBVR">Demo</a>

You can edit and add you app theme color.
Feel free to add pull requests or issues.

<h3>Installation</h3>
Add <b>materialNotify.js</b><br/>

```
    <script  src="./materialNotify.js"></script>
```

And <b>materialNotify.css</b> in your html<br/>
```
    <link rel="stylesheet" href="./materialNotify.css">
```

Then call<br/>
```
    notify(text, duration, isRed, onDone)
```


<h3>Document</h3>
<b>text</b> is text showing in notify.<br/>
<b>duration</b> is time in seconds.<br/>
<b>isRed</b>, true for alert and false for success notify.<br/>
<b>onDone(optional)</b> is function called after notify hides.

You can show multiple notification at same time without limit.
