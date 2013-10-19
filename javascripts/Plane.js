// =====================================================
// Plane
// =====================================================
var Plane = (function(){
	function Plane(elm) {
		var $elm = elm,
			hover = false;
		this.init = function(){
			
		}
		
		this.animate = function(){
			if (hover) return;
			$elm.transition({
				perspective: '1000px',
				rotateX: 150*(Math.random()-0.5)+'deg',
				rotateY: 150*(Math.random()-0.5)+'deg',
				rotate: 1000*(Math.random()-0.5)+'deg'
			}, 600, 'easeInOutExpo');
			var f = Math.random();
			if (f < 0.5) return;
			$elm.delay(0).animate({'opacity': '0.2'}, 0)
			$elm.delay(10).animate({'opacity': '1'}, 0)
			$elm.delay(20).animate({'opacity': '0.5'}, 0)
			$elm.delay(30).animate({'opacity': '1'}, 0)
			$elm.delay(40).animate({'opacity': '0.3'}, 0)
			$elm.delay(50).animate({'opacity': '1'}, 0)
		}
		
		this.mon = function(){
			hover = true;
			$elm.stop().transition({
				rotateX: '0deg',
				rotateY: '0deg',
				rotate: '0deg',
				scale:1.2
			}, 200, 'easeOutBack');
		}
		
		this.moff = function(){
			hover = false;
			$elm.stop().transition({
				scale:1.0
			}, 0);
		}
		
		this.alt = $elm.attr('alt');
	}
	return Plane;
})()
