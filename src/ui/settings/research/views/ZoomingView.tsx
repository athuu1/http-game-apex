import * as app from '..';
import * as React from 'react';
import * as ui from 'ui';

export const ZoomingView = ui.createView<{vm: app.ZoomingViewModel}>(({vm}) => (
  <ui.material.FormGroup>
    <ui.material.Typography variant="h6">
      {app.language.researchZoomingInfo}
    </ui.material.Typography>
    <ui.material.FormControlLabel
      label={app.language.researchEnable}
      control={<ui.material.Switch
        onChange={x => vm.enable.change(x.target.checked)}
        checked={vm.enable.value} />} />
  </ui.material.FormGroup>
));