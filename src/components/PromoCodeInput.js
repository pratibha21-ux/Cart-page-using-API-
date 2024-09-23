import { useState } from 'react';

const PromoCodeInput = () => {
  const [code, setCode] = useState('');

  const applyCode = () => {
    // Handle promo code logic here
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter promo code"
        className="border p-2 w-full"
      />
      <button onClick={applyCode} className="mt-2 w-full bg-gray-200 py-2">
        Apply
      </button>
    </div>
  );
};

export default PromoCodeInput;
