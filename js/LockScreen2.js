const canvSize = 101;
const canvas = new DrawContext();
canvas.opaque = false

const canvWidth = 20; // circle thickness
const canvRadius = 10; // circle radius

canvas.size = new Size(canvSize, canvSize);
canvas.respectScreenScale = true;

let widget = new ListWidget();
let circle = widget.addStack()

let dayRadiusOffset = 60;
makeCircle(dayRadiusOffset, Color.white(),Color.black(),70)

drawText("100%", 60, 22)
let widget1 = circle.addImage(canvas.getImage())

widget.addAccessoryWidgetBackground = true
Script.setWidget(widget);
widget.presentAccessoryCircular()
Script.complete();

function makeCircle(radiusOffset, bgCircleColor, fgCircleColor, degree, txtColor) {
    let ctr = new Point(canvSize / 2, canvSize / 2)
    // Outer circle
    CoordOffset = 0
    RadiusOffset = 0
    bgx = ctr.x - (canvRadius - radiusOffset);
    bgy = ctr.y - (canvRadius - radiusOffset);
    bgd = 2 * (canvRadius - radiusOffset);
    bgr = new Rect(
        bgx + CoordOffset,
        bgy + CoordOffset,
        bgd,
        bgd
    );

    canvas.setStrokeColor(bgCircleColor);
    canvas.setLineWidth(canvWidth);
    canvas.strokeEllipse(bgr);
   
   
    // Inner circle
    canvas.setFillColor(fgCircleColor);
    for (t = 35; t < 100; t++) {
        rect_x = ctr.x + ((canvRadius+2) - (radiusOffset-2)) * sinDeg(t) - (canvWidth-15) / 2;
        rect_y = ctr.y - ((canvRadius+2) - (radiusOffset-2)) * cosDeg(t) - (canvWidth-15) / 2;
        rect_r = new Rect(
            rect_x,
            rect_y,
            canvWidth-15,
            canvWidth-15
        );
        canvas.fillEllipse(rect_r);
    }
}

function drawText(txt, txtOffset, fontSize) {
    const txtRect = new Rect(
        40 / 2 - 20,
        txtOffset - 20,
        canvSize,
        40
    );
    canvas.setTextColor(Color.white());
    canvas.setFont(Font.systemFont(fontSize));
    canvas.setTextAlignedCenter()
    canvas.drawTextInRect(txt, txtRect)
}


function sinDeg(deg) {
    return Math.sin((deg * Math.PI) / 180);
}

function cosDeg(deg) {
    return Math.cos((deg * Math.PI) / 180);
}
