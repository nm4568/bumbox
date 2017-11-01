import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    debugger;
    var results = this.store.find('album', params.album_id);
    var albums = $.grep(results.albums, function(e){ return e.id == id; });
    var songs = $.grep(results.songs, function(e){ return e.album == id; });
    return { album: albums, songs: songs};
  }
});
