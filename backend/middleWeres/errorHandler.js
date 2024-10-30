
export const errorHandler = (err, req, res, next) => {
    // Log the error message for debugging
    console.error(err.message); // Log the error message
  
    // Set the response status based on the error type or a default value
    const statusCode = err.statusCode || 500;
  
    // Send a JSON response with the error message
    res.status(statusCode).json({
      message: err.message || 'Internal Server Error', // Default message
    });
  };