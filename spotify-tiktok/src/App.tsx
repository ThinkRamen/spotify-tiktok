import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import Section from './components/Section'

function App() {
	const [wordObjs, setWordObjs] = useState([])

	useEffect(() => {
		getAllWords()
	}, [])

	const getAllWords = async () => {
		const { data } = await axios.get(
			`https://random-word-api.vercel.app/api?words=${Math.floor(
				Math.random() * 99
			)}`
		)
		const wordObj = data.map((item) => ({
			word: item,
			definition: 'WIP'
		}))

		setWordObjs(wordObj)
	}

	return (
		<div className='container'>
			{wordObjs.map((wordObj, index) => (
				<Section key={index} wordObj={wordObj} observer={observer} />
			))}
		</div>
	)
}

export default App
