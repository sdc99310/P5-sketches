//img pre setting
let img, pg, h, w
let size = 1000
// lines pre setting
let lineCount = 2
let lineSpacing = size / lineCount // spacing between the lines
let lineWidth = size + 20//right line width
let subPoints = 80 
let xOff = lineWidth / subPoints
let loopDuration = 6 * 60
let px = 0
let py = 30
let c = [0, 200]
c = ['hsl(270, 100%, 50%)', 0]

function preload() {
  img = loadImage('w.jpg')
}

function setup() {
  createCanvas(1000, 1000)

  background(3)
  rectMode(CENTER)
  
  pg = createGraphics(width, height)
  pg.fill(255)
  pg.noStroke()
  pg.image(img, 0, 0, width, height)

  w = width
  h = height
}

function draw() {  
  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration

  background(c[0])
  strokeWeight(2)
  
  if (frameCount > 0) {
  
    // Lines
    for (let y = 0; y <= lineCount; y++) {
      beginShape()
      for (let x = 0; x <= subPoints; x++) {
        let pos = createVector(x * xOff, y * lineSpacing)
        let b = brightness(pg.get(pos.x, pos.y))
        let alpha = map(y, 0, lineCount - 1, 20, 0)

        stroke(c[1])
        fill(alpha)
        
        let n = random(0, 10)
        let depth = -(lineSpacing + n)
        let ny = random(0, 1)
        if (y === 0) {
          noFill()
        }
        curveVertex(pos.x - 10 + random(-5, 5), pos.y + map(b, 0, 100, 0, depth) + ny)
      }
      endShape()
    }
  
    // Dots
    for (let y = 0; y <= lineCount; y++) {
      for (let x = 0; x <= subPoints; x++) {
        let pos = createVector(x * xOff, y * lineSpacing)
        fill(c[1])
        let b = brightness(pg.get(pos.x, pos.y))
        if (b > 1) {
          ellipse(pos.x + random(-10, 10), pos.y - random(0, 20), 2, 2)
        }
      }
    }

    // motion and earase
    if (lineCount < 80) {
      h -= 0.5
      w -= 0.5
      px += 0.25
      py += 0.25
      pg.image(img, px, py, w, h)
      lineCount += 1
      lineSpacing = height / lineCount
    } else {
      lineCount = 1
      h = 0
      w = 0
      px = 0
      py = 0
      lineSpacing = height / lineCount
    }
  }
}





// function mousePressed() {
//   saveCanvas("p5-sketche-16","png")
// }

//work citation
//