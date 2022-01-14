import React, { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext/AppContext';

function LanguageSelect() {
  const {
    language,
    selectLanguage
  } = useContext(AppContext);

  const handleChange = (event) => {
    selectLanguage(event.target.value);
  };

  return (
    <div className="relative inline-flex">
      <svg className="absolute top-0 right-0 w-2 h-2 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#4d5156" fillRule="nonzero"/></svg>

      <select
        value={ language }
        onChange={ handleChange }
        className="h-10 pl-5 pr-10 bg-white border rounded-sm appearance-none border-googray-light text-googray-text hover:border-googray focus:outline-none"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="eo">Esperanto</option>
      </select>
    </div>
  );
}

export default LanguageSelect;