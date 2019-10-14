
/**
 * 将new Date的时间转换为yyyy-MM-dd HH:mm:ss
 * @param imgUrl 图片url
 * @param imgName 下载后图片的名称
 * @returns {*}
 */
export  function downImg (imgUrl,imgName = "机械之家图片") {
  let src = imgUrl;
  let name = imgName
  const image = new Image();
  image.setAttribute('crossOrigin', 'anonymous');
  image.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, image.width, image.height);
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    const event = new MouseEvent('click');
    a.download = name;
    a.href = url;
    a.dispatchEvent(event);
  };
  image.src = src
}
