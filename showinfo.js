AFRAME.registerComponent('showinfo', {
    schema: {
        title: {
            type: 'string',
            default: 'this is title'
        },
        content: {
            type: 'string',
            default: '??????'
        }
        
    },

    init: function () {
      // Do something when component first attached.
      this.el.setAttribute('class', 'interactable');
    },

    events:  {
        click: function(e) {
            // alert('click!!!!!');
            //get info plane

            let infotitle = document.getElementById
            ('info-title');
            let infocontent = document.getElementById
            ('info-content');
            
            infotitle.setAttribute('value', this.data.
            title);
            infocontent.setAttribute('value', this.data.
            content);

            let infoplane = document.getElementById('infoplane');
            infoplane.setAttribute('visible', 'true'); 
            infoplane.setAttribute('class',
            'interactable');
        }
    }
});



AFRAME.registerComponent('click2hideinfo', {

    events:  {
        click: function(e) {
        
            let infoplane = this.el;
            infoplane.setAttribute('visible', 'false');
            infoplane.setAttribute('class', '');
        }
    }
});
