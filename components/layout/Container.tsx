export const ComponentContainer: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center h-full pt-24 font-iosevka">
      {children}
    </div>
  );
};
