// import React from 'react'

// function Character() { // ❗ Add the props
//   // ❗ Create a state to hold whether the homeworld is rendering or not
//   // ❗ Create a "toggle" click handler to show or remove the homeworld
//   return (
//     <div>
//       {/* Use the same markup with the same attributes as in the mock */}
//     </div>
//   )
// }

// export default Character



import React, { useState } from 'react';

function Character({ name, homeworld }) { //
  const [showHomeworld, setShowHomeworld] = useState(false);
  const toggleHomeworld = () => {
    setShowHomeworld(prevShowHomeworld => !prevShowHomeworld);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{name}</h3>
      {showHomeworld && (
        <p className="character-planet">
          Planet: {homeworld || 'Unknown'}
        </p>
      )}
    </div>
  );
}

export default Character;