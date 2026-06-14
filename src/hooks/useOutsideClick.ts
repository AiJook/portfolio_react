import { useEffect,type RefObject } from "react"

export function useOutsideClick(ref: RefObject<HTMLElement | null>, onClose: () => void) {
  useEffect(() => {
    // 1. คลิกข้างนอกแล้วปิด
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    // 2. กด Escape แล้วปิด
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("mousedown", onClickOutside)
    document.addEventListener("keydown", onKeyDown)
    
    return () => {
      document.removeEventListener("mousedown", onClickOutside)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [ref, onClose])
}