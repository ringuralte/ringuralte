export const TitleBox: React.FC<{title:string}> = ({ title }) => {
  return (
    <h2 className="p-4 w-48 text-center text-2xl text-white bg-black border-2 border-black">
      {title}
    </h2>
  );
};
