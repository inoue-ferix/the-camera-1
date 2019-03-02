import React from 'https://dev.jspm.io/react@16';
import html from '/libraries/htm/index.js';
import {
  faTimesCircle,
  faSave,
} from '/libraries/@fortawesome/free-solid-svg-icons/index.js';

import ControllerWrapper from '/components/common/ControllerWrapper.js';
import ControllerGrid from '/components/common/ControllerGrid.js';
import ControllerButton from '/components/common/ControllerButton.js';

/**
 * @typedef Props
 * @property {() => any} onSave
 * @property {() => any} onCancel
 */

/** @type {React.FC<Props>} */
const GifSaveController = ({ onSave, onCancel }) =>
  html`
    <${ControllerWrapper} data-position="top">
      <${ControllerGrid}>
        <${ControllerButton}
          icon=${faTimesCircle}
          onClick=${onCancel}
          data-grid-area="left"
        />
        <${ControllerButton}
          icon=${faSave}
          onClick=${onSave}
          data-grid-area="right"
        />
      <//>
    <//>
  `;

export default GifSaveController;
