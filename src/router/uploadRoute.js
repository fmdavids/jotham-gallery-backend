const express = require("express");
const router = express.Router()
const {
    getPhotos,
    imageUpload,
    removePhoto
} = require("../controller/imageUploadController")
const upload = require("../utils/upload")


router.get(`/allphotos`, getPhotos)
router.post(`/postphoto`, upload.single('file'), imageUpload)
router.delete(`/:id/remove`, removePhoto)


module.exports = router;