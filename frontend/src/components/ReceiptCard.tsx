"use client";

import React, { useRef, useState } from "react";

export interface ReceiptData {
  id: string;
  file: File | null;
  tenant: string;
  date: string;
}

interface ReceiptCardProps {
  index: number;
  data: ReceiptData;
  onChange: (id: string, updatedFields: Partial<ReceiptData>) => void;
  onRemove?: (id: string) => void;
  tenants: string[];
}

export default function ReceiptCard({
  index,
  data,
  onChange,
  onRemove,
  tenants,
}: ReceiptCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFile = (file: File) => {
    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!validTypes.includes(file.type)) {
      setErrorMsg("File format must be JPG, PNG, or PDF.");
      return;
    }
    // Validate file size (5MB = 5 * 1024 * 1024 bytes)
    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg("File size must be under 5MB.");
      return;
    }

    setErrorMsg(null);
    onChange(data.id, { file });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(data.id, { file: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-black/5 flex flex-col mb-4">
      {/* Card Header */}
      <div className="bg-neutral-100 px-6 py-3 flex items-center justify-between border-b border-neutral-200">
        <span className="font-bold text-neutral-800 text-lg font-jakarta">Struk {index + 1}</span>
        {onRemove && (
          <button
            type="button"
            onClick={() => onRemove(data.id)}
            className="text-red-500 hover:text-red-700 text-sm font-semibold transition-colors duration-150 cursor-pointer font-jakarta"
          >
            Hapus
          </button>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col gap-4">
        {/* Upload Area */}
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={triggerFileInput}
          className={`relative border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 min-h-[140px] ${
            isDragActive
              ? "border-[#f48fb1] bg-[#f48fb1]/5"
              : "border-neutral-300 hover:border-neutral-400 bg-neutral-50/50"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileInputChange}
            className="hidden"
          />

          {!data.file ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500">
                {/* Camera Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </div>
              <p className="font-bold text-neutral-800 text-sm font-jakarta">
                Upload bukti pembayaran Anda disini
              </p>
              <p className="text-xs text-neutral-500 font-jakarta">
                Supports JPG, PNG, PDF (Max. 5mb)
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1 w-full px-4">
              <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-1">
                {/* Check / Document Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-semibold text-neutral-800 text-sm truncate max-w-full font-jakarta">
                {data.file.name}
              </p>
              <p className="text-xs text-neutral-500 font-jakarta">
                {(data.file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
              <button
                type="button"
                onClick={removeFile}
                className="mt-2 text-xs text-red-500 hover:text-red-700 font-semibold underline cursor-pointer font-jakarta"
              >
                Ganti File
              </button>
            </div>
          )}

          {errorMsg && (
            <p className="absolute bottom-2 text-xs text-red-500 font-medium px-4 font-jakarta">
              {errorMsg}
            </p>
          )}
        </div>

        {/* Inputs Group: Tenant and Date */}
        <div className="grid grid-cols-2 gap-4">
          {/* Tenant Name Select */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-neutral-800 font-jakarta">Nama Tenant</label>
            <div className="relative">
              <select
                value={data.tenant}
                onChange={(e) => onChange(data.id, { tenant: e.target.value })}
                className="w-full bg-white border border-neutral-200 text-neutral-800 rounded-full px-3 sm:px-5 py-2.5 pr-7 sm:pr-10 text-base md:text-sm appearance-none outline-none focus:ring-2 focus:ring-[#f48fb1]/50 focus:border-[#f48fb1] shadow-sm transition-all cursor-pointer font-jakarta"
              >
                <option value=""></option>
                {tenants.map((t) => (
                  <option key={t} value={t} className="font-jakarta">
                    {t}
                  </option>
                ))}
              </select>
              {/* Dropdown Chevron */}
              <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Date Picker */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-neutral-800 font-jakarta">Tanggal</label>
            <div className="relative">
              <input
                type="date"
                value={data.date}
                onChange={(e) => onChange(data.id, { date: e.target.value })}
                className="w-full bg-white border border-neutral-200 text-neutral-800 rounded-full px-3 sm:px-5 py-2.5 pr-7 sm:pr-10 text-base md:text-sm outline-none focus:ring-2 focus:ring-[#f48fb1]/50 focus:border-[#f48fb1] shadow-sm transition-all cursor-pointer font-jakarta [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
              {/* Calendar Icon on the right */}
              <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
