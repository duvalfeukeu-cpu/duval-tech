const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Aucune image reçue.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Image uploadée avec succès.",
      imageUrl: req.file.path,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Erreur lors de l'upload.",
    });
  }
};

module.exports = {
  uploadImage,
};