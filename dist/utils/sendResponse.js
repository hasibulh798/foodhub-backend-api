export const sendResponse = ({ res, statusCode, success, message, data, error, }) => {
    return res.status(statusCode).json({
        success,
        message,
        data,
        error,
    });
};
//# sourceMappingURL=sendResponse.js.map