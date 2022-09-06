import React, { useState } from 'react';
import ConvertToRoman from '../utility/Converter';

const ConverterForm = () => {
  const [decimal, setDecimal] = useState('');
  const [roman, setRoman] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setRoman(ConvertToRoman(decimal));
  };

  return (
    <section className="converter-section">
      <hr />
      <form onSubmit={submitHandler}>
        <label>Decimal Number</label>
        <input
          value={decimal}
          placeholder="Insert Decimal Number"
          onChange={(event) => setDecimal(event.target.value)}
          maxLength={4}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="result">
        <label>Result:</label>
        <h2>{roman !== '' ? roman : '...'}</h2>
      </div>
      <hr />
    </section>
  );
};

export default ConverterForm;
