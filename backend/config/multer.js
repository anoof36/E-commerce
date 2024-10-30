import multer from "multer";

/* CEATING IMAGE STORAGE WITH MULTER LIBRARY */
const storage = multer.diskStorage({
  destination: "uploads/images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

export default upload;
