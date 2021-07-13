/* eslint-disable */
export enum configPostCreation {
  maxUploadedFiles = 4,
  maxFileSizeInByte = 1000000, // 1MB
  maxFileSizeInMegaByte = maxFileSizeInByte / 1000000,
  maxOptionGroup = 4,
  maxOptions = 4,
  minOptions = 2,
}
export enum apiUrls {
  mediaAPI = 'https://pickify-media-be-dev.pickify.net/api/media/',
}
