// React Interview Questions :

// Question 1: 👉
// What is the correct way to conditionally render an element in React ?
//     ✅Explanation
// The correct way to conditionally render an element in React is { condition && <Element /> }.The && operator allows you to conditionally render an element based on a condition.If the condition is true, the element will be rendered; if the condition is false, the element will not be rendered.
    
//     Question 2: 👉
// What is the correct way to conditionally render a component with props in React ?
//     ✅Explanation
// The correct way to conditionally render a component with props in React is { condition && <MyComponent prop1={value1} prop2={value2} /> }.The && operator allows you to conditionally render a component based on a condition.If the condition is true, the component will be rendered with the specified props; if the condition is false, the component will not be rendered.You can pass the component with the props as the right - hand operand of the && operator.

//     Question 3: 👉
// Can you use JavaScript expressions in JSX ?
//     ✅Explanation
// You can use JavaScript expressions in JSX by wrapping them in curly braces.This allows you to insert dynamic values into your JSX code.

//     Question 4: 👉
// What is the purpose of the componentDidMount method in a class component in React ?
//     ✅Explanation
// The purpose of the componentDidMount method in a class component in React is to perform actions after the component is mounted.It is called once after the component is mounted and is used to trigger side effects or to make API calls.

//     Question 5: 👉
// Can you use the useReducer hook with an object as the second argument in React ?
//     ✅Explanation
// You cannot use the useReducer hook with an object as the second argument in React because the second argument must be a function. The useReducer hook expects a reducer function as the second argument, which takes the current state and an action as arguments and returns the new state.

//     Question 6: 👉
// What is the correct way to conditionally render a component with state in React ?
//     ✅Explanation
// The correct way to conditionally render a component with state in React is { condition && <MyComponent state={this.state} /> }.The && operator allows you to conditionally render a component based on a condition.If the condition is true, the component will be rendered with the specified state; if the condition is false, the component will not be rendered.You can pass the component with the state as the right - hand operand of the && operator.You can access the component's state using the this.state object.

// Question 7: 👉
// What is the correct way to listen for multiple events in React ?
//     ✅Explanation
// The correct way to listen for multiple events in React is element.addEventListener('click', myEventHandler).addEventListener('submit', myEventHandler).You can chain multiple calls to the addEventListener method to listen for multiple events on the same element.Each call should specify the event type and the event handler as arguments.

//     Question 8: 👉
// What is the difference between a prop and a state in React ?
//     ✅Explanation
// The difference between a prop and a state in React is that a prop is an argument passed from a parent component to a child component, while a state is an object that is managed within a component.

//     Question 9: 👉
// Can you use a JSX spread attribute with an array in React ?
//     ✅Explanation
// You can use a JSX spread attribute with an array in React if the array has objects as elements.The spread attribute will spread the properties of the objects into separate props.If the array has elements of a different type, the spread attribute will not work.

//     Question 10: 👉
// Can you pass a portal as a prop in React ?
//     ✅Explanation
// You cannot pass a portal as a prop in React because a portal is not a valid value for a prop.It is an object that is used to render children into a different DOM node.

//     Question 11: 👉
// What is a prop in React ?
//     ✅Explanation
// A prop in React is an object that represents an argument passed to a component.It can be used to pass data and behavior from a parent component to a child component.

//     Question 12: 👉
// What is the purpose of the componentWillUnmount method in a class component in React ?
//     ✅Explanation
// The purpose of the componentWillUnmount method in a class component in React is to perform actions before the component is unmounted.It is called before the component is unmounted and is used to clean up or cancel any ongoing processes or subscriptions.

//     Question 13: 👉
// What is the correct way to bind an event handler to a specific instance in React ?
//     ✅Explanation
// The correct way to bind an event handler to a specific instance in React is onClick = { myEventHandler.bind(this) }.The bind method creates a new function that has its this value bound to the specified object.It should be called on the event handler function or method and the object should be passed as an argument.

//     Question 14: 👉
// What is the purpose of the useCallback hook in React ?
//     ✅Explanation
// The purpose of the useCallback hook in React is to define the callback of a function component. It allows a function component to have a callback that is memoized and that only changes if the dependencies have changed.It is useful for optimizing the performance of callbacks.

//     Question 15: 👉
// What is the purpose of a portal in React ?
//     ✅Explanation
// The purpose of a portal in React is to escape the parent component's DOM and attach children to a different DOM node. It can be useful for rendering children into a modal or overlay.

