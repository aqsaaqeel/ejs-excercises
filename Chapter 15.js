/* Write a page that displays a balloon (using the balloon emoji, 🎈). When you press the up arrow, it should inflate (grow) 10 percent, and when
you press the down arrow, it should deflate (shrink) 10 percent. You can control the size of text (emoji are text) by setting the font-size 
CSS property (style.fontSize) on its parent element. Remember to include a unit in the value—for example, pixels (10px).
The key names of the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the balloon, without scrolling the page.
When that works, add a feature where, if you blow up the balloon past a certain size, it explodes. 
In this case, exploding means that it is replaced with an 💥 emoji, and the event handler is removed 
(so that you can’t inflate or deflate the explosion). */

//Solution
<style>
  #balloon {
    width: 50px; /* Initial width */
    height: 50px; /* Initial height */
  }
</style>
<p id="balloon">🎈</p>

<script>
  // Your code here
  let balloon = document.querySelector("p");
  document.addEventListener("keydown", function(e) {
    e.preventDefault();
    let currentSize = parseInt(window.getComputedStyle(balloon).fontSize); 
    if (isNaN(currentSize)) {
      currentSize = 50;
    }
    if (e.key == "ArrowUp") {
      console.log(currentSize);
      balloon.style.fontSize = (currentSize + 100) + "px";
    }
    if (currentSize >= 200) {
      console.log("blast");
      balloon.textContent = "💥"; // Replace balloon with explosion emoji
    }
  });
</script>
/* Q:2 implement a mouse trail. Use absolutely positioned <div> elements with a fixed size and background color.
Create a bunch of such elements and, when the mouse moves, display them in the wake of the mouse pointer.*/

//Solution
<style>
   .trail { 
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
.main-container{
  width: 100%;
  height: 100vh;
  background-color: green;
}
</style>
<div class="main-container">

</div>
<script>
  const container = document.querySelector(".main-container");

container.addEventListener("mousemove", function(){
  const newElement = document.createElement("div");
  newElement.textContent = "😊";
  newElement.classList.add("trail");
  container.appendChild(newElement);
  
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  
  newElement.style.left = mouseX + "px";
  newElement.style.top = mouseY + "px";
});
  
</script>

/* Tabbed panels are widely used in user interfaces. They allow you to select an interface panel by choosing from a number of tabs
“sticking out” above an element.In this exercise you must implement a simple tabbed interface. Write a function, 
asTabs, that takes a DOM node and creates a tabbed interface showing the child elements of that node.
It should insert a list of <button> elements at the top of the node, one for each child element, 
containing text retrieved from the data-tabname attribute of the child. All but one of the original children should be hidden 
(given a display style of none). The currently visible node can be selected by clicking the buttons.
When that works, extend it to style the button for the currently selected tab differently so that it is obvious which tab is selected.*/

//SOlution



