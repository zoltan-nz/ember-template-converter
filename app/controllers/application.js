import Ember from 'ember';

export default Ember.Controller.extend({

  handlebar: '',

  precompiled: Ember.computed('handlebar', function() {
    try {
      return Ember.HTMLBars.precompile(this.get('handlebar'));
    } catch(e) {
      console.log(e);
    }
  })

});