// Question 16: 👉
// What is the correct way to assign a key to each element in a list in React ?
//     ✅Explanation
// The correct way to assign a key to each element in a list in React is { list.map((item, index) => <li key={index}>{item}</li>) }. The map() method creates a new array with the results of calling a provided function on every element in the calling array.You can pass a function to the map() method that returns an element with a key for each item in the list.You can use the index of the item in the list as the key, or a unique field of the item, such as the id field.You can then wrap the resulting array in a parent element, such as a<ul> or < ol >, and pass it to the render() method.

//     Question 17: 👉
// What is the correct way to render a list of components with props in React ?
//     ✅Explanation
// The correct way to render a list of components with props in React is { list.map(item => <MyComponent prop={item} />) }. The map() method creates a new array with the results of calling a provided function on every element in the calling array.You can pass a function to the map() method that returns a component with a prop to be rendered for each item in the list.You can then wrap the resulting array in a parent element, such as a<div>, and pass it to the render() method.

//     Question 18: 👉
// What is the correct way to conditionally render an element based on a component's state in React?
// ✅Explanation
// The correct way to conditionally render an element based on a component's state in React is {this.state.condition && <Element />}. The && operator allows you to conditionally render an element based on a condition. If the condition is true, the element will be rendered; if the condition is false, the element will not be rendered. You can access the component's state using the this.state object.

//     Question 19: 👉
// What is the purpose of the componentDidUpdate method in a class component in React ?
//     ✅Explanation
// The purpose of the componentDidUpdate method in a class component in React is to perform actions after the component is updated.It is called after the component is updated and is used to trigger side effects or to make API calls.

//     Question 20: 👉
// Can you use this in JSX ?
//     ✅Explanation
// You can use the this keyword in JSX to refer to the current instance of a component.It works the same way as it does in JavaScript.

//     Question 21: 👉
// What is a React element ?
//     ✅Explanation
// A React element is an object that represents a DOM node in a React application.It is a lightweight description of what to render.

//     Question 22: 👉
// What is a React portal ?
//     ✅Explanation
// A React portal is an object that represents a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.It allows you to escape the parent component's DOM and attach the children to a different DOM node.

// Question 23: 👉
// What is the correct way to stop listening for an event in React ?
//     ✅Explanation
// The correct way to stop listening for an event in React is element.removeEventListener('click', myEventHandler).The removeEventListener method allows you to remove an event handler from an element.It should be called on the element and it takes the event type and the event handler as arguments.The event handler should be the same function or method that was passed to the addEventListener method.

//     Question 24: 👉
// What is the correct way to handle form input changes in React ?
//     ✅Explanation
// The correct way to handle form input changes in React is onChange = { e => this.setState({ value: e.target.value }) }.The setState() method of a React component updates the component's state and triggers a re-render of the component. You can pass a function to the onChange prop of the input element that updates the component's state with the value of the input.You can access the input value in the function by accessing the target property of the Event object and the value property of the target.You can update the component's state using the setState() method and passing an object with the updated state as an argument.

// Question 25: 👉
// What is the correct way to define an event handler in React ?
//     ✅Explanation
// The correct way to define an event handler in React is onClick = { myEventHandler }.The event handler should be a function or a method and it should be passed as a prop to the element that triggers the event.The event handler should be camelCase and should start with on.

//     Question 26: 👉
// What is the purpose of the useState hook in React ?
//     ✅Explanation
// The purpose of the useState hook in React is to define the state of a function component. It allows a function component to have a state and to update the state when the component is re - rendered.

//     Question 27: 👉
// What is the purpose of the shouldComponentUpdate method in a class component in React ?
//     ✅Explanation
// The purpose of the shouldComponentUpdate method in a class component in React is to determine if the component should update when the props or state change.It is called before the component is updated and is used to optimize performance by allowing the component to return false if it determines that the component does not need to be re - rendered.

//     Question 28: 👉
// What is the purpose of the render method in a class component in React ?
//     ✅Explanation
// The purpose of the render method in a class component in React is to define the UI of the component.It is called every time the component is updated and is used to return a description of what the component should render.It must return a single React element.

