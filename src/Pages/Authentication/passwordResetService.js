export const handlePasswordReset = async ({
  email,
  token,
  password,
  confirmPassword,
}) => {
  if (password.length < 8) {
    return {
      success: false,
      message: "Password must be at least 8 characters long",
    };
  }

  if (password !== confirmPassword) {
    return { success: false, message: "Passwords do not match" };
  }

  try {
    const response = await fetch("/api/v1/auth/reset-password", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, token, password }),
    });

    if (response.status === 200) {
      return { success: true };
    }

    return { success: false, message: "Password reset failed. Try again." };
  } catch (err) {
    console.error(err.message);
    return { success: false, message: "An error occurred. Please try again." };
  }
};
