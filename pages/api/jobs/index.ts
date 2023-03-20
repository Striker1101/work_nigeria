const db = require("@/sequelize");
import validate from "next-api-validation";

// image Upload
const multer = require("multer");
const path = require("path");

// create main Model
const Job = db.Jobs;
const Review = db.reviews;

const User = db.user;
export default validate({
  post: async (req, res) => {
    let info = {
      // image: req.file.path,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
    };

    const job = await Job.create(info);
    res.status(200).send(job);
    console.log(job);
  },

  get: async (req, res) => {
    let { id } = req.query;
    let job = await Job.findOne({ where: { id: id } });
    res.status(200).send(job);
  },

  delete: async (req, res) => {
    let { id } = req.query;

    await Job.destroy({ where: { id: id } });

    res.status(200).send("job is deleted !");
  },

  put: async (req, res) => {
    let { id } = req.query;

    const job = await Job.update(req.body, { where: { id: id } });

    res.status(200).send(job);
  },
});
