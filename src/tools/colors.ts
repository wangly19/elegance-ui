interface IColor {
  primary: string
  error: string
  success: string
  warning:string
  link: string
  text: string
  border: string
  box: string,
  [propName: string] : string
}

const colors: IColor = {
  primary: '#47A1F6',
  error: '#FF4E00',
  success: '#00C08D',
  warning: 'FFAF4D',
  link: '#9EC8E3',
  text: '#39414B',
  border: '#d9d9d9',
  box: '0 2px 8px rgba(0, 0, 0, 0.15)'
}

export default colors
