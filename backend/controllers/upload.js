const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({

    cloudinary,

    params: async (req, file) => ({

        folder: "duval-tech/projects",

        allowed_formats: [
            "jpg",
            "jpeg",
            "png",
            "webp",
        ],

        resource_type: "image",

        transformation: [

            {
                width: 1200,
                crop: "limit",

                quality: "auto:good",

                fetch_format: "auto",

                flags: "progressive",
            },

        ],

    }),

});

const upload = multer({

    storage,

    limits: {

        fileSize: 5 * 1024 * 1024,

    },

});

module.exports = upload;