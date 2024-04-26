# Nyzul
A lightweight layout engine created for Magian Calc
## Usage
Add nyzul to your project wherever you see fit, then instantiate a `Nyzul` object.  
By default, Nyzul will locate a div with the id `pageContainer` and load it as the root element of your application 
> To override this behavior, provide your desired root id as an argument to the constructor

### Dependencies
Nothing. Nyzul will run directly in the browser on its own.

## Creating Elements
There are two ways to use Nyzul to create elements. You can create them directly, or as part of class components.
### Direct
Use `Nyzul.createElement(componentDefinition)` to create HTML elements in a declarative manner.  

#### componentDefinition
* `type`: HTML tag name, default: div
* `id`: desired tag id
* `classes`: a list of class names
* `innerText`: the text to display inside the element
* `attributes`: an object defining attribute names and values
* `eventCallbacks`: an array of callback objects
  * `type`: the trigger condition (takes any valid JSDom event)
  * `listener`: a callback function that handles the event.
  * `options`: any options you could pass to a normal event listener
* `children`: a list of child elements. This will handle components as well.


### Class
Class components allow you to create more complicated components than direct creation.  
#### Steps
* Create an es6 class that extends `Component`.  
* Implement the `render` method, attaching new elements to your component's `element`.
* optionally implement the afterRender method to handle any cleanup or event registration tasks.

