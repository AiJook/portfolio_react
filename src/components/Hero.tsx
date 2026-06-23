import { useState } from "react";
import {
  Description,
  DownloadCvItem,
  FrameDecoration,
  MyProjectItem,
  NameTitle,
  OpenPositions,
  PhotoProfile,
  PositionsFloatingBadge,
  Quote,
} from "./home/Elements";
import {
  IconSvgCss3,
  IconSvgDocker,
  IconSvgFlutter,
  IconSvgGitHub,
  IconSvgHtml5,
  IconSvgJavascript,
  IconSvgReact,
  IconSvgTailwind,
} from "./icon/IconSvg";

const techIcons = [
  { Icon: IconSvgReact, top: 16, left: 8 },
  { Icon: IconSvgFlutter, top: 32, left: 0 },
  { Icon: IconSvgDocker, top: 74, left: 0 },
  { Icon: IconSvgGitHub, top: 84, left: 80 },
  { Icon: IconSvgCss3, top: 52, left: 6 },
  { Icon: IconSvgHtml5, top: 34, left: 94 },
  { Icon: IconSvgTailwind, top: 84, left: 50 },
  { Icon: IconSvgJavascript, top: 20, left: 84 },
];

export function Hero() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [isPointerActive, setIsPointerActive] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-md w-full min-h-screen grid md:grid-cols-12 gap-lg items-center justify-center pt-24 md:pt-0">
      <div className="md:col-span-7 space-y-md items-center justify-center">
        <OpenPositions />
        <div className="py-4 space-y-lg">
          <NameTitle />
          <Quote />
          <Description />
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <DownloadCvItem />
            <MyProjectItem />
          </div>
        </div>
      </div>

      <div
        className="md:col-span-5 relative group"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setPointer({
            x: ((event.clientX - rect.left) / rect.width) * 100,
            y: ((event.clientY - rect.top) / rect.height) * 100,
          });
          setIsPointerActive(true);
        }}
        onMouseLeave={() => setIsPointerActive(false)}
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[82%]
            aspect-square
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-linear-to
            from-cyan-500/30
            via-blue-500/15
            to-purple-500/20
            blur-3xl
            animate-pulse
          "
        />
        <div className="relative z-10">
          <PhotoProfile />
        </div>
        <div className="absolute top-10 -left-12 z-30">
          <FrameDecoration />
        </div>
        <PositionsFloatingBadge />

        {techIcons.map(({ Icon, top, left }, index) => {
          // คำนวณหาเวกเตอร์ระยะห่างระหว่างจุดเมาส์กับพิกัดดั้งเดิมของไอคอน
          const dx = isPointerActive ? pointer.x - left : 0;
          const dy = isPointerActive ? pointer.y - top : 0;
          const distance = Math.max(Math.hypot(dx, dy), 1);
          
          // รัศมีตรวจจับเมาส์ ยิ่งใกล้เมาส์ ยิ่งผลักแรงขึ้น (ปรับเลข 26 และ 0.28 เพื่อคุมความนุ่มนวลได้)
          const repel = isPointerActive ? Math.max(0, 26 - distance * 0.28) : 0;
          const offsetX = isPointerActive ? (-dx / distance) * repel * 1.5 : 0;
          const offsetY = isPointerActive ? (-dy / distance) * repel * 1.5 : 0;

          return (
            <div
              key={index}
              className="absolute z-20 transition-transform duration-300 ease-out"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                // ใช้ translate ผลักตัวไอคอนหนีจากเวกเตอร์ของพอยท์เตอร์เมาส์
                transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`,
              }}
            >
              {/* แยกดิฟชั้นนี้ออกมารับผิดชอบการย่อขยายแบบวนลูป เพื่อไม่ให้ทับถมกับชุดโครงสร้างขยับหนีเมาส์ */}
              <div
                className="animate-iconZoomInOut"
                style={{ 
                  animationDelay: `${index * 0.4}s` // สลับจังหวะการยืดหดให้มีมิติเหลื่อมล้ำไม่พร้อมกัน
                }}
              >
                <Icon className="h-12 w-12 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.7)] transition-all duration-200" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}