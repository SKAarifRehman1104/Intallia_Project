import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";



interface CompanyFormProps {
  formData: {
    companyId: string;
    companyName: string;
    contactPersonName: string;
    phoneNumber: string;
    website: string;
    email: string;
    address: string;
    city: string;
    state: string;
    country: string;
    status: string;
    // Add more fields if necessary
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      companyId: string;
      companyName: string;
      contactPersonName: string;
      phoneNumber: string;
      website: string;
      email: string;
      address: string;
      city: string;
      state: string;
      country: string;
      status: string;
    }>
  >;
}

interface CompanyFormData {
  companyId: string;
  companyName: string;
  contactPersonName: string;
  phoneNumber: string;
  website: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  status: string;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState<Partial<CompanyFormData>>({});

const { companyId } = useParams<{ companyId: string }>();


  

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<CompanyFormData> = {};

    if (!formData.companyId.trim())
      newErrors.companyId = "CompanyId is required";
    if (!formData.companyName.trim())
      newErrors.companyName = "CompanyName is required";
    if (!formData.contactPersonName.trim())
      newErrors.contactPersonName = "Contact Person Name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.website.trim()) newErrors.website = "Website is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.status.trim()) newErrors.status = "Status is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // You can add form submission logic here or call a prop function
      alert("Form submitted successfully!");
    }
  };

  return (
    <form
      className="flex font-plusJakarta flex-col gap-6 overflow-y-auto max-w-4xl mx-auto p-4"
      noValidate
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-medium tracking-[0.38px] bg-clip-text bg-gradient-to-r from-[#0DAFDC] to-[#22E9A2] text-transparent">
        Personal Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CompanyId */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="companyId"
            className="text-[15px] text-[#444446] flex items-center gap-1"
          >
            CompanyId <span className="text-[#FF3A3A] text-sm">*</span>
          </label>
          <input
            id="companyId"
            name="companyId"
            type="text"
            value={formData.companyId}
            onChange={handleChange}
            placeholder="Enter Company ID"
            className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
              errors.companyId ? "border-red-500" : "border-[#E5E5EA]"
            }`}
          />
          {errors.companyId && (
            <p className="text-red-500 text-xs mt-1">{errors.companyId}</p>
          )}
        </div>

        {/* CompanyName */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="companyName"
            className="text-[15px] text-[#444446] flex items-center gap-1"
          >
            CompanyName <span className="text-[#FF3A3A] text-sm">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter Company Name"
            className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
              errors.companyName ? "border-red-500" : "border-[#E5E5EA]"
            }`}
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Contact Person Name */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="contactPersonName"
            className="text-[15px] text-[#444446] flex items-center gap-1"
          >
            Contact Person Name{" "}
            <span className="text-[#FF3A3A] text-sm">*</span>
          </label>
          <input
            id="contactPersonName"
            name="contactPersonName"
            type="text"
            value={formData.contactPersonName}
            onChange={handleChange}
            placeholder="Enter Contact Person Name"
            className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
              errors.contactPersonName ? "border-red-500" : "border-[#E5E5EA]"
            }`}
          />
          {errors.contactPersonName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.contactPersonName}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="phoneNumber"
            className="text-[15px] text-[#444446] flex items-center gap-1"
          >
            Phone Number <span className="text-[#FF3A3A] text-sm">*</span>
          </label>
          <div
            className={`flex items-center rounded border px-4 py-3.5 min-h-12 bg-white ${
              errors.phoneNumber ? "border-red-500" : "border-[#E5E5EA]"
            }`}
          >
            <div className="flex items-center gap-2 mr-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/b3e578b8881e144097eda901ab80255224febf55ffe07d1428a77e2beb4c1939"
                alt="Country flag"
                className="w-5 h-3.5"
              />
              <span className="select-none">+91</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/610bae2bd3fec3226daeb553c69952d46dcb01bf137f75b31b35e8b80820ae1e"
                alt="Dropdown"
                className="w-4 h-4"
              />
            </div>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="12344568"
              className="w-full outline-none placeholder:text-black"
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Website */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="website"
            className="text-[15px] text-[#444446] flex items-center gap-1"
          >
            Website <span className="text-[#FF3A3A] text-sm">*</span>
          </label>
          <input
            id="website"
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://example.com"
            className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
              errors.website ? "border-red-500" : "border-[#E5E5EA]"
            }`}
          />
          {errors.website && (
            <p className="text-red-500 text-xs mt-1">{errors.website}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-[15px] text-[#444446] flex items-center gap-1"
          >
            Email <span className="text-[#FF3A3A] text-sm">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
              errors.email ? "border-red-500" : "border-[#E5E5EA]"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Address */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="address"
          className="text-[15px] text-[#444446] flex items-center gap-1"
        >
          Address <span className="text-[#FF3A3A] text-sm">*</span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={(handleChange)}
          placeholder="Enter address"
          className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
            errors.address ? "border-red-500" : "border-[#E5E5EA]"
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* City */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="city"
            className="text-[15px] text-[#444446] flex items-center gap-1"
          >
            City <span className="text-[#FF3A3A] text-sm">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City"
            className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
              errors.city ? "border-red-500" : "border-[#E5E5EA]"
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city}</p>
          )}
        </div>

        {/* State */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="state"
            className="text-[15px] text-[#444446] flex items-center gap-1"
          >
            State <span className="text-[#FF3A3A] text-sm">*</span>
          </label>
          <input
            id="state"
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter State"
            className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
              errors.state ? "border-red-500" : "border-[#E5E5EA]"
            }`}
          />
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state}</p>
          )}
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="country"
            className="text-[15px] text-[#444446] flex items-center gap-1"
          >
            Country <span className="text-[#FF3A3A] text-sm">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter Country"
            className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
              errors.country ? "border-red-500" : "border-[#E5E5EA]"
            }`}
          />
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country}</p>
          )}
        </div>
      </div>

      {/* Status */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="status"
          className="text-[15px] text-[#444446] flex items-center gap-1"
        >
          Status <span className="text-[#FF3A3A] text-sm">*</span>
        </label>
        <input
          id="status"
          name="status"
          type="text"
          value={formData.status}
          onChange={handleChange}
          placeholder="Enter Status"
          className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
            errors.status ? "border-red-500" : "border-[#E5E5EA]"
          }`}
        />
        {errors.status && (
          <p className="text-red-500 text-xs mt-1">{errors.status}</p>
        )}
      </div>
    </form>
  );
};

export default CompanyForm;
