# Secret Shadow POC - 축포형 불꽃놀이 파티클 구현 가이드

## 1. 작업 목표

현재 Phaser POC에서 검은 실루엣 이미지가 서서히 사라진 뒤, 컬러 이미지가 완전히 드러나는 연출이 구현되어 있다.

이번 작업의 목표는 다음 연출을 추가하는 것이다.

```text
검은 실루엣 alpha 1 → 0
↓
컬러 이미지 완전 노출
↓
컬러 이미지 정중앙에서 빛 파티클 1개 발사
↓
파티클이 x: 653, y: 75 위치까지 상승
↓
상단에서 여러 개의 파티클로 복제되어 폭죽처럼 분사
```

---

## 2. 현재 코드 기준

현재 `fadeWordSilhouette()` 함수에서 실루엣 이미지의 alpha 값을 0으로 변경하고 있다.

```js
fadeWordSilhouette() {
  if (!this.wordImageShadow) return

  this.tweens.add({
    targets: this.wordImageShadow,
    alpha: 0,
    duration: SILHOUETTE_FADE_DURATION,
    ease: 'Linear',
  })
}
```

이 함수의 Tween 완료 시점에 축포 파티클 함수를 호출하도록 수정한다.

---

## 3. 수정 방향

### 변경 전

```js
this.tweens.add({
  targets: this.wordImageShadow,
  alpha: 0,
  duration: SILHOUETTE_FADE_DURATION,
  ease: 'Linear',
})
```

### 변경 후

```js
this.tweens.add({
  targets: this.wordImageShadow,
  alpha: 0,
  duration: SILHOUETTE_FADE_DURATION,
  ease: 'Linear',
  onComplete: () => {
    this.createCelebrationFirework()
  },
})
```

---

## 4. 추가할 상수

파일 상단 상수 영역에 아래 값을 추가한다.

```js
const FIREWORK_TARGET_X = 653
const FIREWORK_TARGET_Y = 75
const FIREWORK_ROCKET_DURATION = 700
const FIREWORK_PARTICLE_COUNT = 36
const FIREWORK_PARTICLE_MIN_DISTANCE = 70
const FIREWORK_PARTICLE_MAX_DISTANCE = 150
const FIREWORK_PARTICLE_DURATION = 900
const FIREWORK_DEPTH = 80
```

---

## 5. MainScene 클래스 안에 추가할 함수

`MainScene` 클래스 내부에 아래 함수를 추가한다.

```js
createCelebrationFirework() {
  const startX = WORD_IMAGE_X
  const startY = WORD_IMAGE_Y
  const targetX = FIREWORK_TARGET_X
  const targetY = FIREWORK_TARGET_Y

  const rocket = this.add
    .circle(startX, startY, 6, 0xfff2a8)
    .setDepth(FIREWORK_DEPTH)

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
```

---

## 6. 폭죽 분사 함수 추가

`MainScene` 클래스 내부에 아래 함수도 추가한다.

```js
createFireworkBurst(x, y) {
  for (let i = 0; i < FIREWORK_PARTICLE_COUNT; i += 1) {
    const angle = Phaser.Math.DegToRad((360 / FIREWORK_PARTICLE_COUNT) * i)
    const distance = Phaser.Math.Between(
      FIREWORK_PARTICLE_MIN_DISTANCE,
      FIREWORK_PARTICLE_MAX_DISTANCE,
    )

    const particle = this.add
      .circle(x, y, Phaser.Math.Between(3, 6), 0xffd86b)
      .setDepth(FIREWORK_DEPTH + 1)

    this.tweens.add({
      targets: particle,
      x: x + Math.cos(angle) * distance,
      y: y + Math.sin(angle) * distance,
      alpha: 0,
      scale: 0.2,
      duration: FIREWORK_PARTICLE_DURATION,
      ease: 'Cubic.easeOut',
      onComplete: () => {
        particle.destroy()
      },
    })
  }
}
```

---

## 7. 최종 수정된 fadeWordSilhouette 함수

기존 `fadeWordSilhouette()` 함수를 아래처럼 교체한다.

```js
fadeWordSilhouette() {
  if (!this.wordImageShadow) return

  this.tweens.add({
    targets: this.wordImageShadow,
    alpha: 0,
    duration: SILHOUETTE_FADE_DURATION,
    ease: 'Linear',
    onComplete: () => {
      this.createCelebrationFirework()
    },
  })
}
```

---

## 8. 기대 연출

1. 포탈 앞에 안개가 나타남
2. 안개가 좌우로 사라짐
3. 검은 실루엣이 서서히 사라짐
4. 컬러 이미지가 완전히 드러남
5. 이미지 중앙에서 빛 하나가 위로 상승
6. 화면 상단 `x:653, y:75` 위치에서 폭죽처럼 분사
7. 축하/성공 느낌 강화

---

## 9. 추후 개선 옵션

### 옵션 1. circle 대신 spark 이미지 사용

현재는 `this.add.circle()`로 파티클을 만든다.

나중에 `spark.png` 또는 `star.png`를 추가하면 더 고급스럽게 표현할 수 있다.

```js
const particle = this.add
  .image(x, y, 'spark')
  .setDepth(FIREWORK_DEPTH + 1)
```

---

### 옵션 2. 여러 색상 사용

```js
const colors = [
  0xffd86b,
  0xffffff,
  0xc084fc,
  0x60a5fa,
  0xf472b6,
]

const color = Phaser.Utils.Array.GetRandom(colors)
```

---

### 옵션 3. 폭죽 사운드 추가

실루엣이 사라진 후 파티클 상승 시점 또는 폭발 시점에 효과음을 재생한다.

```js
this.sound.play('fireworkSound')
```

---

## 10. Cursor AI 작업 지시문

아래 내용을 Cursor AI에게 요청한다.

```text
현재 Phaser POC 코드에서 wordImageShadow의 alpha가 0이 되는 순간 축포형 불꽃놀이 파티클을 추가해줘.

요구사항:
1. 기존 코드 구조는 최대한 유지한다.
2. fadeWordSilhouette()의 tween 완료 시 createCelebrationFirework()를 호출한다.
3. 컬러 이미지 정중앙, 즉 WORD_IMAGE_X / WORD_IMAGE_Y 위치에서 작은 빛 파티클 1개가 출발한다.
4. 이 파티클은 x:653, y:75 위치까지 상승한다.
5. 상승 완료 후 해당 위치에서 36개의 작은 파티클이 원형으로 분사된다.
6. 각 파티클은 퍼지면서 alpha가 0이 되고 destroy 처리된다.
7. 별도 이미지 에셋 없이 Phaser의 circle 오브젝트로 먼저 구현한다.
8. 이후 spark.png로 교체 가능하도록 함수 구조를 분리한다.
9. 상수는 파일 상단에 선언한다.
10. 기존 배경, 구름, 실루엣, 컬러 이미지 로직은 삭제하지 않는다.
```

---

## 11. 완료 기준

- 실루엣이 완전히 사라진 뒤에만 축포가 실행된다.
- 파티클은 컬러 이미지 중앙에서 출발한다.
- 파티클은 `x:653, y:75`까지 이동한다.
- 목표 지점에서 여러 개의 파티클로 분사된다.
- 분사된 파티클은 자연스럽게 사라진다.
- 애니메이션 종료 후 화면에 불필요한 오브젝트가 남지 않는다.
