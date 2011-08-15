$(function() {
  var tree = $('#tree');
  $.FractalTree({ color: "#c00"
                , initX: 200
                , initY: 200
                // , branch_length: 58
                // , max_size: 10
                // , max_sub_branch: 6
                , canvas: tree.get(0)
  });
});
