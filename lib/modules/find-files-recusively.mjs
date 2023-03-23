import fs from "fs";
import path from "path";

export const getFilesRecursively = (directory, fileExtRegex) => {
	let files = [];
	console.log(files);
	const recursiveFindFiles = (dir) => {
		const filesInDirectory = fs.readdirSync(dir);
		//.png 와 .md를 구분하는 것 같다.
		for (const file of filesInDirectory) {
			const absolute = path.join(dir, file);
			if (fs.statSync(absolute).isDirectory()) {
				recursiveFindFiles(absolute);
			} else if (path.extname(absolute).match(fileExtRegex)) {
				//확장자가 .md인것은 files에 푸쉬
				files.push(path.relative(directory, absolute));
			}
		}
	};
	recursiveFindFiles(directory);
	//디렉토리를 넣으면 그 안에 있는 Files가 나오는 함수 (자료구조로 트리 모양인가? 재귀를 활용하고 있네?)

	return files;
};
