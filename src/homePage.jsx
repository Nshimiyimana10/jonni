// import React from "react";
// import ReactDom from 'react-dom/client';

function Dukundane(){
    const x = 6;
    const y = 23;
    const sum = x + y;
    const name = 'Quintus';
    return (
        <>
        <h1>How can I learn react.js faster?</h1>
        <p>Lorem ipsum dolor sit amet consectetur <strong>{x}hrs/day</strong>  adipisicing elit. Nesciunt, cupiditate.</p>
        <div>
            <h3>{name} told us to do hard because to know very well eact we need to to more and more every day.</h3>
            <p>where the days needed to know react aproximatly equal <strong>{(x * y) + sum}</strong>,
            which is a long period of time.
             </p>
             <p>To learn React faster, we have to commit ourselves to
                everyday revision and make more practices
             </p>
            <p>We are advancing in Github!Congz bro</p>
        </div>
        </>
        
    )
}

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<Dukundane />);

export default Dukundane;
