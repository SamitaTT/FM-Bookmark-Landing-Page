export function ButtonRed(prop) {
  return (
    <button
      className="bg-soft-red lg:w-fix lg:h-11 lg:px-8 rounded-md text-white border-2 border-soft-red shadow-md shadow-shadow-blue lg:text-lg
    hover:bg-white hover:border-2 hover:border-soft-red hover:text-soft-red
    transition duration-300 ease-in-out
    dark:shadow-none dark:bg-dark-soft-red dark:hover:bg-dark-light-red dark:hover:text-dark-soft-red dark:hover:border-dark-light-red"
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
    transition duration-300 ease-in-out
    dark:shadow-none dark:bg-dark-soft-red dark:hover:bg-dark-light-red dark:hover:text-dark-soft-red dark:hover:border-dark-light-red"
    >
      {prop.text}
    </button>
  );
}

export function ButtonBlue(prop) {
  return (
    <button
      className="bg-soft-blue  w-fix h-14 2xl:px-6 rounded-md text-white border-2 border-soft-blue shadow-md shadow-shadow-blue text-lg px-4
    hover:bg-white hover:border-2 hover:border-soft-blue hover:text-soft-blue
    transition duration-300 ease-in-out
    dark:shadow-none dark:bg-dark-soft-blue dark:text-white dark:hover:bg-dark-light-blue dark:hover:text-dark-soft-blue"
    >
      {prop.text}
    </button>
  );
}

export function ButtonGray(prop) {
  return (
    <button
      className="bg-gray w-fix h-14 2xl:px-6 rounded-md text-very-dark-blue border-2 border-gray shadow-md shadow-shadow-blue text-lg px-4
    hover:bg-white hover:border-2 hover:border-very-dark-blue hover:text-very-dark-blue
    transition duration-300 ease-in-out
    dark:shadow-none dark:bg-dark-secondary dark:text-white dark:hover:bg-dark-gray dark:hover:text-dark-secondary dark:border-dark-grayish-blue"
    >
      {prop.text}
    </button>
  );
}
