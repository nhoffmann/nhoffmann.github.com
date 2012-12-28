(function() {
  var App;

  jQuery(function() {
    var app;
    app = new App();
    return $('.label').on('click', function(event) {
      return console.log($(this).hasClass('framework'));
    });
  });

  App = (function() {

    function App() {
      this.collect('technology');
      this.collect('framework');
      this.collect('api');
      this.collect('responsibility');
    }

    App.prototype.collect = function(key) {
      var collection, containerSelector, labelSelector;
      labelSelector = "#projects span." + key;
      containerSelector = "#" + (this.pluralize(key)) + " .tags";
      collection = [];
      _.each($(labelSelector), function(element, index, list) {
        return collection.push($(element).html());
      });
      collection = _.uniq(collection);
      collection.sort();
      return _.each(collection, function(element, index, list) {
        return $(containerSelector).append("<span class=\"label " + key + "\">" + element + "</span> ");
      });
    };

    App.prototype.pluralize = function(singular) {
      if (_.last(singular) === 'y') {
        return _.initial(singular).join('') + 'ies';
      }
      return singular + 's';
    };

    return App;

  })();

}).call(this);
