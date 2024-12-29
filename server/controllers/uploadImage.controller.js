import { handleError } from "../utils/handleError.js"
import uploadImageClodinary from "../utils/uploadImageClodinary.js"

const uploadImageController = async (request, response) => {
    try {
        const file = request.file
        const uploadImage = await uploadImageClodinary(file)

        return response.json({
            message: "Upload done",
            data: uploadImage,
            success: true,
            error: false
        })
    } catch (error) {
        handleError()
    }
}

export default uploadImageController