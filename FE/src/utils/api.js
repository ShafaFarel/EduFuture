const API_BASE_URL = import.meta.env.VITE_API_URL || '';

async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem('access_token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || 'Terjadi kesalahan pada server.');
  }

  return data;
}

export const api = {
  register: (email, password) => {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  login: async (email, password) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (data.access_token) {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user_email', data.email);
    }
    return data;
  },

  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_email');
    return apiRequest('/auth/logout', { method: 'POST' }).catch(() => {});
  },

  predict: (scores) => {
    return apiRequest('/predict', {
      method: 'POST',
      body: JSON.stringify(scores),
    });
  },

  getHistory: () => {
    return apiRequest('/predict/history', {
      method: 'GET'
    });
  },

  clearHistory: () => {
    return apiRequest('/predict/history', {
      method: 'DELETE'
    });
  },

  chatWithMentor: (message) => {
    return apiRequest('/mentor/chat', {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
  }
};

