import tc from 'tinycolor2';

function MSColorFromString(str) {
  return MSImmutableColor.colorWithSVGString(str).newMutableCounterpart();
}

export default function(context) {
  const app = NSApp.delegate();
  const assets = app.globalAssets();
  const colors = assets.colors();

  colors.forEach((obj => {
    const c = obj.immutableModelObject().hexValue();

    log(tc(`#${c}`).toRgbString())
    // log(MSColorFromString(`#${c}`))
  }));
}

