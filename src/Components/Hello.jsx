import React,{useState} from 'react'

// eslint-disable-next-line react/prop-types
const Hello = ({name}) => {
    const [msj, setMsj] = useState("");

    const handleClick = () => {
        if (msj === "") {
          setMsj(", (from changed state)");
        } else {
          setMsj("");
        }
      };
  return (
    <>
      <p>
        Hello, {name}{msj}
      </p>
      <br />
      <button onClick={handleClick}>
        {msj === "" ? 'Click me' : 'Click me'}
      </button>
    </>
  )
}

export default Hello
