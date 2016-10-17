function YepNopeDirective() {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.check, function (val) {
        var words = val ? 'yes' : 'fubar';
        element.text(words);
      });
    }
  }
}

module.exports = YepNopeDirective;