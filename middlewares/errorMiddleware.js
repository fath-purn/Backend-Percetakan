// errorMiddleware.js
const handleErrors = (err, req, res, next) => {
    // Handle specific error types and return appropriate responses
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Invalid JSON payload' });
    }
    // Handle other types of errors
    // You can customize the error handling based on your specific requirements
    // Default error response
    return res.status(500).json({ error: 'Internal Server Error' });
  };
export { handleErrors };