//     Question 29: 👉
// What is the correct way to render a list in React ?
//     ✅Explanation
// The correct way to render a list in React is { list.map(item => <li>{item}</li>) }. The map() method creates a new array with the results of calling a provided function on every element in the calling array.You can pass a function to the map() method that returns an element to be rendered for each item in the list.You can then wrap the resulting array in a parent element, such as a<ul> or < ol >, and pass it to the render() method.

//     Question 30: 👉
// What is a higher - order component in React ?
//     ✅Explanation
// A higher - order component in React is a function that takes a component as an argument and returns a new component.It can be used to add additional behavior to a component.

//     Question 31: 👉
// Can you use class in JSX ?
//     ✅Explanation
// You cannot use the class keyword in JSX because it is a reserved word in JavaScript.Instead, you should use the className attribute to specify a class for an element.

//     Question 32: 👉
// What is JSX ?

//     ✅Explanation
// JSX is a syntax extension for JavaScript that allows you to write HTML - like syntax in your code.It is not a preprocessor for HTML, CSS, or JSON.

//     Question 33: 👉
// What is a React component ?
//     ✅Explanation
// A React component is an object that represents a piece of UI in a React application.It is a reusable piece of code that can be rendered multiple times.

//     Question 34: 👉
// Can you use a pure component as a stateful component in React ?
//     ✅Explanation
// You cannot use a pure component as a stateful component in React because a pure component is a function that does not have a state object.It is a simpler alternative to a class component that does not implement state or lifecycle methods.

//     Question 35: 👉
// What is the correct way to pass an event object to an event handler in React ?
//     ✅Explanation
// The correct way to pass an event object to an event handler in React is onClick = {(e) => myEventHandler(e) }. The event object contains information about the event, such as the target element, the type of event, and the time the event occurred.It should be passed as an argument to the event handler function or method inside an arrow function.

// Question 36: 👉
// Can you use the useImperativeHandle hook with an empty object as the third argument in React ?
//     ✅Explanation
// You can use the useImperativeHandle hook with an empty object as the third argument in React.When the useImperativeHandle hook is called with an empty object as the third argument, it does not expose any imperative methods or properties to the parent component.This is useful for scenarios where you want to use the useImperativeHandle hook but do not need to expose any imperative methods or properties.

//     Question 37: 👉
// What is the purpose of the useEffect hook in React ?
//     ✅Explanation
// The purpose of the useEffect hook in React is to perform actions after the component is updated.It allows a function component to have side effects and to perform tasks such as making API calls or subscribing to events.

//     Question 38: 👉
// Can you pass props to a higher - order component in React ?
//     ✅Explanation
// You can pass props to a higher - order component in React by calling the higher - order component function and passing it the props as an argument.The higher - order component can then pass the props down to the wrapped component.

//     Question 39: 👉
// What is the correct way to render a list of components in React ?
//     ✅Explanation
// The correct way to render a list of components in React is { list.map(item => <MyComponent />) }. The map() method creates a new array with the results of calling a provided function on every element in the calling array.You can pass a function to the map() method that returns a component to be rendered for each item in the list.You can then wrap the resulting array in a parent element, such as a<div>, and pass it to the render() method.

//     Question 40: 👉
// Can you pass a state to a child component as a prop ?
//     ✅Explanation
// You can pass a state to a child component as a prop by passing it as an argument to the child component when you render it.This allows you to share state between components.

//     Question 41: 👉
// Can you use style in JSX ?
//     ✅Explanation
// You can use the style attribute in JSX to specify inline styles for an element.The style value should be an object that specifies the styles as properties and values.

//     Question 42: 👉
// What is the purpose of a fragment in React ?
//     ✅Explanation
// The purpose of a fragment in React is to group children without adding an extra node to the DOM.It helps to avoid unnecessary wrapping elements and improve the readability and structure of the JSX.

//     Question 43: 👉
// What is a stateful component in React ?
//     ✅Explanation
// A stateful component in React is a component that does have a state object.It is a class that extends the React.Component class and has a render method.

//     Question 44: 👉
// What is the correct way to attach an event handler to an element in React ?
//     ✅Explanation
// The correct way to attach an event handler to an element in React is element.addEventListener('click', myEventHandler).The addEventListener method allows you to attach an event handler to an element and to specify the type of event to listen for.It should be called on the element and it takes the event type and the event handler as arguments.

//     Question 45: 👉
// What is the purpose of the useRef hook in React ?
//     ✅Explanation
// The purpose of the useRef hook in React is to define the ref of a function component. It allows a function component to have a mutable ref object that can be used to store a value across renders.It is similar to the ref attribute in JSX.

