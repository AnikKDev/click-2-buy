import React from 'react';

const Questions = () => {
    return (
        <div>
            <h2>How React works?</h2>
            <p>React is a library of javascript. It creates a virtual DOM. There are not that much of differences between  Real DOM and the virtual DOM. When we create somehting inside JSX syntex what react does is, it renders it on its very own virtual DOM and it compare the data to the main HTML DOM. If it notices any differences between them, then it simply replaces the differences. And it happens so fast. The JSX is not the pure html but it's look alike. Then after renderig it shows us the changes we did on our website.</p>
            <hr />
            <h2>Props vs State</h2>
            <p>Props is short form of properties. It's kinda function parameter and contains arguments. we can pass down any data to any child component of a parent compnent through props. The data can be anything. A function, An array etc. We have to set the name of the data we want to pass down to it's child and the child component will receive the data through props.(the name that been set). It is read only data. Means, we can not rewrite the data  from a child component. Though we can edit the data in the parent component from where the data been passed down.
                On the other hand state is something that can store some data and it is mutable. Unlike props, it only can be passed withing the component. We can modify the data. It means state is both write and readable
            </p>
        </div>
    );
};

export default Questions;