import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import OrderPlacedModel from "./OrderPlacedModel";

const SmartphoneForm = () => {
  const [showOrderPopupModel, setshowOrderPopupModel] = useState(false);
  const onCancel1 = () => {
    setshowOrderPopupModel(false);
  };
  const navigate = useNavigate();
  const [price, setPrice] = useState(null);
  const [formData, setFormData] = useState({
    category: "smartphone",
    brand: "",
    model: "",
    year: "",
    condition: "new",
    storage: "",
    defects: [],
    serial: "",
    images: [],
    description: "",
  });

  const handleDefectChange = (defect) => {
    setFormData((prevState) => {
      const defects = prevState.defects.includes(defect)
        ? prevState.defects.filter((d) => d !== defect)
        : [...prevState.defects, defect];
      return { ...prevState, defects };
    });
  };

  const handleImageUpload = (event) => {
    setFormData({ ...formData, images: [...event.target.files] });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/devices/add-device",
        formData,
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success("Smartphone added successfully");
        setshowOrderPopupModel(true);
        setPrice(res.data.device.price);
        setFormData({
          brand: "",
          model: "",
          year: "",
          condition: "new",
          storage: "",
          defects: [],
          serial: "",
          images: [],
          description: "",
        });
      } else {
        toast.error("Failed to add the smartphone");
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  return (
    <section className="bg-red-50 dark:bg-slate-900">
      <div className="m-auto max-w-2xl py-10">
        <div className="px-6 py-8 mb-4 shadow-lg rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-primary-red text-center font-semibold mb-6">
              Add Smartphone
            </h2>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">Brand</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. Apple"
                required
                value={formData.brand}
                onChange={(event) =>
                  setFormData({ ...formData, brand: event.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">Model</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. iPhone 12"
                required
                value={formData.model}
                onChange={(event) =>
                  setFormData({ ...formData, model: event.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Year of Purchase
              </label>
              <input
                type="number"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. 2021"
                required
                value={formData.year}
                onChange={(event) =>
                  setFormData({ ...formData, year: event.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Condition
              </label>
              <select
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                value={formData.condition}
                onChange={(event) =>
                  setFormData({ ...formData, condition: event.target.value })
                }
              >
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="damaged">Damaged</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Storage Capacity
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. 128GB"
                value={formData.storage}
                onChange={(event) =>
                  setFormData({ ...formData, storage: event.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Defects (check all that apply)
              </label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="screen crack"
                    checked={formData.defects.includes("screen crack")}
                    onChange={() => handleDefectChange("screen crack")}
                    className="mr-2"
                  />
                  Screen Crack
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="battery issue"
                    checked={formData.defects.includes("battery issue")}
                    onChange={() => handleDefectChange("battery issue")}
                    className="mr-2"
                  />
                  Battery Issue
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Serial Number / IMEI
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. 123456789012345"
                value={formData.serial}
                onChange={(event) =>
                  setFormData({ ...formData, serial: event.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Description
              </label>
              <textarea
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="Write a short description"
                value={formData.description}
                onChange={(event) =>
                  setFormData({ ...formData, description: event.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Upload Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
              />
            </div>

            <button type="submit" className="form-btn">
              Add Smartphone
            </button>
          </form>
        </div>
      </div>
      <OrderPlacedModel
        price={price}
        show={showOrderPopupModel}
        onCancel1={onCancel1}
      />
    </section>
  );
};

export default SmartphoneForm;
