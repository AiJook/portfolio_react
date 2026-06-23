// ข้อมูลจำลองอ้างอิงตามรูปภาพ image_65b6c6.png ของคุณ
const experiences = [
  {
    company: "The Stock Exchange of Thailand",
    role: "Senior Software Engineer",
    type: "Enterprise / Financial Systems",
    duration: "Jul 2019 - Apr 2020",
    logoText: "SET",
    logoBg: "bg-white text-orange-500 font-black",
  },
  {
    company: "Kiatnakin Phatra Bank",
    role: "Software Engineer",
    type: "Enterprise / Financial Systems",
    duration: "Jul 2019 - Oct 2020",
    logoText: "KKP",
    logoBg: "bg-gradient-to-br from-indigo-900 to-purple-700 text-white font-bold",
  },
  {
    company: "PTT Digital Solutions",
    role: "Software Engineer",
    type: "Enterprise / Financial Systems",
    duration: "Jan 2022 - Dec 2023",
    logoText: "PTT",
    logoBg: "bg-white text-blue-600 font-bold border border-slate-200",
  },
  {
    company: "The One Enterprise",
    role: "Software Engineer",
    type: "Enterprise / Digital Systems",
    duration: "Apr 2023 - Jan 2024",
    logoText: "one",
    logoBg: "bg-neutral-800 text-white font-bold",
  },
];

export function Experience() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      {/* หัวข้อ Section */}
      <h2 className="text-2xl font-bold tracking-tight text-slate-100 mb-12">
        Experience
      </h2>

      <div className="relative w-full">

        {/* เส้นไทม์ไลน์หลัก (แสดงแนวนอนในจอใหญ่ md: และซ่อนบนจอมือถือ) */}
        <div className="hidden md:block absolute top-[9px] left-4 right-4 h-[1px] bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-blue-500/20" />

        {/* กล่องจัดเรียง Layout: มือถือเรียงดิ่งแนวตั้ง (flex-col) / คอมเรียงแถวแนวนอน (md:grid) */}
        <div className="flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-4 relative z-10">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-row md:flex-col items-start relative group">

              {/* จุดปุ่มเรืองแสง (Timeline Node) */}
              {/* บนคอมจะอยู่กึ่งกลางเส้นด้านบน / บนมือถือจะอยู่ด้านข้างแทน */}
              <div className="absolute left-[22px] top-12 bottom-0 w-[1px] bg-blue-500/20 md:hidden" /> {/* เส้นต่อแนวตั้งบนมือถือ */}

              <div className="md:mx-auto mb-4 md:mb-6 flex items-center justify-center relative">
                {/* วงแหวนเรืองแสงชั้นนอก */}
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-blue-500/30 animate-ping opacity-75 group-hover:bg-blue-400/50" />
                {/* วงแหวนชั้นกลาง */}
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-blue-500/40 border border-blue-300" />
                {/* จุดน้ำเงินทึบตรงกลางสุด */}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
              </div>

              {/* คอนเทนต์เนื้อหา: โลโก้ + รายละเอียดบริษัท */}
              <div className="flex items-start gap-4 pl-4 md:pl-0 md:w-full md:text-left">
                {/* กล่องโลโก้ทรงมนสี่เหลี่ยม */}
                <div className={`flex-shrink-0 size-14 rounded-2xl flex items-center justify-center text-sm tracking-wide select-none shadow-md shadow-black/40 ${exp.logoBg}`}>
                  {exp.logoText === "SET" ? (
                    <span><span className="text-black">S</span>ET</span>
                  ) : exp.logoText}
                </div>

                {/* รายละเอียดข้อความ */}
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {exp.role}
                  </p>
                  <p className="text-xs text-slate-500">
                    {exp.type}
                  </p>
                  <p className="text-xs text-blue-400 font-medium pt-1">
                    {exp.duration}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}