const axios = require('axios');

async function sendInvalidRequest() {
  try {
    await axios.get('https://api.example.com/non-existent-endpoint');
  } catch (error) {
    return error.message;
  }
}

async function fetchDataWithHeadersAndParams() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: { userId: 1 },
    headers: { 'X-Custom-Header': 'QA-Automation' }
  });
  return response;
}

describe('Task 1: Error Handling', () => {
  test('return error message Network Error або 404', async () => {
    const errorMessage = await sendInvalidRequest();
    
    expect(errorMessage).toBeDefined();
    expect(typeof errorMessage).toBe('string');
  });
});

describe('Task 2: Testing Request Headers and Params', () => {
  test('return correct custom headers and request parameters', async () => {
    const response = await fetchDataWithHeadersAndParams();

    expect(response.status).toBe(200);
    expect(response.config.params).toEqual({ userId: 1 });
    expect(response.config.headers['X-Custom-Header']).toBe('QA-Automation');
  });
});

describe('Task 3: Mocking Axios in Jest', () => {
  
  beforeAll(() => {
    jest.spyOn(axios, 'get');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('imitation of successful HTTP-request (200 OK)', async () => {
    const mockedData = { data: { id: 1, title: 'Mocked Post' }, status: 200 };
    axios.get.mockResolvedValue(mockedData);

    const response = await axios.get('https://any-api.com/posts/1');

    expect(response.status).toBe(200);
    expect(response.data.title).toBe('Mocked Post');
    expect(axios.get).toHaveBeenCalledWith('https://any-api.com/posts/1');
  });

  test('imitation of unsuccessful HTTP-request (500 Internal Server Error)', async () => {
    const mockedError = new Error('Request failed with status code 500');
    axios.get.mockRejectedValue(mockedError);

    await expect(axios.get('https://any-api.com/bad-endpoint')).rejects.toThrow(
      'Request failed with status code 500'
    );
  });
});