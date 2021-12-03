interface Skill {
  skill: string;
}
const Skill = (props: Skill): JSX.Element => {
  return (
    <div className="border-2 border-crimson rounded-full hover:bg-crimson hover:text-white cursor-default">
		  <span className="p-4">
			  {props.skill}
		  </span>
    </div>
  );
};

export default Skill;
