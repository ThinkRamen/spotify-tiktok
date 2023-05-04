import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Section({ wordObj, observer }) {
	const ref = useRef(null)
	const isInView = useInView(ref)
	const filter = blur(5)

	return (
		<motion.section
			style={{
				opacity: isInView ? 1 : 0,
				filter: isInView ? 'blur(0px)' : 'blur(5px)',
				transition: 'all 1.5s'
			}}
		>
			<h1 ref={ref}>{wordObj.word}</h1>
		</motion.section>
	)
}

export default Section
