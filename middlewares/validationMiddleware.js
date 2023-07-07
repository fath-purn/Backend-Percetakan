// validationMiddleware.js
const validateInput = (req, res, next) => {
    // Perform input validation logic here
    // You can access the request body or parameters using req.body or req.params
     // Example validation: Check if the request body contains a required field
    if (!req.body.name) {
      return res.status(400).json({ error: 'Name is required' });
    }
     // If validation passes, proceed to the next middleware or route handler
    next();
  };
   export { validateInput };