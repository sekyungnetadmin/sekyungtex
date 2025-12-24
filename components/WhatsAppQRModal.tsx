"use client";

import { useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react"; // ✅ 가장 호환성 높은 방식

type Props = {
  open: boolean;
  onClose: () => void;
  qrUrl: string;
};

export default function WhatsAppQRModal({ open, onClose, qrUrl }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
      <button className="absolute inset-0 bg-black/50" onClick={onClose} aria-label="Close modal" />

      <div className="relative w-[92vw] max-w-md rounded-2xl bg-slate-900/95 p-6 shadow-2xl ring-1 ring-white/10">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white">Chat on WhatsApp</h3>
          <p className="mt-1 text-sm text-slate-300">Scan the QR code to start a conversation.</p>
        </div>

        <div className="flex items-center justify-center rounded-xl bg-white p-4">
          <QRCode value={qrUrl} size={210} includeMargin />
        </div>

        <div className="mt-4 flex items-center justify-end gap-3">
          <a href={qrUrl} className="text-sm text-slate-300 hover:text-white underline underline-offset-4">
            Open link
          </a>
          <button onClick={onClose} className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}