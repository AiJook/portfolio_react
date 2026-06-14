import { AudioWaveform } from "lucide-react"

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 no-underline">
      {/* วงกลมโลโก้ */}
      <div
        className="relative flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full"
        style={{
          background: "linear-gradient(135deg, #534AB7 0%, #1D9E75 100%)",
          animation: "glowPulse 3s ease-in-out infinite",
        }}
      >
        <AudioWaveform className="size-[17px] text-white" aria-hidden />
      </div>
      
      {/* ตัวอักษรแบรนด์ */}
      <span
        className="text-[15px] font-medium tracking-tight"
        style={{
          background: "linear-gradient(90deg, #AFA9EC, #fff, #5DCAA5, #AFA9EC)",
          backgroundSize: "300% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "shimmer 6s linear infinite",
        }}
      >
        Portfolio
      </span>
    </a>
  )
}