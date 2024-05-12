import { createContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return <ThemeContext.Provider value={{ theme: 'light' }}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => ({ theme: 'light' });
