var socket = io.connect(window.location);
socket.on('twitter', function (data) {
  console.log(data);
});
