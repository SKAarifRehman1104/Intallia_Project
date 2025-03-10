import React from "react";
import SidebarActions from "@/components/users/SidebarActions";
import { MainLayout } from "@/components/layout/MainLayout";
import { Table } from "lucide-react";

export const Profile: React.FC = () => {
    const handleAddNewPackage = () => {
        console.log("Add New Company clicked");
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
            text: "Add New package",
            onClick: handleAddNewPackage,
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
                    <h1 className="page-heading">Profile</h1>

                    <div className="shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] bg-white flex items-stretch gap-5 flex-wrap justify-between mt-[30px] px-[45px] py-[31px] rounded-[15px]  h-[88vh] sticky top-0 overflow-y-scroll">
                        {/* Package  Form*/}

                        <div className="flex font-plusJakarta  flex-col gap-5 overflow-y-auto">
                            <div className="w-full">
                                <section className="">
                                    <div className="grid grid-cols-1 md:grid-cols-2 pr-20 mt-5 ">
                                        <div className="w-[154px] h-[154px] rounded-full bg-[#E5E5EA]">
                                        </div>
                                        <div className="flex  gap-3 items-center ">
                                            <button className="bg-[#06B2E1] text-white rounded-full px-4 py-2 ">
                                                Add Photo
                                            </button>
                                            <button
                                                className="ring-1 ring-[#06B2E1] text-[#06B2E1]
                                        rounded-full px-4 py-2"
                                            >
                                                Remove Photo
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="flex items-center gap-1">
                                                <span className="text-[15px] text-[#444446] leading-5 ">
                                                    First Name
                                                </span>
                                                <span className="text-[#FF3A3A] text-sm">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                // placeholder="Enter Package Name"
                                                className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="flex items-center gap-1">
                                                <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                                                    Last Name
                                                </span>
                                                <span className="text-[#FF3A3A] text-sm">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                // placeholder="Enter Amount"
                                                className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="flex items-center gap-1">
                                                <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                                                    Email
                                                </span>
                                                <span className="text-[#FF3A3A] text-sm">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                // placeholder="Enter Amount"
                                                className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="flex items-center gap-1">
                                                <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                                                    Number
                                                </span>
                                                <span className="text-[#FF3A3A] text-sm">
                                                    *
                                                </span>
                                            </label>
                                            <div className="flex items-center rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <img
                                                            src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/b3e578b8881e144097eda901ab80255224febf55ffe07d1428a77e2beb4c1939"
                                                            alt="Country flag"
                                                            className="w-5 h-3.5"
                                                        />
                                                        <span>+91</span>
                                                        <img
                                                            src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/610bae2bd3fec3226daeb553c69952d46dcb01bf137f75b31b35e8b80820ae1e"
                                                            alt="Dropdown"
                                                            className="w-4 h-4"
                                                        />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        placeholder="12344568"
                                                        className="w-full outline-none placeholder:pl-4 placeholder:text-black"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="flex items-center gap-1">
                                                <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                                                    LinkedIn URL
                                                </span>
                                                <span className="text-[#FF3A3A] text-sm">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="url"
                                                placeholder="Enter LinkedIn URL"
                                                className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="flex items-center gap-1">
                                                <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                                                    Company Name
                                                </span>
                                                <span className="text-[#FF3A3A] text-sm">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="url"
                                                placeholder="Enter LinkedIn URL"
                                                className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                                            />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        {/* Close */}
                        <div className="rounded-md"></div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
