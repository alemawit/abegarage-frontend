const logIn = async (formData) => {
  const api_url = import.meta.env.VITE_REACT_APP_URL;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  console.log("About to send request");
  console.log(requestOptions.body);

  try {
    const response = await fetch(
      `${api_url}/api/employee/login`,
      requestOptions
    );

    // Check if the response is ok (status 200-299)
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Parse the response as JSON
    const responseData = await response.json();

    return responseData; // Return the parsed response
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Rethrow error to be handled in the component
  }
};

// A function to log out the user
const logOut = () => {
  localStorage.removeItem("employee");
};

export default { logIn, logOut };
