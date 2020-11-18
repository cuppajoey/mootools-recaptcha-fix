
/*  Quick Dirty Patch for Recaptcha with Mootools 1.2 Compatability Layer
 *
 *  Make sure that all your mootools core/more source is loaded before this
 *  fix is loaded.
 *
 *  @author James Sleeman <james@gogo.co.nz>
 *  @see https://github.com/google/recaptcha/issues/374
 *
 */

// Grab the Mootools 1.2 Compatability bind which mootools replaced
Function.prototype._compatbind = Function.prototype.bind;

// Remove it from the Function prototype
delete Function.prototype.bind;

Function.implement({
  // This is the "polyfill" bind from Mootools 1.3 it should  work the same
  //  as the actual native bind
  _polybind: function(bind){
    var self = this,
      args = (arguments.length > 1) ? Array.slice(arguments, 1) : null;

    return function(){
      if (!args && !arguments.length) return self.call(bind);
      if (args && arguments.length) return self.apply(bind, args.concat(Array.from(arguments)));
      return self.apply(bind, args || arguments);
    };
  },

  // Now if recaptcha calls bind, delegate to the polyfill one
  //   and if anything else calls bind delegate o the 1.2 compatability bind
  //   as was previously the case
  bind: function(bind, args){
    if( (new Error()).stack.match(/recaptcha/) )
    {
      return this._polybind(bind, args);
    }

    return this._compatbind(bind, args);
  }
});
