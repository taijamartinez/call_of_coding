export async function login(credentials: { username: string, password: string }) {
  try{
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      throw new Error("Login failed.");
    }

    // expecting a token in the response
    return await response.json();

  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
}
