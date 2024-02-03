export function ButtonRed(prop) {
  return (
    <button
      className="bg-soft-red w-fix h-11 px-8 rounded-md text-white border-2 border-soft-red shadow-md shadow-shadow-blue text-lg
    hover:bg-white hover:border-2 hover:border-soft-red hover:text-soft-red
    transition duration-300 ease-in-out"
    >
      {prop.text}
    </button>
  );
}

export function ButtonRedNoShadow(prop) {
  return (
    <button
      className="bg-soft-red w-fix h-14 px-8 rounded-md text-white border-2 border-soft-red text-lg
    hover:bg-white hover:border-2 hover:border-soft-red hover:text-soft-red
    transition duration-300 ease-in-out"
    >
      {prop.text}
    </button>
  );
}

export function ButtonBlue(prop) {
  return (
    <button
      className="bg-soft-blue  w-fix h-14 px-6 rounded-md text-white border-2 border-soft-blue shadow-md shadow-shadow-blue text-lg 
    hover:bg-white hover:border-2 hover:border-soft-blue hover:text-soft-blue
    transition duration-300 ease-in-out"
    >
      {prop.text}
    </button>
  );
}

export function ButtonGray(prop) {
  return (
    <button
      className="bg-gray  w-fix h-14 px-6 rounded-md text-very-dark-blue border-2 border-gray shadow-md shadow-shadow-blue text-lg
    hover:bg-white hover:border-2 hover:border-very-dark-blue hover:text-very-dark-blue
    transition duration-300 ease-in-out"
    >
      {prop.text}
    </button>
  );
}
