import Ember from 'ember';

const {alias} = Ember.computed;

export default Ember.Controller.extend({

  album: alias("model"),
});
