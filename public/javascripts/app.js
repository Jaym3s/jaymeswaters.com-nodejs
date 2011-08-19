$(function() {
  var grid = new CanvasGrid();
  grid.drawGrid();
  var treeCanvas = $('#tree').attr('height', document.height).attr('width', document.width).get(0);
  $.FractalTree({ color: "#c00"
                , initX: document.width - 200
                , initY: document.height - 200
                , branch_length: 58
                , max_size: 10
                , max_sub_branch: 6
                , canvas: treeCanvas
  });
});
