import React, { useState } from 'react';
import ConvertToRoman from '../utility/Converter';

const ConverterForm = () => {
  const [decimal, setDecimal] = useState('');
  const [roman, setRoman] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setRoman(ConvertToRoman(decimal));
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <input
          value={decimal}
          placeholder="Insert Decimal Number"
          onChange={(event) => setDecimal(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Result:</h3>
        <h4>{roman}</h4>
      </div>
    </section>
  );
};

export default ConverterForm;
