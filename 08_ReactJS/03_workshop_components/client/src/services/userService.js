const baseUrl = `http://localhost:3005/api/users`;

export const createUser = async (data) => {
  const jsonData = JSON.stringify(data);

  const response = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const createdUser = await response.json();

  return createdUser.user;
};


export const getAllUsers = () => {
  return fetch(baseUrl).then((response) => response.json());
}

export const getSpecificUser = async (id) => {
  const response = await fetch(baseUrl + `/${id}`);
  const specificUserData = await response.json();

  return specificUserData.user
}

export const deleteUser = async (id) => {
  await fetch(baseUrl + `/${id}`, {
    method: 'DELETE',
  });
}

export const updateUser = async (id, updatedUser) => {
  const response = await fetch(baseUrl + `/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUser)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const data = await response.json();
    return data.user;
  }
}
