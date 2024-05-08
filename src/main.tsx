import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	colors: {
		navy: {
			100: '#001233',
		},
		gray: {
			100: '#707480',
		},
		light: {
			100: '#C1C4CD',
		},
		bg: {
			50: '#CADDF1',
			100: '#67A2DC',
			200: '#0466C8',
		},
	},
	fontSizes: {
		xs: '14px',
		sm: '16px',
		md: '21px',
		lg: '28px',
	},
	borderBottomColor: {
		gray: {
			100: '#707480',
		},
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
)
