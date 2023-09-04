import { useAuth } from "@/context/auth";
import { useState } from "react";
import Header from "./Header";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export default function UpdateTechnicianProfileForm() {
  const { user, token } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);

  console.log(token);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedProfessions = Array.from(
      e.target.querySelectorAll('input[name="professions"]:checked')
    ).map((checkbox) => checkbox.value);

    const updatedFormData = {
      phone: e.target.phone.value,
      email: e.target.email.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: selectedImage, // Assuming selectedImage contains the image data
      professions: selectedProfessions,
    };
  
    console.log(updatedFormData);

    try {
      const response = await fetch(`${baseUrl}/api/technician/profileupdate/`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        alert("Account Information Updated Successfully!");
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error('Error:', error);
    }

    try {
      const formData = new FormData();
      formData.append('professions', selectedProfessions);
      formData.append('description', e.target.description.value);
      formData.append('image', selectedImage);
      console.log(formData);

      const response = await fetch(`${baseUrl}/api/technician/profileupdateInfo/`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert("Profile Information Updated Successfully!");
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (user) {
    return (
      <div>
        <Header />
        <form
          onSubmit={handleSubmit}
          className="max-w-md p-4 mx-auto mt-4 border rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              defaultValue={user.phone}
              placeholder="Change phone number"
              className="w-full p-2 mt-1 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user.email}
              placeholder="Update Email"
              className="w-full p-2 mt-1 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={user.location}
              placeholder="Change your location"
              className="w-full p-2 mt-1 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Profession</label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="professions"
                  value="electrician"
                  defaultChecked={user && user.professions && user.professions.includes("electrician")}
                  className="mr-2"
                />
                Electrician
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="professions"
                  value="mechanical"
                  defaultChecked={user && user.professions && user.professions.includes("mechanical")}
                  className="mr-2"
                />
                Mechanical
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="professions"
                  value="plumber"
                  defaultChecked={user && user.professions && user.professions.includes("plumber")}
                  className="mr-2"
                />
                Plumber
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="professions"
                  value="painter"
                  defaultChecked={user && user.professions && user.professions.includes("painter")}
                  className="mr-2"
                />
                Painter
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="professions"
                  value="Construction workers"
                  defaultChecked={user && user.professions && Array.isArray(user.professions) && user.professions.includes("Construction workers")}
                  className="mr-2"
                />
                Construction Workers
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="professions"
                  value="Construction workers"
                  defaultChecked={user && user.professions && Array.isArray(user.professions) && user.professions.includes("Construction workers")}
                  className="mr-2"
                />
                Construction Workers
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="professions"
                  value="Blacksmiths"
                  defaultChecked={user && user.professions && Array.isArray(user.professions) && user.professions.includes("Blacksmiths")}
                  className="mr-2"
                />
                Blacksmiths
              </label>
              {/* Add checkboxes for other professions as needed */}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              defaultValue={user.description}
              placeholder="Add Description"
              className="w-full p-2 mt-1 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
                className="sr-only"
              />
              <label
                htmlFor="image"
                className="flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 active:bg-gray-50 active:text-gray-800"
              >
                Select an Image
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    );
  }
}