import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import OrderPlacedModel from "../OrderPlacedModel";

const AdminForm = () => {
  const [showOrderPopupModel, setshowOrderPopupModel] = useState(false);
  const [device, setDevice] = useState(null);
  const onCancel1 = () => {
    setshowOrderPopupModel(false);
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    category: "",
    brand: "",
    model: "",
    year: "",
    condition: "new",
    defects: [],
    serial: "",
    images: [],
    description: "",
    price: "Free",
  });

  const [price, setPrice] = useState(null);
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

  useEffect(() => {
    const fetchDeviceById = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/devices/get/${id}`);
        if (res.status === 200) {
          setDevice(res.data.device); // Make sure device is set correctly
        } else {
          console.error("Device not found");
        }
      } catch (error) {
        console.error("An error occurred: ", error.message);
      }
    };

    fetchDeviceById();
  }, [id]);

  console.log(device);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:3000/devices/update-device/${id}`,
        formData,
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success("Device added successfully");
        setshowOrderPopupModel(true);
        setPrice(res.data.device.price);
        navigate("/admin/submissions");
      } else {
        toast.error("Failed to add the device");
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
              Change Price
            </h2>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Category
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. Tablet, Camera"
                required
                value={device.category}
                onChange={(event) =>
                  setFormData({ ...formData, category: event.target.value })
                }
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">Brand</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. Apple"
                required
                value={device.brand}
                onChange={(event) =>
                  setFormData({ ...formData, brand: event.target.value })
                }
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">Model</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. iPad Pro"
                required
                value={device.model}
                onChange={(event) =>
                  setFormData({ ...formData, model: event.target.value })
                }
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Year of Purchase
              </label>
              <input
                type="number"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. 2022"
                required
                value={device.year}
                onChange={(event) =>
                  setFormData({ ...formData, year: event.target.value })
                }
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Condition
              </label>
              <select
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                value={device.condition}
                onChange={(event) =>
                  setFormData({ ...formData, condition: event.target.value })
                }
                disabled
              >
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="damaged">Damaged</option>
              </select>
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
                    disabled
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
                    disabled
                  />
                  Battery Issue
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Serial Number
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. XYZ12345678"
                value={device.serial}
                onChange={(event) =>
                  setFormData({ ...formData, serial: event.target.value })
                }
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2">Price</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="e.g. XYZ12345678"
                value={device.price}
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
                value={device.description}
                onChange={(event) =>
                  setFormData({ ...formData, description: event.target.value })
                }
                disabled
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
              Accept Submission
            </button>
          </form>
        </div>
      </div>
      <OrderPlacedModel show={showOrderPopupModel} onCancel1={onCancel1} />
    </section>
  );
};

export default AdminForm;
