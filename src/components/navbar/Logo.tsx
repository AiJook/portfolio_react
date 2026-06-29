import { AudioWaveform } from "lucide-react"

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 no-underline">
      {/* วงกลมโลโก้ */}
      <div
        className="relative flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary"
        style={{
          animation: "glowPulse 3s ease-in-out infinite",
        }}
      >
        <AudioWaveform className="size-[17px] text-white" aria-hidden />
      </div>
      
      {/* ตัวอักษรแบรนด์ */}
      <span
        className="text-[15px] font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
      >
        Portfolio
      </span>
    </a>
  )
}