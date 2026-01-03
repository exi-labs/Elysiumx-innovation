const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error.middleware");
const aboutRoutes = require("./routes/about.routes");
const helloRoutes = require("./routes/hello.routes");
const testingRoutes = require("./routes/testing.routes");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "../public")));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(helmet());
app.use(cookieParser());

// routes
app.use("/", aboutRoutes);
app.use("/", helloRoutes);
app.use("/", testingRoutes);

// for error handling middleWare
app.use(errorMiddleware);

module.exports = app;
