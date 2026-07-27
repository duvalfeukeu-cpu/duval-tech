const uploadImage = async (req, res) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        success: false,
        message: "Aucune image reçue.",
      });

    }

    console.log("========== CLOUDINARY ==========");
    console.log(req.file);
    console.log("================================");

    // Compatible avec plusieurs versions
    const imageUrl =
      req.file.secure_url ||
      req.file.path ||
      req.file.url;

    if (!imageUrl) {

      return res.status(500).json({
        success: false,
        message: "Impossible de récupérer l'URL de l'image.",
      });

    }

    res.status(200).json({

      success: true,

      message: "Image uploadée avec succès.",

      imageUrl,

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

module.exports = {
  uploadImage,
};
 