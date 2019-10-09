
// AWS DEPENDENCIES
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");
const url = require("url");
require("dotenv").config()

aws.config.update({
    secretAccessKey: process.env.secretAccessKey,
    accessKeyId: process.env.accessKeyId,
    region: process.env.region

})

const s3 = new aws.S3()

// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: "hermes-pictures'",
//         metadata: function (req, file, cb) {
//             cb(null, { fieldName: "Test" });
//         },
//         key: function (req, file, cb) {
//             cb(null, Date.now().toString())
//         }
//     })
// })
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'hermes-pictures',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: "Test" });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    }),
    // limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
    // fileFilter: function (req, file, cb) {
        //  checkFileType( file, cb );
    // }
})

module.exports = upload