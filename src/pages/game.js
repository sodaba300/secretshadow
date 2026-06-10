import Phaser from 'phaser'

const BASE_URL = import.meta.env.BASE_URL

function publicPath(relativePath) {
  const normalized = relativePath.replace(/^\//, '')
  return `${BASE_URL}${normalized}`
}

const BG_KEY = 'bg'
const BG_PATH = publicPath('asset/bg.webp')
const TITLE_KEY = 'title'
const TITLE_PATH = publicPath('asset/title.webp')
const TITLE_X = 122
const TITLE_Y = 85
const TITLE_DEPTH = 82
const SCORE_BG_KEY = 'scoreBg'
const SCORE_BG_PATH = publicPath('asset/scoreBg.webp')
const SCORE_UI_X = 1132
const SCORE_UI_Y = 82
const SCORE_UI_DEPTH = 82
const SCORE_DEFAULT = 0
const COIN_SCORE_REWARD = 50
const SCORE_TEXT_FONT_SIZE = '25px'
const SCORE_TEXT_COLOR = '#ffffff'
const COIN_KEY = 'coin'
const COIN_ATLAS_PATH = publicPath('asset/coin.png')
const COIN_JSON_PATH = publicPath('asset/coin.json')
const COIN_ANIM_KEY = 'coinLoop'
const COIN_FRAME_RATE = 24
const COIN_SPAWN_X = 656
const COIN_SPAWN_Y = 546
const COIN_DEPTH = 85
const COIN_SCALE_START = 1
const COIN_SCALE_END = 0.42
const COIN_BOUNCE_UP_OFFSET = 30
const COIN_BOUNCE_DOWN_OFFSET = 24
const COIN_BOUNCE_UP_DURATION = 220
const COIN_BOUNCE_DOWN_DURATION = 300
const COIN_FLIGHT_DELAY_MS = 1000
const COIN_SECOND_SPAWN_DELAY_MS = 500
const COIN_FLIGHT_DURATION = 820
const COIN_SCORE_OVERSHOOT_Y = 22
const COIN_VISIBLE_SFX_KEY = 'coinVisibleSfx'
const COIN_VISIBLE_SFX_PATH = publicPath('asset/coin_visible.mp3')
const COIN_COLLECT_SFX_KEY = 'coinCollectSfx'
const COIN_COLLECT_SFX_PATH = publicPath('asset/coin_collect.mp3')
const CLOUD_PATH = publicPath('asset/cloud.webp')
const CLOUD_KEY_1 = 'cloud1'
const CLOUD_KEY_2 = 'cloud2'
const CLOUD_1_X = 609
const CLOUD_1_Y = 429
const CLOUD_2_X = 750
const CLOUD_2_Y = 296
const CLOUD_MOVE_OFFSET = 280
const CLOUD_ANIM_DURATION = 2000
const CLOUD_1_END_X = CLOUD_1_X - CLOUD_MOVE_OFFSET
const CLOUD_2_END_X = CLOUD_2_X + CLOUD_MOVE_OFFSET
const TIMER_CLOUD_RETURN_AT = 15
const FAST_ANSWER_MAX_MS = 1500
const FAST_ANSWER_COIN_COUNT = 3
const HINT_EARLY_REVEAL_MS = 2500
const SILHOUETTE_FADE_DURATION = 2000
const CLOUD_DEPTH = 20
const HINT_PANEL_KEY = 'hintPanel'
const HINT_PANEL_PATH = publicPath('asset/hintPannel.webp')
const HINT_PANEL_1_X = 257
const HINT_PANEL_2_X = 1037
const HINT_PANEL_TARGET_Y = 268
const HINT_PANEL_OVERSHOOT_OFFSET = 28
const HINT_PANEL_OFFSCREEN_Y = -160
const HINT_PANEL_DEPTH = 30
const HINT_PANEL_DROP_DURATION = 650
const HINT_PANEL_BOUNCE_DURATION = 260
const HINT_PANEL_SFX_KEY = 'hintPanelSfx'
const HINT_PANEL_SFX_PATH = publicPath('asset/hintPannel.mp3')
const HINT_WORD_COLOR = '#ffffff'
// hintPannel.webp(402×610) 디자인 기준 영역 — 비율로 환산해 해상도 변경에도 대응
const HINT_PANEL_IMAGE_AREA_NORM = {
  x: 50 / 402,
  y: 267 / 610,
  width: 302 / 402,
  height: 189 / 610,
}
const HINT_PANEL_TEXT_AREA_NORM = {
  x: 34 / 402,
  y: 457 / 610,
  width: 338 / 402,
  height: 146 / 610,
}
const HINT_WORD_FONT_SIZE = '40px'
const HINT_TEXT_AREA_WIDTH_RATIO = 0.92
const HINT_IMAGE_AREA_FILL_RATIO = 0.88
const HINT_IMAGE_OFFSET_Y = 24
const HINT_TEXT_OFFSET_Y = -13
const WORDS_KEY = 'words'
const WORDS_PATH = publicPath('data/word.json')
const WORD_IMAGE_X = 657
const WORD_IMAGE_Y = 349
const WORD_IMAGE_MAX_WIDTH = 560
const WORD_IMAGE_MAX_HEIGHT = 560
const WORD_IMAGE_DEPTH_BASE = 10
const WORD_IMAGE_DEPTH_TOP = 11
const FIREWORK_TARGET_X = 653
const FIREWORK_TARGET_Y = 75
const FIREWORK_ROCKET_DURATION = 700
const FIREWORK_PARTICLE_COUNT = 36
const FIREWORK_PARTICLE_MIN_DISTANCE = 70
const FIREWORK_PARTICLE_MAX_DISTANCE = 150
const FIREWORK_PARTICLE_DURATION = 900
const FIREWORK_DEPTH = 80
const CLOCK_BG_KEY = 'clockBg'
const CLOCK_BG_PATH = publicPath('asset/clockBg.webp')
const CLOCK_UI_X = 653
const CLOCK_UI_Y = 75
const CLOCK_UI_DEPTH = 80
const TIME_LIMIT = 30
const CLOCK_TIMER_FONT = 'Orbitron, sans-serif'
const CLOCK_TIMER_FONT_SIZE = '25px'
const STAR_KEY = 'star'
const STAR_PATH = publicPath('asset/star.webp')
const MIC_ACTIVE_KEY = 'micActive'
const MIC_ACTIVE_ATLAS_PATH = publicPath('asset/micActive.webp')
const MIC_ACTIVE_JSON_PATH = publicPath('asset/micActive.json')
const MIC_ACTIVE_FRAME_PREFIX = 'micActive_'
const MIC_ACTIVE_FRAME_SUFFIX = '_img.png'
const MIC_ACTIVE_ANIM_KEY = 'micActiveLoop'
const MIC_ACTIVE_FRAME_RATE = 12
const MIC_ACTIVE_X = 657
const MIC_ACTIVE_Y = 768
const MIC_ACTIVE_DEPTH = 86
// JSON·webp 동기화 후 프레임이 924×512로 커져, 이전(616×341 @0.5)과 비슷한 크기 유지
const MIC_ACTIVE_SCALE = 0.33
const FIREWORK_ROCKET_SCALE = 0.35
const FIREWORK_PARTICLE_MIN_SCALE = 0.2
const FIREWORK_PARTICLE_MAX_SCALE = 0.45
const FIREWORK_PARTICLE_END_SCALE = 0.1
const FALLING_STAR_SPLIT_Y = 658
const FALLING_STAR_SCALE = 0.3
const FALLING_STAR_DEPTH = 85
const FALLING_STAR_FALL_DURATION = 700
const FALLING_STAR_BOUNCE_X_OFFSET = 110
const FALLING_STAR_BOUNCE_RISE_OFFSET = 90
const FALLING_STAR_BOUNCE_RISE_DURATION = 240
const FALLING_STAR_FADE_DURATION = 1100
const VOICE_RETRY_DELAY_MS = 3000
const VOICE_WRONG_ANSWER_RETRY_DELAY_MS = 400
const VOICE_NETWORK_RETRY_DELAY_MS = 6000
const VOICE_SESSION_COOLDOWN_MS = 400
const VOICE_ERROR_SUPPRESS_MS = 300
const LASER_DURATION_MS = 3000
const LASER_DEPTH = 87
const LASER_PULSE_DURATION_MS = 280
const LASER_WIDTH_START = 4
const LASER_WIDTH_END = 20
const LASER_ALPHA_PULSE_MIN = 0.55
const MYSTERY_BGM_KEY = 'mysteryBgm'
const MYSTERY_BGM_PATH = publicPath('asset/mystery.mp3')
const SMALL_EXPLOSION_SFX_KEY = 'smallExplosionSfx'
const SMALL_EXPLOSION_SFX_PATH = publicPath('asset/small_explosion.mp3')
const MIC_ACTIVE_VIS_SFX_KEY = 'micActiveVisSfx'
const MIC_ACTIVE_VIS_SFX_PATH = publicPath('asset/micActive_vis.mp3')
const BEAM_SFX_KEY = 'beamSfx'
const BEAM_SFX_PATH = publicPath('asset/beam.mp3')
const INCORRECT_SFX_KEY = 'incorrectSfx'
const INCORRECT_SFX_PATH = publicPath('asset/incorrect.mp3')
const CORRECT_SFX_KEY = 'correctSfx'
const CORRECT_SFX_PATH = publicPath('asset/correct.mp3')
const QUIZ_EXPLOSION_SFX_KEY = 'quizExplosionSfx'
const QUIZ_EXPLOSION_SFX_PATH = publicPath('asset/quizExplosion.mp3')
const START_OVERLAY_DEPTH = 400
const START_OVERLAY_ALPHA = 0.62
const START_BUTTON_WIDTH = 260
const START_BUTTON_HEIGHT = 96
const START_BUTTON_FILL = 0x7a2cff
const START_BUTTON_STROKE = 0xffffff
const START_BUTTON_TEXT = 'START'
const START_BUTTON_TEXT_SIZE = '44px'
const LASER_IMPACT_DEPTH = 12
const LASER_IMPACT_CORE_RADIUS = 9
const LASER_IMPACT_HALO_RADIUS = 20
const LASER_IMPACT_RIPPLE_INTERVAL_START_MS = 260
const LASER_IMPACT_RIPPLE_INTERVAL_END_MS = 95
const LASER_IMPACT_CORE_PULSE_MS = 110
const SHARD_COLS = 8
const SHARD_ROWS = 5
const SHATTER_DUST_PER_CELL_MIN = 20
const SHATTER_DUST_PER_CELL_MAX = 30
const SHATTER_DUST_DEPTH = 15
const SHATTER_DUST_SCALE_MIN = 0.04
const SHATTER_DUST_SCALE_MAX = 0.13
const SHATTER_DUST_TINT = 0xfff6c8
const SHATTER_DUST_FADE_MIN_MS = 2400
const SHATTER_DUST_FADE_MAX_MS = 4200
const SHATTER_DUST_EXPLOSION_SPEED_MIN = 140
const SHATTER_DUST_EXPLOSION_SPEED_MAX = 360
const SHATTER_DUST_UPWARD_MIN = -300
const SHATTER_DUST_UPWARD_MAX = -50
const SHATTER_DUST_GRAVITY_MIN = 100
const SHATTER_DUST_GRAVITY_MAX = 150
const SHATTER_DUST_SPIN_MIN = -100
const SHATTER_DUST_SPIN_MAX = 100
const SHATTER_DUST_JITTER = 36
const SHATTER_DUST_SETTLE_MS = 4500
const SHARD_EXPLOSION_FLASH_DURATION = 220
const SHARD_EXPLOSION_SHAKE_DURATION = 280
const SHARD_EXPLOSION_SHAKE_INTENSITY = 0.01
const BLOCK_KEY = 'wordBlock'
const BLOCK_PATH = publicPath('asset/block.webp')
const WORD_BLOCK_Y = 315
const WORD_BLOCK_GAP = 6
const WORD_BLOCK_DEPTH = 28
const WORD_BLOCK_SCALE_START = 0.25
const WORD_BLOCK_POP_DURATION = 420
const WORD_BLOCK_STAGGER_MS = 70
const WORD_BLOCK_BOUNCE_OFFSET_Y = 36
const WORD_BLOCK_LETTER_FONT_SIZE = '44px'
const WORD_BLOCK_LETTER_COLOR = '#ffffff'
const BIG_STAR_KEY = 'bigStar'
const BIG_STAR_PATH = publicPath('asset/bigStar.webp')
const BIG_STAR_DEPTH = 31
const BIG_STAR_SCALE = 1
const BIG_STAR_ALPHA = 1
const BIG_STAR_SWEEP_DURATION_SCALE = 1
const BIG_STAR_PARTICLE_INTERVAL_MS = 12
const BIG_STAR_PARTICLE_BURST_MIN = 5
const BIG_STAR_PARTICLE_BURST_MAX = 20
const BIG_STAR_PARTICLE_SPAWN_RADIUS = 34
const BIG_STAR_PARTICLE_BEHIND_OFFSET_MIN = 12
const BIG_STAR_PARTICLE_BEHIND_OFFSET_MAX = 40
const BIG_STAR_PARTICLE_HORIZ_SPEED_MIN = 90
const BIG_STAR_PARTICLE_HORIZ_SPEED_MAX = 175
const BIG_STAR_PARTICLE_INITIAL_VY_MIN = -30
const BIG_STAR_PARTICLE_INITIAL_VY_MAX = 20
const BIG_STAR_PARTICLE_GRAVITY_MIN = 280
const BIG_STAR_PARTICLE_GRAVITY_MAX = 430
const BIG_STAR_PARTICLE_DUST_SCALE_MIN = 0.06
const BIG_STAR_PARTICLE_DUST_SCALE_MAX = 0.14
const BIG_STAR_PARTICLE_MID_SCALE_MIN = 0.14
const BIG_STAR_PARTICLE_MID_SCALE_MAX = 0.28
const BIG_STAR_PARTICLE_LARGE_SCALE_MIN = 0.28
const BIG_STAR_PARTICLE_LARGE_SCALE_MAX = 0.48
const BIG_STAR_PARTICLE_FADE_MIN_MS = 1000
const BIG_STAR_PARTICLE_FADE_MAX_MS = 1600
const BIG_STAR_PARTICLE_SPIN_MIN = -140
const BIG_STAR_PARTICLE_SPIN_MAX = 140
const BIG_STAR_PARTICLE_TINT = 0xfff6c8
const SUCCESS_IMAGE_KEY = 'success'
const SUCCESS_IMAGE_PATH = publicPath('asset/success.webp')
const SUCCESS_IMAGE_X = 656
const SUCCESS_IMAGE_Y = 200
const SUCCESS_IMAGE_DEPTH = 32
const SUCCESS_IMAGE_DELAY_MS = 1000
const SUCCESS_IMAGE_BOUNCE_OFFSET_Y = 56
const SUCCESS_IMAGE_SCALE_START = 0.25
const SUCCESS_IMAGE_POP_DURATION = 520
const RE_BTN_KEY = 'reBtn'
const RE_BTN_PATH = publicPath('asset/reBtn.webp')
const NE_BTN_KEY = 'neBtn'
const NE_BTN_PATH = publicPath('asset/neBtn.webp')
const RE_BTN_X = 513
const RE_BTN_Y = 673
const NE_BTN_X = 816
const NE_BTN_Y = 673
const NAV_BTN_DEPTH = 86
const NAV_BTN_BOUNCE_OFFSET_Y = 36
const NAV_BTN_SCALE_START = 0.25
const NAV_BTN_POP_DURATION = 520
const NAV_BTN_STAGGER_MS = 80
const DEBUG_UI_DEPTH = 200
const DEBUG_BTN_WIDTH = 96
const DEBUG_BTN_HEIGHT = 40
const DEBUG_BTN_MARGIN = 24
const DEBUG_BTN_GAP = 12
const SHOW_DEBUG_ANSWER_BUTTONS = false

function toPublicPath(path) {
  return publicPath(path)
}

/**
 * word.json `data[qid]` 항목 반환
 * @param {Array<{ word?: string, image?: string }>} data
 * @param {number} qid
 */
function getActiveWordEntry(data, qid = 0) {
  if (!Array.isArray(data) || data.length === 0) return null

  if (qid >= 0 && qid < data.length) {
    return data[qid]
  }

  return data.find((entry) => entry?.image) ?? data[0]
}

/** word.json 항목의 `word` 키 값 — STT 정답 비교용 */
function getAnswerWordFromEntry(entry) {
  const word = entry?.word
  return typeof word === 'string' ? word.trim() : ''
}

function getWordImageKey(qid) {
  return `wordImage_${qid}`
}

function getWordSoundKey(qid) {
  return `wordSound_${qid}`
}

function getHintImageKey(qid, index) {
  return `hintImage_${qid}_${index}`
}

function getHintSoundKey(qid, index) {
  return `hintSound_${qid}_${index}`
}

function getHintPanelFrameSize(textureManager, textureKey) {
  const texture = textureManager.get(textureKey)
  const source = texture.getSourceImage()
  return { width: source.width, height: source.height }
}

function getHintPanelAreaPixels(areaNorm, panelWidth, panelHeight) {
  return {
    x: panelWidth * areaNorm.x,
    y: panelHeight * areaNorm.y,
    width: panelWidth * areaNorm.width,
    height: panelHeight * areaNorm.height,
  }
}

/** 패널 origin(0.5) 기준 — 이미지 좌상단 픽셀 영역의 중심 좌표 */
function getHintPanelAreaCenter(areaNorm, panelWidth, panelHeight) {
  const area = getHintPanelAreaPixels(areaNorm, panelWidth, panelHeight)
  return {
    x: area.x + area.width / 2 - panelWidth / 2,
    y: area.y + area.height / 2 - panelHeight / 2,
  }
}

function getBlockFrameSize(textureManager, textureKey) {
  const texture = textureManager.get(textureKey)
  const source = texture.getSourceImage()
  return { width: source.width, height: source.height }
}

function getHintImageScaleForArea(image, areaWidth, areaHeight) {
  const fill = HINT_IMAGE_AREA_FILL_RATIO
  return Math.min((areaWidth * fill) / image.width, (areaHeight * fill) / image.height, 1)
}

/**
 * 조각 위치에서 폭발하며 솟구치는 먼지 파티클 초기 속도
 * Phaser: vy 음수 = 위, 양수 = 아래
 */
function getShatterDustVelocity(cellX, cellY, centerX, centerY) {
  const dx = cellX - centerX
  const dy = cellY - centerY
  const dist = Math.hypot(dx, dy) || 1
  const ux = dx / dist
  const uy = dy / dist

  const radialSpeed = Phaser.Math.Between(
    SHATTER_DUST_EXPLOSION_SPEED_MIN,
    SHATTER_DUST_EXPLOSION_SPEED_MAX,
  )

  const vx =
    ux * radialSpeed +
    Phaser.Math.FloatBetween(-SHATTER_DUST_JITTER, SHATTER_DUST_JITTER)
  const vy =
    uy * radialSpeed * 0.35 +
    Phaser.Math.FloatBetween(SHATTER_DUST_UPWARD_MIN, SHATTER_DUST_UPWARD_MAX)

  return { vx, vy }
}

function getWordImageScale(image) {
  return Math.min(
    WORD_IMAGE_MAX_WIDTH / image.width,
    WORD_IMAGE_MAX_HEIGHT / image.height,
    1,
  )
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

const ONE_CLAP_PATTERN = /^oneclap/

/**
 * STT 결과 정규화 (소문자, 공백·특수문자 제거, One-Clap 접두 제거)
 * @param {string} text
 */
export function normalizeTranscript(text) {
  const normalized = String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')

  return normalized.replace(ONE_CLAP_PATTERN, '')
}

/**
 * 정답 단어 정규화
 * @param {string} word
 */
function normalizeTargetWord(word) {
  return String(word)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
}

/**
 * @param {string} transcript
 * @param {string} targetWord
 */
export function checkAnswer(transcript, targetWord) {
  return (
    normalizeTranscript(transcript) === normalizeTargetWord(targetWord)
  )
}

function getSpeechRecognitionConstructor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition
}

/**
 * 브라우저 Web Speech API provider (추후 Whisper 등으로 교체 가능)
 */
function createBrowserSpeechProvider() {
  const SpeechRecognition = getSpeechRecognitionConstructor()
  if (!SpeechRecognition) {
    return null
  }

  const recognition = new SpeechRecognition()
  recognition.lang = 'en-US'
  recognition.continuous = false
  recognition.interimResults = false
  recognition.maxAlternatives = 1

  return {
    recognition,
    start() {
      recognition.start()
    },
    stop() {
      try {
        recognition.stop()
      } catch {
        try {
          recognition.abort()
        } catch {
          // session already ended
        }
      }
    },
    onResult(callback) {
      recognition.onresult = (event) => {
        const transcript = event.results[0]?.[0]?.transcript ?? ''
        callback(transcript)
      }
    },
    onError(callback) {
      recognition.onerror = (event) => {
        callback(event.error ?? 'unknown')
      }
    },
    onEnd(callback) {
      recognition.onend = callback
    },
    onStart(callback) {
      recognition.onstart = callback
    },
  }
}

function getMicActiveFrameNumber(frameName) {
  return parseInt(
    frameName.match(/micActive_(\d+)_img\.png/)?.[1] ?? '-1',
    10,
  )
}

function getCoinFrameNumber(frameName) {
  return parseInt(frameName.match(/coin_(\d+)\.png/)?.[1] ?? '-1', 10)
}

function getCoinFrameList(textureManager, textureKey) {
  if (!textureManager.exists(textureKey)) {
    console.warn('[coin] texture not loaded:', textureKey)
    return []
  }

  return textureManager
    .get(textureKey)
    .getFrameNames()
    .filter((name) => name !== '__BASE' && name.startsWith('coin_'))
    .sort((a, b) => getCoinFrameNumber(a) - getCoinFrameNumber(b))
    .map((frame) => ({ key: textureKey, frame }))
}

function getMicActiveFrameList(textureManager, textureKey) {
  if (!textureManager.exists(textureKey)) {
    console.warn('[micActive] texture not loaded:', textureKey)
    return []
  }

  const names = textureManager.get(textureKey).getFrameNames()
  const filtered = names.filter(
    (name) =>
      name !== '__BASE' &&
      name.startsWith(MIC_ACTIVE_FRAME_PREFIX) &&
      name.endsWith(MIC_ACTIVE_FRAME_SUFFIX),
  )

  if (filtered.length === 0) {
    console.warn('[micActive] no frames found. available:', names)
    return []
  }

  return filtered
    .sort((a, b) => getMicActiveFrameNumber(a) - getMicActiveFrameNumber(b))
    .map((frame) => ({ key: textureKey, frame }))
}

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
    this.resetRoundState()
  }

  init(data) {
    this.qid = typeof data?.qid === 'number' ? data.qid : 0
    this.preservedScore =
      typeof data?.score === 'number' ? data.score : SCORE_DEFAULT
    this.skipStartOverlay = data?.skipStartOverlay === true
    this.resetRoundState()
  }

  resetRoundState() {
    this.qid = this.qid ?? 0
    this.preservedScore = this.preservedScore ?? SCORE_DEFAULT
    this.timerCountdownEvent = null
    this.timerPaused = false
    this.cloudReturnTriggered = false
    this.hasWrongAnswer = false
    this.hintPanelContainer1 = null
    this.hintPanelContainer2 = null
    this.hintPanelsAnimated = false
    this.voiceProvider = null
    this.voiceAnswered = false
    this.timeUpHandled = false
    this.voiceListening = false
    this.voiceRetryTimer = null
    this.suppressVoiceErrors = false
    this.suppressVoiceErrorTimer = null
    this.voiceSessionHasTranscript = false
    this.voicePendingRetryReason = null
    this.voiceNetworkErrorNotified = false
    this.firstSpeechRecorded = false
    this.revealCompleteTime = null
    this.problemStartTime = null
    this.isFastCorrectAnswer = false
    this.earlyHintTimeReached = false
    this.earlyHintRevealTimer = null
    this.speechTime = null
    this.targetWord = ''
    this.micLaserGraphics = null
    this.micLaserPulseState = null
    this.laserImpactChargeState = null
    this.laserImpactHitPoint = null
    this.laserImpactCore = null
    this.laserImpactHalo = null
    this.laserImpactRippleTimer = null
    this.shatterDustParticles = []
    this.wordBlockContainers = []
    this.bigStarSprite = null
    this.bigStarParticleTimer = null
    this.bigStarTrailParticles = []
    this.successImageSprite = null
    this.successImageRevealTimer = null
    this.startOverlayContainer = null
    this.contentStarted = false
    this.rewardCoinSprites = []
    this.rewardCoinSpawnTimers = []
    this.pendingRewardCoins = 0
    this.roundNavButtons = []
    this.roundNavVisible = false
  }

  preload() {
    this.load.image(BG_KEY, BG_PATH)
    this.load.image(TITLE_KEY, TITLE_PATH)
    this.load.image(SCORE_BG_KEY, SCORE_BG_PATH)
    this.load.image(STAR_KEY, STAR_PATH)
    this.load.image(CLOCK_BG_KEY, CLOCK_BG_PATH)
    this.load.image(CLOUD_KEY_1, CLOUD_PATH)
    this.load.image(CLOUD_KEY_2, CLOUD_PATH)
    this.load.image(HINT_PANEL_KEY, HINT_PANEL_PATH)
    this.load.image(BLOCK_KEY, BLOCK_PATH)
    this.load.image(BIG_STAR_KEY, BIG_STAR_PATH)
    this.load.image(SUCCESS_IMAGE_KEY, SUCCESS_IMAGE_PATH)
    this.load.image(RE_BTN_KEY, RE_BTN_PATH)
    this.load.image(NE_BTN_KEY, NE_BTN_PATH)
    this.load.audio(MYSTERY_BGM_KEY, MYSTERY_BGM_PATH)
    this.load.audio(SMALL_EXPLOSION_SFX_KEY, SMALL_EXPLOSION_SFX_PATH)
    this.load.audio(MIC_ACTIVE_VIS_SFX_KEY, MIC_ACTIVE_VIS_SFX_PATH)
    this.load.audio(BEAM_SFX_KEY, BEAM_SFX_PATH)
    this.load.audio(INCORRECT_SFX_KEY, INCORRECT_SFX_PATH)
    this.load.audio(CORRECT_SFX_KEY, CORRECT_SFX_PATH)
    this.load.audio(QUIZ_EXPLOSION_SFX_KEY, QUIZ_EXPLOSION_SFX_PATH)
    this.load.audio(HINT_PANEL_SFX_KEY, HINT_PANEL_SFX_PATH)
    this.load.audio(COIN_VISIBLE_SFX_KEY, COIN_VISIBLE_SFX_PATH)
    this.load.audio(COIN_COLLECT_SFX_KEY, COIN_COLLECT_SFX_PATH)
    this.load.atlas(
      MIC_ACTIVE_KEY,
      MIC_ACTIVE_ATLAS_PATH,
      MIC_ACTIVE_JSON_PATH,
    )
    this.load.atlas(COIN_KEY, COIN_ATLAS_PATH, COIN_JSON_PATH)
    this.load.json(WORDS_KEY, WORDS_PATH)

    const queueQuestionAssets = () => {
      if (!this.cache.json.exists(WORDS_KEY)) return

      const { data } = this.cache.json.get(WORDS_KEY)
      const entry = getActiveWordEntry(data, this.qid)
      const wordImageKey = getWordImageKey(this.qid)
      const wordSoundKey = getWordSoundKey(this.qid)

      if (entry?.image) {
        this.load.image(wordImageKey, toPublicPath(entry.image))
      }

      if (entry?.sound) {
        this.load.audio(wordSoundKey, toPublicPath(entry.sound))
      }

      if (Array.isArray(entry?.hint)) {
        entry.hint.forEach((hint, index) => {
          if (hint?.image) {
            this.load.image(
              getHintImageKey(this.qid, index),
              toPublicPath(hint.image),
            )
          }
          if (hint?.sound) {
            this.load.audio(
              getHintSoundKey(this.qid, index),
              toPublicPath(hint.sound),
            )
          }
        })
      }
    }

    this.load.on(`filecomplete-json-${WORDS_KEY}`, queueQuestionAssets)

    if (this.cache.json.exists(WORDS_KEY)) {
      queueQuestionAssets()
    }
  }

  create() {
    const { width, height } = this.scale

    this.add
      .image(width / 2, height / 2, BG_KEY)
      .setOrigin(0.5)
      .setDisplaySize(width, height)

    if (this.textures.exists(TITLE_KEY)) {
      this.titleImage = this.add
        .image(TITLE_X, TITLE_Y, TITLE_KEY)
        .setOrigin(0.5)
        .setDepth(TITLE_DEPTH)
    }

    if (this.textures.exists(getWordImageKey(this.qid))) {
      this.createWordImages()
    }

    if (
      this.textures.exists(CLOUD_KEY_1) &&
      this.textures.exists(CLOUD_KEY_2)
    ) {
      this.createCloudImages()
    }

    this.createClockUIContainer()
    this.createScoreUIContainer()
    this.loadTargetWord()
    this.createHintPanelContainers()
    this.setupVoiceRecognition()
    this.createDebugAnswerButtons()

    if (this.skipStartOverlay) {
      this.startContentFlow()
    } else {
      this.showStartOverlay()
    }
  }

  showStartOverlay() {
    if (this.startOverlayContainer) {
      this.startOverlayContainer.destroy(true)
      this.startOverlayContainer = null
    }

    const { width, height } = this.scale
    const overlay = this.add
      .rectangle(width / 2, height / 2, width, height, 0x000000, START_OVERLAY_ALPHA)
      .setOrigin(0.5)
    const button = this.add
      .rectangle(
        width / 2,
        height / 2,
        START_BUTTON_WIDTH,
        START_BUTTON_HEIGHT,
        START_BUTTON_FILL,
        1,
      )
      .setOrigin(0.5)
      .setStrokeStyle(4, START_BUTTON_STROKE, 0.95)
      .setInteractive()
    const buttonText = this.add
      .text(width / 2, height / 2, START_BUTTON_TEXT, {
        fontFamily: CLOCK_TIMER_FONT,
        fontSize: START_BUTTON_TEXT_SIZE,
        fontStyle: 'bold',
        color: '#ffffff',
      })
      .setOrigin(0.5)

    button.on('pointerover', () => {
      button.setScale(1.05)
    })
    button.on('pointerout', () => {
      button.setScale(1)
    })
    button.on('pointerdown', () => {
      button.setScale(0.96)
    })
    button.on('pointerup', () => {
      button.setScale(1.05)
      this.startContentFlow()
    })

    this.startOverlayContainer = this.add.container(0, 0, [overlay, button, buttonText])
    this.startOverlayContainer.setDepth(START_OVERLAY_DEPTH)
  }

  startContentFlow() {
    if (this.contentStarted) return
    this.contentStarted = true

    if (this.startOverlayContainer) {
      this.startOverlayContainer.destroy(true)
      this.startOverlayContainer = null
    }

    this.startIntroSequence()
  }

  startIntroSequence() {
    if (this.cloudImage1 && this.cloudImage2) {
      this.startCloudRevealAnimation()
      return
    }

    this.fadeWordSilhouette()
  }

  loadTargetWord() {
    if (!this.cache.json.exists(WORDS_KEY)) return

    const { data } = this.cache.json.get(WORDS_KEY)
    this.currentWordEntry = getActiveWordEntry(data, this.qid)
    this.targetWord = getAnswerWordFromEntry(this.currentWordEntry)

    if (!this.targetWord) {
      console.warn(
        '[Target] word.json의 word 키를 찾을 수 없습니다.',
        this.currentWordEntry,
      )
    }
  }

  setupVoiceRecognition({ force = false } = {}) {
    if (this.voiceProvider && !force) return

    this.voiceProvider = createBrowserSpeechProvider()

    if (!this.voiceProvider) {
      console.warn('Speech Recognition Not Supported')
      return
    }

    this.voiceProvider.onResult((transcript) => {
      this.onVoiceTranscript(transcript)
    })

    this.voiceProvider.onError((error) => {
      if (this.voiceAnswered || this.suppressVoiceErrors) return
      if (error === 'aborted') return

      this.voiceListening = false
      this.voicePendingRetryReason = error

      if (error === 'network') {
        if (!this.voiceNetworkErrorNotified) {
          this.voiceNetworkErrorNotified = true
          console.warn(
            '[STT] network — Chrome 음성 인식은 인터넷(Google 서버) 연결이 필요합니다. 연결 확인 후 자동 재시도합니다.',
          )
        }
        return
      }

      if (error === 'not-allowed') {
        console.warn('[STT] not-allowed — 마이크 권한을 허용해 주세요.')
        return
      }

      const silentRetryErrors = ['no-speech', 'audio-capture']
      if (!silentRetryErrors.includes(error)) {
        console.warn('[STT] error:', error)
      }
    })

    this.voiceProvider.onStart(() => {
      this.voiceListening = true
      this.voiceSessionHasTranscript = false
      this.voicePendingRetryReason = null
      this.resumeMicActiveAnimation()
    })

    this.voiceProvider.onEnd(() => {
      this.voiceListening = false

      if (this.voiceAnswered || this.suppressVoiceErrors) return

      if (this.voiceSessionHasTranscript) return

      const reason = this.voicePendingRetryReason ?? 'idle'
      this.voicePendingRetryReason = null
      this.queueVoiceRestart(reason)
    })
  }

  startVoiceRecognition() {
    if (!this.voiceProvider || this.voiceAnswered || this.timeUpHandled) return
    if (this.voiceListening) return

    try {
      this.voiceProvider.start()
    } catch (error) {
      console.warn('[STT] start failed:', error)
      this.queueVoiceRestart('start-failed')
    }
  }

  startVoiceRecognitionAfterCooldown() {
    this.time.delayedCall(VOICE_SESSION_COOLDOWN_MS, () => {
      this.startVoiceRecognition()
    })
  }

  resetVoiceProvider() {
    if (this.suppressVoiceErrorTimer) {
      this.suppressVoiceErrorTimer.remove()
      this.suppressVoiceErrorTimer = null
    }

    if (this.voiceProvider) {
      this.suppressVoiceErrors = true
      try {
        this.voiceProvider.stop()
      } catch (error) {
        console.warn('[STT] reset stop failed:', error)
      }
    }

    this.voiceProvider = null
    this.voiceListening = false
    this.voiceSessionHasTranscript = true
    this.setupVoiceRecognition({ force: true })
    this.suppressVoiceErrors = false
  }

  resumeMicActiveAnimation() {
    if (!this.micActiveSprite?.anims) return

    const anims = this.micActiveSprite.anims
    if (!anims.isPlaying || anims.currentAnim?.key !== MIC_ACTIVE_ANIM_KEY) {
      this.micActiveSprite.play(MIC_ACTIVE_ANIM_KEY)
    }
  }

  stopVoiceRecognition({ cancelPendingRetry = true } = {}) {
    if (cancelPendingRetry && this.voiceRetryTimer) {
      this.voiceRetryTimer.remove()
      this.voiceRetryTimer = null
    }

    if (!this.voiceProvider) return

    this.suppressVoiceErrors = true
    if (this.suppressVoiceErrorTimer) {
      this.suppressVoiceErrorTimer.remove()
    }

    try {
      this.voiceProvider.stop()
    } catch (error) {
      console.warn('[STT] stop failed:', error)
    }

    this.voiceListening = false

    this.suppressVoiceErrorTimer = this.time.delayedCall(
      VOICE_ERROR_SUPPRESS_MS,
      () => {
        this.suppressVoiceErrors = false
        this.suppressVoiceErrorTimer = null
      },
    )
  }

  queueVoiceRestart(reason = 'idle') {
    if (this.voiceAnswered || this.voiceRetryTimer) return

    const delay =
      reason === 'wrong-answer'
        ? VOICE_WRONG_ANSWER_RETRY_DELAY_MS
        : reason === 'network' || reason === 'start-failed'
          ? VOICE_NETWORK_RETRY_DELAY_MS
          : VOICE_RETRY_DELAY_MS

    this.voiceRetryTimer = this.time.delayedCall(delay, () => {
      this.voiceRetryTimer = null
      if (this.voiceAnswered || this.timeUpHandled) return

      if (reason === 'wrong-answer') {
        this.resetVoiceProvider()
      }

      this.startVoiceRecognitionAfterCooldown()
    })
  }

  logVoiceResult(transcript, isCorrect) {
    const normalizedStt = normalizeTranscript(transcript)
    const normalizedTarget = normalizeTargetWord(this.targetWord)
    const verdict = isCorrect ? '정답' : '오답'
    const latencyMs =
      this.problemStartTime != null && this.speechTime != null
        ? this.speechTime - this.problemStartTime
        : null
    const latencySec =
      latencyMs != null ? `${(latencyMs / 1000).toFixed(2)} sec` : 'n/a'

    console.log(`[Voice] ${verdict}`, {
      result: isCorrect ? 'SUCCESS' : 'FAIL',
      transcript: transcript || '(empty)',
      targetWord: this.targetWord,
      normalizedStt,
      normalizedTarget,
      matched: normalizedStt === normalizedTarget,
      latency: latencySec,
      fastAnswer: isCorrect ? this.isFastCorrectAnswer : undefined,
    })

    if (latencyMs != null) {
      this.voiceLatencySec = latencyMs / 1000
    }
  }

  onVoiceTranscript(transcript) {
    if (this.voiceAnswered || this.timeUpHandled) return

    const trimmed = (transcript ?? '').trim()
    if (!trimmed) return

    this.voiceSessionHasTranscript = true
    this.stopVoiceRecognition({ cancelPendingRetry: false })

    if (!this.firstSpeechRecorded) {
      this.speechTime = Date.now()
      this.firstSpeechRecorded = true
    }

    if (checkAnswer(trimmed, this.targetWord)) {
      this.handleVoiceSuccess(trimmed)
    } else {
      this.handleVoiceFail(trimmed)
    }
  }

  handleVoiceSuccess(transcript) {
    this.voiceAnswered = true
    this.isFastCorrectAnswer =
      this.problemStartTime != null &&
      Date.now() - this.problemStartTime <= FAST_ANSWER_MAX_MS
    this.clearEarlyHintRevealTimer()
    this.logVoiceResult(transcript, true)
    this.playCorrectAnswerSound()

    this.pauseTimerCountdown()
    this.removeCloudsImmediately()
    this.retractHintPanelsOnSuccess()

    this.stopMicActiveOnFirstFrame()

    if (!this.wordImageBase) {
      this.removeMicActiveSprite()
      this.showWordLetterBlocks()
      this.createWordAssembly()
      return
    }

    this.playMicLaserToWord(() => {
      this.shatterWordImage(() => {
        this.createWordAssembly()
      })
    })
  }

  stopMicActiveOnFirstFrame() {
    if (!this.micActiveSprite) return

    if (this.micActiveSprite.anims) {
      this.micActiveSprite.anims.stop()
    }

    if (
      this.anims.exists(MIC_ACTIVE_ANIM_KEY) &&
      this.anims.get(MIC_ACTIVE_ANIM_KEY).frames.length > 0
    ) {
      const firstFrame = this.anims.get(MIC_ACTIVE_ANIM_KEY).frames[0].frame
      this.micActiveSprite.setFrame(firstFrame)
    }
  }

  removeMicActiveSprite() {
    if (!this.micActiveSprite) return

    this.micActiveSprite.destroy()
    this.micActiveSprite = null
  }

  getMicLaserOrigin() {
    if (this.micActiveSprite) {
      const bounds = this.micActiveSprite.getBounds()
      return { x: bounds.centerX, y: bounds.centerY }
    }

    return { x: MIC_ACTIVE_X, y: MIC_ACTIVE_Y - 60 }
  }

  getLaserWordImageHitPoint(from) {
    const cx = WORD_IMAGE_X
    const cy = WORD_IMAGE_Y
    const fallback = { x: cx, y: cy }

    if (!this.wordImageBase) return fallback

    const halfW = this.wordImageBase.displayWidth / 2
    const halfH = this.wordImageBase.displayHeight / 2
    const left = cx - halfW
    const right = cx + halfW
    const top = cy - halfH
    const bottom = cy + halfH

    const dx = cx - from.x
    const dy = cy - from.y
    const dist = Math.hypot(dx, dy)
    if (dist < 1) return fallback

    const ux = dx / dist
    const uy = dy / dist
    const candidates = []

    if (Math.abs(ux) > 0.0001) {
      const tLeft = (left - from.x) / ux
      const yLeft = from.y + uy * tLeft
      if (tLeft > 0 && tLeft <= dist && yLeft >= top && yLeft <= bottom) {
        candidates.push(tLeft)
      }

      const tRight = (right - from.x) / ux
      const yRight = from.y + uy * tRight
      if (tRight > 0 && tRight <= dist && yRight >= top && yRight <= bottom) {
        candidates.push(tRight)
      }
    }

    if (Math.abs(uy) > 0.0001) {
      const tTop = (top - from.y) / uy
      const xTop = from.x + ux * tTop
      if (tTop > 0 && tTop <= dist && xTop >= left && xTop <= right) {
        candidates.push(tTop)
      }

      const tBottom = (bottom - from.y) / uy
      const xBottom = from.x + ux * tBottom
      if (
        tBottom > 0 &&
        tBottom <= dist &&
        xBottom >= left &&
        xBottom <= right
      ) {
        candidates.push(tBottom)
      }
    }

    if (candidates.length === 0) return fallback

    const t = Math.min(...candidates)
    return { x: from.x + ux * t, y: from.y + uy * t }
  }

  playLaserImpactEnergy(hitPoint, duration) {
    this.cleanupLaserImpactEnergy()

    const { x, y } = hitPoint
    this.laserImpactHitPoint = hitPoint
    this.laserImpactChargeState = { level: 0 }

    this.laserImpactHalo = this.add
      .circle(x, y, LASER_IMPACT_HALO_RADIUS, 0xcc66ff, 0.22)
      .setDepth(LASER_IMPACT_DEPTH)
      .setBlendMode(Phaser.BlendModes.ADD)

    this.laserImpactCore = this.add
      .circle(x, y, LASER_IMPACT_CORE_RADIUS, 0xffffff, 0.75)
      .setDepth(LASER_IMPACT_DEPTH + 1)
      .setBlendMode(Phaser.BlendModes.ADD)

    this.tweens.add({
      targets: this.laserImpactChargeState,
      level: 1,
      duration,
      ease: 'Sine.easeIn',
      onUpdate: () => {
        this.refreshLaserImpactChargeVisual()
      },
    })

    this.tweens.add({
      targets: this.laserImpactCore,
      alpha: 0.45,
      duration: LASER_IMPACT_CORE_PULSE_MS,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    })

    this.scheduleLaserImpactRipple()
  }

  scheduleLaserImpactRipple() {
    if (!this.laserImpactHitPoint) return

    const chargeLevel = this.laserImpactChargeState?.level ?? 0
    this.spawnLaserImpactRipple(chargeLevel)

    const nextDelay = Phaser.Math.Linear(
      LASER_IMPACT_RIPPLE_INTERVAL_START_MS,
      LASER_IMPACT_RIPPLE_INTERVAL_END_MS,
      chargeLevel,
    )

    this.laserImpactRippleTimer = this.time.delayedCall(nextDelay, () => {
      this.laserImpactRippleTimer = null
      this.scheduleLaserImpactRipple()
    })
  }

  refreshLaserImpactChargeVisual() {
    const level = this.laserImpactChargeState?.level ?? 0

    if (this.laserImpactHalo) {
      const haloScale = 0.55 + level * 1.55
      this.laserImpactHalo.setScale(haloScale)
      this.laserImpactHalo.setAlpha(0.18 + level * 0.62)
    }

    if (this.laserImpactCore) {
      const coreScale = 0.45 + level * 1.05
      this.laserImpactCore.setScale(coreScale)
    }
  }

  spawnLaserImpactRipple(chargeLevel) {
    if (!this.laserImpactHitPoint) return

    const { x, y } = this.laserImpactHitPoint
    const startRadius = 7 + chargeLevel * 12
    const strokeWidth = 2 + chargeLevel * 4.5
    const startAlpha = 0.35 + chargeLevel * 0.55

    const ring = this.add
      .circle(x, y, startRadius, 0xffffff, 0)
      .setDepth(LASER_IMPACT_DEPTH)
      .setStrokeStyle(strokeWidth, 0xcc66ff, startAlpha)
      .setBlendMode(Phaser.BlendModes.ADD)

    this.tweens.add({
      targets: ring,
      scaleX: 1.6 + chargeLevel * 3.8,
      scaleY: 1.6 + chargeLevel * 3.8,
      alpha: 0,
      duration: 260 + (1 - chargeLevel) * 220,
      ease: 'Cubic.out',
      onComplete: () => {
        ring.destroy()
      },
    })
  }

  cleanupLaserImpactEnergy() {
    if (this.laserImpactRippleTimer) {
      this.laserImpactRippleTimer.remove()
      this.laserImpactRippleTimer = null
    }

    if (this.laserImpactChargeState) {
      this.tweens.killTweensOf(this.laserImpactChargeState)
      this.laserImpactChargeState = null
    }

    if (this.laserImpactCore) {
      this.tweens.killTweensOf(this.laserImpactCore)
      this.laserImpactCore.destroy()
      this.laserImpactCore = null
    }

    if (this.laserImpactHalo) {
      this.tweens.killTweensOf(this.laserImpactHalo)
      this.laserImpactHalo.destroy()
      this.laserImpactHalo = null
    }

    this.laserImpactHitPoint = null
  }

  playMicLaserToWord(onComplete) {
    this.fireMicLaserToWord({
      duration: LASER_DURATION_MS,
      removeMicOnComplete: true,
      onComplete,
    })
  }

  playCorrectAnswerSound() {
    if (!this.cache.audio.exists(CORRECT_SFX_KEY)) {
      console.warn('[Correct] audio not loaded:', CORRECT_SFX_PATH)
      return
    }

    const correctSound = this.sound.add(CORRECT_SFX_KEY, {
      loop: false,
      volume: 1,
    })

    correctSound.once('complete', () => {
      correctSound.destroy()
    })

    if (!correctSound.play()) {
      correctSound.destroy()
    }
  }

  playIncorrectAnswerSound(onComplete) {
    if (!this.cache.audio.exists(INCORRECT_SFX_KEY)) {
      console.warn('[Incorrect] audio not loaded:', INCORRECT_SFX_PATH)
      onComplete?.()
      return
    }

    const incorrectSound = this.sound.add(INCORRECT_SFX_KEY, {
      loop: false,
      volume: 1,
    })

    incorrectSound.once('complete', () => {
      incorrectSound.destroy()
      onComplete?.()
    })

    if (!incorrectSound.play()) {
      incorrectSound.destroy()
      onComplete?.()
    }
  }

  fireMicLaserToWord({
    duration = LASER_DURATION_MS,
    removeMicOnComplete = false,
    playBeamSfx = true,
    playImpactEnergy = true,
    onComplete,
  } = {}) {
    if (this.micLaserGraphics) {
      onComplete?.()
      return
    }

    if (playBeamSfx && this.cache.audio.exists(BEAM_SFX_KEY)) {
      this.sound.play(BEAM_SFX_KEY)
    }

    const from = this.getMicLaserOrigin()
    const to = this.getLaserWordImageHitPoint(from)
    const laser = this.add.graphics().setDepth(LASER_DEPTH)
    this.micLaserGraphics = laser

    const pulseState = { alpha: 1, width: LASER_WIDTH_START }
    this.micLaserPulseState = pulseState

    const drawLaser = () => {
      const lineWidth = pulseState.width
      laser.clear()
      laser.lineStyle(lineWidth * 0.55, 0xffffff, pulseState.alpha * 0.45)
      laser.beginPath()
      laser.moveTo(from.x, from.y)
      laser.lineTo(to.x, to.y)
      laser.strokePath()
      laser.lineStyle(lineWidth, 0xcc66ff, pulseState.alpha)
      laser.beginPath()
      laser.moveTo(from.x, from.y)
      laser.lineTo(to.x, to.y)
      laser.strokePath()
      laser.lineStyle(lineWidth * 0.35, 0xffffff, pulseState.alpha * 0.85)
      laser.beginPath()
      laser.moveTo(from.x, from.y)
      laser.lineTo(to.x, to.y)
      laser.strokePath()
    }

    drawLaser()

    if (playImpactEnergy) {
      this.playLaserImpactEnergy(to, duration)
    }

    this.tweens.add({
      targets: pulseState,
      width: LASER_WIDTH_END,
      duration,
      ease: 'Sine.easeIn',
      onUpdate: drawLaser,
    })

    this.tweens.add({
      targets: pulseState,
      alpha: LASER_ALPHA_PULSE_MIN,
      duration: LASER_PULSE_DURATION_MS,
      yoyo: true,
      repeat: -1,
      onUpdate: drawLaser,
    })

    this.time.delayedCall(duration, () => {
      if (this.micLaserPulseState) {
        this.tweens.killTweensOf(this.micLaserPulseState)
        this.micLaserPulseState = null
      }
      laser.destroy()
      this.micLaserGraphics = null
      this.cleanupLaserImpactEnergy()
      if (removeMicOnComplete) {
        this.removeMicActiveSprite()
      }
      onComplete?.()
    })
  }

  shatterWordImage(onComplete) {
    if (!this.wordImageBase) {
      onComplete?.()
      return
    }

    this.wordImageBase.setVisible(false)
    if (this.wordImageShadow) {
      this.wordImageShadow.setVisible(false)
    }

    const totalDisplayW = this.wordImageBase.displayWidth
    const totalDisplayH = this.wordImageBase.displayHeight
    const tileDisplayW = totalDisplayW / SHARD_COLS
    const tileDisplayH = totalDisplayH / SHARD_ROWS
    const left = WORD_IMAGE_X - totalDisplayW / 2
    const top = WORD_IMAGE_Y - totalDisplayH / 2

    this.cleanupWordShards()
    this.spawnShatterDustFromGrid(left, top, tileDisplayW, tileDisplayH)

    this.playWordExplosionBurst()
    this.showWordLetterBlocks()

    this.time.delayedCall(SHATTER_DUST_SETTLE_MS, () => {
      onComplete?.()
    })
  }

  spawnShatterDustFromGrid(left, top, tileDisplayW, tileDisplayH) {
    if (!this.textures.exists(STAR_KEY)) return

    const centerX = WORD_IMAGE_X
    const centerY = WORD_IMAGE_Y

    for (let row = 0; row < SHARD_ROWS; row += 1) {
      for (let col = 0; col < SHARD_COLS; col += 1) {
        const cellX = left + col * tileDisplayW + tileDisplayW / 2
        const cellY = top + row * tileDisplayH + tileDisplayH / 2
        const particleCount = Phaser.Math.Between(
          SHATTER_DUST_PER_CELL_MIN,
          SHATTER_DUST_PER_CELL_MAX,
        )

        for (let i = 0; i < particleCount; i += 1) {
          const spawnX =
            cellX +
            Phaser.Math.FloatBetween(-tileDisplayW * 0.35, tileDisplayW * 0.35)
          const spawnY =
            cellY +
            Phaser.Math.FloatBetween(-tileDisplayH * 0.35, tileDisplayH * 0.35)

          this.spawnShatterDustParticle(spawnX, spawnY, centerX, centerY)
        }
      }
    }
  }

  spawnShatterDustParticle(spawnX, spawnY, centerX, centerY) {
    const scale = Phaser.Math.FloatBetween(
      SHATTER_DUST_SCALE_MIN,
      SHATTER_DUST_SCALE_MAX,
    )
    const fadeDuration = Phaser.Math.Between(
      SHATTER_DUST_FADE_MIN_MS,
      SHATTER_DUST_FADE_MAX_MS,
    )
    const startAlpha = Phaser.Math.FloatBetween(0.75, 1)
    const startAngle = Phaser.Math.Between(0, 360)
    const { vx, vy } = getShatterDustVelocity(spawnX, spawnY, centerX, centerY)
    const gravity = Phaser.Math.Between(
      SHATTER_DUST_GRAVITY_MIN,
      SHATTER_DUST_GRAVITY_MAX,
    )
    const spinSpeed = Phaser.Math.Between(
      SHATTER_DUST_SPIN_MIN,
      SHATTER_DUST_SPIN_MAX,
    )

    const particle = this.add
      .image(spawnX, spawnY, STAR_KEY)
      .setOrigin(0.5)
      .setScale(scale)
      .setAlpha(startAlpha)
      .setAngle(startAngle)
      .setTint(SHATTER_DUST_TINT)
      .setDepth(SHATTER_DUST_DEPTH)
      .setBlendMode(Phaser.BlendModes.ADD)

    this.shatterDustParticles.push(particle)

    const dustTween = this.tweens.addCounter({
      from: 0,
      to: fadeDuration,
      duration: fadeDuration,
      onUpdate: (tween) => {
        if (!particle.active) return

        const elapsedMs = tween.getValue()
        const t = elapsedMs / 1000
        const lifeRatio = elapsedMs / fadeDuration

        particle.x = spawnX + vx * t
        particle.y = spawnY + vy * t + 0.5 * gravity * t * t
        particle.angle = startAngle + spinSpeed * t
        particle.alpha = startAlpha * (1 - lifeRatio * lifeRatio)
        particle.setScale(scale * (1 - lifeRatio * 0.7))
      },
      onComplete: () => {
        particle.destroy()
        this.shatterDustParticles = this.shatterDustParticles.filter(
          (item) => item !== particle,
        )
      },
    })

    particle._dustTween = dustTween
  }

  playWordExplosionBurst() {
    if (this.cache.audio.exists(QUIZ_EXPLOSION_SFX_KEY)) {
      const explosionSound = this.sound.add(QUIZ_EXPLOSION_SFX_KEY, {
        loop: false,
        volume: 1,
      })

      explosionSound.once('complete', () => {
        explosionSound.destroy()
        this.playWordEntrySound({
          onComplete: () => this.onCorrectAnswerWordSoundComplete(),
        })
      })

      if (!explosionSound.play()) {
        explosionSound.destroy()
        this.playWordEntrySound({
          onComplete: () => this.onCorrectAnswerWordSoundComplete(),
        })
      }
    } else {
      this.playWordEntrySound({
        onComplete: () => this.onCorrectAnswerWordSoundComplete(),
      })
    }

    const flash = this.add
      .circle(WORD_IMAGE_X, WORD_IMAGE_Y, 28, 0xcc66ff, 0.9)
      .setDepth(SHATTER_DUST_DEPTH + 2)
      .setStrokeStyle(4, 0xffffff, 0.75)

    this.tweens.add({
      targets: flash,
      scaleX: 7,
      scaleY: 7,
      alpha: 0,
      duration: SHARD_EXPLOSION_FLASH_DURATION,
      ease: 'Cubic.out',
      onComplete: () => {
        flash.destroy()
      },
    })

    const ring = this.add
      .circle(WORD_IMAGE_X, WORD_IMAGE_Y, 40, 0xffffff, 0)
      .setDepth(SHATTER_DUST_DEPTH + 1)
      .setStrokeStyle(6, 0xffffff, 0.55)

    this.tweens.add({
      targets: ring,
      scaleX: 5,
      scaleY: 5,
      alpha: 0,
      duration: SHARD_EXPLOSION_FLASH_DURATION * 1.2,
      ease: 'Quad.out',
      onComplete: () => {
        ring.destroy()
      },
    })

    this.cameras.main.shake(
      SHARD_EXPLOSION_SHAKE_DURATION,
      SHARD_EXPLOSION_SHAKE_INTENSITY,
    )
  }

  playWordEntrySound({ onComplete } = {}) {
    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      onComplete?.()
    }

    const soundPath = this.currentWordEntry?.sound
    if (!soundPath) {
      finish()
      return
    }

    const wordSoundKey = getWordSoundKey(this.qid)
    if (!this.cache.audio.exists(wordSoundKey)) {
      console.warn('[WordSound] audio not loaded:', soundPath)
      finish()
      return
    }

    const wordSound = this.sound.add(wordSoundKey, { loop: false, volume: 1 })
    let soundDestroyed = false

    const cleanupSound = () => {
      if (soundDestroyed) return
      soundDestroyed = true
      wordSound.destroy()
    }

    wordSound.once('complete', () => {
      cleanupSound()
      finish()
    })

    if (!wordSound.play()) {
      cleanupSound()
      finish()
      return
    }

    const scheduleDurationFallback = () => {
      const durationSec = wordSound.duration
      if (durationSec > 0) {
        this.time.delayedCall(Math.ceil(durationSec * 1000) + 200, () => {
          cleanupSound()
          finish()
        })
        return
      }

      wordSound.once('decoded', () => {
        const decodedDuration = wordSound.duration
        if (decodedDuration > 0) {
          this.time.delayedCall(Math.ceil(decodedDuration * 1000) + 200, () => {
            cleanupSound()
            finish()
          })
        }
      })
    }

    scheduleDurationFallback()

    // complete 이벤트 미발생 브라우저 대비 최종 fallback
    this.time.delayedCall(8000, () => {
      cleanupSound()
      finish()
    })
  }

  createCoinAnimation() {
    if (!this.textures.exists(COIN_KEY)) return false

    if (this.anims.exists(COIN_ANIM_KEY)) {
      return this.anims.get(COIN_ANIM_KEY).frames.length > 0
    }

    const frames = getCoinFrameList(this.textures, COIN_KEY)
    if (frames.length === 0) {
      console.warn('[coin] atlas frames not found')
      return false
    }

    this.anims.create({
      key: COIN_ANIM_KEY,
      frames,
      frameRate: COIN_FRAME_RATE,
      repeat: -1,
    })

    return true
  }

  cleanupRewardCoin() {
    if (this.rewardCoinSpawnTimers.length > 0) {
      this.rewardCoinSpawnTimers.forEach((timer) => timer.remove())
      this.rewardCoinSpawnTimers = []
    }

    if (this.rewardCoinSprites.length > 0) {
      this.rewardCoinSprites.forEach((sprite) => {
        this.tweens.killTweensOf(sprite)
        if (sprite.anims) {
          sprite.anims.stop()
        }
        sprite.destroy()
      })
      this.rewardCoinSprites = []
    }
  }

  wereHintPanelsShownBeforeSuccess() {
    return this.hintPanelsAnimated
  }

  onCorrectAnswerWordSoundComplete() {
    if (!this.playRewardCoinSequence()) {
      this.showRoundNavButtons()
    }
  }

  playRewardCoinSequence() {
    if (!this.voiceAnswered) return false
    if (!this.textures.exists(COIN_KEY)) return false
    if (!this.createCoinAnimation()) return false

    const spawnCount = this.isFastCorrectAnswer
      ? FAST_ANSWER_COIN_COUNT
      : this.wereHintPanelsShownBeforeSuccess()
        ? 1
        : 2
    this.pendingRewardCoins = spawnCount

    for (let index = 0; index < spawnCount; index += 1) {
      const spawnTimer = this.time.delayedCall(
        index * COIN_SECOND_SPAWN_DELAY_MS,
        () => {
          this.rewardCoinSpawnTimers = this.rewardCoinSpawnTimers.filter(
            (timer) => timer !== spawnTimer,
          )
          this.startSingleRewardCoin()
        },
      )
      this.rewardCoinSpawnTimers.push(spawnTimer)
    }

    return true
  }

  startSingleRewardCoin() {
    if (!this.voiceAnswered) return
    if (!this.textures.exists(COIN_KEY)) return
    if (!this.anims.exists(COIN_ANIM_KEY)) return

    const firstFrame = this.anims.get(COIN_ANIM_KEY).frames[0].frame
    const coinSprite = this.add
      .sprite(COIN_SPAWN_X, COIN_SPAWN_Y, COIN_KEY, firstFrame)
      .setOrigin(0.5)
      .setDepth(COIN_DEPTH)
      .setScale(COIN_SCALE_START)

    this.rewardCoinSprites.push(coinSprite)
    coinSprite.play(COIN_ANIM_KEY)
    this.playCoinVisibleSfx()

    this.tweens.chain({
      targets: coinSprite,
      tweens: [
        {
          y: COIN_SPAWN_Y - COIN_BOUNCE_UP_OFFSET,
          duration: COIN_BOUNCE_UP_DURATION,
          ease: 'Cubic.out',
        },
        {
          y: COIN_SPAWN_Y + COIN_BOUNCE_DOWN_OFFSET,
          duration: COIN_BOUNCE_DOWN_DURATION,
          ease: 'Back.out',
        },
      ],
      onComplete: () => {
        this.time.delayedCall(COIN_FLIGHT_DELAY_MS, () => {
          this.flyRewardCoinToScore(coinSprite)
        })
      },
    })
  }

  flyRewardCoinToScore(sprite) {
    if (!sprite?.active) return

    const startX = sprite.x
    const startY = sprite.y
    const endX = SCORE_UI_X
    const endY = SCORE_UI_Y
    const peakX = startX + (endX - startX) * 0.72
    const peakY = endY - COIN_SCORE_OVERSHOOT_Y

    this.tweens.addCounter({
      from: 0,
      to: 1,
      duration: COIN_FLIGHT_DURATION,
      ease: 'Linear',
      onUpdate: (tween) => {
        if (!sprite.active) return

        const t = Phaser.Math.Easing.Quartic.In(tween.progress)
        const inv = 1 - t

        sprite.x = inv * inv * startX + 2 * inv * t * peakX + t * t * endX
        sprite.y = inv * inv * startY + 2 * inv * t * peakY + t * t * endY
        sprite.setScale(
          Phaser.Math.Linear(COIN_SCALE_START, COIN_SCALE_END, t),
        )
      },
      onComplete: () => {
        if (sprite.active) {
          sprite.destroy()
        }
        this.rewardCoinSprites = this.rewardCoinSprites.filter(
          (item) => item !== sprite,
        )
        this.playCoinCollectSfx()
        this.addScore(COIN_SCORE_REWARD)
        this.onRewardCoinArrived()
      },
    })
  }

  onRewardCoinArrived() {
    this.pendingRewardCoins = Math.max(0, this.pendingRewardCoins - 1)

    if (this.pendingRewardCoins === 0 && this.voiceAnswered) {
      this.showRoundNavButtons()
    }
  }

  playCoinVisibleSfx() {
    if (this.cache.audio.exists(COIN_VISIBLE_SFX_KEY)) {
      this.sound.play(COIN_VISIBLE_SFX_KEY)
    }
  }

  playCoinCollectSfx() {
    if (this.cache.audio.exists(COIN_COLLECT_SFX_KEY)) {
      this.sound.play(COIN_COLLECT_SFX_KEY)
    }
  }

  addScore(amount) {
    if (!this.scoreText) return

    this.score += amount
    this.scoreText.setText(String(this.score))
  }

  cleanupRoundNavButtons() {
    if (!this.roundNavButtons.length) return

    this.roundNavButtons.forEach((button) => {
      this.tweens.killTweensOf(button)
      button.destroy()
    })
    this.roundNavButtons = []
    this.roundNavVisible = false
  }

  showRoundNavButtons() {
    if (this.roundNavVisible) return

    const hasNext = this.hasNextQuestion()

    if (!this.textures.exists(RE_BTN_KEY)) {
      console.warn('[NavButtons] reBtn texture not loaded')
      return
    }

    if (hasNext && !this.textures.exists(NE_BTN_KEY)) {
      console.warn('[NavButtons] neBtn texture not loaded')
      return
    }

    this.cleanupRoundNavButtons()
    this.roundNavVisible = true

    const buttonConfigs = [{ key: RE_BTN_KEY, x: RE_BTN_X, y: RE_BTN_Y }]

    if (hasNext) {
      buttonConfigs.push({ key: NE_BTN_KEY, x: NE_BTN_X, y: NE_BTN_Y })
    }

    buttonConfigs.forEach((config, index) => {
      const button = this.add
        .image(config.x, config.y - NAV_BTN_BOUNCE_OFFSET_Y, config.key)
        .setOrigin(0.5)
        .setDepth(NAV_BTN_DEPTH)
        .setScale(NAV_BTN_SCALE_START)
        .setAlpha(0)

      this.roundNavButtons.push(button)

      this.tweens.add({
        targets: button,
        y: config.y,
        scale: 1,
        alpha: 1,
        duration: NAV_BTN_POP_DURATION,
        delay: index * NAV_BTN_STAGGER_MS,
        ease: 'Back.out',
        onComplete: () => {
          this.bindRoundNavButtonInput(button, config.key)
        },
      })
    })
  }

  bindRoundNavButtonInput(button, textureKey) {
    if (!button?.active) return

    button.setInteractive({ useHandCursor: true })

    if (textureKey === RE_BTN_KEY) {
      button.on('pointerup', () => {
        this.handleRetryCurrentQuestion()
      })
      return
    }

    if (textureKey === NE_BTN_KEY) {
      button.on('pointerup', () => {
        this.handleNextQuestion()
      })
    }
  }

  hasNextQuestion() {
    if (!this.cache.json.exists(WORDS_KEY)) return false

    const { data } = this.cache.json.get(WORDS_KEY)
    return Array.isArray(data) && this.qid + 1 < data.length
  }

  handleNextQuestion() {
    if (!this.hasNextQuestion()) return

    this.scene.restart({
      qid: this.qid + 1,
      score: this.score,
      skipStartOverlay: true,
    })
  }

  handleRetryCurrentQuestion() {
    this.scene.restart({
      qid: this.qid,
      score: this.score,
      skipStartOverlay: true,
    })
  }

  cleanupWordShards() {
    if (!this.shatterDustParticles.length) return

    this.shatterDustParticles.forEach((particle) => {
      if (particle._dustTween) {
        particle._dustTween.stop()
      }
      particle.destroy()
    })
    this.shatterDustParticles = []
  }

  handleVoiceFail(transcript) {
    this.logVoiceResult(transcript, false)

    if (this.voiceAnswered || this.timeUpHandled) {
      return
    }

    this.hasWrongAnswer = true

    this.playIncorrectAnswerSound(() => {
      this.revealHintsIfNeeded()
      this.queueVoiceRestart('wrong-answer')
    })
  }

  createDebugAnswerButtons() {
    if (!SHOW_DEBUG_ANSWER_BUTTONS) return

    const { width, height } = this.scale
    const baseY = height - DEBUG_BTN_MARGIN
    const correctX = width - DEBUG_BTN_MARGIN
    const wrongX =
      correctX - DEBUG_BTN_WIDTH - DEBUG_BTN_GAP - DEBUG_BTN_WIDTH

    this.debugCorrectButton = this.createDebugAnswerButton(
      correctX,
      baseY,
      '정답',
      0x2d6a4f,
      () => this.triggerDebugCorrectAnswer(),
    )
    this.debugWrongButton = this.createDebugAnswerButton(
      wrongX,
      baseY,
      '오답',
      0x9b2226,
      () => this.triggerDebugWrongAnswer(),
    )
  }

  createDebugAnswerButton(x, y, label, color, onClick) {
    const container = this.add.container(x, y).setDepth(DEBUG_UI_DEPTH)

    const bg = this.add
      .rectangle(
        -DEBUG_BTN_WIDTH / 2,
        -DEBUG_BTN_HEIGHT / 2,
        DEBUG_BTN_WIDTH,
        DEBUG_BTN_HEIGHT,
        color,
        0.95,
      )
      .setOrigin(0.5)
      .setStrokeStyle(2, 0xffffff, 0.35)

    const text = this.add
      .text(-DEBUG_BTN_WIDTH / 2, -DEBUG_BTN_HEIGHT / 2, label, {
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        fontStyle: 'bold',
        color: '#ffffff',
      })
      .setOrigin(0.5)

    bg.setInteractive({ useHandCursor: true })
    bg.on('pointerdown', onClick)

    container.add([bg, text])
    container.setSize(DEBUG_BTN_WIDTH, DEBUG_BTN_HEIGHT)

    return container
  }

  triggerDebugCorrectAnswer() {
    if (this.voiceAnswered) return

    this.stopVoiceRecognition()

    if (!this.firstSpeechRecorded) {
      this.speechTime = Date.now()
      this.firstSpeechRecorded = true
    }

    const transcript = this.targetWord
      ? `One-Clap! ${this.targetWord}!`
      : 'One-Clap! starfish!'

    this.handleVoiceSuccess(transcript)
  }

  triggerDebugWrongAnswer() {
    if (this.voiceAnswered) return

    this.stopVoiceRecognition()
    this.handleVoiceFail('wrong-answer-debug')
  }

  buildWordBlockContainer(letter) {
    const container = this.add.container(0, 0)

    const blockImage = this.add
      .image(0, 0, BLOCK_KEY)
      .setOrigin(0.5)

    const letterText = this.add
      .text(0, 0, letter, {
        fontFamily: CLOCK_TIMER_FONT,
        fontSize: WORD_BLOCK_LETTER_FONT_SIZE,
        fontStyle: 'bold',
        color: WORD_BLOCK_LETTER_COLOR,
      })
      .setOrigin(0.5)

    container.add([blockImage, letterText])
    return container
  }

  showWordLetterBlocks({
    revealSuccessImage = true,
    withStarSweep = true,
    playWordSoundAfterReveal = false,
    onRoundComplete = null,
  } = {}) {
    if (!this.textures.exists(BLOCK_KEY)) {
      console.warn('[WordBlock] block texture not loaded:', BLOCK_PATH)
      return
    }

    const word = this.targetWord?.trim() ?? ''
    if (!word) return

    this.cleanupWordBlocks()

    const letters = [...word]
    const { width: blockWidth } = getBlockFrameSize(this.textures, BLOCK_KEY)
    const { width: screenWidth } = this.scale
    const rowWidth =
      letters.length * blockWidth + Math.max(letters.length - 1, 0) * WORD_BLOCK_GAP
    const startX = (screenWidth - rowWidth) / 2 + blockWidth / 2

    const blockPositions = letters.map(
      (_, index) => startX + index * (blockWidth + WORD_BLOCK_GAP),
    )

    letters.forEach((letter, index) => {
      const container = this.buildWordBlockContainer(letter)
      const x = blockPositions[index]

      container
        .setPosition(x, WORD_BLOCK_Y + WORD_BLOCK_BOUNCE_OFFSET_Y)
        .setDepth(WORD_BLOCK_DEPTH)
        .setScale(WORD_BLOCK_SCALE_START)
        .setAlpha(0)

      this.animateWordBlockPop(container, index * WORD_BLOCK_STAGGER_MS)
      this.wordBlockContainers.push(container)
    })

    let starSweepDuration = 0

    if (withStarSweep && blockPositions.length > 0) {
      const sweepDuration = Math.max(
        WORD_BLOCK_POP_DURATION,
        (blockPositions.length - 1) * WORD_BLOCK_STAGGER_MS +
          WORD_BLOCK_POP_DURATION * 0.45,
      )
      starSweepDuration = Math.round(sweepDuration * BIG_STAR_SWEEP_DURATION_SCALE)
      this.playBigStarSweep(
        blockPositions[0],
        blockPositions[blockPositions.length - 1],
        WORD_BLOCK_Y,
        starSweepDuration,
      )
    }

    if (revealSuccessImage) {
      this.scheduleSuccessImageReveal(starSweepDuration)
    }

    if (playWordSoundAfterReveal && letters.length > 0) {
      const blocksRevealDuration =
        (letters.length - 1) * WORD_BLOCK_STAGGER_MS + WORD_BLOCK_POP_DURATION
      const completeRound =
        onRoundComplete ?? (() => this.showRoundNavButtons())

      this.time.delayedCall(blocksRevealDuration, () => {
        this.playWordEntrySound({ onComplete: completeRound })
      })
    } else if (onRoundComplete) {
      const blocksRevealDuration =
        (letters.length - 1) * WORD_BLOCK_STAGGER_MS + WORD_BLOCK_POP_DURATION
      this.time.delayedCall(blocksRevealDuration, onRoundComplete)
    }
  }

  scheduleSuccessImageReveal(starSweepDuration = 0) {
    this.cleanupSuccessImageRevealTimer()

    const revealDelay = starSweepDuration + SUCCESS_IMAGE_DELAY_MS
    this.successImageRevealTimer = this.time.delayedCall(revealDelay, () => {
      this.successImageRevealTimer = null
      this.showSuccessImage()
    })
  }

  showSuccessImage() {
    if (!this.textures.exists(SUCCESS_IMAGE_KEY)) {
      console.warn('[SuccessImage] texture not loaded:', SUCCESS_IMAGE_PATH)
      return
    }

    if (this.successImageSprite) {
      this.tweens.killTweensOf(this.successImageSprite)
      this.successImageSprite.destroy()
      this.successImageSprite = null
    }

    this.successImageSprite = this.add
      .image(
        SUCCESS_IMAGE_X,
        SUCCESS_IMAGE_Y - SUCCESS_IMAGE_BOUNCE_OFFSET_Y,
        SUCCESS_IMAGE_KEY,
      )
      .setOrigin(0.5)
      .setDepth(SUCCESS_IMAGE_DEPTH)
      .setScale(SUCCESS_IMAGE_SCALE_START)
      .setAlpha(0)

    this.tweens.add({
      targets: this.successImageSprite,
      y: SUCCESS_IMAGE_Y,
      scale: 1,
      alpha: 1,
      duration: SUCCESS_IMAGE_POP_DURATION,
      ease: 'Back.out',
    })
  }

  cleanupSuccessImageRevealTimer() {
    if (!this.successImageRevealTimer) return

    this.successImageRevealTimer.remove()
    this.successImageRevealTimer = null
  }

  cleanupSuccessImage() {
    this.cleanupSuccessImageRevealTimer()

    if (!this.successImageSprite) return

    this.tweens.killTweensOf(this.successImageSprite)
    this.successImageSprite.destroy()
    this.successImageSprite = null
  }

  playBigStarSweep(fromX, toX, y, duration) {
    if (!this.textures.exists(BIG_STAR_KEY)) {
      console.warn('[BigStar] texture not loaded:', BIG_STAR_PATH)
      return
    }

    this.cleanupBigStarDriver()

    const moveDir = toX >= fromX ? 1 : -1

    this.bigStarSprite = this.add
      .image(fromX, y, BIG_STAR_KEY)
      .setOrigin(0.5)
      .setScale(BIG_STAR_SCALE)
      .setDepth(BIG_STAR_DEPTH)
      .setAlpha(BIG_STAR_ALPHA)

    this.emitBigStarTrailBurst(fromX, y, moveDir)

    this.bigStarParticleTimer = this.time.addEvent({
      delay: BIG_STAR_PARTICLE_INTERVAL_MS,
      loop: true,
      callback: () => {
        if (!this.bigStarSprite?.active) return
        this.emitBigStarTrailBurst(
          this.bigStarSprite.x,
          this.bigStarSprite.y,
          moveDir,
        )
      },
    })

    this.tweens.add({
      targets: this.bigStarSprite,
      x: toX,
      duration,
      ease: 'Sine.easeInOut',
      onComplete: () => {
        this.cleanupBigStarDriver()
      },
    })
  }

  emitBigStarTrailBurst(centerX, centerY, moveDir) {
    const burstCount = Phaser.Math.Between(
      BIG_STAR_PARTICLE_BURST_MIN,
      BIG_STAR_PARTICLE_BURST_MAX,
    )

    for (let i = 0; i < burstCount; i += 1) {
      this.spawnBigStarTrailParticle(centerX, centerY, moveDir)
    }
  }

  pickBigStarParticleScale() {
    const roll = Math.random()

    if (roll < 0.42) {
      return Phaser.Math.FloatBetween(
        BIG_STAR_PARTICLE_DUST_SCALE_MIN,
        BIG_STAR_PARTICLE_DUST_SCALE_MAX,
      )
    }

    if (roll < 0.82) {
      return Phaser.Math.FloatBetween(
        BIG_STAR_PARTICLE_MID_SCALE_MIN,
        BIG_STAR_PARTICLE_MID_SCALE_MAX,
      )
    }

    return Phaser.Math.FloatBetween(
      BIG_STAR_PARTICLE_LARGE_SCALE_MIN,
      BIG_STAR_PARTICLE_LARGE_SCALE_MAX,
    )
  }

  spawnBigStarTrailParticle(centerX, centerY, moveDir) {
    if (!this.textures.exists(STAR_KEY)) return

    const trailDir = -moveDir
    const behindOffset =
      trailDir *
      Phaser.Math.Between(
        BIG_STAR_PARTICLE_BEHIND_OFFSET_MIN,
        BIG_STAR_PARTICLE_BEHIND_OFFSET_MAX,
      )
    const spawnX =
      centerX +
      behindOffset +
      Phaser.Math.FloatBetween(-BIG_STAR_PARTICLE_SPAWN_RADIUS, BIG_STAR_PARTICLE_SPAWN_RADIUS)
    const spawnY =
      centerY +
      Phaser.Math.FloatBetween(-BIG_STAR_PARTICLE_SPAWN_RADIUS, BIG_STAR_PARTICLE_SPAWN_RADIUS)

    const scale = this.pickBigStarParticleScale()
    const fadeDuration = Phaser.Math.Between(
      BIG_STAR_PARTICLE_FADE_MIN_MS,
      BIG_STAR_PARTICLE_FADE_MAX_MS,
    )
    const startAlpha = Phaser.Math.FloatBetween(0.8, 1)
    const startAngle = Phaser.Math.Between(0, 360)
    const vx =
      trailDir *
      Phaser.Math.Between(
        BIG_STAR_PARTICLE_HORIZ_SPEED_MIN,
        BIG_STAR_PARTICLE_HORIZ_SPEED_MAX,
      )
    const vy = Phaser.Math.Between(
      BIG_STAR_PARTICLE_INITIAL_VY_MIN,
      BIG_STAR_PARTICLE_INITIAL_VY_MAX,
    )
    const gravity = Phaser.Math.Between(
      BIG_STAR_PARTICLE_GRAVITY_MIN,
      BIG_STAR_PARTICLE_GRAVITY_MAX,
    )
    const spinSpeed = Phaser.Math.Between(
      BIG_STAR_PARTICLE_SPIN_MIN,
      BIG_STAR_PARTICLE_SPIN_MAX,
    )

    const particle = this.add
      .image(spawnX, spawnY, STAR_KEY)
      .setOrigin(0.5)
      .setScale(scale)
      .setAlpha(startAlpha)
      .setAngle(startAngle)
      .setTint(BIG_STAR_PARTICLE_TINT)
      .setDepth(BIG_STAR_DEPTH + 1)

    this.bigStarTrailParticles.push(particle)

    const dustTween = this.tweens.addCounter({
      from: 0,
      to: fadeDuration,
      duration: fadeDuration,
      onUpdate: (tween) => {
        if (!particle.active) return

        const elapsedMs = tween.getValue()
        const t = elapsedMs / 1000
        const lifeRatio = elapsedMs / fadeDuration

        particle.x = spawnX + vx * t
        particle.y = spawnY + vy * t + 0.5 * gravity * t * t
        particle.angle = startAngle + spinSpeed * t
        particle.alpha = startAlpha * (1 - lifeRatio * lifeRatio)
        particle.setScale(scale * (1 - lifeRatio * 0.65))
      },
      onComplete: () => {
        particle.destroy()
        this.bigStarTrailParticles = this.bigStarTrailParticles.filter(
          (item) => item !== particle,
        )
      },
    })

    particle._goldDustTween = dustTween
  }

  cleanupBigStarDriver() {
    if (this.bigStarParticleTimer) {
      this.bigStarParticleTimer.remove()
      this.bigStarParticleTimer = null
    }

    if (this.bigStarSprite) {
      this.tweens.killTweensOf(this.bigStarSprite)
      this.bigStarSprite.destroy()
      this.bigStarSprite = null
    }
  }

  cleanupBigStarTrailParticles() {
    if (!this.bigStarTrailParticles.length) return

    this.bigStarTrailParticles.forEach((particle) => {
      if (particle._goldDustTween) {
        particle._goldDustTween.stop()
      }
      particle.destroy()
    })
    this.bigStarTrailParticles = []
  }

  cleanupBigStarSweep() {
    this.cleanupBigStarDriver()
    this.cleanupBigStarTrailParticles()
  }

  animateWordBlockPop(container, delay = 0) {
    this.tweens.add({
      targets: container,
      scale: 1,
      alpha: 1,
      y: WORD_BLOCK_Y,
      duration: WORD_BLOCK_POP_DURATION,
      delay,
      ease: 'Back.out',
    })
  }

  cleanupWordBlocks() {
    this.cleanupBigStarSweep()
    this.cleanupSuccessImage()

    if (!this.wordBlockContainers?.length) return

    this.wordBlockContainers.forEach((container) => {
      this.tweens.killTweensOf(container)
      container.destroy(true)
    })
    this.wordBlockContainers = []
  }

  createWordAssembly() {
    this.cleanupWordShards()
    console.log('[WordAssembly] start — next sequence placeholder')
  }

  shutdown() {
    if (this.micLaserGraphics) {
      if (this.micLaserPulseState) {
        this.tweens.killTweensOf(this.micLaserPulseState)
        this.micLaserPulseState = null
      }
      this.micLaserGraphics.destroy()
      this.micLaserGraphics = null
    }
    this.cleanupLaserImpactEnergy()
    this.cleanupWordShards()
    this.cleanupWordBlocks()
    if (this.startOverlayContainer) {
      this.startOverlayContainer.destroy(true)
      this.startOverlayContainer = null
    }
    this.clearEarlyHintRevealTimer()
    this.stopVoiceRecognition()
    this.stopTimerCountdown()
    this.cleanupRewardCoin()
    this.cleanupRoundNavButtons()
  }

  createMicActiveAnimation() {
    if (!this.textures.exists(MIC_ACTIVE_KEY)) return false

    if (this.anims.exists(MIC_ACTIVE_ANIM_KEY)) {
      return this.anims.get(MIC_ACTIVE_ANIM_KEY).frames.length > 0
    }

    const frames = getMicActiveFrameList(this.textures, MIC_ACTIVE_KEY)

    if (frames.length === 0) {
      console.warn('[micActive] atlas frames not found')
      return false
    }

    this.anims.create({
      key: MIC_ACTIVE_ANIM_KEY,
      frames,
      frameRate: MIC_ACTIVE_FRAME_RATE,
      repeat: -1,
    })

    return true
  }

  showMicActiveAnimation() {
    if (!this.textures.exists(MIC_ACTIVE_KEY)) return
    if (!this.createMicActiveAnimation()) return

    if (this.micActiveSprite) {
      this.micActiveSprite.destroy()
    }

    const firstFrame = this.anims.get(MIC_ACTIVE_ANIM_KEY).frames[0].frame

    this.micActiveSprite = this.add
      .sprite(MIC_ACTIVE_X, MIC_ACTIVE_Y, MIC_ACTIVE_KEY, firstFrame)
      .setOrigin(0.5, 1)
      .setScale(MIC_ACTIVE_SCALE)
      .setDepth(MIC_ACTIVE_DEPTH)

    this.micActiveSprite.play(MIC_ACTIVE_ANIM_KEY)
    this.startTimerCountdown()
    this.startVoiceRecognition()
  }

  startTimerCountdown() {
    this.stopTimerCountdown()
    this.timerPaused = false
    this.problemStartTime = Date.now()
    this.isFastCorrectAnswer = false
    this.earlyHintTimeReached = false
    this.scheduleEarlyHintReveal()

    if (!this.clockTimerText) return

    this.remainingTime = TIME_LIMIT
    this.clockTimerText.setText(formatTime(this.remainingTime))

    this.timerCountdownEvent = this.time.addEvent({
      delay: 1000,
      loop: true,
      callback: () => {
        if (this.timerPaused) return

        this.remainingTime -= 1
        this.clockTimerText.setText(formatTime(this.remainingTime))

        if (this.remainingTime === TIMER_CLOUD_RETURN_AT) {
          this.revealHintsIfNeeded()
        }

        if (this.remainingTime <= 0) {
          this.remainingTime = 0
          this.clockTimerText.setText(formatTime(0))
          this.stopTimerCountdown()
          this.handleTimeUp()
        }
      },
    })
  }

  handleTimeUp() {
    if (this.timeUpHandled || this.voiceAnswered) return
    this.timeUpHandled = true

    this.clearEarlyHintRevealTimer()
    this.stopTimerCountdown()
    this.stopVoiceRecognition()
    this.stopMicActiveOnFirstFrame()
    this.removeMicActiveSprite()
    this.removeCloudsImmediately()
    this.removeWordImages()
    this.retractHintPanelsWithCallback(() => {
      this.showWordLetterBlocks({
        revealSuccessImage: false,
        withStarSweep: false,
        playWordSoundAfterReveal: true,
        onRoundComplete: () => this.showRoundNavButtons(),
      })
    })
  }

  removeWordImages() {
    if (this.wordImageBase) {
      this.tweens.killTweensOf(this.wordImageBase)
      this.wordImageBase.destroy()
      this.wordImageBase = null
    }

    if (this.wordImageShadow) {
      this.tweens.killTweensOf(this.wordImageShadow)
      this.wordImageShadow.destroy()
      this.wordImageShadow = null
    }
  }

  pauseTimerCountdown() {
    this.timerPaused = true
    this.stopTimerCountdown()
  }

  removeCloudsImmediately() {
    this.cloudReturnTriggered = true

    if (this.cloudImage1) {
      this.tweens.killTweensOf(this.cloudImage1)
      this.cloudImage1.destroy()
      this.cloudImage1 = null
    }

    if (this.cloudImage2) {
      this.tweens.killTweensOf(this.cloudImage2)
      this.cloudImage2.destroy()
      this.cloudImage2 = null
    }
  }

  retractHintPanelsOnSuccess() {
    this.retractHintPanelsWithCallback()
  }

  retractHintPanelsWithCallback(onAllComplete) {
    let panelCount = 0
    let panelDone = 0

    const onPanelRetractComplete = () => {
      panelDone += 1
      if (panelDone >= panelCount) {
        onAllComplete?.()
      }
    }

    if (this.hintPanelContainer1) {
      panelCount += 1
      this.retractHintPanelIfNeeded(this.hintPanelContainer1, onPanelRetractComplete)
    }

    if (this.hintPanelContainer2) {
      panelCount += 1
      this.retractHintPanelIfNeeded(this.hintPanelContainer2, onPanelRetractComplete)
    }

    if (panelCount === 0) {
      onAllComplete?.()
    }
  }

  retractHintPanelIfNeeded(container, onComplete) {
    if (!container) {
      onComplete?.()
      return
    }

    this.tweens.killTweensOf(container)

    const isOnScreen = container.visible && container.y > HINT_PANEL_OFFSCREEN_Y + 24
    if (!isOnScreen) {
      container.setVisible(false)
      onComplete?.()
      return
    }

    const riseY = container.y - HINT_PANEL_OVERSHOOT_OFFSET

    this.tweens.chain({
      targets: container,
      tweens: [
        {
          y: riseY,
          duration: HINT_PANEL_BOUNCE_DURATION,
          ease: 'Cubic.out',
        },
        {
          y: HINT_PANEL_OFFSCREEN_Y,
          duration: HINT_PANEL_DROP_DURATION,
          ease: 'Quad.in',
        },
      ],
      onComplete: () => {
        container.setVisible(false)
        onComplete?.()
      },
    })
  }

  resumeTimerCountdown() {
    if (!this.clockTimerText || this.remainingTime <= 0) return

    this.timerPaused = false
    this.stopTimerCountdown()
    this.clockTimerText.setText(formatTime(this.remainingTime))

    this.timerCountdownEvent = this.time.addEvent({
      delay: 1000,
      loop: true,
      callback: () => {
        if (this.timerPaused) return

        this.remainingTime -= 1
        this.clockTimerText.setText(formatTime(this.remainingTime))

        if (this.remainingTime <= 0) {
          this.remainingTime = 0
          this.clockTimerText.setText(formatTime(0))
          this.stopTimerCountdown()
          this.handleTimeUp()
        }
      },
    })
  }

  stopTimerCountdown() {
    if (this.timerCountdownEvent) {
      this.timerCountdownEvent.remove()
      this.timerCountdownEvent = null
    }
  }

  scheduleEarlyHintReveal() {
    this.clearEarlyHintRevealTimer()

    this.earlyHintRevealTimer = this.time.delayedCall(
      HINT_EARLY_REVEAL_MS,
      () => {
        this.earlyHintRevealTimer = null
        this.earlyHintTimeReached = true
        this.revealHintsIfNeeded()
      },
    )
  }

  clearEarlyHintRevealTimer() {
    if (this.earlyHintRevealTimer) {
      this.earlyHintRevealTimer.remove()
      this.earlyHintRevealTimer = null
    }
  }

  revealHintsIfNeeded() {
    if (this.cloudReturnTriggered || this.voiceAnswered || this.timeUpHandled) {
      return
    }

    if (
      this.remainingTime > TIMER_CLOUD_RETURN_AT &&
      !this.hasWrongAnswer &&
      !this.earlyHintTimeReached
    ) {
      return
    }

    this.triggerCloudReturnAtTimer()
  }

  triggerCloudReturnAtTimer() {
    this.cloudReturnTriggered = true
    this.pauseTimerCountdown()
    this.restoreCloudImages()
  }

  restoreCloudImages() {
    if (!this.cloudImage1 || !this.cloudImage2) return

    this.cloudImage1
      .setPosition(CLOUD_1_END_X, CLOUD_1_Y)
      .setAlpha(0)
      .setVisible(true)
      .setDepth(CLOUD_DEPTH)

    this.cloudImage2
      .setPosition(CLOUD_2_END_X, CLOUD_2_Y)
      .setAlpha(0)
      .setVisible(true)
      .setDepth(CLOUD_DEPTH)

    let cloudRestoreDone = 0
    const onCloudRestoreComplete = () => {
      cloudRestoreDone += 1
      if (cloudRestoreDone === 2) {
        this.animateHintPanelsEntry()
      }
    }

    this.tweens.add({
      targets: this.cloudImage1,
      x: CLOUD_1_X,
      y: CLOUD_1_Y,
      alpha: 1,
      duration: CLOUD_ANIM_DURATION,
      ease: 'Linear',
      onComplete: onCloudRestoreComplete,
    })

    this.tweens.add({
      targets: this.cloudImage2,
      x: CLOUD_2_X,
      y: CLOUD_2_Y,
      alpha: 1,
      duration: CLOUD_ANIM_DURATION,
      ease: 'Linear',
      onComplete: onCloudRestoreComplete,
    })
  }

  createHintPanelContainers() {
    if (!this.textures.exists(HINT_PANEL_KEY)) {
      console.warn('[hint] hintPannel texture not loaded:', HINT_PANEL_PATH)
      return
    }

    const hints = this.currentWordEntry?.hint
    if (!Array.isArray(hints) || hints.length < 2) {
      console.warn('[hint] word.json hint 항목이 2개 필요합니다.')
      return
    }

    if (this.hintPanelContainer1) {
      this.hintPanelContainer1.destroy(true)
    }
    if (this.hintPanelContainer2) {
      this.hintPanelContainer2.destroy(true)
    }

    this.hintPanelContainer1 = this.buildHintPanelContainer(
      HINT_PANEL_1_X,
      hints[0],
      getHintImageKey(this.qid, 0),
      0,
    )
    this.hintPanelContainer2 = this.buildHintPanelContainer(
      HINT_PANEL_2_X,
      hints[1],
      getHintImageKey(this.qid, 1),
      1,
    )
  }

  buildHintPanelContainer(x, hintData, hintImageKey, hintIndex) {
    const container = this.add.container(x, HINT_PANEL_OFFSCREEN_Y)
    container.setDepth(HINT_PANEL_DEPTH)
    container.setVisible(false)

    const { width: panelWidth, height: panelHeight } = getHintPanelFrameSize(
      this.textures,
      HINT_PANEL_KEY,
    )
    const imageArea = getHintPanelAreaPixels(
      HINT_PANEL_IMAGE_AREA_NORM,
      panelWidth,
      panelHeight,
    )
    const textArea = getHintPanelAreaPixels(
      HINT_PANEL_TEXT_AREA_NORM,
      panelWidth,
      panelHeight,
    )
    const imageCenter = getHintPanelAreaCenter(
      HINT_PANEL_IMAGE_AREA_NORM,
      panelWidth,
      panelHeight,
    )
    const textCenter = getHintPanelAreaCenter(
      HINT_PANEL_TEXT_AREA_NORM,
      panelWidth,
      panelHeight,
    )

    const panelImage = this.add
      .image(0, 0, HINT_PANEL_KEY)
      .setOrigin(0.5)
    this.bindHintSoundInput(
      panelImage,
      hintIndex,
      new Phaser.Geom.Rectangle(
        -panelWidth / 2,
        -panelHeight / 2,
        panelWidth,
        panelHeight,
      ),
    )
    container.add(panelImage)

    const hintImageKeyResolved = hintImageKey
    if (
      hintData?.image &&
      this.textures.exists(hintImageKeyResolved)
    ) {
      const hintImage = this.add
        .image(
          imageCenter.x,
          imageCenter.y + HINT_IMAGE_OFFSET_Y,
          hintImageKeyResolved,
        )
        .setOrigin(0.5)
      hintImage.setScale(
        getHintImageScaleForArea(hintImage, imageArea.width, imageArea.height),
      )
      container.add(hintImage)

      const imageHitZone = this.createHintPanelHitZone(
        imageCenter.x,
        imageCenter.y + HINT_IMAGE_OFFSET_Y,
        imageArea.width,
        imageArea.height,
        hintIndex,
      )
      container.add(imageHitZone)
    } else if (hintData?.image) {
      console.warn('[hint] texture not loaded:', hintData.image)
    }

    if (hintData?.word) {
      const hintText = this.add
        .text(textCenter.x, textCenter.y + HINT_TEXT_OFFSET_Y, hintData.word, {
          fontFamily: CLOCK_TIMER_FONT,
          fontSize: HINT_WORD_FONT_SIZE,
          fontStyle: 'bold',
          color: HINT_WORD_COLOR,
          align: 'center',
        })
        .setOrigin(0.5)
        .setWordWrapWidth(textArea.width * HINT_TEXT_AREA_WIDTH_RATIO)
      container.add(hintText)

      const textHitZone = this.createHintPanelHitZone(
        textCenter.x,
        textCenter.y + HINT_TEXT_OFFSET_Y,
        textArea.width * HINT_TEXT_AREA_WIDTH_RATIO,
        textArea.height,
        hintIndex,
      )
      container.add(textHitZone)
    }

    return container
  }

  animateHintPanelsEntry() {
    if (this.hintPanelsAnimated) return
    this.hintPanelsAnimated = true

    this.playHintPanelDropSound(() => {
      this.playHintSoundsSequentially()
    })

    let panelCount = 0
    let panelDone = 0
    const onPanelDropComplete = () => {
      panelDone += 1
      if (panelDone >= panelCount && !this.voiceAnswered) {
        this.resumeTimerCountdown()
      }
    }

    if (this.hintPanelContainer1) {
      panelCount += 1
      this.animateHintPanelDrop(
        this.hintPanelContainer1,
        HINT_PANEL_1_X,
        HINT_PANEL_TARGET_Y,
        onPanelDropComplete,
      )
    }

    if (this.hintPanelContainer2) {
      panelCount += 1
      this.animateHintPanelDrop(
        this.hintPanelContainer2,
        HINT_PANEL_2_X,
        HINT_PANEL_TARGET_Y,
        onPanelDropComplete,
      )
    }

    if (panelCount === 0 && !this.voiceAnswered) {
      this.resumeTimerCountdown()
    }
  }

  playHintPanelDropSound(onComplete) {
    if (this.cache.audio.exists(HINT_PANEL_SFX_KEY)) {
      const dropSound = this.sound.add(HINT_PANEL_SFX_KEY, {
        loop: false,
        volume: 1,
      })

      const finish = () => {
        dropSound.destroy()
        onComplete?.()
      }

      dropSound.once('complete', finish)

      if (!dropSound.play()) {
        dropSound.destroy()
        onComplete?.()
      }
      return
    }

    onComplete?.()
  }

  playHintSoundsSequentially() {
    const hints = this.currentWordEntry?.hint
    if (!Array.isArray(hints) || hints.length === 0) return

    const playableKeys = hints
      .map((hint, index) => ({
        index,
        key: getHintSoundKey(this.qid, index),
        path: hint?.sound,
      }))
      .filter((item) => item.path && this.cache.audio.exists(item.key))

    if (playableKeys.length === 0) return

    const playAt = (soundIndex) => {
      if (soundIndex >= playableKeys.length) return

      const { key, path } = playableKeys[soundIndex]
      const hintSound = this.sound.add(key, { loop: false, volume: 1 })

      const playNext = () => {
        hintSound.destroy()
        playAt(soundIndex + 1)
      }

      hintSound.once('complete', playNext)

      if (!hintSound.play()) {
        console.warn('[HintSound] play failed:', path)
        hintSound.destroy()
        playAt(soundIndex + 1)
      }
    }

    playAt(0)
  }

  bindHintSoundInput(target, hintIndex, hitArea = null) {
    if (hitArea) {
      target.setInteractive(hitArea, Phaser.Geom.Rectangle.Contains)
    } else {
      target.setInteractive({ useHandCursor: true })
    }

    target.removeAllListeners('pointerup')
    target.on('pointerup', () => {
      this.playHintSound(hintIndex)
    })
  }

  createHintPanelHitZone(x, y, width, height, hintIndex) {
    const hitZone = this.add
      .rectangle(x, y, width, height, 0xffffff, 0)
      .setOrigin(0.5)

    this.bindHintSoundInput(hitZone, hintIndex)
    return hitZone
  }

  playHintSound(hintIndex) {
    const hints = this.currentWordEntry?.hint
    const hint = hints?.[hintIndex]
    const soundKey = getHintSoundKey(this.qid, hintIndex)

    if (!hint?.sound) return
    if (!this.cache.audio.exists(soundKey)) {
      console.warn('[HintSound] audio not loaded:', hint.sound)
      return
    }

    const hintSound = this.sound.add(soundKey, { loop: false, volume: 1 })

    hintSound.once('complete', () => {
      hintSound.destroy()
    })

    if (!hintSound.play()) {
      console.warn('[HintSound] play failed:', hint.sound)
      hintSound.destroy()
    }
  }

  animateHintPanelDrop(container, targetX, targetY, onComplete) {
    const overshootY = targetY + HINT_PANEL_OVERSHOOT_OFFSET

    container.setPosition(targetX, HINT_PANEL_OFFSCREEN_Y)
    container.setVisible(true)

    this.tweens.chain({
      targets: container,
      tweens: [
        {
          y: overshootY,
          duration: HINT_PANEL_DROP_DURATION,
          ease: 'Quad.in',
        },
        {
          y: targetY,
          duration: HINT_PANEL_BOUNCE_DURATION,
          ease: 'Cubic.out',
        },
      ],
      onComplete,
    })
  }

  createClockUIContainer() {
    if (!this.textures.exists(CLOCK_BG_KEY)) return

    this.timeLimit = TIME_LIMIT

    this.clockUIContainer = this.add.container(CLOCK_UI_X, CLOCK_UI_Y)
    this.clockUIContainer.setDepth(CLOCK_UI_DEPTH)

    const clockBgImage = this.add
      .image(0, 0, CLOCK_BG_KEY)
      .setOrigin(0.5)

    this.clockTimerText = this.add
      .text(0, 0, formatTime(this.timeLimit), {
        fontFamily: CLOCK_TIMER_FONT,
        fontSize: CLOCK_TIMER_FONT_SIZE,
        fontStyle: 'bold',
        color: '#ffffff',
      })
      .setOrigin(0.5)

    this.clockUIContainer.add([clockBgImage, this.clockTimerText])
    this.clockUIContainer.setVisible(false)
  }

  createScoreUIContainer() {
    if (!this.textures.exists(SCORE_BG_KEY)) return

    this.score = this.preservedScore ?? SCORE_DEFAULT

    this.scoreUIContainer = this.add.container(SCORE_UI_X, SCORE_UI_Y)
    this.scoreUIContainer.setDepth(SCORE_UI_DEPTH)

    const scoreBgImage = this.add
      .image(0, 0, SCORE_BG_KEY)
      .setOrigin(0.5)

    this.scoreText = this.add
      .text(0, 0, String(this.score), {
        fontFamily: CLOCK_TIMER_FONT,
        fontSize: SCORE_TEXT_FONT_SIZE,
        fontStyle: 'bold',
        color: SCORE_TEXT_COLOR,
      })
      .setOrigin(0.5)

    this.scoreUIContainer.add([scoreBgImage, this.scoreText])
  }

  showClockUIContainer() {
    if (!this.clockUIContainer) return

    this.clockUIContainer
      .setPosition(CLOCK_UI_X, CLOCK_UI_Y)
      .setVisible(true)

    this.startFallingStarAnimation()
  }

  createStarImage(x, y, scale, depth = FALLING_STAR_DEPTH) {
    return this.add
      .image(x, y, STAR_KEY)
      .setOrigin(0.5)
      .setScale(scale)
      .setDepth(depth)
      .setAlpha(1)
  }

  startFallingStarAnimation() {
    if (!this.textures.exists(STAR_KEY)) return

    const star = this.createStarImage(
      CLOCK_UI_X,
      CLOCK_UI_Y,
      FALLING_STAR_SCALE,
    )

    this.tweens.add({
      targets: star,
      y: FALLING_STAR_SPLIT_Y,
      duration: FALLING_STAR_FALL_DURATION,
      ease: 'Quad.in',
      onComplete: () => {
        this.splitFallingStar(star.x, star.y, star.scaleX)
        star.destroy()
      },
    })
  }

  splitFallingStar(x, y, scale) {
    if (this.cache.audio.exists(MIC_ACTIVE_VIS_SFX_KEY)) {
      this.sound.play(MIC_ACTIVE_VIS_SFX_KEY)
    }

    this.showMicActiveAnimation()

    const leftStar = this.createStarImage(x, y, scale)
    const rightStar = this.createStarImage(x, y, scale)

    this.animateBouncingFallingStar(
      leftStar,
      x - FALLING_STAR_BOUNCE_X_OFFSET,
    )
    this.animateBouncingFallingStar(
      rightStar,
      x + FALLING_STAR_BOUNCE_X_OFFSET,
    )
  }

  animateBouncingFallingStar(star, targetX) {
    const riseY = FALLING_STAR_SPLIT_Y - FALLING_STAR_BOUNCE_RISE_OFFSET

    this.tweens.chain({
      tweens: [
        {
          targets: star,
          x: targetX,
          y: riseY,
          duration: FALLING_STAR_BOUNCE_RISE_DURATION,
          ease: 'Cubic.out',
        },
        {
          targets: star,
          alpha: 0,
          duration: FALLING_STAR_FADE_DURATION,
          ease: 'Linear',
          onComplete: () => {
            star.destroy()
          },
        },
      ],
    })
  }

  createCloudImages() {
    this.cloudImage1 = this.add
      .image(CLOUD_1_X, CLOUD_1_Y, CLOUD_KEY_1)
      .setOrigin(0.5)
      .setDepth(CLOUD_DEPTH)
      .setAlpha(1)

    this.cloudImage2 = this.add
      .image(CLOUD_2_X, CLOUD_2_Y, CLOUD_KEY_2)
      .setOrigin(0.5)
      .setDepth(CLOUD_DEPTH)
      .setAlpha(1)
  }

  startCloudRevealAnimation() {
    if (!this.cloudImage1 || !this.cloudImage2) return

    if (this.sound.get(MYSTERY_BGM_KEY)) {
      this.sound.get(MYSTERY_BGM_KEY).destroy()
    }
    if (this.cache.audio.exists(MYSTERY_BGM_KEY)) {
      this.sound.add(MYSTERY_BGM_KEY, { loop: false, volume: 1 }).play()
    }

    let cloudTweenDone = 0
    const onCloudTweenComplete = () => {
      cloudTweenDone += 1
      if (cloudTweenDone === 2) {
        this.fadeWordSilhouette()
      }
    }

    this.tweens.add({
      targets: this.cloudImage1,
      x: CLOUD_1_X - CLOUD_MOVE_OFFSET,
      alpha: 0,
      duration: CLOUD_ANIM_DURATION,
      ease: 'Linear',
      onComplete: onCloudTweenComplete,
    })

    this.tweens.add({
      targets: this.cloudImage2,
      x: CLOUD_2_X + CLOUD_MOVE_OFFSET,
      alpha: 0,
      duration: CLOUD_ANIM_DURATION,
      ease: 'Linear',
      onComplete: onCloudTweenComplete,
    })
  }

  fadeWordSilhouette() {
    if (!this.wordImageShadow) return

    this.tweens.add({
      targets: this.wordImageShadow,
      alpha: 0,
      duration: SILHOUETTE_FADE_DURATION,
      ease: 'Linear',
      onComplete: () => {
        this.revealCompleteTime = Date.now()
        this.createCelebrationFirework()
      },
    })
  }

  createFireworkParticle(x, y, scale, depth = FIREWORK_DEPTH + 1) {
    return this.add
      .image(x, y, STAR_KEY)
      .setOrigin(0.5)
      .setScale(scale)
      .setDepth(depth)
  }

  createCelebrationFirework() {
    const startX = WORD_IMAGE_X
    const startY = WORD_IMAGE_Y
    const targetX = FIREWORK_TARGET_X
    const targetY = FIREWORK_TARGET_Y

    const rocket = this.createFireworkParticle(
      startX,
      startY,
      FIREWORK_ROCKET_SCALE,
      FIREWORK_DEPTH,
    )

    this.tweens.add({
      targets: rocket,
      x: targetX,
      y: targetY,
      duration: FIREWORK_ROCKET_DURATION,
      ease: 'Cubic.easeOut',
      onComplete: () => {
        rocket.destroy()
        this.createFireworkBurst(targetX, targetY)
      },
    })
  }

  createFireworkBurst(x, y) {
    if (this.cache.audio.exists(SMALL_EXPLOSION_SFX_KEY)) {
      this.sound.play(SMALL_EXPLOSION_SFX_KEY)
    }

    this.showClockUIContainer()

    for (let i = 0; i < FIREWORK_PARTICLE_COUNT; i += 1) {
      const angle = Phaser.Math.DegToRad((360 / FIREWORK_PARTICLE_COUNT) * i)
      const distance = Phaser.Math.Between(
        FIREWORK_PARTICLE_MIN_DISTANCE,
        FIREWORK_PARTICLE_MAX_DISTANCE,
      )
      const scale = Phaser.Math.FloatBetween(
        FIREWORK_PARTICLE_MIN_SCALE,
        FIREWORK_PARTICLE_MAX_SCALE,
      )

      const particle = this.createFireworkParticle(x, y, scale)

      this.tweens.add({
        targets: particle,
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        alpha: 0,
        scale: FIREWORK_PARTICLE_END_SCALE,
        duration: FIREWORK_PARTICLE_DURATION,
        ease: 'Cubic.easeOut',
        onComplete: () => {
          particle.destroy()
        },
      })
    }
  }

  createWordImages() {
    const wordImageKey = getWordImageKey(this.qid)

    this.wordImageBase = this.add
      .image(WORD_IMAGE_X, WORD_IMAGE_Y, wordImageKey)
      .setOrigin(0.5)
      .setDepth(WORD_IMAGE_DEPTH_BASE)

    const scale = getWordImageScale(this.wordImageBase)
    this.wordImageBase.setScale(scale)

    this.wordImageShadow = this.add
      .image(WORD_IMAGE_X, WORD_IMAGE_Y, wordImageKey)
      .setOrigin(0.5)
      .setScale(scale)
      .setDepth(WORD_IMAGE_DEPTH_TOP)
      .setAlpha(1)
      .setTint(0x000000)
      .setTintMode(Phaser.TintModes.FILL)
  }
}

/**
 * @param {HTMLElement} parent - Phaser 캔버스를 붙일 DOM 요소
 * @returns {Phaser.Game}
 */
export const DESIGN_WIDTH = 1280
export const DESIGN_HEIGHT = 800
export { CLOUD_KEY_1, CLOUD_KEY_2, CLOUD_PATH, MIC_ACTIVE_KEY }

export async function initGame(parent) {
  await document.fonts.load(`700 ${CLOCK_TIMER_FONT_SIZE} Orbitron`)

  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: DESIGN_WIDTH,
    height: DESIGN_HEIGHT,
    backgroundColor: '#000000',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 900 },
        debug: false,
      },
    },
    scene: [MainScene],
    scale: {
      mode: Phaser.Scale.NONE,
    },
  })

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      game.destroy(true)
    })
  }

  return game
}
