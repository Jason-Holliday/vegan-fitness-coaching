"use client";

import CoachingForm from "./CoachingForm";
import { useCoachingModal } from "./CoachingModalProvider";
import Modal from "./Modal";

export default function CoachingFormModal() {
  const { isOpen, close } = useCoachingModal();

  return (
    <Modal
      open={isOpen}
      onClose={close}
      title="Kostenloses 1:1 Coaching anfragen"
      showHeader={false}
      panelClassName="bg-black ring-1 ring-white/10"
      bodyClassName="overflow-y-auto p-6 sm:p-9"
    >
      <CoachingForm />
    </Modal>
  );
}
