import { sendResponse } from "../utils/sendResponse.js";
export const notFound = (req, res) => {
    return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Not Found!",
    });
};
//# sourceMappingURL=notFound.js.map