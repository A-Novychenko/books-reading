export const registerUser: registerFunc = async (data) => {
  console.log("data", data);
  try {
    const res = await fetch(
      "https://bookread-backend.goit.global/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return res.json();
  } catch (err) {
    const error = err as Error;

    console.log("error", error);
  }
};
