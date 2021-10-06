export function revealOnScroll(node, options) {	
	const {show, threshold, style} = options
	
	window.addEventListener('scroll', handleScroll)
	
	function handleScroll (evt) {
		if (window.scrollY > show) {
        node.setAttribute(
          'style',
          style
        )
      }
		if(window.scrollY > threshold) {
			window.removeEventListener('scroll', handleScroll)
		}
	}
		
	return {
		destroy() {
			window.removeEventListener('scroll', handleScroll)
		}
	}
	
}