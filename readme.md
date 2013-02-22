SexyScroll.js
=============

sexyScroll

sexyScroll is a dynamic toTop-link script, especially build for sites with a big footer, requires jQuery.
Check it out. 

## How it works
Here is a simple setup:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.sexyScroll-1.0.js"></script>
<script>
jQuery('.scrollup').sexyScroll();
</script>
```

## Options
You can set the following options:

```javascript
jQuery('.scrollup').sexyScroll({
	visibleStart:  100,     // position where the link will be appear, scroll position from top
	bottomOffset: 300,      // bottom position of the link when the end of the site is reached
	position: 10            // bottom position of the
});	
```
## CSS.
Following CSS should/could use for the toTop link:

```css
.scrollup {
	position: fixed;
	z-index:99999;
	bottom: 10px;
	right:100px;
	width: 0; 
	height: 0; 
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-bottom: 25px solid #666;
}

.scrollup:hover {
	border-bottom: 25px solid #333;
}