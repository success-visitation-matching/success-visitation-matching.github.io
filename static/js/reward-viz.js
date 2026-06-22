$(document).ready(function() {
  var checkpoints = [0, 6300, 6600, 6900, 7200, 7500, 7800, 8100, 8400, 8700, 9000, 9300, 9600, 9900];
  var $slider = $('#reward-viz-slider');
  var $frames = $('.reward-viz-frame');
  var $step = $('#reward-viz-step');

  if (!$slider.length) {
    return;
  }

  $slider.attr('max', checkpoints.length - 1);

  function updateRewardViz(index) {
    var ck = checkpoints[index];
    $frames.each(function() {
      var task = $(this).data('task');
      $(this).attr('src', './static/images/task' + task + '/reward_frames/ck_' + ck + '.png');
    });
    $step.text('Environment steps: ' + ck.toLocaleString());
  }

  $slider.on('input', function() {
    updateRewardViz(parseInt(this.value, 10));
  });

  updateRewardViz(0);
});
