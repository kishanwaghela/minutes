import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: 'doyrexhp1',
    api_key: '979314352314462',
    api_secret: 'aJqXZ1Pj3U_ftuIwLplY4xHp6XI'
    // cloud_name : process.env.CLODINARY_CLOUD_NAME,
    // api_key : process.env.CLODINARY_API_KEY,
    // api_secret : process.env.CLODINARY_API_SECRET_KEY0
})

const uploadImageClodinary = async (image) => {
    const buffer = image?.buffer || Buffer.from(await image.arrayBuffer())

    const uploadImage = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: "minutes" }, (error, uploadResult) => {
            return resolve(uploadResult)
        }).end(buffer)
    })

    return uploadImage
}

export default uploadImageClodinary
