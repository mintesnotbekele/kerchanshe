import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";

dotenv.config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Kerchanshe PMS API Documentation",
      version: "1.0.0",
      description: "API documentation using Swagger for the backend",
    },
    servers: [
      {
        url: `http://localhost:${process.env.APP_PORT}`, // Use your actual server URL
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to API route files containing Swagger comments
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
