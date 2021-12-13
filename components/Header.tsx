import React, { useEffect, useState } from "react";

const title = ["ringu ralte", "web developer"];
export const Header: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [headerTitle, setHeaderTitle] = useState<string>(title[index]);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isDoing, setIsDoing] = useState<boolean>(false);
h
  // Initial hold for 3 secs
	/* useEffect(() => {
		setIsDoing(true);
  * }, []); */
	useEffect(() => {
		setTimeout(() => {
			setIsDoing(true);
		}, 3000);
	}, []);

  // set delete letters or add letters status
	useEffect(() => {
		if (headerTitle.length === title[index].length && isDoing) {
			setIsDelete(true);
			setIsAdd(false);
		} else if (headerTitle.length === 0 && isDelete && isDoing) {
			setIsDelete(false);
			setIsAdd(true);
			if (index === 0) {
				setIndex(1);
			} else if (index === 1) {
				setIndex(0);
			}
		}
	}, [index, isAdd, isDelete, headerTitle, isDoing]);

  // similar to an onloading effect
	useEffect(() => {
		setIsDoing(false);
		if (headerTitle.length === title[index].length) {
			setTimeout(() => {
				setIsDoing(true);
			}, 3000);
		} else if (headerTitle.length === 0) {
			setTimeout(() => {
				setIsDoing(true);
			}, 200);
		}
	}, [headerTitle, index, isDoing]);

	if (isDelete) {
		setTimeout(() => {
			setHeaderTitle(headerTitle.substring(0, headerTitle.length - 1));
		}, 200);
	}

	if (isAdd) {
		setTimeout(() => {
			setHeaderTitle(title[index].substring(0, headerTitle.length + 1));
		}, 200);
	}

	return (
    <header className="flex justify-center">
      <h1 className="text-4xl py-12 font-iosevka">
        {headerTitle}
        <span className="blinking-cursor">_</span>
      </h1>
    </header>
  );
};
