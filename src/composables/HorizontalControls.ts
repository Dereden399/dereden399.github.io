import { Camera } from 'three'

const inertiaFactor = 0.8

const speedFactor = 0.01

const maxSpeed = 0.4

const maxDragSpeed = 1

const screenWidthBase = 1920

export class HorizontalControls {
  private isMoving: boolean
  private startPointX: number
  private curVelocity: number
  delete: () => void
  update: () => void
  constructor(camera: Camera, canvas: HTMLCanvasElement) {
    this.isMoving = false
    this.startPointX = 0
    this.curVelocity = 0

    const screenFactor = canvas.clientWidth / screenWidthBase

    const onPointerMove = (e: PointerEvent) => {
      if (this.isMoving) {
        const dragVelocityOrig = (e.clientX - this.startPointX) * speedFactor
        const dragVelocity =
          dragVelocityOrig > maxDragSpeed
            ? maxDragSpeed
            : dragVelocityOrig < -maxDragSpeed
              ? -maxDragSpeed
              : dragVelocityOrig
        this.startPointX = e.clientX
        this.curVelocity += dragVelocity
        if (Math.abs(this.curVelocity) > maxSpeed) {
          this.curVelocity = this.curVelocity > 0 ? maxSpeed : -maxSpeed
        }
      }
    }

    const onPointerDown = (e: PointerEvent) => {
      console.log('pointer down')
      this.isMoving = true
      this.startPointX = e.clientX
    }

    const onPointerUp = () => {
      console.log('pointer up')
      this.isMoving = false
    }

    this.delete = () => {
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointerup', onPointerUp)
    }

    this.update = () => {
      if (this.curVelocity != 0) {
        camera.position.x += this.curVelocity * screenFactor
        this.curVelocity *= inertiaFactor
        if (Math.abs(this.curVelocity) < 0.0001) this.curVelocity = 0
      }
    }

    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointerup', onPointerUp)
  }
}
