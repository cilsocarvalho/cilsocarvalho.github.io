import type { CaseStatus } from "@/data/case-studies";

const tone: Record<CaseStatus, string> = {
  "In production": "bg-[#E8F5EE] text-[#1D6B02]",
  Implemented: "bg-[#E8F5EE] text-[#1D6B02]",
  Architecture: "bg-[#EEF2FB] text-[#2459C9]",
  Operations: "bg-[#FFF4E5] text-[#9A4E00]",
};

const StatusBadge = ({ status }: { status: CaseStatus }) => (
  <span className={`inline-flex w-fit self-start items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] font-semibold ${tone[status]}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
    {status}
  </span>
);

export default StatusBadge;
