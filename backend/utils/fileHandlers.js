import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//deleting files
export const deleteFile = (pathToFile) => {
  const imagePath = path.join(__dirname, pathToFile);
  fs.unlink(imagePath, () => console.log("delete success"));
};
