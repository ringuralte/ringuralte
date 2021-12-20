export const ComponentContainer: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center pt-24 h-full font-iosevka">
      {children}
    </div>
  );
};
