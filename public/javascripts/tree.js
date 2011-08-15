(function($) {
  var undefined;

  $.FractalTree = function(opts) {
    var context,
    cfg = $.extend(true, {
      initX: 400,
      initY: 400,
      max_sub_branch: 24,
      max_sub_angle: (3 * Math.PI/5)/2, //3*Math.PI/4,
      max_size: 12,
      branch_length: 64,
      color: "#fff"
    }, opts);

    R: 50
    G: 95
    B: 35
    function init() {
      if(cfg.canvas !== undefined) {
        context = cfg.canvas.getContext("2d");
        _makeBranch({start_x: cfg.initX
                  , start_y: cfg.initY
                  , length: cfg.branch_length
                  , angle: Math.abs(-Math.PI/2/Math.PI) - 90
                  , size: cfg.max_size
        });
        cfg
      }
    }

    function _makeBranch(opts) {
      if (opts.size > 0) {
        context.lineWidth = opts.size;
        context.strokeStyle = cfg.color;
        context.beginPath();
        context.moveTo(opts.start_x, opts.start_y);

        var end_x = opts.start_x + opts.length * Math.cos(opts.angle);
        var end_y = opts.start_y + opts.length * Math.sin(opts.angle);
        context.lineTo(end_x, end_y);
        context.stroke();

        var sub_branch = Math.random(cfg.max_sub_branch);
        var branch_length_dimin = .5 + Math.random()/2;

        for(var i=0; i < sub_branch; i++) {
          var newLength = opts.length * branch_length_dimin;
          var newAngle = opts.angle + Math.random() * cfg.max_sub_angle - cfg.max_sub_angle / 2;
          var newSize = opts.size - 1;
          _makeBranch({start_x: end_x
                    , start_y: end_y
                    , length: newLength
                    , angle: newAngle
                    , size: newSize});
        }
        context.closePath();
      }
    }

    init();
  };

})(jQuery);

