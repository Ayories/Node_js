export const loggingMiddleware = (req, res, next) => {
        console.log("We are working on a middleware");
        console.log(req.body);
        next()
        }