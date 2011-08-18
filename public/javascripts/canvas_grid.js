function CanvasGrid() {
  canvas = $('<canvas>').attr('height', document.height).attr('width', document.width).css('position', 'absolute').css('top', 0).css('left', 0).css('z-index', 1);
  $('body').append(canvas);
  this.canvas = canvas.get(0);
  this.context = this.canvas.getContext('2d');
  this.maxPageSize = 10000;
  this.gridWidth = 20;
  this.gridHeight = 20;
  this.lineColor = "#aaa";
}

CanvasGrid.prototype.drawGrid = function() {
    this.context.lineWidth = 1;
    this.context.strokeStyle = this.lineColor;
    this.context.beginPath();
    for ( i = 0 ; i < document.width && i < this.maxPageSize ; i = i + this.gridWidth ) {
      this.context.moveTo(i - 0.5, 0);
      this.context.lineTo(i - 0.5, document.height);
      this.context.closePath();
    }
    for ( i = 0 ; i < document.height && i < this.maxPageSize ; i = i + this.gridHeight ) {
      this.context.moveTo(0, i - 0.5);
      this.context.lineTo(document.width, i - 0.5);
      this.context.closePath();
    }
    this.context.stroke();
  };
