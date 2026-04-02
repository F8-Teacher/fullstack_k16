"use client";

import { useState } from "react";
import AddModal from "./AddModal";
export default function ModalManager() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <button
        className="bg-green-600 px-3 py-1 inline-block my-3 text-white"
        onClick={() => setOpenModal(true)}
      >
        Add todo
      </button>
      {openModal && <AddModal onClose={() => setOpenModal(false)} />}
    </>
  );
}
