import express from "express";
import isAuthenaticated from '../middlewares/isAuthenticated.js';
import {getAdminJobs,getAllJobs,getJobById,postJob} from '../controllers/job.controller.js';

const router = express.Router();

router.route("/post").post(isAuthenaticated,postJob);
router.route("/get").get(isAuthenaticated,getAllJobs);
router.route("/getadminjobs").get(isAuthenaticated,getAdminJobs);
router.route("/get/:id").get(isAuthenaticated,getJobById);

export default router;
