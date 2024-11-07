import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
// Get the current directory of the executing file
const __dirname = path.dirname(__filename);
// Get the parent directory
const __parentDir = path.dirname(__dirname);

//deleting files
export const deleteFile = (pathToFile, cb = ()=> {}) => {
  const imagePath = path.join(__parentDir, pathToFile);
  if (!fs.existsSync(imagePath)) {
    console.log("File not found:", imagePath);
    return cb(new Error("File not found"));
  }

  fs.unlink(imagePath, (err) => {
    if (err) {
      console.log("Error deleting file:", err);
      cb(err);
    } else {
      console.log("Delete success");
      cb(err); // Callback without error if successful
    }
  });
};