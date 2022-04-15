import React from 'react'

export interface ThemeType {
  buttonType: string
}

export const themeContextDefaultValue = {
  buttonType: 'default',
}

export const ThemeContext = React.createContext<ThemeType>(
  themeContextDefaultValue
)
