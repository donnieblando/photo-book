const PHOTO_ROOTS = {
  SM: '/photos/small/',
  MD: '/photos/medium/',
  LG: '/photos/large/'
};

export function buildSrcSet(baseName, extension, sizes) {
  const sortedSizes = sizes.sort((a, b) => {
    return b - a;
  })
  let result = `${PHOTO_ROOTS.LG}${baseName}-${String(sortedSizes[0])}w${extension} ${String(sortedSizes[0])}w`;
  if (sortedSizes[1]) {
    result = result.concat(`,
      ${PHOTO_ROOTS.MD}${baseName}-${String(sortedSizes[1])}w${extension} ${String(sortedSizes[1])}w`);
    if (sortedSizes[2]) {
      result = result.concat(`,
        ${PHOTO_ROOTS.SM}${baseName}-${String(sortedSizes[2])}w${extension} ${String(sortedSizes[2])}w`);
    }
  }
  return result;
}
