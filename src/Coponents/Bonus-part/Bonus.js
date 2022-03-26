import React from 'react';

const Bonus = () => {
    return (
        <div className='mt-5 mb-5 container'>
            <h1> How React Works ? </h1>
                <h4>React is a JavaScript library (not a framework) that uses declarative code to build user interfaces (UIs) that are predictable and efficient. It may be used to create single-page apps and mobile apps, as well as more complicated apps if combined with other libraries.It's a JavaScript library for creating user interfaces that's declarative, quick, and versatile. It allows you to build complicated user interfaces out of "components," which are tiny, independent bits of code. Soon, we'll get to the amusing XML-like tags. We tell React what we want to display on the screen using components.</h4>

            <br />
            <br />
            <h1> Difference between props and state  </h1>
                <h4> The distinction between props and state is as follows:
                    A value should be assigned to the state at the start. A parent component can provide the initial value. Props passed from a parent component, however. It's possible that it's empty. If props is empty, we can set the default value. Props have a read-only attribute. State, on the other hand, can read and written. Only the component that owns the state has the ability to modify it. The state is a private entity. It allows users to interact with the component. Props serve as non-interactive elements. The state is in charge of retrieving remote data. Furthermore, props only show the data that has been received. Higher-order components are required by the state. Props, nevertheless, can perform the same functions as higher-order components without the need for the state even with minimal lines of code. Within the render method of the parent component, we can fork out the state as props to child components, and props convey information across the component to component.
                </h4>
        </div>
    );
};

export default Bonus;