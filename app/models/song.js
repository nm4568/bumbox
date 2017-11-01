import DS from 'ember-data';

var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
    track: attr('number'),
    name: attr('string'),
    duration: attr('number'),
    url: attr('string'),
    album: belongsTo('album')
});