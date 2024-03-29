class Road {
  constructor(x, width, laneCounter = 3) {
    this.x = x;
    this.width = width;
    this.laneCounter = laneCounter;

    this.left = x - width / 2;
    this.right = x + width / 2;

    const infinity = 1000000;
    this.top = -infinity;
    this.bottom = infinity;

    const topLeft = { x: this.left, y: this.top };
    const topRight = { x: this.right, y: this.top };
    const bottomLeft = { x: this.left, y: this.bottom };
    const bottomRight = { x: this.right, y: this.bottom };
    this.borders = [
      [topLeft, bottomLeft],
      [topRight, bottomRight],
    ];

  }

  getLaneCenterX(laneIndex) {
    const laneWidth = this.width / this.laneCounter;
    return (
      this.left +
      laneWidth / 2 +
      Math.min(laneIndex, this.laneCounter - 1) * laneWidth
    );
  }

  draw(ctx) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";

    for (let i = 1; i <= this.laneCounter - 1; i++) {
      const laneX = lerp(this.left, this.right, i / this.laneCounter);
      ctx.setLineDash([20, 20]);
      ctx.beginPath();
      ctx.moveTo(laneX, this.top);
      ctx.lineTo(laneX, this.bottom);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    this.borders.forEach((border) => {
      ctx.beginPath();
      ctx.moveTo(border[0].x, border[0].y);
      ctx.lineTo(border[1].x, border[1].y);
      ctx.stroke();
    });
  }
}
