1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer: getElenentById  Only selects a one element by its unique id. getElementsByClassName Selects all elements with a specific class name.querySelector/ querySlectorAll allow you to use any valid css selector.

2. How do you create and insert a new element into the DOM?

answer: If I want to create a new elenment with DOM first I have to use document.createElement('element name'), then i have to set textContent or innerText finally i have to append it with his parrent by th appendChild() method.

3. What is Event Bubbling? And how does it work?

answer: Event bubbling is a mechanism in a dom where an event  is triggered on a specific  elemetn bubble up through it parent element until it reaches the top of the document. 
when a action is happen then first capturing phase is start and capture the target element. Then target phase is the phase where from the bubbling start . Then bubbling phase the event start from target element and gradually bubble and reaches the top of the document.

4. What is Event Delegation in JavaScript? Why is it useful?

answer:Event delegation is when a parent element handles events for its child elements, so you don’t need to add event listeners to each child.
It is useful because you don’t have to attach event handlers to every child element individually.

5. What is the difference between preventDefault() and  methods?

answer: preventDefault() method stops the browser's default behavior for a specific element and stopPropagation() method stops the event's journey through the DOM.