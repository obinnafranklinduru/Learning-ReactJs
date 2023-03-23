import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('react');

  const handleShipping = (e) => {
    setShipping(e.target.checked)
  }

  const handleFramework = (e) => {
    setFramework(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Shipping:", shipping);
    console.log("Framework:", framework);
    
    setShipping(false);
    setFramework('react');
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>

        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping</label>
          <input
            type="checkbox"
            id='shipping'
            name='shipping'
            checked={shipping}
            onChange={handleShipping}
          />
        </div>

        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>Framework</label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => {
              return (
                <option key={framework}>{framework}</option>
              )
            })}
          </select>
        </div>

        <button type='submit' className='btn btn-block'>submit</button>
      </form>
    </div>
  );
};
export default OtherInputs;
