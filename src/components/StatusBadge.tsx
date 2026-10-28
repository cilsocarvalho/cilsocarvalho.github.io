import type { CaseStatus } from "@/data/case-studies";

const tone: Record<CaseStatus, string> = {
  "In production": "bg-[#7BD88F]/10 text-[#7BD88F] ring-1 ring-inset ring-[#7BD88F]/25",
  Implemented: "bg-[#7BD88F]/10 text-[#7BD88F] ring-1 ring-inset ring-[#7BD88F]/25",
  "In development": "bg-[#F5B971]/10 text-[#F5B971] ring-1 ring-inset ring-[#F5B971]/25",
  Architecture: "bg-[#8AB4FF]/10 text-[#8AB4FF] ring-1 ring-inset ring-[#8AB4FF]/25",
  Operations: "bg-[#F5B971]/10 text-[#F5B971] ring-1 ring-inset ring-[#F5B971]/25",
};

const StatusBadge = ({ status }: { status: CaseStatus }) => (
  <span className={`inline-flex w-fit self-start items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] font-semibold ${tone[status]}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
    {status}
  </span>
);

export default StatusBadge;
