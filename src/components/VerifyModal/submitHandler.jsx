import { toast } from "react-toastify";

export const handleUserSubmit = async ({
  e,
  password,
  userData,
  logout,
  setIsSubmitting,
  createNotification,
}) => {
  e.preventDefault();

  if (!password) {
    toast.error("Password is required");
    return;
  }

  setIsSubmitting(true);

  const getUpdatedFields = () => {
    const fields = { password };
    ["email", "username", "newPassword", "currency"].forEach((field) => {
      if (userData[field]?.trim()) fields[field] = userData[field].trim();
    });
    return fields;
  };

  try {
    const response = await fetch("/api/v1/me", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getUpdatedFields()),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Account updated successfully!");
      await createNotification(
        "Account Updated",
        "Your contact details were updated.",
      );
      logout(e);
    } else {
      toast.error(data.message || "Failed to update account");
    }
  } catch {
    toast.error("Update failed. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
