'use strict';

angular.module('lol.version', [
  'lol.version.interpolate-filter',
  'lol.version.version-directive'
])

.value('version', '0.1');
