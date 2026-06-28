const axios = require("axios");

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

api.interceptors.request.use((config) => {
  console.log(`\n🚀 [AXIOS REQUEST] Sending ${config.method.toUpperCase()} to ${config.baseURL}${config.url}`);
  if (config.data) {
    console.log(`Request Data:`, JSON.stringify(config.data));
  }
  return config;
});

api.interceptors.response.use((response) => {
  console.log(`[AXIOS RESPONSE] Status: ${response.status} from ${response.config.url}`);
  return response;
});


describe("JSONPlaceholder API Testing via Axios", () => {
  
  test("1. GET /posts - should return list of posts with status 200", async () => {
    const response = await api.get("/posts");
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("2. GET /posts/1 - should return specific post details", async () => {
    const response = await api.get("/posts/1");
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("userId");
    expect(typeof response.data.title).toBe("string");
  });

  test("3. GET /posts/1/comments - should return comments for post #1", async () => {
    const response = await api.get("/posts/1/comments");
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty("postId", 1);
    expect(response.data[0]).toHaveProperty("email");
  });

  test("4. POST /posts - should successfully create a new post", async () => {
    const newPost = {
      title: "QA Automation Test Post",
      body: "This is a test post description created via Axios.",
      userId: 11,
    };

    const response = await api.post("/posts", newPost);
    
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data).toHaveProperty("id");
  });

  test("5. POST /comments - should simulate adding a new comment", async () => {
    const newComment = {
      postId: 1,
      name: "Nataliia",
      email: "test@qa.com",
      body: "Axios interceptors work great!",
    };

    const response = await api.post("/comments", newComment);
    
    expect(response.status).toBe(201);
    expect(response.data.email).toBe(newComment.email);
    expect(response.data.name).toBe(newComment.name);
  });
});