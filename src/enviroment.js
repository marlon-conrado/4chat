const enviroment = {
  apiUrl: process.env.API_URL || "http://localhost:8080",
  events: {
    profile: process.env.PROFILE || "profile"
  }
};

export default enviroment;
