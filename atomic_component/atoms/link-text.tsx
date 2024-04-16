interface LinkTextProps {
  children: React.ReactNode;
}

// TODO: Next UIみたいに引数の指定で変更できるように実装したい
// https://nextui.org/docs/components/link

export const NormalLink: React.FC<LinkTextProps> = ({ children }) => {
  return (
    <h1 className='text-4xl font-bold text-indigo-700 mb-4'>{children}</h1>
  );
};

export const MiddleLink: React.FC<LinkTextProps> = ({ children }) => {
  return (
    <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{children}</h2>
  );
};

export const LargeLink: React.FC<LinkTextProps> = ({ children }) => {
  return <h3>{children}</h3>;
};
