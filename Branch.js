const xForward = 0;
const yForward = 1;

class Branch
{
    constructor(xPos, yPos, size, angle)
    {
        this.xPos = xPos;
        this.yPos = yPos;
        this.size = size;

        this.angle = angle;
        
        //convert to rad
        let rad = this.angle * Math.PI / 180;

        // define line destination
        this.xDest = this.xPos + (-this.size * Math.sin(rad));
        this.yDest = this.yPos + (-this.size * Math.cos(rad));

        //Branch children
        this.left;
        this.right
    }

    draw()
    {
        ctx.beginPath();
        ctx.moveTo(this.xPos, this.yPos);
        ctx.lineTo(this.xDest, this.yDest);
        ctx.stroke();
    }
}