//     Question 46: 👉
// What is the purpose of rendering elements in React ?
//     ✅Explanation
// The purpose of rendering elements in React is to render HTML elements.React uses a virtual DOM to efficiently update the actual DOM and reduce the number of DOM manipulations.

//     Question 47: 👉
// What is a fragment in React ?
//     ✅Explanation
// A fragment in React is an object that represents a group of children without adding an extra node to the DOM.It allows you to return multiple elements from a component's render method without wrapping them in an extra element.

// Question 48: 👉
// What is the correct way to pass an argument to an event handler in React ?
//     ✅Explanation
// The correct way to pass an argument to an event handler in React is onClick = {() => myEventHandler(arg) }. The event handler should be a function or a method that takes an argument and it should be called inside an arrow function. The arrow function should be passed as a prop to the element that triggers the event.

//     Question 49: 👉
// Can you use the addEventListener method in a function component in React ?
//     ✅Explanation
// You can use the addEventListener method in a function component in React.The addEventListener method allows you to attach an event handler to an element and to specify the type of event to listen for.It should be called on the element and it takes the event type and the event handler as arguments.

//     Question 50: 👉
// Can you use the addEventListener method with a string as the first argument in React ?
//     ✅Explanation
// You can use the addEventListener method with a string as the first argument in React, but the string should be the type of the event, such as click or submit.The addEventListener method expects a string as the first argument, which is the type of the event to listen for.The event handler should be passed as the second argument.

//     Question 51: 👉
// Can you use JSX with other JavaScript libraries ?
//     ✅Explanation
// JSX can be used with other JavaScript libraries because it is a syntax extension for JavaScript.It is not tied to any specific library or framework.

//     Question 52: 👉
// What is the purpose of the useMemo hook in React ?
//     ✅Explanation
// The purpose of the useMemo hook in React is to perform memoization in a function component. It allows a function component to memoize a value and to only recalculate the value if the dependencies have changed.It is useful for optimizing the performance of expensive calculations.

//     Question 53: 👉
// What is the correct way to listen for an event on the document object in React ?
//     ✅Explanation
// The correct way to listen for an event on the document object in React is document.addEventListener('click', myEventHandler).The addEventListener method allows you to attach an event handler to the document object and to specify the type of event to listen for.It should be called on the document object and it takes the event type and the event handler as arguments.

//     Question 54: 👉
// Can you render a higher - order component in React ?
//     ✅Explanation
// You can render a higher - order component in React by calling the higher - order component function and passing it a component as an argument.The returned component can then be rendered like any other component.

//     Question 55: 👉
// What is the correct way to handle form radio button changes in React ?
//     ✅Explanation
// The correct way to handle form radio button changes in React is onChange = { e => this.setState({ value: e.target.value }) }.The setState() method of a React component updates the component's state and triggers a re-render of the component. You can pass a function to the onChange prop of the radio button element that updates the component's state with the value of the selected radio button.You can access the value of the selected radio button in the function by accessing the target property of the Event object and the value property of the target.You can update the component's state using the setState() method and passing an object with the updated state as an argument.

// Question 56: 👉
// What is the purpose of the constructor method in a class component in React ?
//     ✅Explanation
// The purpose of the constructor method in a class component in React is to define the initialization of the component.It is called before the component is mounted and is used to set the initial state of the component, bind event handlers, and perform other setup tasks.

//     Question 57: 👉
// Can you use variables in JSX ?
//     ✅Explanation
// You can use variables in JSX by wrapping them in curly braces.This allows you to insert dynamic values into your JSX code.

//     Question 58: 👉
// What is the correct way to handle form submissions in React ?
//     ✅Explanation
// The correct way to handle form submissions in React is onSubmit = { e => e.preventDefault() }.The preventDefault() method of the Event object prevents the default action of the event from being triggered.You can pass a function to the onSubmit prop of the form element that prevents the default action of the submit event by calling the preventDefault() method.You can access the Event object in the function by passing it as an argument, and use the preventDefault() method to prevent the form from being submitted.

//     Question 59: 👉
// What is the correct way to prevent the default behavior of an event in React ?
//     ✅Explanation
// The correct way to prevent the default behavior of an event in React is e.preventDefault().The preventDefault method cancels the default action of the event, such as submitting a form or following a link.It should be called inside the event handler function or method.

