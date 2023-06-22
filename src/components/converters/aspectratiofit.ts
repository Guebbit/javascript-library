/**
 * Resize element width & height to container,
 * while maintaining the aspect ratio
 *
 * @param width
 * @param height
 * @param maxWidth
 * @param maxHeight
 * @return [width, height]
 */
export default (width: number, height: number, maxWidth: number, maxHeight: number) :[number, number] => {
  const ratio = Math.min(maxWidth / width, maxHeight / height);
  return [
    Math.floor(width * ratio),
    Math.floor(height * ratio)
  ];
}
