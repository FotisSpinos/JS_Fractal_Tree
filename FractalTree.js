class FractalTree
{
    constructor(root, angleOffset, sizeCoefficient, sizeLimit)
    {
        this.root = root;
        this.angleOffset = angleOffset;
        this.sizeCoefficient = sizeCoefficient;
        this.sizeLimit = sizeLimit;
        this.active = true;
    }

    draw()
    {
        this.rootDraw(this.root);    
    }

    rootDraw(currentBranch)
    {
        setTimeout(() => {

        if(this.active == false)
            return;

        if(currentBranch.size < this.sizeLimit)
        {
            return currentBranch;
        }

        // Draw branch
        currentBranch.draw();

        // Create left branch
        currentBranch.left = this.rootDraw(
            new Branch(
                currentBranch.xDest, 
                currentBranch.yDest, 
                currentBranch.size * this.sizeCoefficient, 
                currentBranch.angle + this.angleOffset));

        // Create right branch
        currentBranch.right = this.rootDraw(
            new Branch(
                currentBranch.xDest, 
                currentBranch.yDest, 
                currentBranch.size * this.sizeCoefficient, 
                currentBranch.angle - this.angleOffset));
        }, 0.0)
    }
}