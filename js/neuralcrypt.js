function hash(string){
  var hash = 0, i, chr;
  if (string.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

function updateAI(element){
  element.data('oldVal', element.val());
  element.val(element.data('oldVal'));
  $('#input').data('oldVal', element.val());
  $("#decoded").html(element.val());
  $("#encoded").html(hash(element.val()));
}

$(function(){
  $("#input").each(function(){
    var elem = $(this);

    elem.data('oldVal', elem.val());
    updateAI(elem);
    elem.on("propertychange change click keyup input paste", function(event) {
      updateAI(elem);
    });
  });
});
