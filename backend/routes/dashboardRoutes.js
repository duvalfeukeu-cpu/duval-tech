const express = require("express");

const router = express.Router();

const {

    getDashboardStats,
    getRecentProjects,
    getRecentMessages,
    getRecentActivity,

} = require("../controllers/dashboardController");
// ===================================
// Dashboard
// ===================================

router.get("/stats", getDashboardStats);

router.get("/recent-projects", getRecentProjects);
router.get(  "/recent-messages",getRecentMessages);
router.get("/recent-activity",  getRecentActivity );

module.exports = router;