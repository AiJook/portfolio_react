import { FolderCode, WavesArrowDown } from "lucide-react"
import { Item, ItemActions, ItemContent, ItemTitle } from "../ui/item"
import profileImage from "../../assets/profilepicture.png"

export function OpenPositions() {
    return (
        <div>
            <div className="text-sm inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-widest">
                <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                Available for Full-Stack Opportunities
            </div>
        </div>

    )

}
export function NameTitle() {
    return (
        <div className="py-2 text-2xl sm:text-5xl font-bold bg-linear-to-r from-[#005F73] via-[#0A9396] to-[#52D8C9] bg-size-[300%_auto] bg-clip-text text-transparent   ">
            Sutthikan Butnangkul
        </div>
    )
}
export function Quote() {
    return (
        <h1 className="scroll-m-20 text-3xl text-primary font-semibold tracking-tight first:mt-0">
            <span className="text-4xl italic inline-block pr-3 bg-linear-to-r from-[#005F73] via-[#52D8C9] to-[#005F73] bg-size-[300%_auto] bg-clip-text text-transparent animate-[shimmer_6s_linear_infinite]">Building</span>,{" "}
            <span className="text-4xl italic inline-block pr-3 bg-linear-to-r from-[#005F73] via-[#52D8C9] to-[#005F73] bg-size-[300%_auto] bg-clip-text text-transparent animate-[shimmer_6s_linear_infinite]">learning</span>, and{" "}
            <span className="text-4xl italic inline-block pr-3 bg-linear-to-r from-[#005F73] via-[#52D8C9] to-[#005F73] bg-size-[300%_auto] bg-clip-text text-transparent animate-[shimmer_6s_linear_infinite]">evolving</span> with technology.
        </h1>
    )
}

export function Description() {
    return (
        <div>
            <p className="font-body-lg text-muted-foreground text-on-surface-variant max-w-xl">
                Computer Science graduate with hands-on experience in full-stack development through internship and academic projects. Skilled in Go, Nuxt.js, and Flutter, with experience building RESTful APIs, web applications, and mobile applications. A fast learner who continuously seeks to improve technical and problem-solving skills, and currently looking for an opportunity to grow as a Full-stack Developer while contributing to impactful and scalable systems.          </p>
        </div>
    )
}

export function DownloadCvItem() {
    return (
        <Item
            variant="outline"
            asChild
            className="w-auto flex-none rounded-full overflow-hidden"
        >
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-6xl"
                style={{
                    background: "linear-gradient(135deg, #534AB7 0%, #1D9E75 100%)",
                    animation: "glowPulse 6s ease-in-out infinite",
                }}
            >
                <ItemContent className="gap-0 px-2">
                    <ItemTitle className="text-white">Download CV</ItemTitle>
                </ItemContent>
                <ItemActions>
                    {/* วงกลมสีขาวครอบไอคอน */}
                    <span className="flex size-8 items-center justify-center rounded-full bg-white">
                        <WavesArrowDown className="size-4 text-[#534AB7]" />
                    </span>
                </ItemActions>
            </a>
        </Item>
    )
}

export function MyProjectItem() {
    return (
        <Item
            variant="outline"
            asChild
            className="w-auto flex-none rounded-full overflow-hidden"
        >
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-6xl"
                style={{
                    background: "",
                    animation: "glowPulse 6s ease-in-out infinite",
                }}
            >
                <ItemContent className="gap-0 px-2">
                    <ItemTitle className="text-[#534AB7]">My Projects</ItemTitle>

                </ItemContent>
                <ItemActions>
                    {/* วงกลมสีขาวครอบไอคอน */}
                    <span className="flex size-8 items-center justify-center rounded-full bg-[#534AB7]">
                        <FolderCode className="size-4 text-white" />
                    </span>
                </ItemActions>
            </a>
        </Item>
    )
}
export function PositionsFloatingBadge() {
    return (
        <div style={
            {
                background: "linear-gradient(90deg, #0D9488, #007969, #047857, #065F46)",
                padding: "10px 20px",
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "16px",
                position: "absolute",
                top: "20px",
                right: "20px",
                animation: "bounce 1s infinite"
            }

        }>
            Full Stack Developer
        </div>
    )
}

export function FrameDecoration() {
    return (

        <div className="relative inline-flex items-center justify-center px-8 py-2">
            <span className="text-2xl font-medium text-[#0D9488]">Hello There!</span>

            {/* เส้นกรอบ */}
            <div className="absolute inset-0 border border-neutral-500"></div>

            {/* มุมทั้ง 4 */}
            <div className="absolute -top-1 -left-1 h-3 w-3 bg-amber-600 border-1 border-[#0D9488] "></div>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-amber-600 border-1 border-[#0D9488] "></div>
            <div className="absolute -bottom-1 -left-1 h-3 w-3 bg-amber-600 border-1 border-[#0D9488] "></div>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-amber-600 border-1 border-[#0D9488] "></div>
        </div>
    )
}

export function PhotoProfile() {
    return (
        <img
            alt="Sutthikan Butnangkul"
            className="block w-full h-auto object-cover"
            src={profileImage}
        />
    )
}



