interface ButtonProps {
  children: React.ReactNode;
}

export const H1Text: React.FC<ButtonProps> = ({ children }) => {
  return (
    <h1 className='text-4xl font-bold text-indigo-700 mb-4'>{children}</h1>
  );
};

export const H2Text: React.FC<ButtonProps> = ({ children }) => {
  return (
    <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{children}</h2>
  );
};

export const H3Text: React.FC<ButtonProps> = ({ children }) => {
  return <h3>{children}</h3>;
};

export const PText: React.FC<ButtonProps> = ({ children }) => {
  return <p className='text-lg text-gray-700 leading-relaxed'>{children}</p>;
};
