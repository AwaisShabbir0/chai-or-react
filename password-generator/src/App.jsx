import { useCallback, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) str += '0123456789';
    if (includeChars) str += '!@#$%^&*()_+[]{}|;:,.<>?';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, includeNumbers, includeChars]);

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeChars, generatePassword]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <div className='width-full max-w-md mx-auto shadow-lg px-4 py-6 my-8 bg-gray-700 text-lightblue rounded-lg'>
        <h1 className='text-2xl font-bold text-center mb-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3 bg-white text-gray-800 font-mono text-lg'
            placeholder='Password'
            readOnly
          />
          <button
            onClick={handleCopy}
            className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold transition-colors duration-200'
            style={{ borderTopRightRadius: '0.75rem', borderBottomRightRadius: '0.75rem' }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className='flex flex-col gap-4 mb-4'>
          <label className='flex items-center justify-between'>
            <span>Password Length:</span>
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              onChange={e => setLength(Number(e.target.value))}
              className='rounded px-2 py-1 w-16 bg-gray-200 text-gray-800'
            />
          </label>
          <label className='flex items-center justify-between'>
            <span>Include Numbers</span>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={e => setIncludeNumbers(e.target.checked)}
              className='accent-blue-500 w-5 h-5'
            />
          </label>
          <label className='flex items-center justify-between'>
            <span>Include Special Characters</span>
            <input
              type="checkbox"
              checked={includeChars}
              onChange={e => setIncludeChars(e.target.checked)}
              className='accent-blue-500 w-5 h-5'
            />
          </label>
        </div>
        <button
          onClick={generatePassword}
          className='w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition-colors duration-200'
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
