const express = require('express');
const app = express();
const router = express.Router();
const multer = require('multer');
const bodyParser = require("body-parser");
const path = require('path')
const uploadController = require('./controller') 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
});

router.post("/upload-file", upload.single("file"), uploadController.uploadData);

module.exports = router;