//     Question 60: 👉
// What is the correct way to handle form checkbox changes in React ?
//     ✅Explanation
// The correct way to handle form checkbox changes in React is onChange = { e => this.setState({ value: e.target.checked }) }.The setState() method of a React component updates the component's state and triggers a re-render of the component. You can pass a function to the onChange prop of the checkbox element that updates the component's state with the checked state of the checkbox.You can access the checked state of the checkbox in the function by accessing the target property of the Event object and the checked property of the target.You can update the component's state using the setState() method and passing an object with the updated state as an argument.

// Question 61: 👉
// What is the purpose of JSX ?
//     ✅Explanation
// The purpose of JSX is to define React components.It allows you to write HTML - like syntax in your code that gets transformed into React components.It does not render HTML elements, style components, or manage state.

//     Question 62: 👉
// Can you use for loops in JSX ?
//     ✅Explanation
// You cannot use for loops directly in JSX because JSX is a syntax extension for JavaScript and does not support traditional control statements.However, you can use the map function to achieve a similar effect.

//     Question 63: 👉
// What is the correct way to remove an event handler in React ?
//     ✅Explanation
// The correct way to remove an event handler in React is element.removeEventListener('click', myEventHandler).The removeEventListener method allows you to remove an event handler from an element.It should be called on the element and it takes the event type and the event handler as arguments.The event handler should be the same function or method that was passed to the addEventListener method.

//     Question 64: 👉
// What is the correct way to listen for an event in React ?
//     ✅Explanation
// The correct way to listen for an event in React is element.addEventListener('click', myEventHandler).The addEventListener method allows you to attach an event handler to an element and to specify the type of event to listen for.It should be called on the element and it takes the event type and the event handler as arguments.

//     Question 65: 👉
// Can you change the value of a prop in a child component ?
//     ✅Explanation
// The value of a prop is passed from a parent component and cannot be changed by a child component.It is considered to be immutable in the child component.

//     Question 66: 👉
// What is the correct way to conditionally render a component with a prop and state in React ?
//     ✅Explanation
// The correct way to conditionally render a component with a prop and state in React is { condition && <MyComponent prop={value} state={this.state} /> }.The && operator allows you to conditionally render a component based on a condition.If the condition is true, the component will be rendered with the specified prop and state; if the condition is false, the component will not be rendered.You can pass the component with the prop and state as the right - hand operand of the && operator.You can access the component's state using the this.state object.

// Question 67: 👉
// What is the purpose of a pure component in React ?
//     ✅Explanation
// The purpose of a pure component in React is to optimize performance by implementing a shallow prop and state comparison.When a pure component is re - rendered, it compares the current props and state to the previous props and state using a shallow comparison.If they are the same, the component is not re - rendered.If they are different, the component is re - rendered.

//     Question 68: 👉
// What is a stateless component in React ?
//     ✅Explanation
// A stateless component in React is a component that does not have a state object.It is a function that takes props as an argument and returns a React element.

//     Question 69: 👉
// What is the purpose of the useContext hook in React ?
//     ✅Explanation
// The purpose of the useContext hook in React is to define the context of a function component. It allows a function component to consume the context of a provider and to update the context when the component is re - rendered.

//     Question 70: 👉
// What is the correct way to extract a unique key for each item in a list in React ?
//     ✅Explanation
// The correct way to extract a unique key for each item in a list in React is { list.map(item => item.id) }. The map() method creates a new array with the results of calling a provided function on every element in the calling array.You can pass a function to the map() method that returns a unique key for each item in the list, such as the id field of the item.You can then pass the resulting array as the key prop for each element in the list.

//     Question 71: 👉
// What is a JSX spread attribute in React ?
//     ✅Explanation
// A JSX spread attribute in React is an attribute that allows you to spread an object into separate props.It allows you to pass the properties of an object as separate props to a component.

//     Question 72: 👉
// What is the purpose of the useReducer hook in React ?
//     ✅Explanation
// The purpose of the useReducer hook in React is to define the reducer of a function component. It allows a function component to have a reducer and to update the state using a reducer when the component is re - rendered.It is similar to the reduce method in JavaScript.

//     Question 73: 👉
// Can you use try-catch statements in JSX ?
//     ✅Explanation
// You cannot use try-catch statements directly in JSX because JSX is a syntax extension for JavaScript and does not support traditional control statements.However, you can use the try and catch functions to achieve a similar effect.

