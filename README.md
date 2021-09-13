# React: Event Handling - Basic Form
Created with [CodeSandbox](https://codesandbox.io/)  
Notes from: React module  
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu

## Description
This app renders a very simple form: 
* A greeting heading "Hello" 
* An Input type text with a placeholder asking our name.
* A Submit Button

The events that will happen while interacting with the form are:
* When the button is clicked, the heading will change to "Submitted".      
* When we hoover the mouse over the submit button, it will change its colour.     
* When the mouse leaves the submit button area, the button will come back to its original style.    
      
---
## Notes

### Handling events in React. 
How to detect user interactions with your app or your components       
and how to use React to render different things depending on those events.

[Documentation: HTML (Event) Attribute Reference](https://www.w3schools.com/tags/ref_attributes.asp)  
Remember, when we're converting HMTL elements into JSX or React Components the names must be camelCased.

We can tap into very simple events such as when a button gets clicked via the attributes for those HMTL elements.      
The attribute in this case is ```onClick```.

eg: change the text in our H1 Heading when onClick is triggered. 
```javascript
function App() {
  const [headingText, setHeadingText] = useState("Hello");
  });

  function handleClick() {
    setHeadingText("Submitted");
  }
  
  return (
    <div className="container">
      <h1>{headingText}</h1>
      ...
      <button onClick={handleClick}>
    </div>
  );
}
```

Instead of just having the word "Hello" in here, we will have a variable called ```headingText```    
```html
<h1>{headingText}</h1>
```
This ```headingText``` is going to have state ```useState("Hello")```       
because it's going to change when the submit button gets clicked, ```onClick``` event.        

So we create a new stateful ```headingText``` and also a method for setting the headingText: ```setHeadingText```     
And then we are going to set it to useState.    
```javascript
const [headingText, setHeadingText] = useState("Hello");    
```
This **useState** is a **function** and, inside the parentheses, a **starting value**.  

Now, when the button gets clicked, ```onClick``` it will trigger the function ```handleClick```     
```html
<button onClick={handleClick}>
```
```javascript
  function handleClick() {
    setHeadingText("Submitted");
  }
```
Finally, the function ```handleClick``` uses the method ```setHeadingText``` to change our H1 Element.

#### Handling styles
Remember that you can change the appearance of an HTML element by using the style attribute.     
the style attribute must be camelCased.


---
## What I have learned with this project:
* Event Handling
* Event Listeners (onClick, mouseOver, mouseOut)
* Managing state (set and use it)
* Inline styling 
* *Conditional Rendering (commented)*
