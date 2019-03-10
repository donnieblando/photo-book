
const LIVEMUSIC_PHOTOS = [
  [{}, {}],
  [],
  []
];
const BENCHES_PHOTOS = [
  [],
  []
];
const PORTRAITS_PHOTOS = [
  ["DSC_5801-1", "DSC_5801-1", "VDSC_6078", "DSC_5816-1"],
  ["DSC_5801-1", "VDSC_6078"],
  ["DSC_5801-1"],
  [null, "DSC_5801-1"],
  ["DSC_5801-1", "DSC_5801-1", null, "DSC_5801-1"]
];

const LAMINA_PHOTOS = [
  ["DSC_8464-1"],
  ["DSC_8466-2", "DSC_8469-3"],
  ["DSC_8473-4"],
  ["DSC_8474-5"]
];

export {
  LIVEMUSIC_PHOTOS,
  BENCHES_PHOTOS,
  PORTRAITS_PHOTOS,
  LAMINA_PHOTOS
}

/**
 * Photo structure:
 * {
 *  fileName: string
 *  title: string (opt)
 *  description: string (opt)
 *  caption: string (opt)
 *  tags...
 * }
 */