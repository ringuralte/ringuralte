export const TitleBox: React.FC<{title:string}> = ({ title }) => {
  return (
    <h2 className="p-2 md:p-4 w-40 md:w-48 text-center text-xl md:text-2xl text-white bg-black border-2 border-black">
      {title}
    </h2>
  );
};
