AFRAME.registerComponent('scale-on-mouseleave', {
    schema: {
      to: {default: '2 2 2', type: 'vec3'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;
      this.el.addEventListener('mouseleave', function () {
        console.log("========NOOO========")
        el.object3D.scale.copy(data.to);
      });
    }
  });