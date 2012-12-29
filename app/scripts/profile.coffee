jQuery ->
  app = new App();

  $('.label').on('click', (event) ->
    console.log $(@).hasClass('framework')
  );


class App

  constructor: ->
    @collect('technology')
    @collect('framework')
    @collect('api')
    @collect('responsibility')
    # @collect('#projects span.framework', '#frameworks p')
    # @collect('#projects span.api', '#apis p')
    # @collect('#projects span.responsibility', '#responsibilities p')

  collect: (key) ->

    labelSelector = "#projects span.#{key}"
    containerSelector = "##{@pluralize(key)} .tags"

    collection = []
    _.each($(labelSelector), (element, index, list) ->
      collection.push($(element).html())
    )
    collection = _.uniq(collection)
    collection.sort()

    _.each(collection, (element, index, list) ->
      $(containerSelector).append("<span class=\"label #{key}\">#{element}</span> ")
    )

  pluralize: (singular) ->
    if _.last(singular) == 'y'
      return _.initial(singular).join('') + 'ies'
    return singular + 's'
