import React, { useState, useRef } from 'react';

const PositioningStatementGlobal = () => {
  const [formData, setFormData] = useState({
    targetAudience: '',
    brand: '',
    category: '',
    keyBenefit: '',
    competitor: '',
    usp: ''
  });
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const generateStatement = () => {
    return `For ${formData.targetAudience || '[target audience]'}, ${formData.brand || '[brand]'} offers ${formData.category || '[category/product]'} that delivers ${formData.keyBenefit || '[key benefit]'}. Unlike ${formData.competitor || '[competitor]'}, ${formData.brand || '[brand]'} emphasizes ${formData.usp || '[USP]'}.`;
  };

  const copyToClipboard = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
    }
  };

  return (
    <form className="max-w-4xl w-full mx-auto p-8 bg-blue-100 rounded-lg shadow-lg" aria-labelledby="form-title">
      <h1 id="form-title" className="text-2xl font-bold mb-6 text-gray-700 text-center">
        Positioning Statement Creator
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <label htmlFor={key} className="text-sm font-medium text-gray-600 mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={handleInputChange}
              placeholder={`Enter ${key}`}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded shadow-inner mb-8">
        <h2 className="text-lg font-bold mb-4 text-gray-700">Your positioning statement:</h2>
        <textarea
          ref={textareaRef}
          value={generateStatement()}
          readOnly
          className="w-full p-4 border border-gray-300 rounded h-32 resize-none focus:outline-none"
          aria-label="Generated positioning statement"
        />
      </div>

      <div className="flex justify-center space-x-4">
        <button
          type="button"
          onClick={copyToClipboard}
          className={`px-6 py-2 font-semibold text-white rounded ${
            copied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
          } transition`}
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
        <button
          type="button"
          onClick={() => setFormData({ targetAudience: '', brand: '', category: '', keyBenefit: '', competitor: '', usp: '' })}
          className="px-6 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default PositioningStatementGlobal;
