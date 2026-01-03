const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");
const errorMiddleware = require("./middlewares/error.middleware");
const helloRoutes = require("./routes/hello.routes");
const aboutRoutes = require("./routes/about.routes");
const testingRoutes = require("./routes/testing.routes");
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

// Routes
app.use("/", helloRoutes);
app.use("/", aboutRoutes);
app.use("/", testingRoutes);

app.use(errorMiddleware);
module.exports = app;
