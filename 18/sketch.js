//pre-setting for font/ graphic
let graphic
let font
let canvas

//load the font
function preload(){
  font = loadFont('ChunkFive-Regular.otf')
}

//loopduration (animation)
const loopDuration = 3 * 60

function setup() {
  createCanvas(1000, 1000);
  background(0);

  graphic = createGraphics(width, height)
//text setup
  graphic.textFont(font)
  graphic.textAlign(CENTER, CENTER) //x,y
  graphic.blendMode(SCREEN)

  //01
  graphic.textSize(800)
  graphic.fill('rgba(255, 0, 0, 0.9)') //red blue yellow, hue
  graphic.text('W',width/2,height/3)// x, y location
  //02
  graphic.textSize(800)
  graphic.fill('rgba(0, 255, 0, 0.9)') //red blue yellow, hue
  graphic.text('W',width/1.95,height/2.95)// x, y location change
  //03
  graphic.textSize(800)
  graphic.fill('rgba(0, 0, 255, 0.9)') //red blue yellow, hue
  graphic.text('W',width/2.05,height/3.05)// x, y location change
}

function draw() {

  //set the framerate , speed?
  let currentFrame =  frameCount % loopDuration
  let v = currentFrame / loopDuration 
  let u = map (v, 0, 1, 0, 2*PI)

  background(0);

  ///creat tiles
  const tiles = 24
  const tileSize = width/ tiles

  //looping each of the tiles
  for (let x = 0; x < tiles; x++){
    for (let y = 0; y < tiles; y++){

      const distortionX = cos (u + x *0.5)*30
      const distortionY = sin (u + y *0.5)*30

      //applying the grid into the graphic
      const sx = x * tileSize + distortionX
      const sy = y * tileSize + distortionY
      const sw = tileSize + distortionX
      const sh = tileSize + distortionY

      // appliyig the grid to end point on the canvas
      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize

      //grid image from graphic into canvas

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)

    }
  }

  
}



// function mousePressed() {
//   saveCanvas("p5-sketche-18","png")
// }

//work cited
//reference https://www.youtube.com/watch?v=SKDhkB8g1So
//graphic - 
//blend mode- 
//distortion-
