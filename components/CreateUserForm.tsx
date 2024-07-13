"use client";

import { useState } from "react";

interface CreateUserFormProps {
  onSubmit: (user: any) => void;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    googleId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="id" placeholder="ID" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input
        name="username"
        placeholder="Username (optional)"
        onChange={handleChange}
      />
      <input
        name="googleId"
        placeholder="Google ID (optional)"
        onChange={handleChange}
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserForm;
