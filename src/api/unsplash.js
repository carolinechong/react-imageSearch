import axios from "axios";

// Create method will create an instance of the axios client with a couple of default properties.
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 01b32629a9a2504977dd42eff5be5f32c18b3d6ca7bd025a60419d606ff72922"
  }
});
