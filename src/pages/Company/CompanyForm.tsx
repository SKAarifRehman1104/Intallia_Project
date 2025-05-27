
import React from "react";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface CompanyFormProps {
  formData: CompanyFormData;
  setFormData: React.Dispatch<React.SetStateAction<CompanyFormData>>;
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
  const { companyId } = useParams<{ companyId: string }>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CompanyFormData>({
    defaultValues: formData,
    mode: "onChange",
  });

  React.useEffect(() => {
    // Update react-hook-form values when formData prop changes
    Object.entries(formData).forEach(([key, value]) => {
      setValue(key as keyof CompanyFormData, value);
    });
  }, [formData, setValue]);

  const onSubmit: SubmitHandler<CompanyFormData> = (data) => {
    setFormData(data);
    console.log("Form is valid:", data);
  };

  const renderInput = (
    id: keyof CompanyFormData,
    label: string,
    type: string = "text",
    placeholder: string = "",
    validationRules: Record<string, any> = {}
  ) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[15px] text-[#444446] flex gap-1">
        {label} <span className="text-[#FF3A3A] text-sm">*</span>
      </label>
      <input
        id={id}
        {...register(id, validationRules)}
        type={type}
        placeholder={placeholder}
        className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
          errors[id] ? "border-red-500" : "border-[#E5E5EA]"
        }`}
      />
      {errors[id] && (
        <p className="text-red-500 text-xs mt-1">{errors[id]?.message}</p>
      )}
    </div>
  );

  return (
    <form
      className="flex font-plusJakarta flex-col gap-6 overflow-y-auto max-w-4xl mx-auto p-4"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-xl font-medium tracking-[0.38px] bg-clip-text bg-gradient-to-r from-[#0DAFDC] to-[#22E9A2] text-transparent">
        Company Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderInput("companyId", "Company ID", "text", "Enter Company ID", {
          required: "Company ID is required",
          validate: (val: string) =>
            val.trim() !== "" || "Company ID is required",
        })}
        {renderInput("companyName", "Company Name", "text", "Enter Company Name", {
          required: "Company Name is required",
          validate: (val: string) =>
            val.trim() !== "" || "Company Name is required",
        })}
        {renderInput(
          "contactPersonName",
          "Contact Person Name",
          "text",
          "Enter Contact Person Name",
          {
            required: "Contact Person Name is required",
            validate: (val: string) =>
              val.trim() !== "" || "Contact Person Name is required",
          }
        )}

        {/* Phone number input with icon */}
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
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/b3e578b8881e144097eda901ab80255224febf55ffe07d1428a77e2beb4c1939"
              alt="Country flag"
              className="w-5 h-3.5"
            />
            <input
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone Number is required",
                pattern: {
                  value: /^\+?\d{7,15}$/,
                  message:
                    "Enter a valid phone number (7-15 digits, optional +)",
                },
              })}
              type="tel"
              placeholder="1234567890"
              className="w-full outline-none placeholder:text-black ml-3"
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
          )}
        </div>

        {renderInput("website", "Website", "url", "https://example.com", {
          required: "Website is required",
          validate: (val: string) => {
            if (val.trim() === "") return "Website is required";
            try {
              new URL(val);
              return true;
            } catch {
              return "Enter a valid URL (include https://)";
            }
          },
        })}
        {renderInput("email", "Email", "email", "example@mail.com", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })}
      </div>

      {renderInput("address", "Address", "text", "Enter address", {
        required: "Address is required",
        validate: (val: string) => val.trim() !== "" || "Address is required",
      })}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderInput("city", "City", "text", "Enter city", {
          required: "City is required",
          validate: (val: string) => val.trim() !== "" || "City is required",
        })}
        {renderInput("state", "State", "text", "Enter state", {
          required: "State is required",
          validate: (val: string) => val.trim() !== "" || "State is required",
        })}
        {renderInput("country", "Country", "text", "Enter country", {
          required: "Country is required",
          validate: (val: string) => val.trim() !== "" || "Country is required",
        })}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="status"
          className="text-[15px] text-[#444446] flex gap-1"
        >
          Status <span className="text-[#FF3A3A] text-sm">*</span>
        </label>
        <select
          id="status"
          {...register("status", {
            required: "Status must be selected",
            validate: (val: string) => val.trim() !== "" || "Status must be selected",
          })}
          className={`rounded border px-4 py-3.5 min-h-12 bg-white ${
            errors.status ? "border-red-500" : "border-[#E5E5EA]"
          }`}
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        {errors.status && (
          <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full md:w-max px-6 py-3 bg-gradient-to-r from-[#0DAFDC] to-[#22E9A2] text-white font-semibold rounded hover:opacity-90 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default CompanyForm;
