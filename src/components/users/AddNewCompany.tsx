import React from "react";

import { SearchBar } from "../common/SearchBar";
import { ActionButton } from "../common/ActionButton";
import { UserForm } from "./UserForm";
import { MainLayout } from "../layout/MainLayout";

export const AddNewCompany: React.FC = () => {
  return (
      <MainLayout>
          <div className="bg-[#F8F9FA] flex items-start gap-[35px] overflow-hidden flex-wrap p-8">
              <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit mt-[37px]">
                  <h1 className="page-heading">Add New Company</h1>

                  <div className="shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] bg-white flex items-stretch gap-5 flex-wrap justify-between mt-[30px] px-[45px] py-[31px] rounded-[15px]">
                      <UserForm />

                      <aside className="flex flex-col items-stretch font-normal">
                          <SearchBar />

                          <div className="flex w-[202px] max-w-full flex-col items-stretch text-base text-center tracking-[-0.32px] leading-none justify-center mt-[49px] space-y-5">
                              <ActionButton variant="primary">
                                  Download Resume
                              </ActionButton>

                              <ActionButton variant="primary">
                                  Add New User
                              </ActionButton>

                              <ActionButton variant="outline">
                                  Save & Exit
                              </ActionButton>

                              <ActionButton variant="outline">
                                  Save
                              </ActionButton>

                              <ActionButton variant="danger">
                                  Delete
                              </ActionButton>
                          </div>
                      </aside>
                  </div>
              </div>
          </div>
      </MainLayout>
  );
};