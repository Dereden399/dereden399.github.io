import { MapControls } from 'three/examples/jsm/controls/MapControls.js'
import { Camera } from 'three'

export class HorizontalMapControls extends MapControls {
  constructor(object: Camera, domElement: HTMLCanvasElement) {
    super(object, domElement)
  }
}
