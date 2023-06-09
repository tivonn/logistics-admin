import lodash from 'lodash'

export const timeout = 500

export const isDev = (): boolean => {
  return process.env.NODE_ENV === 'development'
}

export const isCN = (): boolean => {
  const language = getLocalStorage('language')
  if (!lodash.isEmpty(language)) {
    return language === 'cn'
  } else {
    return true
  }
}

export const getLocalStorage = (key: string) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  } catch (error) {
    return null
  }
}

export const setLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const downloadFile = (data: any, fileName: string) => {
  const url = window.URL.createObjectURL(new Blob([data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
