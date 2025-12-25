const BASE_URL = "http://localhost:5000";

export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const addCourse = async (course, token) => {
  const res = await fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(course),
  });
  return res.json();
};

export const getMyCourses = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/enroll/my-courses`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.json();
};

export const getAllCourses = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/courses`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.json();
};

export const enrollInCourse = async (courseId, token) => {
  const res = await fetch(`http://localhost:5000/enroll/${courseId}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.json();
};

export const updateCourse = async (id, course, token) => {
  const res = await fetch(`${BASE_URL}/courses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(course),
  });

  return res.json();
};
