const canvas = document.getElementById("canvas")
const GAME_WIDTH = 800
canvas.width = canvas.height = GAME_WIDTH
const ctx = canvas.getContext('2d')
const BACKGROUND_COLOR = 'black'
ctx.fillstyle = BACKGROUND_COLOR
ctx.fillReact(0, 0, GAME_WIDTH, GAME_WIDTH)