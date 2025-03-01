'use client';
import { useState } from 'react';
import styles from './ThemeSelector.module.css';

enum Theme {
    Vintage = 'vintage',
    Neon = 'neon',
    Retro = 'retro',
    Contrast = 'contrast'
}

const ThemeSelector = () => {
    const themes: Record<Theme, Record<string, string>> = {
        [Theme.Vintage]: {
            ['--border-color']: 'rgba(0,0,0,0.3)',
            ['--background-color']: '#F5F5DC',
            ['--foreground-color']: '#4e5d45',
            ['--header-text-color']: '#3C3D37',
            ['--sub-header-text-color']: '#697565',
            ['--primary-color']: '#E07B39',
            ['--default-color']: 'rgba(0,0,0,0.4)',
            ['--secondary-color']: '#B6A28E',
            ['--link-color']: '#328675',
            ['--selection-color']: '#171717',
        },
        [Theme.Neon]: {
            ['--border-color']: 'rgba(255,255,255,0.3)',
            ['--background-color']: '#140D0D',
            ['--foreground-color']: '#D6D6D6',
            ['--header-text-color']: '#31E1F7',
            ['--sub-header-text-color']: '#8F43EE',
            ['--primary-color']: '#FF7777',
            ['--default-color']: '#68def4bf',
            ['--secondary-color']: '#400D51',
            ['--link-color']: '#A64D79',
            ['--selection-color']: '#D6D6D6',
        },
        [Theme.Retro]: {
            ['--border-color']: 'rgba(0,0,0,0.3)',
            ['--background-color']: '#FFF6E9',
            ['--foreground-color']: '#616161',
            ['--header-text-color']: '#4335A7',
            ['--sub-header-text-color']: '#8A89D3',
            ['--primary-color']: '#FF7F3E',
            ['--secondary-color']: '#80C4E9',
            ['--default-color']: '#3f3da180',
            ['--link-color']: '#219B9D',
            ['--selection-color']: '#171717',
        },
        [Theme.Contrast]: {
            ['--border-color']: 'rgba(0,0,0,0.3)',
            ['--background-color']: '#FFF',
            ['--foreground-color']: '#171717',
            ['--header-text-color']: '#171717',
            ['--sub-header-text-color']: '#444',
            ['--primary-color']: '#171717',
            ['--secondary-color']: '#444',
            ['--default-color']: 'rgba(0,0,0,0.4)',
            ['--link-color']: '#0000EE',
            ['--selection-color']: '#FFF',
        }
    };
    const themeNames: Theme[] = [Theme.Vintage, Theme.Neon, Theme.Retro, Theme.Contrast];
    const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.Vintage);

    const applyTheme = (name: Theme) => {
        const theme = themes[name];
        Object.keys(theme).forEach(key => {
            document.documentElement.style.setProperty(key, theme[key]);
        });
        setCurrentTheme(name);
        // import(`./themes/${name}.css`);
        // Dynamic imports dont get re-applied once downloaded
    };

    return (
        <div className="my-container relative">
            <div className={styles.themeList}>
                <span className={styles.title}>change mood: </span>
                <ul>
                    {themeNames.map((name, index) => <li key={index} className={currentTheme === name ? styles.active : ''} onClick={() => applyTheme(name)}>{name}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default ThemeSelector;