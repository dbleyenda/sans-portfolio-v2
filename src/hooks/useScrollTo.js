import {animate} from 'framer-motion'

export const useScrollTo = (transition) => {
	let isStopped = false

	const onWheel = () => {
		isStopped = true
		window.removeEventListener('wheel', onWheel)
	}

	/*
		* -------------------------------------------------------------------------------------
		* @param `target`
		* -------------------------------------------------------------------------------------
		* References the selector where the scroll should scrollTo
		* Type: `string`
		* Example: `#id`
		* Default value: `null` (meaning that if there is no `target`, no animation will occur)
		*
		* -------------------------------------------------------------------------------------
		* @param `offset`
		* -------------------------------------------------------------------------------------
		* Indicates if some offset is being needed to calculate the scrollTo position
		* Type: `number`
		* Example: `300`
		* Default value: `0`
		*
		* -------------------------------------------------------------------------------------
		* @param `container`
		* -------------------------------------------------------------------------------------
		* References the container that will be doing the scrolling
		* Type: `string`
		* Example: `#container`
		* Default value: `window`
	*/
	const scrollTo = ({target = null, offset = 0, container = window}) => {
		
		container = container !== window ? document.querySelector(container) : window;
		const scrollYProp = container === window ? 'scrollY' : 'scrollTop';
		let y = 0

    if (typeof target === 'string') {
      target = document.querySelector(target)
    }

    if (!target) {
      console.error('useScrollTo hook: Element not found')
      return
    }
      
    y = container[scrollYProp] + target.getBoundingClientRect().top + offset

		window.addEventListener('wheel', onWheel)

		animate(container[scrollYProp], y, {
			...transition,
			onUpdate: (value) => {
				if (!isStopped) {
					container.scroll(0, value)
				}
			},
			onComplete: () => {
				isStopped = false
				window.removeEventListener('wheel', onWheel)
			}
		})

	}

	return scrollTo
}