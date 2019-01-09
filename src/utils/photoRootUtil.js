import { SIZES } from '../utils/constants';

const PHOTO_ROOTS = {
  SM: '/photos/sizes/sm/',
  MD: '/photos/sizes/md/',
  LG: '/photos/sizes/lg/'
};

const SHORT_SIZES = {
  LARGE: 'lg',
  MEDIUM: 'md',
  SMALL: 'sm'
};

const DEFAULT_EXTENSION = '.jpg'

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
  console.log('result', result)
  return result;
}

export function buildSrcSetGeneric(baseName, extension, vertical) {
  if (vertical)
    return buildSrcSetVertical();
  return buildSrcSetHorizontal();
}

export function buildSrcSetHorizontal(baseName, extension) {
  if (!extension) {
    extension = DEFAULT_EXTENSION;
  }
  let result = `${PHOTO_ROOTS.LG}${baseName}__${SHORT_SIZES.LARGE}${extension} ${SIZES.HORIZONTAL.WIDTH.LARGE}w`;
  result = result.concat(`,
  ${PHOTO_ROOTS.MD}${baseName}__${SHORT_SIZES.MEDIUM}${extension} ${SIZES.HORIZONTAL.WIDTH.MEDIUM}w`);
  result = result.concat(`,
  ${PHOTO_ROOTS.SM}${baseName}__${SHORT_SIZES.SMALL}${extension} ${SIZES.HORIZONTAL.WIDTH.SMALL}w`);
  console.log('result', result)
  return result;
}
export function buildSrcSetVertical(baseName, extension) {
  
}