import fs from "fs";
import path from "path";

export const getFilesRecursively = (directory, fileExtRegex) => {
	// common_md 파일 안에 있는 애들을 string[]로 리턴
	let files = [];

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
	return files;
};
