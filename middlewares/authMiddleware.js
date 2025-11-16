const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.header('x-api-key');  // Fetching the correct header
  console.log("Received API Key: ", apiKey);  // Log the received key
  
  // Check if the API key from the request matches the environment variable
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }

  next();  // Proceed to the next middleware or route handler if the API key is valid
};
