/** @type {number} */
let currentScale = 1

/** @type {number} */
let designWidth = 1280

/** @type {number} */
let designHeight = 800

/** @type {HTMLElement | null} */
let container = null

/** @type {boolean} */
let enableLog = false

function applyScale() {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const scale = Math.min(
    viewportWidth / designWidth,
    viewportHeight / designHeight,
  )

  currentScale = scale
  window.currentScale = scale

  const left = (viewportWidth - designWidth * scale) / 2
  const top = (viewportHeight - designHeight * scale) / 2

  container.style.width = `${designWidth}px`
  container.style.height = `${designHeight}px`
  container.style.position = 'absolute'
  container.style.left = `${left}px`
  container.style.top = `${top}px`
  container.style.transformOrigin = 'top left'
  container.style.transform = `scale(${scale})`

  if (enableLog) {
    console.log('[scaling]', { scale, left, top, viewportWidth, viewportHeight })
  }
}

function resizeHandler() {
  applyScale()
}

/**
 * @param {object} [options]
 * @param {number} [options.designWidth]
 * @param {number} [options.designHeight]
 * @param {string} [options.containerId]
 * @param {boolean} [options.enableLog]
 */
export function initScaling(options = {}) {
  designWidth = options.designWidth ?? 1280
  designHeight = options.designHeight ?? 800
  const containerId = options.containerId ?? 'app'
  enableLog = options.enableLog ?? false

  const el = document.getElementById(containerId)
  if (!el) {
    throw new Error(`Scaling: container #${containerId} not found`)
  }
  container = el

  window.removeEventListener('resize', resizeHandler)
  window.addEventListener('resize', resizeHandler)
  applyScale()
}

/** @returns {number} */
export function getCurrentScale() {
  return currentScale
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    window.removeEventListener('resize', resizeHandler)
  })
}
