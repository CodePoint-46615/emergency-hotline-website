## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? <br>
getElementById --> fetch the HTML component based on its ID.<br>
getElementsByClassName --> fetch the HTML component based on its class name.<br>
querySelector --> select the first match based on the CSS selector.<br>
querySelectorAll --> select all matches based on the CSS selector.<br>

## 2. How do you create and insert a new element into the DOM?<br>
for creating an element --> createElement()<br>
for inserting --> appendChild()

## 3. What is Event Bubbling and how does it work?<br>
Event bubbling is a DOM mechanism that traverses the DOM tree in reverse, meaning (child => parent node) when an event is triggered. When an event is triggered, the child node propagates upward in a DOM tree through the parent to find the root element.  

## 4. What is Event Delegation in JavaScript? Why is it useful?<br>
Instead of adding multiple listeners to the child, we can add a single listener to the parent. This process is called the event delegation. It is useful because it reduces event listeners and the complexity of code. 

## 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() --> prevent the default behavior related to the form submission event.<br> 
stopPropagation() --> prevents the event related to bubbling up the DOM tree.


