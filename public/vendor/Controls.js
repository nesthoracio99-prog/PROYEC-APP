// Minimal Controls base class for Three.js example controls.
//
// Why this exists:
// - The project runs as pure ES modules via a simple static server.
// - OrbitControls depends on a small "Controls" helper.
// - In your previous vendor download, Controls.js was an HTML 404 body,
//   which breaks module imports.
//
// This implementation is intentionally tiny: it provides the properties and
// methods OrbitControls expects (object, domElement, enabled, connect/disconnect).

import { EventDispatcher } from './three.module.js';

class Controls extends EventDispatcher {
  constructor( object, domElement = null ) {
    super();
    this.object = object;
    this.domElement = domElement;
    this.enabled = true;
  }

  connect( element ) {
    this.domElement = element;
  }

  disconnect() {
    // no-op for the base class
  }

  dispose() {
    this.disconnect();
  }
}

export { Controls };
