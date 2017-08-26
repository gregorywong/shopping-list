import React from 'react';

const Headline = () => {
    return <h1 className="title">Welcome to the React world!</h1>
}

const Greeting = (props) => {
    return <p>You will love it {props.name} ({props.age})!</p>
}

const Message = (props) => {
    const {name, age} = props;
    return <p>My name is {name} ({age})!</p>
}

const App = () => {
    return (
        <div>
            <Headline />
            <Greeting name="John" age="25"/>
            <Message name="Sam" age={25}/>
        </div>
    )
}

Message.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number.isRequired
}

export default App;