//     Question 74: 👉
// Can you render a React element multiple times ?
//     ✅Explanation
// You can render a React element multiple times by using a loop or by passing the element to a higher - order component that returns multiple copies of the element.

//     Question 75: 👉
// What is a pure component in React ?
//     ✅Explanation
// A pure component in React is a component that does not have any props.It is a function that returns a React element.

//     Question 76: 👉
// What is the purpose of a JSX spread attribute in React ?
//     ✅Explanation
// The purpose of a JSX spread attribute in React is to pass the properties of an object as separate props to a component.It allows you to avoid specifying props one by one and instead pass all the properties of an object at once.

//     Question 77: 👉
// What is the purpose of the useImperativeHandle hook in React ?
//     ✅Explanation
// The purpose of the useImperativeHandle hook in React is to define the imperative handle of a function component. It allows a function component to have an imperative handle that can be accessed by a parent component using a ref.It is useful for exposing imperative methods or properties to the parent component.

//     Question 78: 👉
// Can you change the value of a state in a component ?
//     ✅Explanation
// The value of a state can be changed within a component by using the setState method.It allows you to update the state and trigger a re - render of the component.

//     Question 79: 👉
// What is the correct way to conditionally render multiple elements in React ?
//     ✅Explanation
// The correct way to conditionally render multiple elements in React is { condition && [<Element1 />, <Element2 />] }.The && operator allows you to conditionally render elements based on a condition.If the condition is true, the elements will be rendered; if the condition is false, the elements will not be rendered.You can wrap the elements in an array and pass the array as the right - hand operand of the && operator.

//     Question 80: 👉
// Can you use functions in JSX ?
//     ✅Explanation
// You can use functions in JSX by wrapping them in curly braces.This allows you to insert dynamic values into your JSX code.

//     Question 81: 👉
// Can you use the useMemo hook with an empty array as the second argument in React ?
//     ✅Explanation
// You can use the useMemo hook with an empty array as the second argument in React if the component has props.When the useMemo hook is called with an empty array as the second argument, it is only called once after the component is mounted.This is useful for memorizing values that do not depend on the component's props or state.

// Question 82: 👉
// What is the correct way to listen for an event on the window object in React ?
//     ✅Explanation
// The correct way to listen for an event on the window object in React is window.addEventListener('click', myEventHandler).The addEventListener method allows you to attach an event handler to the window object and to specify the type of event to listen for.It should be called on the window object and it takes the event type and the event handler as arguments.

//     Question 83: 👉
// Can you use the removeEventListener method with a string as the second argument in React ?
//     ✅Explanation
// You cannot use the removeEventListener method with a string as the second argument in React because the second argument must be a function or a method.The removeEventListener method expects a function or method as the second argument, which is the event handler that was passed to the addEventListener method.The event type should be passed as the first argument.

//     Question 84: 👉
// Can you pass a fragment as a prop in React ?
//     ✅Explanation
// You cannot pass a fragment as a prop in React because a fragment is not a valid value for a prop.It is an object that is used as a placeholder for a group of children.

//     Question 85: 👉
// What is the correct way to conditionally render a component in React ?
//     ✅Explanation
// The correct way to conditionally render a component in React is { condition && <MyComponent /> }.The && operator allows you to conditionally render a component based on a condition.If the condition is true, the component will be rendered; if the condition is false, the component will not be rendered.You can pass the component as the right - hand operand of the && operator.

//     Question 86: 👉
// Can you use if-else statements in JSX ?
//     ✅Explanation
// You cannot use if-else statements directly in JSX because JSX is a syntax extension for JavaScript and does not support traditional control statements.However, you can use ternary operators or the && operator to achieve a similar effect.

//     Question 87: 👉
// What is the purpose of props in React ?
//     ✅Explanation
// The purpose of props in React is to pass data and behavior from a parent component to a child component.It allows you to reuse components and customize their behavior for different contexts.

//     Question 88: 👉
// Can you use the useEffect hook with an empty array as the second argument in React ?
//     ✅Explanation
// You can use the useEffect hook with an empty array as the second argument in React if the component has props.When the useEffect hook is called with an empty array as the second argument, it is only called once after the component is mounted.This is useful for performing actions that do not depend on the component's props or state.
