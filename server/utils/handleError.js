/* handleError  */
export const handleError = (response, error, message="") => {
    return response.status(500).json({
        message: message || error.message || error,
        error: true,
        success: false
    });
};