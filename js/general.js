var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: window.innerWidth / 2,
  endY: window.innerHeight / 2,
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector('#cursor'),
  $outline: document.querySelector('#cursor-outline'),

  init: function() {
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;

    this.setupEventListeners();
    this.animateDotOutline();
  },

  setupEventListeners: function() {
    var self = this;

    function registerMouseEvent(el) {
      el.addEventListener('mouseover', function() {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      el.addEventListener('mouseout', function() {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    }
    // Anchor hovering
    document.querySelectorAll('a').forEach(function(el) {
      registerMouseEvent(el);
    });

    document.querySelectorAll('.top').forEach(function(el) {
      registerMouseEvent(el);
    });

    // Click events
    document.addEventListener('mousedown', function() {
      self.cursorEnlarged = true;
      self.toggleCursorSize();
    });
    document.addEventListener('mouseup', function() {
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });

    document.addEventListener('mousemove', function(e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
      self.$dot.style.top = self.endY + 'px';
      self.$dot.style.left = self.endX + 'px';
    });

    // Hide/show cursor
    document.addEventListener('mouseenter', function(e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    });

    document.addEventListener('mouseleave', function(e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    });
  },

  animateDotOutline: function() {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + 'px';
    self.$outline.style.left = self._x + 'px';

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorSize: function() {
    var self = this;

    if (self.cursorEnlarged) {
      self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
      self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
      self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  },

  toggleCursorVisibility: function() {
    var self = this;

    if (self.cursorVisible) {
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    } else {
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    }
  }
};

cursor.init();

window.transitionToPage = function(href, color) {
  if (color) {
    document.body.style.backgroundColor = color;
  } else {
    document.body.style.backgroundColor = 'var(--ro)';
  }
  document.body.style.opacity = 0;
  setTimeout(function() {
    window.location.href = href;
  }, 500);
};

function AddClass() {
  document.body.className += 'fade-out';
  setTimeout(() => {
    RemoveClass();
  }, 500);
}

document.onload = AddClass();

function RemoveClass() {
  document.body.classList.remove('fade-out');
}

function RegisterMenu() {
  var menu = document.getElementById('menu').getElementsByTagName('a')[0];
  var menuPage = document.getElementById('menu-page');
  if (menu) {
    menuPage.style.display = 'none';
    menu.onclick = function() {
      if (menuPage.style.display == 'none') {
        menuPage.style.display = 'flex';
      } else {
        menuPage.style.display = 'none';
      }
    };
  }
}

RegisterMenu();
