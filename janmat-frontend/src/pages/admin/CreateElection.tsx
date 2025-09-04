import React, { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import DatePicker from "react-datepicker";
import { addMinutes } from "date-fns";
import Modal from "../../components/common/Modal";
import "react-datepicker/dist/react-datepicker.css";

const CreateElection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [modalOpen, setModalOpen] = useState<"start" | "end" | null>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!title) newErrors.title = "Title is required";
    if (!description) newErrors.description = "Description is required";
    if (!startTime) newErrors.startTime = "Start time is required";
    if (!endTime) newErrors.endTime = "End time is required";
    if (startTime && endTime && endTime <= startTime)
      newErrors.endTime = "End time must be after start time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const payload = {
      title,
      description,
      start_time: startTime?.toISOString(),
      end_time: endTime?.toISOString(),
      is_active: false,
      admin_id: 1,
    };

    console.log("Submitting election:", payload);
    // TODO: Call your API here
  };

  return (
    <div className="max-w-3xl mx-auto my-8 bg-white rounded-2xl shadow-lg p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center">
        Create New Election
      </h1>

      <div className="space-y-4">
        <Input
          label="Election Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter election title"
          error={errors.title}
        />

        <Input
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a short description"
          error={errors.description}
          textarea
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Start Time</label>
          <Button variant="secondary" onClick={() => setModalOpen("start")}>
            {startTime ? startTime.toLocaleString() : "Select Start Time"}
          </Button>
          {errors.startTime && (
            <span className="text-red-500 text-sm mt-1">{errors.startTime}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">End Time</label>
          <Button variant="secondary" onClick={() => setModalOpen("end")}>
            {endTime ? endTime.toLocaleString() : "Select End Time"}
          </Button>
          {errors.endTime && (
            <span className="text-red-500 text-sm mt-1">{errors.endTime}</span>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button
          variant="primary"
          onClick={handleSubmit}
          className="px-6 py-3 text-lg"
        >
          Create Election
        </Button>
      </div>

      {/* Modal for Date/Time Picker */}
      <Modal
        isOpen={modalOpen !== null}
        onClose={() => setModalOpen(null)}
        title={modalOpen === "start" ? "Select Start Time" : "Select End Time"}
        onConfirm={() => setModalOpen(null)}
        confirmText="Confirm"
      >
        <div className="max-h-[300px] overflow-auto p-2 border rounded-lg">
          <DatePicker
            selected={modalOpen === "start" ? startTime : endTime}
            onChange={(date) => {
              if (modalOpen === "start") setStartTime(date);
              else setEndTime(date);
            }}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm"
            minDate={
              modalOpen === "start"
                ? new Date()
                : startTime
                  ? addMinutes(startTime, 15)
                  : new Date()
            }
            inline
            calendarClassName="rounded-lg shadow-lg border border-gray-200"
            dayClassName={(date) =>
              date?.toDateString() ===
                (modalOpen === "start" ? startTime : endTime)?.toDateString()
                ? "bg-blue-500 text-white rounded-full"
                : "text-gray-800"
            }
            timeClassName={(time) =>
              (modalOpen === "start" ? startTime : endTime)?.getHours() ===
                time.getHours() &&
                (modalOpen === "start" ? startTime : endTime)?.getMinutes() ===
                time.getMinutes()
                ? "bg-blue-500 text-white rounded"
                : ""
            }
          />
        </div>
      </Modal>
    </div>
  );
};

export default CreateElection;
