interface Position {
  x: number
  y: number
}

class ExcalidrawPanZoom {
  private isDragging = false
  private startPan: Position = { x: 0, y: 0 }
  private currentPan: Position = { x: 0, y: 0 }
  private scale = 1
  private readonly MIN_SCALE = 0.05
  private readonly MAX_SCALE = 20
  cleanups: (() => void)[] = []

  constructor(
    private container: HTMLElement,
    private content: HTMLElement,
  ) {
    this.setupEventListeners()
    this.setupControls()
    this.resetTransform()
  }

  private setupEventListeners() {
    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return
      this.isDragging = true
      this.startPan = { x: e.clientX - this.currentPan.x, y: e.clientY - this.currentPan.y }
      this.container.style.cursor = "grabbing"
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!this.isDragging) return
      e.preventDefault()
      this.currentPan = { x: e.clientX - this.startPan.x, y: e.clientY - this.startPan.y }
      this.applyTransform()
    }
    const onMouseUp = () => {
      this.isDragging = false
      this.container.style.cursor = "grab"
    }
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.12 : 0.12
      this.zoomAroundPoint(delta, e.clientX, e.clientY)
    }
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      this.isDragging = true
      const t = e.touches[0]
      this.startPan = { x: t.clientX - this.currentPan.x, y: t.clientY - this.currentPan.y }
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!this.isDragging || e.touches.length !== 1) return
      e.preventDefault()
      const t = e.touches[0]
      this.currentPan = { x: t.clientX - this.startPan.x, y: t.clientY - this.startPan.y }
      this.applyTransform()
    }
    const onTouchEnd = () => {
      this.isDragging = false
    }

    this.container.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
    this.container.addEventListener("wheel", onWheel, { passive: false })
    this.container.addEventListener("touchstart", onTouchStart, { passive: true })
    document.addEventListener("touchmove", onTouchMove, { passive: false })
    document.addEventListener("touchend", onTouchEnd)

    this.cleanups.push(
      () => this.container.removeEventListener("mousedown", onMouseDown),
      () => document.removeEventListener("mousemove", onMouseMove),
      () => document.removeEventListener("mouseup", onMouseUp),
      () => this.container.removeEventListener("wheel", onWheel),
      () => this.container.removeEventListener("touchstart", onTouchStart),
      () => document.removeEventListener("touchmove", onTouchMove),
      () => document.removeEventListener("touchend", onTouchEnd),
    )
  }

  cleanup() {
    for (const fn of this.cleanups) fn()
  }

  private setupControls() {
    const controls = document.createElement("div")
    controls.className = "excalidraw-controls"

    const zoomOut = this.createButton("−", () => this.zoomBy(-0.2))
    const resetBtn = this.createButton("⊙", () => this.resetTransform())
    const zoomIn = this.createButton("+", () => this.zoomBy(0.2))

    controls.append(zoomOut, resetBtn, zoomIn)
    this.container.appendChild(controls)
  }

  private createButton(text: string, onClick: () => void): HTMLButtonElement {
    const btn = document.createElement("button")
    btn.textContent = text
    btn.className = "excalidraw-control-btn"
    btn.addEventListener("click", onClick)
    this.cleanups.push(() => btn.removeEventListener("click", onClick))
    return btn
  }

  private zoomBy(delta: number) {
    const rect = this.container.getBoundingClientRect()
    this.zoomAroundPoint(delta, rect.left + rect.width / 2, rect.top + rect.height / 2)
  }

  private zoomAroundPoint(delta: number, clientX: number, clientY: number) {
    const newScale = Math.min(Math.max(this.scale + delta, this.MIN_SCALE), this.MAX_SCALE)
    if (newScale === this.scale) return

    const rect = this.container.getBoundingClientRect()
    const pointX = clientX - rect.left - this.currentPan.x
    const pointY = clientY - rect.top - this.currentPan.y
    const ratio = newScale / this.scale

    this.currentPan.x -= pointX * (ratio - 1)
    this.currentPan.y -= pointY * (ratio - 1)
    this.scale = newScale
    this.applyTransform()
  }

  private applyTransform() {
    this.content.style.transform = `translate(${this.currentPan.x}px, ${this.currentPan.y}px) scale(${this.scale})`
  }

  resetTransform() {
    const svg = this.content.querySelector("svg")
    if (!svg) return

    const vb = svg.viewBox.baseVal
    const svgW = vb.width || parseFloat(svg.getAttribute("width") ?? "800") || 800
    const svgH = vb.height || parseFloat(svg.getAttribute("height") ?? "600") || 600

    const cW = this.container.clientWidth
    const cH = this.container.clientHeight
    this.scale = Math.min((cW * 0.92) / svgW, (cH * 0.92) / svgH)
    this.currentPan = {
      x: (cW - svgW * this.scale) / 2,
      y: (cH - svgH * this.scale) / 2,
    }
    this.applyTransform()
  }
}

document.addEventListener("nav", async () => {
  const embeds = document.querySelectorAll<HTMLElement>(".excalidraw-embed")

  for (const embed of embeds) {
    if (embed.dataset.processed) continue
    embed.dataset.processed = "true"

    const img = embed.querySelector<HTMLImageElement>("img.excalidraw-src")
    if (!img) continue

    try {
      const res = await fetch(img.src)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const svgText = await res.text()

      const content = document.createElement("div")
      content.className = "excalidraw-content"
      content.innerHTML = svgText

      embed.innerHTML = ""
      embed.appendChild(content)

      const panZoom = new ExcalidrawPanZoom(embed, content)
      window.addCleanup(() => panZoom.cleanup())
    } catch {
      embed.innerHTML = `<div class="excalidraw-error">Could not load diagram</div>`
    }
  }
})
