const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:5173",
  "http://localhost:5174",
  "https://mkhotamirais.my.id",
];

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  console.log(origin);
  // if (allowedOrigins.includes(origin)) {
  //   res.header("Access-Control-Allow-Origin", true);
  // }
  next();
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  // if (req.method === "OPTIONS") {
  //   res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  //   return res.status(200).json({});
  // }
  // next();
};

const corsOptions = {
  origin: (origin, callback) => {
    allowedOrigins.indexOf(origin) !== -1 || !origin ? callback(null, true) : callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = { credentials, corsOptions };
