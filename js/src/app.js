
App = Ember.Application.create({
  //LOG_TRANSITIONS: true
});

App.Router.map(function() {
  // put your routes here
  //this.resource('content');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {

    // Move our precompiled handlebars into Ember.TEMPLATE
    $.each($.tmpl, function(templateName, templateData){
      Ember.TEMPLATES[templateName] = Ember.Handlebars.compile(templateData);
    });

  }
});
