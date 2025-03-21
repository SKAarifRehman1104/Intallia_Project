import { MainLayout } from "@/components/layout/MainLayout";
import { GradientButton } from "@/components/ui/gradient-button";
import { SearchBar } from "@/components/ui/search-bar";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { AccessControl } from "./AccessControl";
import SidebarActions from "@/components/users/SidebarActions";

interface RoleForm {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  role: string;
  description: string;
}

export const RoleForm: FC = () => {
  const { register } = useForm<RoleForm>();
  const [accessControls, setAccessControls] = useState({
    userManagement: true,
    simulation: true,
    package: true,
    payment: false,
  });

  //sidebar button events
  const handleAddNewRole = () => {
    console.log("Add New Role clicked");
  };

  const handleSaveAndExit = () => {
    console.log("Save & Exit clicked");
  };

  const handleSave = () => {
    console.log("Save clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const actions: {
    variant: "primary" | "outline" | "danger";
    text: string;
    onClick?: () => void;
  }[] = [
    {
      variant: "primary",
      text: "Add New Role",
      onClick: handleAddNewRole,
    },
    {
      variant: "outline",
      text: "Save & Exit",
      onClick: handleSaveAndExit,
    },
    { variant: "outline", text: "Save", onClick: handleSave },
    { variant: "danger", text: "Delete", onClick: handleDelete },
  ];

  return (
    <MainLayout>
      <div className="bg-[#F8F9FA] flex items-start gap-[35px] overflow-hidden flex-wrap p-8">
        <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit">
          <h1 className="page-heading">Add New Role</h1>
          <div className="shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] bg-white flex items-stretch gap-5 flex-wrap justify-between mt-[30px] p-[31px] rounded-[15px] h-[88vh] sticky top-0 overflow-y-scroll">
            <div className="max-md:max-w-full xl:w-[69%]">
              <form className="w-full font-normal max-md:max-w-full">
                <div className="flex w-full gap-10 flex-wrap max-md:max-w-full">
                  <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
                    <label className="flex items-center gap-1">
                      <span className="text-[#444446] text-[15px] leading-none tracking-[-0.24px]">
                        Name
                      </span>
                      <span className="text-[#FF3A3A] text-sm leading-none">
                        *
                      </span>
                    </label>
                    <input
                      {...register("name")}
                      className="self-stretch flex-1 shrink basis-[0%] rounded border border-[#E5E5EA] bg-white min-h-12 w-full gap-2 text-base text-[#7C7C80] tracking-[-0.32px] leading-none mt-2 px-4 py-3.5 border-solid"
                      placeholder="Enter name"
                    />
                  </div>

                  <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
                    <label className="flex items-center gap-1">
                      <span className="text-[#444446] text-[15px] leading-none tracking-[-0.24px]">
                        Company Name
                      </span>
                      <span className="text-[#FF3A3A] text-sm leading-none">
                        *
                      </span>
                    </label>
                    <input
                      {...register("companyName")}
                      className="self-stretch flex-1 shrink basis-[0%] rounded border border-[#E5E5EA] bg-white min-h-12 w-full gap-2 text-base text-[#7C7C80] tracking-[-0.32px] leading-none mt-2 px-4 py-3.5 border-solid"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="flex w-full gap-8 flex-wrap mt-[30px] max-md:max-w-full">
                  <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
                    <label className="flex items-center gap-1">
                      <span className="text-[#444446] text-[15px] leading-none tracking-[-0.24px]">
                        Email
                      </span>
                      <span className="text-[#FF3A3A] text-sm leading-none">
                        *
                      </span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="self-stretch flex-1 shrink basis-[0%] rounded border border-[#E5E5EA] bg-white min-h-12 w-full gap-2 text-base text-[#7C7C80] tracking-[-0.32px] leading-none mt-2 px-4 py-3.5 border-solid"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
                    <label className="flex items-center gap-1">
                      <span className="text-[#444446] text-[15px] leading-none tracking-[-0.24px]">
                        Number
                      </span>
                      <span className="text-[#FF3A3A] text-sm leading-none">
                        *
                      </span>
                    </label>
                    <div className="items-center rounded border border-[#E5E5EA] bg-white flex min-h-12 w-full gap-2 text-base text-[#242426] tracking-[-0.32px] leading-none mt-2 px-4 py-3.5 border-solid">
                      <div className="self-stretch flex min-w-60 items-center gap-4 my-auto">
                        <div className="self-stretch flex items-center gap-1 whitespace-nowrap my-auto">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/9d552e5841dec4d615e2ea3cc22656cdad4e7d4c22e72e98f2e3052e73d32803?placeholderIfAbsent=true"
                            className="aspect-[1.43] object-contain w-5"
                            alt="Flag"
                          />
                          <span>+91</span>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/610bae2bd3fec3226daeb553c69952d46dcb01bf137f75b31b35e8b80820ae1e?placeholderIfAbsent=true"
                            className="aspect-[1] object-contain w-4"
                            alt="Arrow"
                          />
                        </div>
                        <input
                          {...register("phone")}
                          className="self-stretch w-[217px] my-auto bg-transparent outline-none"
                          placeholder="1234 4568"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Created On, Modified On, Modified By */}
                <div className="flex w-full gap-10 flex-wrap mt-[30px] max-md:max-w-full">
                  <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%]">
                    <label className="text-[15px] text-[#444446] tracking-[-0.24px] leading-none">
                      Created On
                    </label>
                    <div className="self-stretch flex-1 shrink basis-[0%] rounded bg-[rgba(242,242,247,1)] min-h-12 w-full text-base text-[#7C7C80] tracking-[-0.32px] leading-none mt-2 px-4 py-3.5">
                      DD/MM/YYYY
                    </div>
                  </div>

                  <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%]">
                    <label className="text-[15px] text-[#444446] tracking-[-0.24px] leading-none">
                      Modified On
                    </label>
                    <div className="self-stretch flex-1 shrink basis-[0%] rounded bg-[rgba(242,242,247,1)] min-h-12 w-full text-base text-[#7C7C80] tracking-[-0.32px] leading-none mt-2 px-4 py-3.5">
                      DD/MM/YYYY
                    </div>
                  </div>

                  <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%]">
                    <label className="text-[15px] text-[#444446] tracking-[-0.24px] leading-none">
                      Modified By
                    </label>
                    <div className="self-stretch flex-1 shrink basis-[0%] rounded bg-[rgba(242,242,247,1)] min-h-12 w-full text-base text-[#7C7C80] tracking-[-0.32px] leading-none mt-2 px-4 py-3.5">
                      Admin Name
                    </div>
                  </div>
                </div>

                {/* Role & Access Section */}
                <div className="w-full mt-[50px] max-md:max-w-full">
                  <h2 className="flex w-full items-center gap-2 text-xl font-medium tracking-[0.38px] leading-none max-md:max-w-full">
                    <span className="bg-clip-text bg-[linear-gradient(90deg,#06B2E1_0%,#22E9A2_100%)] text-transparent">
                      Role & Access
                    </span>
                  </h2>

                  <div className="w-full mt-5 max-md:max-w-full space-y-5">
                    <div className="rounded bg-white w-full p-4 border-[rgba(242,242,247,1)] border-solid border-2">
                      <div className="flex w-full items-stretch gap-3 text-[15px] text-[#242426] font-semibold whitespace-nowrap tracking-[-0.24px] leading-none flex-wrap">
                        <span className="grow shrink w-[833px]">Role</span>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/fbcbd31c72978e2a87cf5fccc77b06a40906cf35b9cd51ef2dbc8ce6157186d3?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-6 shrink-0 my-auto"
                          alt="Icon"
                        />
                      </div>

                      <div className="flex w-full gap-8 font-normal flex-wrap mt-[25px]">
                        <div className="flex min-w-60 min-h-[76px] flex-col items-stretch flex-1 shrink basis-[0%]">
                          <label className="flex items-center gap-1">
                            <span className="text-[#444446] text-[15px] leading-none tracking-[-0.24px]">
                              Role
                            </span>
                            <span className="text-[#FF3A3A] text-sm leading-none">
                              *
                            </span>
                          </label>
                          <div className="items-center rounded border border-[#E5E5EA] bg-white flex min-h-12 w-full gap-2 text-base text-[#7C7C80] tracking-[-0.32px] leading-none mt-2 px-4 py-3 border-solid">
                            <input
                              {...register("role")}
                              className="self-stretch flex-1 bg-transparent outline-none"
                              placeholder="Accountant"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/c335f7e560c8ce67b0638bcc162fadf7a2a1f41a936ff4cdfade58fd8dc56827?placeholderIfAbsent=true"
                              className="aspect-[1] object-contain w-6"
                              alt="Dropdown"
                            />
                          </div>
                        </div>

                        <div className="flex min-w-60 min-h-[76px] flex-col items-stretch flex-1 shrink basis-[0%]">
                          <label className="text-[15px] text-[#444446] tracking-[-0.24px] leading-none">
                            Description
                          </label>
                          <input
                            {...register("description")}
                            className="self-stretch flex-1 shrink basis-[0%] rounded border border-[#E5E5EA] bg-white min-h-12 w-full gap-2 text-base text-[#7C7C80] tracking-[-0.32px] leading-none mt-2 px-4 py-3.5 border-solid"
                            placeholder="Enter description"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="rounded bg-white w-full p-4 border-[rgba(242,242,247,1)] border-solid border-2">
                      <div className="flex w-full items-stretch gap-3 text-[15px] text-[#242426] font-semibold whitespace-nowrap tracking-[-0.24px] leading-none flex-wrap">
                        <span className="grow shrink w-[833px]">Access</span>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/fbcbd31c72978e2a87cf5fccc77b06a40906cf35b9cd51ef2dbc8ce6157186d3?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-6 shrink-0 my-auto"
                          alt="Icon"
                        />
                      </div>

                      <div className="space-y-[25px] mt-[25px]">
                        <AccessControl
                          title="User Management"
                          enabled={accessControls.userManagement}
                          onToggle={(enabled) =>
                            setAccessControls((prev) => ({
                              ...prev,
                              userManagement: enabled,
                            }))
                          }
                        />
                        <AccessControl
                          title="Simulation"
                          enabled={accessControls.simulation}
                          onToggle={(enabled) =>
                            setAccessControls((prev) => ({
                              ...prev,
                              simulation: enabled,
                            }))
                          }
                        />
                        <AccessControl
                          title="Package"
                          enabled={accessControls.package}
                          onToggle={(enabled) =>
                            setAccessControls((prev) => ({
                              ...prev,
                              package: enabled,
                            }))
                          }
                        />
                        <AccessControl
                          title="Payment"
                          enabled={accessControls.payment}
                          onToggle={(enabled) =>
                            setAccessControls((prev) => ({
                              ...prev,
                              payment: enabled,
                            }))
                          }
                          showActions={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* <div className="flex flex-col items-stretch font-normal">
                            <SearchBar className="xl:w-[1/5]" />

                            <div className="flex w-[202px] max-w-full flex-col items-stretch text-base text-center tracking-[-0.32px] leading-none justify-center mt-[49px] space-y-5 max-md:mt-10">

                                <GradientButton
                                    variant="primary"
                                    className="px-8 py-4"
                                >
                                    Add New Role
                                </GradientButton>
                                <GradientButton
                                    variant="outline"
                                    className="bg-bg-[#06B2E1] text-[#06B2E1] px-8 py-4]"
                                >
                                    Save & Exit
                                </GradientButton>
                                <GradientButton
                                    variant="outline"
                                    className="bg-bg-[#06B2E1] text-[#06B2E1] px-8 py-4 "
                                >
                                    Save
                                </GradientButton>
                                <GradientButton variant="danger">
                                    Delete
                                </GradientButton>
                            </div>
                        </div> */}
            <SidebarActions actions={actions} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
