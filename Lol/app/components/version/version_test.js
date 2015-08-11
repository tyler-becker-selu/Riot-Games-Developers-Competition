'use strict';

describe('lol.version module', function() {
  beforeEach(module('lol.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
