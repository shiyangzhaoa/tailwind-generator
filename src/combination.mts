// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const combination: Record<string, any> = {
  '{"background-clip":"border-box"}': { 'value': 'bg-clip-border' },
  '{"background-clip":"padding-box"}': { 'value': 'bg-clip-padding' },
  '{"background-clip":"content-box"}': { 'value': 'bg-clip-content' },
  '{"background-clip":"text"}': { 'value': 'bg-clip-text' },
  '{"break-before":"auto"}': { 'value': 'break-before-auto' },
  '{"break-before":"avoid"}': { 'value': 'break-before-avoid' },
  '{"break-before":"all"}': { 'value': 'break-before-all' },
  '{"break-before":"avoid-page"}': { 'value': 'break-before-avoid-page' },
  '{"break-before":"page"}': { 'value': 'break-before-page' },
  '{"break-before":"left"}': { 'value': 'break-before-left' },
  '{"break-before":"right"}': { 'value': 'break-before-right' },
  '{"break-before":"column"}': { 'value': 'break-before-column' },
  '{"background-size":"auto"}': { 'value': 'bg-auto' },
  '{"background-size":"cover"}': { 'value': 'bg-cover' },
  '{"background-size":"contain"}': { 'value': 'bg-contain' },
  '{"background-size":"var(<custom-property>)"}': {
    'value': 'bg-size-(<custom-property>)',
  },
  '{"background-size":"<value>"}': { 'value': 'bg-size-[<value>]' },
  '{"transform-origin":"center"}': { 'value': 'origin-center' },
  '{"transform-origin":"top"}': { 'value': 'origin-top' },
  '{"transform-origin":"top right"}': { 'value': 'origin-top-right' },
  '{"transform-origin":"right"}': { 'value': 'origin-right' },
  '{"transform-origin":"bottom right"}': { 'value': 'origin-bottom-right' },
  '{"transform-origin":"bottom"}': { 'value': 'origin-bottom' },
  '{"transform-origin":"bottom left"}': { 'value': 'origin-bottom-left' },
  '{"transform-origin":"left"}': { 'value': 'origin-left' },
  '{"transform-origin":"top left"}': { 'value': 'origin-top-left' },
  '{"transform-origin":"var(<custom-property>)"}': {
    'value': 'origin-(<custom-property>)',
  },
  '{"transform-origin":"<value>"}': { 'value': 'origin-[<value>]' },
  '{"cursor":"auto"}': { 'value': 'cursor-auto' },
  '{"cursor":"default"}': { 'value': 'cursor-default' },
  '{"cursor":"pointer"}': { 'value': 'cursor-pointer' },
  '{"cursor":"wait"}': { 'value': 'cursor-wait' },
  '{"cursor":"text"}': { 'value': 'cursor-text' },
  '{"cursor":"move"}': { 'value': 'cursor-move' },
  '{"cursor":"help"}': { 'value': 'cursor-help' },
  '{"cursor":"not-allowed"}': { 'value': 'cursor-not-allowed' },
  '{"cursor":"none"}': { 'value': 'cursor-none' },
  '{"cursor":"context-menu"}': { 'value': 'cursor-context-menu' },
  '{"cursor":"progress"}': { 'value': 'cursor-progress' },
  '{"cursor":"cell"}': { 'value': 'cursor-cell' },
  '{"cursor":"crosshair"}': { 'value': 'cursor-crosshair' },
  '{"opacity":"<number>%"}': { 'value': 'opacity-<number>' },
  '{"opacity":"var(<custom-property>)"}': {
    'value': 'opacity-(<custom-property>)',
  },
  '{"opacity":"<value>"}': { 'value': 'opacity-[<value>]' },
  '{"cursor":"vertical-text"}': { 'value': 'cursor-vertical-text' },
  '{"cursor":"alias"}': { 'value': 'cursor-alias' },
  '{"cursor":"copy"}': { 'value': 'cursor-copy' },
  '{"cursor":"no-drop"}': { 'value': 'cursor-no-drop' },
  '{"cursor":"grab"}': { 'value': 'cursor-grab' },
  '{"cursor":"grabbing"}': { 'value': 'cursor-grabbing' },
  '{"cursor":"all-scroll"}': { 'value': 'cursor-all-scroll' },
  '{"columns":"<number>"}': { 'value': 'columns-<number>' },
  '{"columns":"var(--container-3xs)"}': { 'value': 'columns-3xs' },
  '{"columns":"var(--container-2xs)"}': { 'value': 'columns-2xs' },
  '{"columns":"var(--container-xs)"}': { 'value': 'columns-xs' },
  '{"columns":"var(--container-sm)"}': { 'value': 'columns-sm' },
  '{"columns":"var(--container-md)"}': { 'value': 'columns-md' },
  '{"columns":"var(--container-lg)"}': { 'value': 'columns-lg' },
  '{"columns":"var(--container-xl)"}': { 'value': 'columns-xl' },
  '{"columns":"var(--container-2xl)"}': { 'value': 'columns-2xl' },
  '{"columns":"var(--container-3xl)"}': { 'value': 'columns-3xl' },
  '{"columns":"var(--container-4xl)"}': { 'value': 'columns-4xl' },
  '{"columns":"var(--container-5xl)"}': { 'value': 'columns-5xl' },
  '{"columns":"var(--container-6xl)"}': { 'value': 'columns-6xl' },
  '{"columns":"var(--container-7xl)"}': { 'value': 'columns-7xl' },
  '{"columns":"auto"}': { 'value': 'columns-auto' },
  '{"columns":"var(<custom-property>)"}': {
    'value': 'columns-(<custom-property>)',
  },
  '{"columns":"<value>"}': { 'value': 'columns-[<value>]' },
  '{"cursor":"col-resize"}': { 'value': 'cursor-col-resize' },
  '{"cursor":"row-resize"}': { 'value': 'cursor-row-resize' },
  '{"cursor":"n-resize"}': { 'value': 'cursor-n-resize' },
  '{"cursor":"e-resize"}': { 'value': 'cursor-e-resize' },
  '{"cursor":"s-resize"}': { 'value': 'cursor-s-resize' },
  '{"cursor":"w-resize"}': { 'value': 'cursor-w-resize' },
  '{"cursor":"ne-resize"}': { 'value': 'cursor-ne-resize' },
  '{"cursor":"nw-resize"}': { 'value': 'cursor-nw-resize' },
  '{"cursor":"se-resize"}': { 'value': 'cursor-se-resize' },
  '{"cursor":"sw-resize"}': { 'value': 'cursor-sw-resize' },
  '{"cursor":"ew-resize"}': { 'value': 'cursor-ew-resize' },
  '{"cursor":"ns-resize"}': { 'value': 'cursor-ns-resize' },
  '{"cursor":"nesw-resize"}': { 'value': 'cursor-nesw-resize' },
  '{"cursor":"nwse-resize"}': { 'value': 'cursor-nwse-resize' },
  '{"cursor":"zoom-in"}': { 'value': 'cursor-zoom-in' },
  '{"cursor":"zoom-out"}': { 'value': 'cursor-zoom-out' },
  '{"cursor":"var(<custom-property>)"}': {
    'value': 'cursor-(<custom-property>)',
  },
  '{"cursor":"<value>"}': { 'value': 'cursor-[<value>]' },
  '{"object-fit":"contain"}': { 'value': 'object-contain' },
  '{"object-fit":"cover"}': { 'value': 'object-cover' },
  '{"object-fit":"fill"}': { 'value': 'object-fill' },
  '{"object-fit":"none"}': { 'value': 'object-none' },
  '{"object-fit":"scale-down"}': { 'value': 'object-scale-down' },
  '{"break-after":"auto"}': { 'value': 'break-after-auto' },
  '{"break-after":"avoid"}': { 'value': 'break-after-avoid' },
  '{"break-after":"all"}': { 'value': 'break-after-all' },
  '{"break-after":"avoid-page"}': { 'value': 'break-after-avoid-page' },
  '{"break-after":"page"}': { 'value': 'break-after-page' },
  '{"break-after":"left"}': { 'value': 'break-after-left' },
  '{"break-after":"right"}': { 'value': 'break-after-right' },
  '{"break-after":"column"}': { 'value': 'break-after-column' },
  '{"outline-color":"inherit"}': { 'value': 'outline-inherit' },
  '{"outline-color":"currentColor"}': { 'value': 'outline-current' },
  '{"outline-color":"transparent"}': { 'value': 'outline-transparent' },
  '{"outline-color":"var(--color-black)"}': { 'value': 'outline-black' },
  '{"outline-color":"var(--color-white)"}': { 'value': 'outline-white' },
  '{"outline-color":"var(--color-red-50)"}': { 'value': 'outline-red-50' },
  '{"outline-color":"var(--color-red-100)"}': { 'value': 'outline-red-100' },
  '{"outline-color":"var(--color-red-200)"}': { 'value': 'outline-red-200' },
  '{"outline-color":"var(--color-red-300)"}': { 'value': 'outline-red-300' },
  '{"outline-color":"var(--color-red-400)"}': { 'value': 'outline-red-400' },
  '{"outline-color":"var(--color-red-500)"}': { 'value': 'outline-red-500' },
  '{"outline-color":"var(--color-red-600)"}': { 'value': 'outline-red-600' },
  '{"outline-color":"var(--color-red-700)"}': { 'value': 'outline-red-700' },
  '{"outline-color":"var(--color-red-800)"}': { 'value': 'outline-red-800' },
  '{"outline-color":"var(--color-red-900)"}': { 'value': 'outline-red-900' },
  '{"outline-color":"var(--color-red-950)"}': { 'value': 'outline-red-950' },
  '{"outline-color":"var(--color-orange-50)"}': {
    'value': 'outline-orange-50',
  },
  '{"outline-color":"var(--color-orange-100)"}': {
    'value': 'outline-orange-100',
  },
  '{"outline-color":"var(--color-orange-200)"}': {
    'value': 'outline-orange-200',
  },
  '{"outline-color":"var(--color-orange-300)"}': {
    'value': 'outline-orange-300',
  },
  '{"outline-color":"var(--color-orange-400)"}': {
    'value': 'outline-orange-400',
  },
  '{"outline-color":"var(--color-orange-500)"}': {
    'value': 'outline-orange-500',
  },
  '{"outline-color":"var(--color-orange-600)"}': {
    'value': 'outline-orange-600',
  },
  '{"outline-color":"var(--color-orange-700)"}': {
    'value': 'outline-orange-700',
  },
  '{"outline-color":"var(--color-orange-800)"}': {
    'value': 'outline-orange-800',
  },
  '{"outline-color":"var(--color-orange-900)"}': {
    'value': 'outline-orange-900',
  },
  '{"outline-color":"var(--color-orange-950)"}': {
    'value': 'outline-orange-950',
  },
  '{"outline-color":"var(--color-amber-50)"}': { 'value': 'outline-amber-50' },
  '{"outline-color":"var(--color-amber-100)"}': {
    'value': 'outline-amber-100',
  },
  '{"outline-color":"var(--color-amber-200)"}': {
    'value': 'outline-amber-200',
  },
  '{"outline-color":"var(--color-amber-300)"}': {
    'value': 'outline-amber-300',
  },
  '{"outline-color":"var(--color-amber-400)"}': {
    'value': 'outline-amber-400',
  },
  '{"outline-color":"var(--color-amber-500)"}': {
    'value': 'outline-amber-500',
  },
  '{"outline-color":"var(--color-amber-600)"}': {
    'value': 'outline-amber-600',
  },
  '{"box-sizing":"border-box"}': { 'value': 'box-border' },
  '{"forced-color-adjust":"auto"}': { 'value': 'forced-color-adjust-auto' },
  '{"forced-color-adjust":"none"}': { 'value': 'forced-color-adjust-none' },
  '{"outline-color":"var(--color-amber-700)"}': {
    'value': 'outline-amber-700',
  },
  '{"outline-color":"var(--color-amber-800)"}': {
    'value': 'outline-amber-800',
  },
  '{"box-sizing":"content-box"}': { 'value': 'box-content' },
  '{"outline-color":"var(--color-amber-900)"}': {
    'value': 'outline-amber-900',
  },
  '{"outline-color":"var(--color-amber-950)"}': {
    'value': 'outline-amber-950',
  },
  '{"outline-color":"var(--color-yellow-50)"}': {
    'value': 'outline-yellow-50',
  },
  '{"outline-color":"var(--color-yellow-100)"}': {
    'value': 'outline-yellow-100',
  },
  '{"break-inside":"auto"}': { 'value': 'break-inside-auto' },
  '{"outline-color":"var(--color-yellow-200)"}': {
    'value': 'outline-yellow-200',
  },
  '{"outline-color":"var(--color-yellow-300)"}': {
    'value': 'outline-yellow-300',
  },
  '{"outline-color":"var(--color-yellow-400)"}': {
    'value': 'outline-yellow-400',
  },
  '{"outline-color":"var(--color-yellow-500)"}': {
    'value': 'outline-yellow-500',
  },
  '{"outline-color":"var(--color-yellow-600)"}': {
    'value': 'outline-yellow-600',
  },
  '{"outline-color":"var(--color-yellow-700)"}': {
    'value': 'outline-yellow-700',
  },
  '{"outline-color":"var(--color-yellow-800)"}': {
    'value': 'outline-yellow-800',
  },
  '{"outline-color":"var(--color-yellow-900)"}': {
    'value': 'outline-yellow-900',
  },
  '{"outline-color":"var(--color-yellow-950)"}': {
    'value': 'outline-yellow-950',
  },
  '{"outline-color":"var(--color-lime-50)"}': { 'value': 'outline-lime-50' },
  '{"outline-color":"var(--color-lime-100)"}': { 'value': 'outline-lime-100' },
  '{"outline-color":"var(--color-lime-200)"}': { 'value': 'outline-lime-200' },
  '{"break-inside":"avoid"}': { 'value': 'break-inside-avoid' },
  '{"outline-color":"var(--color-lime-300)"}': { 'value': 'outline-lime-300' },
  '{"outline-color":"var(--color-lime-400)"}': { 'value': 'outline-lime-400' },
  '{"outline-color":"var(--color-lime-500)"}': { 'value': 'outline-lime-500' },
  '{"break-inside":"avoid-page"}': { 'value': 'break-inside-avoid-page' },
  '{"outline-color":"var(--color-lime-600)"}': { 'value': 'outline-lime-600' },
  '{"outline-color":"var(--color-lime-700)"}': { 'value': 'outline-lime-700' },
  '{"outline-color":"var(--color-lime-800)"}': { 'value': 'outline-lime-800' },
  '{"outline-color":"var(--color-lime-900)"}': { 'value': 'outline-lime-900' },
  '{"outline-color":"var(--color-lime-950)"}': { 'value': 'outline-lime-950' },
  '{"outline-color":"var(--color-green-50)"}': { 'value': 'outline-green-50' },
  '{"outline-color":"var(--color-green-100)"}': {
    'value': 'outline-green-100',
  },
  '{"outline-color":"var(--color-green-200)"}': {
    'value': 'outline-green-200',
  },
  '{"outline-color":"var(--color-green-300)"}': {
    'value': 'outline-green-300',
  },
  '{"outline-color":"var(--color-green-400)"}': {
    'value': 'outline-green-400',
  },
  '{"outline-color":"var(--color-green-500)"}': {
    'value': 'outline-green-500',
  },
  '{"outline-color":"var(--color-green-600)"}': {
    'value': 'outline-green-600',
  },
  '{"outline-color":"var(--color-green-700)"}': {
    'value': 'outline-green-700',
  },
  '{"outline-color":"var(--color-green-800)"}': {
    'value': 'outline-green-800',
  },
  '{"outline-color":"var(--color-green-900)"}': {
    'value': 'outline-green-900',
  },
  '{"outline-color":"var(--color-green-950)"}': {
    'value': 'outline-green-950',
  },
  '{"outline-color":"var(--color-emerald-50)"}': {
    'value': 'outline-emerald-50',
  },
  '{"outline-color":"var(--color-emerald-100)"}': {
    'value': 'outline-emerald-100',
  },
  '{"outline-color":"var(--color-emerald-200)"}': {
    'value': 'outline-emerald-200',
  },
  '{"outline-color":"var(--color-emerald-300)"}': {
    'value': 'outline-emerald-300',
  },
  '{"outline-color":"var(--color-emerald-400)"}': {
    'value': 'outline-emerald-400',
  },
  '{"outline-color":"var(--color-emerald-500)"}': {
    'value': 'outline-emerald-500',
  },
  '{"outline-color":"var(--color-emerald-600)"}': {
    'value': 'outline-emerald-600',
  },
  '{"outline-color":"var(--color-emerald-700)"}': {
    'value': 'outline-emerald-700',
  },
  '{"outline-color":"var(--color-emerald-800)"}': {
    'value': 'outline-emerald-800',
  },
  '{"outline-color":"var(--color-emerald-900)"}': {
    'value': 'outline-emerald-900',
  },
  '{"outline-color":"var(--color-emerald-950)"}': {
    'value': 'outline-emerald-950',
  },
  '{"outline-color":"var(--color-teal-50)"}': { 'value': 'outline-teal-50' },
  '{"outline-color":"var(--color-teal-100)"}': { 'value': 'outline-teal-100' },
  '{"outline-color":"var(--color-teal-200)"}': { 'value': 'outline-teal-200' },
  '{"outline-color":"var(--color-teal-300)"}': { 'value': 'outline-teal-300' },
  '{"outline-color":"var(--color-teal-400)"}': { 'value': 'outline-teal-400' },
  '{"outline-color":"var(--color-teal-500)"}': { 'value': 'outline-teal-500' },
  '{"outline-color":"var(--color-teal-600)"}': { 'value': 'outline-teal-600' },
  '{"outline-color":"var(--color-teal-700)"}': { 'value': 'outline-teal-700' },
  '{"outline-color":"var(--color-teal-800)"}': { 'value': 'outline-teal-800' },
  '{"outline-color":"var(--color-teal-900)"}': { 'value': 'outline-teal-900' },
  '{"outline-color":"var(--color-teal-950)"}': { 'value': 'outline-teal-950' },
  '{"outline-color":"var(--color-cyan-50)"}': { 'value': 'outline-cyan-50' },
  '{"outline-color":"var(--color-cyan-100)"}': { 'value': 'outline-cyan-100' },
  '{"outline-color":"var(--color-cyan-200)"}': { 'value': 'outline-cyan-200' },
  '{"outline-color":"var(--color-cyan-300)"}': { 'value': 'outline-cyan-300' },
  '{"outline-color":"var(--color-cyan-400)"}': { 'value': 'outline-cyan-400' },
  '{"outline-color":"var(--color-cyan-500)"}': { 'value': 'outline-cyan-500' },
  '{"outline-color":"var(--color-cyan-600)"}': { 'value': 'outline-cyan-600' },
  '{"outline-color":"var(--color-cyan-700)"}': { 'value': 'outline-cyan-700' },
  '{"outline-color":"var(--color-cyan-800)"}': { 'value': 'outline-cyan-800' },
  '{"outline-color":"var(--color-cyan-900)"}': { 'value': 'outline-cyan-900' },
  '{"outline-color":"var(--color-cyan-950)"}': { 'value': 'outline-cyan-950' },
  '{"outline-color":"var(--color-sky-50)"}': { 'value': 'outline-sky-50' },
  '{"outline-color":"var(--color-sky-100)"}': { 'value': 'outline-sky-100' },
  '{"outline-color":"var(--color-sky-200)"}': { 'value': 'outline-sky-200' },
  '{"outline-color":"var(--color-sky-300)"}': { 'value': 'outline-sky-300' },
  '{"outline-color":"var(--color-sky-400)"}': { 'value': 'outline-sky-400' },
  '{"outline-color":"var(--color-sky-500)"}': { 'value': 'outline-sky-500' },
  '{"outline-color":"var(--color-sky-600)"}': { 'value': 'outline-sky-600' },
  '{"outline-color":"var(--color-sky-700)"}': { 'value': 'outline-sky-700' },
  '{"outline-color":"var(--color-sky-800)"}': { 'value': 'outline-sky-800' },
  '{"break-inside":"avoid-column"}': { 'value': 'break-inside-avoid-column' },
  '{"user-select":"none"}': { 'value': 'select-none' },
  '{"outline-color":"var(--color-sky-900)"}': { 'value': 'outline-sky-900' },
  '{"user-select":"text"}': { 'value': 'select-text' },
  '{"user-select":"all"}': { 'value': 'select-all' },
  '{"user-select":"auto"}': { 'value': 'select-auto' },
  '{"outline-color":"var(--color-sky-950)"}': { 'value': 'outline-sky-950' },
  '{"outline-color":"var(--color-blue-50)"}': { 'value': 'outline-blue-50' },
  '{"outline-color":"var(--color-blue-100)"}': { 'value': 'outline-blue-100' },
  '{"outline-color":"var(--color-blue-200)"}': { 'value': 'outline-blue-200' },
  '{"outline-color":"var(--color-blue-300)"}': { 'value': 'outline-blue-300' },
  '{"outline-color":"var(--color-blue-400)"}': { 'value': 'outline-blue-400' },
  '{"outline-color":"var(--color-blue-500)"}': { 'value': 'outline-blue-500' },
  '{"outline-color":"var(--color-blue-600)"}': { 'value': 'outline-blue-600' },
  '{"outline-color":"var(--color-blue-700)"}': { 'value': 'outline-blue-700' },
  '{"outline-color":"var(--color-blue-800)"}': { 'value': 'outline-blue-800' },
  '{"outline-color":"var(--color-blue-900)"}': { 'value': 'outline-blue-900' },
  '{"outline-color":"var(--color-blue-950)"}': { 'value': 'outline-blue-950' },
  '{"outline-color":"var(--color-indigo-50)"}': {
    'value': 'outline-indigo-50',
  },
  '{"outline-color":"var(--color-indigo-100)"}': {
    'value': 'outline-indigo-100',
  },
  '{"outline-color":"var(--color-indigo-200)"}': {
    'value': 'outline-indigo-200',
  },
  '{"outline-color":"var(--color-indigo-300)"}': {
    'value': 'outline-indigo-300',
  },
  '{"outline-color":"var(--color-indigo-400)"}': {
    'value': 'outline-indigo-400',
  },
  '{"outline-color":"var(--color-indigo-500)"}': {
    'value': 'outline-indigo-500',
  },
  '{"outline-color":"var(--color-indigo-600)"}': {
    'value': 'outline-indigo-600',
  },
  '{"outline-color":"var(--color-indigo-700)"}': {
    'value': 'outline-indigo-700',
  },
  '{"outline-color":"var(--color-indigo-800)"}': {
    'value': 'outline-indigo-800',
  },
  '{"outline-color":"var(--color-indigo-900)"}': {
    'value': 'outline-indigo-900',
  },
  '{"outline-color":"var(--color-indigo-950)"}': {
    'value': 'outline-indigo-950',
  },
  '{"outline-color":"var(--color-violet-50)"}': {
    'value': 'outline-violet-50',
  },
  '{"outline-color":"var(--color-violet-100)"}': {
    'value': 'outline-violet-100',
  },
  '{"outline-color":"var(--color-violet-200)"}': {
    'value': 'outline-violet-200',
  },
  '{"outline-color":"var(--color-violet-300)"}': {
    'value': 'outline-violet-300',
  },
  '{"outline-color":"var(--color-violet-400)"}': {
    'value': 'outline-violet-400',
  },
  '{"outline-color":"var(--color-violet-500)"}': {
    'value': 'outline-violet-500',
  },
  '{"outline-color":"var(--color-violet-600)"}': {
    'value': 'outline-violet-600',
  },
  '{"outline-color":"var(--color-violet-700)"}': {
    'value': 'outline-violet-700',
  },
  '{"outline-color":"var(--color-violet-800)"}': {
    'value': 'outline-violet-800',
  },
  '{"outline-color":"var(--color-violet-900)"}': {
    'value': 'outline-violet-900',
  },
  '{"outline-color":"var(--color-violet-950)"}': {
    'value': 'outline-violet-950',
  },
  '{"outline-color":"var(--color-purple-50)"}': {
    'value': 'outline-purple-50',
  },
  '{"outline-color":"var(--color-purple-100)"}': {
    'value': 'outline-purple-100',
  },
  '{"outline-color":"var(--color-purple-200)"}': {
    'value': 'outline-purple-200',
  },
  '{"outline-color":"var(--color-purple-300)"}': {
    'value': 'outline-purple-300',
  },
  '{"outline-color":"var(--color-purple-400)"}': {
    'value': 'outline-purple-400',
  },
  '{"outline-color":"var(--color-purple-500)"}': {
    'value': 'outline-purple-500',
  },
  '{"outline-color":"var(--color-purple-600)"}': {
    'value': 'outline-purple-600',
  },
  '{"outline-color":"var(--color-purple-700)"}': {
    'value': 'outline-purple-700',
  },
  '{"outline-color":"var(--color-purple-800)"}': {
    'value': 'outline-purple-800',
  },
  '{"outline-color":"var(--color-purple-900)"}': {
    'value': 'outline-purple-900',
  },
  '{"outline-color":"var(--color-purple-950)"}': {
    'value': 'outline-purple-950',
  },
  '{"outline-color":"var(--color-fuchsia-50)"}': {
    'value': 'outline-fuchsia-50',
  },
  '{"outline-color":"var(--color-fuchsia-100)"}': {
    'value': 'outline-fuchsia-100',
  },
  '{"outline-color":"var(--color-fuchsia-200)"}': {
    'value': 'outline-fuchsia-200',
  },
  '{"outline-color":"var(--color-fuchsia-300)"}': {
    'value': 'outline-fuchsia-300',
  },
  '{"outline-color":"var(--color-fuchsia-400)"}': {
    'value': 'outline-fuchsia-400',
  },
  '{"outline-color":"var(--color-fuchsia-500)"}': {
    'value': 'outline-fuchsia-500',
  },
  '{"outline-color":"var(--color-fuchsia-600)"}': {
    'value': 'outline-fuchsia-600',
  },
  '{"outline-color":"var(--color-fuchsia-700)"}': {
    'value': 'outline-fuchsia-700',
  },
  '{"outline-color":"var(--color-fuchsia-800)"}': {
    'value': 'outline-fuchsia-800',
  },
  '{"outline-color":"var(--color-fuchsia-900)"}': {
    'value': 'outline-fuchsia-900',
  },
  '{"outline-color":"var(--color-fuchsia-950)"}': {
    'value': 'outline-fuchsia-950',
  },
  '{"outline-color":"var(--color-pink-50)"}': { 'value': 'outline-pink-50' },
  '{"outline-color":"var(--color-pink-100)"}': { 'value': 'outline-pink-100' },
  '{"outline-color":"var(--color-pink-200)"}': { 'value': 'outline-pink-200' },
  '{"outline-color":"var(--color-pink-300)"}': { 'value': 'outline-pink-300' },
  '{"outline-color":"var(--color-pink-400)"}': { 'value': 'outline-pink-400' },
  '{"outline-color":"var(--color-pink-500)"}': { 'value': 'outline-pink-500' },
  '{"outline-color":"var(--color-pink-600)"}': { 'value': 'outline-pink-600' },
  '{"outline-color":"var(--color-pink-700)"}': { 'value': 'outline-pink-700' },
  '{"outline-color":"var(--color-pink-800)"}': { 'value': 'outline-pink-800' },
  '{"outline-color":"var(--color-pink-900)"}': { 'value': 'outline-pink-900' },
  '{"outline-color":"var(--color-pink-950)"}': { 'value': 'outline-pink-950' },
  '{"outline-color":"var(--color-rose-50)"}': { 'value': 'outline-rose-50' },
  '{"outline-color":"var(--color-rose-100)"}': { 'value': 'outline-rose-100' },
  '{"outline-color":"var(--color-rose-200)"}': { 'value': 'outline-rose-200' },
  '{"outline-color":"var(--color-rose-300)"}': { 'value': 'outline-rose-300' },
  '{"outline-color":"var(--color-rose-400)"}': { 'value': 'outline-rose-400' },
  '{"outline-color":"var(--color-rose-500)"}': { 'value': 'outline-rose-500' },
  '{"outline-color":"var(--color-rose-600)"}': { 'value': 'outline-rose-600' },
  '{"outline-color":"var(--color-rose-700)"}': { 'value': 'outline-rose-700' },
  '{"outline-color":"var(--color-rose-800)"}': { 'value': 'outline-rose-800' },
  '{"outline-color":"var(--color-rose-900)"}': { 'value': 'outline-rose-900' },
  '{"outline-color":"var(--color-rose-950)"}': { 'value': 'outline-rose-950' },
  '{"outline-color":"var(--color-slate-50)"}': { 'value': 'outline-slate-50' },
  '{"outline-color":"var(--color-slate-100)"}': {
    'value': 'outline-slate-100',
  },
  '{"outline-color":"var(--color-slate-200)"}': {
    'value': 'outline-slate-200',
  },
  '{"outline-color":"var(--color-slate-300)"}': {
    'value': 'outline-slate-300',
  },
  '{"outline-color":"var(--color-slate-400)"}': {
    'value': 'outline-slate-400',
  },
  '{"outline-color":"var(--color-slate-500)"}': {
    'value': 'outline-slate-500',
  },
  '{"outline-color":"var(--color-slate-600)"}': {
    'value': 'outline-slate-600',
  },
  '{"outline-color":"var(--color-slate-700)"}': {
    'value': 'outline-slate-700',
  },
  '{"outline-color":"var(--color-slate-800)"}': {
    'value': 'outline-slate-800',
  },
  '{"outline-color":"var(--color-slate-900)"}': {
    'value': 'outline-slate-900',
  },
  '{"outline-color":"var(--color-slate-950)"}': {
    'value': 'outline-slate-950',
  },
  '{"outline-color":"var(--color-gray-50)"}': { 'value': 'outline-gray-50' },
  '{"outline-color":"var(--color-gray-100)"}': { 'value': 'outline-gray-100' },
  '{"outline-color":"var(--color-gray-200)"}': { 'value': 'outline-gray-200' },
  '{"outline-color":"var(--color-gray-300)"}': { 'value': 'outline-gray-300' },
  '{"outline-color":"var(--color-gray-400)"}': { 'value': 'outline-gray-400' },
  '{"outline-color":"var(--color-gray-500)"}': { 'value': 'outline-gray-500' },
  '{"outline-color":"var(--color-gray-600)"}': { 'value': 'outline-gray-600' },
  '{"outline-color":"var(--color-gray-700)"}': { 'value': 'outline-gray-700' },
  '{"outline-color":"var(--color-gray-800)"}': { 'value': 'outline-gray-800' },
  '{"outline-color":"var(--color-gray-900)"}': { 'value': 'outline-gray-900' },
  '{"outline-color":"var(--color-gray-950)"}': { 'value': 'outline-gray-950' },
  '{"outline-color":"var(--color-zinc-50)"}': { 'value': 'outline-zinc-50' },
  '{"outline-color":"var(--color-zinc-100)"}': { 'value': 'outline-zinc-100' },
  '{"outline-color":"var(--color-zinc-200)"}': { 'value': 'outline-zinc-200' },
  '{"outline-color":"var(--color-zinc-300)"}': { 'value': 'outline-zinc-300' },
  '{"outline-color":"var(--color-zinc-400)"}': { 'value': 'outline-zinc-400' },
  '{"outline-color":"var(--color-zinc-500)"}': { 'value': 'outline-zinc-500' },
  '{"outline-color":"var(--color-zinc-600)"}': { 'value': 'outline-zinc-600' },
  '{"outline-color":"var(--color-zinc-700)"}': { 'value': 'outline-zinc-700' },
  '{"outline-color":"var(--color-zinc-800)"}': { 'value': 'outline-zinc-800' },
  '{"outline-color":"var(--color-zinc-900)"}': { 'value': 'outline-zinc-900' },
  '{"outline-color":"var(--color-zinc-950)"}': { 'value': 'outline-zinc-950' },
  '{"outline-color":"var(--color-neutral-50)"}': {
    'value': 'outline-neutral-50',
  },
  '{"outline-color":"var(--color-neutral-100)"}': {
    'value': 'outline-neutral-100',
  },
  '{"outline-color":"var(--color-neutral-200)"}': {
    'value': 'outline-neutral-200',
  },
  '{"outline-color":"var(--color-neutral-300)"}': {
    'value': 'outline-neutral-300',
  },
  '{"outline-color":"var(--color-neutral-400)"}': {
    'value': 'outline-neutral-400',
  },
  '{"outline-color":"var(--color-neutral-500)"}': {
    'value': 'outline-neutral-500',
  },
  '{"outline-color":"var(--color-neutral-600)"}': {
    'value': 'outline-neutral-600',
  },
  '{"clear":"left"}': { 'value': 'clear-left' },
  '{"clear":"right"}': { 'value': 'clear-right' },
  '{"clear":"both"}': { 'value': 'clear-both' },
  '{"clear":"inline-start"}': { 'value': 'clear-start' },
  '{"clear":"inline-end"}': { 'value': 'clear-end' },
  '{"clear":"none"}': { 'value': 'clear-none' },
  '{"outline-color":"var(--color-neutral-700)"}': {
    'value': 'outline-neutral-700',
  },
  '{"outline-color":"var(--color-neutral-800)"}': {
    'value': 'outline-neutral-800',
  },
  '{"outline-color":"var(--color-neutral-900)"}': {
    'value': 'outline-neutral-900',
  },
  '{"outline-color":"var(--color-neutral-950)"}': {
    'value': 'outline-neutral-950',
  },
  '{"outline-color":"var(--color-stone-50)"}': { 'value': 'outline-stone-50' },
  '{"outline-color":"var(--color-stone-100)"}': {
    'value': 'outline-stone-100',
  },
  '{"outline-color":"var(--color-stone-200)"}': {
    'value': 'outline-stone-200',
  },
  '{"outline-color":"var(--color-stone-300)"}': {
    'value': 'outline-stone-300',
  },
  '{"outline-color":"var(--color-stone-400)"}': {
    'value': 'outline-stone-400',
  },
  '{"outline-color":"var(--color-stone-500)"}': {
    'value': 'outline-stone-500',
  },
  '{"outline-color":"var(--color-stone-600)"}': {
    'value': 'outline-stone-600',
  },
  '{"outline-color":"var(--color-stone-700)"}': {
    'value': 'outline-stone-700',
  },
  '{"outline-color":"var(--color-stone-800)"}': {
    'value': 'outline-stone-800',
  },
  '{"outline-color":"var(--color-stone-900)"}': {
    'value': 'outline-stone-900',
  },
  '{"outline-color":"var(--color-stone-950)"}': {
    'value': 'outline-stone-950',
  },
  '{"outline-color":"var(<custom-property>)"}': {
    'value': 'outline-(<custom-property>)',
  },
  '{"outline-color":"<value>"}': { 'value': 'outline-[<value>]' },
  '{"translate":"calc(var(--spacing) * <number>) calc(var(--spacing) * <number>)"}':
    { 'value': 'translate-<number>' },
  '{"translate":"calc(var(--spacing) * -<number>) calc(var(--spacing) * -<number>)"}':
    { 'value': '-translate-<number>' },
  '{"translate":"calc(<fraction> * 100%) calc(<fraction> * 100%)"}': {
    'value': 'translate-<fraction>',
  },
  '{"translate":"calc(<fraction> * -100%) calc(<fraction> * -100%)"}': {
    'value': '-translate-<fraction>',
  },
  '{"translate":"100% 100%"}': { 'value': 'translate-full' },
  '{"translate":"-100% -100%"}': { 'value': '-translate-full' },
  '{"translate":"1px 1px"}': { 'value': 'translate-px' },
  '{"translate":"-1px -1px"}': { 'value': '-translate-px' },
  '{"translate":"var(<custom-property>) var(<custom-property>)"}': {
    'value': 'translate-(<custom-property>)',
  },
  '{"translate":"<value> <value>"}': { 'value': 'translate-[<value>]' },
  '{"translate":"calc(var(--spacing) * <number>) var(--tw-translate-y)"}': {
    'value': 'translate-x-<number>',
  },
  '{"translate":"calc(var(--spacing) * -<number>) var(--tw-translate-y)"}': {
    'value': '-translate-x-<number>',
  },
  '{"translate":"calc(<fraction> * 100%) var(--tw-translate-y)"}': {
    'value': 'translate-x-<fraction>',
  },
  '{"translate":"calc(<fraction> * -100%) var(--tw-translate-y)"}': {
    'value': '-translate-x-<fraction>',
  },
  '{"translate":"100% var(--tw-translate-y)"}': { 'value': 'translate-x-full' },
  '{"translate":"-100% var(--tw-translate-y)"}': {
    'value': '-translate-x-full',
  },
  '{"translate":"1px var(--tw-translate-y)"}': { 'value': 'translate-x-px' },
  '{"translate":"-1px var(--tw-translate-y)"}': { 'value': '-translate-x-px' },
  '{"translate":"var(<custom-property>) var(--tw-translate-y)"}': {
    'value': 'translate-x-(<custom-property>)',
  },
  '{"translate":"<value> var(--tw-translate-y)"}': {
    'value': 'translate-x-[<value>]',
  },
  '{"translate":"var(--tw-translate-x) calc(var(--spacing) * <number>)"}': {
    'value': 'translate-y-<number>',
  },
  '{"translate":"var(--tw-translate-x) calc(var(--spacing) * -<number>)"}': {
    'value': '-translate-y-<number>',
  },
  '{"translate":"var(--tw-translate-x) calc(<fraction> * 100%)"}': {
    'value': 'translate-y-<fraction>',
  },
  '{"translate":"var(--tw-translate-x) calc(<fraction> * -100%)"}': {
    'value': '-translate-y-<fraction>',
  },
  '{"translate":"var(--tw-translate-x) 100%"}': { 'value': 'translate-y-full' },
  '{"translate":"var(--tw-translate-x) -100%"}': {
    'value': '-translate-y-full',
  },
  '{"translate":"var(--tw-translate-x) 1px"}': { 'value': 'translate-y-px' },
  '{"translate":"var(--tw-translate-x) -1px"}': { 'value': '-translate-y-px' },
  '{"translate":"var(--tw-translate-x) var(<custom-property>)"}': {
    'value': 'translate-y-(<custom-property>)',
  },
  '{"translate":"var(--tw-translate-x) <value>"}': {
    'value': 'translate-y-[<value>]',
  },
  '{"translate":"var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * <number>)"}':
    { 'value': 'translate-z-<number>' },
  '{"translate":"var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * -<number>)"}':
    { 'value': '-translate-z-<number>' },
  '{"translate":"var(--tw-translate-x) var(--tw-translate-y) 1px"}': {
    'value': 'translate-z-px',
  },
  '{"translate":"var(--tw-translate-x) var(--tw-translate-y) -1px"}': {
    'value': '-translate-z-px',
  },
  '{"translate":"var(--tw-translate-x) var(--tw-translate-y) var(<custom-property>)"}':
    { 'value': 'translate-z-(<custom-property>)' },
  '{"translate":"var(--tw-translate-x) var(--tw-translate-y) <value>"}': {
    'value': 'translate-z-[<value>]',
  },
  '{"translate":"none"}': { 'value': 'translate-none' },
  '{"box-decoration-break":"clone"}': { 'value': 'box-decoration-clone' },
  '{"box-decoration-break":"slice"}': { 'value': 'box-decoration-slice' },
  '{"transition-duration":"<number>ms"}': { 'value': 'duration-<number>' },
  '{"transition-duration":"initial"}': { 'value': 'duration-initial' },
  '{"transition-duration":"var(<custom-property>)"}': {
    'value': 'duration-(<custom-property>)',
  },
  '{"transition-duration":"<value>"}': { 'value': 'duration-[<value>]' },
  '{"caret-color":"inherit"}': { 'value': 'caret-inherit' },
  '{"caret-color":"currentColor"}': { 'value': 'caret-current' },
  '{"caret-color":"transparent"}': { 'value': 'caret-transparent' },
  '{"caret-color":"var(--color-black)"}': { 'value': 'caret-black' },
  '{"caret-color":"var(--color-white)"}': { 'value': 'caret-white' },
  '{"caret-color":"var(--color-red-50)"}': { 'value': 'caret-red-50' },
  '{"caret-color":"var(--color-red-100)"}': { 'value': 'caret-red-100' },
  '{"caret-color":"var(--color-red-200)"}': { 'value': 'caret-red-200' },
  '{"caret-color":"var(--color-red-300)"}': { 'value': 'caret-red-300' },
  '{"caret-color":"var(--color-red-400)"}': { 'value': 'caret-red-400' },
  '{"caret-color":"var(--color-red-500)"}': { 'value': 'caret-red-500' },
  '{"caret-color":"var(--color-red-600)"}': { 'value': 'caret-red-600' },
  '{"caret-color":"var(--color-red-700)"}': { 'value': 'caret-red-700' },
  '{"caret-color":"var(--color-red-800)"}': { 'value': 'caret-red-800' },
  '{"caret-color":"var(--color-red-900)"}': { 'value': 'caret-red-900' },
  '{"caret-color":"var(--color-red-950)"}': { 'value': 'caret-red-950' },
  '{"caret-color":"var(--color-orange-50)"}': { 'value': 'caret-orange-50' },
  '{"caret-color":"var(--color-orange-100)"}': { 'value': 'caret-orange-100' },
  '{"caret-color":"var(--color-orange-200)"}': { 'value': 'caret-orange-200' },
  '{"caret-color":"var(--color-orange-300)"}': { 'value': 'caret-orange-300' },
  '{"caret-color":"var(--color-orange-400)"}': { 'value': 'caret-orange-400' },
  '{"caret-color":"var(--color-orange-500)"}': { 'value': 'caret-orange-500' },
  '{"caret-color":"var(--color-orange-600)"}': { 'value': 'caret-orange-600' },
  '{"caret-color":"var(--color-orange-700)"}': { 'value': 'caret-orange-700' },
  '{"caret-color":"var(--color-orange-800)"}': { 'value': 'caret-orange-800' },
  '{"caret-color":"var(--color-orange-900)"}': { 'value': 'caret-orange-900' },
  '{"caret-color":"var(--color-orange-950)"}': { 'value': 'caret-orange-950' },
  '{"caret-color":"var(--color-amber-50)"}': { 'value': 'caret-amber-50' },
  '{"caret-color":"var(--color-amber-100)"}': { 'value': 'caret-amber-100' },
  '{"caret-color":"var(--color-amber-200)"}': { 'value': 'caret-amber-200' },
  '{"caret-color":"var(--color-amber-300)"}': { 'value': 'caret-amber-300' },
  '{"caret-color":"var(--color-amber-400)"}': { 'value': 'caret-amber-400' },
  '{"caret-color":"var(--color-amber-500)"}': { 'value': 'caret-amber-500' },
  '{"caret-color":"var(--color-amber-600)"}': { 'value': 'caret-amber-600' },
  '{"caret-color":"var(--color-amber-700)"}': { 'value': 'caret-amber-700' },
  '{"caret-color":"var(--color-amber-800)"}': { 'value': 'caret-amber-800' },
  '{"caret-color":"var(--color-amber-900)"}': { 'value': 'caret-amber-900' },
  '{"caret-color":"var(--color-amber-950)"}': { 'value': 'caret-amber-950' },
  '{"caret-color":"var(--color-yellow-50)"}': { 'value': 'caret-yellow-50' },
  '{"caret-color":"var(--color-yellow-100)"}': { 'value': 'caret-yellow-100' },
  '{"caret-color":"var(--color-yellow-200)"}': { 'value': 'caret-yellow-200' },
  '{"caret-color":"var(--color-yellow-300)"}': { 'value': 'caret-yellow-300' },
  '{"caret-color":"var(--color-yellow-400)"}': { 'value': 'caret-yellow-400' },
  '{"caret-color":"var(--color-yellow-500)"}': { 'value': 'caret-yellow-500' },
  '{"caret-color":"var(--color-yellow-600)"}': { 'value': 'caret-yellow-600' },
  '{"caret-color":"var(--color-yellow-700)"}': { 'value': 'caret-yellow-700' },
  '{"caret-color":"var(--color-yellow-800)"}': { 'value': 'caret-yellow-800' },
  '{"caret-color":"var(--color-yellow-900)"}': { 'value': 'caret-yellow-900' },
  '{"caret-color":"var(--color-yellow-950)"}': { 'value': 'caret-yellow-950' },
  '{"caret-color":"var(--color-lime-50)"}': { 'value': 'caret-lime-50' },
  '{"caret-color":"var(--color-lime-100)"}': { 'value': 'caret-lime-100' },
  '{"caret-color":"var(--color-lime-200)"}': { 'value': 'caret-lime-200' },
  '{"caret-color":"var(--color-lime-300)"}': { 'value': 'caret-lime-300' },
  '{"caret-color":"var(--color-lime-400)"}': { 'value': 'caret-lime-400' },
  '{"caret-color":"var(--color-lime-500)"}': { 'value': 'caret-lime-500' },
  '{"caret-color":"var(--color-lime-600)"}': { 'value': 'caret-lime-600' },
  '{"caret-color":"var(--color-lime-700)"}': { 'value': 'caret-lime-700' },
  '{"caret-color":"var(--color-lime-800)"}': { 'value': 'caret-lime-800' },
  '{"caret-color":"var(--color-lime-900)"}': { 'value': 'caret-lime-900' },
  '{"caret-color":"var(--color-lime-950)"}': { 'value': 'caret-lime-950' },
  '{"caret-color":"var(--color-green-50)"}': { 'value': 'caret-green-50' },
  '{"caret-color":"var(--color-green-100)"}': { 'value': 'caret-green-100' },
  '{"caret-color":"var(--color-green-200)"}': { 'value': 'caret-green-200' },
  '{"caret-color":"var(--color-green-300)"}': { 'value': 'caret-green-300' },
  '{"caret-color":"var(--color-green-400)"}': { 'value': 'caret-green-400' },
  '{"caret-color":"var(--color-green-500)"}': { 'value': 'caret-green-500' },
  '{"caret-color":"var(--color-green-600)"}': { 'value': 'caret-green-600' },
  '{"caret-color":"var(--color-green-700)"}': { 'value': 'caret-green-700' },
  '{"caret-color":"var(--color-green-800)"}': { 'value': 'caret-green-800' },
  '{"caret-color":"var(--color-green-900)"}': { 'value': 'caret-green-900' },
  '{"caret-color":"var(--color-green-950)"}': { 'value': 'caret-green-950' },
  '{"caret-color":"var(--color-emerald-50)"}': { 'value': 'caret-emerald-50' },
  '{"caret-color":"var(--color-emerald-100)"}': {
    'value': 'caret-emerald-100',
  },
  '{"caret-color":"var(--color-emerald-200)"}': {
    'value': 'caret-emerald-200',
  },
  '{"caret-color":"var(--color-emerald-300)"}': {
    'value': 'caret-emerald-300',
  },
  '{"caret-color":"var(--color-emerald-400)"}': {
    'value': 'caret-emerald-400',
  },
  '{"caret-color":"var(--color-emerald-500)"}': {
    'value': 'caret-emerald-500',
  },
  '{"caret-color":"var(--color-emerald-600)"}': {
    'value': 'caret-emerald-600',
  },
  '{"caret-color":"var(--color-emerald-700)"}': {
    'value': 'caret-emerald-700',
  },
  '{"caret-color":"var(--color-emerald-800)"}': {
    'value': 'caret-emerald-800',
  },
  '{"caret-color":"var(--color-emerald-900)"}': {
    'value': 'caret-emerald-900',
  },
  '{"caret-color":"var(--color-emerald-950)"}': {
    'value': 'caret-emerald-950',
  },
  '{"caret-color":"var(--color-teal-50)"}': { 'value': 'caret-teal-50' },
  '{"caret-color":"var(--color-teal-100)"}': { 'value': 'caret-teal-100' },
  '{"caret-color":"var(--color-teal-200)"}': { 'value': 'caret-teal-200' },
  '{"caret-color":"var(--color-teal-300)"}': { 'value': 'caret-teal-300' },
  '{"caret-color":"var(--color-teal-400)"}': { 'value': 'caret-teal-400' },
  '{"caret-color":"var(--color-teal-500)"}': { 'value': 'caret-teal-500' },
  '{"caret-color":"var(--color-teal-600)"}': { 'value': 'caret-teal-600' },
  '{"caret-color":"var(--color-teal-700)"}': { 'value': 'caret-teal-700' },
  '{"caret-color":"var(--color-teal-800)"}': { 'value': 'caret-teal-800' },
  '{"caret-color":"var(--color-teal-900)"}': { 'value': 'caret-teal-900' },
  '{"caret-color":"var(--color-teal-950)"}': { 'value': 'caret-teal-950' },
  '{"caret-color":"var(--color-cyan-50)"}': { 'value': 'caret-cyan-50' },
  '{"caret-color":"var(--color-cyan-100)"}': { 'value': 'caret-cyan-100' },
  '{"caret-color":"var(--color-cyan-200)"}': { 'value': 'caret-cyan-200' },
  '{"caret-color":"var(--color-cyan-300)"}': { 'value': 'caret-cyan-300' },
  '{"caret-color":"var(--color-cyan-400)"}': { 'value': 'caret-cyan-400' },
  '{"caret-color":"var(--color-cyan-500)"}': { 'value': 'caret-cyan-500' },
  '{"caret-color":"var(--color-cyan-600)"}': { 'value': 'caret-cyan-600' },
  '{"caret-color":"var(--color-cyan-700)"}': { 'value': 'caret-cyan-700' },
  '{"caret-color":"var(--color-cyan-800)"}': { 'value': 'caret-cyan-800' },
  '{"caret-color":"var(--color-cyan-900)"}': { 'value': 'caret-cyan-900' },
  '{"caret-color":"var(--color-cyan-950)"}': { 'value': 'caret-cyan-950' },
  '{"caret-color":"var(--color-sky-50)"}': { 'value': 'caret-sky-50' },
  '{"caret-color":"var(--color-sky-100)"}': { 'value': 'caret-sky-100' },
  '{"caret-color":"var(--color-sky-200)"}': { 'value': 'caret-sky-200' },
  '{"caret-color":"var(--color-sky-300)"}': { 'value': 'caret-sky-300' },
  '{"caret-color":"var(--color-sky-400)"}': { 'value': 'caret-sky-400' },
  '{"caret-color":"var(--color-sky-500)"}': { 'value': 'caret-sky-500' },
  '{"caret-color":"var(--color-sky-600)"}': { 'value': 'caret-sky-600' },
  '{"caret-color":"var(--color-sky-700)"}': { 'value': 'caret-sky-700' },
  '{"caret-color":"var(--color-sky-800)"}': { 'value': 'caret-sky-800' },
  '{"caret-color":"var(--color-sky-900)"}': { 'value': 'caret-sky-900' },
  '{"caret-color":"var(--color-sky-950)"}': { 'value': 'caret-sky-950' },
  '{"caret-color":"var(--color-blue-50)"}': { 'value': 'caret-blue-50' },
  '{"caret-color":"var(--color-blue-100)"}': { 'value': 'caret-blue-100' },
  '{"caret-color":"var(--color-blue-200)"}': { 'value': 'caret-blue-200' },
  '{"caret-color":"var(--color-blue-300)"}': { 'value': 'caret-blue-300' },
  '{"caret-color":"var(--color-blue-400)"}': { 'value': 'caret-blue-400' },
  '{"caret-color":"var(--color-blue-500)"}': { 'value': 'caret-blue-500' },
  '{"caret-color":"var(--color-blue-600)"}': { 'value': 'caret-blue-600' },
  '{"caret-color":"var(--color-blue-700)"}': { 'value': 'caret-blue-700' },
  '{"caret-color":"var(--color-blue-800)"}': { 'value': 'caret-blue-800' },
  '{"caret-color":"var(--color-blue-900)"}': { 'value': 'caret-blue-900' },
  '{"caret-color":"var(--color-blue-950)"}': { 'value': 'caret-blue-950' },
  '{"caret-color":"var(--color-indigo-50)"}': { 'value': 'caret-indigo-50' },
  '{"caret-color":"var(--color-indigo-100)"}': { 'value': 'caret-indigo-100' },
  '{"caret-color":"var(--color-indigo-200)"}': { 'value': 'caret-indigo-200' },
  '{"caret-color":"var(--color-indigo-300)"}': { 'value': 'caret-indigo-300' },
  '{"caret-color":"var(--color-indigo-400)"}': { 'value': 'caret-indigo-400' },
  '{"caret-color":"var(--color-indigo-500)"}': { 'value': 'caret-indigo-500' },
  '{"caret-color":"var(--color-indigo-600)"}': { 'value': 'caret-indigo-600' },
  '{"caret-color":"var(--color-indigo-700)"}': { 'value': 'caret-indigo-700' },
  '{"caret-color":"var(--color-indigo-800)"}': { 'value': 'caret-indigo-800' },
  '{"caret-color":"var(--color-indigo-900)"}': { 'value': 'caret-indigo-900' },
  '{"caret-color":"var(--color-indigo-950)"}': { 'value': 'caret-indigo-950' },
  '{"caret-color":"var(--color-violet-50)"}': { 'value': 'caret-violet-50' },
  '{"caret-color":"var(--color-violet-100)"}': { 'value': 'caret-violet-100' },
  '{"caret-color":"var(--color-violet-200)"}': { 'value': 'caret-violet-200' },
  '{"caret-color":"var(--color-violet-300)"}': { 'value': 'caret-violet-300' },
  '{"caret-color":"var(--color-violet-400)"}': { 'value': 'caret-violet-400' },
  '{"caret-color":"var(--color-violet-500)"}': { 'value': 'caret-violet-500' },
  '{"caret-color":"var(--color-violet-600)"}': { 'value': 'caret-violet-600' },
  '{"caret-color":"var(--color-violet-700)"}': { 'value': 'caret-violet-700' },
  '{"caret-color":"var(--color-violet-800)"}': { 'value': 'caret-violet-800' },
  '{"caret-color":"var(--color-violet-900)"}': { 'value': 'caret-violet-900' },
  '{"caret-color":"var(--color-violet-950)"}': { 'value': 'caret-violet-950' },
  '{"caret-color":"var(--color-purple-50)"}': { 'value': 'caret-purple-50' },
  '{"caret-color":"var(--color-purple-100)"}': { 'value': 'caret-purple-100' },
  '{"caret-color":"var(--color-purple-200)"}': { 'value': 'caret-purple-200' },
  '{"caret-color":"var(--color-purple-300)"}': { 'value': 'caret-purple-300' },
  '{"caret-color":"var(--color-purple-400)"}': { 'value': 'caret-purple-400' },
  '{"caret-color":"var(--color-purple-500)"}': { 'value': 'caret-purple-500' },
  '{"caret-color":"var(--color-purple-600)"}': { 'value': 'caret-purple-600' },
  '{"caret-color":"var(--color-purple-700)"}': { 'value': 'caret-purple-700' },
  '{"caret-color":"var(--color-purple-800)"}': { 'value': 'caret-purple-800' },
  '{"caret-color":"var(--color-purple-900)"}': { 'value': 'caret-purple-900' },
  '{"caret-color":"var(--color-purple-950)"}': { 'value': 'caret-purple-950' },
  '{"caret-color":"var(--color-fuchsia-50)"}': { 'value': 'caret-fuchsia-50' },
  '{"caret-color":"var(--color-fuchsia-100)"}': {
    'value': 'caret-fuchsia-100',
  },
  '{"caret-color":"var(--color-fuchsia-200)"}': {
    'value': 'caret-fuchsia-200',
  },
  '{"caret-color":"var(--color-fuchsia-300)"}': {
    'value': 'caret-fuchsia-300',
  },
  '{"caret-color":"var(--color-fuchsia-400)"}': {
    'value': 'caret-fuchsia-400',
  },
  '{"caret-color":"var(--color-fuchsia-500)"}': {
    'value': 'caret-fuchsia-500',
  },
  '{"caret-color":"var(--color-fuchsia-600)"}': {
    'value': 'caret-fuchsia-600',
  },
  '{"caret-color":"var(--color-fuchsia-700)"}': {
    'value': 'caret-fuchsia-700',
  },
  '{"caret-color":"var(--color-fuchsia-800)"}': {
    'value': 'caret-fuchsia-800',
  },
  '{"caret-color":"var(--color-fuchsia-900)"}': {
    'value': 'caret-fuchsia-900',
  },
  '{"caret-color":"var(--color-fuchsia-950)"}': {
    'value': 'caret-fuchsia-950',
  },
  '{"caret-color":"var(--color-pink-50)"}': { 'value': 'caret-pink-50' },
  '{"caret-color":"var(--color-pink-100)"}': { 'value': 'caret-pink-100' },
  '{"caret-color":"var(--color-pink-200)"}': { 'value': 'caret-pink-200' },
  '{"caret-color":"var(--color-pink-300)"}': { 'value': 'caret-pink-300' },
  '{"caret-color":"var(--color-pink-400)"}': { 'value': 'caret-pink-400' },
  '{"caret-color":"var(--color-pink-500)"}': { 'value': 'caret-pink-500' },
  '{"caret-color":"var(--color-pink-600)"}': { 'value': 'caret-pink-600' },
  '{"caret-color":"var(--color-pink-700)"}': { 'value': 'caret-pink-700' },
  '{"caret-color":"var(--color-pink-800)"}': { 'value': 'caret-pink-800' },
  '{"caret-color":"var(--color-pink-900)"}': { 'value': 'caret-pink-900' },
  '{"caret-color":"var(--color-pink-950)"}': { 'value': 'caret-pink-950' },
  '{"caret-color":"var(--color-rose-50)"}': { 'value': 'caret-rose-50' },
  '{"caret-color":"var(--color-rose-100)"}': { 'value': 'caret-rose-100' },
  '{"caret-color":"var(--color-rose-200)"}': { 'value': 'caret-rose-200' },
  '{"caret-color":"var(--color-rose-300)"}': { 'value': 'caret-rose-300' },
  '{"caret-color":"var(--color-rose-400)"}': { 'value': 'caret-rose-400' },
  '{"caret-color":"var(--color-rose-500)"}': { 'value': 'caret-rose-500' },
  '{"caret-color":"var(--color-rose-600)"}': { 'value': 'caret-rose-600' },
  '{"caret-color":"var(--color-rose-700)"}': { 'value': 'caret-rose-700' },
  '{"caret-color":"var(--color-rose-800)"}': { 'value': 'caret-rose-800' },
  '{"caret-color":"var(--color-rose-900)"}': { 'value': 'caret-rose-900' },
  '{"caret-color":"var(--color-rose-950)"}': { 'value': 'caret-rose-950' },
  '{"caret-color":"var(--color-slate-50)"}': { 'value': 'caret-slate-50' },
  '{"caret-color":"var(--color-slate-100)"}': { 'value': 'caret-slate-100' },
  '{"caret-color":"var(--color-slate-200)"}': { 'value': 'caret-slate-200' },
  '{"caret-color":"var(--color-slate-300)"}': { 'value': 'caret-slate-300' },
  '{"caret-color":"var(--color-slate-400)"}': { 'value': 'caret-slate-400' },
  '{"caret-color":"var(--color-slate-500)"}': { 'value': 'caret-slate-500' },
  '{"caret-color":"var(--color-slate-600)"}': { 'value': 'caret-slate-600' },
  '{"caret-color":"var(--color-slate-700)"}': { 'value': 'caret-slate-700' },
  '{"caret-color":"var(--color-slate-800)"}': { 'value': 'caret-slate-800' },
  '{"caret-color":"var(--color-slate-900)"}': { 'value': 'caret-slate-900' },
  '{"caret-color":"var(--color-slate-950)"}': { 'value': 'caret-slate-950' },
  '{"caret-color":"var(--color-gray-50)"}': { 'value': 'caret-gray-50' },
  '{"caret-color":"var(--color-gray-100)"}': { 'value': 'caret-gray-100' },
  '{"caret-color":"var(--color-gray-200)"}': { 'value': 'caret-gray-200' },
  '{"caret-color":"var(--color-gray-300)"}': { 'value': 'caret-gray-300' },
  '{"caret-color":"var(--color-gray-400)"}': { 'value': 'caret-gray-400' },
  '{"caret-color":"var(--color-gray-500)"}': { 'value': 'caret-gray-500' },
  '{"caret-color":"var(--color-gray-600)"}': { 'value': 'caret-gray-600' },
  '{"caret-color":"var(--color-gray-700)"}': { 'value': 'caret-gray-700' },
  '{"caret-color":"var(--color-gray-800)"}': { 'value': 'caret-gray-800' },
  '{"caret-color":"var(--color-gray-900)"}': { 'value': 'caret-gray-900' },
  '{"caret-color":"var(--color-gray-950)"}': { 'value': 'caret-gray-950' },
  '{"caret-color":"var(--color-zinc-50)"}': { 'value': 'caret-zinc-50' },
  '{"caret-color":"var(--color-zinc-100)"}': { 'value': 'caret-zinc-100' },
  '{"caret-color":"var(--color-zinc-200)"}': { 'value': 'caret-zinc-200' },
  '{"caret-color":"var(--color-zinc-300)"}': { 'value': 'caret-zinc-300' },
  '{"caret-color":"var(--color-zinc-400)"}': { 'value': 'caret-zinc-400' },
  '{"caret-color":"var(--color-zinc-500)"}': { 'value': 'caret-zinc-500' },
  '{"caret-color":"var(--color-zinc-600)"}': { 'value': 'caret-zinc-600' },
  '{"caret-color":"var(--color-zinc-700)"}': { 'value': 'caret-zinc-700' },
  '{"caret-color":"var(--color-zinc-800)"}': { 'value': 'caret-zinc-800' },
  '{"caret-color":"var(--color-zinc-900)"}': { 'value': 'caret-zinc-900' },
  '{"caret-color":"var(--color-zinc-950)"}': { 'value': 'caret-zinc-950' },
  '{"caret-color":"var(--color-neutral-50)"}': { 'value': 'caret-neutral-50' },
  '{"caret-color":"var(--color-neutral-100)"}': {
    'value': 'caret-neutral-100',
  },
  '{"caret-color":"var(--color-neutral-200)"}': {
    'value': 'caret-neutral-200',
  },
  '{"caret-color":"var(--color-neutral-300)"}': {
    'value': 'caret-neutral-300',
  },
  '{"caret-color":"var(--color-neutral-400)"}': {
    'value': 'caret-neutral-400',
  },
  '{"caret-color":"var(--color-neutral-500)"}': {
    'value': 'caret-neutral-500',
  },
  '{"caret-color":"var(--color-neutral-600)"}': {
    'value': 'caret-neutral-600',
  },
  '{"caret-color":"var(--color-neutral-700)"}': {
    'value': 'caret-neutral-700',
  },
  '{"caret-color":"var(--color-neutral-800)"}': {
    'value': 'caret-neutral-800',
  },
  '{"caret-color":"var(--color-neutral-900)"}': {
    'value': 'caret-neutral-900',
  },
  '{"caret-color":"var(--color-neutral-950)"}': {
    'value': 'caret-neutral-950',
  },
  '{"caret-color":"var(--color-stone-50)"}': { 'value': 'caret-stone-50' },
  '{"caret-color":"var(--color-stone-100)"}': { 'value': 'caret-stone-100' },
  '{"caret-color":"var(--color-stone-200)"}': { 'value': 'caret-stone-200' },
  '{"caret-color":"var(--color-stone-300)"}': { 'value': 'caret-stone-300' },
  '{"caret-color":"var(--color-stone-400)"}': { 'value': 'caret-stone-400' },
  '{"caret-color":"var(--color-stone-500)"}': { 'value': 'caret-stone-500' },
  '{"caret-color":"var(--color-stone-600)"}': { 'value': 'caret-stone-600' },
  '{"caret-color":"var(--color-stone-700)"}': { 'value': 'caret-stone-700' },
  '{"caret-color":"var(--color-stone-800)"}': { 'value': 'caret-stone-800' },
  '{"caret-color":"var(--color-stone-900)"}': { 'value': 'caret-stone-900' },
  '{"caret-color":"var(--color-stone-950)"}': { 'value': 'caret-stone-950' },
  '{"caret-color":"var(<custom-property>)"}': {
    'value': 'caret-<custom-property>',
  },
  '{"caret-color":"<value>"}': { 'value': 'caret-[<value>]' },
  '{"isolation":"isolate"}': { 'value': 'isolate' },
  '{"isolation":"auto"}': { 'value': 'isolation-auto' },
  '{"aspect-ratio":"<ratio>"}': { 'value': 'aspect-<ratio>' },
  '{"aspect-ratio":"1 / 1"}': { 'value': 'aspect-square' },
  '{"aspect-ratio":"var(--aspect-ratio-video)"}': { 'value': 'aspect-video' },
  '{"aspect-ratio":"auto"}': { 'value': 'aspect-auto' },
  '{"aspect-ratio":"var(<custom-property>)"}': {
    'value': 'aspect-(<custom-property>)',
  },
  '{"aspect-ratio":"<value>"}': { 'value': 'aspect-[<value>]' },
  '{"float":"right"}': { 'value': 'float-right' },
  '{"float":"left"}': { 'value': 'float-left' },
  '{"float":"inline-start"}': { 'value': 'float-start' },
  '{"float":"inline-end"}': { 'value': 'float-end' },
  '{"float":"none"}': { 'value': 'float-none' },
  '{"object-position":"top left"}': { 'value': 'object-top-left' },
  '{"object-position":"top"}': { 'value': 'object-top' },
  '{"object-position":"top right"}': { 'value': 'object-top-right' },
  '{"object-position":"left"}': { 'value': 'object-left' },
  '{"object-position":"center"}': { 'value': 'object-center' },
  '{"object-position":"right"}': { 'value': 'object-right' },
  '{"object-position":"bottom left"}': { 'value': 'object-bottom-left' },
  '{"object-position":"bottom"}': { 'value': 'object-bottom' },
  '{"object-position":"bottom right"}': { 'value': 'object-bottom-right' },
  '{"object-position":"var(<custom-property>)"}': {
    'value': 'object-(<custom-property>)',
  },
  '{"object-position":"<value>"}': { 'value': 'object-[<value>]' },
  '{"inset":"calc(var(--spacing) * <number>)"}': { 'value': 'inset-<number>' },
  '{"inset":"calc(var(--spacing) * -<number>)"}': {
    'value': '-inset-<number>',
  },
  '{"inset":"calc(<fraction> * 100%)"}': { 'value': 'inset-<fraction>' },
  '{"inset":"calc(<fraction> * -100%)"}': { 'value': '-inset-<fraction>' },
  '{"inset":"1px"}': { 'value': 'inset-px' },
  '{"inset":"-1px"}': { 'value': '-inset-px' },
  '{"inset":"100%"}': { 'value': 'inset-full' },
  '{"inset":"-100%"}': { 'value': '-inset-full' },
  '{"inset":"auto"}': { 'value': 'inset-auto' },
  '{"inset":"var(<custom-property>)"}': {
    'value': 'inset-(<custom-property>)',
  },
  '{"inset":"<value>"}': { 'value': 'inset-[<value>]' },
  '{"inset-inline":"calc(var(--spacing) * <number>)"}': {
    'value': 'inset-x-<number>',
  },
  '{"inset-inline":"calc(var(--spacing) * -<number>)"}': {
    'value': '-inset-x-<number>',
  },
  '{"inset-inline":"calc(<fraction> * 100%)"}': {
    'value': 'inset-x-<fraction>',
  },
  '{"inset-inline":"calc(<fraction> * -100%)"}': {
    'value': '-inset-x-<fraction>',
  },
  '{"inset-inline":"1px"}': { 'value': 'inset-x-px' },
  '{"inset-inline":"-1px"}': { 'value': '-inset-x-px' },
  '{"inset-inline":"100%"}': { 'value': 'inset-x-full' },
  '{"inset-inline":"-100%"}': { 'value': '-inset-x-full' },
  '{"inset-inline":"auto"}': { 'value': 'inset-x-auto' },
  '{"inset-inline":"var(<custom-property>)"}': {
    'value': 'inset-x-(<custom-property>)',
  },
  '{"inset-inline":"<value>"}': { 'value': 'inset-x-[<value>]' },
  '{"inset-block":"calc(var(--spacing) * <number>)"}': {
    'value': 'inset-y-<number>',
  },
  '{"inset-block":"calc(var(--spacing) * -<number>)"}': {
    'value': '-inset-y-<number>',
  },
  '{"inset-block":"calc(<fraction> * 100%)"}': {
    'value': 'inset-y-<fraction>',
  },
  '{"inset-block":"calc(<fraction> * -100%)"}': {
    'value': '-inset-y-<fraction>',
  },
  '{"inset-block":"1px"}': { 'value': 'inset-y-px' },
  '{"inset-block":"-1px"}': { 'value': '-inset-y-px' },
  '{"inset-block":"100%"}': { 'value': 'inset-y-full' },
  '{"inset-block":"-100%"}': { 'value': '-inset-y-full' },
  '{"inset-block":"auto"}': { 'value': 'inset-y-auto' },
  '{"inset-block":"var(<custom-property>)"}': {
    'value': 'inset-y-(<custom-property>)',
  },
  '{"inset-block":"<value>"}': { 'value': 'inset-y-[<value>]' },
  '{"inset-inline-start":"calc(var(--spacing) * <number>)"}': {
    'value': 'start-<number>',
  },
  '{"inset-inline-start":"calc(var(--spacing) * -<number>)"}': {
    'value': '-start-<number>',
  },
  '{"inset-inline-start":"calc(<fraction> * 100%)"}': {
    'value': 'start-<fraction>',
  },
  '{"inset-inline-start":"calc(<fraction> * -100%)"}': {
    'value': '-start-<fraction>',
  },
  '{"inset-inline-start":"1px"}': { 'value': 'start-px' },
  '{"inset-inline-start":"-1px"}': { 'value': '-start-px' },
  '{"inset-inline-start":"100%"}': { 'value': 'start-full' },
  '{"inset-inline-start":"-100%"}': { 'value': '-start-full' },
  '{"inset-inline-start":"auto"}': { 'value': 'start-auto' },
  '{"inset-inline-start":"var(<custom-property>)"}': {
    'value': 'start-(<custom-property>)',
  },
  '{"inset-inline-start":"<value>"}': { 'value': 'start-[<value>]' },
  '{"inset-inline-end":"calc(var(--spacing) * <number>)"}': {
    'value': 'end-<number>',
  },
  '{"inset-inline-end":"calc(var(--spacing) * -<number>)"}': {
    'value': '-end-<number>',
  },
  '{"inset-inline-end":"calc(<fraction> * 100%)"}': {
    'value': 'end-<fraction>',
  },
  '{"inset-inline-end":"calc(<fraction> * -100%)"}': {
    'value': '-end-<fraction>',
  },
  '{"inset-inline-end":"1px"}': { 'value': 'end-px' },
  '{"inset-inline-end":"-1px"}': { 'value': '-end-px' },
  '{"inset-inline-end":"100%"}': { 'value': 'end-full' },
  '{"inset-inline-end":"-100%"}': { 'value': '-end-full' },
  '{"inset-inline-end":"auto"}': { 'value': 'end-auto' },
  '{"inset-inline-end":"var(<custom-property>)"}': {
    'value': 'end-(<custom-property>)',
  },
  '{"inset-inline-end":"<value>"}': { 'value': 'end-[<value>]' },
  '{"top":"calc(var(--spacing) * <number>)"}': { 'value': 'top-<number>' },
  '{"top":"calc(var(--spacing) * -<number>)"}': { 'value': '-top-<number>' },
  '{"top":"calc(<fraction> * 100%)"}': { 'value': 'top-<fraction>' },
  '{"top":"calc(<fraction> * -100%)"}': { 'value': '-top-<fraction>' },
  '{"top":"1px"}': { 'value': 'top-px' },
  '{"top":"-1px"}': { 'value': '-top-px' },
  '{"top":"100%"}': { 'value': 'top-full' },
  '{"top":"-100%"}': { 'value': '-top-full' },
  '{"top":"auto"}': { 'value': 'top-auto' },
  '{"top":"var(<custom-property>)"}': { 'value': 'top-(<custom-property>)' },
  '{"top":"<value>"}': { 'value': 'top-[<value>]' },
  '{"right":"calc(var(--spacing) * <number>)"}': { 'value': 'right-<number>' },
  '{"right":"calc(var(--spacing) * -<number>)"}': {
    'value': '-right-<number>',
  },
  '{"right":"calc(<fraction> * 100%)"}': { 'value': 'right-<fraction>' },
  '{"right":"calc(<fraction> * -100%)"}': { 'value': '-right-<fraction>' },
  '{"right":"1px"}': { 'value': 'right-px' },
  '{"right":"-1px"}': { 'value': '-right-px' },
  '{"right":"100%"}': { 'value': 'right-full' },
  '{"right":"-100%"}': { 'value': '-right-full' },
  '{"right":"auto"}': { 'value': 'right-auto' },
  '{"right":"var(<custom-property>)"}': {
    'value': 'right-(<custom-property>)',
  },
  '{"right":"<value>"}': { 'value': 'right-[<value>]' },
  '{"bottom":"calc(var(--spacing) * <number>)"}': {
    'value': 'bottom-<number>',
  },
  '{"bottom":"calc(var(--spacing) * -<number>)"}': {
    'value': '-bottom-<number>',
  },
  '{"bottom":"calc(<fraction> * 100%)"}': { 'value': 'bottom-<fraction>' },
  '{"bottom":"calc(<fraction> * -100%)"}': { 'value': '-bottom-<fraction>' },
  '{"bottom":"1px"}': { 'value': 'bottom-px' },
  '{"bottom":"-1px"}': { 'value': '-bottom-px' },
  '{"bottom":"100%"}': { 'value': 'bottom-full' },
  '{"bottom":"-100%"}': { 'value': '-bottom-full' },
  '{"bottom":"auto"}': { 'value': 'bottom-auto' },
  '{"bottom":"var(<custom-property>)"}': {
    'value': 'bottom-(<custom-property>)',
  },
  '{"bottom":"<value>"}': { 'value': 'bottom-[<value>]' },
  '{"left":"calc(var(--spacing) * <number>)"}': { 'value': 'left-<number>' },
  '{"left":"calc(var(--spacing) * -<number>)"}': { 'value': '-left-<number>' },
  '{"left":"calc(<fraction> * 100%)"}': { 'value': 'left-<fraction>' },
  '{"left":"calc(<fraction> * -100%)"}': { 'value': '-left-<fraction>' },
  '{"left":"1px"}': { 'value': 'left-px' },
  '{"left":"-1px"}': { 'value': '-left-px' },
  '{"left":"100%"}': { 'value': 'left-full' },
  '{"left":"-100%"}': { 'value': '-left-full' },
  '{"left":"auto"}': { 'value': 'left-auto' },
  '{"left":"var(<custom-property>)"}': { 'value': 'left-(<custom-property>)' },
  '{"left":"<value>"}': { 'value': 'left-[<value>]' },
  '{"overscroll-behavior":"auto"}': { 'value': 'overscroll-auto' },
  '{"overscroll-behavior":"contain"}': { 'value': 'overscroll-contain' },
  '{"overscroll-behavior":"none"}': { 'value': 'overscroll-none' },
  '{"overscroll-behavior-x":"auto"}': { 'value': 'overscroll-x-auto' },
  '{"overscroll-behavior-x":"contain"}': { 'value': 'overscroll-x-contain' },
  '{"overscroll-behavior-x":"none"}': { 'value': 'overscroll-x-none' },
  '{"overscroll-behavior-y":"auto"}': { 'value': 'overscroll-y-auto' },
  '{"overscroll-behavior-y":"contain"}': { 'value': 'overscroll-y-contain' },
  '{"overscroll-behavior-y":"none"}': { 'value': 'overscroll-y-none' },
  '{"filter":"blur(var(--blur-xs))"}': { 'value': 'blur-xs' },
  '{"filter":"blur(var(--blur-sm))"}': { 'value': 'blur-sm' },
  '{"filter":"blur(var(--blur-md))"}': { 'value': 'blur-md' },
  '{"filter":"blur(var(--blur-lg))"}': { 'value': 'blur-lg' },
  '{"filter":"blur(var(--blur-xl))"}': { 'value': 'blur-xl' },
  '{"filter":"blur(var(--blur-2xl))"}': { 'value': 'blur-2xl' },
  '{"filter":"blur(var(--blur-3xl))"}': { 'value': 'blur-3xl' },
  '{"filter":""}': { 'value': 'blur-none' },
  '{"filter":"blur(var(<custom-property>))"}': {
    'value': 'blur-(<custom-property>)',
  },
  '{"filter":"blur(<value>)"}': { 'value': 'blur-[<value>]' },
  '{"filter":"saturate(<number>%)"}': { 'value': 'saturate-<number>' },
  '{"filter":"saturate(var(<custom-property>))"}': {
    'value': 'saturate-(<custom-property>)',
  },
  '{"filter":"saturate(<value>)"}': { 'value': 'saturate-[<value>]' },
  '{"position":"static"}': { 'value': 'static' },
  '{"position":"fixed"}': { 'value': 'fixed' },
  '{"position":"absolute"}': { 'value': 'absolute' },
  '{"position":"relative"}': { 'value': 'relative' },
  '{"position":"sticky"}': { 'value': 'sticky' },
  '{"flex-basis":"calc(var(--spacing) * <number>)"}': {
    'value': 'basis-<number>',
  },
  '{"flex-basis":"calc(<fraction> * 100%)"}': { 'value': 'basis-<fraction>' },
  '{"flex-basis":"100%"}': { 'value': 'basis-full' },
  '{"flex-basis":"auto"}': { 'value': 'basis-auto' },
  '{"flex-basis":"var(--container-3xs)"}': { 'value': 'basis-3xs' },
  '{"flex-basis":"var(--container-2xs)"}': { 'value': 'basis-2xs' },
  '{"flex-basis":"var(--container-xs)"}': { 'value': 'basis-xs' },
  '{"flex-basis":"var(--container-sm)"}': { 'value': 'basis-sm' },
  '{"flex-basis":"var(--container-md)"}': { 'value': 'basis-md' },
  '{"flex-basis":"var(--container-lg)"}': { 'value': 'basis-lg' },
  '{"flex-basis":"var(--container-xl)"}': { 'value': 'basis-xl' },
  '{"flex-basis":"var(--container-2xl)"}': { 'value': 'basis-2xl' },
  '{"flex-basis":"var(--container-3xl)"}': { 'value': 'basis-3xl' },
  '{"flex-basis":"var(--container-4xl)"}': { 'value': 'basis-4xl' },
  '{"flex-basis":"var(--container-5xl)"}': { 'value': 'basis-5xl' },
  '{"flex-basis":"var(--container-6xl)"}': { 'value': 'basis-6xl' },
  '{"flex-basis":"var(--container-7xl)"}': { 'value': 'basis-7xl' },
  '{"flex-basis":"var(<custom-property>)"}': {
    'value': 'basis-(<custom-property>)',
  },
  '{"flex-basis":"<value>"}': { 'value': 'basis-[<value>]' },
  '{"display":"inline"}': { 'value': 'inline' },
  '{"display":"block"}': { 'value': 'block' },
  '{"display":"inline-block"}': { 'value': 'inline-block' },
  '{"display":"flow-root"}': { 'value': 'flow-root' },
  '{"display":"flex"}': { 'value': 'flex' },
  '{"display":"inline-flex"}': { 'value': 'inline-flex' },
  '{"display":"grid"}': { 'value': 'grid' },
  '{"display":"inline-grid"}': { 'value': 'inline-grid' },
  '{"display":"contents"}': { 'value': 'contents' },
  '{"display":"table"}': { 'value': 'table' },
  '{"display":"inline-table"}': { 'value': 'inline-table' },
  '{"display":"table-caption"}': { 'value': 'table-caption' },
  '{"display":"table-cell"}': { 'value': 'table-cell' },
  '{"display":"table-column"}': { 'value': 'table-column' },
  '{"display":"table-column-group"}': { 'value': 'table-column-group' },
  '{"display":"table-footer-group"}': { 'value': 'table-footer-group' },
  '{"display":"table-header-group"}': { 'value': 'table-header-group' },
  '{"display":"table-row-group"}': { 'value': 'table-row-group' },
  '{"display":"table-row"}': { 'value': 'table-row' },
  '{"display":"list-item"}': { 'value': 'list-item' },
  '{"display":"none"}': { 'value': 'hidden' },
  '{"border-width":"0"}': {
    '{"clip":"rect(0, 0, 0, 0)"}': {
      '{"height":"1px"}': {
        '{"margin":"-1px"}': {
          '{"overflow":"hidden"}': {
            '{"padding":"0"}': {
              '{"position":"absolute"}': {
                '{"white-space":"nowrap"}': {
                  '{"width":"1px"}': { 'value': 'sr-only' },
                },
              },
            },
          },
        },
      },
    },
  },
  '{"clip":"auto"}': {
    '{"height":"auto"}': {
      '{"margin":"0"}': {
        '{"overflow":"visible"}': {
          '{"padding":"0"}': {
            '{"position":"static"}': {
              '{"white-space":"normal"}': {
                '{"width":"auto"}': { 'value': 'not-sr-only' },
              },
            },
          },
        },
      },
    },
  },
  '{"mask-repeat":"repeat"}': { 'value': 'mask-repeat' },
  '{"mask-repeat":"no-repeat"}': { 'value': 'mask-no-repeat' },
  '{"mask-repeat":"repeat-x"}': { 'value': 'mask-repeat-x' },
  '{"mask-repeat":"repeat-y"}': { 'value': 'mask-repeat-y' },
  '{"mask-repeat":"space"}': { 'value': 'mask-repeat-space' },
  '{"mask-repeat":"round"}': { 'value': 'mask-repeat-round' },
  '{"border-spacing":"calc(var(--spacing) * <number>)"}': {
    'value': 'border-spacing-<number>',
  },
  '{"border-spacing":"var(<custom-property>)"}': {
    'value': 'border-spacing-(<custom-property>)',
  },
  '{"border-spacing":"<value>"}': { 'value': 'border-spacing-[<value>]' },
  '{"border-spacing":"calc(var(--spacing) * <number>) var(--tw-border-spacing-y)"}':
    { 'value': 'border-spacing-x-<number>' },
  '{"border-spacing":"var(<custom-property>) var(--tw-border-spacing-y)"}': {
    'value': 'border-spacing-x-(<custom-property>)',
  },
  '{"border-spacing":"<value> var(--tw-border-spacing-y)"}': {
    'value': 'border-spacing-x-[<value>]',
  },
  '{"border-spacing":"var(--tw-border-spacing-x) calc(var(--spacing) * <number>)"}':
    { 'value': 'border-spacing-y-<number>' },
  '{"border-spacing":"var(--tw-border-spacing-x) var(<custom-property>)"}': {
    'value': 'border-spacing-y-(<custom-property>)',
  },
  '{"border-spacing":"var(--tw-border-spacing-x) <value>"}': {
    'value': 'border-spacing-y-[<value>]',
  },
  '{"visibility":"visible"}': { 'value': 'visible' },
  '{"visibility":"hidden"}': { 'value': 'invisible' },
  '{"visibility":"collapse"}': { 'value': 'collapse' },
  '{"background-position":"top left"}': { 'value': 'bg-top-left' },
  '{"background-position":"top"}': { 'value': 'bg-top' },
  '{"background-position":"top right"}': { 'value': 'bg-top-right' },
  '{"background-position":"left"}': { 'value': 'bg-left' },
  '{"background-position":"center"}': { 'value': 'bg-center' },
  '{"background-position":"right"}': { 'value': 'bg-right' },
  '{"background-position":"bottom left"}': { 'value': 'bg-bottom-left' },
  '{"background-position":"bottom"}': { 'value': 'bg-bottom' },
  '{"background-position":"bottom right"}': { 'value': 'bg-bottom-right' },
  '{"background-position":"var(<custom-property>)"}': {
    'value': 'bg-position-(<custom-property>)',
  },
  '{"background-position":"<value>"}': { 'value': 'bg-position-[<value>]' },
  '{"scroll-snap-align":"start"}': { 'value': 'snap-start' },
  '{"scroll-snap-align":"end"}': { 'value': 'snap-end' },
  '{"scroll-snap-align":"center"}': { 'value': 'snap-center' },
  '{"scroll-snap-align":"none"}': { 'value': 'snap-align-none' },
  '{"filter":"hue-rotate(<number>deg)"}': { 'value': 'hue-rotate-<number>' },
  '{"filter":"hue-rotate(calc(<number>deg * -1))"}': {
    'value': '-hue-rotate-<number>',
  },
  '{"filter":"hue-rotate(var(<custom-property>))"}': {
    'value': 'hue-rotate-(<custom-property>)',
  },
  '{"filter":"hue-rotate(<value>)"}': { 'value': 'hue-rotate-[<value>]' },
  '{"z-index":"<number>"}': { 'value': 'z-<number>' },
  '{"z-index":"auto"}': { 'value': 'z-auto' },
  '{"z-index":"<value>"}': { 'value': 'z-[<value>]' },
  '{"z-index":"var(<custom-property>)"}': { 'value': 'z-(<custom-property>)' },
  '{"flex-direction":"row"}': { 'value': 'flex-row' },
  '{"flex-direction":"row-reverse"}': { 'value': 'flex-row-reverse' },
  '{"flex-direction":"column"}': { 'value': 'flex-col' },
  '{"flex-direction":"column-reverse"}': { 'value': 'flex-col-reverse' },
  '{"backdrop-filter":"opacity(<number>%)"}': {
    'value': 'backdrop-opacity-<number>',
  },
  '{"backdrop-filter":"opacity(var(<custom-property>))"}': {
    'value': 'backdrop-opacity-(<custom-property>)',
  },
  '{"backdrop-filter":"opacity(<value>)"}': {
    'value': 'backdrop-opacity-[<value>]',
  },
  '{"overflow":"auto"}': { 'value': 'overflow-auto' },
  '{"overflow":"hidden"}': {
    'value': 'overflow-hidden',
    '{"text-overflow":"ellipsis"}': {
      '{"white-space":"nowrap"}': { 'value': 'truncate' },
    },
  },
  '{"overflow":"clip"}': { 'value': 'overflow-clip' },
  '{"overflow":"visible"}': { 'value': 'overflow-visible' },
  '{"overflow":"scroll"}': { 'value': 'overflow-scroll' },
  '{"overflow-x":"auto"}': { 'value': 'overflow-x-auto' },
  '{"overflow-y":"auto"}': { 'value': 'overflow-y-auto' },
  '{"overflow-x":"hidden"}': { 'value': 'overflow-x-hidden' },
  '{"overflow-y":"hidden"}': { 'value': 'overflow-y-hidden' },
  '{"overflow-x":"clip"}': { 'value': 'overflow-x-clip' },
  '{"overflow-y":"clip"}': { 'value': 'overflow-y-clip' },
  '{"overflow-x":"visible"}': { 'value': 'overflow-x-visible' },
  '{"overflow-y":"visible"}': { 'value': 'overflow-y-visible' },
  '{"overflow-x":"scroll"}': { 'value': 'overflow-x-scroll' },
  '{"overflow-y":"scroll"}': { 'value': 'overflow-y-scroll' },
  '{"flex-shrink":"1"}': { 'value': 'shrink' },
  '{"flex-shrink":"<number>"}': { 'value': 'shrink-<number>' },
  '{"flex-shrink":"<value>"}': { 'value': 'shrink-[<value>]' },
  '{"flex-shrink":"var(<custom-property>)"}': {
    'value': 'shrink-(<custom-property>)',
  },
  '{"flex-wrap":"nowrap"}': { 'value': 'flex-nowrap' },
  '{"flex-wrap":"wrap"}': { 'value': 'flex-wrap' },
  '{"flex-wrap":"wrap-reverse"}': { 'value': 'flex-wrap-reverse' },
  '{"hyphens":"none"}': { 'value': 'hyphens-none' },
  '{"hyphens":"manual"}': { 'value': 'hyphens-manual' },
  '{"hyphens":"auto"}': { 'value': 'hyphens-auto' },
  '{"grid-column":"span <number> / span <number>"}': {
    'value': 'col-span-<number>',
  },
  '{"grid-column":"1 / -1"}': { 'value': 'col-span-full' },
  '{"grid-column":"span var(<custom-property>) / span var(<custom-property>)"}':
    { 'value': 'col-span-(<custom-property>)' },
  '{"grid-column":"span <value> / span <value>"}': {
    'value': 'col-span-[<value>]',
  },
  '{"grid-column-start":"<number>"}': { 'value': 'col-start-<number>' },
  '{"grid-column-start":"calc(<number> * -1)"}': {
    'value': '-col-start-<number>',
  },
  '{"grid-column-start":"auto"}': { 'value': 'col-start-auto' },
  '{"grid-column-start":"var(<custom-property>)"}': {
    'value': 'col-start-(<custom-property>)',
  },
  '{"grid-column-start":"<value>"}': { 'value': 'col-start-[<value>]' },
  '{"grid-column-end":"<number>"}': { 'value': 'col-end-<number>' },
  '{"grid-column-end":"calc(<number> * -1)"}': { 'value': '-col-end-<number>' },
  '{"grid-column-end":"auto"}': { 'value': 'col-end-auto' },
  '{"grid-column-end":"var(<custom-property>)"}': {
    'value': 'col-end-(<custom-property>)',
  },
  '{"grid-column-end":"<value>"}': { 'value': 'col-end-[<value>]' },
  '{"grid-column":"auto"}': { 'value': 'col-auto' },
  '{"grid-column":"<number>"}': { 'value': 'col-<number>' },
  '{"grid-column":"calc(<number> * -1)"}': { 'value': '-col-<number>' },
  '{"grid-column":"var(<custom-property>)"}': {
    'value': 'col-(<custom-property>)',
  },
  '{"grid-column":"<value>"}': { 'value': 'col-[<value>]' },
  '{"touch-action":"auto"}': { 'value': 'touch-auto' },
  '{"touch-action":"none"}': { 'value': 'touch-none' },
  '{"touch-action":"pan-x"}': { 'value': 'touch-pan-x' },
  '{"touch-action":"pan-left"}': { 'value': 'touch-pan-left' },
  '{"touch-action":"pan-right"}': { 'value': 'touch-pan-right' },
  '{"touch-action":"pan-y"}': { 'value': 'touch-pan-y' },
  '{"touch-action":"pan-up"}': { 'value': 'touch-pan-up' },
  '{"touch-action":"pan-down"}': { 'value': 'touch-pan-down' },
  '{"touch-action":"pinch-zoom"}': { 'value': 'touch-pinch-zoom' },
  '{"touch-action":"manipulation"}': { 'value': 'touch-manipulation' },
  '{"filter":"sepia(100%)"}': { 'value': 'sepia' },
  '{"filter":"sepia(<number>%)"}': { 'value': 'sepia-<number>' },
  '{"filter":"sepia(var(<custom-property>))"}': {
    'value': 'sepia-(<custom-property>)',
  },
  '{"filter":"sepia(<value>)"}': { 'value': 'sepia-[<value>]' },
  '{"flex-grow":"1"}': { 'value': 'grow' },
  '{"flex-grow":"<number>"}': { 'value': 'grow-<number>' },
  '{"flex-grow":"<value>"}': { 'value': 'grow-[<value>]' },
  '{"flex-grow":"var(<custom-property>)"}': {
    'value': 'grow-(<custom-property>)',
  },
  '{"stroke-width":"<number>"}': { 'value': 'stroke-<number>' },
  '{"stroke-width":"var(<custom-property>)"}': {
    'value': 'stroke-(length:<custom-property>)',
  },
  '{"stroke-width":"<value>"}': { 'value': 'stroke-[<value>]' },
  '{"grid-auto-columns":"auto"}': { 'value': 'auto-cols-auto' },
  '{"grid-auto-columns":"min-content"}': { 'value': 'auto-cols-min' },
  '{"grid-auto-columns":"max-content"}': { 'value': 'auto-cols-max' },
  '{"grid-auto-columns":"minmax(0, 1fr)"}': { 'value': 'auto-cols-fr' },
  '{"grid-auto-columns":"var(<custom-property>)"}': {
    'value': 'auto-cols-(<custom-property>)',
  },
  '{"grid-auto-columns":"<value>"}': { 'value': 'auto-cols-[<value>]' },
  '{"grid-row":"span <number> / span <number>"}': {
    'value': 'row-span-<number>',
  },
  '{"grid-row":"1 / -1"}': { 'value': 'row-span-full' },
  '{"grid-row":"span var(<custom-property>) / span var(<custom-property>)"}': {
    'value': 'row-span-(<custom-property>)',
  },
  '{"grid-row":"span <value> / span <value>"}': {
    'value': 'row-span-[<value>]',
  },
  '{"grid-row-start":"<number>"}': { 'value': 'row-start-<number>' },
  '{"grid-row-start":"calc(<number> * -1)"}': {
    'value': '-row-start-<number>',
  },
  '{"grid-row-start":"auto"}': { 'value': 'row-start-auto' },
  '{"grid-row-start":"var(<custom-property>)"}': {
    'value': 'row-start-(<custom-property>)',
  },
  '{"grid-row-start":"<value>"}': { 'value': 'row-start-[<value>]' },
  '{"grid-row-end":"<number>"}': { 'value': 'row-end-<number>' },
  '{"grid-row-end":"calc(<number> * -1)"}': { 'value': '-row-end-<number>' },
  '{"grid-row-end":"auto"}': { 'value': 'row-end-auto' },
  '{"grid-row-end":"var(<custom-property>)"}': {
    'value': 'row-end-(<custom-property>)',
  },
  '{"grid-row-end":"<value>"}': { 'value': 'row-end-[<value>]' },
  '{"grid-row":"auto"}': { 'value': 'row-auto' },
  '{"grid-row":"<number>"}': { 'value': 'row-<number>' },
  '{"grid-row":"calc(<number> * -1)"}': { 'value': '-row-<number>' },
  '{"grid-row":"var(<custom-property>)"}': {
    'value': 'row-(<custom-property>)',
  },
  '{"grid-row":"<value>"}': { 'value': 'row-[<value>]' },
  '{"mask-type":"alpha"}': { 'value': 'mask-type-alpha' },
  '{"mask-type":"luminance"}': { 'value': 'mask-type-luminance' },
  '{"flex":"<number>"}': { 'value': 'flex-<number>' },
  '{"flex":"calc(<fraction> * 100%)"}': { 'value': 'flex-<fraction>' },
  '{"flex":"1 1 auto"}': { 'value': 'flex-auto' },
  '{"flex":"0 1 auto"}': { 'value': 'flex-initial' },
  '{"flex":"none"}': { 'value': 'flex-none' },
  '{"flex":"var(<custom-property>)"}': { 'value': 'flex-(<custom-property>)' },
  '{"flex":"<value>"}': { 'value': 'flex-[<value>]' },
  '{"grid-template-columns":"repeat(<number>, minmax(0, 1fr))"}': {
    'value': 'grid-cols-<number>',
  },
  '{"grid-template-columns":"none"}': { 'value': 'grid-cols-none' },
  '{"grid-template-columns":"subgrid"}': { 'value': 'grid-cols-subgrid' },
  '{"grid-template-columns":"<value>"}': { 'value': 'grid-cols-[<value>]' },
  '{"grid-template-columns":"var(<custom-property>)"}': {
    'value': 'grid-cols-(<custom-property>)',
  },
  '{"mix-blend-mode":"normal"}': { 'value': 'mix-blend-normal' },
  '{"mix-blend-mode":"multiply"}': { 'value': 'mix-blend-multiply' },
  '{"mix-blend-mode":"screen"}': { 'value': 'mix-blend-screen' },
  '{"mix-blend-mode":"overlay"}': { 'value': 'mix-blend-overlay' },
  '{"mix-blend-mode":"darken"}': { 'value': 'mix-blend-darken' },
  '{"mix-blend-mode":"lighten"}': { 'value': 'mix-blend-lighten' },
  '{"mix-blend-mode":"color-dodge"}': { 'value': 'mix-blend-color-dodge' },
  '{"mix-blend-mode":"color-burn"}': { 'value': 'mix-blend-color-burn' },
  '{"mix-blend-mode":"hard-light"}': { 'value': 'mix-blend-hard-light' },
  '{"mix-blend-mode":"soft-light"}': { 'value': 'mix-blend-soft-light' },
  '{"mix-blend-mode":"difference"}': { 'value': 'mix-blend-difference' },
  '{"mix-blend-mode":"exclusion"}': { 'value': 'mix-blend-exclusion' },
  '{"mix-blend-mode":"hue"}': { 'value': 'mix-blend-hue' },
  '{"mix-blend-mode":"saturation"}': { 'value': 'mix-blend-saturation' },
  '{"mix-blend-mode":"color"}': { 'value': 'mix-blend-color' },
  '{"mix-blend-mode":"luminosity"}': { 'value': 'mix-blend-luminosity' },
  '{"mix-blend-mode":"plus-darker"}': { 'value': 'mix-blend-plus-darker' },
  '{"mix-blend-mode":"plus-lighter"}': { 'value': 'mix-blend-plus-lighter' },
  '{"mask-mode":"alpha"}': { 'value': 'mask-alpha' },
  '{"mask-mode":"luminance"}': { 'value': 'mask-luminance' },
  '{"mask-mode":"match-source"}': { 'value': 'mask-match' },
  '{"grid-template-rows":"repeat(<number>, minmax(0, 1fr))"}': {
    'value': 'grid-rows-<number>',
  },
  '{"grid-template-rows":"none"}': { 'value': 'grid-rows-none' },
  '{"grid-template-rows":"subgrid"}': { 'value': 'grid-rows-subgrid' },
  '{"grid-template-rows":"<value>"}': { 'value': 'grid-rows-[<value>]' },
  '{"grid-template-rows":"var(<custom-property>)"}': {
    'value': 'grid-rows-(<custom-property>)',
  },
  '{"perspective-origin":"center"}': { 'value': 'perspective-origin-center' },
  '{"perspective-origin":"top"}': { 'value': 'perspective-origin-top' },
  '{"perspective-origin":"top right"}': {
    'value': 'perspective-origin-top-right',
  },
  '{"perspective-origin":"right"}': { 'value': 'perspective-origin-right' },
  '{"perspective-origin":"bottom right"}': {
    'value': 'perspective-origin-bottom-right',
  },
  '{"perspective-origin":"bottom"}': { 'value': 'perspective-origin-bottom' },
  '{"perspective-origin":"bottom left"}': {
    'value': 'perspective-origin-bottom-left',
  },
  '{"perspective-origin":"left"}': { 'value': 'perspective-origin-left' },
  '{"perspective-origin":"top left"}': {
    'value': 'perspective-origin-top-left',
  },
  '{"perspective-origin":"var(<custom-property>)"}': {
    'value': 'perspective-origin-(<custom-property>)',
  },
  '{"perspective-origin":"<value>"}': {
    'value': 'perspective-origin-[<value>]',
  },
  '{"outline-offset":"<number>px"}': { 'value': 'outline-offset-<number>' },
  '{"outline-offset":"calc(<number>px * -1)"}': {
    'value': '-outline-offset-<number>',
  },
  '{"outline-offset":"var(<custom-property>)"}': {
    'value': 'outline-offset-(<custom-property>)',
  },
  '{"outline-offset":"<value>"}': { 'value': 'outline-offset-[<value>]' },
  '{"mask-size":"auto"}': { 'value': 'mask-auto' },
  '{"mask-size":"cover"}': { 'value': 'mask-cover' },
  '{"mask-size":"contain"}': { 'value': 'mask-contain' },
  '{"mask-size":"var(<custom-property>)"}': {
    'value': 'mask-size-(<custom-property>)',
  },
  '{"mask-size":"<value>"}': { 'value': 'mask-size-[<value>]' },
  '{"accent-color":"inherit"}': { 'value': 'accent-inherit' },
  '{"accent-color":"currentColor"}': { 'value': 'accent-current' },
  '{"accent-color":"transparent"}': { 'value': 'accent-transparent' },
  '{"accent-color":"var(--color-black)"}': { 'value': 'accent-black' },
  '{"accent-color":"var(--color-white)"}': { 'value': 'accent-white' },
  '{"accent-color":"var(--color-red-50)"}': { 'value': 'accent-red-50' },
  '{"accent-color":"var(--color-red-100)"}': { 'value': 'accent-red-100' },
  '{"accent-color":"var(--color-red-200)"}': { 'value': 'accent-red-200' },
  '{"accent-color":"var(--color-red-300)"}': { 'value': 'accent-red-300' },
  '{"accent-color":"var(--color-red-400)"}': { 'value': 'accent-red-400' },
  '{"accent-color":"var(--color-red-500)"}': { 'value': 'accent-red-500' },
  '{"accent-color":"var(--color-red-600)"}': { 'value': 'accent-red-600' },
  '{"accent-color":"var(--color-red-700)"}': { 'value': 'accent-red-700' },
  '{"accent-color":"var(--color-red-800)"}': { 'value': 'accent-red-800' },
  '{"accent-color":"var(--color-red-900)"}': { 'value': 'accent-red-900' },
  '{"accent-color":"var(--color-red-950)"}': { 'value': 'accent-red-950' },
  '{"accent-color":"var(--color-orange-50)"}': { 'value': 'accent-orange-50' },
  '{"accent-color":"var(--color-orange-100)"}': {
    'value': 'accent-orange-100',
  },
  '{"accent-color":"var(--color-orange-200)"}': {
    'value': 'accent-orange-200',
  },
  '{"accent-color":"var(--color-orange-300)"}': {
    'value': 'accent-orange-300',
  },
  '{"accent-color":"var(--color-orange-400)"}': {
    'value': 'accent-orange-400',
  },
  '{"accent-color":"var(--color-orange-500)"}': {
    'value': 'accent-orange-500',
  },
  '{"accent-color":"var(--color-orange-600)"}': {
    'value': 'accent-orange-600',
  },
  '{"accent-color":"var(--color-orange-700)"}': {
    'value': 'accent-orange-700',
  },
  '{"accent-color":"var(--color-orange-800)"}': {
    'value': 'accent-orange-800',
  },
  '{"accent-color":"var(--color-orange-900)"}': {
    'value': 'accent-orange-900',
  },
  '{"accent-color":"var(--color-orange-950)"}': {
    'value': 'accent-orange-950',
  },
  '{"accent-color":"var(--color-amber-50)"}': { 'value': 'accent-amber-50' },
  '{"accent-color":"var(--color-amber-100)"}': { 'value': 'accent-amber-100' },
  '{"accent-color":"var(--color-amber-200)"}': { 'value': 'accent-amber-200' },
  '{"accent-color":"var(--color-amber-300)"}': { 'value': 'accent-amber-300' },
  '{"accent-color":"var(--color-amber-400)"}': { 'value': 'accent-amber-400' },
  '{"accent-color":"var(--color-amber-500)"}': { 'value': 'accent-amber-500' },
  '{"accent-color":"var(--color-amber-600)"}': { 'value': 'accent-amber-600' },
  '{"accent-color":"var(--color-amber-700)"}': { 'value': 'accent-amber-700' },
  '{"accent-color":"var(--color-amber-800)"}': { 'value': 'accent-amber-800' },
  '{"accent-color":"var(--color-amber-900)"}': { 'value': 'accent-amber-900' },
  '{"accent-color":"var(--color-amber-950)"}': { 'value': 'accent-amber-950' },
  '{"accent-color":"var(--color-yellow-50)"}': { 'value': 'accent-yellow-50' },
  '{"accent-color":"var(--color-yellow-100)"}': {
    'value': 'accent-yellow-100',
  },
  '{"accent-color":"var(--color-yellow-200)"}': {
    'value': 'accent-yellow-200',
  },
  '{"accent-color":"var(--color-yellow-300)"}': {
    'value': 'accent-yellow-300',
  },
  '{"accent-color":"var(--color-yellow-400)"}': {
    'value': 'accent-yellow-400',
  },
  '{"accent-color":"var(--color-yellow-500)"}': {
    'value': 'accent-yellow-500',
  },
  '{"accent-color":"var(--color-yellow-600)"}': {
    'value': 'accent-yellow-600',
  },
  '{"accent-color":"var(--color-yellow-700)"}': {
    'value': 'accent-yellow-700',
  },
  '{"accent-color":"var(--color-yellow-800)"}': {
    'value': 'accent-yellow-800',
  },
  '{"accent-color":"var(--color-yellow-900)"}': {
    'value': 'accent-yellow-900',
  },
  '{"accent-color":"var(--color-yellow-950)"}': {
    'value': 'accent-yellow-950',
  },
  '{"accent-color":"var(--color-lime-50)"}': { 'value': 'accent-lime-50' },
  '{"accent-color":"var(--color-lime-100)"}': { 'value': 'accent-lime-100' },
  '{"accent-color":"var(--color-lime-200)"}': { 'value': 'accent-lime-200' },
  '{"accent-color":"var(--color-lime-300)"}': { 'value': 'accent-lime-300' },
  '{"accent-color":"var(--color-lime-400)"}': { 'value': 'accent-lime-400' },
  '{"accent-color":"var(--color-lime-500)"}': { 'value': 'accent-lime-500' },
  '{"accent-color":"var(--color-lime-600)"}': { 'value': 'accent-lime-600' },
  '{"accent-color":"var(--color-lime-700)"}': { 'value': 'accent-lime-700' },
  '{"accent-color":"var(--color-lime-800)"}': { 'value': 'accent-lime-800' },
  '{"accent-color":"var(--color-lime-900)"}': { 'value': 'accent-lime-900' },
  '{"accent-color":"var(--color-lime-950)"}': { 'value': 'accent-lime-950' },
  '{"accent-color":"var(--color-green-50)"}': { 'value': 'accent-green-50' },
  '{"accent-color":"var(--color-green-100)"}': { 'value': 'accent-green-100' },
  '{"accent-color":"var(--color-green-200)"}': { 'value': 'accent-green-200' },
  '{"accent-color":"var(--color-green-300)"}': { 'value': 'accent-green-300' },
  '{"accent-color":"var(--color-green-400)"}': { 'value': 'accent-green-400' },
  '{"accent-color":"var(--color-green-500)"}': { 'value': 'accent-green-500' },
  '{"accent-color":"var(--color-green-600)"}': { 'value': 'accent-green-600' },
  '{"accent-color":"var(--color-green-700)"}': { 'value': 'accent-green-700' },
  '{"accent-color":"var(--color-green-800)"}': { 'value': 'accent-green-800' },
  '{"accent-color":"var(--color-green-900)"}': { 'value': 'accent-green-900' },
  '{"accent-color":"var(--color-green-950)"}': { 'value': 'accent-green-950' },
  '{"accent-color":"var(--color-emerald-50)"}': {
    'value': 'accent-emerald-50',
  },
  '{"accent-color":"var(--color-emerald-100)"}': {
    'value': 'accent-emerald-100',
  },
  '{"accent-color":"var(--color-emerald-200)"}': {
    'value': 'accent-emerald-200',
  },
  '{"accent-color":"var(--color-emerald-300)"}': {
    'value': 'accent-emerald-300',
  },
  '{"accent-color":"var(--color-emerald-400)"}': {
    'value': 'accent-emerald-400',
  },
  '{"accent-color":"var(--color-emerald-500)"}': {
    'value': 'accent-emerald-500',
  },
  '{"accent-color":"var(--color-emerald-600)"}': {
    'value': 'accent-emerald-600',
  },
  '{"accent-color":"var(--color-emerald-700)"}': {
    'value': 'accent-emerald-700',
  },
  '{"accent-color":"var(--color-emerald-800)"}': {
    'value': 'accent-emerald-800',
  },
  '{"accent-color":"var(--color-emerald-900)"}': {
    'value': 'accent-emerald-900',
  },
  '{"accent-color":"var(--color-emerald-950)"}': {
    'value': 'accent-emerald-950',
  },
  '{"accent-color":"var(--color-teal-50)"}': { 'value': 'accent-teal-50' },
  '{"accent-color":"var(--color-teal-100)"}': { 'value': 'accent-teal-100' },
  '{"accent-color":"var(--color-teal-200)"}': { 'value': 'accent-teal-200' },
  '{"accent-color":"var(--color-teal-300)"}': { 'value': 'accent-teal-300' },
  '{"accent-color":"var(--color-teal-400)"}': { 'value': 'accent-teal-400' },
  '{"accent-color":"var(--color-teal-500)"}': { 'value': 'accent-teal-500' },
  '{"accent-color":"var(--color-teal-600)"}': { 'value': 'accent-teal-600' },
  '{"accent-color":"var(--color-teal-700)"}': { 'value': 'accent-teal-700' },
  '{"accent-color":"var(--color-teal-800)"}': { 'value': 'accent-teal-800' },
  '{"accent-color":"var(--color-teal-900)"}': { 'value': 'accent-teal-900' },
  '{"accent-color":"var(--color-teal-950)"}': { 'value': 'accent-teal-950' },
  '{"accent-color":"var(--color-cyan-50)"}': { 'value': 'accent-cyan-50' },
  '{"accent-color":"var(--color-cyan-100)"}': { 'value': 'accent-cyan-100' },
  '{"accent-color":"var(--color-cyan-200)"}': { 'value': 'accent-cyan-200' },
  '{"accent-color":"var(--color-cyan-300)"}': { 'value': 'accent-cyan-300' },
  '{"accent-color":"var(--color-cyan-400)"}': { 'value': 'accent-cyan-400' },
  '{"accent-color":"var(--color-cyan-500)"}': { 'value': 'accent-cyan-500' },
  '{"accent-color":"var(--color-cyan-600)"}': { 'value': 'accent-cyan-600' },
  '{"accent-color":"var(--color-cyan-700)"}': { 'value': 'accent-cyan-700' },
  '{"accent-color":"var(--color-cyan-800)"}': { 'value': 'accent-cyan-800' },
  '{"accent-color":"var(--color-cyan-900)"}': { 'value': 'accent-cyan-900' },
  '{"accent-color":"var(--color-cyan-950)"}': { 'value': 'accent-cyan-950' },
  '{"accent-color":"var(--color-sky-50)"}': { 'value': 'accent-sky-50' },
  '{"accent-color":"var(--color-sky-100)"}': { 'value': 'accent-sky-100' },
  '{"accent-color":"var(--color-sky-200)"}': { 'value': 'accent-sky-200' },
  '{"accent-color":"var(--color-sky-300)"}': { 'value': 'accent-sky-300' },
  '{"accent-color":"var(--color-sky-400)"}': { 'value': 'accent-sky-400' },
  '{"accent-color":"var(--color-sky-500)"}': { 'value': 'accent-sky-500' },
  '{"accent-color":"var(--color-sky-600)"}': { 'value': 'accent-sky-600' },
  '{"accent-color":"var(--color-sky-700)"}': { 'value': 'accent-sky-700' },
  '{"accent-color":"var(--color-sky-800)"}': { 'value': 'accent-sky-800' },
  '{"accent-color":"var(--color-sky-900)"}': { 'value': 'accent-sky-900' },
  '{"accent-color":"var(--color-sky-950)"}': { 'value': 'accent-sky-950' },
  '{"accent-color":"var(--color-blue-50)"}': { 'value': 'accent-blue-50' },
  '{"accent-color":"var(--color-blue-100)"}': { 'value': 'accent-blue-100' },
  '{"accent-color":"var(--color-blue-200)"}': { 'value': 'accent-blue-200' },
  '{"accent-color":"var(--color-blue-300)"}': { 'value': 'accent-blue-300' },
  '{"accent-color":"var(--color-blue-400)"}': { 'value': 'accent-blue-400' },
  '{"accent-color":"var(--color-blue-500)"}': { 'value': 'accent-blue-500' },
  '{"accent-color":"var(--color-blue-600)"}': { 'value': 'accent-blue-600' },
  '{"accent-color":"var(--color-blue-700)"}': { 'value': 'accent-blue-700' },
  '{"accent-color":"var(--color-blue-800)"}': { 'value': 'accent-blue-800' },
  '{"accent-color":"var(--color-blue-900)"}': { 'value': 'accent-blue-900' },
  '{"accent-color":"var(--color-blue-950)"}': { 'value': 'accent-blue-950' },
  '{"accent-color":"var(--color-indigo-50)"}': { 'value': 'accent-indigo-50' },
  '{"accent-color":"var(--color-indigo-100)"}': {
    'value': 'accent-indigo-100',
  },
  '{"accent-color":"var(--color-indigo-200)"}': {
    'value': 'accent-indigo-200',
  },
  '{"accent-color":"var(--color-indigo-300)"}': {
    'value': 'accent-indigo-300',
  },
  '{"accent-color":"var(--color-indigo-400)"}': {
    'value': 'accent-indigo-400',
  },
  '{"accent-color":"var(--color-indigo-500)"}': {
    'value': 'accent-indigo-500',
  },
  '{"accent-color":"var(--color-indigo-600)"}': {
    'value': 'accent-indigo-600',
  },
  '{"accent-color":"var(--color-indigo-700)"}': {
    'value': 'accent-indigo-700',
  },
  '{"accent-color":"var(--color-indigo-800)"}': {
    'value': 'accent-indigo-800',
  },
  '{"accent-color":"var(--color-indigo-900)"}': {
    'value': 'accent-indigo-900',
  },
  '{"accent-color":"var(--color-indigo-950)"}': {
    'value': 'accent-indigo-950',
  },
  '{"accent-color":"var(--color-violet-50)"}': { 'value': 'accent-violet-50' },
  '{"accent-color":"var(--color-violet-100)"}': {
    'value': 'accent-violet-100',
  },
  '{"accent-color":"var(--color-violet-200)"}': {
    'value': 'accent-violet-200',
  },
  '{"accent-color":"var(--color-violet-300)"}': {
    'value': 'accent-violet-300',
  },
  '{"accent-color":"var(--color-violet-400)"}': {
    'value': 'accent-violet-400',
  },
  '{"accent-color":"var(--color-violet-500)"}': {
    'value': 'accent-violet-500',
  },
  '{"accent-color":"var(--color-violet-600)"}': {
    'value': 'accent-violet-600',
  },
  '{"accent-color":"var(--color-violet-700)"}': {
    'value': 'accent-violet-700',
  },
  '{"accent-color":"var(--color-violet-800)"}': {
    'value': 'accent-violet-800',
  },
  '{"accent-color":"var(--color-violet-900)"}': {
    'value': 'accent-violet-900',
  },
  '{"accent-color":"var(--color-violet-950)"}': {
    'value': 'accent-violet-950',
  },
  '{"accent-color":"var(--color-purple-50)"}': { 'value': 'accent-purple-50' },
  '{"accent-color":"var(--color-purple-100)"}': {
    'value': 'accent-purple-100',
  },
  '{"accent-color":"var(--color-purple-200)"}': {
    'value': 'accent-purple-200',
  },
  '{"accent-color":"var(--color-purple-300)"}': {
    'value': 'accent-purple-300',
  },
  '{"accent-color":"var(--color-purple-400)"}': {
    'value': 'accent-purple-400',
  },
  '{"accent-color":"var(--color-purple-500)"}': {
    'value': 'accent-purple-500',
  },
  '{"accent-color":"var(--color-purple-600)"}': {
    'value': 'accent-purple-600',
  },
  '{"accent-color":"var(--color-purple-700)"}': {
    'value': 'accent-purple-700',
  },
  '{"accent-color":"var(--color-purple-800)"}': {
    'value': 'accent-purple-800',
  },
  '{"accent-color":"var(--color-purple-900)"}': {
    'value': 'accent-purple-900',
  },
  '{"accent-color":"var(--color-purple-950)"}': {
    'value': 'accent-purple-950',
  },
  '{"accent-color":"var(--color-fuchsia-50)"}': {
    'value': 'accent-fuchsia-50',
  },
  '{"accent-color":"var(--color-fuchsia-100)"}': {
    'value': 'accent-fuchsia-100',
  },
  '{"accent-color":"var(--color-fuchsia-200)"}': {
    'value': 'accent-fuchsia-200',
  },
  '{"accent-color":"var(--color-fuchsia-300)"}': {
    'value': 'accent-fuchsia-300',
  },
  '{"accent-color":"var(--color-fuchsia-400)"}': {
    'value': 'accent-fuchsia-400',
  },
  '{"accent-color":"var(--color-fuchsia-500)"}': {
    'value': 'accent-fuchsia-500',
  },
  '{"accent-color":"var(--color-fuchsia-600)"}': {
    'value': 'accent-fuchsia-600',
  },
  '{"accent-color":"var(--color-fuchsia-700)"}': {
    'value': 'accent-fuchsia-700',
  },
  '{"accent-color":"var(--color-fuchsia-800)"}': {
    'value': 'accent-fuchsia-800',
  },
  '{"accent-color":"var(--color-fuchsia-900)"}': {
    'value': 'accent-fuchsia-900',
  },
  '{"accent-color":"var(--color-fuchsia-950)"}': {
    'value': 'accent-fuchsia-950',
  },
  '{"accent-color":"var(--color-pink-50)"}': { 'value': 'accent-pink-50' },
  '{"accent-color":"var(--color-pink-100)"}': { 'value': 'accent-pink-100' },
  '{"accent-color":"var(--color-pink-200)"}': { 'value': 'accent-pink-200' },
  '{"accent-color":"var(--color-pink-300)"}': { 'value': 'accent-pink-300' },
  '{"accent-color":"var(--color-pink-400)"}': { 'value': 'accent-pink-400' },
  '{"accent-color":"var(--color-pink-500)"}': { 'value': 'accent-pink-500' },
  '{"accent-color":"var(--color-pink-600)"}': { 'value': 'accent-pink-600' },
  '{"accent-color":"var(--color-pink-700)"}': { 'value': 'accent-pink-700' },
  '{"accent-color":"var(--color-pink-800)"}': { 'value': 'accent-pink-800' },
  '{"accent-color":"var(--color-pink-900)"}': { 'value': 'accent-pink-900' },
  '{"accent-color":"var(--color-pink-950)"}': { 'value': 'accent-pink-950' },
  '{"accent-color":"var(--color-rose-50)"}': { 'value': 'accent-rose-50' },
  '{"accent-color":"var(--color-rose-100)"}': { 'value': 'accent-rose-100' },
  '{"accent-color":"var(--color-rose-200)"}': { 'value': 'accent-rose-200' },
  '{"accent-color":"var(--color-rose-300)"}': { 'value': 'accent-rose-300' },
  '{"accent-color":"var(--color-rose-400)"}': { 'value': 'accent-rose-400' },
  '{"accent-color":"var(--color-rose-500)"}': { 'value': 'accent-rose-500' },
  '{"accent-color":"var(--color-rose-600)"}': { 'value': 'accent-rose-600' },
  '{"accent-color":"var(--color-rose-700)"}': { 'value': 'accent-rose-700' },
  '{"accent-color":"var(--color-rose-800)"}': { 'value': 'accent-rose-800' },
  '{"accent-color":"var(--color-rose-900)"}': { 'value': 'accent-rose-900' },
  '{"accent-color":"var(--color-rose-950)"}': { 'value': 'accent-rose-950' },
  '{"accent-color":"var(--color-slate-50)"}': { 'value': 'accent-slate-50' },
  '{"accent-color":"var(--color-slate-100)"}': { 'value': 'accent-slate-100' },
  '{"accent-color":"var(--color-slate-200)"}': { 'value': 'accent-slate-200' },
  '{"accent-color":"var(--color-slate-300)"}': { 'value': 'accent-slate-300' },
  '{"accent-color":"var(--color-slate-400)"}': { 'value': 'accent-slate-400' },
  '{"accent-color":"var(--color-slate-500)"}': { 'value': 'accent-slate-500' },
  '{"accent-color":"var(--color-slate-600)"}': { 'value': 'accent-slate-600' },
  '{"accent-color":"var(--color-slate-700)"}': { 'value': 'accent-slate-700' },
  '{"accent-color":"var(--color-slate-800)"}': { 'value': 'accent-slate-800' },
  '{"accent-color":"var(--color-slate-900)"}': { 'value': 'accent-slate-900' },
  '{"accent-color":"var(--color-slate-950)"}': { 'value': 'accent-slate-950' },
  '{"accent-color":"var(--color-gray-50)"}': { 'value': 'accent-gray-50' },
  '{"accent-color":"var(--color-gray-100)"}': { 'value': 'accent-gray-100' },
  '{"accent-color":"var(--color-gray-200)"}': { 'value': 'accent-gray-200' },
  '{"accent-color":"var(--color-gray-300)"}': { 'value': 'accent-gray-300' },
  '{"accent-color":"var(--color-gray-400)"}': { 'value': 'accent-gray-400' },
  '{"accent-color":"var(--color-gray-500)"}': { 'value': 'accent-gray-500' },
  '{"accent-color":"var(--color-gray-600)"}': { 'value': 'accent-gray-600' },
  '{"accent-color":"var(--color-gray-700)"}': { 'value': 'accent-gray-700' },
  '{"accent-color":"var(--color-gray-800)"}': { 'value': 'accent-gray-800' },
  '{"accent-color":"var(--color-gray-900)"}': { 'value': 'accent-gray-900' },
  '{"accent-color":"var(--color-gray-950)"}': { 'value': 'accent-gray-950' },
  '{"accent-color":"var(--color-zinc-50)"}': { 'value': 'accent-zinc-50' },
  '{"accent-color":"var(--color-zinc-100)"}': { 'value': 'accent-zinc-100' },
  '{"accent-color":"var(--color-zinc-200)"}': { 'value': 'accent-zinc-200' },
  '{"accent-color":"var(--color-zinc-300)"}': { 'value': 'accent-zinc-300' },
  '{"accent-color":"var(--color-zinc-400)"}': { 'value': 'accent-zinc-400' },
  '{"accent-color":"var(--color-zinc-500)"}': { 'value': 'accent-zinc-500' },
  '{"accent-color":"var(--color-zinc-600)"}': { 'value': 'accent-zinc-600' },
  '{"accent-color":"var(--color-zinc-700)"}': { 'value': 'accent-zinc-700' },
  '{"accent-color":"var(--color-zinc-800)"}': { 'value': 'accent-zinc-800' },
  '{"accent-color":"var(--color-zinc-900)"}': { 'value': 'accent-zinc-900' },
  '{"accent-color":"var(--color-zinc-950)"}': { 'value': 'accent-zinc-950' },
  '{"accent-color":"var(--color-neutral-50)"}': {
    'value': 'accent-neutral-50',
  },
  '{"accent-color":"var(--color-neutral-100)"}': {
    'value': 'accent-neutral-100',
  },
  '{"accent-color":"var(--color-neutral-200)"}': {
    'value': 'accent-neutral-200',
  },
  '{"accent-color":"var(--color-neutral-300)"}': {
    'value': 'accent-neutral-300',
  },
  '{"accent-color":"var(--color-neutral-400)"}': {
    'value': 'accent-neutral-400',
  },
  '{"accent-color":"var(--color-neutral-500)"}': {
    'value': 'accent-neutral-500',
  },
  '{"accent-color":"var(--color-neutral-600)"}': {
    'value': 'accent-neutral-600',
  },
  '{"accent-color":"var(--color-neutral-700)"}': {
    'value': 'accent-neutral-700',
  },
  '{"accent-color":"var(--color-neutral-800)"}': {
    'value': 'accent-neutral-800',
  },
  '{"accent-color":"var(--color-neutral-900)"}': {
    'value': 'accent-neutral-900',
  },
  '{"accent-color":"var(--color-neutral-950)"}': {
    'value': 'accent-neutral-950',
  },
  '{"accent-color":"var(--color-stone-50)"}': { 'value': 'accent-stone-50' },
  '{"accent-color":"var(--color-stone-100)"}': { 'value': 'accent-stone-100' },
  '{"accent-color":"var(--color-stone-200)"}': { 'value': 'accent-stone-200' },
  '{"accent-color":"var(--color-stone-300)"}': { 'value': 'accent-stone-300' },
  '{"accent-color":"var(--color-stone-400)"}': { 'value': 'accent-stone-400' },
  '{"accent-color":"var(--color-stone-500)"}': { 'value': 'accent-stone-500' },
  '{"accent-color":"var(--color-stone-600)"}': { 'value': 'accent-stone-600' },
  '{"accent-color":"var(--color-stone-700)"}': { 'value': 'accent-stone-700' },
  '{"accent-color":"var(--color-stone-800)"}': { 'value': 'accent-stone-800' },
  '{"accent-color":"var(--color-stone-900)"}': { 'value': 'accent-stone-900' },
  '{"accent-color":"var(--color-stone-950)"}': { 'value': 'accent-stone-950' },
  '{"accent-color":"var(<custom-property>)"}': {
    'value': 'accent-<custom-property>',
  },
  '{"accent-color":"<value>"}': { 'value': 'accent-[<value>]' },
  '{"order":"<number>"}': { 'value': 'order-<number>' },
  '{"order":"calc(<number> * -1)"}': { 'value': '-order-<number>' },
  '{"order":"calc(-infinity)"}': { 'value': 'order-first' },
  '{"order":"calc(infinity)"}': { 'value': 'order-last' },
  '{"order":"0"}': { 'value': 'order-none' },
  '{"order":"var(<custom-property>)"}': {
    'value': 'order-(<custom-property>)',
  },
  '{"order":"<value>"}': { 'value': 'order-[<value>]' },
  '{"grid-auto-rows":"auto"}': { 'value': 'auto-rows-auto' },
  '{"grid-auto-rows":"min-content"}': { 'value': 'auto-rows-min' },
  '{"grid-auto-rows":"max-content"}': { 'value': 'auto-rows-max' },
  '{"grid-auto-rows":"minmax(0, 1fr)"}': { 'value': 'auto-rows-fr' },
  '{"grid-auto-rows":"var(<custom-property>)"}': {
    'value': 'auto-rows-(<custom-property>)',
  },
  '{"grid-auto-rows":"<value>"}': { 'value': 'auto-rows-[<value>]' },
  '{"align-content":"normal"}': { 'value': 'content-normal' },
  '{"align-content":"center"}': { 'value': 'content-center' },
  '{"align-content":"flex-start"}': { 'value': 'content-start' },
  '{"align-content":"flex-end"}': { 'value': 'content-end' },
  '{"align-content":"space-between"}': { 'value': 'content-between' },
  '{"align-content":"space-around"}': { 'value': 'content-around' },
  '{"align-content":"space-evenly"}': { 'value': 'content-evenly' },
  '{"align-content":"baseline"}': { 'value': 'content-baseline' },
  '{"align-content":"stretch"}': { 'value': 'content-stretch' },
  '{"scroll-padding":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-p-<number>',
  },
  '{"scroll-padding":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-p-<number>',
  },
  '{"scroll-padding":"var(<custom-property>)"}': {
    'value': 'scroll-p-(<custom-property>)',
  },
  '{"scroll-padding":"<value>"}': { 'value': 'scroll-p-[<value>]' },
  '{"scroll-padding-inline":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-px-<number>',
  },
  '{"scroll-padding-inline":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-px-<number>',
  },
  '{"scroll-padding-inline":"var(<custom-property>)"}': {
    'value': 'scroll-px-(<custom-property>)',
  },
  '{"scroll-padding-inline":"<value>"}': { 'value': 'scroll-px-[<value>]' },
  '{"scroll-padding-block":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-py-<number>',
  },
  '{"scroll-padding-block":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-py-<number>',
  },
  '{"scroll-padding-block":"var(<custom-property>)"}': {
    'value': 'scroll-py-(<custom-property>)',
  },
  '{"scroll-padding-block":"<value>"}': { 'value': 'scroll-py-[<value>]' },
  '{"scroll-padding-inline-start":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-ps-<number>',
  },
  '{"scroll-padding-inline-start":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-ps-<number>',
  },
  '{"scroll-padding-inline-start":"var(<custom-property>)"}': {
    'value': 'scroll-ps-(<custom-property>)',
  },
  '{"scroll-padding-inline-start":"<value>"}': {
    'value': 'scroll-ps-[<value>]',
  },
  '{"scroll-padding-inline-end":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-pe-<number>',
  },
  '{"scroll-padding-inline-end":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-pe-<number>',
  },
  '{"scroll-padding-inline-end":"var(<custom-property>)"}': {
    'value': 'scroll-pe-(<custom-property>)',
  },
  '{"scroll-padding-inline-end":"<value>"}': { 'value': 'scroll-pe-[<value>]' },
  '{"scroll-padding-top":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-pt-<number>',
  },
  '{"scroll-padding-top":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-pt-<number>',
  },
  '{"scroll-padding-top":"var(<custom-property>)"}': {
    'value': 'scroll-pt-(<custom-property>)',
  },
  '{"scroll-padding-top":"<value>"}': { 'value': 'scroll-pt-[<value>]' },
  '{"scroll-padding-right":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-pr-<number>',
  },
  '{"scroll-padding-right":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-pr-<number>',
  },
  '{"scroll-padding-right":"var(<custom-property>)"}': {
    'value': 'scroll-pr-(<custom-property>)',
  },
  '{"scroll-padding-right":"<value>"}': { 'value': 'scroll-pr-[<value>]' },
  '{"scroll-padding-bottom":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-pb-<number>',
  },
  '{"scroll-padding-bottom":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-pb-<number>',
  },
  '{"scroll-padding-bottom":"var(<custom-property>)"}': {
    'value': 'scroll-pb-(<custom-property>)',
  },
  '{"scroll-padding-bottom":"<value>"}': { 'value': 'scroll-pb-[<value>]' },
  '{"scroll-padding-left":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-pl-<number>',
  },
  '{"scroll-padding-left":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-pl-<number>',
  },
  '{"scroll-padding-left":"var(<custom-property>)"}': {
    'value': 'scroll-pl-(<custom-property>)',
  },
  '{"scroll-padding-left":"<value>"}': { 'value': 'scroll-pl-[<value>]' },
  '{"gap":"calc(var(--spacing) * <value>)"}': { 'value': 'gap-<number>' },
  '{"gap":"var(<custom-property>)"}': { 'value': 'gap-(<custom-property>)' },
  '{"gap":"<value>"}': { 'value': 'gap-[<value>]' },
  '{"column-gap":"calc(var(--spacing) * <value>)"}': {
    'value': 'gap-x-<number>',
  },
  '{"column-gap":"var(<custom-property>)"}': {
    'value': 'gap-x-(<custom-property>)',
  },
  '{"column-gap":"<value>"}': { 'value': 'gap-x-[<value>]' },
  '{"row-gap":"calc(var(--spacing) * <value>)"}': { 'value': 'gap-y-<number>' },
  '{"row-gap":"var(<custom-property>)"}': {
    'value': 'gap-y-(<custom-property>)',
  },
  '{"row-gap":"<value>"}': { 'value': 'gap-y-[<value>]' },
  '{"box-shadow":"var(--shadow-2xs)"}': { 'value': 'shadow-2xs' },
  '{"box-shadow":"var(--shadow-xs)"}': { 'value': 'shadow-xs' },
  '{"box-shadow":"var(--shadow-sm)"}': { 'value': 'shadow-sm' },
  '{"box-shadow":"var(--shadow-md)"}': { 'value': 'shadow-md' },
  '{"box-shadow":"var(--shadow-lg)"}': { 'value': 'shadow-lg' },
  '{"box-shadow":"var(--shadow-xl)"}': { 'value': 'shadow-xl' },
  '{"box-shadow":"var(--shadow-2xl)"}': { 'value': 'shadow-2xl' },
  '{"box-shadow":"0 0 #0000"}': { 'value': 'shadow-none' },
  '{"box-shadow":"var(<custom-property>)"}': {
    'value': 'inset-shadow-(<custom-property>)',
  },
  '{"--tw-shadow-color":"var(<custom-property>)"}': {
    'value': 'shadow-(color:<custom-property>)',
  },
  '{"box-shadow":"<value>"}': { 'value': 'inset-shadow-[<value>]' },
  '{"--tw-shadow-color":"inherit"}': { 'value': 'shadow-inherit' },
  '{"--tw-shadow-color":"currentColor"}': { 'value': 'shadow-current' },
  '{"--tw-shadow-color":"transparent"}': { 'value': 'shadow-transparent' },
  '{"--tw-shadow-color":"var(--color-black)"}': { 'value': 'shadow-black' },
  '{"--tw-shadow-color":"var(--color-white)"}': { 'value': 'shadow-white' },
  '{"--tw-shadow-color":"var(--color-red-50)"}': { 'value': 'shadow-red-50' },
  '{"--tw-shadow-color":"var(--color-red-100)"}': { 'value': 'shadow-red-100' },
  '{"--tw-shadow-color":"var(--color-red-200)"}': { 'value': 'shadow-red-200' },
  '{"--tw-shadow-color":"var(--color-red-300)"}': { 'value': 'shadow-red-300' },
  '{"--tw-shadow-color":"var(--color-red-400)"}': { 'value': 'shadow-red-400' },
  '{"--tw-shadow-color":"var(--color-red-500)"}': { 'value': 'shadow-red-500' },
  '{"--tw-shadow-color":"var(--color-red-600)"}': { 'value': 'shadow-red-600' },
  '{"--tw-shadow-color":"var(--color-red-700)"}': { 'value': 'shadow-red-700' },
  '{"--tw-shadow-color":"var(--color-red-800)"}': { 'value': 'shadow-red-800' },
  '{"--tw-shadow-color":"var(--color-red-900)"}': { 'value': 'shadow-red-900' },
  '{"--tw-shadow-color":"var(--color-red-950)"}': { 'value': 'shadow-red-950' },
  '{"--tw-shadow-color":"var(--color-orange-50)"}': {
    'value': 'shadow-orange-50',
  },
  '{"--tw-shadow-color":"var(--color-orange-100)"}': {
    'value': 'shadow-orange-100',
  },
  '{"--tw-shadow-color":"var(--color-orange-200)"}': {
    'value': 'shadow-orange-200',
  },
  '{"--tw-shadow-color":"var(--color-orange-300)"}': {
    'value': 'shadow-orange-300',
  },
  '{"--tw-shadow-color":"var(--color-orange-400)"}': {
    'value': 'shadow-orange-400',
  },
  '{"--tw-shadow-color":"var(--color-orange-500)"}': {
    'value': 'shadow-orange-500',
  },
  '{"--tw-shadow-color":"var(--color-orange-600)"}': {
    'value': 'shadow-orange-600',
  },
  '{"--tw-shadow-color":"var(--color-orange-700)"}': {
    'value': 'shadow-orange-700',
  },
  '{"--tw-shadow-color":"var(--color-orange-800)"}': {
    'value': 'shadow-orange-800',
  },
  '{"--tw-shadow-color":"var(--color-orange-900)"}': {
    'value': 'shadow-orange-900',
  },
  '{"--tw-shadow-color":"var(--color-orange-950)"}': {
    'value': 'shadow-orange-950',
  },
  '{"--tw-shadow-color":"var(--color-amber-50)"}': {
    'value': 'shadow-amber-50',
  },
  '{"--tw-shadow-color":"var(--color-amber-100)"}': {
    'value': 'shadow-amber-100',
  },
  '{"--tw-shadow-color":"var(--color-amber-200)"}': {
    'value': 'shadow-amber-200',
  },
  '{"--tw-shadow-color":"var(--color-amber-300)"}': {
    'value': 'shadow-amber-300',
  },
  '{"--tw-shadow-color":"var(--color-amber-400)"}': {
    'value': 'shadow-amber-400',
  },
  '{"--tw-shadow-color":"var(--color-amber-500)"}': {
    'value': 'shadow-amber-500',
  },
  '{"--tw-shadow-color":"var(--color-amber-600)"}': {
    'value': 'shadow-amber-600',
  },
  '{"--tw-shadow-color":"var(--color-amber-700)"}': {
    'value': 'shadow-amber-700',
  },
  '{"--tw-shadow-color":"var(--color-amber-800)"}': {
    'value': 'shadow-amber-800',
  },
  '{"--tw-shadow-color":"var(--color-amber-900)"}': {
    'value': 'shadow-amber-900',
  },
  '{"--tw-shadow-color":"var(--color-amber-950)"}': {
    'value': 'shadow-amber-950',
  },
  '{"--tw-shadow-color":"var(--color-yellow-50)"}': {
    'value': 'shadow-yellow-50',
  },
  '{"--tw-shadow-color":"var(--color-yellow-100)"}': {
    'value': 'shadow-yellow-100',
  },
  '{"--tw-shadow-color":"var(--color-yellow-200)"}': {
    'value': 'shadow-yellow-200',
  },
  '{"--tw-shadow-color":"var(--color-yellow-300)"}': {
    'value': 'shadow-yellow-300',
  },
  '{"--tw-shadow-color":"var(--color-yellow-400)"}': {
    'value': 'shadow-yellow-400',
  },
  '{"--tw-shadow-color":"var(--color-yellow-500)"}': {
    'value': 'shadow-yellow-500',
  },
  '{"--tw-shadow-color":"var(--color-yellow-600)"}': {
    'value': 'shadow-yellow-600',
  },
  '{"--tw-shadow-color":"var(--color-yellow-700)"}': {
    'value': 'shadow-yellow-700',
  },
  '{"--tw-shadow-color":"var(--color-yellow-800)"}': {
    'value': 'shadow-yellow-800',
  },
  '{"--tw-shadow-color":"var(--color-yellow-900)"}': {
    'value': 'shadow-yellow-900',
  },
  '{"--tw-shadow-color":"var(--color-yellow-950)"}': {
    'value': 'shadow-yellow-950',
  },
  '{"--tw-shadow-color":"var(--color-lime-50)"}': { 'value': 'shadow-lime-50' },
  '{"--tw-shadow-color":"var(--color-lime-100)"}': {
    'value': 'shadow-lime-100',
  },
  '{"--tw-shadow-color":"var(--color-lime-200)"}': {
    'value': 'shadow-lime-200',
  },
  '{"--tw-shadow-color":"var(--color-lime-300)"}': {
    'value': 'shadow-lime-300',
  },
  '{"--tw-shadow-color":"var(--color-lime-400)"}': {
    'value': 'shadow-lime-400',
  },
  '{"--tw-shadow-color":"var(--color-lime-500)"}': {
    'value': 'shadow-lime-500',
  },
  '{"--tw-shadow-color":"var(--color-lime-600)"}': {
    'value': 'shadow-lime-600',
  },
  '{"--tw-shadow-color":"var(--color-lime-700)"}': {
    'value': 'shadow-lime-700',
  },
  '{"--tw-shadow-color":"var(--color-lime-800)"}': {
    'value': 'shadow-lime-800',
  },
  '{"--tw-shadow-color":"var(--color-lime-900)"}': {
    'value': 'shadow-lime-900',
  },
  '{"--tw-shadow-color":"var(--color-lime-950)"}': {
    'value': 'shadow-lime-950',
  },
  '{"--tw-shadow-color":"var(--color-green-50)"}': {
    'value': 'shadow-green-50',
  },
  '{"--tw-shadow-color":"var(--color-green-100)"}': {
    'value': 'shadow-green-100',
  },
  '{"--tw-shadow-color":"var(--color-green-200)"}': {
    'value': 'shadow-green-200',
  },
  '{"--tw-shadow-color":"var(--color-green-300)"}': {
    'value': 'shadow-green-300',
  },
  '{"--tw-shadow-color":"var(--color-green-400)"}': {
    'value': 'shadow-green-400',
  },
  '{"--tw-shadow-color":"var(--color-green-500)"}': {
    'value': 'shadow-green-500',
  },
  '{"--tw-shadow-color":"var(--color-green-600)"}': {
    'value': 'shadow-green-600',
  },
  '{"--tw-shadow-color":"var(--color-green-700)"}': {
    'value': 'shadow-green-700',
  },
  '{"--tw-shadow-color":"var(--color-green-800)"}': {
    'value': 'shadow-green-800',
  },
  '{"--tw-shadow-color":"var(--color-green-900)"}': {
    'value': 'shadow-green-900',
  },
  '{"--tw-shadow-color":"var(--color-green-950)"}': {
    'value': 'shadow-green-950',
  },
  '{"--tw-shadow-color":"var(--color-emerald-50)"}': {
    'value': 'shadow-emerald-50',
  },
  '{"--tw-shadow-color":"var(--color-emerald-100)"}': {
    'value': 'shadow-emerald-100',
  },
  '{"--tw-shadow-color":"var(--color-emerald-200)"}': {
    'value': 'shadow-emerald-200',
  },
  '{"--tw-shadow-color":"var(--color-emerald-300)"}': {
    'value': 'shadow-emerald-300',
  },
  '{"--tw-shadow-color":"var(--color-emerald-400)"}': {
    'value': 'shadow-emerald-400',
  },
  '{"--tw-shadow-color":"var(--color-emerald-500)"}': {
    'value': 'shadow-emerald-500',
  },
  '{"--tw-shadow-color":"var(--color-emerald-600)"}': {
    'value': 'shadow-emerald-600',
  },
  '{"--tw-shadow-color":"var(--color-emerald-700)"}': {
    'value': 'shadow-emerald-700',
  },
  '{"--tw-shadow-color":"var(--color-emerald-800)"}': {
    'value': 'shadow-emerald-800',
  },
  '{"--tw-shadow-color":"var(--color-emerald-900)"}': {
    'value': 'shadow-emerald-900',
  },
  '{"--tw-shadow-color":"var(--color-emerald-950)"}': {
    'value': 'shadow-emerald-950',
  },
  '{"--tw-shadow-color":"var(--color-teal-50)"}': { 'value': 'shadow-teal-50' },
  '{"--tw-shadow-color":"var(--color-teal-100)"}': {
    'value': 'shadow-teal-100',
  },
  '{"--tw-shadow-color":"var(--color-teal-200)"}': {
    'value': 'shadow-teal-200',
  },
  '{"--tw-shadow-color":"var(--color-teal-300)"}': {
    'value': 'shadow-teal-300',
  },
  '{"--tw-shadow-color":"var(--color-teal-400)"}': {
    'value': 'shadow-teal-400',
  },
  '{"--tw-shadow-color":"var(--color-teal-500)"}': {
    'value': 'shadow-teal-500',
  },
  '{"--tw-shadow-color":"var(--color-teal-600)"}': {
    'value': 'shadow-teal-600',
  },
  '{"--tw-shadow-color":"var(--color-teal-700)"}': {
    'value': 'shadow-teal-700',
  },
  '{"--tw-shadow-color":"var(--color-teal-800)"}': {
    'value': 'shadow-teal-800',
  },
  '{"--tw-shadow-color":"var(--color-teal-900)"}': {
    'value': 'shadow-teal-900',
  },
  '{"--tw-shadow-color":"var(--color-teal-950)"}': {
    'value': 'shadow-teal-950',
  },
  '{"--tw-shadow-color":"var(--color-cyan-50)"}': { 'value': 'shadow-cyan-50' },
  '{"--tw-shadow-color":"var(--color-cyan-100)"}': {
    'value': 'shadow-cyan-100',
  },
  '{"--tw-shadow-color":"var(--color-cyan-200)"}': {
    'value': 'shadow-cyan-200',
  },
  '{"--tw-shadow-color":"var(--color-cyan-300)"}': {
    'value': 'shadow-cyan-300',
  },
  '{"--tw-shadow-color":"var(--color-cyan-400)"}': {
    'value': 'shadow-cyan-400',
  },
  '{"--tw-shadow-color":"var(--color-cyan-500)"}': {
    'value': 'shadow-cyan-500',
  },
  '{"--tw-shadow-color":"var(--color-cyan-600)"}': {
    'value': 'shadow-cyan-600',
  },
  '{"--tw-shadow-color":"var(--color-cyan-700)"}': {
    'value': 'shadow-cyan-700',
  },
  '{"--tw-shadow-color":"var(--color-cyan-800)"}': {
    'value': 'shadow-cyan-800',
  },
  '{"--tw-shadow-color":"var(--color-cyan-900)"}': {
    'value': 'shadow-cyan-900',
  },
  '{"--tw-shadow-color":"var(--color-cyan-950)"}': {
    'value': 'shadow-cyan-950',
  },
  '{"--tw-shadow-color":"var(--color-sky-50)"}': { 'value': 'shadow-sky-50' },
  '{"--tw-shadow-color":"var(--color-sky-100)"}': { 'value': 'shadow-sky-100' },
  '{"--tw-shadow-color":"var(--color-sky-200)"}': { 'value': 'shadow-sky-200' },
  '{"--tw-shadow-color":"var(--color-sky-300)"}': { 'value': 'shadow-sky-300' },
  '{"--tw-shadow-color":"var(--color-sky-400)"}': { 'value': 'shadow-sky-400' },
  '{"--tw-shadow-color":"var(--color-sky-500)"}': { 'value': 'shadow-sky-500' },
  '{"--tw-shadow-color":"var(--color-sky-600)"}': { 'value': 'shadow-sky-600' },
  '{"--tw-shadow-color":"var(--color-sky-700)"}': { 'value': 'shadow-sky-700' },
  '{"--tw-shadow-color":"var(--color-sky-800)"}': { 'value': 'shadow-sky-800' },
  '{"--tw-shadow-color":"var(--color-sky-900)"}': { 'value': 'shadow-sky-900' },
  '{"--tw-shadow-color":"var(--color-sky-950)"}': { 'value': 'shadow-sky-950' },
  '{"--tw-shadow-color":"var(--color-blue-50)"}': { 'value': 'shadow-blue-50' },
  '{"--tw-shadow-color":"var(--color-blue-100)"}': {
    'value': 'shadow-blue-100',
  },
  '{"--tw-shadow-color":"var(--color-blue-200)"}': {
    'value': 'shadow-blue-200',
  },
  '{"--tw-shadow-color":"var(--color-blue-300)"}': {
    'value': 'shadow-blue-300',
  },
  '{"--tw-shadow-color":"var(--color-blue-400)"}': {
    'value': 'shadow-blue-400',
  },
  '{"--tw-shadow-color":"var(--color-blue-500)"}': {
    'value': 'shadow-blue-500',
  },
  '{"--tw-shadow-color":"var(--color-blue-600)"}': {
    'value': 'shadow-blue-600',
  },
  '{"--tw-shadow-color":"var(--color-blue-700)"}': {
    'value': 'shadow-blue-700',
  },
  '{"--tw-shadow-color":"var(--color-blue-800)"}': {
    'value': 'shadow-blue-800',
  },
  '{"--tw-shadow-color":"var(--color-blue-900)"}': {
    'value': 'shadow-blue-900',
  },
  '{"--tw-shadow-color":"var(--color-blue-950)"}': {
    'value': 'shadow-blue-950',
  },
  '{"--tw-shadow-color":"var(--color-indigo-50)"}': {
    'value': 'shadow-indigo-50',
  },
  '{"--tw-shadow-color":"var(--color-indigo-100)"}': {
    'value': 'shadow-indigo-100',
  },
  '{"--tw-shadow-color":"var(--color-indigo-200)"}': {
    'value': 'shadow-indigo-200',
  },
  '{"--tw-shadow-color":"var(--color-indigo-300)"}': {
    'value': 'shadow-indigo-300',
  },
  '{"--tw-shadow-color":"var(--color-indigo-400)"}': {
    'value': 'shadow-indigo-400',
  },
  '{"--tw-shadow-color":"var(--color-indigo-500)"}': {
    'value': 'shadow-indigo-500',
  },
  '{"--tw-shadow-color":"var(--color-indigo-600)"}': {
    'value': 'shadow-indigo-600',
  },
  '{"--tw-shadow-color":"var(--color-indigo-700)"}': {
    'value': 'shadow-indigo-700',
  },
  '{"--tw-shadow-color":"var(--color-indigo-800)"}': {
    'value': 'shadow-indigo-800',
  },
  '{"--tw-shadow-color":"var(--color-indigo-900)"}': {
    'value': 'shadow-indigo-900',
  },
  '{"--tw-shadow-color":"var(--color-indigo-950)"}': {
    'value': 'shadow-indigo-950',
  },
  '{"--tw-shadow-color":"var(--color-violet-50)"}': {
    'value': 'shadow-violet-50',
  },
  '{"--tw-shadow-color":"var(--color-violet-100)"}': {
    'value': 'shadow-violet-100',
  },
  '{"--tw-shadow-color":"var(--color-violet-200)"}': {
    'value': 'shadow-violet-200',
  },
  '{"--tw-shadow-color":"var(--color-violet-300)"}': {
    'value': 'shadow-violet-300',
  },
  '{"--tw-shadow-color":"var(--color-violet-400)"}': {
    'value': 'shadow-violet-400',
  },
  '{"--tw-shadow-color":"var(--color-violet-500)"}': {
    'value': 'shadow-violet-500',
  },
  '{"--tw-shadow-color":"var(--color-violet-600)"}': {
    'value': 'shadow-violet-600',
  },
  '{"--tw-shadow-color":"var(--color-violet-700)"}': {
    'value': 'shadow-violet-700',
  },
  '{"--tw-shadow-color":"var(--color-violet-800)"}': {
    'value': 'shadow-violet-800',
  },
  '{"--tw-shadow-color":"var(--color-violet-900)"}': {
    'value': 'shadow-violet-900',
  },
  '{"--tw-shadow-color":"var(--color-violet-950)"}': {
    'value': 'shadow-violet-950',
  },
  '{"--tw-shadow-color":"var(--color-purple-50)"}': {
    'value': 'shadow-purple-50',
  },
  '{"--tw-shadow-color":"var(--color-purple-100)"}': {
    'value': 'shadow-purple-100',
  },
  '{"--tw-shadow-color":"var(--color-purple-200)"}': {
    'value': 'shadow-purple-200',
  },
  '{"--tw-shadow-color":"var(--color-purple-300)"}': {
    'value': 'shadow-purple-300',
  },
  '{"--tw-shadow-color":"var(--color-purple-400)"}': {
    'value': 'shadow-purple-400',
  },
  '{"--tw-shadow-color":"var(--color-purple-500)"}': {
    'value': 'shadow-purple-500',
  },
  '{"--tw-shadow-color":"var(--color-purple-600)"}': {
    'value': 'shadow-purple-600',
  },
  '{"--tw-shadow-color":"var(--color-purple-700)"}': {
    'value': 'shadow-purple-700',
  },
  '{"--tw-shadow-color":"var(--color-purple-800)"}': {
    'value': 'shadow-purple-800',
  },
  '{"--tw-shadow-color":"var(--color-purple-900)"}': {
    'value': 'shadow-purple-900',
  },
  '{"--tw-shadow-color":"var(--color-purple-950)"}': {
    'value': 'shadow-purple-950',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-50)"}': {
    'value': 'shadow-fuchsia-50',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-100)"}': {
    'value': 'shadow-fuchsia-100',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-200)"}': {
    'value': 'shadow-fuchsia-200',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-300)"}': {
    'value': 'shadow-fuchsia-300',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-400)"}': {
    'value': 'shadow-fuchsia-400',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-500)"}': {
    'value': 'shadow-fuchsia-500',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-600)"}': {
    'value': 'shadow-fuchsia-600',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-700)"}': {
    'value': 'shadow-fuchsia-700',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-800)"}': {
    'value': 'shadow-fuchsia-800',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-900)"}': {
    'value': 'shadow-fuchsia-900',
  },
  '{"--tw-shadow-color":"var(--color-fuchsia-950)"}': {
    'value': 'shadow-fuchsia-950',
  },
  '{"--tw-shadow-color":"var(--color-pink-50)"}': { 'value': 'shadow-pink-50' },
  '{"--tw-shadow-color":"var(--color-pink-100)"}': {
    'value': 'shadow-pink-100',
  },
  '{"--tw-shadow-color":"var(--color-pink-200)"}': {
    'value': 'shadow-pink-200',
  },
  '{"--tw-shadow-color":"var(--color-pink-300)"}': {
    'value': 'shadow-pink-300',
  },
  '{"--tw-shadow-color":"var(--color-pink-400)"}': {
    'value': 'shadow-pink-400',
  },
  '{"--tw-shadow-color":"var(--color-pink-500)"}': {
    'value': 'shadow-pink-500',
  },
  '{"--tw-shadow-color":"var(--color-pink-600)"}': {
    'value': 'shadow-pink-600',
  },
  '{"--tw-shadow-color":"var(--color-pink-700)"}': {
    'value': 'shadow-pink-700',
  },
  '{"--tw-shadow-color":"var(--color-pink-800)"}': {
    'value': 'shadow-pink-800',
  },
  '{"--tw-shadow-color":"var(--color-pink-900)"}': {
    'value': 'shadow-pink-900',
  },
  '{"--tw-shadow-color":"var(--color-pink-950)"}': {
    'value': 'shadow-pink-950',
  },
  '{"--tw-shadow-color":"var(--color-rose-50)"}': { 'value': 'shadow-rose-50' },
  '{"--tw-shadow-color":"var(--color-rose-100)"}': {
    'value': 'shadow-rose-100',
  },
  '{"--tw-shadow-color":"var(--color-rose-200)"}': {
    'value': 'shadow-rose-200',
  },
  '{"--tw-shadow-color":"var(--color-rose-300)"}': {
    'value': 'shadow-rose-300',
  },
  '{"--tw-shadow-color":"var(--color-rose-400)"}': {
    'value': 'shadow-rose-400',
  },
  '{"--tw-shadow-color":"var(--color-rose-500)"}': {
    'value': 'shadow-rose-500',
  },
  '{"--tw-shadow-color":"var(--color-rose-600)"}': {
    'value': 'shadow-rose-600',
  },
  '{"--tw-shadow-color":"var(--color-rose-700)"}': {
    'value': 'shadow-rose-700',
  },
  '{"--tw-shadow-color":"var(--color-rose-800)"}': {
    'value': 'shadow-rose-800',
  },
  '{"--tw-shadow-color":"var(--color-rose-900)"}': {
    'value': 'shadow-rose-900',
  },
  '{"--tw-shadow-color":"var(--color-rose-950)"}': {
    'value': 'shadow-rose-950',
  },
  '{"--tw-shadow-color":"var(--color-slate-50)"}': {
    'value': 'shadow-slate-50',
  },
  '{"--tw-shadow-color":"var(--color-slate-100)"}': {
    'value': 'shadow-slate-100',
  },
  '{"--tw-shadow-color":"var(--color-slate-200)"}': {
    'value': 'shadow-slate-200',
  },
  '{"--tw-shadow-color":"var(--color-slate-300)"}': {
    'value': 'shadow-slate-300',
  },
  '{"--tw-shadow-color":"var(--color-slate-400)"}': {
    'value': 'shadow-slate-400',
  },
  '{"--tw-shadow-color":"var(--color-slate-500)"}': {
    'value': 'shadow-slate-500',
  },
  '{"--tw-shadow-color":"var(--color-slate-600)"}': {
    'value': 'shadow-slate-600',
  },
  '{"--tw-shadow-color":"var(--color-slate-700)"}': {
    'value': 'shadow-slate-700',
  },
  '{"--tw-shadow-color":"var(--color-slate-800)"}': {
    'value': 'shadow-slate-800',
  },
  '{"--tw-shadow-color":"var(--color-slate-900)"}': {
    'value': 'shadow-slate-900',
  },
  '{"--tw-shadow-color":"var(--color-slate-950)"}': {
    'value': 'shadow-slate-950',
  },
  '{"--tw-shadow-color":"var(--color-gray-50)"}': { 'value': 'shadow-gray-50' },
  '{"--tw-shadow-color":"var(--color-gray-100)"}': {
    'value': 'shadow-gray-100',
  },
  '{"--tw-shadow-color":"var(--color-gray-200)"}': {
    'value': 'shadow-gray-200',
  },
  '{"--tw-shadow-color":"var(--color-gray-300)"}': {
    'value': 'shadow-gray-300',
  },
  '{"--tw-shadow-color":"var(--color-gray-400)"}': {
    'value': 'shadow-gray-400',
  },
  '{"--tw-shadow-color":"var(--color-gray-500)"}': {
    'value': 'shadow-gray-500',
  },
  '{"--tw-shadow-color":"var(--color-gray-600)"}': {
    'value': 'shadow-gray-600',
  },
  '{"--tw-shadow-color":"var(--color-gray-700)"}': {
    'value': 'shadow-gray-700',
  },
  '{"--tw-shadow-color":"var(--color-gray-800)"}': {
    'value': 'shadow-gray-800',
  },
  '{"--tw-shadow-color":"var(--color-gray-900)"}': {
    'value': 'shadow-gray-900',
  },
  '{"--tw-shadow-color":"var(--color-gray-950)"}': {
    'value': 'shadow-gray-950',
  },
  '{"--tw-shadow-color":"var(--color-zinc-50)"}': { 'value': 'shadow-zinc-50' },
  '{"--tw-shadow-color":"var(--color-zinc-100)"}': {
    'value': 'shadow-zinc-100',
  },
  '{"--tw-shadow-color":"var(--color-zinc-200)"}': {
    'value': 'shadow-zinc-200',
  },
  '{"--tw-shadow-color":"var(--color-zinc-300)"}': {
    'value': 'shadow-zinc-300',
  },
  '{"--tw-shadow-color":"var(--color-zinc-400)"}': {
    'value': 'shadow-zinc-400',
  },
  '{"--tw-shadow-color":"var(--color-zinc-500)"}': {
    'value': 'shadow-zinc-500',
  },
  '{"--tw-shadow-color":"var(--color-zinc-600)"}': {
    'value': 'shadow-zinc-600',
  },
  '{"--tw-shadow-color":"var(--color-zinc-700)"}': {
    'value': 'shadow-zinc-700',
  },
  '{"--tw-shadow-color":"var(--color-zinc-800)"}': {
    'value': 'shadow-zinc-800',
  },
  '{"--tw-shadow-color":"var(--color-zinc-900)"}': {
    'value': 'shadow-zinc-900',
  },
  '{"--tw-shadow-color":"var(--color-zinc-950)"}': {
    'value': 'shadow-zinc-950',
  },
  '{"--tw-shadow-color":"var(--color-neutral-50)"}': {
    'value': 'shadow-neutral-50',
  },
  '{"--tw-shadow-color":"var(--color-neutral-100)"}': {
    'value': 'shadow-neutral-100',
  },
  '{"--tw-shadow-color":"var(--color-neutral-200)"}': {
    'value': 'shadow-neutral-200',
  },
  '{"--tw-shadow-color":"var(--color-neutral-300)"}': {
    'value': 'shadow-neutral-300',
  },
  '{"--tw-shadow-color":"var(--color-neutral-400)"}': {
    'value': 'shadow-neutral-400',
  },
  '{"--tw-shadow-color":"var(--color-neutral-500)"}': {
    'value': 'shadow-neutral-500',
  },
  '{"--tw-shadow-color":"var(--color-neutral-600)"}': {
    'value': 'shadow-neutral-600',
  },
  '{"--tw-shadow-color":"var(--color-neutral-700)"}': {
    'value': 'shadow-neutral-700',
  },
  '{"--tw-shadow-color":"var(--color-neutral-800)"}': {
    'value': 'shadow-neutral-800',
  },
  '{"--tw-shadow-color":"var(--color-neutral-900)"}': {
    'value': 'shadow-neutral-900',
  },
  '{"--tw-shadow-color":"var(--color-neutral-950)"}': {
    'value': 'shadow-neutral-950',
  },
  '{"--tw-shadow-color":"var(--color-stone-50)"}': {
    'value': 'shadow-stone-50',
  },
  '{"--tw-shadow-color":"var(--color-stone-100)"}': {
    'value': 'shadow-stone-100',
  },
  '{"--tw-shadow-color":"var(--color-stone-200)"}': {
    'value': 'shadow-stone-200',
  },
  '{"--tw-shadow-color":"var(--color-stone-300)"}': {
    'value': 'shadow-stone-300',
  },
  '{"--tw-shadow-color":"var(--color-stone-400)"}': {
    'value': 'shadow-stone-400',
  },
  '{"--tw-shadow-color":"var(--color-stone-500)"}': {
    'value': 'shadow-stone-500',
  },
  '{"--tw-shadow-color":"var(--color-stone-600)"}': {
    'value': 'shadow-stone-600',
  },
  '{"--tw-shadow-color":"var(--color-stone-700)"}': {
    'value': 'shadow-stone-700',
  },
  '{"--tw-shadow-color":"var(--color-stone-800)"}': {
    'value': 'shadow-stone-800',
  },
  '{"--tw-shadow-color":"var(--color-stone-900)"}': {
    'value': 'shadow-stone-900',
  },
  '{"--tw-shadow-color":"var(--color-stone-950)"}': {
    'value': 'shadow-stone-950',
  },
  '{"box-shadow":"var(--inset-shadow-2xs)"}': { 'value': 'inset-shadow-2xs' },
  '{"box-shadow":"var(--inset-shadow-xs)"}': { 'value': 'inset-shadow-xs' },
  '{"box-shadow":"var(--inset-shadow-sm)"}': { 'value': 'inset-shadow-sm' },
  '{"box-shadow":"inset 0 0 #0000"}': { 'value': 'inset-shadow-none' },
  '{"--tw-inset-shadow-color":"inherit"}': { 'value': 'inset-shadow-inherit' },
  '{"--tw-inset-shadow-color":"currentColor"}': {
    'value': 'inset-shadow-current',
  },
  '{"--tw-inset-shadow-color":"transparent"}': {
    'value': 'inset-shadow-transparent',
  },
  '{"--tw-inset-shadow-color":"var(--color-black)"}': {
    'value': 'inset-shadow-black',
  },
  '{"--tw-inset-shadow-color":"var(--color-white)"}': {
    'value': 'inset-shadow-white',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-50)"}': {
    'value': 'inset-shadow-red-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-100)"}': {
    'value': 'inset-shadow-red-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-200)"}': {
    'value': 'inset-shadow-red-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-300)"}': {
    'value': 'inset-shadow-red-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-400)"}': {
    'value': 'inset-shadow-red-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-500)"}': {
    'value': 'inset-shadow-red-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-600)"}': {
    'value': 'inset-shadow-red-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-700)"}': {
    'value': 'inset-shadow-red-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-800)"}': {
    'value': 'inset-shadow-red-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-900)"}': {
    'value': 'inset-shadow-red-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-red-950)"}': {
    'value': 'inset-shadow-red-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-50)"}': {
    'value': 'inset-shadow-orange-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-100)"}': {
    'value': 'inset-shadow-orange-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-200)"}': {
    'value': 'inset-shadow-orange-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-300)"}': {
    'value': 'inset-shadow-orange-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-400)"}': {
    'value': 'inset-shadow-orange-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-500)"}': {
    'value': 'inset-shadow-orange-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-600)"}': {
    'value': 'inset-shadow-orange-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-700)"}': {
    'value': 'inset-shadow-orange-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-800)"}': {
    'value': 'inset-shadow-orange-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-900)"}': {
    'value': 'inset-shadow-orange-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-orange-950)"}': {
    'value': 'inset-shadow-orange-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-50)"}': {
    'value': 'inset-shadow-amber-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-100)"}': {
    'value': 'inset-shadow-amber-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-200)"}': {
    'value': 'inset-shadow-amber-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-300)"}': {
    'value': 'inset-shadow-amber-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-400)"}': {
    'value': 'inset-shadow-amber-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-500)"}': {
    'value': 'inset-shadow-amber-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-600)"}': {
    'value': 'inset-shadow-amber-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-700)"}': {
    'value': 'inset-shadow-amber-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-800)"}': {
    'value': 'inset-shadow-amber-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-900)"}': {
    'value': 'inset-shadow-amber-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-amber-950)"}': {
    'value': 'inset-shadow-amber-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-50)"}': {
    'value': 'inset-shadow-yellow-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-100)"}': {
    'value': 'inset-shadow-yellow-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-200)"}': {
    'value': 'inset-shadow-yellow-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-300)"}': {
    'value': 'inset-shadow-yellow-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-400)"}': {
    'value': 'inset-shadow-yellow-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-500)"}': {
    'value': 'inset-shadow-yellow-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-600)"}': {
    'value': 'inset-shadow-yellow-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-700)"}': {
    'value': 'inset-shadow-yellow-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-800)"}': {
    'value': 'inset-shadow-yellow-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-900)"}': {
    'value': 'inset-shadow-yellow-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-yellow-950)"}': {
    'value': 'inset-shadow-yellow-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-50)"}': {
    'value': 'inset-shadow-lime-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-100)"}': {
    'value': 'inset-shadow-lime-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-200)"}': {
    'value': 'inset-shadow-lime-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-300)"}': {
    'value': 'inset-shadow-lime-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-400)"}': {
    'value': 'inset-shadow-lime-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-500)"}': {
    'value': 'inset-shadow-lime-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-600)"}': {
    'value': 'inset-shadow-lime-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-700)"}': {
    'value': 'inset-shadow-lime-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-800)"}': {
    'value': 'inset-shadow-lime-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-900)"}': {
    'value': 'inset-shadow-lime-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-lime-950)"}': {
    'value': 'inset-shadow-lime-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-50)"}': {
    'value': 'inset-shadow-green-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-100)"}': {
    'value': 'inset-shadow-green-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-200)"}': {
    'value': 'inset-shadow-green-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-300)"}': {
    'value': 'inset-shadow-green-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-400)"}': {
    'value': 'inset-shadow-green-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-500)"}': {
    'value': 'inset-shadow-green-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-600)"}': {
    'value': 'inset-shadow-green-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-700)"}': {
    'value': 'inset-shadow-green-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-800)"}': {
    'value': 'inset-shadow-green-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-900)"}': {
    'value': 'inset-shadow-green-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-green-950)"}': {
    'value': 'inset-shadow-green-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-50)"}': {
    'value': 'inset-shadow-emerald-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-100)"}': {
    'value': 'inset-shadow-emerald-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-200)"}': {
    'value': 'inset-shadow-emerald-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-300)"}': {
    'value': 'inset-shadow-emerald-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-400)"}': {
    'value': 'inset-shadow-emerald-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-500)"}': {
    'value': 'inset-shadow-emerald-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-600)"}': {
    'value': 'inset-shadow-emerald-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-700)"}': {
    'value': 'inset-shadow-emerald-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-800)"}': {
    'value': 'inset-shadow-emerald-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-900)"}': {
    'value': 'inset-shadow-emerald-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-emerald-950)"}': {
    'value': 'inset-shadow-emerald-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-50)"}': {
    'value': 'inset-shadow-teal-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-100)"}': {
    'value': 'inset-shadow-teal-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-200)"}': {
    'value': 'inset-shadow-teal-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-300)"}': {
    'value': 'inset-shadow-teal-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-400)"}': {
    'value': 'inset-shadow-teal-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-500)"}': {
    'value': 'inset-shadow-teal-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-600)"}': {
    'value': 'inset-shadow-teal-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-700)"}': {
    'value': 'inset-shadow-teal-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-800)"}': {
    'value': 'inset-shadow-teal-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-900)"}': {
    'value': 'inset-shadow-teal-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-teal-950)"}': {
    'value': 'inset-shadow-teal-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-50)"}': {
    'value': 'inset-shadow-cyan-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-100)"}': {
    'value': 'inset-shadow-cyan-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-200)"}': {
    'value': 'inset-shadow-cyan-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-300)"}': {
    'value': 'inset-shadow-cyan-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-400)"}': {
    'value': 'inset-shadow-cyan-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-500)"}': {
    'value': 'inset-shadow-cyan-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-600)"}': {
    'value': 'inset-shadow-cyan-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-700)"}': {
    'value': 'inset-shadow-cyan-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-800)"}': {
    'value': 'inset-shadow-cyan-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-900)"}': {
    'value': 'inset-shadow-cyan-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-cyan-950)"}': {
    'value': 'inset-shadow-cyan-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-50)"}': {
    'value': 'inset-shadow-sky-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-100)"}': {
    'value': 'inset-shadow-sky-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-200)"}': {
    'value': 'inset-shadow-sky-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-300)"}': {
    'value': 'inset-shadow-sky-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-400)"}': {
    'value': 'inset-shadow-sky-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-500)"}': {
    'value': 'inset-shadow-sky-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-600)"}': {
    'value': 'inset-shadow-sky-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-700)"}': {
    'value': 'inset-shadow-sky-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-800)"}': {
    'value': 'inset-shadow-sky-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-900)"}': {
    'value': 'inset-shadow-sky-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-sky-950)"}': {
    'value': 'inset-shadow-sky-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-50)"}': {
    'value': 'inset-shadow-blue-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-100)"}': {
    'value': 'inset-shadow-blue-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-200)"}': {
    'value': 'inset-shadow-blue-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-300)"}': {
    'value': 'inset-shadow-blue-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-400)"}': {
    'value': 'inset-shadow-blue-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-500)"}': {
    'value': 'inset-shadow-blue-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-600)"}': {
    'value': 'inset-shadow-blue-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-700)"}': {
    'value': 'inset-shadow-blue-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-800)"}': {
    'value': 'inset-shadow-blue-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-900)"}': {
    'value': 'inset-shadow-blue-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-blue-950)"}': {
    'value': 'inset-shadow-blue-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-50)"}': {
    'value': 'inset-shadow-indigo-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-100)"}': {
    'value': 'inset-shadow-indigo-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-200)"}': {
    'value': 'inset-shadow-indigo-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-300)"}': {
    'value': 'inset-shadow-indigo-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-400)"}': {
    'value': 'inset-shadow-indigo-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-500)"}': {
    'value': 'inset-shadow-indigo-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-600)"}': {
    'value': 'inset-shadow-indigo-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-700)"}': {
    'value': 'inset-shadow-indigo-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-800)"}': {
    'value': 'inset-shadow-indigo-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-900)"}': {
    'value': 'inset-shadow-indigo-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-indigo-950)"}': {
    'value': 'inset-shadow-indigo-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-50)"}': {
    'value': 'inset-shadow-violet-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-100)"}': {
    'value': 'inset-shadow-violet-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-200)"}': {
    'value': 'inset-shadow-violet-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-300)"}': {
    'value': 'inset-shadow-violet-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-400)"}': {
    'value': 'inset-shadow-violet-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-500)"}': {
    'value': 'inset-shadow-violet-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-600)"}': {
    'value': 'inset-shadow-violet-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-700)"}': {
    'value': 'inset-shadow-violet-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-800)"}': {
    'value': 'inset-shadow-violet-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-900)"}': {
    'value': 'inset-shadow-violet-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-violet-950)"}': {
    'value': 'inset-shadow-violet-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-50)"}': {
    'value': 'inset-shadow-purple-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-100)"}': {
    'value': 'inset-shadow-purple-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-200)"}': {
    'value': 'inset-shadow-purple-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-300)"}': {
    'value': 'inset-shadow-purple-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-400)"}': {
    'value': 'inset-shadow-purple-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-500)"}': {
    'value': 'inset-shadow-purple-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-600)"}': {
    'value': 'inset-shadow-purple-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-700)"}': {
    'value': 'inset-shadow-purple-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-800)"}': {
    'value': 'inset-shadow-purple-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-900)"}': {
    'value': 'inset-shadow-purple-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-purple-950)"}': {
    'value': 'inset-shadow-purple-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-50)"}': {
    'value': 'inset-shadow-fuchsia-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-100)"}': {
    'value': 'inset-shadow-fuchsia-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-200)"}': {
    'value': 'inset-shadow-fuchsia-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-300)"}': {
    'value': 'inset-shadow-fuchsia-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-400)"}': {
    'value': 'inset-shadow-fuchsia-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-500)"}': {
    'value': 'inset-shadow-fuchsia-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-600)"}': {
    'value': 'inset-shadow-fuchsia-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-700)"}': {
    'value': 'inset-shadow-fuchsia-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-800)"}': {
    'value': 'inset-shadow-fuchsia-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-900)"}': {
    'value': 'inset-shadow-fuchsia-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-fuchsia-950)"}': {
    'value': 'inset-shadow-fuchsia-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-50)"}': {
    'value': 'inset-shadow-pink-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-100)"}': {
    'value': 'inset-shadow-pink-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-200)"}': {
    'value': 'inset-shadow-pink-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-300)"}': {
    'value': 'inset-shadow-pink-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-400)"}': {
    'value': 'inset-shadow-pink-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-500)"}': {
    'value': 'inset-shadow-pink-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-600)"}': {
    'value': 'inset-shadow-pink-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-700)"}': {
    'value': 'inset-shadow-pink-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-800)"}': {
    'value': 'inset-shadow-pink-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-900)"}': {
    'value': 'inset-shadow-pink-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-pink-950)"}': {
    'value': 'inset-shadow-pink-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-50)"}': {
    'value': 'inset-shadow-rose-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-100)"}': {
    'value': 'inset-shadow-rose-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-200)"}': {
    'value': 'inset-shadow-rose-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-300)"}': {
    'value': 'inset-shadow-rose-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-400)"}': {
    'value': 'inset-shadow-rose-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-500)"}': {
    'value': 'inset-shadow-rose-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-600)"}': {
    'value': 'inset-shadow-rose-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-700)"}': {
    'value': 'inset-shadow-rose-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-800)"}': {
    'value': 'inset-shadow-rose-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-900)"}': {
    'value': 'inset-shadow-rose-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-rose-950)"}': {
    'value': 'inset-shadow-rose-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-50)"}': {
    'value': 'inset-shadow-slate-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-100)"}': {
    'value': 'inset-shadow-slate-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-200)"}': {
    'value': 'inset-shadow-slate-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-300)"}': {
    'value': 'inset-shadow-slate-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-400)"}': {
    'value': 'inset-shadow-slate-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-500)"}': {
    'value': 'inset-shadow-slate-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-600)"}': {
    'value': 'inset-shadow-slate-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-700)"}': {
    'value': 'inset-shadow-slate-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-800)"}': {
    'value': 'inset-shadow-slate-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-900)"}': {
    'value': 'inset-shadow-slate-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-slate-950)"}': {
    'value': 'inset-shadow-slate-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-50)"}': {
    'value': 'inset-shadow-gray-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-100)"}': {
    'value': 'inset-shadow-gray-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-200)"}': {
    'value': 'inset-shadow-gray-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-300)"}': {
    'value': 'inset-shadow-gray-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-400)"}': {
    'value': 'inset-shadow-gray-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-500)"}': {
    'value': 'inset-shadow-gray-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-600)"}': {
    'value': 'inset-shadow-gray-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-700)"}': {
    'value': 'inset-shadow-gray-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-800)"}': {
    'value': 'inset-shadow-gray-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-900)"}': {
    'value': 'inset-shadow-gray-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-gray-950)"}': {
    'value': 'inset-shadow-gray-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-50)"}': {
    'value': 'inset-shadow-zinc-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-100)"}': {
    'value': 'inset-shadow-zinc-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-200)"}': {
    'value': 'inset-shadow-zinc-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-300)"}': {
    'value': 'inset-shadow-zinc-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-400)"}': {
    'value': 'inset-shadow-zinc-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-500)"}': {
    'value': 'inset-shadow-zinc-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-600)"}': {
    'value': 'inset-shadow-zinc-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-700)"}': {
    'value': 'inset-shadow-zinc-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-800)"}': {
    'value': 'inset-shadow-zinc-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-900)"}': {
    'value': 'inset-shadow-zinc-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-zinc-950)"}': {
    'value': 'inset-shadow-zinc-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-50)"}': {
    'value': 'inset-shadow-neutral-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-100)"}': {
    'value': 'inset-shadow-neutral-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-200)"}': {
    'value': 'inset-shadow-neutral-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-300)"}': {
    'value': 'inset-shadow-neutral-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-400)"}': {
    'value': 'inset-shadow-neutral-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-500)"}': {
    'value': 'inset-shadow-neutral-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-600)"}': {
    'value': 'inset-shadow-neutral-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-700)"}': {
    'value': 'inset-shadow-neutral-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-800)"}': {
    'value': 'inset-shadow-neutral-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-900)"}': {
    'value': 'inset-shadow-neutral-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-neutral-950)"}': {
    'value': 'inset-shadow-neutral-950',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-50)"}': {
    'value': 'inset-shadow-stone-50',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-100)"}': {
    'value': 'inset-shadow-stone-100',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-200)"}': {
    'value': 'inset-shadow-stone-200',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-300)"}': {
    'value': 'inset-shadow-stone-300',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-400)"}': {
    'value': 'inset-shadow-stone-400',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-500)"}': {
    'value': 'inset-shadow-stone-500',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-600)"}': {
    'value': 'inset-shadow-stone-600',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-700)"}': {
    'value': 'inset-shadow-stone-700',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-800)"}': {
    'value': 'inset-shadow-stone-800',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-900)"}': {
    'value': 'inset-shadow-stone-900',
  },
  '{"--tw-inset-shadow-color":"var(--color-stone-950)"}': {
    'value': 'inset-shadow-stone-950',
  },
  '{"--tw-ring-shadow":"0 0 0 1px"}': { 'value': 'ring' },
  '{"--tw-ring-shadow":"0 0 0 <number>px"}': { 'value': 'ring-<number>' },
  '{"--tw-ring-shadow":"0 0 0 var(<custom-property>)"}': {
    'value': 'ring-(<custom-property>)',
  },
  '{"--tw-ring-shadow":"0 0 0 <value>"}': { 'value': 'ring-[<value>]' },
  '{"--tw-ring-color":"inherit"}': { 'value': 'ring-inherit' },
  '{"--tw-ring-color":"currentColor"}': { 'value': 'ring-current' },
  '{"--tw-ring-color":"transparent"}': { 'value': 'ring-transparent' },
  '{"--tw-ring-color":"var(--color-black)"}': { 'value': 'ring-black' },
  '{"--tw-ring-color":"var(--color-white)"}': { 'value': 'ring-white' },
  '{"--tw-ring-color":"var(--color-red-50)"}': { 'value': 'ring-red-50' },
  '{"--tw-ring-color":"var(--color-red-100)"}': { 'value': 'ring-red-100' },
  '{"--tw-ring-color":"var(--color-red-200)"}': { 'value': 'ring-red-200' },
  '{"--tw-ring-color":"var(--color-red-300)"}': { 'value': 'ring-red-300' },
  '{"--tw-ring-color":"var(--color-red-400)"}': { 'value': 'ring-red-400' },
  '{"--tw-ring-color":"var(--color-red-500)"}': { 'value': 'ring-red-500' },
  '{"--tw-ring-color":"var(--color-red-600)"}': { 'value': 'ring-red-600' },
  '{"--tw-ring-color":"var(--color-red-700)"}': { 'value': 'ring-red-700' },
  '{"--tw-ring-color":"var(--color-red-800)"}': { 'value': 'ring-red-800' },
  '{"--tw-ring-color":"var(--color-red-900)"}': { 'value': 'ring-red-900' },
  '{"--tw-ring-color":"var(--color-red-950)"}': { 'value': 'ring-red-950' },
  '{"--tw-ring-color":"var(--color-orange-50)"}': { 'value': 'ring-orange-50' },
  '{"--tw-ring-color":"var(--color-orange-100)"}': {
    'value': 'ring-orange-100',
  },
  '{"--tw-ring-color":"var(--color-orange-200)"}': {
    'value': 'ring-orange-200',
  },
  '{"--tw-ring-color":"var(--color-orange-300)"}': {
    'value': 'ring-orange-300',
  },
  '{"--tw-ring-color":"var(--color-orange-400)"}': {
    'value': 'ring-orange-400',
  },
  '{"--tw-ring-color":"var(--color-orange-500)"}': {
    'value': 'ring-orange-500',
  },
  '{"--tw-ring-color":"var(--color-orange-600)"}': {
    'value': 'ring-orange-600',
  },
  '{"--tw-ring-color":"var(--color-orange-700)"}': {
    'value': 'ring-orange-700',
  },
  '{"--tw-ring-color":"var(--color-orange-800)"}': {
    'value': 'ring-orange-800',
  },
  '{"--tw-ring-color":"var(--color-orange-900)"}': {
    'value': 'ring-orange-900',
  },
  '{"--tw-ring-color":"var(--color-orange-950)"}': {
    'value': 'ring-orange-950',
  },
  '{"--tw-ring-color":"var(--color-amber-50)"}': { 'value': 'ring-amber-50' },
  '{"--tw-ring-color":"var(--color-amber-100)"}': { 'value': 'ring-amber-100' },
  '{"--tw-ring-color":"var(--color-amber-200)"}': { 'value': 'ring-amber-200' },
  '{"--tw-ring-color":"var(--color-amber-300)"}': { 'value': 'ring-amber-300' },
  '{"--tw-ring-color":"var(--color-amber-400)"}': { 'value': 'ring-amber-400' },
  '{"--tw-ring-color":"var(--color-amber-500)"}': { 'value': 'ring-amber-500' },
  '{"--tw-ring-color":"var(--color-amber-600)"}': { 'value': 'ring-amber-600' },
  '{"--tw-ring-color":"var(--color-amber-700)"}': { 'value': 'ring-amber-700' },
  '{"--tw-ring-color":"var(--color-amber-800)"}': { 'value': 'ring-amber-800' },
  '{"--tw-ring-color":"var(--color-amber-900)"}': { 'value': 'ring-amber-900' },
  '{"--tw-ring-color":"var(--color-amber-950)"}': { 'value': 'ring-amber-950' },
  '{"--tw-ring-color":"var(--color-yellow-50)"}': { 'value': 'ring-yellow-50' },
  '{"--tw-ring-color":"var(--color-yellow-100)"}': {
    'value': 'ring-yellow-100',
  },
  '{"--tw-ring-color":"var(--color-yellow-200)"}': {
    'value': 'ring-yellow-200',
  },
  '{"--tw-ring-color":"var(--color-yellow-300)"}': {
    'value': 'ring-yellow-300',
  },
  '{"--tw-ring-color":"var(--color-yellow-400)"}': {
    'value': 'ring-yellow-400',
  },
  '{"--tw-ring-color":"var(--color-yellow-500)"}': {
    'value': 'ring-yellow-500',
  },
  '{"--tw-ring-color":"var(--color-yellow-600)"}': {
    'value': 'ring-yellow-600',
  },
  '{"--tw-ring-color":"var(--color-yellow-700)"}': {
    'value': 'ring-yellow-700',
  },
  '{"--tw-ring-color":"var(--color-yellow-800)"}': {
    'value': 'ring-yellow-800',
  },
  '{"--tw-ring-color":"var(--color-yellow-900)"}': {
    'value': 'ring-yellow-900',
  },
  '{"--tw-ring-color":"var(--color-yellow-950)"}': {
    'value': 'ring-yellow-950',
  },
  '{"--tw-ring-color":"var(--color-lime-50)"}': { 'value': 'ring-lime-50' },
  '{"--tw-ring-color":"var(--color-lime-100)"}': { 'value': 'ring-lime-100' },
  '{"--tw-ring-color":"var(--color-lime-200)"}': { 'value': 'ring-lime-200' },
  '{"--tw-ring-color":"var(--color-lime-300)"}': { 'value': 'ring-lime-300' },
  '{"--tw-ring-color":"var(--color-lime-400)"}': { 'value': 'ring-lime-400' },
  '{"--tw-ring-color":"var(--color-lime-500)"}': { 'value': 'ring-lime-500' },
  '{"--tw-ring-color":"var(--color-lime-600)"}': { 'value': 'ring-lime-600' },
  '{"--tw-ring-color":"var(--color-lime-700)"}': { 'value': 'ring-lime-700' },
  '{"--tw-ring-color":"var(--color-lime-800)"}': { 'value': 'ring-lime-800' },
  '{"--tw-ring-color":"var(--color-lime-900)"}': { 'value': 'ring-lime-900' },
  '{"--tw-ring-color":"var(--color-lime-950)"}': { 'value': 'ring-lime-950' },
  '{"--tw-ring-color":"var(--color-green-50)"}': { 'value': 'ring-green-50' },
  '{"--tw-ring-color":"var(--color-green-100)"}': { 'value': 'ring-green-100' },
  '{"--tw-ring-color":"var(--color-green-200)"}': { 'value': 'ring-green-200' },
  '{"--tw-ring-color":"var(--color-green-300)"}': { 'value': 'ring-green-300' },
  '{"--tw-ring-color":"var(--color-green-400)"}': { 'value': 'ring-green-400' },
  '{"--tw-ring-color":"var(--color-green-500)"}': { 'value': 'ring-green-500' },
  '{"--tw-ring-color":"var(--color-green-600)"}': { 'value': 'ring-green-600' },
  '{"--tw-ring-color":"var(--color-green-700)"}': { 'value': 'ring-green-700' },
  '{"--tw-ring-color":"var(--color-green-800)"}': { 'value': 'ring-green-800' },
  '{"--tw-ring-color":"var(--color-green-900)"}': { 'value': 'ring-green-900' },
  '{"--tw-ring-color":"var(--color-green-950)"}': { 'value': 'ring-green-950' },
  '{"--tw-ring-color":"var(--color-emerald-50)"}': {
    'value': 'ring-emerald-50',
  },
  '{"--tw-ring-color":"var(--color-emerald-100)"}': {
    'value': 'ring-emerald-100',
  },
  '{"--tw-ring-color":"var(--color-emerald-200)"}': {
    'value': 'ring-emerald-200',
  },
  '{"--tw-ring-color":"var(--color-emerald-300)"}': {
    'value': 'ring-emerald-300',
  },
  '{"--tw-ring-color":"var(--color-emerald-400)"}': {
    'value': 'ring-emerald-400',
  },
  '{"--tw-ring-color":"var(--color-emerald-500)"}': {
    'value': 'ring-emerald-500',
  },
  '{"--tw-ring-color":"var(--color-emerald-600)"}': {
    'value': 'ring-emerald-600',
  },
  '{"--tw-ring-color":"var(--color-emerald-700)"}': {
    'value': 'ring-emerald-700',
  },
  '{"--tw-ring-color":"var(--color-emerald-800)"}': {
    'value': 'ring-emerald-800',
  },
  '{"--tw-ring-color":"var(--color-emerald-900)"}': {
    'value': 'ring-emerald-900',
  },
  '{"--tw-ring-color":"var(--color-emerald-950)"}': {
    'value': 'ring-emerald-950',
  },
  '{"--tw-ring-color":"var(--color-teal-50)"}': { 'value': 'ring-teal-50' },
  '{"--tw-ring-color":"var(--color-teal-100)"}': { 'value': 'ring-teal-100' },
  '{"--tw-ring-color":"var(--color-teal-200)"}': { 'value': 'ring-teal-200' },
  '{"--tw-ring-color":"var(--color-teal-300)"}': { 'value': 'ring-teal-300' },
  '{"--tw-ring-color":"var(--color-teal-400)"}': { 'value': 'ring-teal-400' },
  '{"--tw-ring-color":"var(--color-teal-500)"}': { 'value': 'ring-teal-500' },
  '{"--tw-ring-color":"var(--color-teal-600)"}': { 'value': 'ring-teal-600' },
  '{"--tw-ring-color":"var(--color-teal-700)"}': { 'value': 'ring-teal-700' },
  '{"--tw-ring-color":"var(--color-teal-800)"}': { 'value': 'ring-teal-800' },
  '{"--tw-ring-color":"var(--color-teal-900)"}': { 'value': 'ring-teal-900' },
  '{"--tw-ring-color":"var(--color-teal-950)"}': { 'value': 'ring-teal-950' },
  '{"--tw-ring-color":"var(--color-cyan-50)"}': { 'value': 'ring-cyan-50' },
  '{"--tw-ring-color":"var(--color-cyan-100)"}': { 'value': 'ring-cyan-100' },
  '{"--tw-ring-color":"var(--color-cyan-200)"}': { 'value': 'ring-cyan-200' },
  '{"--tw-ring-color":"var(--color-cyan-300)"}': { 'value': 'ring-cyan-300' },
  '{"--tw-ring-color":"var(--color-cyan-400)"}': { 'value': 'ring-cyan-400' },
  '{"--tw-ring-color":"var(--color-cyan-500)"}': { 'value': 'ring-cyan-500' },
  '{"--tw-ring-color":"var(--color-cyan-600)"}': { 'value': 'ring-cyan-600' },
  '{"--tw-ring-color":"var(--color-cyan-700)"}': { 'value': 'ring-cyan-700' },
  '{"--tw-ring-color":"var(--color-cyan-800)"}': { 'value': 'ring-cyan-800' },
  '{"--tw-ring-color":"var(--color-cyan-900)"}': { 'value': 'ring-cyan-900' },
  '{"--tw-ring-color":"var(--color-cyan-950)"}': { 'value': 'ring-cyan-950' },
  '{"--tw-ring-color":"var(--color-sky-50)"}': { 'value': 'ring-sky-50' },
  '{"--tw-ring-color":"var(--color-sky-100)"}': { 'value': 'ring-sky-100' },
  '{"--tw-ring-color":"var(--color-sky-200)"}': { 'value': 'ring-sky-200' },
  '{"--tw-ring-color":"var(--color-sky-300)"}': { 'value': 'ring-sky-300' },
  '{"--tw-ring-color":"var(--color-sky-400)"}': { 'value': 'ring-sky-400' },
  '{"--tw-ring-color":"var(--color-sky-500)"}': { 'value': 'ring-sky-500' },
  '{"--tw-ring-color":"var(--color-sky-600)"}': { 'value': 'ring-sky-600' },
  '{"--tw-ring-color":"var(--color-sky-700)"}': { 'value': 'ring-sky-700' },
  '{"--tw-ring-color":"var(--color-sky-800)"}': { 'value': 'ring-sky-800' },
  '{"--tw-ring-color":"var(--color-sky-900)"}': { 'value': 'ring-sky-900' },
  '{"--tw-ring-color":"var(--color-sky-950)"}': { 'value': 'ring-sky-950' },
  '{"--tw-ring-color":"var(--color-blue-50)"}': { 'value': 'ring-blue-50' },
  '{"--tw-ring-color":"var(--color-blue-100)"}': { 'value': 'ring-blue-100' },
  '{"--tw-ring-color":"var(--color-blue-200)"}': { 'value': 'ring-blue-200' },
  '{"--tw-ring-color":"var(--color-blue-300)"}': { 'value': 'ring-blue-300' },
  '{"--tw-ring-color":"var(--color-blue-400)"}': { 'value': 'ring-blue-400' },
  '{"--tw-ring-color":"var(--color-blue-500)"}': { 'value': 'ring-blue-500' },
  '{"--tw-ring-color":"var(--color-blue-600)"}': { 'value': 'ring-blue-600' },
  '{"--tw-ring-color":"var(--color-blue-700)"}': { 'value': 'ring-blue-700' },
  '{"--tw-ring-color":"var(--color-blue-800)"}': { 'value': 'ring-blue-800' },
  '{"--tw-ring-color":"var(--color-blue-900)"}': { 'value': 'ring-blue-900' },
  '{"--tw-ring-color":"var(--color-blue-950)"}': { 'value': 'ring-blue-950' },
  '{"--tw-ring-color":"var(--color-indigo-50)"}': { 'value': 'ring-indigo-50' },
  '{"--tw-ring-color":"var(--color-indigo-100)"}': {
    'value': 'ring-indigo-100',
  },
  '{"--tw-ring-color":"var(--color-indigo-200)"}': {
    'value': 'ring-indigo-200',
  },
  '{"--tw-ring-color":"var(--color-indigo-300)"}': {
    'value': 'ring-indigo-300',
  },
  '{"--tw-ring-color":"var(--color-indigo-400)"}': {
    'value': 'ring-indigo-400',
  },
  '{"--tw-ring-color":"var(--color-indigo-500)"}': {
    'value': 'ring-indigo-500',
  },
  '{"--tw-ring-color":"var(--color-indigo-600)"}': {
    'value': 'ring-indigo-600',
  },
  '{"--tw-ring-color":"var(--color-indigo-700)"}': {
    'value': 'ring-indigo-700',
  },
  '{"--tw-ring-color":"var(--color-indigo-800)"}': {
    'value': 'ring-indigo-800',
  },
  '{"--tw-ring-color":"var(--color-indigo-900)"}': {
    'value': 'ring-indigo-900',
  },
  '{"--tw-ring-color":"var(--color-indigo-950)"}': {
    'value': 'ring-indigo-950',
  },
  '{"--tw-ring-color":"var(--color-violet-50)"}': { 'value': 'ring-violet-50' },
  '{"--tw-ring-color":"var(--color-violet-100)"}': {
    'value': 'ring-violet-100',
  },
  '{"--tw-ring-color":"var(--color-violet-200)"}': {
    'value': 'ring-violet-200',
  },
  '{"--tw-ring-color":"var(--color-violet-300)"}': {
    'value': 'ring-violet-300',
  },
  '{"--tw-ring-color":"var(--color-violet-400)"}': {
    'value': 'ring-violet-400',
  },
  '{"--tw-ring-color":"var(--color-violet-500)"}': {
    'value': 'ring-violet-500',
  },
  '{"--tw-ring-color":"var(--color-violet-600)"}': {
    'value': 'ring-violet-600',
  },
  '{"--tw-ring-color":"var(--color-violet-700)"}': {
    'value': 'ring-violet-700',
  },
  '{"--tw-ring-color":"var(--color-violet-800)"}': {
    'value': 'ring-violet-800',
  },
  '{"--tw-ring-color":"var(--color-violet-900)"}': {
    'value': 'ring-violet-900',
  },
  '{"--tw-ring-color":"var(--color-violet-950)"}': {
    'value': 'ring-violet-950',
  },
  '{"--tw-ring-color":"var(--color-purple-50)"}': { 'value': 'ring-purple-50' },
  '{"--tw-ring-color":"var(--color-purple-100)"}': {
    'value': 'ring-purple-100',
  },
  '{"--tw-ring-color":"var(--color-purple-200)"}': {
    'value': 'ring-purple-200',
  },
  '{"--tw-ring-color":"var(--color-purple-300)"}': {
    'value': 'ring-purple-300',
  },
  '{"--tw-ring-color":"var(--color-purple-400)"}': {
    'value': 'ring-purple-400',
  },
  '{"--tw-ring-color":"var(--color-purple-500)"}': {
    'value': 'ring-purple-500',
  },
  '{"--tw-ring-color":"var(--color-purple-600)"}': {
    'value': 'ring-purple-600',
  },
  '{"--tw-ring-color":"var(--color-purple-700)"}': {
    'value': 'ring-purple-700',
  },
  '{"--tw-ring-color":"var(--color-purple-800)"}': {
    'value': 'ring-purple-800',
  },
  '{"--tw-ring-color":"var(--color-purple-900)"}': {
    'value': 'ring-purple-900',
  },
  '{"--tw-ring-color":"var(--color-purple-950)"}': {
    'value': 'ring-purple-950',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-50)"}': {
    'value': 'ring-fuchsia-50',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-100)"}': {
    'value': 'ring-fuchsia-100',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-200)"}': {
    'value': 'ring-fuchsia-200',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-300)"}': {
    'value': 'ring-fuchsia-300',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-400)"}': {
    'value': 'ring-fuchsia-400',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-500)"}': {
    'value': 'ring-fuchsia-500',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-600)"}': {
    'value': 'ring-fuchsia-600',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-700)"}': {
    'value': 'ring-fuchsia-700',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-800)"}': {
    'value': 'ring-fuchsia-800',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-900)"}': {
    'value': 'ring-fuchsia-900',
  },
  '{"--tw-ring-color":"var(--color-fuchsia-950)"}': {
    'value': 'ring-fuchsia-950',
  },
  '{"--tw-ring-color":"var(--color-pink-50)"}': { 'value': 'ring-pink-50' },
  '{"--tw-ring-color":"var(--color-pink-100)"}': { 'value': 'ring-pink-100' },
  '{"--tw-ring-color":"var(--color-pink-200)"}': { 'value': 'ring-pink-200' },
  '{"--tw-ring-color":"var(--color-pink-300)"}': { 'value': 'ring-pink-300' },
  '{"--tw-ring-color":"var(--color-pink-400)"}': { 'value': 'ring-pink-400' },
  '{"--tw-ring-color":"var(--color-pink-500)"}': { 'value': 'ring-pink-500' },
  '{"--tw-ring-color":"var(--color-pink-600)"}': { 'value': 'ring-pink-600' },
  '{"--tw-ring-color":"var(--color-pink-700)"}': { 'value': 'ring-pink-700' },
  '{"--tw-ring-color":"var(--color-pink-800)"}': { 'value': 'ring-pink-800' },
  '{"--tw-ring-color":"var(--color-pink-900)"}': { 'value': 'ring-pink-900' },
  '{"--tw-ring-color":"var(--color-pink-950)"}': { 'value': 'ring-pink-950' },
  '{"--tw-ring-color":"var(--color-rose-50)"}': { 'value': 'ring-rose-50' },
  '{"--tw-ring-color":"var(--color-rose-100)"}': { 'value': 'ring-rose-100' },
  '{"--tw-ring-color":"var(--color-rose-200)"}': { 'value': 'ring-rose-200' },
  '{"--tw-ring-color":"var(--color-rose-300)"}': { 'value': 'ring-rose-300' },
  '{"--tw-ring-color":"var(--color-rose-400)"}': { 'value': 'ring-rose-400' },
  '{"--tw-ring-color":"var(--color-rose-500)"}': { 'value': 'ring-rose-500' },
  '{"--tw-ring-color":"var(--color-rose-600)"}': { 'value': 'ring-rose-600' },
  '{"--tw-ring-color":"var(--color-rose-700)"}': { 'value': 'ring-rose-700' },
  '{"--tw-ring-color":"var(--color-rose-800)"}': { 'value': 'ring-rose-800' },
  '{"--tw-ring-color":"var(--color-rose-900)"}': { 'value': 'ring-rose-900' },
  '{"--tw-ring-color":"var(--color-rose-950)"}': { 'value': 'ring-rose-950' },
  '{"--tw-ring-color":"var(--color-slate-50)"}': { 'value': 'ring-slate-50' },
  '{"--tw-ring-color":"var(--color-slate-100)"}': { 'value': 'ring-slate-100' },
  '{"--tw-ring-color":"var(--color-slate-200)"}': { 'value': 'ring-slate-200' },
  '{"--tw-ring-color":"var(--color-slate-300)"}': { 'value': 'ring-slate-300' },
  '{"--tw-ring-color":"var(--color-slate-400)"}': { 'value': 'ring-slate-400' },
  '{"--tw-ring-color":"var(--color-slate-500)"}': { 'value': 'ring-slate-500' },
  '{"--tw-ring-color":"var(--color-slate-600)"}': { 'value': 'ring-slate-600' },
  '{"--tw-ring-color":"var(--color-slate-700)"}': { 'value': 'ring-slate-700' },
  '{"--tw-ring-color":"var(--color-slate-800)"}': { 'value': 'ring-slate-800' },
  '{"--tw-ring-color":"var(--color-slate-900)"}': { 'value': 'ring-slate-900' },
  '{"--tw-ring-color":"var(--color-slate-950)"}': { 'value': 'ring-slate-950' },
  '{"--tw-ring-color":"var(--color-gray-50)"}': { 'value': 'ring-gray-50' },
  '{"--tw-ring-color":"var(--color-gray-100)"}': { 'value': 'ring-gray-100' },
  '{"--tw-ring-color":"var(--color-gray-200)"}': { 'value': 'ring-gray-200' },
  '{"--tw-ring-color":"var(--color-gray-300)"}': { 'value': 'ring-gray-300' },
  '{"--tw-ring-color":"var(--color-gray-400)"}': { 'value': 'ring-gray-400' },
  '{"--tw-ring-color":"var(--color-gray-500)"}': { 'value': 'ring-gray-500' },
  '{"--tw-ring-color":"var(--color-gray-600)"}': { 'value': 'ring-gray-600' },
  '{"--tw-ring-color":"var(--color-gray-700)"}': { 'value': 'ring-gray-700' },
  '{"--tw-ring-color":"var(--color-gray-800)"}': { 'value': 'ring-gray-800' },
  '{"--tw-ring-color":"var(--color-gray-900)"}': { 'value': 'ring-gray-900' },
  '{"--tw-ring-color":"var(--color-gray-950)"}': { 'value': 'ring-gray-950' },
  '{"--tw-ring-color":"var(--color-zinc-50)"}': { 'value': 'ring-zinc-50' },
  '{"--tw-ring-color":"var(--color-zinc-100)"}': { 'value': 'ring-zinc-100' },
  '{"--tw-ring-color":"var(--color-zinc-200)"}': { 'value': 'ring-zinc-200' },
  '{"--tw-ring-color":"var(--color-zinc-300)"}': { 'value': 'ring-zinc-300' },
  '{"--tw-ring-color":"var(--color-zinc-400)"}': { 'value': 'ring-zinc-400' },
  '{"--tw-ring-color":"var(--color-zinc-500)"}': { 'value': 'ring-zinc-500' },
  '{"--tw-ring-color":"var(--color-zinc-600)"}': { 'value': 'ring-zinc-600' },
  '{"--tw-ring-color":"var(--color-zinc-700)"}': { 'value': 'ring-zinc-700' },
  '{"--tw-ring-color":"var(--color-zinc-800)"}': { 'value': 'ring-zinc-800' },
  '{"--tw-ring-color":"var(--color-zinc-900)"}': { 'value': 'ring-zinc-900' },
  '{"--tw-ring-color":"var(--color-zinc-950)"}': { 'value': 'ring-zinc-950' },
  '{"--tw-ring-color":"var(--color-neutral-50)"}': {
    'value': 'ring-neutral-50',
  },
  '{"--tw-ring-color":"var(--color-neutral-100)"}': {
    'value': 'ring-neutral-100',
  },
  '{"--tw-ring-color":"var(--color-neutral-200)"}': {
    'value': 'ring-neutral-200',
  },
  '{"--tw-ring-color":"var(--color-neutral-300)"}': {
    'value': 'ring-neutral-300',
  },
  '{"--tw-ring-color":"var(--color-neutral-400)"}': {
    'value': 'ring-neutral-400',
  },
  '{"--tw-ring-color":"var(--color-neutral-500)"}': {
    'value': 'ring-neutral-500',
  },
  '{"--tw-ring-color":"var(--color-neutral-600)"}': {
    'value': 'ring-neutral-600',
  },
  '{"--tw-ring-color":"var(--color-neutral-700)"}': {
    'value': 'ring-neutral-700',
  },
  '{"--tw-ring-color":"var(--color-neutral-800)"}': {
    'value': 'ring-neutral-800',
  },
  '{"--tw-ring-color":"var(--color-neutral-900)"}': {
    'value': 'ring-neutral-900',
  },
  '{"--tw-ring-color":"var(--color-neutral-950)"}': {
    'value': 'ring-neutral-950',
  },
  '{"--tw-ring-color":"var(--color-stone-50)"}': { 'value': 'ring-stone-50' },
  '{"--tw-ring-color":"var(--color-stone-100)"}': { 'value': 'ring-stone-100' },
  '{"--tw-ring-color":"var(--color-stone-200)"}': { 'value': 'ring-stone-200' },
  '{"--tw-ring-color":"var(--color-stone-300)"}': { 'value': 'ring-stone-300' },
  '{"--tw-ring-color":"var(--color-stone-400)"}': { 'value': 'ring-stone-400' },
  '{"--tw-ring-color":"var(--color-stone-500)"}': { 'value': 'ring-stone-500' },
  '{"--tw-ring-color":"var(--color-stone-600)"}': { 'value': 'ring-stone-600' },
  '{"--tw-ring-color":"var(--color-stone-700)"}': { 'value': 'ring-stone-700' },
  '{"--tw-ring-color":"var(--color-stone-800)"}': { 'value': 'ring-stone-800' },
  '{"--tw-ring-color":"var(--color-stone-900)"}': { 'value': 'ring-stone-900' },
  '{"--tw-ring-color":"var(--color-stone-950)"}': { 'value': 'ring-stone-950' },
  '{"--tw-inset-ring-shadow":"inset 0 0 0 1px"}': { 'value': 'inset-ring' },
  '{"--tw-inset-ring-shadow":"inset 0 0 0 <number>px"}': {
    'value': 'inset-ring-<number>',
  },
  '{"--tw-inset-ring-shadow":"inset 0 0 0 var(<custom-property>)"}': {
    'value': 'inset-ring-(<custom-property>)',
  },
  '{"--tw-inset-ring-shadow":"inset 0 0 0 <value>"}': {
    'value': 'inset-ring-[<value>]',
  },
  '{"--tw-inset-ring-color":"inherit"}': { 'value': 'inset-ring-inherit' },
  '{"--tw-inset-ring-color":"currentColor"}': { 'value': 'inset-ring-current' },
  '{"--tw-inset-ring-color":"transparent"}': {
    'value': 'inset-ring-transparent',
  },
  '{"--tw-inset-ring-color":"var(--color-black)"}': {
    'value': 'inset-ring-black',
  },
  '{"--tw-inset-ring-color":"var(--color-white)"}': {
    'value': 'inset-ring-white',
  },
  '{"--tw-inset-ring-color":"var(--color-red-50)"}': {
    'value': 'inset-ring-red-50',
  },
  '{"--tw-inset-ring-color":"var(--color-red-100)"}': {
    'value': 'inset-ring-red-100',
  },
  '{"--tw-inset-ring-color":"var(--color-red-200)"}': {
    'value': 'inset-ring-red-200',
  },
  '{"--tw-inset-ring-color":"var(--color-red-300)"}': {
    'value': 'inset-ring-red-300',
  },
  '{"--tw-inset-ring-color":"var(--color-red-400)"}': {
    'value': 'inset-ring-red-400',
  },
  '{"--tw-inset-ring-color":"var(--color-red-500)"}': {
    'value': 'inset-ring-red-500',
  },
  '{"--tw-inset-ring-color":"var(--color-red-600)"}': {
    'value': 'inset-ring-red-600',
  },
  '{"--tw-inset-ring-color":"var(--color-red-700)"}': {
    'value': 'inset-ring-red-700',
  },
  '{"--tw-inset-ring-color":"var(--color-red-800)"}': {
    'value': 'inset-ring-red-800',
  },
  '{"--tw-inset-ring-color":"var(--color-red-900)"}': {
    'value': 'inset-ring-red-900',
  },
  '{"--tw-inset-ring-color":"var(--color-red-950)"}': {
    'value': 'inset-ring-red-950',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-50)"}': {
    'value': 'inset-ring-orange-50',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-100)"}': {
    'value': 'inset-ring-orange-100',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-200)"}': {
    'value': 'inset-ring-orange-200',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-300)"}': {
    'value': 'inset-ring-orange-300',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-400)"}': {
    'value': 'inset-ring-orange-400',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-500)"}': {
    'value': 'inset-ring-orange-500',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-600)"}': {
    'value': 'inset-ring-orange-600',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-700)"}': {
    'value': 'inset-ring-orange-700',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-800)"}': {
    'value': 'inset-ring-orange-800',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-900)"}': {
    'value': 'inset-ring-orange-900',
  },
  '{"--tw-inset-ring-color":"var(--color-orange-950)"}': {
    'value': 'inset-ring-orange-950',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-50)"}': {
    'value': 'inset-ring-amber-50',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-100)"}': {
    'value': 'inset-ring-amber-100',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-200)"}': {
    'value': 'inset-ring-amber-200',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-300)"}': {
    'value': 'inset-ring-amber-300',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-400)"}': {
    'value': 'inset-ring-amber-400',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-500)"}': {
    'value': 'inset-ring-amber-500',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-600)"}': {
    'value': 'inset-ring-amber-600',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-700)"}': {
    'value': 'inset-ring-amber-700',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-800)"}': {
    'value': 'inset-ring-amber-800',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-900)"}': {
    'value': 'inset-ring-amber-900',
  },
  '{"--tw-inset-ring-color":"var(--color-amber-950)"}': {
    'value': 'inset-ring-amber-950',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-50)"}': {
    'value': 'inset-ring-yellow-50',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-100)"}': {
    'value': 'inset-ring-yellow-100',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-200)"}': {
    'value': 'inset-ring-yellow-200',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-300)"}': {
    'value': 'inset-ring-yellow-300',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-400)"}': {
    'value': 'inset-ring-yellow-400',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-500)"}': {
    'value': 'inset-ring-yellow-500',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-600)"}': {
    'value': 'inset-ring-yellow-600',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-700)"}': {
    'value': 'inset-ring-yellow-700',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-800)"}': {
    'value': 'inset-ring-yellow-800',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-900)"}': {
    'value': 'inset-ring-yellow-900',
  },
  '{"--tw-inset-ring-color":"var(--color-yellow-950)"}': {
    'value': 'inset-ring-yellow-950',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-50)"}': {
    'value': 'inset-ring-lime-50',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-100)"}': {
    'value': 'inset-ring-lime-100',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-200)"}': {
    'value': 'inset-ring-lime-200',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-300)"}': {
    'value': 'inset-ring-lime-300',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-400)"}': {
    'value': 'inset-ring-lime-400',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-500)"}': {
    'value': 'inset-ring-lime-500',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-600)"}': {
    'value': 'inset-ring-lime-600',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-700)"}': {
    'value': 'inset-ring-lime-700',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-800)"}': {
    'value': 'inset-ring-lime-800',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-900)"}': {
    'value': 'inset-ring-lime-900',
  },
  '{"--tw-inset-ring-color":"var(--color-lime-950)"}': {
    'value': 'inset-ring-lime-950',
  },
  '{"--tw-inset-ring-color":"var(--color-green-50)"}': {
    'value': 'inset-ring-green-50',
  },
  '{"--tw-inset-ring-color":"var(--color-green-100)"}': {
    'value': 'inset-ring-green-100',
  },
  '{"--tw-inset-ring-color":"var(--color-green-200)"}': {
    'value': 'inset-ring-green-200',
  },
  '{"--tw-inset-ring-color":"var(--color-green-300)"}': {
    'value': 'inset-ring-green-300',
  },
  '{"--tw-inset-ring-color":"var(--color-green-400)"}': {
    'value': 'inset-ring-green-400',
  },
  '{"--tw-inset-ring-color":"var(--color-green-500)"}': {
    'value': 'inset-ring-green-500',
  },
  '{"--tw-inset-ring-color":"var(--color-green-600)"}': {
    'value': 'inset-ring-green-600',
  },
  '{"--tw-inset-ring-color":"var(--color-green-700)"}': {
    'value': 'inset-ring-green-700',
  },
  '{"--tw-inset-ring-color":"var(--color-green-800)"}': {
    'value': 'inset-ring-green-800',
  },
  '{"--tw-inset-ring-color":"var(--color-green-900)"}': {
    'value': 'inset-ring-green-900',
  },
  '{"--tw-inset-ring-color":"var(--color-green-950)"}': {
    'value': 'inset-ring-green-950',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-50)"}': {
    'value': 'inset-ring-emerald-50',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-100)"}': {
    'value': 'inset-ring-emerald-100',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-200)"}': {
    'value': 'inset-ring-emerald-200',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-300)"}': {
    'value': 'inset-ring-emerald-300',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-400)"}': {
    'value': 'inset-ring-emerald-400',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-500)"}': {
    'value': 'inset-ring-emerald-500',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-600)"}': {
    'value': 'inset-ring-emerald-600',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-700)"}': {
    'value': 'inset-ring-emerald-700',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-800)"}': {
    'value': 'inset-ring-emerald-800',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-900)"}': {
    'value': 'inset-ring-emerald-900',
  },
  '{"--tw-inset-ring-color":"var(--color-emerald-950)"}': {
    'value': 'inset-ring-emerald-950',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-50)"}': {
    'value': 'inset-ring-teal-50',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-100)"}': {
    'value': 'inset-ring-teal-100',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-200)"}': {
    'value': 'inset-ring-teal-200',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-300)"}': {
    'value': 'inset-ring-teal-300',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-400)"}': {
    'value': 'inset-ring-teal-400',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-500)"}': {
    'value': 'inset-ring-teal-500',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-600)"}': {
    'value': 'inset-ring-teal-600',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-700)"}': {
    'value': 'inset-ring-teal-700',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-800)"}': {
    'value': 'inset-ring-teal-800',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-900)"}': {
    'value': 'inset-ring-teal-900',
  },
  '{"--tw-inset-ring-color":"var(--color-teal-950)"}': {
    'value': 'inset-ring-teal-950',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-50)"}': {
    'value': 'inset-ring-cyan-50',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-100)"}': {
    'value': 'inset-ring-cyan-100',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-200)"}': {
    'value': 'inset-ring-cyan-200',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-300)"}': {
    'value': 'inset-ring-cyan-300',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-400)"}': {
    'value': 'inset-ring-cyan-400',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-500)"}': {
    'value': 'inset-ring-cyan-500',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-600)"}': {
    'value': 'inset-ring-cyan-600',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-700)"}': {
    'value': 'inset-ring-cyan-700',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-800)"}': {
    'value': 'inset-ring-cyan-800',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-900)"}': {
    'value': 'inset-ring-cyan-900',
  },
  '{"--tw-inset-ring-color":"var(--color-cyan-950)"}': {
    'value': 'inset-ring-cyan-950',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-50)"}': {
    'value': 'inset-ring-sky-50',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-100)"}': {
    'value': 'inset-ring-sky-100',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-200)"}': {
    'value': 'inset-ring-sky-200',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-300)"}': {
    'value': 'inset-ring-sky-300',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-400)"}': {
    'value': 'inset-ring-sky-400',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-500)"}': {
    'value': 'inset-ring-sky-500',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-600)"}': {
    'value': 'inset-ring-sky-600',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-700)"}': {
    'value': 'inset-ring-sky-700',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-800)"}': {
    'value': 'inset-ring-sky-800',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-900)"}': {
    'value': 'inset-ring-sky-900',
  },
  '{"--tw-inset-ring-color":"var(--color-sky-950)"}': {
    'value': 'inset-ring-sky-950',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-50)"}': {
    'value': 'inset-ring-blue-50',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-100)"}': {
    'value': 'inset-ring-blue-100',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-200)"}': {
    'value': 'inset-ring-blue-200',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-300)"}': {
    'value': 'inset-ring-blue-300',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-400)"}': {
    'value': 'inset-ring-blue-400',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-500)"}': {
    'value': 'inset-ring-blue-500',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-600)"}': {
    'value': 'inset-ring-blue-600',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-700)"}': {
    'value': 'inset-ring-blue-700',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-800)"}': {
    'value': 'inset-ring-blue-800',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-900)"}': {
    'value': 'inset-ring-blue-900',
  },
  '{"--tw-inset-ring-color":"var(--color-blue-950)"}': {
    'value': 'inset-ring-blue-950',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-50)"}': {
    'value': 'inset-ring-indigo-50',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-100)"}': {
    'value': 'inset-ring-indigo-100',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-200)"}': {
    'value': 'inset-ring-indigo-200',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-300)"}': {
    'value': 'inset-ring-indigo-300',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-400)"}': {
    'value': 'inset-ring-indigo-400',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-500)"}': {
    'value': 'inset-ring-indigo-500',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-600)"}': {
    'value': 'inset-ring-indigo-600',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-700)"}': {
    'value': 'inset-ring-indigo-700',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-800)"}': {
    'value': 'inset-ring-indigo-800',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-900)"}': {
    'value': 'inset-ring-indigo-900',
  },
  '{"--tw-inset-ring-color":"var(--color-indigo-950)"}': {
    'value': 'inset-ring-indigo-950',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-50)"}': {
    'value': 'inset-ring-violet-50',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-100)"}': {
    'value': 'inset-ring-violet-100',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-200)"}': {
    'value': 'inset-ring-violet-200',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-300)"}': {
    'value': 'inset-ring-violet-300',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-400)"}': {
    'value': 'inset-ring-violet-400',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-500)"}': {
    'value': 'inset-ring-violet-500',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-600)"}': {
    'value': 'inset-ring-violet-600',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-700)"}': {
    'value': 'inset-ring-violet-700',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-800)"}': {
    'value': 'inset-ring-violet-800',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-900)"}': {
    'value': 'inset-ring-violet-900',
  },
  '{"--tw-inset-ring-color":"var(--color-violet-950)"}': {
    'value': 'inset-ring-violet-950',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-50)"}': {
    'value': 'inset-ring-purple-50',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-100)"}': {
    'value': 'inset-ring-purple-100',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-200)"}': {
    'value': 'inset-ring-purple-200',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-300)"}': {
    'value': 'inset-ring-purple-300',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-400)"}': {
    'value': 'inset-ring-purple-400',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-500)"}': {
    'value': 'inset-ring-purple-500',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-600)"}': {
    'value': 'inset-ring-purple-600',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-700)"}': {
    'value': 'inset-ring-purple-700',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-800)"}': {
    'value': 'inset-ring-purple-800',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-900)"}': {
    'value': 'inset-ring-purple-900',
  },
  '{"--tw-inset-ring-color":"var(--color-purple-950)"}': {
    'value': 'inset-ring-purple-950',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-50)"}': {
    'value': 'inset-ring-fuchsia-50',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-100)"}': {
    'value': 'inset-ring-fuchsia-100',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-200)"}': {
    'value': 'inset-ring-fuchsia-200',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-300)"}': {
    'value': 'inset-ring-fuchsia-300',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-400)"}': {
    'value': 'inset-ring-fuchsia-400',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-500)"}': {
    'value': 'inset-ring-fuchsia-500',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-600)"}': {
    'value': 'inset-ring-fuchsia-600',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-700)"}': {
    'value': 'inset-ring-fuchsia-700',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-800)"}': {
    'value': 'inset-ring-fuchsia-800',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-900)"}': {
    'value': 'inset-ring-fuchsia-900',
  },
  '{"--tw-inset-ring-color":"var(--color-fuchsia-950)"}': {
    'value': 'inset-ring-fuchsia-950',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-50)"}': {
    'value': 'inset-ring-pink-50',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-100)"}': {
    'value': 'inset-ring-pink-100',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-200)"}': {
    'value': 'inset-ring-pink-200',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-300)"}': {
    'value': 'inset-ring-pink-300',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-400)"}': {
    'value': 'inset-ring-pink-400',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-500)"}': {
    'value': 'inset-ring-pink-500',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-600)"}': {
    'value': 'inset-ring-pink-600',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-700)"}': {
    'value': 'inset-ring-pink-700',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-800)"}': {
    'value': 'inset-ring-pink-800',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-900)"}': {
    'value': 'inset-ring-pink-900',
  },
  '{"--tw-inset-ring-color":"var(--color-pink-950)"}': {
    'value': 'inset-ring-pink-950',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-50)"}': {
    'value': 'inset-ring-rose-50',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-100)"}': {
    'value': 'inset-ring-rose-100',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-200)"}': {
    'value': 'inset-ring-rose-200',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-300)"}': {
    'value': 'inset-ring-rose-300',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-400)"}': {
    'value': 'inset-ring-rose-400',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-500)"}': {
    'value': 'inset-ring-rose-500',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-600)"}': {
    'value': 'inset-ring-rose-600',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-700)"}': {
    'value': 'inset-ring-rose-700',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-800)"}': {
    'value': 'inset-ring-rose-800',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-900)"}': {
    'value': 'inset-ring-rose-900',
  },
  '{"--tw-inset-ring-color":"var(--color-rose-950)"}': {
    'value': 'inset-ring-rose-950',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-50)"}': {
    'value': 'inset-ring-slate-50',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-100)"}': {
    'value': 'inset-ring-slate-100',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-200)"}': {
    'value': 'inset-ring-slate-200',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-300)"}': {
    'value': 'inset-ring-slate-300',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-400)"}': {
    'value': 'inset-ring-slate-400',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-500)"}': {
    'value': 'inset-ring-slate-500',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-600)"}': {
    'value': 'inset-ring-slate-600',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-700)"}': {
    'value': 'inset-ring-slate-700',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-800)"}': {
    'value': 'inset-ring-slate-800',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-900)"}': {
    'value': 'inset-ring-slate-900',
  },
  '{"--tw-inset-ring-color":"var(--color-slate-950)"}': {
    'value': 'inset-ring-slate-950',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-50)"}': {
    'value': 'inset-ring-gray-50',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-100)"}': {
    'value': 'inset-ring-gray-100',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-200)"}': {
    'value': 'inset-ring-gray-200',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-300)"}': {
    'value': 'inset-ring-gray-300',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-400)"}': {
    'value': 'inset-ring-gray-400',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-500)"}': {
    'value': 'inset-ring-gray-500',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-600)"}': {
    'value': 'inset-ring-gray-600',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-700)"}': {
    'value': 'inset-ring-gray-700',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-800)"}': {
    'value': 'inset-ring-gray-800',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-900)"}': {
    'value': 'inset-ring-gray-900',
  },
  '{"--tw-inset-ring-color":"var(--color-gray-950)"}': {
    'value': 'inset-ring-gray-950',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-50)"}': {
    'value': 'inset-ring-zinc-50',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-100)"}': {
    'value': 'inset-ring-zinc-100',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-200)"}': {
    'value': 'inset-ring-zinc-200',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-300)"}': {
    'value': 'inset-ring-zinc-300',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-400)"}': {
    'value': 'inset-ring-zinc-400',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-500)"}': {
    'value': 'inset-ring-zinc-500',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-600)"}': {
    'value': 'inset-ring-zinc-600',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-700)"}': {
    'value': 'inset-ring-zinc-700',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-800)"}': {
    'value': 'inset-ring-zinc-800',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-900)"}': {
    'value': 'inset-ring-zinc-900',
  },
  '{"--tw-inset-ring-color":"var(--color-zinc-950)"}': {
    'value': 'inset-ring-zinc-950',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-50)"}': {
    'value': 'inset-ring-neutral-50',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-100)"}': {
    'value': 'inset-ring-neutral-100',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-200)"}': {
    'value': 'inset-ring-neutral-200',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-300)"}': {
    'value': 'inset-ring-neutral-300',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-400)"}': {
    'value': 'inset-ring-neutral-400',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-500)"}': {
    'value': 'inset-ring-neutral-500',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-600)"}': {
    'value': 'inset-ring-neutral-600',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-700)"}': {
    'value': 'inset-ring-neutral-700',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-800)"}': {
    'value': 'inset-ring-neutral-800',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-900)"}': {
    'value': 'inset-ring-neutral-900',
  },
  '{"--tw-inset-ring-color":"var(--color-neutral-950)"}': {
    'value': 'inset-ring-neutral-950',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-50)"}': {
    'value': 'inset-ring-stone-50',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-100)"}': {
    'value': 'inset-ring-stone-100',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-200)"}': {
    'value': 'inset-ring-stone-200',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-300)"}': {
    'value': 'inset-ring-stone-300',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-400)"}': {
    'value': 'inset-ring-stone-400',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-500)"}': {
    'value': 'inset-ring-stone-500',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-600)"}': {
    'value': 'inset-ring-stone-600',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-700)"}': {
    'value': 'inset-ring-stone-700',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-800)"}': {
    'value': 'inset-ring-stone-800',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-900)"}': {
    'value': 'inset-ring-stone-900',
  },
  '{"--tw-inset-ring-color":"var(--color-stone-950)"}': {
    'value': 'inset-ring-stone-950',
  },
  '{"scroll-snap-stop":"normal"}': { 'value': 'snap-normal' },
  '{"scroll-snap-stop":"always"}': { 'value': 'snap-always' },
  '{"grid-auto-flow":"row"}': { 'value': 'grid-flow-row' },
  '{"grid-auto-flow":"column"}': { 'value': 'grid-flow-col' },
  '{"grid-auto-flow":"dense"}': { 'value': 'grid-flow-dense' },
  '{"grid-auto-flow":"row dense"}': { 'value': 'grid-flow-row-dense' },
  '{"grid-auto-flow":"column dense"}': { 'value': 'grid-flow-col-dense' },
  '{"justify-content":"flex-start"}': { 'value': 'justify-start' },
  '{"justify-content":"flex-end"}': { 'value': 'justify-end' },
  '{"justify-content":"safe flex-end"}': { 'value': 'justify-end-safe' },
  '{"justify-content":"center"}': { 'value': 'justify-center' },
  '{"justify-content":"safe center"}': { 'value': 'justify-center-safe' },
  '{"justify-content":"space-between"}': { 'value': 'justify-between' },
  '{"justify-content":"space-around"}': { 'value': 'justify-around' },
  '{"justify-content":"space-evenly"}': { 'value': 'justify-evenly' },
  '{"justify-content":"stretch"}': { 'value': 'justify-stretch' },
  '{"justify-content":"baseline"}': { 'value': 'justify-baseline' },
  '{"justify-content":"normal"}': { 'value': 'justify-normal' },
  '{"justify-items":"start"}': { 'value': 'justify-items-start' },
  '{"justify-items":"end"}': { 'value': 'justify-items-end' },
  '{"justify-items":"safe end"}': { 'value': 'justify-items-end-safe' },
  '{"justify-items":"center"}': { 'value': 'justify-items-center' },
  '{"justify-items":"safe center"}': { 'value': 'justify-items-center-safe' },
  '{"justify-items":"stretch"}': { 'value': 'justify-items-stretch' },
  '{"justify-items":"normal"}': { 'value': 'justify-items-normal' },
  '{"justify-self":"auto"}': { 'value': 'justify-self-auto' },
  '{"justify-self":"start"}': { 'value': 'justify-self-start' },
  '{"justify-self":"center"}': { 'value': 'justify-self-center' },
  '{"justify-self":"safe center"}': { 'value': 'justify-self-center-safe' },
  '{"justify-self":"end"}': { 'value': 'justify-self-end' },
  '{"justify-self":"safe end"}': { 'value': 'justify-self-end-safe' },
  '{"justify-self":"stretch"}': { 'value': 'justify-self-stretch' },
  '{"mask-composite":"add"}': { 'value': 'mask-add' },
  '{"mask-composite":"subtract"}': { 'value': 'mask-subtract' },
  '{"mask-composite":"intersect"}': { 'value': 'mask-intersect' },
  '{"mask-composite":"exclude"}': { 'value': 'mask-exclude' },
  '{"background-attachment":"fixed"}': { 'value': 'bg-fixed' },
  '{"background-attachment":"local"}': { 'value': 'bg-local' },
  '{"background-attachment":"scroll"}': { 'value': 'bg-scroll' },
  '{"backdrop-filter":"contrast(<number>%)"}': {
    'value': 'backdrop-contrast-<number>',
  },
  '{"backdrop-filter":"contrast(var(<custom-property>))"}': {
    'value': 'backdrop-contrast-(<custom-property>)',
  },
  '{"backdrop-filter":"contrast(<value>)"}': {
    'value': 'backdrop-contrast-[<value>]',
  },
  '{"border-style":"solid"}': { 'value': 'border-solid' },
  '{"border-style":"dashed"}': { 'value': 'border-dashed' },
  '{"border-style":"dotted"}': { 'value': 'border-dotted' },
  '{"border-style":"double"}': { 'value': 'border-double' },
  '{"border-style":"hidden"}': { 'value': 'border-hidden' },
  '{"border-style":"none"}': { 'value': 'border-none' },
  '{"align-self":"auto"}': { 'value': 'self-auto' },
  '{"align-self":"flex-start"}': { 'value': 'self-start' },
  '{"align-self":"flex-end"}': { 'value': 'self-end' },
  '{"align-self":"safe flex-end"}': { 'value': 'self-end-safe' },
  '{"align-self":"center"}': { 'value': 'self-center' },
  '{"align-self":"safe center"}': { 'value': 'self-center-safe' },
  '{"align-self":"stretch"}': { 'value': 'self-stretch' },
  '{"align-self":"baseline"}': { 'value': 'self-baseline' },
  '{"align-self":"last baseline"}': { 'value': 'self-baseline-last' },
  '{"scroll-margin":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-m-<number>',
  },
  '{"scroll-margin":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-m-<number>',
  },
  '{"scroll-margin":"var(<custom-property>)"}': {
    'value': 'scroll-m-(<custom-property>)',
  },
  '{"scroll-margin":"<value>"}': { 'value': 'scroll-m-[<value>]' },
  '{"scroll-margin-inline":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-mx-<number>',
  },
  '{"scroll-margin-inline":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-mx-<number>',
  },
  '{"scroll-margin-inline":"var(<custom-property>)"}': {
    'value': 'scroll-mx-(<custom-property>)',
  },
  '{"scroll-margin-inline":"<value>"}': { 'value': 'scroll-mx-[<value>]' },
  '{"scroll-margin-block":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-my-<number>',
  },
  '{"scroll-margin-block":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-my-<number>',
  },
  '{"scroll-margin-block":"var(<custom-property>)"}': {
    'value': 'scroll-my-(<custom-property>)',
  },
  '{"scroll-margin-block":"<value>"}': { 'value': 'scroll-my-[<value>]' },
  '{"scroll-margin-inline-start":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-ms-<number>',
  },
  '{"scroll-margin-inline-start":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-ms-<number>',
  },
  '{"scroll-margin-inline-start":"var(<custom-property>)"}': {
    'value': 'scroll-ms-(<custom-property>)',
  },
  '{"scroll-margin-inline-start":"<value>"}': {
    'value': 'scroll-ms-[<value>]',
  },
  '{"scroll-margin-inline-end":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-me-<number>',
  },
  '{"scroll-margin-inline-end":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-me-<number>',
  },
  '{"scroll-margin-inline-end":"var(<custom-property>)"}': {
    'value': 'scroll-me-(<custom-property>)',
  },
  '{"scroll-margin-inline-end":"<value>"}': { 'value': 'scroll-me-[<value>]' },
  '{"scroll-margin-top":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-mt-<number>',
  },
  '{"scroll-margin-top":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-mt-<number>',
  },
  '{"scroll-margin-top":"var(<custom-property>)"}': {
    'value': 'scroll-mt-(<custom-property>)',
  },
  '{"scroll-margin-top":"<value>"}': { 'value': 'scroll-mt-[<value>]' },
  '{"scroll-margin-right":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-mr-<number>',
  },
  '{"scroll-margin-right":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-mr-<number>',
  },
  '{"scroll-margin-right":"var(<custom-property>)"}': {
    'value': 'scroll-mr-(<custom-property>)',
  },
  '{"scroll-margin-right":"<value>"}': { 'value': 'scroll-mr-[<value>]' },
  '{"scroll-margin-bottom":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-mb-<number>',
  },
  '{"scroll-margin-bottom":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-mb-<number>',
  },
  '{"scroll-margin-bottom":"var(<custom-property>)"}': {
    'value': 'scroll-mb-(<custom-property>)',
  },
  '{"scroll-margin-bottom":"<value>"}': { 'value': 'scroll-mb-[<value>]' },
  '{"scroll-margin-left":"calc(var(--spacing) * <number>)"}': {
    'value': 'scroll-ml-<number>',
  },
  '{"scroll-margin-left":"calc(var(--spacing) * -<number>)"}': {
    'value': '-scroll-ml-<number>',
  },
  '{"scroll-margin-left":"var(<custom-property>)"}': {
    'value': 'scroll-ml-(<custom-property>)',
  },
  '{"scroll-margin-left":"<value>"}': { 'value': 'scroll-ml-[<value>]' },
  '{"table-layout":"auto"}': { 'value': 'table-auto' },
  '{"table-layout":"fixed"}': { 'value': 'table-fixed' },
  '{"background-origin":"border-box"}': { 'value': 'bg-origin-border' },
  '{"background-origin":"padding-box"}': { 'value': 'bg-origin-padding' },
  '{"background-origin":"content-box"}': { 'value': 'bg-origin-content' },
  '{"place-content":"center"}': { 'value': 'place-content-center' },
  '{"place-content":"safe center"}': { 'value': 'place-content-center-safe' },
  '{"place-content":"start"}': { 'value': 'place-content-start' },
  '{"place-content":"end"}': { 'value': 'place-content-end' },
  '{"place-content":"safe end"}': { 'value': 'place-content-end-safe' },
  '{"place-content":"space-between"}': { 'value': 'place-content-between' },
  '{"place-content":"space-around"}': { 'value': 'place-content-around' },
  '{"place-content":"space-evenly"}': { 'value': 'place-content-evenly' },
  '{"place-content":"baseline"}': { 'value': 'place-content-baseline' },
  '{"place-content":"stretch"}': { 'value': 'place-content-stretch' },
  '{"align-items":"flex-start"}': { 'value': 'items-start' },
  '{"align-items":"flex-end"}': { 'value': 'items-end' },
  '{"align-items":"safe flex-end"}': { 'value': 'items-end-safe' },
  '{"align-items":"center"}': { 'value': 'items-center' },
  '{"align-items":"safe center"}': { 'value': 'items-center-safe' },
  '{"align-items":"baseline"}': { 'value': 'items-baseline' },
  '{"align-items":"last baseline"}': { 'value': 'items-baseline-last' },
  '{"align-items":"stretch"}': { 'value': 'items-stretch' },
  '{"backdrop-filter":"hue-rotate(<number>deg)"}': {
    'value': 'backdrop-hue-rotate-<number>',
  },
  '{"backdrop-filter":"hue-rotate(calc(<number>deg * -1))"}': {
    'value': '-backdrop-hue-rotate-<number>',
  },
  '{"backdrop-filter":"hue-rotate(var(<custom-property>))"}': {
    'value': 'backdrop-hue-rotate-(<custom-property>)',
  },
  '{"backdrop-filter":"hue-rotate(<value>)"}': {
    'value': 'backdrop-hue-rotate-[<value>]',
  },
  '{"filter":"invert(100%)"}': { 'value': 'invert' },
  '{"filter":"invert(<number>%)"}': { 'value': 'invert-<number>' },
  '{"filter":"invert(var(<custom-property>))"}': {
    'value': 'invert-(<custom-property>)',
  },
  '{"filter":"invert(<value>)"}': { 'value': 'invert-[<value>]' },
  '{"mask-clip":"border-box"}': { 'value': 'mask-clip-border' },
  '{"mask-clip":"padding-box"}': { 'value': 'mask-clip-padding' },
  '{"mask-clip":"content-box"}': { 'value': 'mask-clip-content' },
  '{"mask-clip":"fill-box"}': { 'value': 'mask-clip-fill' },
  '{"mask-clip":"stroke-box"}': { 'value': 'mask-clip-stroke' },
  '{"mask-clip":"view-box"}': { 'value': 'mask-clip-view' },
  '{"mask-clip":"no-clip"}': { 'value': 'mask-no-clip' },
  '{"border-collapse":"collapse"}': { 'value': 'border-collapse' },
  '{"border-collapse":"separate"}': { 'value': 'border-separate' },
  '{"padding":"calc(var(--spacing) * <number>)"}': { 'value': 'p-<number>' },
  '{"padding":"1px"}': { 'value': 'p-px' },
  '{"padding":"var(<custom-property>)"}': { 'value': 'p-(<custom-property>)' },
  '{"padding":"<value>"}': { 'value': 'p-[<value>]' },
  '{"padding-inline":"calc(var(--spacing) * <number>)"}': {
    'value': 'px-<number>',
  },
  '{"padding-inline":"1px"}': { 'value': 'px-px' },
  '{"padding-inline":"var(<custom-property>)"}': {
    'value': 'px-(<custom-property>)',
  },
  '{"padding-inline":"<value>"}': { 'value': 'px-[<value>]' },
  '{"padding-block":"calc(var(--spacing) * <number>)"}': {
    'value': 'py-<number>',
  },
  '{"padding-block":"1px"}': { 'value': 'py-px' },
  '{"padding-block":"var(<custom-property>)"}': {
    'value': 'py-(<custom-property>)',
  },
  '{"padding-block":"<value>"}': { 'value': 'py-[<value>]' },
  '{"padding-inline-start":"calc(var(--spacing) * <number>)"}': {
    'value': 'ps-<number>',
  },
  '{"padding-inline-start":"1px"}': { 'value': 'ps-px' },
  '{"padding-inline-start":"var(<custom-property>)"}': {
    'value': 'ps-(<custom-property>)',
  },
  '{"padding-inline-start":"<value>"}': { 'value': 'ps-[<value>]' },
  '{"padding-inline-end":"calc(var(--spacing) * <number>)"}': {
    'value': 'pe-<number>',
  },
  '{"padding-inline-end":"1px"}': { 'value': 'pe-px' },
  '{"padding-inline-end":"var(<custom-property>)"}': {
    'value': 'pe-(<custom-property>)',
  },
  '{"padding-inline-end":"<value>"}': { 'value': 'pe-[<value>]' },
  '{"padding-top":"calc(var(--spacing) * <number>)"}': {
    'value': 'pt-<number>',
  },
  '{"padding-top":"1px"}': { 'value': 'pt-px' },
  '{"padding-top":"var(<custom-property>)"}': {
    'value': 'pt-(<custom-property>)',
  },
  '{"padding-top":"<value>"}': { 'value': 'pt-[<value>]' },
  '{"padding-right":"calc(var(--spacing) * <number>)"}': {
    'value': 'pr-<number>',
  },
  '{"padding-right":"1px"}': { 'value': 'pr-px' },
  '{"padding-right":"var(<custom-property>)"}': {
    'value': 'pr-(<custom-property>)',
  },
  '{"padding-right":"<value>"}': { 'value': 'pr-[<value>]' },
  '{"padding-bottom":"calc(var(--spacing) * <number>)"}': {
    'value': 'pb-<number>',
  },
  '{"padding-bottom":"1px"}': { 'value': 'pb-px' },
  '{"padding-bottom":"var(<custom-property>)"}': {
    'value': 'pb-(<custom-property>)',
  },
  '{"padding-bottom":"<value>"}': { 'value': 'pb-[<value>]' },
  '{"padding-left":"calc(var(--spacing) * <number>)"}': {
    'value': 'pl-<number>',
  },
  '{"padding-left":"1px"}': { 'value': 'pl-px' },
  '{"padding-left":"var(<custom-property>)"}': {
    'value': 'pl-(<custom-property>)',
  },
  '{"padding-left":"<value>"}': { 'value': 'pl-[<value>]' },
  '{"width":"calc(var(--spacing) * <number>)"}': { 'value': 'w-<number>' },
  '{"width":"calc(<fraction> * 100%)"}': { 'value': 'w-<fraction>' },
  '{"width":"var(--container-3xs)"}': { 'value': 'w-3xs' },
  '{"width":"var(--container-2xs)"}': { 'value': 'w-2xs' },
  '{"width":"var(--container-xs)"}': { 'value': 'w-xs' },
  '{"width":"var(--container-sm)"}': { 'value': 'w-sm' },
  '{"width":"var(--container-md)"}': { 'value': 'w-md' },
  '{"width":"var(--container-lg)"}': { 'value': 'w-lg' },
  '{"width":"var(--container-xl)"}': { 'value': 'w-xl' },
  '{"width":"var(--container-2xl)"}': { 'value': 'w-2xl' },
  '{"width":"var(--container-3xl)"}': { 'value': 'w-3xl' },
  '{"width":"var(--container-4xl)"}': { 'value': 'w-4xl' },
  '{"width":"var(--container-5xl)"}': { 'value': 'w-5xl' },
  '{"width":"var(--container-6xl)"}': { 'value': 'w-6xl' },
  '{"width":"var(--container-7xl)"}': { 'value': 'w-7xl' },
  '{"width":"auto"}': { 'value': 'w-auto' },
  '{"width":"1px"}': { 'value': 'w-px' },
  '{"width":"100%"}': { 'value': 'container' },
  '{"width":"100vw"}': { 'value': 'w-screen' },
  '{"width":"100dvw"}': { 'value': 'w-dvw' },
  '{"width":"100dvh"}': { 'value': 'w-dvh' },
  '{"width":"100lvw"}': { 'value': 'w-lvw' },
  '{"width":"100lvh"}': { 'value': 'w-lvh' },
  '{"width":"100svw"}': { 'value': 'w-svw' },
  '{"width":"100svh"}': { 'value': 'w-svh' },
  '{"width":"min-content"}': { 'value': 'w-min' },
  '{"width":"max-content"}': { 'value': 'w-max' },
  '{"width":"fit-content"}': { 'value': 'w-fit' },
  '{"width":"var(<custom-property>)"}': { 'value': 'w-(<custom-property>)' },
  '{"width":"<value>"}': { 'value': 'w-[<value>]' },
  '{"height":"calc(var(--spacing) * <number>)"}': {
    '{"width":"calc(var(--spacing) * <number>)"}': { 'value': 'size-<number>' },
    'value': 'h-<number>',
  },
  '{"height":"calc(<fraction> * 100%)"}': {
    '{"width":"calc(<fraction> * 100%)"}': { 'value': 'size-<fraction>' },
    'value': 'h-<fraction>',
  },
  '{"height":"auto"}': {
    '{"width":"auto"}': { 'value': 'size-auto' },
    'value': 'h-auto',
  },
  '{"height":"1px"}': {
    '{"width":"1px"}': { 'value': 'size-px' },
    'value': 'h-px',
  },
  '{"height":"100%"}': {
    '{"width":"100%"}': { 'value': 'size-full' },
    'value': 'h-full',
  },
  '{"height":"100dvw"}': {
    '{"width":"100dvw"}': { 'value': 'size-dvw' },
    'value': 'h-dvw',
  },
  '{"height":"100dvh"}': {
    '{"width":"100dvh"}': { 'value': 'size-dvh' },
    'value': 'h-dvh',
  },
  '{"height":"100lvw"}': {
    '{"width":"100lvw"}': { 'value': 'size-lvw' },
    'value': 'h-lvw',
  },
  '{"height":"100lvh"}': {
    '{"width":"100lvh"}': { 'value': 'size-lvh' },
    'value': 'h-lvh',
  },
  '{"height":"100svw"}': {
    '{"width":"100svw"}': { 'value': 'size-svw' },
    'value': 'h-svw',
  },
  '{"height":"100svh"}': {
    '{"width":"100svh"}': { 'value': 'size-svh' },
    'value': 'h-svh',
  },
  '{"height":"min-content"}': {
    '{"width":"min-content"}': { 'value': 'size-min' },
    'value': 'h-min',
  },
  '{"height":"max-content"}': {
    '{"width":"max-content"}': { 'value': 'size-max' },
    'value': 'h-max',
  },
  '{"height":"fit-content"}': {
    '{"width":"fit-content"}': { 'value': 'size-fit' },
    'value': 'h-fit',
  },
  '{"height":"var(<custom-property>)"}': {
    '{"width":"var(<custom-property>)"}': {
      'value': 'size-(<custom-property>)',
    },
    'value': 'h-(<custom-property>)',
  },
  '{"height":"<value>"}': {
    '{"width":"<value>"}': { 'value': 'size-[<value>]' },
    'value': 'h-[<value>]',
  },
  '{"place-items":"start"}': { 'value': 'place-items-start' },
  '{"place-items":"end"}': { 'value': 'place-items-end' },
  '{"place-items":"safe end"}': { 'value': 'place-items-end-safe' },
  '{"place-items":"center"}': { 'value': 'place-items-center' },
  '{"place-items":"safe center"}': { 'value': 'place-items-center-safe' },
  '{"place-items":"baseline"}': { 'value': 'place-items-baseline' },
  '{"place-items":"stretch"}': { 'value': 'place-items-stretch' },
  '{"mask-origin":"border-box"}': { 'value': 'mask-origin-border' },
  '{"mask-origin":"padding-box"}': { 'value': 'mask-origin-padding' },
  '{"mask-origin":"content-box"}': { 'value': 'mask-origin-content' },
  '{"mask-origin":"fill-box"}': { 'value': 'mask-origin-fill' },
  '{"mask-origin":"stroke-box"}': { 'value': 'mask-origin-stroke' },
  '{"mask-origin":"view-box"}': { 'value': 'mask-origin-view' },
  '{"max-width":"calc(var(--spacing) * <number>)"}': {
    'value': 'max-w-<number>',
  },
  '{"max-width":"calc(<fraction> * 100%)"}': { 'value': 'max-w-<fraction>' },
  '{"max-width":"var(--container-3xs)"}': { 'value': 'max-w-3xs' },
  '{"max-width":"var(--container-2xs)"}': { 'value': 'max-w-2xs' },
  '{"max-width":"var(--container-xs)"}': { 'value': 'max-w-xs' },
  '{"max-width":"var(--container-sm)"}': { 'value': 'max-w-sm' },
  '{"max-width":"var(--container-md)"}': { 'value': 'max-w-md' },
  '{"max-width":"var(--container-lg)"}': { 'value': 'max-w-lg' },
  '{"max-width":"var(--container-xl)"}': { 'value': 'max-w-xl' },
  '{"max-width":"var(--container-2xl)"}': { 'value': 'max-w-2xl' },
  '{"max-width":"var(--container-3xl)"}': { 'value': 'max-w-3xl' },
  '{"max-width":"var(--container-4xl)"}': { 'value': 'max-w-4xl' },
  '{"max-width":"var(--container-5xl)"}': { 'value': 'max-w-5xl' },
  '{"max-width":"var(--container-6xl)"}': { 'value': 'max-w-6xl' },
  '{"max-width":"var(--container-7xl)"}': { 'value': 'max-w-7xl' },
  '{"max-width":"none"}': { 'value': 'max-w-none' },
  '{"max-width":"1px"}': { 'value': 'max-w-px' },
  '{"max-width":"100%"}': { 'value': 'max-w-full' },
  '{"max-width":"100dvw"}': { 'value': 'max-w-dvw' },
  '{"max-width":"100dvh"}': { 'value': 'max-w-dvh' },
  '{"max-width":"100lvw"}': { 'value': 'max-w-lvw' },
  '{"max-width":"100lvh"}': { 'value': 'max-w-lvh' },
  '{"max-width":"100svw"}': { 'value': 'max-w-svw' },
  '{"max-width":"100svh"}': { 'value': 'max-w-svh' },
  '{"max-width":"100vw"}': { 'value': 'max-w-screen' },
  '{"max-width":"min-content"}': { 'value': 'max-w-min' },
  '{"max-width":"max-content"}': { 'value': 'max-w-max' },
  '{"max-width":"fit-content"}': { 'value': 'max-w-fit' },
  '{"max-width":"var(<custom-property>)"}': {
    'value': 'max-w-(<custom-property>)',
  },
  '{"max-width":"<value>"}': { 'value': 'max-w-[<value>]' },
  '{"min-height":"calc(var(--spacing) * <number>)"}': {
    'value': 'min-h-<number>',
  },
  '{"min-height":"calc(<fraction> * 100%)"}': { 'value': 'min-h-<fraction>' },
  '{"min-height":"1px"}': { 'value': 'min-h-px' },
  '{"min-height":"100%"}': { 'value': 'min-h-full' },
  '{"min-height":"100vh"}': { 'value': 'min-h-screen' },
  '{"min-height":"100dvh"}': { 'value': 'min-h-dvh' },
  '{"min-height":"100dvw"}': { 'value': 'min-h-dvw' },
  '{"min-height":"100lvh"}': { 'value': 'min-h-lvh' },
  '{"min-height":"100lvw"}': { 'value': 'min-h-lvw' },
  '{"min-height":"100svw"}': { 'value': 'min-h-svw' },
  '{"min-height":"100svh"}': { 'value': 'min-h-svh' },
  '{"min-height":"auto"}': { 'value': 'min-h-auto' },
  '{"min-height":"min-content"}': { 'value': 'min-h-min' },
  '{"min-height":"max-content"}': { 'value': 'min-h-max' },
  '{"min-height":"fit-content"}': { 'value': 'min-h-fit' },
  '{"min-height":"1lh"}': { 'value': 'min-h-lh' },
  '{"min-height":"var(<custom-property>)"}': {
    'value': 'min-h-(<custom-property>)',
  },
  '{"min-height":"<value>"}': { 'value': 'min-h-[<value>]' },
  '{"height":"100vh"}': { 'value': 'h-screen' },
  '{"height":"1lh"}': { 'value': 'h-lh' },
  '{"backdrop-filter":"none"}': { 'value': 'backdrop-filter-none' },
  '{"backdrop-filter":"var(<custom-property>)"}': {
    'value': 'backdrop-filter-(<custom-property>)',
  },
  '{"backdrop-filter":"<value>"}': { 'value': 'backdrop-filter-[<value>]' },
  '{"color-scheme":"normal"}': { 'value': 'scheme-normal' },
  '{"color-scheme":"dark"}': { 'value': 'scheme-dark' },
  '{"color-scheme":"light"}': { 'value': 'scheme-light' },
  '{"color-scheme":"light dark"}': { 'value': 'scheme-light-dark' },
  '{"color-scheme":"only dark"}': { 'value': 'scheme-only-dark' },
  '{"color-scheme":"only light"}': { 'value': 'scheme-only-light' },
  '{"animation":"var(--animate-spin)"}': { 'value': 'animate-spin' },
  '{"animation":"var(--animate-ping)"}': { 'value': 'animate-ping' },
  '{"animation":"var(--animate-pulse)"}': { 'value': 'animate-pulse' },
  '{"animation":"var(--animate-bounce)"}': { 'value': 'animate-bounce' },
  '{"animation":"none"}': { 'value': 'animate-none' },
  '{"animation":"var(<custom-property>)"}': {
    'value': 'animate-(<custom-property>)',
  },
  '{"animation":"<value>"}': { 'value': 'animate-[<value>]' },
  '{"background-blend-mode":"normal"}': { 'value': 'bg-blend-normal' },
  '{"background-blend-mode":"multiply"}': { 'value': 'bg-blend-multiply' },
  '{"background-blend-mode":"screen"}': { 'value': 'bg-blend-screen' },
  '{"background-blend-mode":"overlay"}': { 'value': 'bg-blend-overlay' },
  '{"background-blend-mode":"darken"}': { 'value': 'bg-blend-darken' },
  '{"background-blend-mode":"lighten"}': { 'value': 'bg-blend-lighten' },
  '{"background-blend-mode":"color-dodge"}': {
    'value': 'bg-blend-color-dodge',
  },
  '{"background-blend-mode":"color-burn"}': { 'value': 'bg-blend-color-burn' },
  '{"background-blend-mode":"hard-light"}': { 'value': 'bg-blend-hard-light' },
  '{"background-blend-mode":"soft-light"}': { 'value': 'bg-blend-soft-light' },
  '{"background-blend-mode":"difference"}': { 'value': 'bg-blend-difference' },
  '{"background-blend-mode":"exclusion"}': { 'value': 'bg-blend-exclusion' },
  '{"background-blend-mode":"hue"}': { 'value': 'bg-blend-hue' },
  '{"background-blend-mode":"saturation"}': { 'value': 'bg-blend-saturation' },
  '{"background-blend-mode":"color"}': { 'value': 'bg-blend-color' },
  '{"background-blend-mode":"luminosity"}': { 'value': 'bg-blend-luminosity' },
  '{"margin":"calc(var(--spacing) * <number>)"}': { 'value': 'm-<number>' },
  '{"margin":"calc(var(--spacing) * -<number>)"}': { 'value': '-m-<number>' },
  '{"margin":"auto"}': { 'value': 'm-auto' },
  '{"margin":"1px"}': { 'value': 'm-px' },
  '{"margin":"-1px"}': { 'value': '-m-px' },
  '{"margin":"var(<custom-property>)"}': { 'value': 'm-(<custom-property>)' },
  '{"margin":"<value>"}': { 'value': 'm-[<value>]' },
  '{"margin-inline":"calc(var(--spacing) * <number>)"}': {
    'value': 'mx-<number>',
  },
  '{"margin-inline":"calc(var(--spacing) * -<number>)"}': {
    'value': '-mx-<number>',
  },
  '{"margin-inline":"auto"}': { 'value': 'mx-auto' },
  '{"margin-inline":"1px"}': { 'value': 'mx-px' },
  '{"margin-inline":"-1px"}': { 'value': '-mx-px' },
  '{"margin-inline":"var(<custom-property>)"}': {
    'value': 'mx-(<custom-property>)',
  },
  '{"margin-inline":"<value>"}': { 'value': 'mx-[<value>]' },
  '{"margin-block":"calc(var(--spacing) * <number>)"}': {
    'value': 'my-<number>',
  },
  '{"margin-block":"calc(var(--spacing) * -<number>)"}': {
    'value': '-my-<number>',
  },
  '{"margin-block":"auto"}': { 'value': 'my-auto' },
  '{"margin-block":"1px"}': { 'value': 'my-px' },
  '{"margin-block":"-1px"}': { 'value': '-my-px' },
  '{"margin-block":"var(<custom-property>)"}': {
    'value': 'my-(<custom-property>)',
  },
  '{"margin-block":"<value>"}': { 'value': 'my-[<value>]' },
  '{"margin-inline-start":"calc(var(--spacing) * <number>)"}': {
    'value': 'ms-<number>',
  },
  '{"margin-inline-start":"calc(var(--spacing) * -<number>)"}': {
    'value': '-ms-<number>',
  },
  '{"margin-inline-start":"auto"}': { 'value': 'ms-auto' },
  '{"margin-inline-start":"1px"}': { 'value': 'ms-px' },
  '{"margin-inline-start":"-1px"}': { 'value': '-ms-px' },
  '{"margin-inline-start":"var(<custom-property>)"}': {
    'value': 'ms-(<custom-property>)',
  },
  '{"margin-inline-start":"<value>"}': { 'value': 'ms-[<value>]' },
  '{"margin-inline-end":"calc(var(--spacing) * <number>)"}': {
    'value': 'me-<number>',
  },
  '{"margin-inline-end":"calc(var(--spacing) * -<number>)"}': {
    'value': '-me-<number>',
  },
  '{"margin-inline-end":"auto"}': { 'value': 'me-auto' },
  '{"margin-inline-end":"1px"}': { 'value': 'me-px' },
  '{"margin-inline-end":"-1px"}': { 'value': '-me-px' },
  '{"margin-inline-end":"var(<custom-property>)"}': {
    'value': 'me-(<custom-property>)',
  },
  '{"margin-inline-end":"<value>"}': { 'value': 'me-[<value>]' },
  '{"margin-top":"calc(var(--spacing) * <number>)"}': {
    'value': 'mt-<number>',
  },
  '{"margin-top":"calc(var(--spacing) * -<number>)"}': {
    'value': '-mt-<number>',
  },
  '{"margin-top":"auto"}': { 'value': 'mt-auto' },
  '{"margin-top":"1px"}': { 'value': 'mt-px' },
  '{"margin-top":"-1px"}': { 'value': '-mt-px' },
  '{"margin-top":"var(<custom-property>)"}': {
    'value': 'mt-(<custom-property>)',
  },
  '{"margin-top":"<value>"}': { 'value': 'mt-[<value>]' },
  '{"margin-right":"calc(var(--spacing) * <number>)"}': {
    'value': 'mr-<number>',
  },
  '{"margin-right":"calc(var(--spacing) * -<number>)"}': {
    'value': '-mr-<number>',
  },
  '{"margin-right":"auto"}': { 'value': 'mr-auto' },
  '{"margin-right":"1px"}': { 'value': 'mr-px' },
  '{"margin-right":"-1px"}': { 'value': '-mr-px' },
  '{"margin-right":"var(<custom-property>)"}': {
    'value': 'mr-(<custom-property>)',
  },
  '{"margin-right":"<value>"}': { 'value': 'mr-[<value>]' },
  '{"margin-bottom":"calc(var(--spacing) * <number>)"}': {
    'value': 'mb-<number>',
  },
  '{"margin-bottom":"calc(var(--spacing) * -<number>)"}': {
    'value': '-mb-<number>',
  },
  '{"margin-bottom":"auto"}': { 'value': 'mb-auto' },
  '{"margin-bottom":"1px"}': { 'value': 'mb-px' },
  '{"margin-bottom":"-1px"}': { 'value': '-mb-px' },
  '{"margin-bottom":"var(<custom-property>)"}': {
    'value': 'mb-(<custom-property>)',
  },
  '{"margin-bottom":"<value>"}': { 'value': 'mb-[<value>]' },
  '{"margin-left":"calc(var(--spacing) * <number>)"}': {
    'value': 'ml-<number>',
  },
  '{"margin-left":"calc(var(--spacing) * -<number>)"}': {
    'value': '-ml-<number>',
  },
  '{"margin-left":"auto"}': { 'value': 'ml-auto' },
  '{"margin-left":"1px"}': { 'value': 'ml-px' },
  '{"margin-left":"-1px"}': { 'value': '-ml-px' },
  '{"margin-left":"var(<custom-property>)"}': {
    'value': 'ml-(<custom-property>)',
  },
  '{"margin-left":"<value>"}': { 'value': 'ml-[<value>]' },
  '{"filter":"contrast(<number>%)"}': { 'value': 'contrast-<number>' },
  '{"filter":"contrast(var(<custom-property>))"}': {
    'value': 'contrast-(<custom-property>)',
  },
  '{"filter":"contrast(<value>)"}': { 'value': 'contrast-[<value>]' },
  '{"filter":"grayscale(100%)"}': { 'value': 'grayscale' },
  '{"filter":"grayscale(<number>%)"}': { 'value': 'grayscale-<number>' },
  '{"filter":"grayscale(var(<custom-property>))"}': {
    'value': 'grayscale-(<custom-property>)',
  },
  '{"filter":"grayscale(<value>)"}': { 'value': 'grayscale-[<value>]' },
  '{"filter":"drop-shadow(var(--drop-shadow-xs))"}': {
    'value': 'drop-shadow-xs',
  },
  '{"filter":"drop-shadow(var(--drop-shadow-sm))"}': {
    'value': 'drop-shadow-sm',
  },
  '{"filter":"drop-shadow(var(--drop-shadow-md))"}': {
    'value': 'drop-shadow-md',
  },
  '{"filter":"drop-shadow(var(--drop-shadow-lg))"}': {
    'value': 'drop-shadow-lg',
  },
  '{"filter":"drop-shadow(var(--drop-shadow-2xl))"}': {
    'value': 'drop-shadow-2xl',
  },
  '{"filter":"drop-shadow(0 0 #0000)"}': { 'value': 'drop-shadow-none' },
  '{"filter":"drop-shadow(var(<custom-property>))"}': {
    'value': 'drop-shadow-(<custom-property>)',
  },
  '{"--tw-drop-shadow-color":"var(<custom-property>)"}': {
    'value': 'drop-shadow-(color:<custom-property>)',
  },
  '{"filter":"drop-shadow(<value>)"}': { 'value': 'drop-shadow-[<value>]' },
  '{"--tw-drop-shadow-color":"inherit"}': { 'value': 'drop-shadow-inherit' },
  '{"--tw-drop-shadow-color":"currentColor"}': {
    'value': 'drop-shadow-current',
  },
  '{"--tw-drop-shadow-color":"transparent"}': {
    'value': 'drop-shadow-transparent',
  },
  '{"--tw-drop-shadow-color":"var(--color-black)"}': {
    'value': 'drop-shadow-black',
  },
  '{"--tw-drop-shadow-color":"var(--color-white)"}': {
    'value': 'drop-shadow-white',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-50)"}': {
    'value': 'drop-shadow-red-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-100)"}': {
    'value': 'drop-shadow-red-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-200)"}': {
    'value': 'drop-shadow-red-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-300)"}': {
    'value': 'drop-shadow-red-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-400)"}': {
    'value': 'drop-shadow-red-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-500)"}': {
    'value': 'drop-shadow-red-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-600)"}': {
    'value': 'drop-shadow-red-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-700)"}': {
    'value': 'drop-shadow-red-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-800)"}': {
    'value': 'drop-shadow-red-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-900)"}': {
    'value': 'drop-shadow-red-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-red-950)"}': {
    'value': 'drop-shadow-red-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-50)"}': {
    'value': 'drop-shadow-orange-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-100)"}': {
    'value': 'drop-shadow-orange-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-200)"}': {
    'value': 'drop-shadow-orange-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-300)"}': {
    'value': 'drop-shadow-orange-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-400)"}': {
    'value': 'drop-shadow-orange-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-500)"}': {
    'value': 'drop-shadow-orange-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-600)"}': {
    'value': 'drop-shadow-orange-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-700)"}': {
    'value': 'drop-shadow-orange-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-800)"}': {
    'value': 'drop-shadow-orange-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-900)"}': {
    'value': 'drop-shadow-orange-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-orange-950)"}': {
    'value': 'drop-shadow-orange-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-50)"}': {
    'value': 'drop-shadow-amber-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-100)"}': {
    'value': 'drop-shadow-amber-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-200)"}': {
    'value': 'drop-shadow-amber-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-300)"}': {
    'value': 'drop-shadow-amber-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-400)"}': {
    'value': 'drop-shadow-amber-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-500)"}': {
    'value': 'drop-shadow-amber-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-600)"}': {
    'value': 'drop-shadow-amber-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-700)"}': {
    'value': 'drop-shadow-amber-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-800)"}': {
    'value': 'drop-shadow-amber-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-900)"}': {
    'value': 'drop-shadow-amber-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-amber-950)"}': {
    'value': 'drop-shadow-amber-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-50)"}': {
    'value': 'drop-shadow-yellow-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-100)"}': {
    'value': 'drop-shadow-yellow-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-200)"}': {
    'value': 'drop-shadow-yellow-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-300)"}': {
    'value': 'drop-shadow-yellow-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-400)"}': {
    'value': 'drop-shadow-yellow-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-500)"}': {
    'value': 'drop-shadow-yellow-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-600)"}': {
    'value': 'drop-shadow-yellow-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-700)"}': {
    'value': 'drop-shadow-yellow-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-800)"}': {
    'value': 'drop-shadow-yellow-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-900)"}': {
    'value': 'drop-shadow-yellow-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-yellow-950)"}': {
    'value': 'drop-shadow-yellow-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-50)"}': {
    'value': 'drop-shadow-lime-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-100)"}': {
    'value': 'drop-shadow-lime-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-200)"}': {
    'value': 'drop-shadow-lime-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-300)"}': {
    'value': 'drop-shadow-lime-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-400)"}': {
    'value': 'drop-shadow-lime-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-500)"}': {
    'value': 'drop-shadow-lime-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-600)"}': {
    'value': 'drop-shadow-lime-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-700)"}': {
    'value': 'drop-shadow-lime-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-800)"}': {
    'value': 'drop-shadow-lime-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-900)"}': {
    'value': 'drop-shadow-lime-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-lime-950)"}': {
    'value': 'drop-shadow-lime-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-50)"}': {
    'value': 'drop-shadow-green-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-100)"}': {
    'value': 'drop-shadow-green-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-200)"}': {
    'value': 'drop-shadow-green-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-300)"}': {
    'value': 'drop-shadow-green-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-400)"}': {
    'value': 'drop-shadow-green-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-500)"}': {
    'value': 'drop-shadow-green-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-600)"}': {
    'value': 'drop-shadow-green-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-700)"}': {
    'value': 'drop-shadow-green-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-800)"}': {
    'value': 'drop-shadow-green-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-900)"}': {
    'value': 'drop-shadow-green-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-green-950)"}': {
    'value': 'drop-shadow-green-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-50)"}': {
    'value': 'drop-shadow-emerald-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-100)"}': {
    'value': 'drop-shadow-emerald-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-200)"}': {
    'value': 'drop-shadow-emerald-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-300)"}': {
    'value': 'drop-shadow-emerald-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-400)"}': {
    'value': 'drop-shadow-emerald-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-500)"}': {
    'value': 'drop-shadow-emerald-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-600)"}': {
    'value': 'drop-shadow-emerald-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-700)"}': {
    'value': 'drop-shadow-emerald-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-800)"}': {
    'value': 'drop-shadow-emerald-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-900)"}': {
    'value': 'drop-shadow-emerald-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-emerald-950)"}': {
    'value': 'drop-shadow-emerald-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-50)"}': {
    'value': 'drop-shadow-teal-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-100)"}': {
    'value': 'drop-shadow-teal-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-200)"}': {
    'value': 'drop-shadow-teal-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-300)"}': {
    'value': 'drop-shadow-teal-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-400)"}': {
    'value': 'drop-shadow-teal-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-500)"}': {
    'value': 'drop-shadow-teal-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-600)"}': {
    'value': 'drop-shadow-teal-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-700)"}': {
    'value': 'drop-shadow-teal-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-800)"}': {
    'value': 'drop-shadow-teal-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-900)"}': {
    'value': 'drop-shadow-teal-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-teal-950)"}': {
    'value': 'drop-shadow-teal-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-50)"}': {
    'value': 'drop-shadow-cyan-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-100)"}': {
    'value': 'drop-shadow-cyan-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-200)"}': {
    'value': 'drop-shadow-cyan-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-300)"}': {
    'value': 'drop-shadow-cyan-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-400)"}': {
    'value': 'drop-shadow-cyan-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-500)"}': {
    'value': 'drop-shadow-cyan-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-600)"}': {
    'value': 'drop-shadow-cyan-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-700)"}': {
    'value': 'drop-shadow-cyan-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-800)"}': {
    'value': 'drop-shadow-cyan-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-900)"}': {
    'value': 'drop-shadow-cyan-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-cyan-950)"}': {
    'value': 'drop-shadow-cyan-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-50)"}': {
    'value': 'drop-shadow-sky-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-100)"}': {
    'value': 'drop-shadow-sky-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-200)"}': {
    'value': 'drop-shadow-sky-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-300)"}': {
    'value': 'drop-shadow-sky-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-400)"}': {
    'value': 'drop-shadow-sky-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-500)"}': {
    'value': 'drop-shadow-sky-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-600)"}': {
    'value': 'drop-shadow-sky-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-700)"}': {
    'value': 'drop-shadow-sky-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-800)"}': {
    'value': 'drop-shadow-sky-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-900)"}': {
    'value': 'drop-shadow-sky-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-sky-950)"}': {
    'value': 'drop-shadow-sky-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-50)"}': {
    'value': 'drop-shadow-blue-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-100)"}': {
    'value': 'drop-shadow-blue-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-200)"}': {
    'value': 'drop-shadow-blue-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-300)"}': {
    'value': 'drop-shadow-blue-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-400)"}': {
    'value': 'drop-shadow-blue-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-500)"}': {
    'value': 'drop-shadow-blue-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-600)"}': {
    'value': 'drop-shadow-blue-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-700)"}': {
    'value': 'drop-shadow-blue-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-800)"}': {
    'value': 'drop-shadow-blue-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-900)"}': {
    'value': 'drop-shadow-blue-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-blue-950)"}': {
    'value': 'drop-shadow-blue-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-50)"}': {
    'value': 'drop-shadow-indigo-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-100)"}': {
    'value': 'drop-shadow-indigo-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-200)"}': {
    'value': 'drop-shadow-indigo-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-300)"}': {
    'value': 'drop-shadow-indigo-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-400)"}': {
    'value': 'drop-shadow-indigo-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-500)"}': {
    'value': 'drop-shadow-indigo-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-600)"}': {
    'value': 'drop-shadow-indigo-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-700)"}': {
    'value': 'drop-shadow-indigo-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-800)"}': {
    'value': 'drop-shadow-indigo-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-900)"}': {
    'value': 'drop-shadow-indigo-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-indigo-950)"}': {
    'value': 'drop-shadow-indigo-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-50)"}': {
    'value': 'drop-shadow-violet-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-100)"}': {
    'value': 'drop-shadow-violet-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-200)"}': {
    'value': 'drop-shadow-violet-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-300)"}': {
    'value': 'drop-shadow-violet-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-400)"}': {
    'value': 'drop-shadow-violet-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-500)"}': {
    'value': 'drop-shadow-violet-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-600)"}': {
    'value': 'drop-shadow-violet-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-700)"}': {
    'value': 'drop-shadow-violet-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-800)"}': {
    'value': 'drop-shadow-violet-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-900)"}': {
    'value': 'drop-shadow-violet-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-violet-950)"}': {
    'value': 'drop-shadow-violet-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-50)"}': {
    'value': 'drop-shadow-purple-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-100)"}': {
    'value': 'drop-shadow-purple-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-200)"}': {
    'value': 'drop-shadow-purple-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-300)"}': {
    'value': 'drop-shadow-purple-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-400)"}': {
    'value': 'drop-shadow-purple-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-500)"}': {
    'value': 'drop-shadow-purple-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-600)"}': {
    'value': 'drop-shadow-purple-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-700)"}': {
    'value': 'drop-shadow-purple-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-800)"}': {
    'value': 'drop-shadow-purple-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-900)"}': {
    'value': 'drop-shadow-purple-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-purple-950)"}': {
    'value': 'drop-shadow-purple-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-50)"}': {
    'value': 'drop-shadow-fuchsia-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-100)"}': {
    'value': 'drop-shadow-fuchsia-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-200)"}': {
    'value': 'drop-shadow-fuchsia-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-300)"}': {
    'value': 'drop-shadow-fuchsia-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-400)"}': {
    'value': 'drop-shadow-fuchsia-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-500)"}': {
    'value': 'drop-shadow-fuchsia-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-600)"}': {
    'value': 'drop-shadow-fuchsia-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-700)"}': {
    'value': 'drop-shadow-fuchsia-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-800)"}': {
    'value': 'drop-shadow-fuchsia-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-900)"}': {
    'value': 'drop-shadow-fuchsia-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-fuchsia-950)"}': {
    'value': 'drop-shadow-fuchsia-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-50)"}': {
    'value': 'drop-shadow-pink-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-100)"}': {
    'value': 'drop-shadow-pink-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-200)"}': {
    'value': 'drop-shadow-pink-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-300)"}': {
    'value': 'drop-shadow-pink-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-400)"}': {
    'value': 'drop-shadow-pink-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-500)"}': {
    'value': 'drop-shadow-pink-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-600)"}': {
    'value': 'drop-shadow-pink-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-700)"}': {
    'value': 'drop-shadow-pink-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-800)"}': {
    'value': 'drop-shadow-pink-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-900)"}': {
    'value': 'drop-shadow-pink-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-pink-950)"}': {
    'value': 'drop-shadow-pink-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-50)"}': {
    'value': 'drop-shadow-rose-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-100)"}': {
    'value': 'drop-shadow-rose-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-200)"}': {
    'value': 'drop-shadow-rose-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-300)"}': {
    'value': 'drop-shadow-rose-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-400)"}': {
    'value': 'drop-shadow-rose-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-500)"}': {
    'value': 'drop-shadow-rose-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-600)"}': {
    'value': 'drop-shadow-rose-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-700)"}': {
    'value': 'drop-shadow-rose-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-800)"}': {
    'value': 'drop-shadow-rose-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-900)"}': {
    'value': 'drop-shadow-rose-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-rose-950)"}': {
    'value': 'drop-shadow-rose-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-50)"}': {
    'value': 'drop-shadow-slate-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-100)"}': {
    'value': 'drop-shadow-slate-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-200)"}': {
    'value': 'drop-shadow-slate-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-300)"}': {
    'value': 'drop-shadow-slate-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-400)"}': {
    'value': 'drop-shadow-slate-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-500)"}': {
    'value': 'drop-shadow-slate-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-600)"}': {
    'value': 'drop-shadow-slate-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-700)"}': {
    'value': 'drop-shadow-slate-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-800)"}': {
    'value': 'drop-shadow-slate-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-900)"}': {
    'value': 'drop-shadow-slate-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-slate-950)"}': {
    'value': 'drop-shadow-slate-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-50)"}': {
    'value': 'drop-shadow-gray-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-100)"}': {
    'value': 'drop-shadow-gray-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-200)"}': {
    'value': 'drop-shadow-gray-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-300)"}': {
    'value': 'drop-shadow-gray-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-400)"}': {
    'value': 'drop-shadow-gray-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-500)"}': {
    'value': 'drop-shadow-gray-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-600)"}': {
    'value': 'drop-shadow-gray-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-700)"}': {
    'value': 'drop-shadow-gray-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-800)"}': {
    'value': 'drop-shadow-gray-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-900)"}': {
    'value': 'drop-shadow-gray-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-gray-950)"}': {
    'value': 'drop-shadow-gray-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-50)"}': {
    'value': 'drop-shadow-zinc-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-100)"}': {
    'value': 'drop-shadow-zinc-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-200)"}': {
    'value': 'drop-shadow-zinc-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-300)"}': {
    'value': 'drop-shadow-zinc-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-400)"}': {
    'value': 'drop-shadow-zinc-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-500)"}': {
    'value': 'drop-shadow-zinc-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-600)"}': {
    'value': 'drop-shadow-zinc-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-700)"}': {
    'value': 'drop-shadow-zinc-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-800)"}': {
    'value': 'drop-shadow-zinc-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-900)"}': {
    'value': 'drop-shadow-zinc-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-zinc-950)"}': {
    'value': 'drop-shadow-zinc-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-50)"}': {
    'value': 'drop-shadow-neutral-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-100)"}': {
    'value': 'drop-shadow-neutral-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-200)"}': {
    'value': 'drop-shadow-neutral-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-300)"}': {
    'value': 'drop-shadow-neutral-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-400)"}': {
    'value': 'drop-shadow-neutral-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-500)"}': {
    'value': 'drop-shadow-neutral-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-600)"}': {
    'value': 'drop-shadow-neutral-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-700)"}': {
    'value': 'drop-shadow-neutral-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-800)"}': {
    'value': 'drop-shadow-neutral-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-900)"}': {
    'value': 'drop-shadow-neutral-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-neutral-950)"}': {
    'value': 'drop-shadow-neutral-950',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-50)"}': {
    'value': 'drop-shadow-stone-50',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-100)"}': {
    'value': 'drop-shadow-stone-100',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-200)"}': {
    'value': 'drop-shadow-stone-200',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-300)"}': {
    'value': 'drop-shadow-stone-300',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-400)"}': {
    'value': 'drop-shadow-stone-400',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-500)"}': {
    'value': 'drop-shadow-stone-500',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-600)"}': {
    'value': 'drop-shadow-stone-600',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-700)"}': {
    'value': 'drop-shadow-stone-700',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-800)"}': {
    'value': 'drop-shadow-stone-800',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-900)"}': {
    'value': 'drop-shadow-stone-900',
  },
  '{"--tw-drop-shadow-color":"var(--color-stone-950)"}': {
    'value': 'drop-shadow-stone-950',
  },
  '{"font-size":"var(--text-xs)"}': {
    '{"line-height":"var(--text-xs--line-height)"}': { 'value': 'text-xs' },
  },
  '{"font-size":"var(--text-sm)"}': {
    '{"line-height":"var(--text-sm--line-height)"}': { 'value': 'text-sm' },
  },
  '{"font-size":"var(--text-base)"}': {
    '{"line-height":"var(--text-base--line-height)"}': { 'value': 'text-base' },
  },
  '{"font-size":"var(--text-lg)"}': {
    '{"line-height":"var(--text-lg--line-height)"}': { 'value': 'text-lg' },
  },
  '{"font-size":"var(--text-xl)"}': {
    '{"line-height":"var(--text-xl--line-height)"}': { 'value': 'text-xl' },
  },
  '{"font-size":"var(--text-2xl)"}': {
    '{"line-height":"var(--text-2xl--line-height)"}': { 'value': 'text-2xl' },
  },
  '{"font-size":"var(--text-3xl)"}': {
    '{"line-height":"var(--text-3xl--line-height)"}': { 'value': 'text-3xl' },
  },
  '{"font-size":"var(--text-4xl)"}': {
    '{"line-height":"var(--text-4xl--line-height)"}': { 'value': 'text-4xl' },
  },
  '{"font-size":"var(--text-5xl)"}': {
    '{"line-height":"var(--text-5xl--line-height)"}': { 'value': 'text-5xl' },
  },
  '{"font-size":"var(--text-6xl)"}': {
    '{"line-height":"var(--text-6xl--line-height)"}': { 'value': 'text-6xl' },
  },
  '{"font-size":"var(--text-7xl)"}': {
    '{"line-height":"var(--text-7xl--line-height)"}': { 'value': 'text-7xl' },
  },
  '{"font-size":"var(--text-8xl)"}': {
    '{"line-height":"var(--text-8xl--line-height)"}': { 'value': 'text-8xl' },
  },
  '{"font-size":"var(--text-9xl)"}': {
    '{"line-height":"var(--text-9xl--line-height)"}': { 'value': 'text-9xl' },
  },
  '{"font-size":"var(<custom-property>)"}': {
    'value': 'text-(length:<custom-property>)',
  },
  '{"font-size":"<value>"}': { 'value': 'text-[<value>]' },
  '{"font-family":"var(--font-sans)"}': { 'value': 'font-sans' },
  '{"font-family":"var(--font-serif)"}': { 'value': 'font-serif' },
  '{"font-family":"var(--font-mono)"}': { 'value': 'font-mono' },
  '{"font-family":"var(<custom-property>)"}': {
    'value': 'font-(family-name:<custom-property>)',
  },
  '{"font-family":"<value>"}': { 'value': 'font-[<value>]' },
  '{"content":"<value>"}': { 'value': 'content-[<value>]' },
  '{"content":"var(<custom-property>)"}': {
    'value': 'content-(<custom-property>)',
  },
  '{"content":"none"}': { 'value': 'content-none' },
  '{"max-height":"calc(var(--spacing) * <number>)"}': {
    'value': 'max-h-<number>',
  },
  '{"max-height":"calc(<fraction> * 100%)"}': { 'value': 'max-h-<fraction>' },
  '{"max-height":"none"}': { 'value': 'max-h-none' },
  '{"max-height":"1px"}': { 'value': 'max-h-px' },
  '{"max-height":"100%"}': { 'value': 'max-h-full' },
  '{"max-height":"100vh"}': { 'value': 'max-h-screen' },
  '{"max-height":"100dvh"}': { 'value': 'max-h-dvh' },
  '{"max-height":"100dvw"}': { 'value': 'max-h-dvw' },
  '{"max-height":"100lvh"}': { 'value': 'max-h-lvh' },
  '{"max-height":"100lvw"}': { 'value': 'max-h-lvw' },
  '{"max-height":"100svh"}': { 'value': 'max-h-svh' },
  '{"max-height":"100svw"}': { 'value': 'max-h-svw' },
  '{"max-height":"min-content"}': { 'value': 'max-h-min' },
  '{"max-height":"max-content"}': { 'value': 'max-h-max' },
  '{"max-height":"fit-content"}': { 'value': 'max-h-fit' },
  '{"max-height":"1lh"}': { 'value': 'max-h-lh' },
  '{"max-height":"var(<custom-property>)"}': {
    'value': 'max-h-(<custom-property>)',
  },
  '{"max-height":"<value>"}': { 'value': 'max-h-[<value>]' },
  '{"-webkit-box-orient":"vertical"}': {
    '{"-webkit-line-clamp":"<number>"}': {
      '{"display":"-webkit-box"}': {
        '{"overflow":"hidden"}': { 'value': 'line-clamp-<number>' },
      },
    },
    '{"-webkit-line-clamp":"var(<custom-property>)"}': {
      '{"display":"-webkit-box"}': {
        '{"overflow":"hidden"}': { 'value': 'line-clamp-(<custom-property>)' },
      },
    },
    '{"-webkit-line-clamp":"<value>"}': {
      '{"display":"-webkit-box"}': {
        '{"overflow":"hidden"}': { 'value': 'line-clamp-[<value>]' },
      },
    },
  },
  '{"-webkit-box-orient":"horizontal"}': {
    '{"-webkit-line-clamp":"unset"}': {
      '{"display":"block"}': {
        '{"overflow":"visible"}': { 'value': 'line-clamp-none' },
      },
    },
  },
  '{"place-self":"auto"}': { 'value': 'place-self-auto' },
  '{"place-self":"start"}': { 'value': 'place-self-start' },
  '{"place-self":"end"}': { 'value': 'place-self-end' },
  '{"place-self":"safe end"}': { 'value': 'place-self-end-safe' },
  '{"place-self":"center"}': { 'value': 'place-self-center' },
  '{"place-self":"safe center"}': { 'value': 'place-self-center-safe' },
  '{"place-self":"stretch"}': { 'value': 'place-self-stretch' },
  '{"-moz-osx-font-smoothing":"grayscale"}': {
    '{"-webkit-font-smoothing":"antialiased"}': { 'value': 'antialiased' },
  },
  '{"-moz-osx-font-smoothing":"auto"}': {
    '{"-webkit-font-smoothing":"auto"}': { 'value': 'subpixel-antialiased' },
  },
  '{"font-stretch":"ultra-condensed"}': {
    'value': 'font-stretch-ultra-condensed',
  },
  '{"font-stretch":"extra-condensed"}': {
    'value': 'font-stretch-extra-condensed',
  },
  '{"font-stretch":"condensed"}': { 'value': 'font-stretch-condensed' },
  '{"font-stretch":"semi-condensed"}': {
    'value': 'font-stretch-semi-condensed',
  },
  '{"font-stretch":"normal"}': { 'value': 'font-stretch-normal' },
  '{"font-stretch":"semi-expanded"}': { 'value': 'font-stretch-semi-expanded' },
  '{"font-stretch":"expanded"}': { 'value': 'font-stretch-expanded' },
  '{"font-stretch":"extra-expanded"}': {
    'value': 'font-stretch-extra-expanded',
  },
  '{"font-stretch":"ultra-expanded"}': {
    'value': 'font-stretch-ultra-expanded',
  },
  '{"font-stretch":"<percentage>"}': { 'value': 'font-stretch-<percentage>' },
  '{"font-stretch":"var(<custom-property>)"}': {
    'value': 'font-stretch-(<custom-property>)',
  },
  '{"font-stretch":"<value>"}': { 'value': 'font-stretch-[<value>]' },
  '{"outline-width":"1px"}': { 'value': 'outline' },
  '{"outline-width":"<number>px"}': { 'value': 'outline-<number>' },
  '{"outline-width":"var(<custom-property>)"}': {
    'value': 'outline-(length:<custom-property>)',
  },
  '{"outline-width":"<value>"}': { 'value': 'outline-[<value>]' },
  '{"backdrop-filter":"invert(100%)"}': { 'value': 'backdrop-invert' },
  '{"backdrop-filter":"invert(<number>%)"}': {
    'value': 'backdrop-invert-<number>',
  },
  '{"font-style":"italic"}': { 'value': 'italic' },
  '{"backdrop-filter":"invert(var(<custom-property>))"}': {
    'value': 'backdrop-invert-(<custom-property>)',
  },
  '{"backdrop-filter":"invert(<value>)"}': {
    'value': 'backdrop-invert-[<value>]',
  },
  '{"font-style":"normal"}': { 'value': 'not-italic' },
  '{"backdrop-filter":"grayscale(100%)"}': { 'value': 'backdrop-grayscale' },
  '{"backdrop-filter":"grayscale(<number>%)"}': {
    'value': 'backdrop-grayscale-<number>',
  },
  '{"backdrop-filter":"grayscale(var(<custom-property>))"}': {
    'value': 'backdrop-grayscale-(<custom-property>)',
  },
  '{"backdrop-filter":"grayscale(<value>)"}': {
    'value': 'backdrop-grayscale-[<value>]',
  },
  '{"font-weight":"100"}': { 'value': 'font-thin' },
  '{"font-weight":"200"}': { 'value': 'font-extralight' },
  '{"font-weight":"300"}': { 'value': 'font-light' },
  '{"font-weight":"400"}': { 'value': 'font-normal' },
  '{"font-weight":"500"}': { 'value': 'font-medium' },
  '{"font-weight":"600"}': { 'value': 'font-semibold' },
  '{"font-weight":"700"}': { 'value': 'font-bold' },
  '{"font-weight":"800"}': { 'value': 'font-extrabold' },
  '{"font-weight":"900"}': { 'value': 'font-black' },
  '{"font-weight":"var(<custom-property>)"}': {
    'value': 'font-(<custom-property>)',
  },
  '{"font-weight":"<value>"}': { 'value': 'font-[<value>]' },
  '{"min-width":"calc(var(--spacing) * <number>)"}': {
    'value': 'min-w-<number>',
  },
  '{"min-width":"calc(<fraction> * 100%)"}': { 'value': 'min-w-<fraction>' },
  '{"min-width":"var(--container-3xs)"}': { 'value': 'min-w-3xs' },
  '{"min-width":"var(--container-2xs)"}': { 'value': 'min-w-2xs' },
  '{"min-width":"var(--container-xs)"}': { 'value': 'min-w-xs' },
  '{"min-width":"var(--container-sm)"}': { 'value': 'min-w-sm' },
  '{"min-width":"var(--container-md)"}': { 'value': 'min-w-md' },
  '{"min-width":"var(--container-lg)"}': { 'value': 'min-w-lg' },
  '{"min-width":"var(--container-xl)"}': { 'value': 'min-w-xl' },
  '{"min-width":"var(--container-2xl)"}': { 'value': 'min-w-2xl' },
  '{"min-width":"var(--container-3xl)"}': { 'value': 'min-w-3xl' },
  '{"min-width":"var(--container-4xl)"}': { 'value': 'min-w-4xl' },
  '{"min-width":"var(--container-5xl)"}': { 'value': 'min-w-5xl' },
  '{"min-width":"var(--container-6xl)"}': { 'value': 'min-w-6xl' },
  '{"min-width":"var(--container-7xl)"}': { 'value': 'min-w-7xl' },
  '{"min-width":"auto"}': { 'value': 'min-w-auto' },
  '{"min-width":"1px"}': { 'value': 'min-w-px' },
  '{"min-width":"100%"}': { 'value': 'min-w-full' },
  '{"min-width":"100vw"}': { 'value': 'min-w-screen' },
  '{"min-width":"100dvw"}': { 'value': 'min-w-dvw' },
  '{"min-width":"100dvh"}': { 'value': 'min-w-dvh' },
  '{"min-width":"100lvw"}': { 'value': 'min-w-lvw' },
  '{"min-width":"100lvh"}': { 'value': 'min-w-lvh' },
  '{"min-width":"100svw"}': { 'value': 'min-w-svw' },
  '{"min-width":"100svh"}': { 'value': 'min-w-svh' },
  '{"min-width":"min-content"}': { 'value': 'min-w-min' },
  '{"min-width":"max-content"}': { 'value': 'min-w-max' },
  '{"min-width":"fit-content"}': { 'value': 'min-w-fit' },
  '{"min-width":"var(<custom-property>)"}': {
    'value': 'min-w-(<custom-property>)',
  },
  '{"min-width":"<value>"}': { 'value': 'min-w-[<value>]' },
  '{"transition-timing-function":"linear"}': { 'value': 'ease-linear' },
  '{"transition-timing-function":"var(--ease-in)"}': { 'value': 'ease-in' },
  '{"transition-timing-function":"var(--ease-out)"}': { 'value': 'ease-out' },
  '{"transition-timing-function":"var(--ease-in-out)"}': {
    'value': 'ease-in-out',
  },
  '{"transition-timing-function":"initial"}': { 'value': 'ease-initial' },
  '{"transition-timing-function":"var(<custom-property>)"}': {
    'value': 'ease-(<custom-property>)',
  },
  '{"transition-timing-function":"<value>"}': { 'value': 'ease-[<value>]' },
  '{"backdrop-filter":"saturate(<number>%)"}': {
    'value': 'backdrop-saturate-<number>',
  },
  '{"backdrop-filter":"saturate(var(<custom-property>))"}': {
    'value': 'backdrop-saturate-(<custom-property>)',
  },
  '{"backdrop-filter":"saturate(<value>)"}': {
    'value': 'backdrop-saturate-[<value>]',
  },
  '{"perspective":"var(--perspective-dramatic)"}': {
    'value': 'perspective-dramatic',
  },
  '{"perspective":"var(--perspective-near)"}': { 'value': 'perspective-near' },
  '{"perspective":"var(--perspective-normal)"}': {
    'value': 'perspective-normal',
  },
  '{"perspective":"var(--perspective-midrange)"}': {
    'value': 'perspective-midrange',
  },
  '{"perspective":"var(--perspective-distant)"}': {
    'value': 'perspective-distant',
  },
  '{"perspective":"none"}': { 'value': 'perspective-none' },
  '{"perspective":"var(<custom-property>)"}': {
    'value': 'perspective-(<custom-property>)',
  },
  '{"perspective":"<value>"}': { 'value': 'perspective-[<value>]' },
  '{"backface-visibility":"hidden"}': { 'value': 'backface-hidden' },
  '{"backface-visibility":"visible"}': { 'value': 'backface-visible' },
  '{"resize":"none"}': { 'value': 'resize-none' },
  '{"resize":"both"}': { 'value': 'resize' },
  '{"resize":"vertical"}': { 'value': 'resize-y' },
  '{"resize":"horizontal"}': { 'value': 'resize-x' },
  '{"scroll-snap-type":"none"}': { 'value': 'snap-none' },
  '{"scroll-snap-type":"x var(--tw-scroll-snap-strictness)"}': {
    'value': 'snap-x',
  },
  '{"scroll-snap-type":"y var(--tw-scroll-snap-strictness)"}': {
    'value': 'snap-y',
  },
  '{"scroll-snap-type":"both var(--tw-scroll-snap-strictness)"}': {
    'value': 'snap-both',
  },
  '{"--tw-scroll-snap-strictness":"mandatory"}': { 'value': 'snap-mandatory' },
  '{"--tw-scroll-snap-strictness":"proximity"}': { 'value': 'snap-proximity' },
  '{"fill":"none"}': { 'value': 'fill-none' },
  '{"fill":"inherit"}': { 'value': 'fill-inherit' },
  '{"fill":"currentColor"}': { 'value': 'fill-current' },
  '{"fill":"transparent"}': { 'value': 'fill-transparent' },
  '{"fill":"var(--color-black)"}': { 'value': 'fill-black' },
  '{"fill":"var(--color-white)"}': { 'value': 'fill-white' },
  '{"fill":"var(--color-red-50)"}': { 'value': 'fill-red-50' },
  '{"fill":"var(--color-red-100)"}': { 'value': 'fill-red-100' },
  '{"fill":"var(--color-red-200)"}': { 'value': 'fill-red-200' },
  '{"fill":"var(--color-red-300)"}': { 'value': 'fill-red-300' },
  '{"fill":"var(--color-red-400)"}': { 'value': 'fill-red-400' },
  '{"fill":"var(--color-red-500)"}': { 'value': 'fill-red-500' },
  '{"fill":"var(--color-red-600)"}': { 'value': 'fill-red-600' },
  '{"fill":"var(--color-red-700)"}': { 'value': 'fill-red-700' },
  '{"fill":"var(--color-red-800)"}': { 'value': 'fill-red-800' },
  '{"fill":"var(--color-red-900)"}': { 'value': 'fill-red-900' },
  '{"fill":"var(--color-red-950)"}': { 'value': 'fill-red-950' },
  '{"fill":"var(--color-orange-50)"}': { 'value': 'fill-orange-50' },
  '{"fill":"var(--color-orange-100)"}': { 'value': 'fill-orange-100' },
  '{"fill":"var(--color-orange-200)"}': { 'value': 'fill-orange-200' },
  '{"fill":"var(--color-orange-300)"}': { 'value': 'fill-orange-300' },
  '{"fill":"var(--color-orange-400)"}': { 'value': 'fill-orange-400' },
  '{"fill":"var(--color-orange-500)"}': { 'value': 'fill-orange-500' },
  '{"fill":"var(--color-orange-600)"}': { 'value': 'fill-orange-600' },
  '{"fill":"var(--color-orange-700)"}': { 'value': 'fill-orange-700' },
  '{"fill":"var(--color-orange-800)"}': { 'value': 'fill-orange-800' },
  '{"fill":"var(--color-orange-900)"}': { 'value': 'fill-orange-900' },
  '{"fill":"var(--color-orange-950)"}': { 'value': 'fill-orange-950' },
  '{"fill":"var(--color-amber-50)"}': { 'value': 'fill-amber-50' },
  '{"fill":"var(--color-amber-100)"}': { 'value': 'fill-amber-100' },
  '{"fill":"var(--color-amber-200)"}': { 'value': 'fill-amber-200' },
  '{"fill":"var(--color-amber-300)"}': { 'value': 'fill-amber-300' },
  '{"fill":"var(--color-amber-400)"}': { 'value': 'fill-amber-400' },
  '{"fill":"var(--color-amber-500)"}': { 'value': 'fill-amber-500' },
  '{"fill":"var(--color-amber-600)"}': { 'value': 'fill-amber-600' },
  '{"fill":"var(--color-amber-700)"}': { 'value': 'fill-amber-700' },
  '{"fill":"var(--color-amber-800)"}': { 'value': 'fill-amber-800' },
  '{"fill":"var(--color-amber-900)"}': { 'value': 'fill-amber-900' },
  '{"fill":"var(--color-amber-950)"}': { 'value': 'fill-amber-950' },
  '{"fill":"var(--color-yellow-50)"}': { 'value': 'fill-yellow-50' },
  '{"fill":"var(--color-yellow-100)"}': { 'value': 'fill-yellow-100' },
  '{"fill":"var(--color-yellow-200)"}': { 'value': 'fill-yellow-200' },
  '{"fill":"var(--color-yellow-300)"}': { 'value': 'fill-yellow-300' },
  '{"fill":"var(--color-yellow-400)"}': { 'value': 'fill-yellow-400' },
  '{"fill":"var(--color-yellow-500)"}': { 'value': 'fill-yellow-500' },
  '{"fill":"var(--color-yellow-600)"}': { 'value': 'fill-yellow-600' },
  '{"fill":"var(--color-yellow-700)"}': { 'value': 'fill-yellow-700' },
  '{"fill":"var(--color-yellow-800)"}': { 'value': 'fill-yellow-800' },
  '{"fill":"var(--color-yellow-900)"}': { 'value': 'fill-yellow-900' },
  '{"fill":"var(--color-yellow-950)"}': { 'value': 'fill-yellow-950' },
  '{"fill":"var(--color-lime-50)"}': { 'value': 'fill-lime-50' },
  '{"fill":"var(--color-lime-100)"}': { 'value': 'fill-lime-100' },
  '{"fill":"var(--color-lime-200)"}': { 'value': 'fill-lime-200' },
  '{"fill":"var(--color-lime-300)"}': { 'value': 'fill-lime-300' },
  '{"fill":"var(--color-lime-400)"}': { 'value': 'fill-lime-400' },
  '{"fill":"var(--color-lime-500)"}': { 'value': 'fill-lime-500' },
  '{"fill":"var(--color-lime-600)"}': { 'value': 'fill-lime-600' },
  '{"fill":"var(--color-lime-700)"}': { 'value': 'fill-lime-700' },
  '{"fill":"var(--color-lime-800)"}': { 'value': 'fill-lime-800' },
  '{"fill":"var(--color-lime-900)"}': { 'value': 'fill-lime-900' },
  '{"fill":"var(--color-lime-950)"}': { 'value': 'fill-lime-950' },
  '{"fill":"var(--color-green-50)"}': { 'value': 'fill-green-50' },
  '{"fill":"var(--color-green-100)"}': { 'value': 'fill-green-100' },
  '{"fill":"var(--color-green-200)"}': { 'value': 'fill-green-200' },
  '{"fill":"var(--color-green-300)"}': { 'value': 'fill-green-300' },
  '{"fill":"var(--color-green-400)"}': { 'value': 'fill-green-400' },
  '{"fill":"var(--color-green-500)"}': { 'value': 'fill-green-500' },
  '{"fill":"var(--color-green-600)"}': { 'value': 'fill-green-600' },
  '{"fill":"var(--color-green-700)"}': { 'value': 'fill-green-700' },
  '{"fill":"var(--color-green-800)"}': { 'value': 'fill-green-800' },
  '{"fill":"var(--color-green-900)"}': { 'value': 'fill-green-900' },
  '{"fill":"var(--color-green-950)"}': { 'value': 'fill-green-950' },
  '{"fill":"var(--color-emerald-50)"}': { 'value': 'fill-emerald-50' },
  '{"fill":"var(--color-emerald-100)"}': { 'value': 'fill-emerald-100' },
  '{"fill":"var(--color-emerald-200)"}': { 'value': 'fill-emerald-200' },
  '{"fill":"var(--color-emerald-300)"}': { 'value': 'fill-emerald-300' },
  '{"fill":"var(--color-emerald-400)"}': { 'value': 'fill-emerald-400' },
  '{"fill":"var(--color-emerald-500)"}': { 'value': 'fill-emerald-500' },
  '{"fill":"var(--color-emerald-600)"}': { 'value': 'fill-emerald-600' },
  '{"fill":"var(--color-emerald-700)"}': { 'value': 'fill-emerald-700' },
  '{"fill":"var(--color-emerald-800)"}': { 'value': 'fill-emerald-800' },
  '{"fill":"var(--color-emerald-900)"}': { 'value': 'fill-emerald-900' },
  '{"fill":"var(--color-emerald-950)"}': { 'value': 'fill-emerald-950' },
  '{"fill":"var(--color-teal-50)"}': { 'value': 'fill-teal-50' },
  '{"fill":"var(--color-teal-100)"}': { 'value': 'fill-teal-100' },
  '{"fill":"var(--color-teal-200)"}': { 'value': 'fill-teal-200' },
  '{"fill":"var(--color-teal-300)"}': { 'value': 'fill-teal-300' },
  '{"fill":"var(--color-teal-400)"}': { 'value': 'fill-teal-400' },
  '{"fill":"var(--color-teal-500)"}': { 'value': 'fill-teal-500' },
  '{"fill":"var(--color-teal-600)"}': { 'value': 'fill-teal-600' },
  '{"fill":"var(--color-teal-700)"}': { 'value': 'fill-teal-700' },
  '{"fill":"var(--color-teal-800)"}': { 'value': 'fill-teal-800' },
  '{"fill":"var(--color-teal-900)"}': { 'value': 'fill-teal-900' },
  '{"fill":"var(--color-teal-950)"}': { 'value': 'fill-teal-950' },
  '{"fill":"var(--color-cyan-50)"}': { 'value': 'fill-cyan-50' },
  '{"fill":"var(--color-cyan-100)"}': { 'value': 'fill-cyan-100' },
  '{"fill":"var(--color-cyan-200)"}': { 'value': 'fill-cyan-200' },
  '{"fill":"var(--color-cyan-300)"}': { 'value': 'fill-cyan-300' },
  '{"fill":"var(--color-cyan-400)"}': { 'value': 'fill-cyan-400' },
  '{"fill":"var(--color-cyan-500)"}': { 'value': 'fill-cyan-500' },
  '{"fill":"var(--color-cyan-600)"}': { 'value': 'fill-cyan-600' },
  '{"fill":"var(--color-cyan-700)"}': { 'value': 'fill-cyan-700' },
  '{"fill":"var(--color-cyan-800)"}': { 'value': 'fill-cyan-800' },
  '{"fill":"var(--color-cyan-900)"}': { 'value': 'fill-cyan-900' },
  '{"fill":"var(--color-cyan-950)"}': { 'value': 'fill-cyan-950' },
  '{"fill":"var(--color-sky-50)"}': { 'value': 'fill-sky-50' },
  '{"fill":"var(--color-sky-100)"}': { 'value': 'fill-sky-100' },
  '{"fill":"var(--color-sky-200)"}': { 'value': 'fill-sky-200' },
  '{"fill":"var(--color-sky-300)"}': { 'value': 'fill-sky-300' },
  '{"fill":"var(--color-sky-400)"}': { 'value': 'fill-sky-400' },
  '{"fill":"var(--color-sky-500)"}': { 'value': 'fill-sky-500' },
  '{"fill":"var(--color-sky-600)"}': { 'value': 'fill-sky-600' },
  '{"fill":"var(--color-sky-700)"}': { 'value': 'fill-sky-700' },
  '{"fill":"var(--color-sky-800)"}': { 'value': 'fill-sky-800' },
  '{"fill":"var(--color-sky-900)"}': { 'value': 'fill-sky-900' },
  '{"fill":"var(--color-sky-950)"}': { 'value': 'fill-sky-950' },
  '{"fill":"var(--color-blue-50)"}': { 'value': 'fill-blue-50' },
  '{"fill":"var(--color-blue-100)"}': { 'value': 'fill-blue-100' },
  '{"fill":"var(--color-blue-200)"}': { 'value': 'fill-blue-200' },
  '{"fill":"var(--color-blue-300)"}': { 'value': 'fill-blue-300' },
  '{"fill":"var(--color-blue-400)"}': { 'value': 'fill-blue-400' },
  '{"fill":"var(--color-blue-500)"}': { 'value': 'fill-blue-500' },
  '{"fill":"var(--color-blue-600)"}': { 'value': 'fill-blue-600' },
  '{"fill":"var(--color-blue-700)"}': { 'value': 'fill-blue-700' },
  '{"fill":"var(--color-blue-800)"}': { 'value': 'fill-blue-800' },
  '{"fill":"var(--color-blue-900)"}': { 'value': 'fill-blue-900' },
  '{"fill":"var(--color-blue-950)"}': { 'value': 'fill-blue-950' },
  '{"fill":"var(--color-indigo-50)"}': { 'value': 'fill-indigo-50' },
  '{"fill":"var(--color-indigo-100)"}': { 'value': 'fill-indigo-100' },
  '{"fill":"var(--color-indigo-200)"}': { 'value': 'fill-indigo-200' },
  '{"fill":"var(--color-indigo-300)"}': { 'value': 'fill-indigo-300' },
  '{"fill":"var(--color-indigo-400)"}': { 'value': 'fill-indigo-400' },
  '{"fill":"var(--color-indigo-500)"}': { 'value': 'fill-indigo-500' },
  '{"fill":"var(--color-indigo-600)"}': { 'value': 'fill-indigo-600' },
  '{"fill":"var(--color-indigo-700)"}': { 'value': 'fill-indigo-700' },
  '{"fill":"var(--color-indigo-800)"}': { 'value': 'fill-indigo-800' },
  '{"fill":"var(--color-indigo-900)"}': { 'value': 'fill-indigo-900' },
  '{"fill":"var(--color-indigo-950)"}': { 'value': 'fill-indigo-950' },
  '{"fill":"var(--color-violet-50)"}': { 'value': 'fill-violet-50' },
  '{"fill":"var(--color-violet-100)"}': { 'value': 'fill-violet-100' },
  '{"fill":"var(--color-violet-200)"}': { 'value': 'fill-violet-200' },
  '{"fill":"var(--color-violet-300)"}': { 'value': 'fill-violet-300' },
  '{"fill":"var(--color-violet-400)"}': { 'value': 'fill-violet-400' },
  '{"fill":"var(--color-violet-500)"}': { 'value': 'fill-violet-500' },
  '{"fill":"var(--color-violet-600)"}': { 'value': 'fill-violet-600' },
  '{"fill":"var(--color-violet-700)"}': { 'value': 'fill-violet-700' },
  '{"fill":"var(--color-violet-800)"}': { 'value': 'fill-violet-800' },
  '{"fill":"var(--color-violet-900)"}': { 'value': 'fill-violet-900' },
  '{"fill":"var(--color-violet-950)"}': { 'value': 'fill-violet-950' },
  '{"fill":"var(--color-purple-50)"}': { 'value': 'fill-purple-50' },
  '{"fill":"var(--color-purple-100)"}': { 'value': 'fill-purple-100' },
  '{"fill":"var(--color-purple-200)"}': { 'value': 'fill-purple-200' },
  '{"fill":"var(--color-purple-300)"}': { 'value': 'fill-purple-300' },
  '{"fill":"var(--color-purple-400)"}': { 'value': 'fill-purple-400' },
  '{"fill":"var(--color-purple-500)"}': { 'value': 'fill-purple-500' },
  '{"fill":"var(--color-purple-600)"}': { 'value': 'fill-purple-600' },
  '{"fill":"var(--color-purple-700)"}': { 'value': 'fill-purple-700' },
  '{"fill":"var(--color-purple-800)"}': { 'value': 'fill-purple-800' },
  '{"fill":"var(--color-purple-900)"}': { 'value': 'fill-purple-900' },
  '{"fill":"var(--color-purple-950)"}': { 'value': 'fill-purple-950' },
  '{"fill":"var(--color-fuchsia-50)"}': { 'value': 'fill-fuchsia-50' },
  '{"fill":"var(--color-fuchsia-100)"}': { 'value': 'fill-fuchsia-100' },
  '{"fill":"var(--color-fuchsia-200)"}': { 'value': 'fill-fuchsia-200' },
  '{"fill":"var(--color-fuchsia-300)"}': { 'value': 'fill-fuchsia-300' },
  '{"fill":"var(--color-fuchsia-400)"}': { 'value': 'fill-fuchsia-400' },
  '{"fill":"var(--color-fuchsia-500)"}': { 'value': 'fill-fuchsia-500' },
  '{"fill":"var(--color-fuchsia-600)"}': { 'value': 'fill-fuchsia-600' },
  '{"fill":"var(--color-fuchsia-700)"}': { 'value': 'fill-fuchsia-700' },
  '{"fill":"var(--color-fuchsia-800)"}': { 'value': 'fill-fuchsia-800' },
  '{"fill":"var(--color-fuchsia-900)"}': { 'value': 'fill-fuchsia-900' },
  '{"fill":"var(--color-fuchsia-950)"}': { 'value': 'fill-fuchsia-950' },
  '{"fill":"var(--color-pink-50)"}': { 'value': 'fill-pink-50' },
  '{"fill":"var(--color-pink-100)"}': { 'value': 'fill-pink-100' },
  '{"fill":"var(--color-pink-200)"}': { 'value': 'fill-pink-200' },
  '{"fill":"var(--color-pink-300)"}': { 'value': 'fill-pink-300' },
  '{"fill":"var(--color-pink-400)"}': { 'value': 'fill-pink-400' },
  '{"fill":"var(--color-pink-500)"}': { 'value': 'fill-pink-500' },
  '{"fill":"var(--color-pink-600)"}': { 'value': 'fill-pink-600' },
  '{"fill":"var(--color-pink-700)"}': { 'value': 'fill-pink-700' },
  '{"fill":"var(--color-pink-800)"}': { 'value': 'fill-pink-800' },
  '{"fill":"var(--color-pink-900)"}': { 'value': 'fill-pink-900' },
  '{"fill":"var(--color-pink-950)"}': { 'value': 'fill-pink-950' },
  '{"fill":"var(--color-rose-50)"}': { 'value': 'fill-rose-50' },
  '{"fill":"var(--color-rose-100)"}': { 'value': 'fill-rose-100' },
  '{"fill":"var(--color-rose-200)"}': { 'value': 'fill-rose-200' },
  '{"fill":"var(--color-rose-300)"}': { 'value': 'fill-rose-300' },
  '{"fill":"var(--color-rose-400)"}': { 'value': 'fill-rose-400' },
  '{"fill":"var(--color-rose-500)"}': { 'value': 'fill-rose-500' },
  '{"fill":"var(--color-rose-600)"}': { 'value': 'fill-rose-600' },
  '{"fill":"var(--color-rose-700)"}': { 'value': 'fill-rose-700' },
  '{"fill":"var(--color-rose-800)"}': { 'value': 'fill-rose-800' },
  '{"fill":"var(--color-rose-900)"}': { 'value': 'fill-rose-900' },
  '{"fill":"var(--color-rose-950)"}': { 'value': 'fill-rose-950' },
  '{"fill":"var(--color-slate-50)"}': { 'value': 'fill-slate-50' },
  '{"fill":"var(--color-slate-100)"}': { 'value': 'fill-slate-100' },
  '{"fill":"var(--color-slate-200)"}': { 'value': 'fill-slate-200' },
  '{"fill":"var(--color-slate-300)"}': { 'value': 'fill-slate-300' },
  '{"fill":"var(--color-slate-400)"}': { 'value': 'fill-slate-400' },
  '{"fill":"var(--color-slate-500)"}': { 'value': 'fill-slate-500' },
  '{"fill":"var(--color-slate-600)"}': { 'value': 'fill-slate-600' },
  '{"fill":"var(--color-slate-700)"}': { 'value': 'fill-slate-700' },
  '{"fill":"var(--color-slate-800)"}': { 'value': 'fill-slate-800' },
  '{"fill":"var(--color-slate-900)"}': { 'value': 'fill-slate-900' },
  '{"fill":"var(--color-slate-950)"}': { 'value': 'fill-slate-950' },
  '{"fill":"var(--color-gray-50)"}': { 'value': 'fill-gray-50' },
  '{"fill":"var(--color-gray-100)"}': { 'value': 'fill-gray-100' },
  '{"fill":"var(--color-gray-200)"}': { 'value': 'fill-gray-200' },
  '{"fill":"var(--color-gray-300)"}': { 'value': 'fill-gray-300' },
  '{"fill":"var(--color-gray-400)"}': { 'value': 'fill-gray-400' },
  '{"fill":"var(--color-gray-500)"}': { 'value': 'fill-gray-500' },
  '{"fill":"var(--color-gray-600)"}': { 'value': 'fill-gray-600' },
  '{"fill":"var(--color-gray-700)"}': { 'value': 'fill-gray-700' },
  '{"fill":"var(--color-gray-800)"}': { 'value': 'fill-gray-800' },
  '{"fill":"var(--color-gray-900)"}': { 'value': 'fill-gray-900' },
  '{"fill":"var(--color-gray-950)"}': { 'value': 'fill-gray-950' },
  '{"fill":"var(--color-zinc-50)"}': { 'value': 'fill-zinc-50' },
  '{"fill":"var(--color-zinc-100)"}': { 'value': 'fill-zinc-100' },
  '{"fill":"var(--color-zinc-200)"}': { 'value': 'fill-zinc-200' },
  '{"fill":"var(--color-zinc-300)"}': { 'value': 'fill-zinc-300' },
  '{"fill":"var(--color-zinc-400)"}': { 'value': 'fill-zinc-400' },
  '{"fill":"var(--color-zinc-500)"}': { 'value': 'fill-zinc-500' },
  '{"fill":"var(--color-zinc-600)"}': { 'value': 'fill-zinc-600' },
  '{"fill":"var(--color-zinc-700)"}': { 'value': 'fill-zinc-700' },
  '{"fill":"var(--color-zinc-800)"}': { 'value': 'fill-zinc-800' },
  '{"fill":"var(--color-zinc-900)"}': { 'value': 'fill-zinc-900' },
  '{"fill":"var(--color-zinc-950)"}': { 'value': 'fill-zinc-950' },
  '{"fill":"var(--color-neutral-50)"}': { 'value': 'fill-neutral-50' },
  '{"fill":"var(--color-neutral-100)"}': { 'value': 'fill-neutral-100' },
  '{"fill":"var(--color-neutral-200)"}': { 'value': 'fill-neutral-200' },
  '{"fill":"var(--color-neutral-300)"}': { 'value': 'fill-neutral-300' },
  '{"fill":"var(--color-neutral-400)"}': { 'value': 'fill-neutral-400' },
  '{"fill":"var(--color-neutral-500)"}': { 'value': 'fill-neutral-500' },
  '{"fill":"var(--color-neutral-600)"}': { 'value': 'fill-neutral-600' },
  '{"fill":"var(--color-neutral-700)"}': { 'value': 'fill-neutral-700' },
  '{"fill":"var(--color-neutral-800)"}': { 'value': 'fill-neutral-800' },
  '{"fill":"var(--color-neutral-900)"}': { 'value': 'fill-neutral-900' },
  '{"fill":"var(--color-neutral-950)"}': { 'value': 'fill-neutral-950' },
  '{"fill":"var(--color-stone-50)"}': { 'value': 'fill-stone-50' },
  '{"fill":"var(--color-stone-100)"}': { 'value': 'fill-stone-100' },
  '{"fill":"var(--color-stone-200)"}': { 'value': 'fill-stone-200' },
  '{"fill":"var(--color-stone-300)"}': { 'value': 'fill-stone-300' },
  '{"fill":"var(--color-stone-400)"}': { 'value': 'fill-stone-400' },
  '{"fill":"var(--color-stone-500)"}': { 'value': 'fill-stone-500' },
  '{"fill":"var(--color-stone-600)"}': { 'value': 'fill-stone-600' },
  '{"fill":"var(--color-stone-700)"}': { 'value': 'fill-stone-700' },
  '{"fill":"var(--color-stone-800)"}': { 'value': 'fill-stone-800' },
  '{"fill":"var(--color-stone-900)"}': { 'value': 'fill-stone-900' },
  '{"fill":"var(--color-stone-950)"}': { 'value': 'fill-stone-950' },
  '{"fill":"var(<custom-property>)"}': { 'value': 'fill-(<custom-property>)' },
  '{"fill":"<color>"}': { 'value': 'fill-[<color>]' },
  '{"letter-spacing":"var(--tracking-tighter)"}': {
    'value': 'tracking-tighter',
  },
  '{"letter-spacing":"var(--tracking-tight)"}': { 'value': 'tracking-tight' },
  '{"letter-spacing":"var(--tracking-normal)"}': { 'value': 'tracking-normal' },
  '{"letter-spacing":"var(--tracking-wide)"}': { 'value': 'tracking-wide' },
  '{"letter-spacing":"var(--tracking-wider)"}': { 'value': 'tracking-wider' },
  '{"letter-spacing":"var(--tracking-widest)"}': { 'value': 'tracking-widest' },
  '{"letter-spacing":"var(<custom-property>)"}': {
    'value': 'tracking-(<custom-property>)',
  },
  '{"letter-spacing":"<value>"}': { 'value': 'tracking-[<value>]' },
  '{"list-style-image":"<value>"}': { 'value': 'list-image-[<value>]' },
  '{"list-style-image":"var(<custom-property>)"}': {
    'value': 'list-image-(<custom-property>)',
  },
  '{"list-style-image":"none"}': { 'value': 'list-image-none' },
  '{"pointer-events":"auto"}': { 'value': 'pointer-events-auto' },
  '{"pointer-events":"none"}': { 'value': 'pointer-events-none' },
  '{"font-variant-numeric":"normal"}': { 'value': 'normal-nums' },
  '{"font-variant-numeric":"ordinal"}': { 'value': 'ordinal' },
  '{"font-variant-numeric":"slashed-zero"}': { 'value': 'slashed-zero' },
  '{"font-variant-numeric":"lining-nums"}': { 'value': 'lining-nums' },
  '{"font-variant-numeric":"oldstyle-nums"}': { 'value': 'oldstyle-nums' },
  '{"font-variant-numeric":"proportional-nums"}': {
    'value': 'proportional-nums',
  },
  '{"font-variant-numeric":"tabular-nums"}': { 'value': 'tabular-nums' },
  '{"font-variant-numeric":"diagonal-fractions"}': {
    'value': 'diagonal-fractions',
  },
  '{"font-variant-numeric":"stacked-fractions"}': {
    'value': 'stacked-fractions',
  },
  '{"font-size":"<size>"}': {
    '{"line-height":"calc(var(--spacing) * <number>)"}': {
      'value': 'text-<size>/<number>',
    },
    '{"line-height":"var(<custom-property>)"}': {
      'value': 'text-<size>/(<custom-property>)',
    },
    '{"line-height":"<value>"}': { 'value': 'text-<size>/[<value>]' },
  },
  '{"line-height":"1"}': { 'value': 'leading-none' },
  '{"line-height":"calc(var(--spacing) * <number>)"}': {
    'value': 'leading-<number>',
  },
  '{"line-height":"var(<custom-property>)"}': {
    'value': 'leading-(<custom-property>)',
  },
  '{"line-height":"<value>"}': { 'value': 'leading-[<value>]' },
  '{"background-color":"inherit"}': { 'value': 'bg-inherit' },
  '{"background-color":"currentColor"}': { 'value': 'bg-current' },
  '{"background-color":"transparent"}': { 'value': 'bg-transparent' },
  '{"background-color":"var(--color-black)"}': { 'value': 'bg-black' },
  '{"background-color":"var(--color-white)"}': { 'value': 'bg-white' },
  '{"background-color":"var(--color-red-50)"}': { 'value': 'bg-red-50' },
  '{"background-color":"var(--color-red-100)"}': { 'value': 'bg-red-100' },
  '{"background-color":"var(--color-red-200)"}': { 'value': 'bg-red-200' },
  '{"background-color":"var(--color-red-300)"}': { 'value': 'bg-red-300' },
  '{"background-color":"var(--color-red-400)"}': { 'value': 'bg-red-400' },
  '{"background-color":"var(--color-red-500)"}': { 'value': 'bg-red-500' },
  '{"background-color":"var(--color-red-600)"}': { 'value': 'bg-red-600' },
  '{"background-color":"var(--color-red-700)"}': { 'value': 'bg-red-700' },
  '{"background-color":"var(--color-red-800)"}': { 'value': 'bg-red-800' },
  '{"background-color":"var(--color-red-900)"}': { 'value': 'bg-red-900' },
  '{"background-color":"var(--color-red-950)"}': { 'value': 'bg-red-950' },
  '{"background-color":"var(--color-orange-50)"}': { 'value': 'bg-orange-50' },
  '{"background-color":"var(--color-orange-100)"}': {
    'value': 'bg-orange-100',
  },
  '{"background-color":"var(--color-orange-200)"}': {
    'value': 'bg-orange-200',
  },
  '{"background-color":"var(--color-orange-300)"}': {
    'value': 'bg-orange-300',
  },
  '{"background-color":"var(--color-orange-400)"}': {
    'value': 'bg-orange-400',
  },
  '{"background-color":"var(--color-orange-500)"}': {
    'value': 'bg-orange-500',
  },
  '{"background-color":"var(--color-orange-600)"}': {
    'value': 'bg-orange-600',
  },
  '{"background-color":"var(--color-orange-700)"}': {
    'value': 'bg-orange-700',
  },
  '{"background-color":"var(--color-orange-800)"}': {
    'value': 'bg-orange-800',
  },
  '{"background-color":"var(--color-orange-900)"}': {
    'value': 'bg-orange-900',
  },
  '{"background-color":"var(--color-orange-950)"}': {
    'value': 'bg-orange-950',
  },
  '{"background-color":"var(--color-amber-50)"}': { 'value': 'bg-amber-50' },
  '{"background-color":"var(--color-amber-100)"}': { 'value': 'bg-amber-100' },
  '{"background-color":"var(--color-amber-200)"}': { 'value': 'bg-amber-200' },
  '{"background-color":"var(--color-amber-300)"}': { 'value': 'bg-amber-300' },
  '{"background-color":"var(--color-amber-400)"}': { 'value': 'bg-amber-400' },
  '{"background-color":"var(--color-amber-500)"}': { 'value': 'bg-amber-500' },
  '{"background-color":"var(--color-amber-600)"}': { 'value': 'bg-amber-600' },
  '{"background-color":"var(--color-amber-700)"}': { 'value': 'bg-amber-700' },
  '{"background-color":"var(--color-amber-800)"}': { 'value': 'bg-amber-800' },
  '{"background-color":"var(--color-amber-900)"}': { 'value': 'bg-amber-900' },
  '{"background-color":"var(--color-amber-950)"}': { 'value': 'bg-amber-950' },
  '{"background-color":"var(--color-yellow-50)"}': { 'value': 'bg-yellow-50' },
  '{"background-color":"var(--color-yellow-100)"}': {
    'value': 'bg-yellow-100',
  },
  '{"background-color":"var(--color-yellow-200)"}': {
    'value': 'bg-yellow-200',
  },
  '{"background-color":"var(--color-yellow-300)"}': {
    'value': 'bg-yellow-300',
  },
  '{"background-color":"var(--color-yellow-400)"}': {
    'value': 'bg-yellow-400',
  },
  '{"background-color":"var(--color-yellow-500)"}': {
    'value': 'bg-yellow-500',
  },
  '{"background-color":"var(--color-yellow-600)"}': {
    'value': 'bg-yellow-600',
  },
  '{"background-color":"var(--color-yellow-700)"}': {
    'value': 'bg-yellow-700',
  },
  '{"background-color":"var(--color-yellow-800)"}': {
    'value': 'bg-yellow-800',
  },
  '{"background-color":"var(--color-yellow-900)"}': {
    'value': 'bg-yellow-900',
  },
  '{"background-color":"var(--color-yellow-950)"}': {
    'value': 'bg-yellow-950',
  },
  '{"background-color":"var(--color-lime-50)"}': { 'value': 'bg-lime-50' },
  '{"background-color":"var(--color-lime-100)"}': { 'value': 'bg-lime-100' },
  '{"background-color":"var(--color-lime-200)"}': { 'value': 'bg-lime-200' },
  '{"background-color":"var(--color-lime-300)"}': { 'value': 'bg-lime-300' },
  '{"background-color":"var(--color-lime-400)"}': { 'value': 'bg-lime-400' },
  '{"background-color":"var(--color-lime-500)"}': { 'value': 'bg-lime-500' },
  '{"background-color":"var(--color-lime-600)"}': { 'value': 'bg-lime-600' },
  '{"background-color":"var(--color-lime-700)"}': { 'value': 'bg-lime-700' },
  '{"background-color":"var(--color-lime-800)"}': { 'value': 'bg-lime-800' },
  '{"background-color":"var(--color-lime-900)"}': { 'value': 'bg-lime-900' },
  '{"background-color":"var(--color-lime-950)"}': { 'value': 'bg-lime-950' },
  '{"background-color":"var(--color-green-50)"}': { 'value': 'bg-green-50' },
  '{"background-color":"var(--color-green-100)"}': { 'value': 'bg-green-100' },
  '{"background-color":"var(--color-green-200)"}': { 'value': 'bg-green-200' },
  '{"background-color":"var(--color-green-300)"}': { 'value': 'bg-green-300' },
  '{"background-color":"var(--color-green-400)"}': { 'value': 'bg-green-400' },
  '{"background-color":"var(--color-green-500)"}': { 'value': 'bg-green-500' },
  '{"background-color":"var(--color-green-600)"}': { 'value': 'bg-green-600' },
  '{"background-color":"var(--color-green-700)"}': { 'value': 'bg-green-700' },
  '{"background-color":"var(--color-green-800)"}': { 'value': 'bg-green-800' },
  '{"background-color":"var(--color-green-900)"}': { 'value': 'bg-green-900' },
  '{"background-color":"var(--color-green-950)"}': { 'value': 'bg-green-950' },
  '{"background-color":"var(--color-emerald-50)"}': {
    'value': 'bg-emerald-50',
  },
  '{"background-color":"var(--color-emerald-100)"}': {
    'value': 'bg-emerald-100',
  },
  '{"background-color":"var(--color-emerald-200)"}': {
    'value': 'bg-emerald-200',
  },
  '{"background-color":"var(--color-emerald-300)"}': {
    'value': 'bg-emerald-300',
  },
  '{"background-color":"var(--color-emerald-400)"}': {
    'value': 'bg-emerald-400',
  },
  '{"background-color":"var(--color-emerald-500)"}': {
    'value': 'bg-emerald-500',
  },
  '{"background-color":"var(--color-emerald-600)"}': {
    'value': 'bg-emerald-600',
  },
  '{"background-color":"var(--color-emerald-700)"}': {
    'value': 'bg-emerald-700',
  },
  '{"background-color":"var(--color-emerald-800)"}': {
    'value': 'bg-emerald-800',
  },
  '{"background-color":"var(--color-emerald-900)"}': {
    'value': 'bg-emerald-900',
  },
  '{"background-color":"var(--color-emerald-950)"}': {
    'value': 'bg-emerald-950',
  },
  '{"background-color":"var(--color-teal-50)"}': { 'value': 'bg-teal-50' },
  '{"background-color":"var(--color-teal-100)"}': { 'value': 'bg-teal-100' },
  '{"background-color":"var(--color-teal-200)"}': { 'value': 'bg-teal-200' },
  '{"background-color":"var(--color-teal-300)"}': { 'value': 'bg-teal-300' },
  '{"background-color":"var(--color-teal-400)"}': { 'value': 'bg-teal-400' },
  '{"background-color":"var(--color-teal-500)"}': { 'value': 'bg-teal-500' },
  '{"background-color":"var(--color-teal-600)"}': { 'value': 'bg-teal-600' },
  '{"background-color":"var(--color-teal-700)"}': { 'value': 'bg-teal-700' },
  '{"background-color":"var(--color-teal-800)"}': { 'value': 'bg-teal-800' },
  '{"background-color":"var(--color-teal-900)"}': { 'value': 'bg-teal-900' },
  '{"background-color":"var(--color-teal-950)"}': { 'value': 'bg-teal-950' },
  '{"background-color":"var(--color-cyan-50)"}': { 'value': 'bg-cyan-50' },
  '{"background-color":"var(--color-cyan-100)"}': { 'value': 'bg-cyan-100' },
  '{"background-color":"var(--color-cyan-200)"}': { 'value': 'bg-cyan-200' },
  '{"background-color":"var(--color-cyan-300)"}': { 'value': 'bg-cyan-300' },
  '{"background-color":"var(--color-cyan-400)"}': { 'value': 'bg-cyan-400' },
  '{"background-color":"var(--color-cyan-500)"}': { 'value': 'bg-cyan-500' },
  '{"background-color":"var(--color-cyan-600)"}': { 'value': 'bg-cyan-600' },
  '{"background-color":"var(--color-cyan-700)"}': { 'value': 'bg-cyan-700' },
  '{"background-color":"var(--color-cyan-800)"}': { 'value': 'bg-cyan-800' },
  '{"background-color":"var(--color-cyan-900)"}': { 'value': 'bg-cyan-900' },
  '{"background-color":"var(--color-cyan-950)"}': { 'value': 'bg-cyan-950' },
  '{"background-color":"var(--color-sky-50)"}': { 'value': 'bg-sky-50' },
  '{"background-color":"var(--color-sky-100)"}': { 'value': 'bg-sky-100' },
  '{"background-color":"var(--color-sky-200)"}': { 'value': 'bg-sky-200' },
  '{"background-color":"var(--color-sky-300)"}': { 'value': 'bg-sky-300' },
  '{"background-color":"var(--color-sky-400)"}': { 'value': 'bg-sky-400' },
  '{"background-color":"var(--color-sky-500)"}': { 'value': 'bg-sky-500' },
  '{"background-color":"var(--color-sky-600)"}': { 'value': 'bg-sky-600' },
  '{"background-color":"var(--color-sky-700)"}': { 'value': 'bg-sky-700' },
  '{"background-color":"var(--color-sky-800)"}': { 'value': 'bg-sky-800' },
  '{"background-color":"var(--color-sky-900)"}': { 'value': 'bg-sky-900' },
  '{"background-color":"var(--color-sky-950)"}': { 'value': 'bg-sky-950' },
  '{"background-color":"var(--color-blue-50)"}': { 'value': 'bg-blue-50' },
  '{"background-color":"var(--color-blue-100)"}': { 'value': 'bg-blue-100' },
  '{"background-color":"var(--color-blue-200)"}': { 'value': 'bg-blue-200' },
  '{"background-color":"var(--color-blue-300)"}': { 'value': 'bg-blue-300' },
  '{"background-color":"var(--color-blue-400)"}': { 'value': 'bg-blue-400' },
  '{"background-color":"var(--color-blue-500)"}': { 'value': 'bg-blue-500' },
  '{"background-color":"var(--color-blue-600)"}': { 'value': 'bg-blue-600' },
  '{"background-color":"var(--color-blue-700)"}': { 'value': 'bg-blue-700' },
  '{"background-color":"var(--color-blue-800)"}': { 'value': 'bg-blue-800' },
  '{"background-color":"var(--color-blue-900)"}': { 'value': 'bg-blue-900' },
  '{"background-color":"var(--color-blue-950)"}': { 'value': 'bg-blue-950' },
  '{"background-color":"var(--color-indigo-50)"}': { 'value': 'bg-indigo-50' },
  '{"background-color":"var(--color-indigo-100)"}': {
    'value': 'bg-indigo-100',
  },
  '{"background-color":"var(--color-indigo-200)"}': {
    'value': 'bg-indigo-200',
  },
  '{"background-color":"var(--color-indigo-300)"}': {
    'value': 'bg-indigo-300',
  },
  '{"background-color":"var(--color-indigo-400)"}': {
    'value': 'bg-indigo-400',
  },
  '{"background-color":"var(--color-indigo-500)"}': {
    'value': 'bg-indigo-500',
  },
  '{"background-color":"var(--color-indigo-600)"}': {
    'value': 'bg-indigo-600',
  },
  '{"background-color":"var(--color-indigo-700)"}': {
    'value': 'bg-indigo-700',
  },
  '{"background-color":"var(--color-indigo-800)"}': {
    'value': 'bg-indigo-800',
  },
  '{"background-color":"var(--color-indigo-900)"}': {
    'value': 'bg-indigo-900',
  },
  '{"background-color":"var(--color-indigo-950)"}': {
    'value': 'bg-indigo-950',
  },
  '{"background-color":"var(--color-violet-50)"}': { 'value': 'bg-violet-50' },
  '{"background-color":"var(--color-violet-100)"}': {
    'value': 'bg-violet-100',
  },
  '{"background-color":"var(--color-violet-200)"}': {
    'value': 'bg-violet-200',
  },
  '{"background-color":"var(--color-violet-300)"}': {
    'value': 'bg-violet-300',
  },
  '{"background-color":"var(--color-violet-400)"}': {
    'value': 'bg-violet-400',
  },
  '{"background-color":"var(--color-violet-500)"}': {
    'value': 'bg-violet-500',
  },
  '{"background-color":"var(--color-violet-600)"}': {
    'value': 'bg-violet-600',
  },
  '{"background-color":"var(--color-violet-700)"}': {
    'value': 'bg-violet-700',
  },
  '{"background-color":"var(--color-violet-800)"}': {
    'value': 'bg-violet-800',
  },
  '{"background-color":"var(--color-violet-900)"}': {
    'value': 'bg-violet-900',
  },
  '{"background-color":"var(--color-violet-950)"}': {
    'value': 'bg-violet-950',
  },
  '{"background-color":"var(--color-purple-50)"}': { 'value': 'bg-purple-50' },
  '{"background-color":"var(--color-purple-100)"}': {
    'value': 'bg-purple-100',
  },
  '{"background-color":"var(--color-purple-200)"}': {
    'value': 'bg-purple-200',
  },
  '{"background-color":"var(--color-purple-300)"}': {
    'value': 'bg-purple-300',
  },
  '{"background-color":"var(--color-purple-400)"}': {
    'value': 'bg-purple-400',
  },
  '{"background-color":"var(--color-purple-500)"}': {
    'value': 'bg-purple-500',
  },
  '{"background-color":"var(--color-purple-600)"}': {
    'value': 'bg-purple-600',
  },
  '{"background-color":"var(--color-purple-700)"}': {
    'value': 'bg-purple-700',
  },
  '{"background-color":"var(--color-purple-800)"}': {
    'value': 'bg-purple-800',
  },
  '{"background-color":"var(--color-purple-900)"}': {
    'value': 'bg-purple-900',
  },
  '{"background-color":"var(--color-purple-950)"}': {
    'value': 'bg-purple-950',
  },
  '{"background-color":"var(--color-fuchsia-50)"}': {
    'value': 'bg-fuchsia-50',
  },
  '{"background-color":"var(--color-fuchsia-100)"}': {
    'value': 'bg-fuchsia-100',
  },
  '{"background-color":"var(--color-fuchsia-200)"}': {
    'value': 'bg-fuchsia-200',
  },
  '{"background-color":"var(--color-fuchsia-300)"}': {
    'value': 'bg-fuchsia-300',
  },
  '{"background-color":"var(--color-fuchsia-400)"}': {
    'value': 'bg-fuchsia-400',
  },
  '{"background-color":"var(--color-fuchsia-500)"}': {
    'value': 'bg-fuchsia-500',
  },
  '{"background-color":"var(--color-fuchsia-600)"}': {
    'value': 'bg-fuchsia-600',
  },
  '{"background-color":"var(--color-fuchsia-700)"}': {
    'value': 'bg-fuchsia-700',
  },
  '{"background-color":"var(--color-fuchsia-800)"}': {
    'value': 'bg-fuchsia-800',
  },
  '{"background-color":"var(--color-fuchsia-900)"}': {
    'value': 'bg-fuchsia-900',
  },
  '{"background-color":"var(--color-fuchsia-950)"}': {
    'value': 'bg-fuchsia-950',
  },
  '{"background-color":"var(--color-pink-50)"}': { 'value': 'bg-pink-50' },
  '{"background-color":"var(--color-pink-100)"}': { 'value': 'bg-pink-100' },
  '{"background-color":"var(--color-pink-200)"}': { 'value': 'bg-pink-200' },
  '{"background-color":"var(--color-pink-300)"}': { 'value': 'bg-pink-300' },
  '{"background-color":"var(--color-pink-400)"}': { 'value': 'bg-pink-400' },
  '{"background-color":"var(--color-pink-500)"}': { 'value': 'bg-pink-500' },
  '{"background-color":"var(--color-pink-600)"}': { 'value': 'bg-pink-600' },
  '{"background-color":"var(--color-pink-700)"}': { 'value': 'bg-pink-700' },
  '{"background-color":"var(--color-pink-800)"}': { 'value': 'bg-pink-800' },
  '{"background-color":"var(--color-pink-900)"}': { 'value': 'bg-pink-900' },
  '{"background-color":"var(--color-pink-950)"}': { 'value': 'bg-pink-950' },
  '{"background-color":"var(--color-rose-50)"}': { 'value': 'bg-rose-50' },
  '{"background-color":"var(--color-rose-100)"}': { 'value': 'bg-rose-100' },
  '{"background-color":"var(--color-rose-200)"}': { 'value': 'bg-rose-200' },
  '{"background-color":"var(--color-rose-300)"}': { 'value': 'bg-rose-300' },
  '{"background-color":"var(--color-rose-400)"}': { 'value': 'bg-rose-400' },
  '{"background-color":"var(--color-rose-500)"}': { 'value': 'bg-rose-500' },
  '{"background-color":"var(--color-rose-600)"}': { 'value': 'bg-rose-600' },
  '{"background-color":"var(--color-rose-700)"}': { 'value': 'bg-rose-700' },
  '{"background-color":"var(--color-rose-800)"}': { 'value': 'bg-rose-800' },
  '{"background-color":"var(--color-rose-900)"}': { 'value': 'bg-rose-900' },
  '{"background-color":"var(--color-rose-950)"}': { 'value': 'bg-rose-950' },
  '{"background-color":"var(--color-slate-50)"}': { 'value': 'bg-slate-50' },
  '{"background-color":"var(--color-slate-100)"}': { 'value': 'bg-slate-100' },
  '{"background-color":"var(--color-slate-200)"}': { 'value': 'bg-slate-200' },
  '{"background-color":"var(--color-slate-300)"}': { 'value': 'bg-slate-300' },
  '{"background-color":"var(--color-slate-400)"}': { 'value': 'bg-slate-400' },
  '{"background-color":"var(--color-slate-500)"}': { 'value': 'bg-slate-500' },
  '{"background-color":"var(--color-slate-600)"}': { 'value': 'bg-slate-600' },
  '{"background-color":"var(--color-slate-700)"}': { 'value': 'bg-slate-700' },
  '{"background-color":"var(--color-slate-800)"}': { 'value': 'bg-slate-800' },
  '{"background-color":"var(--color-slate-900)"}': { 'value': 'bg-slate-900' },
  '{"background-color":"var(--color-slate-950)"}': { 'value': 'bg-slate-950' },
  '{"background-color":"var(--color-gray-50)"}': { 'value': 'bg-gray-50' },
  '{"background-color":"var(--color-gray-100)"}': { 'value': 'bg-gray-100' },
  '{"background-color":"var(--color-gray-200)"}': { 'value': 'bg-gray-200' },
  '{"background-color":"var(--color-gray-300)"}': { 'value': 'bg-gray-300' },
  '{"background-color":"var(--color-gray-400)"}': { 'value': 'bg-gray-400' },
  '{"background-color":"var(--color-gray-500)"}': { 'value': 'bg-gray-500' },
  '{"background-color":"var(--color-gray-600)"}': { 'value': 'bg-gray-600' },
  '{"background-color":"var(--color-gray-700)"}': { 'value': 'bg-gray-700' },
  '{"background-color":"var(--color-gray-800)"}': { 'value': 'bg-gray-800' },
  '{"background-color":"var(--color-gray-900)"}': { 'value': 'bg-gray-900' },
  '{"background-color":"var(--color-gray-950)"}': { 'value': 'bg-gray-950' },
  '{"background-color":"var(--color-zinc-50)"}': { 'value': 'bg-zinc-50' },
  '{"background-color":"var(--color-zinc-100)"}': { 'value': 'bg-zinc-100' },
  '{"background-color":"var(--color-zinc-200)"}': { 'value': 'bg-zinc-200' },
  '{"background-color":"var(--color-zinc-300)"}': { 'value': 'bg-zinc-300' },
  '{"background-color":"var(--color-zinc-400)"}': { 'value': 'bg-zinc-400' },
  '{"background-color":"var(--color-zinc-500)"}': { 'value': 'bg-zinc-500' },
  '{"background-color":"var(--color-zinc-600)"}': { 'value': 'bg-zinc-600' },
  '{"background-color":"var(--color-zinc-700)"}': { 'value': 'bg-zinc-700' },
  '{"background-color":"var(--color-zinc-800)"}': { 'value': 'bg-zinc-800' },
  '{"background-color":"var(--color-zinc-900)"}': { 'value': 'bg-zinc-900' },
  '{"background-color":"var(--color-zinc-950)"}': { 'value': 'bg-zinc-950' },
  '{"background-color":"var(--color-neutral-50)"}': {
    'value': 'bg-neutral-50',
  },
  '{"background-color":"var(--color-neutral-100)"}': {
    'value': 'bg-neutral-100',
  },
  '{"background-color":"var(--color-neutral-200)"}': {
    'value': 'bg-neutral-200',
  },
  '{"background-color":"var(--color-neutral-300)"}': {
    'value': 'bg-neutral-300',
  },
  '{"background-color":"var(--color-neutral-400)"}': {
    'value': 'bg-neutral-400',
  },
  '{"background-color":"var(--color-neutral-500)"}': {
    'value': 'bg-neutral-500',
  },
  '{"background-color":"var(--color-neutral-600)"}': {
    'value': 'bg-neutral-600',
  },
  '{"background-color":"var(--color-neutral-700)"}': {
    'value': 'bg-neutral-700',
  },
  '{"background-color":"var(--color-neutral-800)"}': {
    'value': 'bg-neutral-800',
  },
  '{"background-color":"var(--color-neutral-900)"}': {
    'value': 'bg-neutral-900',
  },
  '{"background-color":"var(--color-neutral-950)"}': {
    'value': 'bg-neutral-950',
  },
  '{"background-color":"var(--color-stone-50)"}': { 'value': 'bg-stone-50' },
  '{"background-color":"var(--color-stone-100)"}': { 'value': 'bg-stone-100' },
  '{"background-color":"var(--color-stone-200)"}': { 'value': 'bg-stone-200' },
  '{"background-color":"var(--color-stone-300)"}': { 'value': 'bg-stone-300' },
  '{"background-color":"var(--color-stone-400)"}': { 'value': 'bg-stone-400' },
  '{"background-color":"var(--color-stone-500)"}': { 'value': 'bg-stone-500' },
  '{"background-color":"var(--color-stone-600)"}': { 'value': 'bg-stone-600' },
  '{"background-color":"var(--color-stone-700)"}': { 'value': 'bg-stone-700' },
  '{"background-color":"var(--color-stone-800)"}': { 'value': 'bg-stone-800' },
  '{"background-color":"var(--color-stone-900)"}': { 'value': 'bg-stone-900' },
  '{"background-color":"var(--color-stone-950)"}': { 'value': 'bg-stone-950' },
  '{"background-color":"var(<custom-property>)"}': {
    'value': 'bg-(<custom-property>)',
  },
  '{"background-color":"<value>"}': { 'value': 'bg-[<value>]' },
  '{"scroll-behavior":"auto"}': { 'value': 'scroll-auto' },
  '{"scroll-behavior":"smooth"}': { 'value': 'scroll-smooth' },
  '{"list-style-position":"inside"}': { 'value': 'list-inside' },
  '{"list-style-position":"outside"}': { 'value': 'list-outside' },
  '{"border-width":"1px"}': { 'value': 'border' },
  '{"border-width":"<number>px"}': { 'value': 'border-<number>' },
  '{"border-width":"var(<custom-property>)"}': {
    'value': 'border-(length:<custom-property>)',
  },
  '{"border-width":"<value>"}': { 'value': 'border-[<value>]' },
  '{"border-inline-width":"1px"}': { 'value': 'border-x' },
  '{"border-inline-width":"<number>px"}': { 'value': 'border-x-<number>' },
  '{"border-inline-width":"var(<custom-property>)"}': {
    'value': 'border-x-(length:<custom-property>)',
  },
  '{"border-inline-width":"<value>"}': { 'value': 'border-x-[<value>]' },
  '{"border-block-width":"1px"}': { 'value': 'border-y' },
  '{"border-block-width":"<number>px"}': { 'value': 'border-y-<number>' },
  '{"border-block-width":"var(<custom-property>)"}': {
    'value': 'border-y-(length:<custom-property>)',
  },
  '{"border-block-width":"<value>"}': { 'value': 'border-y-[<value>]' },
  '{"border-inline-start-width":"1px"}': { 'value': 'border-s' },
  '{"border-inline-start-width":"<number>px"}': {
    'value': 'border-s-<number>',
  },
  '{"border-inline-start-width":"var(<custom-property>)"}': {
    'value': 'border-s-(length:<custom-property>)',
  },
  '{"border-inline-start-width":"<value>"}': { 'value': 'border-s-[<value>]' },
  '{"border-inline-end-width":"1px"}': { 'value': 'border-e' },
  '{"border-inline-end-width":"<number>px"}': { 'value': 'border-e-<number>' },
  '{"border-inline-end-width":"var(<custom-property>)"}': {
    'value': 'border-e-(length:<custom-property>)',
  },
  '{"border-inline-end-width":"<value>"}': { 'value': 'border-e-[<value>]' },
  '{"border-top-width":"1px"}': { 'value': 'border-t' },
  '{"border-top-width":"<number>px"}': { 'value': 'border-t-<number>' },
  '{"border-top-width":"var(<custom-property>)"}': {
    'value': 'border-t-(length:<custom-property>)',
  },
  '{"border-top-width":"<value>"}': { 'value': 'border-t-[<value>]' },
  '{"border-right-width":"1px"}': { 'value': 'border-r' },
  '{"border-right-width":"<number>px"}': { 'value': 'border-r-<number>' },
  '{"border-right-width":"var(<custom-property>)"}': {
    'value': 'border-r-(length:<custom-property>)',
  },
  '{"border-right-width":"<value>"}': { 'value': 'border-r-[<value>]' },
  '{"border-bottom-width":"1px"}': { 'value': 'border-b' },
  '{"border-bottom-width":"<number>px"}': { 'value': 'border-b-<number>' },
  '{"border-bottom-width":"var(<custom-property>)"}': {
    'value': 'border-b-(length:<custom-property>)',
  },
  '{"border-bottom-width":"<value>"}': { 'value': 'border-b-[<value>]' },
  '{"border-left-width":"1px"}': { 'value': 'border-l' },
  '{"border-left-width":"<number>px"}': { 'value': 'border-l-<number>' },
  '{"border-left-width":"var(<custom-property>)"}': {
    'value': 'border-l-(length:<custom-property>)',
  },
  '{"border-left-width":"<value>"}': { 'value': 'border-l-[<value>]' },
  '{"--tw-divide-x-reverse":"1"}': { 'value': 'divide-x-reverse' },
  '{"--tw-divide-y-reverse":"1"}': { 'value': 'divide-y-reverse' },
  '{"rotate":"none"}': { 'value': 'rotate-none' },
  '{"rotate":"<number>deg"}': { 'value': 'rotate-<number>' },
  '{"rotate":"calc(<number>deg * -1)"}': { 'value': '-rotate-<number>' },
  '{"rotate":"var(<custom-property>)"}': {
    'value': 'rotate-(<custom-property>)',
  },
  '{"rotate":"<value>"}': { 'value': 'rotate-[<value>]' },
  '{"transform":"rotateX(<number>deg) var(--tw-rotate-y)"}': {
    'value': 'rotate-x-<number>',
  },
  '{"transform":"rotateX(-<number>deg) var(--tw-rotate-y)"}': {
    'value': '-rotate-x-<number>',
  },
  '{"transform":"rotateX(var(<custom-property>)) var(--tw-rotate-y)"}': {
    'value': 'rotate-x-(<custom-property>)',
  },
  '{"transform":"rotateX(<value>) var(--tw-rotate-y)"}': {
    'value': 'rotate-x-[<value>]',
  },
  '{"transform":"var(--tw-rotate-x) rotateY(<number>deg)"}': {
    'value': 'rotate-y-<number>',
  },
  '{"transform":"var(--tw-rotate-x) rotateY(-<number>deg)"}': {
    'value': '-rotate-y-<number>',
  },
  '{"transform":"var(--tw-rotate-x) rotateY(var(<custom-property>))"}': {
    'value': 'rotate-y-(<custom-property>)',
  },
  '{"transform":"var(--tw-rotate-x) rotateY(<value>)"}': {
    'value': 'rotate-y-[<value>]',
  },
  '{"transform":"var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(<number>deg)"}':
    { 'value': 'rotate-z-<number>' },
  '{"transform":"var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(-<number>deg)"}':
    { 'value': '-rotate-z-<number>' },
  '{"transform":"var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(var(<custom-property>))"}':
    { 'value': 'rotate-z-(<custom-property>)' },
  '{"transform":"var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(<value>)"}': {
    'value': 'rotate-z-[<value>]',
  },
  '{"appearance":"none"}': { 'value': 'appearance-none' },
  '{"appearance":"auto"}': { 'value': 'appearance-auto' },
  '{"stroke":"none"}': { 'value': 'stroke-none' },
  '{"stroke":"inherit"}': { 'value': 'stroke-inherit' },
  '{"stroke":"currentColor"}': { 'value': 'stroke-current' },
  '{"stroke":"transparent"}': { 'value': 'stroke-transparent' },
  '{"stroke":"var(--color-black)"}': { 'value': 'stroke-black' },
  '{"stroke":"var(--color-white)"}': { 'value': 'stroke-white' },
  '{"stroke":"var(--color-red-50)"}': { 'value': 'stroke-red-50' },
  '{"stroke":"var(--color-red-100)"}': { 'value': 'stroke-red-100' },
  '{"stroke":"var(--color-red-200)"}': { 'value': 'stroke-red-200' },
  '{"stroke":"var(--color-red-300)"}': { 'value': 'stroke-red-300' },
  '{"stroke":"var(--color-red-400)"}': { 'value': 'stroke-red-400' },
  '{"stroke":"var(--color-red-500)"}': { 'value': 'stroke-red-500' },
  '{"stroke":"var(--color-red-600)"}': { 'value': 'stroke-red-600' },
  '{"stroke":"var(--color-red-700)"}': { 'value': 'stroke-red-700' },
  '{"stroke":"var(--color-red-800)"}': { 'value': 'stroke-red-800' },
  '{"stroke":"var(--color-red-900)"}': { 'value': 'stroke-red-900' },
  '{"stroke":"var(--color-red-950)"}': { 'value': 'stroke-red-950' },
  '{"stroke":"var(--color-orange-50)"}': { 'value': 'stroke-orange-50' },
  '{"stroke":"var(--color-orange-100)"}': { 'value': 'stroke-orange-100' },
  '{"stroke":"var(--color-orange-200)"}': { 'value': 'stroke-orange-200' },
  '{"stroke":"var(--color-orange-300)"}': { 'value': 'stroke-orange-300' },
  '{"stroke":"var(--color-orange-400)"}': { 'value': 'stroke-orange-400' },
  '{"stroke":"var(--color-orange-500)"}': { 'value': 'stroke-orange-500' },
  '{"stroke":"var(--color-orange-600)"}': { 'value': 'stroke-orange-600' },
  '{"stroke":"var(--color-orange-700)"}': { 'value': 'stroke-orange-700' },
  '{"stroke":"var(--color-orange-800)"}': { 'value': 'stroke-orange-800' },
  '{"stroke":"var(--color-orange-900)"}': { 'value': 'stroke-orange-900' },
  '{"stroke":"var(--color-orange-950)"}': { 'value': 'stroke-orange-950' },
  '{"stroke":"var(--color-amber-50)"}': { 'value': 'stroke-amber-50' },
  '{"stroke":"var(--color-amber-100)"}': { 'value': 'stroke-amber-100' },
  '{"stroke":"var(--color-amber-200)"}': { 'value': 'stroke-amber-200' },
  '{"stroke":"var(--color-amber-300)"}': { 'value': 'stroke-amber-300' },
  '{"stroke":"var(--color-amber-400)"}': { 'value': 'stroke-amber-400' },
  '{"stroke":"var(--color-amber-500)"}': { 'value': 'stroke-amber-500' },
  '{"stroke":"var(--color-amber-600)"}': { 'value': 'stroke-amber-600' },
  '{"stroke":"var(--color-amber-700)"}': { 'value': 'stroke-amber-700' },
  '{"stroke":"var(--color-amber-800)"}': { 'value': 'stroke-amber-800' },
  '{"stroke":"var(--color-amber-900)"}': { 'value': 'stroke-amber-900' },
  '{"stroke":"var(--color-amber-950)"}': { 'value': 'stroke-amber-950' },
  '{"stroke":"var(--color-yellow-50)"}': { 'value': 'stroke-yellow-50' },
  '{"stroke":"var(--color-yellow-100)"}': { 'value': 'stroke-yellow-100' },
  '{"stroke":"var(--color-yellow-200)"}': { 'value': 'stroke-yellow-200' },
  '{"stroke":"var(--color-yellow-300)"}': { 'value': 'stroke-yellow-300' },
  '{"stroke":"var(--color-yellow-400)"}': { 'value': 'stroke-yellow-400' },
  '{"stroke":"var(--color-yellow-500)"}': { 'value': 'stroke-yellow-500' },
  '{"stroke":"var(--color-yellow-600)"}': { 'value': 'stroke-yellow-600' },
  '{"stroke":"var(--color-yellow-700)"}': { 'value': 'stroke-yellow-700' },
  '{"stroke":"var(--color-yellow-800)"}': { 'value': 'stroke-yellow-800' },
  '{"stroke":"var(--color-yellow-900)"}': { 'value': 'stroke-yellow-900' },
  '{"stroke":"var(--color-yellow-950)"}': { 'value': 'stroke-yellow-950' },
  '{"stroke":"var(--color-lime-50)"}': { 'value': 'stroke-lime-50' },
  '{"stroke":"var(--color-lime-100)"}': { 'value': 'stroke-lime-100' },
  '{"stroke":"var(--color-lime-200)"}': { 'value': 'stroke-lime-200' },
  '{"stroke":"var(--color-lime-300)"}': { 'value': 'stroke-lime-300' },
  '{"stroke":"var(--color-lime-400)"}': { 'value': 'stroke-lime-400' },
  '{"stroke":"var(--color-lime-500)"}': { 'value': 'stroke-lime-500' },
  '{"stroke":"var(--color-lime-600)"}': { 'value': 'stroke-lime-600' },
  '{"stroke":"var(--color-lime-700)"}': { 'value': 'stroke-lime-700' },
  '{"stroke":"var(--color-lime-800)"}': { 'value': 'stroke-lime-800' },
  '{"stroke":"var(--color-lime-900)"}': { 'value': 'stroke-lime-900' },
  '{"stroke":"var(--color-lime-950)"}': { 'value': 'stroke-lime-950' },
  '{"stroke":"var(--color-green-50)"}': { 'value': 'stroke-green-50' },
  '{"stroke":"var(--color-green-100)"}': { 'value': 'stroke-green-100' },
  '{"stroke":"var(--color-green-200)"}': { 'value': 'stroke-green-200' },
  '{"stroke":"var(--color-green-300)"}': { 'value': 'stroke-green-300' },
  '{"stroke":"var(--color-green-400)"}': { 'value': 'stroke-green-400' },
  '{"stroke":"var(--color-green-500)"}': { 'value': 'stroke-green-500' },
  '{"stroke":"var(--color-green-600)"}': { 'value': 'stroke-green-600' },
  '{"stroke":"var(--color-green-700)"}': { 'value': 'stroke-green-700' },
  '{"stroke":"var(--color-green-800)"}': { 'value': 'stroke-green-800' },
  '{"stroke":"var(--color-green-900)"}': { 'value': 'stroke-green-900' },
  '{"stroke":"var(--color-green-950)"}': { 'value': 'stroke-green-950' },
  '{"stroke":"var(--color-emerald-50)"}': { 'value': 'stroke-emerald-50' },
  '{"stroke":"var(--color-emerald-100)"}': { 'value': 'stroke-emerald-100' },
  '{"stroke":"var(--color-emerald-200)"}': { 'value': 'stroke-emerald-200' },
  '{"stroke":"var(--color-emerald-300)"}': { 'value': 'stroke-emerald-300' },
  '{"stroke":"var(--color-emerald-400)"}': { 'value': 'stroke-emerald-400' },
  '{"stroke":"var(--color-emerald-500)"}': { 'value': 'stroke-emerald-500' },
  '{"stroke":"var(--color-emerald-600)"}': { 'value': 'stroke-emerald-600' },
  '{"stroke":"var(--color-emerald-700)"}': { 'value': 'stroke-emerald-700' },
  '{"stroke":"var(--color-emerald-800)"}': { 'value': 'stroke-emerald-800' },
  '{"stroke":"var(--color-emerald-900)"}': { 'value': 'stroke-emerald-900' },
  '{"stroke":"var(--color-emerald-950)"}': { 'value': 'stroke-emerald-950' },
  '{"stroke":"var(--color-teal-50)"}': { 'value': 'stroke-teal-50' },
  '{"stroke":"var(--color-teal-100)"}': { 'value': 'stroke-teal-100' },
  '{"stroke":"var(--color-teal-200)"}': { 'value': 'stroke-teal-200' },
  '{"stroke":"var(--color-teal-300)"}': { 'value': 'stroke-teal-300' },
  '{"stroke":"var(--color-teal-400)"}': { 'value': 'stroke-teal-400' },
  '{"stroke":"var(--color-teal-500)"}': { 'value': 'stroke-teal-500' },
  '{"stroke":"var(--color-teal-600)"}': { 'value': 'stroke-teal-600' },
  '{"stroke":"var(--color-teal-700)"}': { 'value': 'stroke-teal-700' },
  '{"stroke":"var(--color-teal-800)"}': { 'value': 'stroke-teal-800' },
  '{"stroke":"var(--color-teal-900)"}': { 'value': 'stroke-teal-900' },
  '{"stroke":"var(--color-teal-950)"}': { 'value': 'stroke-teal-950' },
  '{"stroke":"var(--color-cyan-50)"}': { 'value': 'stroke-cyan-50' },
  '{"stroke":"var(--color-cyan-100)"}': { 'value': 'stroke-cyan-100' },
  '{"stroke":"var(--color-cyan-200)"}': { 'value': 'stroke-cyan-200' },
  '{"stroke":"var(--color-cyan-300)"}': { 'value': 'stroke-cyan-300' },
  '{"stroke":"var(--color-cyan-400)"}': { 'value': 'stroke-cyan-400' },
  '{"stroke":"var(--color-cyan-500)"}': { 'value': 'stroke-cyan-500' },
  '{"stroke":"var(--color-cyan-600)"}': { 'value': 'stroke-cyan-600' },
  '{"stroke":"var(--color-cyan-700)"}': { 'value': 'stroke-cyan-700' },
  '{"stroke":"var(--color-cyan-800)"}': { 'value': 'stroke-cyan-800' },
  '{"stroke":"var(--color-cyan-900)"}': { 'value': 'stroke-cyan-900' },
  '{"stroke":"var(--color-cyan-950)"}': { 'value': 'stroke-cyan-950' },
  '{"stroke":"var(--color-sky-50)"}': { 'value': 'stroke-sky-50' },
  '{"stroke":"var(--color-sky-100)"}': { 'value': 'stroke-sky-100' },
  '{"stroke":"var(--color-sky-200)"}': { 'value': 'stroke-sky-200' },
  '{"stroke":"var(--color-sky-300)"}': { 'value': 'stroke-sky-300' },
  '{"stroke":"var(--color-sky-400)"}': { 'value': 'stroke-sky-400' },
  '{"stroke":"var(--color-sky-500)"}': { 'value': 'stroke-sky-500' },
  '{"stroke":"var(--color-sky-600)"}': { 'value': 'stroke-sky-600' },
  '{"stroke":"var(--color-sky-700)"}': { 'value': 'stroke-sky-700' },
  '{"stroke":"var(--color-sky-800)"}': { 'value': 'stroke-sky-800' },
  '{"stroke":"var(--color-sky-900)"}': { 'value': 'stroke-sky-900' },
  '{"stroke":"var(--color-sky-950)"}': { 'value': 'stroke-sky-950' },
  '{"stroke":"var(--color-blue-50)"}': { 'value': 'stroke-blue-50' },
  '{"stroke":"var(--color-blue-100)"}': { 'value': 'stroke-blue-100' },
  '{"stroke":"var(--color-blue-200)"}': { 'value': 'stroke-blue-200' },
  '{"stroke":"var(--color-blue-300)"}': { 'value': 'stroke-blue-300' },
  '{"stroke":"var(--color-blue-400)"}': { 'value': 'stroke-blue-400' },
  '{"stroke":"var(--color-blue-500)"}': { 'value': 'stroke-blue-500' },
  '{"stroke":"var(--color-blue-600)"}': { 'value': 'stroke-blue-600' },
  '{"stroke":"var(--color-blue-700)"}': { 'value': 'stroke-blue-700' },
  '{"stroke":"var(--color-blue-800)"}': { 'value': 'stroke-blue-800' },
  '{"stroke":"var(--color-blue-900)"}': { 'value': 'stroke-blue-900' },
  '{"stroke":"var(--color-blue-950)"}': { 'value': 'stroke-blue-950' },
  '{"stroke":"var(--color-indigo-50)"}': { 'value': 'stroke-indigo-50' },
  '{"stroke":"var(--color-indigo-100)"}': { 'value': 'stroke-indigo-100' },
  '{"stroke":"var(--color-indigo-200)"}': { 'value': 'stroke-indigo-200' },
  '{"stroke":"var(--color-indigo-300)"}': { 'value': 'stroke-indigo-300' },
  '{"stroke":"var(--color-indigo-400)"}': { 'value': 'stroke-indigo-400' },
  '{"stroke":"var(--color-indigo-500)"}': { 'value': 'stroke-indigo-500' },
  '{"stroke":"var(--color-indigo-600)"}': { 'value': 'stroke-indigo-600' },
  '{"stroke":"var(--color-indigo-700)"}': { 'value': 'stroke-indigo-700' },
  '{"stroke":"var(--color-indigo-800)"}': { 'value': 'stroke-indigo-800' },
  '{"stroke":"var(--color-indigo-900)"}': { 'value': 'stroke-indigo-900' },
  '{"stroke":"var(--color-indigo-950)"}': { 'value': 'stroke-indigo-950' },
  '{"stroke":"var(--color-violet-50)"}': { 'value': 'stroke-violet-50' },
  '{"stroke":"var(--color-violet-100)"}': { 'value': 'stroke-violet-100' },
  '{"stroke":"var(--color-violet-200)"}': { 'value': 'stroke-violet-200' },
  '{"stroke":"var(--color-violet-300)"}': { 'value': 'stroke-violet-300' },
  '{"stroke":"var(--color-violet-400)"}': { 'value': 'stroke-violet-400' },
  '{"stroke":"var(--color-violet-500)"}': { 'value': 'stroke-violet-500' },
  '{"stroke":"var(--color-violet-600)"}': { 'value': 'stroke-violet-600' },
  '{"stroke":"var(--color-violet-700)"}': { 'value': 'stroke-violet-700' },
  '{"stroke":"var(--color-violet-800)"}': { 'value': 'stroke-violet-800' },
  '{"stroke":"var(--color-violet-900)"}': { 'value': 'stroke-violet-900' },
  '{"stroke":"var(--color-violet-950)"}': { 'value': 'stroke-violet-950' },
  '{"stroke":"var(--color-purple-50)"}': { 'value': 'stroke-purple-50' },
  '{"stroke":"var(--color-purple-100)"}': { 'value': 'stroke-purple-100' },
  '{"stroke":"var(--color-purple-200)"}': { 'value': 'stroke-purple-200' },
  '{"stroke":"var(--color-purple-300)"}': { 'value': 'stroke-purple-300' },
  '{"stroke":"var(--color-purple-400)"}': { 'value': 'stroke-purple-400' },
  '{"stroke":"var(--color-purple-500)"}': { 'value': 'stroke-purple-500' },
  '{"stroke":"var(--color-purple-600)"}': { 'value': 'stroke-purple-600' },
  '{"stroke":"var(--color-purple-700)"}': { 'value': 'stroke-purple-700' },
  '{"stroke":"var(--color-purple-800)"}': { 'value': 'stroke-purple-800' },
  '{"stroke":"var(--color-purple-900)"}': { 'value': 'stroke-purple-900' },
  '{"stroke":"var(--color-purple-950)"}': { 'value': 'stroke-purple-950' },
  '{"stroke":"var(--color-fuchsia-50)"}': { 'value': 'stroke-fuchsia-50' },
  '{"stroke":"var(--color-fuchsia-100)"}': { 'value': 'stroke-fuchsia-100' },
  '{"stroke":"var(--color-fuchsia-200)"}': { 'value': 'stroke-fuchsia-200' },
  '{"stroke":"var(--color-fuchsia-300)"}': { 'value': 'stroke-fuchsia-300' },
  '{"stroke":"var(--color-fuchsia-400)"}': { 'value': 'stroke-fuchsia-400' },
  '{"stroke":"var(--color-fuchsia-500)"}': { 'value': 'stroke-fuchsia-500' },
  '{"stroke":"var(--color-fuchsia-600)"}': { 'value': 'stroke-fuchsia-600' },
  '{"stroke":"var(--color-fuchsia-700)"}': { 'value': 'stroke-fuchsia-700' },
  '{"stroke":"var(--color-fuchsia-800)"}': { 'value': 'stroke-fuchsia-800' },
  '{"stroke":"var(--color-fuchsia-900)"}': { 'value': 'stroke-fuchsia-900' },
  '{"stroke":"var(--color-fuchsia-950)"}': { 'value': 'stroke-fuchsia-950' },
  '{"stroke":"var(--color-pink-50)"}': { 'value': 'stroke-pink-50' },
  '{"stroke":"var(--color-pink-100)"}': { 'value': 'stroke-pink-100' },
  '{"stroke":"var(--color-pink-200)"}': { 'value': 'stroke-pink-200' },
  '{"stroke":"var(--color-pink-300)"}': { 'value': 'stroke-pink-300' },
  '{"stroke":"var(--color-pink-400)"}': { 'value': 'stroke-pink-400' },
  '{"stroke":"var(--color-pink-500)"}': { 'value': 'stroke-pink-500' },
  '{"stroke":"var(--color-pink-600)"}': { 'value': 'stroke-pink-600' },
  '{"stroke":"var(--color-pink-700)"}': { 'value': 'stroke-pink-700' },
  '{"stroke":"var(--color-pink-800)"}': { 'value': 'stroke-pink-800' },
  '{"stroke":"var(--color-pink-900)"}': { 'value': 'stroke-pink-900' },
  '{"stroke":"var(--color-pink-950)"}': { 'value': 'stroke-pink-950' },
  '{"stroke":"var(--color-rose-50)"}': { 'value': 'stroke-rose-50' },
  '{"stroke":"var(--color-rose-100)"}': { 'value': 'stroke-rose-100' },
  '{"stroke":"var(--color-rose-200)"}': { 'value': 'stroke-rose-200' },
  '{"stroke":"var(--color-rose-300)"}': { 'value': 'stroke-rose-300' },
  '{"stroke":"var(--color-rose-400)"}': { 'value': 'stroke-rose-400' },
  '{"stroke":"var(--color-rose-500)"}': { 'value': 'stroke-rose-500' },
  '{"stroke":"var(--color-rose-600)"}': { 'value': 'stroke-rose-600' },
  '{"stroke":"var(--color-rose-700)"}': { 'value': 'stroke-rose-700' },
  '{"stroke":"var(--color-rose-800)"}': { 'value': 'stroke-rose-800' },
  '{"stroke":"var(--color-rose-900)"}': { 'value': 'stroke-rose-900' },
  '{"stroke":"var(--color-rose-950)"}': { 'value': 'stroke-rose-950' },
  '{"stroke":"var(--color-slate-50)"}': { 'value': 'stroke-slate-50' },
  '{"stroke":"var(--color-slate-100)"}': { 'value': 'stroke-slate-100' },
  '{"stroke":"var(--color-slate-200)"}': { 'value': 'stroke-slate-200' },
  '{"stroke":"var(--color-slate-300)"}': { 'value': 'stroke-slate-300' },
  '{"stroke":"var(--color-slate-400)"}': { 'value': 'stroke-slate-400' },
  '{"stroke":"var(--color-slate-500)"}': { 'value': 'stroke-slate-500' },
  '{"stroke":"var(--color-slate-600)"}': { 'value': 'stroke-slate-600' },
  '{"stroke":"var(--color-slate-700)"}': { 'value': 'stroke-slate-700' },
  '{"stroke":"var(--color-slate-800)"}': { 'value': 'stroke-slate-800' },
  '{"stroke":"var(--color-slate-900)"}': { 'value': 'stroke-slate-900' },
  '{"stroke":"var(--color-slate-950)"}': { 'value': 'stroke-slate-950' },
  '{"stroke":"var(--color-gray-50)"}': { 'value': 'stroke-gray-50' },
  '{"stroke":"var(--color-gray-100)"}': { 'value': 'stroke-gray-100' },
  '{"stroke":"var(--color-gray-200)"}': { 'value': 'stroke-gray-200' },
  '{"stroke":"var(--color-gray-300)"}': { 'value': 'stroke-gray-300' },
  '{"stroke":"var(--color-gray-400)"}': { 'value': 'stroke-gray-400' },
  '{"stroke":"var(--color-gray-500)"}': { 'value': 'stroke-gray-500' },
  '{"stroke":"var(--color-gray-600)"}': { 'value': 'stroke-gray-600' },
  '{"stroke":"var(--color-gray-700)"}': { 'value': 'stroke-gray-700' },
  '{"stroke":"var(--color-gray-800)"}': { 'value': 'stroke-gray-800' },
  '{"stroke":"var(--color-gray-900)"}': { 'value': 'stroke-gray-900' },
  '{"stroke":"var(--color-gray-950)"}': { 'value': 'stroke-gray-950' },
  '{"stroke":"var(--color-zinc-50)"}': { 'value': 'stroke-zinc-50' },
  '{"stroke":"var(--color-zinc-100)"}': { 'value': 'stroke-zinc-100' },
  '{"stroke":"var(--color-zinc-200)"}': { 'value': 'stroke-zinc-200' },
  '{"stroke":"var(--color-zinc-300)"}': { 'value': 'stroke-zinc-300' },
  '{"stroke":"var(--color-zinc-400)"}': { 'value': 'stroke-zinc-400' },
  '{"stroke":"var(--color-zinc-500)"}': { 'value': 'stroke-zinc-500' },
  '{"stroke":"var(--color-zinc-600)"}': { 'value': 'stroke-zinc-600' },
  '{"stroke":"var(--color-zinc-700)"}': { 'value': 'stroke-zinc-700' },
  '{"stroke":"var(--color-zinc-800)"}': { 'value': 'stroke-zinc-800' },
  '{"stroke":"var(--color-zinc-900)"}': { 'value': 'stroke-zinc-900' },
  '{"stroke":"var(--color-zinc-950)"}': { 'value': 'stroke-zinc-950' },
  '{"stroke":"var(--color-neutral-50)"}': { 'value': 'stroke-neutral-50' },
  '{"stroke":"var(--color-neutral-100)"}': { 'value': 'stroke-neutral-100' },
  '{"stroke":"var(--color-neutral-200)"}': { 'value': 'stroke-neutral-200' },
  '{"stroke":"var(--color-neutral-300)"}': { 'value': 'stroke-neutral-300' },
  '{"stroke":"var(--color-neutral-400)"}': { 'value': 'stroke-neutral-400' },
  '{"stroke":"var(--color-neutral-500)"}': { 'value': 'stroke-neutral-500' },
  '{"stroke":"var(--color-neutral-600)"}': { 'value': 'stroke-neutral-600' },
  '{"stroke":"var(--color-neutral-700)"}': { 'value': 'stroke-neutral-700' },
  '{"stroke":"var(--color-neutral-800)"}': { 'value': 'stroke-neutral-800' },
  '{"stroke":"var(--color-neutral-900)"}': { 'value': 'stroke-neutral-900' },
  '{"stroke":"var(--color-neutral-950)"}': { 'value': 'stroke-neutral-950' },
  '{"stroke":"var(--color-stone-50)"}': { 'value': 'stroke-stone-50' },
  '{"stroke":"var(--color-stone-100)"}': { 'value': 'stroke-stone-100' },
  '{"stroke":"var(--color-stone-200)"}': { 'value': 'stroke-stone-200' },
  '{"stroke":"var(--color-stone-300)"}': { 'value': 'stroke-stone-300' },
  '{"stroke":"var(--color-stone-400)"}': { 'value': 'stroke-stone-400' },
  '{"stroke":"var(--color-stone-500)"}': { 'value': 'stroke-stone-500' },
  '{"stroke":"var(--color-stone-600)"}': { 'value': 'stroke-stone-600' },
  '{"stroke":"var(--color-stone-700)"}': { 'value': 'stroke-stone-700' },
  '{"stroke":"var(--color-stone-800)"}': { 'value': 'stroke-stone-800' },
  '{"stroke":"var(--color-stone-900)"}': { 'value': 'stroke-stone-900' },
  '{"stroke":"var(--color-stone-950)"}': { 'value': 'stroke-stone-950' },
  '{"stroke":"var(<custom-property>)"}': {
    'value': 'stroke-(<custom-property>)',
  },
  '{"stroke":"<color>"}': { 'value': 'stroke-[<color>]' },
  '{"text-align":"left"}': { 'value': 'text-left' },
  '{"text-align":"center"}': { 'value': 'text-center' },
  '{"text-align":"right"}': { 'value': 'text-right' },
  '{"text-align":"justify"}': { 'value': 'text-justify' },
  '{"text-align":"start"}': { 'value': 'text-start' },
  '{"text-align":"end"}': { 'value': 'text-end' },
  '{"color":"inherit"}': { 'value': 'text-inherit' },
  '{"color":"currentColor"}': { 'value': 'text-current' },
  '{"color":"transparent"}': { 'value': 'text-transparent' },
  '{"color":"var(--color-black)"}': { 'value': 'text-black' },
  '{"color":"var(--color-white)"}': { 'value': 'text-white' },
  '{"color":"var(--color-red-50)"}': { 'value': 'text-red-50' },
  '{"color":"var(--color-red-100)"}': { 'value': 'text-red-100' },
  '{"color":"var(--color-red-200)"}': { 'value': 'text-red-200' },
  '{"color":"var(--color-red-300)"}': { 'value': 'text-red-300' },
  '{"color":"var(--color-red-400)"}': { 'value': 'text-red-400' },
  '{"color":"var(--color-red-500)"}': { 'value': 'text-red-500' },
  '{"color":"var(--color-red-600)"}': { 'value': 'text-red-600' },
  '{"color":"var(--color-red-700)"}': { 'value': 'text-red-700' },
  '{"color":"var(--color-red-800)"}': { 'value': 'text-red-800' },
  '{"color":"var(--color-red-900)"}': { 'value': 'text-red-900' },
  '{"color":"var(--color-red-950)"}': { 'value': 'text-red-950' },
  '{"color":"var(--color-orange-50)"}': { 'value': 'text-orange-50' },
  '{"color":"var(--color-orange-100)"}': { 'value': 'text-orange-100' },
  '{"color":"var(--color-orange-200)"}': { 'value': 'text-orange-200' },
  '{"color":"var(--color-orange-300)"}': { 'value': 'text-orange-300' },
  '{"color":"var(--color-orange-400)"}': { 'value': 'text-orange-400' },
  '{"color":"var(--color-orange-500)"}': { 'value': 'text-orange-500' },
  '{"color":"var(--color-orange-600)"}': { 'value': 'text-orange-600' },
  '{"color":"var(--color-orange-700)"}': { 'value': 'text-orange-700' },
  '{"color":"var(--color-orange-800)"}': { 'value': 'text-orange-800' },
  '{"color":"var(--color-orange-900)"}': { 'value': 'text-orange-900' },
  '{"color":"var(--color-orange-950)"}': { 'value': 'text-orange-950' },
  '{"color":"var(--color-amber-50)"}': { 'value': 'text-amber-50' },
  '{"color":"var(--color-amber-100)"}': { 'value': 'text-amber-100' },
  '{"color":"var(--color-amber-200)"}': { 'value': 'text-amber-200' },
  '{"color":"var(--color-amber-300)"}': { 'value': 'text-amber-300' },
  '{"color":"var(--color-amber-400)"}': { 'value': 'text-amber-400' },
  '{"color":"var(--color-amber-500)"}': { 'value': 'text-amber-500' },
  '{"color":"var(--color-amber-600)"}': { 'value': 'text-amber-600' },
  '{"color":"var(--color-amber-700)"}': { 'value': 'text-amber-700' },
  '{"color":"var(--color-amber-800)"}': { 'value': 'text-amber-800' },
  '{"color":"var(--color-amber-900)"}': { 'value': 'text-amber-900' },
  '{"color":"var(--color-amber-950)"}': { 'value': 'text-amber-950' },
  '{"color":"var(--color-yellow-50)"}': { 'value': 'text-yellow-50' },
  '{"color":"var(--color-yellow-100)"}': { 'value': 'text-yellow-100' },
  '{"color":"var(--color-yellow-200)"}': { 'value': 'text-yellow-200' },
  '{"color":"var(--color-yellow-300)"}': { 'value': 'text-yellow-300' },
  '{"color":"var(--color-yellow-400)"}': { 'value': 'text-yellow-400' },
  '{"color":"var(--color-yellow-500)"}': { 'value': 'text-yellow-500' },
  '{"color":"var(--color-yellow-600)"}': { 'value': 'text-yellow-600' },
  '{"color":"var(--color-yellow-700)"}': { 'value': 'text-yellow-700' },
  '{"color":"var(--color-yellow-800)"}': { 'value': 'text-yellow-800' },
  '{"color":"var(--color-yellow-900)"}': { 'value': 'text-yellow-900' },
  '{"color":"var(--color-yellow-950)"}': { 'value': 'text-yellow-950' },
  '{"color":"var(--color-lime-50)"}': { 'value': 'text-lime-50' },
  '{"color":"var(--color-lime-100)"}': { 'value': 'text-lime-100' },
  '{"color":"var(--color-lime-200)"}': { 'value': 'text-lime-200' },
  '{"color":"var(--color-lime-300)"}': { 'value': 'text-lime-300' },
  '{"color":"var(--color-lime-400)"}': { 'value': 'text-lime-400' },
  '{"color":"var(--color-lime-500)"}': { 'value': 'text-lime-500' },
  '{"color":"var(--color-lime-600)"}': { 'value': 'text-lime-600' },
  '{"color":"var(--color-lime-700)"}': { 'value': 'text-lime-700' },
  '{"color":"var(--color-lime-800)"}': { 'value': 'text-lime-800' },
  '{"color":"var(--color-lime-900)"}': { 'value': 'text-lime-900' },
  '{"color":"var(--color-lime-950)"}': { 'value': 'text-lime-950' },
  '{"color":"var(--color-green-50)"}': { 'value': 'text-green-50' },
  '{"color":"var(--color-green-100)"}': { 'value': 'text-green-100' },
  '{"color":"var(--color-green-200)"}': { 'value': 'text-green-200' },
  '{"color":"var(--color-green-300)"}': { 'value': 'text-green-300' },
  '{"color":"var(--color-green-400)"}': { 'value': 'text-green-400' },
  '{"color":"var(--color-green-500)"}': { 'value': 'text-green-500' },
  '{"color":"var(--color-green-600)"}': { 'value': 'text-green-600' },
  '{"color":"var(--color-green-700)"}': { 'value': 'text-green-700' },
  '{"color":"var(--color-green-800)"}': { 'value': 'text-green-800' },
  '{"color":"var(--color-green-900)"}': { 'value': 'text-green-900' },
  '{"color":"var(--color-green-950)"}': { 'value': 'text-green-950' },
  '{"color":"var(--color-emerald-50)"}': { 'value': 'text-emerald-50' },
  '{"color":"var(--color-emerald-100)"}': { 'value': 'text-emerald-100' },
  '{"color":"var(--color-emerald-200)"}': { 'value': 'text-emerald-200' },
  '{"color":"var(--color-emerald-300)"}': { 'value': 'text-emerald-300' },
  '{"color":"var(--color-emerald-400)"}': { 'value': 'text-emerald-400' },
  '{"color":"var(--color-emerald-500)"}': { 'value': 'text-emerald-500' },
  '{"color":"var(--color-emerald-600)"}': { 'value': 'text-emerald-600' },
  '{"color":"var(--color-emerald-700)"}': { 'value': 'text-emerald-700' },
  '{"color":"var(--color-emerald-800)"}': { 'value': 'text-emerald-800' },
  '{"color":"var(--color-emerald-900)"}': { 'value': 'text-emerald-900' },
  '{"color":"var(--color-emerald-950)"}': { 'value': 'text-emerald-950' },
  '{"color":"var(--color-teal-50)"}': { 'value': 'text-teal-50' },
  '{"color":"var(--color-teal-100)"}': { 'value': 'text-teal-100' },
  '{"color":"var(--color-teal-200)"}': { 'value': 'text-teal-200' },
  '{"color":"var(--color-teal-300)"}': { 'value': 'text-teal-300' },
  '{"color":"var(--color-teal-400)"}': { 'value': 'text-teal-400' },
  '{"color":"var(--color-teal-500)"}': { 'value': 'text-teal-500' },
  '{"color":"var(--color-teal-600)"}': { 'value': 'text-teal-600' },
  '{"color":"var(--color-teal-700)"}': { 'value': 'text-teal-700' },
  '{"color":"var(--color-teal-800)"}': { 'value': 'text-teal-800' },
  '{"color":"var(--color-teal-900)"}': { 'value': 'text-teal-900' },
  '{"color":"var(--color-teal-950)"}': { 'value': 'text-teal-950' },
  '{"color":"var(--color-cyan-50)"}': { 'value': 'text-cyan-50' },
  '{"color":"var(--color-cyan-100)"}': { 'value': 'text-cyan-100' },
  '{"color":"var(--color-cyan-200)"}': { 'value': 'text-cyan-200' },
  '{"color":"var(--color-cyan-300)"}': { 'value': 'text-cyan-300' },
  '{"color":"var(--color-cyan-400)"}': { 'value': 'text-cyan-400' },
  '{"color":"var(--color-cyan-500)"}': { 'value': 'text-cyan-500' },
  '{"color":"var(--color-cyan-600)"}': { 'value': 'text-cyan-600' },
  '{"color":"var(--color-cyan-700)"}': { 'value': 'text-cyan-700' },
  '{"color":"var(--color-cyan-800)"}': { 'value': 'text-cyan-800' },
  '{"color":"var(--color-cyan-900)"}': { 'value': 'text-cyan-900' },
  '{"color":"var(--color-cyan-950)"}': { 'value': 'text-cyan-950' },
  '{"color":"var(--color-sky-50)"}': { 'value': 'text-sky-50' },
  '{"color":"var(--color-sky-100)"}': { 'value': 'text-sky-100' },
  '{"color":"var(--color-sky-200)"}': { 'value': 'text-sky-200' },
  '{"color":"var(--color-sky-300)"}': { 'value': 'text-sky-300' },
  '{"color":"var(--color-sky-400)"}': { 'value': 'text-sky-400' },
  '{"color":"var(--color-sky-500)"}': { 'value': 'text-sky-500' },
  '{"color":"var(--color-sky-600)"}': { 'value': 'text-sky-600' },
  '{"color":"var(--color-sky-700)"}': { 'value': 'text-sky-700' },
  '{"color":"var(--color-sky-800)"}': { 'value': 'text-sky-800' },
  '{"color":"var(--color-sky-900)"}': { 'value': 'text-sky-900' },
  '{"color":"var(--color-sky-950)"}': { 'value': 'text-sky-950' },
  '{"color":"var(--color-blue-50)"}': { 'value': 'text-blue-50' },
  '{"color":"var(--color-blue-100)"}': { 'value': 'text-blue-100' },
  '{"color":"var(--color-blue-200)"}': { 'value': 'text-blue-200' },
  '{"color":"var(--color-blue-300)"}': { 'value': 'text-blue-300' },
  '{"color":"var(--color-blue-400)"}': { 'value': 'text-blue-400' },
  '{"color":"var(--color-blue-500)"}': { 'value': 'text-blue-500' },
  '{"color":"var(--color-blue-600)"}': { 'value': 'text-blue-600' },
  '{"color":"var(--color-blue-700)"}': { 'value': 'text-blue-700' },
  '{"color":"var(--color-blue-800)"}': { 'value': 'text-blue-800' },
  '{"color":"var(--color-blue-900)"}': { 'value': 'text-blue-900' },
  '{"color":"var(--color-blue-950)"}': { 'value': 'text-blue-950' },
  '{"color":"var(--color-indigo-50)"}': { 'value': 'text-indigo-50' },
  '{"color":"var(--color-indigo-100)"}': { 'value': 'text-indigo-100' },
  '{"color":"var(--color-indigo-200)"}': { 'value': 'text-indigo-200' },
  '{"color":"var(--color-indigo-300)"}': { 'value': 'text-indigo-300' },
  '{"color":"var(--color-indigo-400)"}': { 'value': 'text-indigo-400' },
  '{"color":"var(--color-indigo-500)"}': { 'value': 'text-indigo-500' },
  '{"color":"var(--color-indigo-600)"}': { 'value': 'text-indigo-600' },
  '{"color":"var(--color-indigo-700)"}': { 'value': 'text-indigo-700' },
  '{"color":"var(--color-indigo-800)"}': { 'value': 'text-indigo-800' },
  '{"color":"var(--color-indigo-900)"}': { 'value': 'text-indigo-900' },
  '{"color":"var(--color-indigo-950)"}': { 'value': 'text-indigo-950' },
  '{"color":"var(--color-violet-50)"}': { 'value': 'text-violet-50' },
  '{"color":"var(--color-violet-100)"}': { 'value': 'text-violet-100' },
  '{"color":"var(--color-violet-200)"}': { 'value': 'text-violet-200' },
  '{"color":"var(--color-violet-300)"}': { 'value': 'text-violet-300' },
  '{"color":"var(--color-violet-400)"}': { 'value': 'text-violet-400' },
  '{"color":"var(--color-violet-500)"}': { 'value': 'text-violet-500' },
  '{"color":"var(--color-violet-600)"}': { 'value': 'text-violet-600' },
  '{"color":"var(--color-violet-700)"}': { 'value': 'text-violet-700' },
  '{"color":"var(--color-violet-800)"}': { 'value': 'text-violet-800' },
  '{"color":"var(--color-violet-900)"}': { 'value': 'text-violet-900' },
  '{"color":"var(--color-violet-950)"}': { 'value': 'text-violet-950' },
  '{"color":"var(--color-purple-50)"}': { 'value': 'text-purple-50' },
  '{"color":"var(--color-purple-100)"}': { 'value': 'text-purple-100' },
  '{"color":"var(--color-purple-200)"}': { 'value': 'text-purple-200' },
  '{"color":"var(--color-purple-300)"}': { 'value': 'text-purple-300' },
  '{"color":"var(--color-purple-400)"}': { 'value': 'text-purple-400' },
  '{"color":"var(--color-purple-500)"}': { 'value': 'text-purple-500' },
  '{"color":"var(--color-purple-600)"}': { 'value': 'text-purple-600' },
  '{"color":"var(--color-purple-700)"}': { 'value': 'text-purple-700' },
  '{"color":"var(--color-purple-800)"}': { 'value': 'text-purple-800' },
  '{"color":"var(--color-purple-900)"}': { 'value': 'text-purple-900' },
  '{"color":"var(--color-purple-950)"}': { 'value': 'text-purple-950' },
  '{"color":"var(--color-fuchsia-50)"}': { 'value': 'text-fuchsia-50' },
  '{"color":"var(--color-fuchsia-100)"}': { 'value': 'text-fuchsia-100' },
  '{"color":"var(--color-fuchsia-200)"}': { 'value': 'text-fuchsia-200' },
  '{"color":"var(--color-fuchsia-300)"}': { 'value': 'text-fuchsia-300' },
  '{"color":"var(--color-fuchsia-400)"}': { 'value': 'text-fuchsia-400' },
  '{"color":"var(--color-fuchsia-500)"}': { 'value': 'text-fuchsia-500' },
  '{"color":"var(--color-fuchsia-600)"}': { 'value': 'text-fuchsia-600' },
  '{"color":"var(--color-fuchsia-700)"}': { 'value': 'text-fuchsia-700' },
  '{"color":"var(--color-fuchsia-800)"}': { 'value': 'text-fuchsia-800' },
  '{"color":"var(--color-fuchsia-900)"}': { 'value': 'text-fuchsia-900' },
  '{"color":"var(--color-fuchsia-950)"}': { 'value': 'text-fuchsia-950' },
  '{"color":"var(--color-pink-50)"}': { 'value': 'text-pink-50' },
  '{"color":"var(--color-pink-100)"}': { 'value': 'text-pink-100' },
  '{"color":"var(--color-pink-200)"}': { 'value': 'text-pink-200' },
  '{"color":"var(--color-pink-300)"}': { 'value': 'text-pink-300' },
  '{"color":"var(--color-pink-400)"}': { 'value': 'text-pink-400' },
  '{"color":"var(--color-pink-500)"}': { 'value': 'text-pink-500' },
  '{"color":"var(--color-pink-600)"}': { 'value': 'text-pink-600' },
  '{"color":"var(--color-pink-700)"}': { 'value': 'text-pink-700' },
  '{"color":"var(--color-pink-800)"}': { 'value': 'text-pink-800' },
  '{"color":"var(--color-pink-900)"}': { 'value': 'text-pink-900' },
  '{"color":"var(--color-pink-950)"}': { 'value': 'text-pink-950' },
  '{"color":"var(--color-rose-50)"}': { 'value': 'text-rose-50' },
  '{"color":"var(--color-rose-100)"}': { 'value': 'text-rose-100' },
  '{"color":"var(--color-rose-200)"}': { 'value': 'text-rose-200' },
  '{"color":"var(--color-rose-300)"}': { 'value': 'text-rose-300' },
  '{"color":"var(--color-rose-400)"}': { 'value': 'text-rose-400' },
  '{"color":"var(--color-rose-500)"}': { 'value': 'text-rose-500' },
  '{"color":"var(--color-rose-600)"}': { 'value': 'text-rose-600' },
  '{"color":"var(--color-rose-700)"}': { 'value': 'text-rose-700' },
  '{"color":"var(--color-rose-800)"}': { 'value': 'text-rose-800' },
  '{"color":"var(--color-rose-900)"}': { 'value': 'text-rose-900' },
  '{"color":"var(--color-rose-950)"}': { 'value': 'text-rose-950' },
  '{"color":"var(--color-slate-50)"}': { 'value': 'text-slate-50' },
  '{"color":"var(--color-slate-100)"}': { 'value': 'text-slate-100' },
  '{"color":"var(--color-slate-200)"}': { 'value': 'text-slate-200' },
  '{"color":"var(--color-slate-300)"}': { 'value': 'text-slate-300' },
  '{"color":"var(--color-slate-400)"}': { 'value': 'text-slate-400' },
  '{"color":"var(--color-slate-500)"}': { 'value': 'text-slate-500' },
  '{"color":"var(--color-slate-600)"}': { 'value': 'text-slate-600' },
  '{"color":"var(--color-slate-700)"}': { 'value': 'text-slate-700' },
  '{"color":"var(--color-slate-800)"}': { 'value': 'text-slate-800' },
  '{"color":"var(--color-slate-900)"}': { 'value': 'text-slate-900' },
  '{"color":"var(--color-slate-950)"}': { 'value': 'text-slate-950' },
  '{"color":"var(--color-gray-50)"}': { 'value': 'text-gray-50' },
  '{"color":"var(--color-gray-100)"}': { 'value': 'text-gray-100' },
  '{"color":"var(--color-gray-200)"}': { 'value': 'text-gray-200' },
  '{"color":"var(--color-gray-300)"}': { 'value': 'text-gray-300' },
  '{"color":"var(--color-gray-400)"}': { 'value': 'text-gray-400' },
  '{"color":"var(--color-gray-500)"}': { 'value': 'text-gray-500' },
  '{"color":"var(--color-gray-600)"}': { 'value': 'text-gray-600' },
  '{"color":"var(--color-gray-700)"}': { 'value': 'text-gray-700' },
  '{"color":"var(--color-gray-800)"}': { 'value': 'text-gray-800' },
  '{"color":"var(--color-gray-900)"}': { 'value': 'text-gray-900' },
  '{"color":"var(--color-gray-950)"}': { 'value': 'text-gray-950' },
  '{"color":"var(--color-zinc-50)"}': { 'value': 'text-zinc-50' },
  '{"color":"var(--color-zinc-100)"}': { 'value': 'text-zinc-100' },
  '{"color":"var(--color-zinc-200)"}': { 'value': 'text-zinc-200' },
  '{"color":"var(--color-zinc-300)"}': { 'value': 'text-zinc-300' },
  '{"color":"var(--color-zinc-400)"}': { 'value': 'text-zinc-400' },
  '{"color":"var(--color-zinc-500)"}': { 'value': 'text-zinc-500' },
  '{"color":"var(--color-zinc-600)"}': { 'value': 'text-zinc-600' },
  '{"color":"var(--color-zinc-700)"}': { 'value': 'text-zinc-700' },
  '{"color":"var(--color-zinc-800)"}': { 'value': 'text-zinc-800' },
  '{"color":"var(--color-zinc-900)"}': { 'value': 'text-zinc-900' },
  '{"color":"var(--color-zinc-950)"}': { 'value': 'text-zinc-950' },
  '{"color":"var(--color-neutral-50)"}': { 'value': 'text-neutral-50' },
  '{"color":"var(--color-neutral-100)"}': { 'value': 'text-neutral-100' },
  '{"color":"var(--color-neutral-200)"}': { 'value': 'text-neutral-200' },
  '{"color":"var(--color-neutral-300)"}': { 'value': 'text-neutral-300' },
  '{"color":"var(--color-neutral-400)"}': { 'value': 'text-neutral-400' },
  '{"color":"var(--color-neutral-500)"}': { 'value': 'text-neutral-500' },
  '{"color":"var(--color-neutral-600)"}': { 'value': 'text-neutral-600' },
  '{"color":"var(--color-neutral-700)"}': { 'value': 'text-neutral-700' },
  '{"color":"var(--color-neutral-800)"}': { 'value': 'text-neutral-800' },
  '{"color":"var(--color-neutral-900)"}': { 'value': 'text-neutral-900' },
  '{"color":"var(--color-neutral-950)"}': { 'value': 'text-neutral-950' },
  '{"color":"var(--color-stone-50)"}': { 'value': 'text-stone-50' },
  '{"color":"var(--color-stone-100)"}': { 'value': 'text-stone-100' },
  '{"color":"var(--color-stone-200)"}': { 'value': 'text-stone-200' },
  '{"color":"var(--color-stone-300)"}': { 'value': 'text-stone-300' },
  '{"color":"var(--color-stone-400)"}': { 'value': 'text-stone-400' },
  '{"color":"var(--color-stone-500)"}': { 'value': 'text-stone-500' },
  '{"color":"var(--color-stone-600)"}': { 'value': 'text-stone-600' },
  '{"color":"var(--color-stone-700)"}': { 'value': 'text-stone-700' },
  '{"color":"var(--color-stone-800)"}': { 'value': 'text-stone-800' },
  '{"color":"var(--color-stone-900)"}': { 'value': 'text-stone-900' },
  '{"color":"var(--color-stone-950)"}': { 'value': 'text-stone-950' },
  '{"color":"var(<custom-property>)"}': { 'value': 'text-(<custom-property>)' },
  '{"color":"<value>"}': { 'value': 'text-[<value>]' },
  '{"transform":"skewX(<number>deg) skewY(<number>deg)"}': {
    'value': 'skew-<number>',
  },
  '{"transform":"skewX(-<number>deg) skewY(-<number>deg)"}': {
    'value': '-skew-<number>',
  },
  '{"transform":"skewX(var(<custom-property>)) skewY(var(<custom-property>))"}':
    { 'value': 'skew-(<custom-property>)' },
  '{"transform":"skewX(<value>) skewY(<value>)"}': {
    'value': 'skew-[<value>]',
  },
  '{"transform":"skewX(<number>deg))"}': { 'value': 'skew-x-<number>' },
  '{"transform":"skewX(-<number>deg))"}': { 'value': '-skew-x-<number>' },
  '{"transform":"skewX(var(<custom-property>))"}': {
    'value': 'skew-x-(<custom-property>)',
  },
  '{"transform":"skewX(<value>))"}': { 'value': 'skew-x-[<value>]' },
  '{"transform":"skewY(<number>deg)"}': { 'value': 'skew-y-<number>' },
  '{"transform":"skewY(-<number>deg)"}': { 'value': '-skew-y-<number>' },
  '{"transform":"skewY(var(<custom-property>))"}': {
    'value': 'skew-y-(<custom-property>)',
  },
  '{"transform":"skewY(<value>)"}': { 'value': 'skew-y-[<value>]' },
  '{"text-decoration-style":"solid"}': { 'value': 'decoration-solid' },
  '{"text-decoration-style":"double"}': { 'value': 'decoration-double' },
  '{"text-decoration-style":"dotted"}': { 'value': 'decoration-dotted' },
  '{"text-decoration-style":"dashed"}': { 'value': 'decoration-dashed' },
  '{"text-decoration-style":"wavy"}': { 'value': 'decoration-wavy' },
  '{"text-decoration-color":"inherit"}': { 'value': 'decoration-inherit' },
  '{"text-decoration-color":"currentColor"}': { 'value': 'decoration-current' },
  '{"text-decoration-color":"transparent"}': {
    'value': 'decoration-transparent',
  },
  '{"text-decoration-color":"var(--color-black)"}': {
    'value': 'decoration-black',
  },
  '{"text-decoration-color":"var(--color-white)"}': {
    'value': 'decoration-white',
  },
  '{"text-decoration-color":"var(--color-red-50)"}': {
    'value': 'decoration-red-50',
  },
  '{"text-decoration-color":"var(--color-red-100)"}': {
    'value': 'decoration-red-100',
  },
  '{"text-decoration-color":"var(--color-red-200)"}': {
    'value': 'decoration-red-200',
  },
  '{"text-decoration-color":"var(--color-red-300)"}': {
    'value': 'decoration-red-300',
  },
  '{"text-decoration-color":"var(--color-red-400)"}': {
    'value': 'decoration-red-400',
  },
  '{"text-decoration-color":"var(--color-red-500)"}': {
    'value': 'decoration-red-500',
  },
  '{"text-decoration-color":"var(--color-red-600)"}': {
    'value': 'decoration-red-600',
  },
  '{"text-decoration-color":"var(--color-red-700)"}': {
    'value': 'decoration-red-700',
  },
  '{"text-decoration-color":"var(--color-red-800)"}': {
    'value': 'decoration-red-800',
  },
  '{"text-decoration-color":"var(--color-red-900)"}': {
    'value': 'decoration-red-900',
  },
  '{"text-decoration-color":"var(--color-red-950)"}': {
    'value': 'decoration-red-950',
  },
  '{"text-decoration-color":"var(--color-orange-50)"}': {
    'value': 'decoration-orange-50',
  },
  '{"text-decoration-color":"var(--color-orange-100)"}': {
    'value': 'decoration-orange-100',
  },
  '{"text-decoration-color":"var(--color-orange-200)"}': {
    'value': 'decoration-orange-200',
  },
  '{"text-decoration-color":"var(--color-orange-300)"}': {
    'value': 'decoration-orange-300',
  },
  '{"text-decoration-color":"var(--color-orange-400)"}': {
    'value': 'decoration-orange-400',
  },
  '{"text-decoration-color":"var(--color-orange-500)"}': {
    'value': 'decoration-orange-500',
  },
  '{"text-decoration-color":"var(--color-orange-600)"}': {
    'value': 'decoration-orange-600',
  },
  '{"text-decoration-color":"var(--color-orange-700)"}': {
    'value': 'decoration-orange-700',
  },
  '{"text-decoration-color":"var(--color-orange-800)"}': {
    'value': 'decoration-orange-800',
  },
  '{"text-decoration-color":"var(--color-orange-900)"}': {
    'value': 'decoration-orange-900',
  },
  '{"text-decoration-color":"var(--color-orange-950)"}': {
    'value': 'decoration-orange-950',
  },
  '{"text-decoration-color":"var(--color-amber-50)"}': {
    'value': 'decoration-amber-50',
  },
  '{"text-decoration-color":"var(--color-amber-100)"}': {
    'value': 'decoration-amber-100',
  },
  '{"text-decoration-color":"var(--color-amber-200)"}': {
    'value': 'decoration-amber-200',
  },
  '{"text-decoration-color":"var(--color-amber-300)"}': {
    'value': 'decoration-amber-300',
  },
  '{"text-decoration-color":"var(--color-amber-400)"}': {
    'value': 'decoration-amber-400',
  },
  '{"text-decoration-color":"var(--color-amber-500)"}': {
    'value': 'decoration-amber-500',
  },
  '{"text-decoration-color":"var(--color-amber-600)"}': {
    'value': 'decoration-amber-600',
  },
  '{"text-decoration-color":"var(--color-amber-700)"}': {
    'value': 'decoration-amber-700',
  },
  '{"text-decoration-color":"var(--color-amber-800)"}': {
    'value': 'decoration-amber-800',
  },
  '{"text-decoration-color":"var(--color-amber-900)"}': {
    'value': 'decoration-amber-900',
  },
  '{"text-decoration-color":"var(--color-amber-950)"}': {
    'value': 'decoration-amber-950',
  },
  '{"text-decoration-color":"var(--color-yellow-50)"}': {
    'value': 'decoration-yellow-50',
  },
  '{"text-decoration-color":"var(--color-yellow-100)"}': {
    'value': 'decoration-yellow-100',
  },
  '{"text-decoration-color":"var(--color-yellow-200)"}': {
    'value': 'decoration-yellow-200',
  },
  '{"text-decoration-color":"var(--color-yellow-300)"}': {
    'value': 'decoration-yellow-300',
  },
  '{"text-decoration-color":"var(--color-yellow-400)"}': {
    'value': 'decoration-yellow-400',
  },
  '{"text-decoration-color":"var(--color-yellow-500)"}': {
    'value': 'decoration-yellow-500',
  },
  '{"text-decoration-color":"var(--color-yellow-600)"}': {
    'value': 'decoration-yellow-600',
  },
  '{"text-decoration-color":"var(--color-yellow-700)"}': {
    'value': 'decoration-yellow-700',
  },
  '{"text-decoration-color":"var(--color-yellow-800)"}': {
    'value': 'decoration-yellow-800',
  },
  '{"text-decoration-color":"var(--color-yellow-900)"}': {
    'value': 'decoration-yellow-900',
  },
  '{"text-decoration-color":"var(--color-yellow-950)"}': {
    'value': 'decoration-yellow-950',
  },
  '{"text-decoration-color":"var(--color-lime-50)"}': {
    'value': 'decoration-lime-50',
  },
  '{"text-decoration-color":"var(--color-lime-100)"}': {
    'value': 'decoration-lime-100',
  },
  '{"text-decoration-color":"var(--color-lime-200)"}': {
    'value': 'decoration-lime-200',
  },
  '{"text-decoration-color":"var(--color-lime-300)"}': {
    'value': 'decoration-lime-300',
  },
  '{"text-decoration-color":"var(--color-lime-400)"}': {
    'value': 'decoration-lime-400',
  },
  '{"text-decoration-color":"var(--color-lime-500)"}': {
    'value': 'decoration-lime-500',
  },
  '{"text-decoration-color":"var(--color-lime-600)"}': {
    'value': 'decoration-lime-600',
  },
  '{"text-decoration-color":"var(--color-lime-700)"}': {
    'value': 'decoration-lime-700',
  },
  '{"text-decoration-color":"var(--color-lime-800)"}': {
    'value': 'decoration-lime-800',
  },
  '{"text-decoration-color":"var(--color-lime-900)"}': {
    'value': 'decoration-lime-900',
  },
  '{"text-decoration-color":"var(--color-lime-950)"}': {
    'value': 'decoration-lime-950',
  },
  '{"text-decoration-color":"var(--color-green-50)"}': {
    'value': 'decoration-green-50',
  },
  '{"text-decoration-color":"var(--color-green-100)"}': {
    'value': 'decoration-green-100',
  },
  '{"text-decoration-color":"var(--color-green-200)"}': {
    'value': 'decoration-green-200',
  },
  '{"text-decoration-color":"var(--color-green-300)"}': {
    'value': 'decoration-green-300',
  },
  '{"text-decoration-color":"var(--color-green-400)"}': {
    'value': 'decoration-green-400',
  },
  '{"text-decoration-color":"var(--color-green-500)"}': {
    'value': 'decoration-green-500',
  },
  '{"text-decoration-color":"var(--color-green-600)"}': {
    'value': 'decoration-green-600',
  },
  '{"text-decoration-color":"var(--color-green-700)"}': {
    'value': 'decoration-green-700',
  },
  '{"text-decoration-color":"var(--color-green-800)"}': {
    'value': 'decoration-green-800',
  },
  '{"text-decoration-color":"var(--color-green-900)"}': {
    'value': 'decoration-green-900',
  },
  '{"text-decoration-color":"var(--color-green-950)"}': {
    'value': 'decoration-green-950',
  },
  '{"text-decoration-color":"var(--color-emerald-50)"}': {
    'value': 'decoration-emerald-50',
  },
  '{"text-decoration-color":"var(--color-emerald-100)"}': {
    'value': 'decoration-emerald-100',
  },
  '{"text-decoration-color":"var(--color-emerald-200)"}': {
    'value': 'decoration-emerald-200',
  },
  '{"text-decoration-color":"var(--color-emerald-300)"}': {
    'value': 'decoration-emerald-300',
  },
  '{"text-decoration-color":"var(--color-emerald-400)"}': {
    'value': 'decoration-emerald-400',
  },
  '{"text-decoration-color":"var(--color-emerald-500)"}': {
    'value': 'decoration-emerald-500',
  },
  '{"text-decoration-color":"var(--color-emerald-600)"}': {
    'value': 'decoration-emerald-600',
  },
  '{"text-decoration-color":"var(--color-emerald-700)"}': {
    'value': 'decoration-emerald-700',
  },
  '{"text-decoration-color":"var(--color-emerald-800)"}': {
    'value': 'decoration-emerald-800',
  },
  '{"text-decoration-color":"var(--color-emerald-900)"}': {
    'value': 'decoration-emerald-900',
  },
  '{"text-decoration-color":"var(--color-emerald-950)"}': {
    'value': 'decoration-emerald-950',
  },
  '{"text-decoration-color":"var(--color-teal-50)"}': {
    'value': 'decoration-teal-50',
  },
  '{"text-decoration-color":"var(--color-teal-100)"}': {
    'value': 'decoration-teal-100',
  },
  '{"text-decoration-color":"var(--color-teal-200)"}': {
    'value': 'decoration-teal-200',
  },
  '{"text-decoration-color":"var(--color-teal-300)"}': {
    'value': 'decoration-teal-300',
  },
  '{"text-decoration-color":"var(--color-teal-400)"}': {
    'value': 'decoration-teal-400',
  },
  '{"text-decoration-color":"var(--color-teal-500)"}': {
    'value': 'decoration-teal-500',
  },
  '{"text-decoration-color":"var(--color-teal-600)"}': {
    'value': 'decoration-teal-600',
  },
  '{"text-decoration-color":"var(--color-teal-700)"}': {
    'value': 'decoration-teal-700',
  },
  '{"text-decoration-color":"var(--color-teal-800)"}': {
    'value': 'decoration-teal-800',
  },
  '{"text-decoration-color":"var(--color-teal-900)"}': {
    'value': 'decoration-teal-900',
  },
  '{"text-decoration-color":"var(--color-teal-950)"}': {
    'value': 'decoration-teal-950',
  },
  '{"text-decoration-color":"var(--color-cyan-50)"}': {
    'value': 'decoration-cyan-50',
  },
  '{"text-decoration-color":"var(--color-cyan-100)"}': {
    'value': 'decoration-cyan-100',
  },
  '{"text-decoration-color":"var(--color-cyan-200)"}': {
    'value': 'decoration-cyan-200',
  },
  '{"text-decoration-color":"var(--color-cyan-300)"}': {
    'value': 'decoration-cyan-300',
  },
  '{"text-decoration-color":"var(--color-cyan-400)"}': {
    'value': 'decoration-cyan-400',
  },
  '{"text-decoration-color":"var(--color-cyan-500)"}': {
    'value': 'decoration-cyan-500',
  },
  '{"text-decoration-color":"var(--color-cyan-600)"}': {
    'value': 'decoration-cyan-600',
  },
  '{"text-decoration-color":"var(--color-cyan-700)"}': {
    'value': 'decoration-cyan-700',
  },
  '{"text-decoration-color":"var(--color-cyan-800)"}': {
    'value': 'decoration-cyan-800',
  },
  '{"text-decoration-color":"var(--color-cyan-900)"}': {
    'value': 'decoration-cyan-900',
  },
  '{"text-decoration-color":"var(--color-cyan-950)"}': {
    'value': 'decoration-cyan-950',
  },
  '{"text-decoration-color":"var(--color-sky-50)"}': {
    'value': 'decoration-sky-50',
  },
  '{"text-decoration-color":"var(--color-sky-100)"}': {
    'value': 'decoration-sky-100',
  },
  '{"text-decoration-color":"var(--color-sky-200)"}': {
    'value': 'decoration-sky-200',
  },
  '{"text-decoration-color":"var(--color-sky-300)"}': {
    'value': 'decoration-sky-300',
  },
  '{"text-decoration-color":"var(--color-sky-400)"}': {
    'value': 'decoration-sky-400',
  },
  '{"text-decoration-color":"var(--color-sky-500)"}': {
    'value': 'decoration-sky-500',
  },
  '{"text-decoration-color":"var(--color-sky-600)"}': {
    'value': 'decoration-sky-600',
  },
  '{"text-decoration-color":"var(--color-sky-700)"}': {
    'value': 'decoration-sky-700',
  },
  '{"text-decoration-color":"var(--color-sky-800)"}': {
    'value': 'decoration-sky-800',
  },
  '{"text-decoration-color":"var(--color-sky-900)"}': {
    'value': 'decoration-sky-900',
  },
  '{"text-decoration-color":"var(--color-sky-950)"}': {
    'value': 'decoration-sky-950',
  },
  '{"text-decoration-color":"var(--color-blue-50)"}': {
    'value': 'decoration-blue-50',
  },
  '{"text-decoration-color":"var(--color-blue-100)"}': {
    'value': 'decoration-blue-100',
  },
  '{"text-decoration-color":"var(--color-blue-200)"}': {
    'value': 'decoration-blue-200',
  },
  '{"text-decoration-color":"var(--color-blue-300)"}': {
    'value': 'decoration-blue-300',
  },
  '{"text-decoration-color":"var(--color-blue-400)"}': {
    'value': 'decoration-blue-400',
  },
  '{"text-decoration-color":"var(--color-blue-500)"}': {
    'value': 'decoration-blue-500',
  },
  '{"text-decoration-color":"var(--color-blue-600)"}': {
    'value': 'decoration-blue-600',
  },
  '{"text-decoration-color":"var(--color-blue-700)"}': {
    'value': 'decoration-blue-700',
  },
  '{"text-decoration-color":"var(--color-blue-800)"}': {
    'value': 'decoration-blue-800',
  },
  '{"text-decoration-color":"var(--color-blue-900)"}': {
    'value': 'decoration-blue-900',
  },
  '{"text-decoration-color":"var(--color-blue-950)"}': {
    'value': 'decoration-blue-950',
  },
  '{"text-decoration-color":"var(--color-indigo-50)"}': {
    'value': 'decoration-indigo-50',
  },
  '{"text-decoration-color":"var(--color-indigo-100)"}': {
    'value': 'decoration-indigo-100',
  },
  '{"text-decoration-color":"var(--color-indigo-200)"}': {
    'value': 'decoration-indigo-200',
  },
  '{"text-decoration-color":"var(--color-indigo-300)"}': {
    'value': 'decoration-indigo-300',
  },
  '{"text-decoration-color":"var(--color-indigo-400)"}': {
    'value': 'decoration-indigo-400',
  },
  '{"text-decoration-color":"var(--color-indigo-500)"}': {
    'value': 'decoration-indigo-500',
  },
  '{"text-decoration-color":"var(--color-indigo-600)"}': {
    'value': 'decoration-indigo-600',
  },
  '{"text-decoration-color":"var(--color-indigo-700)"}': {
    'value': 'decoration-indigo-700',
  },
  '{"text-decoration-color":"var(--color-indigo-800)"}': {
    'value': 'decoration-indigo-800',
  },
  '{"text-decoration-color":"var(--color-indigo-900)"}': {
    'value': 'decoration-indigo-900',
  },
  '{"text-decoration-color":"var(--color-indigo-950)"}': {
    'value': 'decoration-indigo-950',
  },
  '{"text-decoration-color":"var(--color-violet-50)"}': {
    'value': 'decoration-violet-50',
  },
  '{"text-decoration-color":"var(--color-violet-100)"}': {
    'value': 'decoration-violet-100',
  },
  '{"text-decoration-color":"var(--color-violet-200)"}': {
    'value': 'decoration-violet-200',
  },
  '{"text-decoration-color":"var(--color-violet-300)"}': {
    'value': 'decoration-violet-300',
  },
  '{"text-decoration-color":"var(--color-violet-400)"}': {
    'value': 'decoration-violet-400',
  },
  '{"text-decoration-color":"var(--color-violet-500)"}': {
    'value': 'decoration-violet-500',
  },
  '{"text-decoration-color":"var(--color-violet-600)"}': {
    'value': 'decoration-violet-600',
  },
  '{"text-decoration-color":"var(--color-violet-700)"}': {
    'value': 'decoration-violet-700',
  },
  '{"text-decoration-color":"var(--color-violet-800)"}': {
    'value': 'decoration-violet-800',
  },
  '{"text-decoration-color":"var(--color-violet-900)"}': {
    'value': 'decoration-violet-900',
  },
  '{"text-decoration-color":"var(--color-violet-950)"}': {
    'value': 'decoration-violet-950',
  },
  '{"text-decoration-color":"var(--color-purple-50)"}': {
    'value': 'decoration-purple-50',
  },
  '{"text-decoration-color":"var(--color-purple-100)"}': {
    'value': 'decoration-purple-100',
  },
  '{"text-decoration-color":"var(--color-purple-200)"}': {
    'value': 'decoration-purple-200',
  },
  '{"text-decoration-color":"var(--color-purple-300)"}': {
    'value': 'decoration-purple-300',
  },
  '{"text-decoration-color":"var(--color-purple-400)"}': {
    'value': 'decoration-purple-400',
  },
  '{"text-decoration-color":"var(--color-purple-500)"}': {
    'value': 'decoration-purple-500',
  },
  '{"text-decoration-color":"var(--color-purple-600)"}': {
    'value': 'decoration-purple-600',
  },
  '{"text-decoration-color":"var(--color-purple-700)"}': {
    'value': 'decoration-purple-700',
  },
  '{"text-decoration-color":"var(--color-purple-800)"}': {
    'value': 'decoration-purple-800',
  },
  '{"text-decoration-color":"var(--color-purple-900)"}': {
    'value': 'decoration-purple-900',
  },
  '{"text-decoration-color":"var(--color-purple-950)"}': {
    'value': 'decoration-purple-950',
  },
  '{"text-decoration-color":"var(--color-fuchsia-50)"}': {
    'value': 'decoration-fuchsia-50',
  },
  '{"text-decoration-color":"var(--color-fuchsia-100)"}': {
    'value': 'decoration-fuchsia-100',
  },
  '{"text-decoration-color":"var(--color-fuchsia-200)"}': {
    'value': 'decoration-fuchsia-200',
  },
  '{"text-decoration-color":"var(--color-fuchsia-300)"}': {
    'value': 'decoration-fuchsia-300',
  },
  '{"text-decoration-color":"var(--color-fuchsia-400)"}': {
    'value': 'decoration-fuchsia-400',
  },
  '{"text-decoration-color":"var(--color-fuchsia-500)"}': {
    'value': 'decoration-fuchsia-500',
  },
  '{"text-decoration-color":"var(--color-fuchsia-600)"}': {
    'value': 'decoration-fuchsia-600',
  },
  '{"text-decoration-color":"var(--color-fuchsia-700)"}': {
    'value': 'decoration-fuchsia-700',
  },
  '{"text-decoration-color":"var(--color-fuchsia-800)"}': {
    'value': 'decoration-fuchsia-800',
  },
  '{"text-decoration-color":"var(--color-fuchsia-900)"}': {
    'value': 'decoration-fuchsia-900',
  },
  '{"text-decoration-color":"var(--color-fuchsia-950)"}': {
    'value': 'decoration-fuchsia-950',
  },
  '{"text-decoration-color":"var(--color-pink-50)"}': {
    'value': 'decoration-pink-50',
  },
  '{"text-decoration-color":"var(--color-pink-100)"}': {
    'value': 'decoration-pink-100',
  },
  '{"text-decoration-color":"var(--color-pink-200)"}': {
    'value': 'decoration-pink-200',
  },
  '{"text-decoration-color":"var(--color-pink-300)"}': {
    'value': 'decoration-pink-300',
  },
  '{"text-decoration-color":"var(--color-pink-400)"}': {
    'value': 'decoration-pink-400',
  },
  '{"text-decoration-color":"var(--color-pink-500)"}': {
    'value': 'decoration-pink-500',
  },
  '{"text-decoration-color":"var(--color-pink-600)"}': {
    'value': 'decoration-pink-600',
  },
  '{"text-decoration-color":"var(--color-pink-700)"}': {
    'value': 'decoration-pink-700',
  },
  '{"text-decoration-color":"var(--color-pink-800)"}': {
    'value': 'decoration-pink-800',
  },
  '{"text-decoration-color":"var(--color-pink-900)"}': {
    'value': 'decoration-pink-900',
  },
  '{"text-decoration-color":"var(--color-pink-950)"}': {
    'value': 'decoration-pink-950',
  },
  '{"text-decoration-color":"var(--color-rose-50)"}': {
    'value': 'decoration-rose-50',
  },
  '{"text-decoration-color":"var(--color-rose-100)"}': {
    'value': 'decoration-rose-100',
  },
  '{"text-decoration-color":"var(--color-rose-200)"}': {
    'value': 'decoration-rose-200',
  },
  '{"text-decoration-color":"var(--color-rose-300)"}': {
    'value': 'decoration-rose-300',
  },
  '{"text-decoration-color":"var(--color-rose-400)"}': {
    'value': 'decoration-rose-400',
  },
  '{"text-decoration-color":"var(--color-rose-500)"}': {
    'value': 'decoration-rose-500',
  },
  '{"text-decoration-color":"var(--color-rose-600)"}': {
    'value': 'decoration-rose-600',
  },
  '{"text-decoration-color":"var(--color-rose-700)"}': {
    'value': 'decoration-rose-700',
  },
  '{"text-decoration-color":"var(--color-rose-800)"}': {
    'value': 'decoration-rose-800',
  },
  '{"text-decoration-color":"var(--color-rose-900)"}': {
    'value': 'decoration-rose-900',
  },
  '{"text-decoration-color":"var(--color-rose-950)"}': {
    'value': 'decoration-rose-950',
  },
  '{"text-decoration-color":"var(--color-slate-50)"}': {
    'value': 'decoration-slate-50',
  },
  '{"text-decoration-color":"var(--color-slate-100)"}': {
    'value': 'decoration-slate-100',
  },
  '{"text-decoration-color":"var(--color-slate-200)"}': {
    'value': 'decoration-slate-200',
  },
  '{"text-decoration-color":"var(--color-slate-300)"}': {
    'value': 'decoration-slate-300',
  },
  '{"text-decoration-color":"var(--color-slate-400)"}': {
    'value': 'decoration-slate-400',
  },
  '{"text-decoration-color":"var(--color-slate-500)"}': {
    'value': 'decoration-slate-500',
  },
  '{"text-decoration-color":"var(--color-slate-600)"}': {
    'value': 'decoration-slate-600',
  },
  '{"text-decoration-color":"var(--color-slate-700)"}': {
    'value': 'decoration-slate-700',
  },
  '{"text-decoration-color":"var(--color-slate-800)"}': {
    'value': 'decoration-slate-800',
  },
  '{"text-decoration-color":"var(--color-slate-900)"}': {
    'value': 'decoration-slate-900',
  },
  '{"text-decoration-color":"var(--color-slate-950)"}': {
    'value': 'decoration-slate-950',
  },
  '{"text-decoration-color":"var(--color-gray-50)"}': {
    'value': 'decoration-gray-50',
  },
  '{"text-decoration-color":"var(--color-gray-100)"}': {
    'value': 'decoration-gray-100',
  },
  '{"text-decoration-color":"var(--color-gray-200)"}': {
    'value': 'decoration-gray-200',
  },
  '{"text-decoration-color":"var(--color-gray-300)"}': {
    'value': 'decoration-gray-300',
  },
  '{"text-decoration-color":"var(--color-gray-400)"}': {
    'value': 'decoration-gray-400',
  },
  '{"text-decoration-color":"var(--color-gray-500)"}': {
    'value': 'decoration-gray-500',
  },
  '{"text-decoration-color":"var(--color-gray-600)"}': {
    'value': 'decoration-gray-600',
  },
  '{"text-decoration-color":"var(--color-gray-700)"}': {
    'value': 'decoration-gray-700',
  },
  '{"text-decoration-color":"var(--color-gray-800)"}': {
    'value': 'decoration-gray-800',
  },
  '{"text-decoration-color":"var(--color-gray-900)"}': {
    'value': 'decoration-gray-900',
  },
  '{"text-decoration-color":"var(--color-gray-950)"}': {
    'value': 'decoration-gray-950',
  },
  '{"text-decoration-color":"var(--color-zinc-50)"}': {
    'value': 'decoration-zinc-50',
  },
  '{"text-decoration-color":"var(--color-zinc-100)"}': {
    'value': 'decoration-zinc-100',
  },
  '{"text-decoration-color":"var(--color-zinc-200)"}': {
    'value': 'decoration-zinc-200',
  },
  '{"text-decoration-color":"var(--color-zinc-300)"}': {
    'value': 'decoration-zinc-300',
  },
  '{"text-decoration-color":"var(--color-zinc-400)"}': {
    'value': 'decoration-zinc-400',
  },
  '{"text-decoration-color":"var(--color-zinc-500)"}': {
    'value': 'decoration-zinc-500',
  },
  '{"text-decoration-color":"var(--color-zinc-600)"}': {
    'value': 'decoration-zinc-600',
  },
  '{"text-decoration-color":"var(--color-zinc-700)"}': {
    'value': 'decoration-zinc-700',
  },
  '{"text-decoration-color":"var(--color-zinc-800)"}': {
    'value': 'decoration-zinc-800',
  },
  '{"text-decoration-color":"var(--color-zinc-900)"}': {
    'value': 'decoration-zinc-900',
  },
  '{"text-decoration-color":"var(--color-zinc-950)"}': {
    'value': 'decoration-zinc-950',
  },
  '{"text-decoration-color":"var(--color-neutral-50)"}': {
    'value': 'decoration-neutral-50',
  },
  '{"text-decoration-color":"var(--color-neutral-100)"}': {
    'value': 'decoration-neutral-100',
  },
  '{"text-decoration-color":"var(--color-neutral-200)"}': {
    'value': 'decoration-neutral-200',
  },
  '{"text-decoration-color":"var(--color-neutral-300)"}': {
    'value': 'decoration-neutral-300',
  },
  '{"text-decoration-color":"var(--color-neutral-400)"}': {
    'value': 'decoration-neutral-400',
  },
  '{"text-decoration-color":"var(--color-neutral-500)"}': {
    'value': 'decoration-neutral-500',
  },
  '{"text-decoration-color":"var(--color-neutral-600)"}': {
    'value': 'decoration-neutral-600',
  },
  '{"text-decoration-color":"var(--color-neutral-700)"}': {
    'value': 'decoration-neutral-700',
  },
  '{"text-decoration-color":"var(--color-neutral-800)"}': {
    'value': 'decoration-neutral-800',
  },
  '{"text-decoration-color":"var(--color-neutral-900)"}': {
    'value': 'decoration-neutral-900',
  },
  '{"text-decoration-color":"var(--color-neutral-950)"}': {
    'value': 'decoration-neutral-950',
  },
  '{"text-decoration-color":"var(--color-stone-50)"}': {
    'value': 'decoration-stone-50',
  },
  '{"text-decoration-color":"var(--color-stone-100)"}': {
    'value': 'decoration-stone-100',
  },
  '{"text-decoration-color":"var(--color-stone-200)"}': {
    'value': 'decoration-stone-200',
  },
  '{"text-decoration-color":"var(--color-stone-300)"}': {
    'value': 'decoration-stone-300',
  },
  '{"text-decoration-color":"var(--color-stone-400)"}': {
    'value': 'decoration-stone-400',
  },
  '{"text-decoration-color":"var(--color-stone-500)"}': {
    'value': 'decoration-stone-500',
  },
  '{"text-decoration-color":"var(--color-stone-600)"}': {
    'value': 'decoration-stone-600',
  },
  '{"text-decoration-color":"var(--color-stone-700)"}': {
    'value': 'decoration-stone-700',
  },
  '{"text-decoration-color":"var(--color-stone-800)"}': {
    'value': 'decoration-stone-800',
  },
  '{"text-decoration-color":"var(--color-stone-900)"}': {
    'value': 'decoration-stone-900',
  },
  '{"text-decoration-color":"var(--color-stone-950)"}': {
    'value': 'decoration-stone-950',
  },
  '{"text-decoration-color":"var(<custom-property>)"}': {
    'value': 'decoration-(<custom-property>)',
  },
  '{"text-decoration-color":"<value>"}': { 'value': 'decoration-[<value>]' },
  '{"text-overflow":"ellipsis"}': { 'value': 'text-ellipsis' },
  '{"text-overflow":"clip"}': { 'value': 'text-clip' },
  '{"text-decoration-line":"underline"}': { 'value': 'underline' },
  '{"text-decoration-line":"overline"}': { 'value': 'overline' },
  '{"text-decoration-line":"line-through"}': { 'value': 'line-through' },
  '{"text-decoration-line":"none"}': { 'value': 'no-underline' },
  '{"text-transform":"uppercase"}': { 'value': 'uppercase' },
  '{"text-transform":"lowercase"}': { 'value': 'lowercase' },
  '{"text-transform":"capitalize"}': { 'value': 'capitalize' },
  '{"text-transform":"none"}': { 'value': 'normal-case' },
  '{"backdrop-filter":"blur(var(--blur-xs))"}': { 'value': 'backdrop-blur-xs' },
  '{"backdrop-filter":"blur(var(--blur-sm))"}': { 'value': 'backdrop-blur-sm' },
  '{"backdrop-filter":"blur(var(--blur-md))"}': { 'value': 'backdrop-blur-md' },
  '{"backdrop-filter":"blur(var(--blur-lg))"}': { 'value': 'backdrop-blur-lg' },
  '{"backdrop-filter":"blur(var(--blur-xl))"}': { 'value': 'backdrop-blur-xl' },
  '{"backdrop-filter":"blur(var(--blur-2xl))"}': {
    'value': 'backdrop-blur-2xl',
  },
  '{"backdrop-filter":"blur(var(--blur-3xl))"}': {
    'value': 'backdrop-blur-3xl',
  },
  '{"backdrop-filter":""}': { 'value': 'backdrop-blur-none' },
  '{"backdrop-filter":"blur(var(<custom-property>))"}': {
    'value': 'backdrop-blur-(<custom-property>)',
  },
  '{"backdrop-filter":"blur(<value>)"}': { 'value': 'backdrop-blur-[<value>]' },
  '{"text-decoration-thickness":"<number>px"}': {
    'value': 'decoration-<number>',
  },
  '{"text-decoration-thickness":"from-font"}': {
    'value': 'decoration-from-font',
  },
  '{"text-decoration-thickness":"auto"}': { 'value': 'decoration-auto' },
  '{"text-decoration-thickness":"var(<custom-property>)"}': {
    'value': 'decoration-(length:<custom-property>)',
  },
  '{"text-decoration-thickness":"<value>"}': {
    'value': 'decoration-[<value>]',
  },
  '{"background-repeat":"repeat"}': { 'value': 'bg-repeat' },
  '{"background-repeat":"repeat-x"}': { 'value': 'bg-repeat-x' },
  '{"background-repeat":"repeat-y"}': { 'value': 'bg-repeat-y' },
  '{"background-repeat":"space"}': { 'value': 'bg-repeat-space' },
  '{"background-repeat":"round"}': { 'value': 'bg-repeat-round' },
  '{"background-repeat":"no-repeat"}': { 'value': 'bg-no-repeat' },
  '{"text-wrap":"wrap"}': { 'value': 'text-wrap' },
  '{"text-wrap":"nowrap"}': { 'value': 'text-nowrap' },
  '{"text-wrap":"balance"}': { 'value': 'text-balance' },
  '{"text-wrap":"pretty"}': { 'value': 'text-pretty' },
  '{"transition-behavior":"normal"}': { 'value': 'transition-normal' },
  '{"transition-behavior":"allow-discrete"}': {
    'value': 'transition-discrete',
  },
  '{"outline-style":"solid"}': { 'value': 'outline-solid' },
  '{"outline-style":"dashed"}': { 'value': 'outline-dashed' },
  '{"outline-style":"dotted"}': { 'value': 'outline-dotted' },
  '{"outline-style":"double"}': { 'value': 'outline-double' },
  '{"outline-style":"none"}': { 'value': 'outline-none' },
  '{"outline":"2px solid transparent"}': {
    '{"outline-offset":"2px"}': { 'value': 'outline-hidden' },
  },
  '{"text-underline-offset":"<number>px"}': {
    'value': 'underline-offset-<number>',
  },
  '{"text-underline-offset":"calc(<number>px * -1)"}': {
    'value': '-underline-offset-<number>',
  },
  '{"text-underline-offset":"auto"}': { 'value': 'underline-offset-auto' },
  '{"text-underline-offset":"var(<custom-property>)"}': {
    'value': 'underline-offset-(<custom-property>)',
  },
  '{"text-underline-offset":"<value>"}': {
    'value': 'underline-offset-[<value>]',
  },
  '{"background-image":"<value>"}': { 'value': 'bg-[<value>]' },
  '{"background-image":"var(<custom-property>)"}': {
    'value': 'bg-conic-(<custom-property>)',
  },
  '{"background-image":"none"}': { 'value': 'bg-none' },
  '{"background-image":"linear-gradient(to top, var(--tw-gradient-stops))"}': {
    'value': 'bg-linear-to-t',
  },
  '{"background-image":"linear-gradient(to top right, var(--tw-gradient-stops))"}':
    { 'value': 'bg-linear-to-tr' },
  '{"background-image":"linear-gradient(to right, var(--tw-gradient-stops))"}':
    { 'value': 'bg-linear-to-r' },
  '{"background-image":"linear-gradient(to bottom right, var(--tw-gradient-stops))"}':
    { 'value': 'bg-linear-to-br' },
  '{"background-image":"linear-gradient(to bottom, var(--tw-gradient-stops))"}':
    { 'value': 'bg-linear-to-b' },
  '{"background-image":"linear-gradient(to bottom left, var(--tw-gradient-stops))"}':
    { 'value': 'bg-linear-to-bl' },
  '{"background-image":"linear-gradient(to left, var(--tw-gradient-stops))"}': {
    'value': 'bg-linear-to-l',
  },
  '{"background-image":"linear-gradient(to top left, var(--tw-gradient-stops))"}':
    { 'value': 'bg-linear-to-tl' },
  '{"background-image":"linear-gradient(<angle> in oklab, var(--tw-gradient-stops))"}':
    { 'value': 'bg-linear-<angle>' },
  '{"background-image":"linear-gradient(-<angle> in oklab, var(--tw-gradient-stops))"}':
    { 'value': '-bg-linear-<angle>' },
  '{"background-image":"linear-gradient(var(--tw-gradient-stops, var(<custom-property>)))"}':
    { 'value': 'bg-linear-(<custom-property>)' },
  '{"background-image":"linear-gradient(var(--tw-gradient-stops, <value>))"}': {
    'value': 'bg-linear-[<value>]',
  },
  '{"background-image":"radial-gradient(in oklab, var(--tw-gradient-stops))"}':
    { 'value': 'bg-radial' },
  '{"background-image":"radial-gradient(var(--tw-gradient-stops,  var(<custom-property>)))"}':
    { 'value': 'bg-radial-(<custom-property>)' },
  '{"background-image":"radial-gradient(var(--tw-gradient-stops, <value>))"}': {
    'value': 'bg-radial-[<value>]',
  },
  '{"background-image":"conic-gradient(from <angle> in oklab, var(--tw-gradient-stops))"}':
    { 'value': 'bg-conic-<angle>' },
  '{"background-image":"conic-gradient(from -<angle> in oklab, var(--tw-gradient-stops))"}':
    { 'value': '-bg-conic-<angle>' },
  '{"background-image":"<image>"}': { 'value': 'bg-conic-[<value>]' },
  '{"--tw-gradient-from":"<color>"}': { 'value': 'from-<color>' },
  '{"--tw-gradient-from-position":"<percentage>"}': {
    'value': 'from-<percentage>',
  },
  '{"--tw-gradient-from":"var(<custom-property>)"}': {
    'value': 'from-(<custom-property>)',
  },
  '{"--tw-gradient-from":"<value>"}': { 'value': 'from-[<value>]' },
  '{"--tw-gradient-via":"<color>"}': { 'value': 'via-<color>' },
  '{"--tw-gradient-via-position":"<percentage>"}': {
    'value': 'via-<percentage>',
  },
  '{"--tw-gradient-via":"var(<custom-property>)"}': {
    'value': 'via-(<custom-property>)',
  },
  '{"--tw-gradient-via":"<value>"}': { 'value': 'via-[<value>]' },
  '{"--tw-gradient-to":"<color>"}': { 'value': 'to-<color>' },
  '{"--tw-gradient-to-position":"<percentage>"}': {
    'value': 'to-<percentage>',
  },
  '{"--tw-gradient-to":"var(<custom-property>)"}': {
    'value': 'to-(<custom-property>)',
  },
  '{"--tw-gradient-to":"<value>"}': { 'value': 'to-[<value>]' },
  '{"filter":"none"}': { 'value': 'filter-none' },
  '{"filter":"var(<custom-property>)"}': {
    'value': 'filter-(<custom-property>)',
  },
  '{"filter":"<value>"}': { 'value': 'filter-[<value>]' },
  '{"transition-delay":"<number>ms"}': { 'value': 'delay-<number>' },
  '{"transition-delay":"var(<custom-property>)"}': {
    'value': 'delay-(<custom-property>)',
  },
  '{"transition-delay":"<value>"}': { 'value': 'delay-[<value>]' },
  '{"transform":"var(<custom-property>)"}': {
    'value': 'transform-(<custom-property>)',
  },
  '{"transform":"<value>"}': { 'value': 'transform-[<value>]' },
  '{"transform":"none"}': { 'value': 'transform-none' },
  '{"transform":"translateZ(0) var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)"}':
    { 'value': 'transform-gpu' },
  '{"transform":"var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)"}':
    { 'value': 'transform-cpu' },
  '{"vertical-align":"baseline"}': { 'value': 'align-baseline' },
  '{"vertical-align":"top"}': { 'value': 'align-top' },
  '{"vertical-align":"middle"}': { 'value': 'align-middle' },
  '{"vertical-align":"bottom"}': { 'value': 'align-bottom' },
  '{"vertical-align":"text-top"}': { 'value': 'align-text-top' },
  '{"vertical-align":"text-bottom"}': { 'value': 'align-text-bottom' },
  '{"vertical-align":"sub"}': { 'value': 'align-sub' },
  '{"vertical-align":"super"}': { 'value': 'align-super' },
  '{"vertical-align":"var(<custom-property>)"}': {
    'value': 'align-(<custom-property>)',
  },
  '{"vertical-align":"<value>"}': { 'value': 'align-[<value>]' },
  '{"mask-position":"top left"}': { 'value': 'mask-top-left' },
  '{"mask-position":"top"}': { 'value': 'mask-top' },
  '{"mask-position":"top right"}': { 'value': 'mask-top-right' },
  '{"mask-position":"left"}': { 'value': 'mask-left' },
  '{"mask-position":"center"}': { 'value': 'mask-center' },
  '{"mask-position":"right"}': { 'value': 'mask-right' },
  '{"mask-position":"bottom left"}': { 'value': 'mask-bottom-left' },
  '{"mask-position":"bottom"}': { 'value': 'mask-bottom' },
  '{"mask-position":"bottom right"}': { 'value': 'mask-bottom-right' },
  '{"mask-position":"var(<custom-property>)"}': {
    'value': 'mask-position-(<custom-property>)',
  },
  '{"mask-position":"<value>"}': { 'value': 'mask-position-[<value>]' },
  '{"word-break":"normal"}': { 'value': 'break-normal' },
  '{"word-break":"break-all"}': { 'value': 'break-all' },
  '{"word-break":"keep-all"}': { 'value': 'break-keep' },
  '{"backdrop-filter":"brightness(<number>%)"}': {
    'value': 'backdrop-brightness-<number>',
  },
  '{"backdrop-filter":"brightness(var(<custom-property>))"}': {
    'value': 'backdrop-brightness-(<custom-property>)',
  },
  '{"backdrop-filter":"brightness(<value>)"}': {
    'value': 'backdrop-brightness-[<value>]',
  },
  '{"overflow-wrap":"break-word"}': { 'value': 'wrap-break-word' },
  '{"overflow-wrap":"anywhere"}': { 'value': 'wrap-anywhere' },
  '{"overflow-wrap":"normal"}': { 'value': 'wrap-normal' },
  '{"list-style-type":"disc"}': { 'value': 'list-disc' },
  '{"list-style-type":"decimal"}': { 'value': 'list-decimal' },
  '{"list-style-type":"none"}': { 'value': 'list-none' },
  '{"list-style-type":"var(<custom-property>)"}': {
    'value': 'list-(<custom-property>)',
  },
  '{"list-style-type":"<value>"}': { 'value': 'list-[<value>]' },
  '{"border-color":"inherit"}': { 'value': 'border-inherit' },
  '{"border-color":"currentColor"}': { 'value': 'border-current' },
  '{"border-color":"transparent"}': { 'value': 'border-transparent' },
  '{"border-color":"var(--color-black)"}': { 'value': 'border-black' },
  '{"border-color":"var(--color-white)"}': { 'value': 'border-white' },
  '{"border-color":"var(--color-red-50)"}': { 'value': 'border-red-50' },
  '{"border-color":"var(--color-red-100)"}': { 'value': 'border-red-100' },
  '{"border-color":"var(--color-red-200)"}': { 'value': 'border-red-200' },
  '{"border-color":"var(--color-red-300)"}': { 'value': 'border-red-300' },
  '{"border-color":"var(--color-red-400)"}': { 'value': 'border-red-400' },
  '{"border-color":"var(--color-red-500)"}': { 'value': 'border-red-500' },
  '{"border-color":"var(--color-red-600)"}': { 'value': 'border-red-600' },
  '{"border-color":"var(--color-red-700)"}': { 'value': 'border-red-700' },
  '{"border-color":"var(--color-red-800)"}': { 'value': 'border-red-800' },
  '{"border-color":"var(--color-red-900)"}': { 'value': 'border-red-900' },
  '{"border-color":"var(--color-red-950)"}': { 'value': 'border-red-950' },
  '{"border-color":"var(--color-orange-50)"}': { 'value': 'border-orange-50' },
  '{"border-color":"var(--color-orange-100)"}': {
    'value': 'border-orange-100',
  },
  '{"border-color":"var(--color-orange-200)"}': {
    'value': 'border-orange-200',
  },
  '{"border-color":"var(--color-orange-300)"}': {
    'value': 'border-orange-300',
  },
  '{"border-color":"var(--color-orange-400)"}': {
    'value': 'border-orange-400',
  },
  '{"border-color":"var(--color-orange-500)"}': {
    'value': 'border-orange-500',
  },
  '{"border-color":"var(--color-orange-600)"}': {
    'value': 'border-orange-600',
  },
  '{"border-color":"var(--color-orange-700)"}': {
    'value': 'border-orange-700',
  },
  '{"border-color":"var(--color-orange-800)"}': {
    'value': 'border-orange-800',
  },
  '{"border-color":"var(--color-orange-900)"}': {
    'value': 'border-orange-900',
  },
  '{"border-color":"var(--color-orange-950)"}': {
    'value': 'border-orange-950',
  },
  '{"border-color":"var(--color-amber-50)"}': { 'value': 'border-amber-50' },
  '{"border-color":"var(--color-amber-100)"}': { 'value': 'border-amber-100' },
  '{"border-color":"var(--color-amber-200)"}': { 'value': 'border-amber-200' },
  '{"border-color":"var(--color-amber-300)"}': { 'value': 'border-amber-300' },
  '{"border-color":"var(--color-amber-400)"}': { 'value': 'border-amber-400' },
  '{"border-color":"var(--color-amber-500)"}': { 'value': 'border-amber-500' },
  '{"border-color":"var(--color-amber-600)"}': { 'value': 'border-amber-600' },
  '{"border-color":"var(--color-amber-700)"}': { 'value': 'border-amber-700' },
  '{"border-color":"var(--color-amber-800)"}': { 'value': 'border-amber-800' },
  '{"border-color":"var(--color-amber-900)"}': { 'value': 'border-amber-900' },
  '{"border-color":"var(--color-amber-950)"}': { 'value': 'border-amber-950' },
  '{"border-color":"var(--color-yellow-50)"}': { 'value': 'border-yellow-50' },
  '{"border-color":"var(--color-yellow-100)"}': {
    'value': 'border-yellow-100',
  },
  '{"border-color":"var(--color-yellow-200)"}': {
    'value': 'border-yellow-200',
  },
  '{"border-color":"var(--color-yellow-300)"}': {
    'value': 'border-yellow-300',
  },
  '{"border-color":"var(--color-yellow-400)"}': {
    'value': 'border-yellow-400',
  },
  '{"border-color":"var(--color-yellow-500)"}': {
    'value': 'border-yellow-500',
  },
  '{"border-color":"var(--color-yellow-600)"}': {
    'value': 'border-yellow-600',
  },
  '{"border-color":"var(--color-yellow-700)"}': {
    'value': 'border-yellow-700',
  },
  '{"border-color":"var(--color-yellow-800)"}': {
    'value': 'border-yellow-800',
  },
  '{"border-color":"var(--color-yellow-900)"}': {
    'value': 'border-yellow-900',
  },
  '{"border-color":"var(--color-yellow-950)"}': {
    'value': 'border-yellow-950',
  },
  '{"border-color":"var(--color-lime-50)"}': { 'value': 'border-lime-50' },
  '{"border-color":"var(--color-lime-100)"}': { 'value': 'border-lime-100' },
  '{"border-color":"var(--color-lime-200)"}': { 'value': 'border-lime-200' },
  '{"border-color":"var(--color-lime-300)"}': { 'value': 'border-lime-300' },
  '{"border-color":"var(--color-lime-400)"}': { 'value': 'border-lime-400' },
  '{"border-color":"var(--color-lime-500)"}': { 'value': 'border-lime-500' },
  '{"border-color":"var(--color-lime-600)"}': { 'value': 'border-lime-600' },
  '{"border-color":"var(--color-lime-700)"}': { 'value': 'border-lime-700' },
  '{"border-color":"var(--color-lime-800)"}': { 'value': 'border-lime-800' },
  '{"border-color":"var(--color-lime-900)"}': { 'value': 'border-lime-900' },
  '{"border-color":"var(--color-lime-950)"}': { 'value': 'border-lime-950' },
  '{"border-color":"var(--color-green-50)"}': { 'value': 'border-green-50' },
  '{"border-color":"var(--color-green-100)"}': { 'value': 'border-green-100' },
  '{"border-color":"var(--color-green-200)"}': { 'value': 'border-green-200' },
  '{"border-color":"var(--color-green-300)"}': { 'value': 'border-green-300' },
  '{"border-color":"var(--color-green-400)"}': { 'value': 'border-green-400' },
  '{"border-color":"var(--color-green-500)"}': { 'value': 'border-green-500' },
  '{"border-color":"var(--color-green-600)"}': { 'value': 'border-green-600' },
  '{"border-color":"var(--color-green-700)"}': { 'value': 'border-green-700' },
  '{"border-color":"var(--color-green-800)"}': { 'value': 'border-green-800' },
  '{"border-color":"var(--color-green-900)"}': { 'value': 'border-green-900' },
  '{"border-color":"var(--color-green-950)"}': { 'value': 'border-green-950' },
  '{"border-color":"var(--color-emerald-50)"}': {
    'value': 'border-emerald-50',
  },
  '{"border-color":"var(--color-emerald-100)"}': {
    'value': 'border-emerald-100',
  },
  '{"border-color":"var(--color-emerald-200)"}': {
    'value': 'border-emerald-200',
  },
  '{"border-color":"var(--color-emerald-300)"}': {
    'value': 'border-emerald-300',
  },
  '{"border-color":"var(--color-emerald-400)"}': {
    'value': 'border-emerald-400',
  },
  '{"border-color":"var(--color-emerald-500)"}': {
    'value': 'border-emerald-500',
  },
  '{"border-color":"var(--color-emerald-600)"}': {
    'value': 'border-emerald-600',
  },
  '{"border-color":"var(--color-emerald-700)"}': {
    'value': 'border-emerald-700',
  },
  '{"border-color":"var(--color-emerald-800)"}': {
    'value': 'border-emerald-800',
  },
  '{"border-color":"var(--color-emerald-900)"}': {
    'value': 'border-emerald-900',
  },
  '{"border-color":"var(--color-emerald-950)"}': {
    'value': 'border-emerald-950',
  },
  '{"border-color":"var(--color-teal-50)"}': { 'value': 'border-teal-50' },
  '{"border-color":"var(--color-teal-100)"}': { 'value': 'border-teal-100' },
  '{"border-color":"var(--color-teal-200)"}': { 'value': 'border-teal-200' },
  '{"border-color":"var(--color-teal-300)"}': { 'value': 'border-teal-300' },
  '{"border-color":"var(--color-teal-400)"}': { 'value': 'border-teal-400' },
  '{"border-color":"var(--color-teal-500)"}': { 'value': 'border-teal-500' },
  '{"border-color":"var(--color-teal-600)"}': { 'value': 'border-teal-600' },
  '{"border-color":"var(--color-teal-700)"}': { 'value': 'border-teal-700' },
  '{"border-color":"var(--color-teal-800)"}': { 'value': 'border-teal-800' },
  '{"border-color":"var(--color-teal-900)"}': { 'value': 'border-teal-900' },
  '{"border-color":"var(--color-teal-950)"}': { 'value': 'border-teal-950' },
  '{"border-color":"var(--color-cyan-50)"}': { 'value': 'border-cyan-50' },
  '{"border-color":"var(--color-cyan-100)"}': { 'value': 'border-cyan-100' },
  '{"border-color":"var(--color-cyan-200)"}': { 'value': 'border-cyan-200' },
  '{"border-color":"var(--color-cyan-300)"}': { 'value': 'border-cyan-300' },
  '{"border-color":"var(--color-cyan-400)"}': { 'value': 'border-cyan-400' },
  '{"border-color":"var(--color-cyan-500)"}': { 'value': 'border-cyan-500' },
  '{"border-color":"var(--color-cyan-600)"}': { 'value': 'border-cyan-600' },
  '{"border-color":"var(--color-cyan-700)"}': { 'value': 'border-cyan-700' },
  '{"border-color":"var(--color-cyan-800)"}': { 'value': 'border-cyan-800' },
  '{"border-color":"var(--color-cyan-900)"}': { 'value': 'border-cyan-900' },
  '{"border-color":"var(--color-cyan-950)"}': { 'value': 'border-cyan-950' },
  '{"border-color":"var(--color-sky-50)"}': { 'value': 'border-sky-50' },
  '{"border-color":"var(--color-sky-100)"}': { 'value': 'border-sky-100' },
  '{"border-color":"var(--color-sky-200)"}': { 'value': 'border-sky-200' },
  '{"border-color":"var(--color-sky-300)"}': { 'value': 'border-sky-300' },
  '{"border-color":"var(--color-sky-400)"}': { 'value': 'border-sky-400' },
  '{"border-color":"var(--color-sky-500)"}': { 'value': 'border-sky-500' },
  '{"border-color":"var(--color-sky-600)"}': { 'value': 'border-sky-600' },
  '{"border-color":"var(--color-sky-700)"}': { 'value': 'border-sky-700' },
  '{"border-color":"var(--color-sky-800)"}': { 'value': 'border-sky-800' },
  '{"border-color":"var(--color-sky-900)"}': { 'value': 'border-sky-900' },
  '{"border-color":"var(--color-sky-950)"}': { 'value': 'border-sky-950' },
  '{"border-color":"var(--color-blue-50)"}': { 'value': 'border-blue-50' },
  '{"border-color":"var(--color-blue-100)"}': { 'value': 'border-blue-100' },
  '{"border-color":"var(--color-blue-200)"}': { 'value': 'border-blue-200' },
  '{"border-color":"var(--color-blue-300)"}': { 'value': 'border-blue-300' },
  '{"border-color":"var(--color-blue-400)"}': { 'value': 'border-blue-400' },
  '{"border-color":"var(--color-blue-500)"}': { 'value': 'border-blue-500' },
  '{"border-color":"var(--color-blue-600)"}': { 'value': 'border-blue-600' },
  '{"border-color":"var(--color-blue-700)"}': { 'value': 'border-blue-700' },
  '{"border-color":"var(--color-blue-800)"}': { 'value': 'border-blue-800' },
  '{"border-color":"var(--color-blue-900)"}': { 'value': 'border-blue-900' },
  '{"border-color":"var(--color-blue-950)"}': { 'value': 'border-blue-950' },
  '{"border-color":"var(--color-indigo-50)"}': { 'value': 'border-indigo-50' },
  '{"border-color":"var(--color-indigo-100)"}': {
    'value': 'border-indigo-100',
  },
  '{"border-color":"var(--color-indigo-200)"}': {
    'value': 'border-indigo-200',
  },
  '{"border-color":"var(--color-indigo-300)"}': {
    'value': 'border-indigo-300',
  },
  '{"border-color":"var(--color-indigo-400)"}': {
    'value': 'border-indigo-400',
  },
  '{"border-color":"var(--color-indigo-500)"}': {
    'value': 'border-indigo-500',
  },
  '{"border-color":"var(--color-indigo-600)"}': {
    'value': 'border-indigo-600',
  },
  '{"border-color":"var(--color-indigo-700)"}': {
    'value': 'border-indigo-700',
  },
  '{"border-color":"var(--color-indigo-800)"}': {
    'value': 'border-indigo-800',
  },
  '{"border-color":"var(--color-indigo-900)"}': {
    'value': 'border-indigo-900',
  },
  '{"border-color":"var(--color-indigo-950)"}': {
    'value': 'border-indigo-950',
  },
  '{"border-color":"var(--color-violet-50)"}': { 'value': 'border-violet-50' },
  '{"border-color":"var(--color-violet-100)"}': {
    'value': 'border-violet-100',
  },
  '{"border-color":"var(--color-violet-200)"}': {
    'value': 'border-violet-200',
  },
  '{"border-color":"var(--color-violet-300)"}': {
    'value': 'border-violet-300',
  },
  '{"border-color":"var(--color-violet-400)"}': {
    'value': 'border-violet-400',
  },
  '{"border-color":"var(--color-violet-500)"}': {
    'value': 'border-violet-500',
  },
  '{"border-color":"var(--color-violet-600)"}': {
    'value': 'border-violet-600',
  },
  '{"border-color":"var(--color-violet-700)"}': {
    'value': 'border-violet-700',
  },
  '{"border-color":"var(--color-violet-800)"}': {
    'value': 'border-violet-800',
  },
  '{"border-color":"var(--color-violet-900)"}': {
    'value': 'border-violet-900',
  },
  '{"border-color":"var(--color-violet-950)"}': {
    'value': 'border-violet-950',
  },
  '{"border-color":"var(--color-purple-50)"}': { 'value': 'border-purple-50' },
  '{"border-color":"var(--color-purple-100)"}': {
    'value': 'border-purple-100',
  },
  '{"border-color":"var(--color-purple-200)"}': {
    'value': 'border-purple-200',
  },
  '{"border-color":"var(--color-purple-300)"}': {
    'value': 'border-purple-300',
  },
  '{"border-color":"var(--color-purple-400)"}': {
    'value': 'border-purple-400',
  },
  '{"border-color":"var(--color-purple-500)"}': {
    'value': 'border-purple-500',
  },
  '{"border-color":"var(--color-purple-600)"}': {
    'value': 'border-purple-600',
  },
  '{"border-color":"var(--color-purple-700)"}': {
    'value': 'border-purple-700',
  },
  '{"border-color":"var(--color-purple-800)"}': {
    'value': 'border-purple-800',
  },
  '{"border-color":"var(--color-purple-900)"}': {
    'value': 'border-purple-900',
  },
  '{"border-color":"var(--color-purple-950)"}': {
    'value': 'border-purple-950',
  },
  '{"border-color":"var(--color-fuchsia-50)"}': {
    'value': 'border-fuchsia-50',
  },
  '{"border-color":"var(--color-fuchsia-100)"}': {
    'value': 'border-fuchsia-100',
  },
  '{"border-color":"var(--color-fuchsia-200)"}': {
    'value': 'border-fuchsia-200',
  },
  '{"border-color":"var(--color-fuchsia-300)"}': {
    'value': 'border-fuchsia-300',
  },
  '{"border-color":"var(--color-fuchsia-400)"}': {
    'value': 'border-fuchsia-400',
  },
  '{"border-color":"var(--color-fuchsia-500)"}': {
    'value': 'border-fuchsia-500',
  },
  '{"border-color":"var(--color-fuchsia-600)"}': {
    'value': 'border-fuchsia-600',
  },
  '{"border-color":"var(--color-fuchsia-700)"}': {
    'value': 'border-fuchsia-700',
  },
  '{"border-color":"var(--color-fuchsia-800)"}': {
    'value': 'border-fuchsia-800',
  },
  '{"border-color":"var(--color-fuchsia-900)"}': {
    'value': 'border-fuchsia-900',
  },
  '{"border-color":"var(--color-fuchsia-950)"}': {
    'value': 'border-fuchsia-950',
  },
  '{"border-color":"var(--color-pink-50)"}': { 'value': 'border-pink-50' },
  '{"border-color":"var(--color-pink-100)"}': { 'value': 'border-pink-100' },
  '{"border-color":"var(--color-pink-200)"}': { 'value': 'border-pink-200' },
  '{"border-color":"var(--color-pink-300)"}': { 'value': 'border-pink-300' },
  '{"border-color":"var(--color-pink-400)"}': { 'value': 'border-pink-400' },
  '{"border-color":"var(--color-pink-500)"}': { 'value': 'border-pink-500' },
  '{"border-color":"var(--color-pink-600)"}': { 'value': 'border-pink-600' },
  '{"border-color":"var(--color-pink-700)"}': { 'value': 'border-pink-700' },
  '{"border-color":"var(--color-pink-800)"}': { 'value': 'border-pink-800' },
  '{"border-color":"var(--color-pink-900)"}': { 'value': 'border-pink-900' },
  '{"border-color":"var(--color-pink-950)"}': { 'value': 'border-pink-950' },
  '{"border-color":"var(--color-rose-50)"}': { 'value': 'border-rose-50' },
  '{"border-color":"var(--color-rose-100)"}': { 'value': 'border-rose-100' },
  '{"border-color":"var(--color-rose-200)"}': { 'value': 'border-rose-200' },
  '{"border-color":"var(--color-rose-300)"}': { 'value': 'border-rose-300' },
  '{"border-color":"var(--color-rose-400)"}': { 'value': 'border-rose-400' },
  '{"border-color":"var(--color-rose-500)"}': { 'value': 'border-rose-500' },
  '{"border-color":"var(--color-rose-600)"}': { 'value': 'border-rose-600' },
  '{"border-color":"var(--color-rose-700)"}': { 'value': 'border-rose-700' },
  '{"border-color":"var(--color-rose-800)"}': { 'value': 'border-rose-800' },
  '{"border-color":"var(--color-rose-900)"}': { 'value': 'border-rose-900' },
  '{"border-color":"var(--color-rose-950)"}': { 'value': 'border-rose-950' },
  '{"border-color":"var(--color-slate-50)"}': { 'value': 'border-slate-50' },
  '{"border-color":"var(--color-slate-100)"}': { 'value': 'border-slate-100' },
  '{"border-color":"var(--color-slate-200)"}': { 'value': 'border-slate-200' },
  '{"border-color":"var(--color-slate-300)"}': { 'value': 'border-slate-300' },
  '{"border-color":"var(--color-slate-400)"}': { 'value': 'border-slate-400' },
  '{"border-color":"var(--color-slate-500)"}': { 'value': 'border-slate-500' },
  '{"border-color":"var(--color-slate-600)"}': { 'value': 'border-slate-600' },
  '{"border-color":"var(--color-slate-700)"}': { 'value': 'border-slate-700' },
  '{"border-color":"var(--color-slate-800)"}': { 'value': 'border-slate-800' },
  '{"border-color":"var(--color-slate-900)"}': { 'value': 'border-slate-900' },
  '{"border-color":"var(--color-slate-950)"}': { 'value': 'border-slate-950' },
  '{"border-color":"var(--color-gray-50)"}': { 'value': 'border-gray-50' },
  '{"border-color":"var(--color-gray-100)"}': { 'value': 'border-gray-100' },
  '{"border-color":"var(--color-gray-200)"}': { 'value': 'border-gray-200' },
  '{"border-color":"var(--color-gray-300)"}': { 'value': 'border-gray-300' },
  '{"border-color":"var(--color-gray-400)"}': { 'value': 'border-gray-400' },
  '{"border-color":"var(--color-gray-500)"}': { 'value': 'border-gray-500' },
  '{"border-color":"var(--color-gray-600)"}': { 'value': 'border-gray-600' },
  '{"border-color":"var(--color-gray-700)"}': { 'value': 'border-gray-700' },
  '{"border-color":"var(--color-gray-800)"}': { 'value': 'border-gray-800' },
  '{"border-color":"var(--color-gray-900)"}': { 'value': 'border-gray-900' },
  '{"border-color":"var(--color-gray-950)"}': { 'value': 'border-gray-950' },
  '{"border-color":"var(--color-zinc-50)"}': { 'value': 'border-zinc-50' },
  '{"border-color":"var(--color-zinc-100)"}': { 'value': 'border-zinc-100' },
  '{"border-color":"var(--color-zinc-200)"}': { 'value': 'border-zinc-200' },
  '{"border-color":"var(--color-zinc-300)"}': { 'value': 'border-zinc-300' },
  '{"border-color":"var(--color-zinc-400)"}': { 'value': 'border-zinc-400' },
  '{"border-color":"var(--color-zinc-500)"}': { 'value': 'border-zinc-500' },
  '{"border-color":"var(--color-zinc-600)"}': { 'value': 'border-zinc-600' },
  '{"border-color":"var(--color-zinc-700)"}': { 'value': 'border-zinc-700' },
  '{"border-color":"var(--color-zinc-800)"}': { 'value': 'border-zinc-800' },
  '{"border-color":"var(--color-zinc-900)"}': { 'value': 'border-zinc-900' },
  '{"border-color":"var(--color-zinc-950)"}': { 'value': 'border-zinc-950' },
  '{"border-color":"var(--color-neutral-50)"}': {
    'value': 'border-neutral-50',
  },
  '{"border-color":"var(--color-neutral-100)"}': {
    'value': 'border-neutral-100',
  },
  '{"border-color":"var(--color-neutral-200)"}': {
    'value': 'border-neutral-200',
  },
  '{"border-color":"var(--color-neutral-300)"}': {
    'value': 'border-neutral-300',
  },
  '{"border-color":"var(--color-neutral-400)"}': {
    'value': 'border-neutral-400',
  },
  '{"border-color":"var(--color-neutral-500)"}': {
    'value': 'border-neutral-500',
  },
  '{"border-color":"var(--color-neutral-600)"}': {
    'value': 'border-neutral-600',
  },
  '{"border-color":"var(--color-neutral-700)"}': {
    'value': 'border-neutral-700',
  },
  '{"border-color":"var(--color-neutral-800)"}': {
    'value': 'border-neutral-800',
  },
  '{"border-color":"var(--color-neutral-900)"}': {
    'value': 'border-neutral-900',
  },
  '{"border-color":"var(--color-neutral-950)"}': {
    'value': 'border-neutral-950',
  },
  '{"border-color":"var(--color-stone-50)"}': { 'value': 'border-stone-50' },
  '{"border-color":"var(--color-stone-100)"}': { 'value': 'border-stone-100' },
  '{"border-color":"var(--color-stone-200)"}': { 'value': 'border-stone-200' },
  '{"border-color":"var(--color-stone-300)"}': { 'value': 'border-stone-300' },
  '{"border-color":"var(--color-stone-400)"}': { 'value': 'border-stone-400' },
  '{"border-color":"var(--color-stone-500)"}': { 'value': 'border-stone-500' },
  '{"border-color":"var(--color-stone-600)"}': { 'value': 'border-stone-600' },
  '{"border-color":"var(--color-stone-700)"}': { 'value': 'border-stone-700' },
  '{"border-color":"var(--color-stone-800)"}': { 'value': 'border-stone-800' },
  '{"border-color":"var(--color-stone-900)"}': { 'value': 'border-stone-900' },
  '{"border-color":"var(--color-stone-950)"}': { 'value': 'border-stone-950' },
  '{"border-color":"var(<custom-property>)"}': {
    'value': 'border-(<custom-property>)',
  },
  '{"border-color":"<value>"}': { 'value': 'border-[<value>]' },
  '{"border-inline-color":"inherit"}': { 'value': 'border-x-inherit' },
  '{"border-inline-color":"currentColor"}': { 'value': 'border-x-current' },
  '{"border-inline-color":"transparent"}': { 'value': 'border-x-transparent' },
  '{"border-inline-color":"var(--color-black)"}': { 'value': 'border-x-black' },
  '{"border-inline-color":"var(--color-white)"}': { 'value': 'border-x-white' },
  '{"border-inline-color":"var(--color-red-50)"}': {
    'value': 'border-x-red-50',
  },
  '{"border-inline-color":"var(--color-red-100)"}': {
    'value': 'border-x-red-100',
  },
  '{"border-inline-color":"var(--color-red-200)"}': {
    'value': 'border-x-red-200',
  },
  '{"border-inline-color":"var(--color-red-300)"}': {
    'value': 'border-x-red-300',
  },
  '{"border-inline-color":"var(--color-red-400)"}': {
    'value': 'border-x-red-400',
  },
  '{"border-inline-color":"var(--color-red-500)"}': {
    'value': 'border-x-red-500',
  },
  '{"border-inline-color":"var(--color-red-600)"}': {
    'value': 'border-x-red-600',
  },
  '{"border-inline-color":"var(--color-red-700)"}': {
    'value': 'border-x-red-700',
  },
  '{"border-inline-color":"var(--color-red-800)"}': {
    'value': 'border-x-red-800',
  },
  '{"border-inline-color":"var(--color-red-900)"}': {
    'value': 'border-x-red-900',
  },
  '{"border-inline-color":"var(--color-red-950)"}': {
    'value': 'border-x-red-950',
  },
  '{"border-inline-color":"var(--color-orange-50)"}': {
    'value': 'border-x-orange-50',
  },
  '{"border-inline-color":"var(--color-orange-100)"}': {
    'value': 'border-x-orange-100',
  },
  '{"border-inline-color":"var(--color-orange-200)"}': {
    'value': 'border-x-orange-200',
  },
  '{"border-inline-color":"var(--color-orange-300)"}': {
    'value': 'border-x-orange-300',
  },
  '{"border-inline-color":"var(--color-orange-400)"}': {
    'value': 'border-x-orange-400',
  },
  '{"border-inline-color":"var(--color-orange-500)"}': {
    'value': 'border-x-orange-500',
  },
  '{"border-inline-color":"var(--color-orange-600)"}': {
    'value': 'border-x-orange-600',
  },
  '{"border-inline-color":"var(--color-orange-700)"}': {
    'value': 'border-x-orange-700',
  },
  '{"border-inline-color":"var(--color-orange-800)"}': {
    'value': 'border-x-orange-800',
  },
  '{"border-inline-color":"var(--color-orange-900)"}': {
    'value': 'border-x-orange-900',
  },
  '{"border-inline-color":"var(--color-orange-950)"}': {
    'value': 'border-x-orange-950',
  },
  '{"border-inline-color":"var(--color-amber-50)"}': {
    'value': 'border-x-amber-50',
  },
  '{"border-inline-color":"var(--color-amber-100)"}': {
    'value': 'border-x-amber-100',
  },
  '{"border-inline-color":"var(--color-amber-200)"}': {
    'value': 'border-x-amber-200',
  },
  '{"border-inline-color":"var(--color-amber-300)"}': {
    'value': 'border-x-amber-300',
  },
  '{"border-inline-color":"var(--color-amber-400)"}': {
    'value': 'border-x-amber-400',
  },
  '{"border-inline-color":"var(--color-amber-500)"}': {
    'value': 'border-x-amber-500',
  },
  '{"border-inline-color":"var(--color-amber-600)"}': {
    'value': 'border-x-amber-600',
  },
  '{"border-inline-color":"var(--color-amber-700)"}': {
    'value': 'border-x-amber-700',
  },
  '{"border-inline-color":"var(--color-amber-800)"}': {
    'value': 'border-x-amber-800',
  },
  '{"border-inline-color":"var(--color-amber-900)"}': {
    'value': 'border-x-amber-900',
  },
  '{"border-inline-color":"var(--color-amber-950)"}': {
    'value': 'border-x-amber-950',
  },
  '{"border-inline-color":"var(--color-yellow-50)"}': {
    'value': 'border-x-yellow-50',
  },
  '{"border-inline-color":"var(--color-yellow-100)"}': {
    'value': 'border-x-yellow-100',
  },
  '{"border-inline-color":"var(--color-yellow-200)"}': {
    'value': 'border-x-yellow-200',
  },
  '{"border-inline-color":"var(--color-yellow-300)"}': {
    'value': 'border-x-yellow-300',
  },
  '{"border-inline-color":"var(--color-yellow-400)"}': {
    'value': 'border-x-yellow-400',
  },
  '{"border-inline-color":"var(--color-yellow-500)"}': {
    'value': 'border-x-yellow-500',
  },
  '{"border-inline-color":"var(--color-yellow-600)"}': {
    'value': 'border-x-yellow-600',
  },
  '{"border-inline-color":"var(--color-yellow-700)"}': {
    'value': 'border-x-yellow-700',
  },
  '{"border-inline-color":"var(--color-yellow-800)"}': {
    'value': 'border-x-yellow-800',
  },
  '{"border-inline-color":"var(--color-yellow-900)"}': {
    'value': 'border-x-yellow-900',
  },
  '{"border-inline-color":"var(--color-yellow-950)"}': {
    'value': 'border-x-yellow-950',
  },
  '{"border-inline-color":"var(--color-lime-50)"}': {
    'value': 'border-x-lime-50',
  },
  '{"border-inline-color":"var(--color-lime-100)"}': {
    'value': 'border-x-lime-100',
  },
  '{"border-inline-color":"var(--color-lime-200)"}': {
    'value': 'border-x-lime-200',
  },
  '{"border-inline-color":"var(--color-lime-300)"}': {
    'value': 'border-x-lime-300',
  },
  '{"border-inline-color":"var(--color-lime-400)"}': {
    'value': 'border-x-lime-400',
  },
  '{"border-inline-color":"var(--color-lime-500)"}': {
    'value': 'border-x-lime-500',
  },
  '{"border-inline-color":"var(--color-lime-600)"}': {
    'value': 'border-x-lime-600',
  },
  '{"border-inline-color":"var(--color-lime-700)"}': {
    'value': 'border-x-lime-700',
  },
  '{"border-inline-color":"var(--color-lime-800)"}': {
    'value': 'border-x-lime-800',
  },
  '{"border-inline-color":"var(--color-lime-900)"}': {
    'value': 'border-x-lime-900',
  },
  '{"border-inline-color":"var(--color-lime-950)"}': {
    'value': 'border-x-lime-950',
  },
  '{"border-inline-color":"var(--color-green-50)"}': {
    'value': 'border-x-green-50',
  },
  '{"border-inline-color":"var(--color-green-100)"}': {
    'value': 'border-x-green-100',
  },
  '{"border-inline-color":"var(--color-green-200)"}': {
    'value': 'border-x-green-200',
  },
  '{"border-inline-color":"var(--color-green-300)"}': {
    'value': 'border-x-green-300',
  },
  '{"border-inline-color":"var(--color-green-400)"}': {
    'value': 'border-x-green-400',
  },
  '{"border-inline-color":"var(--color-green-500)"}': {
    'value': 'border-x-green-500',
  },
  '{"border-inline-color":"var(--color-green-600)"}': {
    'value': 'border-x-green-600',
  },
  '{"border-inline-color":"var(--color-green-700)"}': {
    'value': 'border-x-green-700',
  },
  '{"border-inline-color":"var(--color-green-800)"}': {
    'value': 'border-x-green-800',
  },
  '{"border-inline-color":"var(--color-green-900)"}': {
    'value': 'border-x-green-900',
  },
  '{"border-inline-color":"var(--color-green-950)"}': {
    'value': 'border-x-green-950',
  },
  '{"border-inline-color":"var(--color-emerald-50)"}': {
    'value': 'border-x-emerald-50',
  },
  '{"border-inline-color":"var(--color-emerald-100)"}': {
    'value': 'border-x-emerald-100',
  },
  '{"border-inline-color":"var(--color-emerald-200)"}': {
    'value': 'border-x-emerald-200',
  },
  '{"border-inline-color":"var(--color-emerald-300)"}': {
    'value': 'border-x-emerald-300',
  },
  '{"border-inline-color":"var(--color-emerald-400)"}': {
    'value': 'border-x-emerald-400',
  },
  '{"border-inline-color":"var(--color-emerald-500)"}': {
    'value': 'border-x-emerald-500',
  },
  '{"border-inline-color":"var(--color-emerald-600)"}': {
    'value': 'border-x-emerald-600',
  },
  '{"border-inline-color":"var(--color-emerald-700)"}': {
    'value': 'border-x-emerald-700',
  },
  '{"border-inline-color":"var(--color-emerald-800)"}': {
    'value': 'border-x-emerald-800',
  },
  '{"border-inline-color":"var(--color-emerald-900)"}': {
    'value': 'border-x-emerald-900',
  },
  '{"border-inline-color":"var(--color-emerald-950)"}': {
    'value': 'border-x-emerald-950',
  },
  '{"border-inline-color":"var(--color-teal-50)"}': {
    'value': 'border-x-teal-50',
  },
  '{"border-inline-color":"var(--color-teal-100)"}': {
    'value': 'border-x-teal-100',
  },
  '{"border-inline-color":"var(--color-teal-200)"}': {
    'value': 'border-x-teal-200',
  },
  '{"border-inline-color":"var(--color-teal-300)"}': {
    'value': 'border-x-teal-300',
  },
  '{"border-inline-color":"var(--color-teal-400)"}': {
    'value': 'border-x-teal-400',
  },
  '{"border-inline-color":"var(--color-teal-500)"}': {
    'value': 'border-x-teal-500',
  },
  '{"border-inline-color":"var(--color-teal-600)"}': {
    'value': 'border-x-teal-600',
  },
  '{"border-inline-color":"var(--color-teal-700)"}': {
    'value': 'border-x-teal-700',
  },
  '{"border-inline-color":"var(--color-teal-800)"}': {
    'value': 'border-x-teal-800',
  },
  '{"border-inline-color":"var(--color-teal-900)"}': {
    'value': 'border-x-teal-900',
  },
  '{"border-inline-color":"var(--color-teal-950)"}': {
    'value': 'border-x-teal-950',
  },
  '{"border-inline-color":"var(--color-cyan-50)"}': {
    'value': 'border-x-cyan-50',
  },
  '{"border-inline-color":"var(--color-cyan-100)"}': {
    'value': 'border-x-cyan-100',
  },
  '{"border-inline-color":"var(--color-cyan-200)"}': {
    'value': 'border-x-cyan-200',
  },
  '{"border-inline-color":"var(--color-cyan-300)"}': {
    'value': 'border-x-cyan-300',
  },
  '{"border-inline-color":"var(--color-cyan-400)"}': {
    'value': 'border-x-cyan-400',
  },
  '{"border-inline-color":"var(--color-cyan-500)"}': {
    'value': 'border-x-cyan-500',
  },
  '{"border-inline-color":"var(--color-cyan-600)"}': {
    'value': 'border-x-cyan-600',
  },
  '{"border-inline-color":"var(--color-cyan-700)"}': {
    'value': 'border-x-cyan-700',
  },
  '{"border-inline-color":"var(--color-cyan-800)"}': {
    'value': 'border-x-cyan-800',
  },
  '{"border-inline-color":"var(--color-cyan-900)"}': {
    'value': 'border-x-cyan-900',
  },
  '{"border-inline-color":"var(--color-cyan-950)"}': {
    'value': 'border-x-cyan-950',
  },
  '{"border-inline-color":"var(--color-sky-50)"}': {
    'value': 'border-x-sky-50',
  },
  '{"border-inline-color":"var(--color-sky-100)"}': {
    'value': 'border-x-sky-100',
  },
  '{"border-inline-color":"var(--color-sky-200)"}': {
    'value': 'border-x-sky-200',
  },
  '{"border-inline-color":"var(--color-sky-300)"}': {
    'value': 'border-x-sky-300',
  },
  '{"border-inline-color":"var(--color-sky-400)"}': {
    'value': 'border-x-sky-400',
  },
  '{"border-inline-color":"var(--color-sky-500)"}': {
    'value': 'border-x-sky-500',
  },
  '{"border-inline-color":"var(--color-sky-600)"}': {
    'value': 'border-x-sky-600',
  },
  '{"border-inline-color":"var(--color-sky-700)"}': {
    'value': 'border-x-sky-700',
  },
  '{"border-inline-color":"var(--color-sky-800)"}': {
    'value': 'border-x-sky-800',
  },
  '{"border-inline-color":"var(--color-sky-900)"}': {
    'value': 'border-x-sky-900',
  },
  '{"border-inline-color":"var(--color-sky-950)"}': {
    'value': 'border-x-sky-950',
  },
  '{"border-inline-color":"var(--color-blue-50)"}': {
    'value': 'border-x-blue-50',
  },
  '{"border-inline-color":"var(--color-blue-100)"}': {
    'value': 'border-x-blue-100',
  },
  '{"border-inline-color":"var(--color-blue-200)"}': {
    'value': 'border-x-blue-200',
  },
  '{"border-inline-color":"var(--color-blue-300)"}': {
    'value': 'border-x-blue-300',
  },
  '{"border-inline-color":"var(--color-blue-400)"}': {
    'value': 'border-x-blue-400',
  },
  '{"border-inline-color":"var(--color-blue-500)"}': {
    'value': 'border-x-blue-500',
  },
  '{"border-inline-color":"var(--color-blue-600)"}': {
    'value': 'border-x-blue-600',
  },
  '{"border-inline-color":"var(--color-blue-700)"}': {
    'value': 'border-x-blue-700',
  },
  '{"border-inline-color":"var(--color-blue-800)"}': {
    'value': 'border-x-blue-800',
  },
  '{"border-inline-color":"var(--color-blue-900)"}': {
    'value': 'border-x-blue-900',
  },
  '{"border-inline-color":"var(--color-blue-950)"}': {
    'value': 'border-x-blue-950',
  },
  '{"border-inline-color":"var(--color-indigo-50)"}': {
    'value': 'border-x-indigo-50',
  },
  '{"border-inline-color":"var(--color-indigo-100)"}': {
    'value': 'border-x-indigo-100',
  },
  '{"border-inline-color":"var(--color-indigo-200)"}': {
    'value': 'border-x-indigo-200',
  },
  '{"border-inline-color":"var(--color-indigo-300)"}': {
    'value': 'border-x-indigo-300',
  },
  '{"border-inline-color":"var(--color-indigo-400)"}': {
    'value': 'border-x-indigo-400',
  },
  '{"border-inline-color":"var(--color-indigo-500)"}': {
    'value': 'border-x-indigo-500',
  },
  '{"border-inline-color":"var(--color-indigo-600)"}': {
    'value': 'border-x-indigo-600',
  },
  '{"border-inline-color":"var(--color-indigo-700)"}': {
    'value': 'border-x-indigo-700',
  },
  '{"border-inline-color":"var(--color-indigo-800)"}': {
    'value': 'border-x-indigo-800',
  },
  '{"border-inline-color":"var(--color-indigo-900)"}': {
    'value': 'border-x-indigo-900',
  },
  '{"border-inline-color":"var(--color-indigo-950)"}': {
    'value': 'border-x-indigo-950',
  },
  '{"border-inline-color":"var(--color-violet-50)"}': {
    'value': 'border-x-violet-50',
  },
  '{"border-inline-color":"var(--color-violet-100)"}': {
    'value': 'border-x-violet-100',
  },
  '{"border-inline-color":"var(--color-violet-200)"}': {
    'value': 'border-x-violet-200',
  },
  '{"border-inline-color":"var(--color-violet-300)"}': {
    'value': 'border-x-violet-300',
  },
  '{"border-inline-color":"var(--color-violet-400)"}': {
    'value': 'border-x-violet-400',
  },
  '{"border-inline-color":"var(--color-violet-500)"}': {
    'value': 'border-x-violet-500',
  },
  '{"border-inline-color":"var(--color-violet-600)"}': {
    'value': 'border-x-violet-600',
  },
  '{"border-inline-color":"var(--color-violet-700)"}': {
    'value': 'border-x-violet-700',
  },
  '{"border-inline-color":"var(--color-violet-800)"}': {
    'value': 'border-x-violet-800',
  },
  '{"border-inline-color":"var(--color-violet-900)"}': {
    'value': 'border-x-violet-900',
  },
  '{"border-inline-color":"var(--color-violet-950)"}': {
    'value': 'border-x-violet-950',
  },
  '{"border-inline-color":"var(--color-purple-50)"}': {
    'value': 'border-x-purple-50',
  },
  '{"border-inline-color":"var(--color-purple-100)"}': {
    'value': 'border-x-purple-100',
  },
  '{"border-inline-color":"var(--color-purple-200)"}': {
    'value': 'border-x-purple-200',
  },
  '{"border-inline-color":"var(--color-purple-300)"}': {
    'value': 'border-x-purple-300',
  },
  '{"border-inline-color":"var(--color-purple-400)"}': {
    'value': 'border-x-purple-400',
  },
  '{"border-inline-color":"var(--color-purple-500)"}': {
    'value': 'border-x-purple-500',
  },
  '{"border-inline-color":"var(--color-purple-600)"}': {
    'value': 'border-x-purple-600',
  },
  '{"border-inline-color":"var(--color-purple-700)"}': {
    'value': 'border-x-purple-700',
  },
  '{"border-inline-color":"var(--color-purple-800)"}': {
    'value': 'border-x-purple-800',
  },
  '{"border-inline-color":"var(--color-purple-900)"}': {
    'value': 'border-x-purple-900',
  },
  '{"border-inline-color":"var(--color-purple-950)"}': {
    'value': 'border-x-purple-950',
  },
  '{"border-inline-color":"var(--color-fuchsia-50)"}': {
    'value': 'border-x-fuchsia-50',
  },
  '{"border-inline-color":"var(--color-fuchsia-100)"}': {
    'value': 'border-x-fuchsia-100',
  },
  '{"border-inline-color":"var(--color-fuchsia-200)"}': {
    'value': 'border-x-fuchsia-200',
  },
  '{"border-inline-color":"var(--color-fuchsia-300)"}': {
    'value': 'border-x-fuchsia-300',
  },
  '{"border-inline-color":"var(--color-fuchsia-400)"}': {
    'value': 'border-x-fuchsia-400',
  },
  '{"border-inline-color":"var(--color-fuchsia-500)"}': {
    'value': 'border-x-fuchsia-500',
  },
  '{"border-inline-color":"var(--color-fuchsia-600)"}': {
    'value': 'border-x-fuchsia-600',
  },
  '{"border-inline-color":"var(--color-fuchsia-700)"}': {
    'value': 'border-x-fuchsia-700',
  },
  '{"border-inline-color":"var(--color-fuchsia-800)"}': {
    'value': 'border-x-fuchsia-800',
  },
  '{"border-inline-color":"var(--color-fuchsia-900)"}': {
    'value': 'border-x-fuchsia-900',
  },
  '{"border-inline-color":"var(--color-fuchsia-950)"}': {
    'value': 'border-x-fuchsia-950',
  },
  '{"border-inline-color":"var(--color-pink-50)"}': {
    'value': 'border-x-pink-50',
  },
  '{"border-inline-color":"var(--color-pink-100)"}': {
    'value': 'border-x-pink-100',
  },
  '{"border-inline-color":"var(--color-pink-200)"}': {
    'value': 'border-x-pink-200',
  },
  '{"border-inline-color":"var(--color-pink-300)"}': {
    'value': 'border-x-pink-300',
  },
  '{"border-inline-color":"var(--color-pink-400)"}': {
    'value': 'border-x-pink-400',
  },
  '{"border-inline-color":"var(--color-pink-500)"}': {
    'value': 'border-x-pink-500',
  },
  '{"border-inline-color":"var(--color-pink-600)"}': {
    'value': 'border-x-pink-600',
  },
  '{"border-inline-color":"var(--color-pink-700)"}': {
    'value': 'border-x-pink-700',
  },
  '{"border-inline-color":"var(--color-pink-800)"}': {
    'value': 'border-x-pink-800',
  },
  '{"border-inline-color":"var(--color-pink-900)"}': {
    'value': 'border-x-pink-900',
  },
  '{"border-inline-color":"var(--color-pink-950)"}': {
    'value': 'border-x-pink-950',
  },
  '{"border-inline-color":"var(--color-rose-50)"}': {
    'value': 'border-x-rose-50',
  },
  '{"border-inline-color":"var(--color-rose-100)"}': {
    'value': 'border-x-rose-100',
  },
  '{"border-inline-color":"var(--color-rose-200)"}': {
    'value': 'border-x-rose-200',
  },
  '{"border-inline-color":"var(--color-rose-300)"}': {
    'value': 'border-x-rose-300',
  },
  '{"border-inline-color":"var(--color-rose-400)"}': {
    'value': 'border-x-rose-400',
  },
  '{"border-inline-color":"var(--color-rose-500)"}': {
    'value': 'border-x-rose-500',
  },
  '{"border-inline-color":"var(--color-rose-600)"}': {
    'value': 'border-x-rose-600',
  },
  '{"border-inline-color":"var(--color-rose-700)"}': {
    'value': 'border-x-rose-700',
  },
  '{"border-inline-color":"var(--color-rose-800)"}': {
    'value': 'border-x-rose-800',
  },
  '{"border-inline-color":"var(--color-rose-900)"}': {
    'value': 'border-x-rose-900',
  },
  '{"border-inline-color":"var(--color-rose-950)"}': {
    'value': 'border-x-rose-950',
  },
  '{"border-inline-color":"var(--color-slate-50)"}': {
    'value': 'border-x-slate-50',
  },
  '{"border-inline-color":"var(--color-slate-100)"}': {
    'value': 'border-x-slate-100',
  },
  '{"border-inline-color":"var(--color-slate-200)"}': {
    'value': 'border-x-slate-200',
  },
  '{"border-inline-color":"var(--color-slate-300)"}': {
    'value': 'border-x-slate-300',
  },
  '{"border-inline-color":"var(--color-slate-400)"}': {
    'value': 'border-x-slate-400',
  },
  '{"border-inline-color":"var(--color-slate-500)"}': {
    'value': 'border-x-slate-500',
  },
  '{"border-inline-color":"var(--color-slate-600)"}': {
    'value': 'border-x-slate-600',
  },
  '{"border-inline-color":"var(--color-slate-700)"}': {
    'value': 'border-x-slate-700',
  },
  '{"border-inline-color":"var(--color-slate-800)"}': {
    'value': 'border-x-slate-800',
  },
  '{"border-inline-color":"var(--color-slate-900)"}': {
    'value': 'border-x-slate-900',
  },
  '{"border-inline-color":"var(--color-slate-950)"}': {
    'value': 'border-x-slate-950',
  },
  '{"border-inline-color":"var(--color-gray-50)"}': {
    'value': 'border-x-gray-50',
  },
  '{"border-inline-color":"var(--color-gray-100)"}': {
    'value': 'border-x-gray-100',
  },
  '{"border-inline-color":"var(--color-gray-200)"}': {
    'value': 'border-x-gray-200',
  },
  '{"border-inline-color":"var(--color-gray-300)"}': {
    'value': 'border-x-gray-300',
  },
  '{"border-inline-color":"var(--color-gray-400)"}': {
    'value': 'border-x-gray-400',
  },
  '{"border-inline-color":"var(--color-gray-500)"}': {
    'value': 'border-x-gray-500',
  },
  '{"border-inline-color":"var(--color-gray-600)"}': {
    'value': 'border-x-gray-600',
  },
  '{"border-inline-color":"var(--color-gray-700)"}': {
    'value': 'border-x-gray-700',
  },
  '{"border-inline-color":"var(--color-gray-800)"}': {
    'value': 'border-x-gray-800',
  },
  '{"border-inline-color":"var(--color-gray-900)"}': {
    'value': 'border-x-gray-900',
  },
  '{"border-inline-color":"var(--color-gray-950)"}': {
    'value': 'border-x-gray-950',
  },
  '{"border-inline-color":"var(--color-zinc-50)"}': {
    'value': 'border-x-zinc-50',
  },
  '{"border-inline-color":"var(--color-zinc-100)"}': {
    'value': 'border-x-zinc-100',
  },
  '{"border-inline-color":"var(--color-zinc-200)"}': {
    'value': 'border-x-zinc-200',
  },
  '{"border-inline-color":"var(--color-zinc-300)"}': {
    'value': 'border-x-zinc-300',
  },
  '{"border-inline-color":"var(--color-zinc-400)"}': {
    'value': 'border-x-zinc-400',
  },
  '{"border-inline-color":"var(--color-zinc-500)"}': {
    'value': 'border-x-zinc-500',
  },
  '{"border-inline-color":"var(--color-zinc-600)"}': {
    'value': 'border-x-zinc-600',
  },
  '{"border-inline-color":"var(--color-zinc-700)"}': {
    'value': 'border-x-zinc-700',
  },
  '{"border-inline-color":"var(--color-zinc-800)"}': {
    'value': 'border-x-zinc-800',
  },
  '{"border-inline-color":"var(--color-zinc-900)"}': {
    'value': 'border-x-zinc-900',
  },
  '{"border-inline-color":"var(--color-zinc-950)"}': {
    'value': 'border-x-zinc-950',
  },
  '{"border-inline-color":"var(--color-neutral-50)"}': {
    'value': 'border-x-neutral-50',
  },
  '{"border-inline-color":"var(--color-neutral-100)"}': {
    'value': 'border-x-neutral-100',
  },
  '{"border-inline-color":"var(--color-neutral-200)"}': {
    'value': 'border-x-neutral-200',
  },
  '{"border-inline-color":"var(--color-neutral-300)"}': {
    'value': 'border-x-neutral-300',
  },
  '{"border-inline-color":"var(--color-neutral-400)"}': {
    'value': 'border-x-neutral-400',
  },
  '{"border-inline-color":"var(--color-neutral-500)"}': {
    'value': 'border-x-neutral-500',
  },
  '{"border-inline-color":"var(--color-neutral-600)"}': {
    'value': 'border-x-neutral-600',
  },
  '{"border-inline-color":"var(--color-neutral-700)"}': {
    'value': 'border-x-neutral-700',
  },
  '{"border-inline-color":"var(--color-neutral-800)"}': {
    'value': 'border-x-neutral-800',
  },
  '{"border-inline-color":"var(--color-neutral-900)"}': {
    'value': 'border-x-neutral-900',
  },
  '{"border-inline-color":"var(--color-neutral-950)"}': {
    'value': 'border-x-neutral-950',
  },
  '{"border-inline-color":"var(--color-stone-50)"}': {
    'value': 'border-x-stone-50',
  },
  '{"border-inline-color":"var(--color-stone-100)"}': {
    'value': 'border-x-stone-100',
  },
  '{"border-inline-color":"var(--color-stone-200)"}': {
    'value': 'border-x-stone-200',
  },
  '{"border-inline-color":"var(--color-stone-300)"}': {
    'value': 'border-x-stone-300',
  },
  '{"border-inline-color":"var(--color-stone-400)"}': {
    'value': 'border-x-stone-400',
  },
  '{"border-inline-color":"var(--color-stone-500)"}': {
    'value': 'border-x-stone-500',
  },
  '{"border-inline-color":"var(--color-stone-600)"}': {
    'value': 'border-x-stone-600',
  },
  '{"border-inline-color":"var(--color-stone-700)"}': {
    'value': 'border-x-stone-700',
  },
  '{"border-inline-color":"var(--color-stone-800)"}': {
    'value': 'border-x-stone-800',
  },
  '{"border-inline-color":"var(--color-stone-900)"}': {
    'value': 'border-x-stone-900',
  },
  '{"border-inline-color":"var(--color-stone-950)"}': {
    'value': 'border-x-stone-950',
  },
  '{"border-inline-color":"var(<custom-property>)"}': {
    'value': 'border-x-(<custom-property>)',
  },
  '{"border-inline-color":"<value>"}': { 'value': 'border-x-[<value>]' },
  '{"border-block-color":"inherit"}': { 'value': 'border-y-inherit' },
  '{"border-block-color":"currentColor"}': { 'value': 'border-y-current' },
  '{"border-block-color":"transparent"}': { 'value': 'border-y-transparent' },
  '{"border-block-color":"var(--color-black)"}': { 'value': 'border-y-black' },
  '{"border-block-color":"var(--color-white)"}': { 'value': 'border-y-white' },
  '{"border-block-color":"var(--color-red-50)"}': {
    'value': 'border-y-red-50',
  },
  '{"border-block-color":"var(--color-red-100)"}': {
    'value': 'border-y-red-100',
  },
  '{"border-block-color":"var(--color-red-200)"}': {
    'value': 'border-y-red-200',
  },
  '{"border-block-color":"var(--color-red-300)"}': {
    'value': 'border-y-red-300',
  },
  '{"border-block-color":"var(--color-red-400)"}': {
    'value': 'border-y-red-400',
  },
  '{"border-block-color":"var(--color-red-500)"}': {
    'value': 'border-y-red-500',
  },
  '{"border-block-color":"var(--color-red-600)"}': {
    'value': 'border-y-red-600',
  },
  '{"border-block-color":"var(--color-red-700)"}': {
    'value': 'border-y-red-700',
  },
  '{"border-block-color":"var(--color-red-800)"}': {
    'value': 'border-y-red-800',
  },
  '{"border-block-color":"var(--color-red-900)"}': {
    'value': 'border-y-red-900',
  },
  '{"border-block-color":"var(--color-red-950)"}': {
    'value': 'border-y-red-950',
  },
  '{"border-block-color":"var(--color-orange-50)"}': {
    'value': 'border-y-orange-50',
  },
  '{"border-block-color":"var(--color-orange-100)"}': {
    'value': 'border-y-orange-100',
  },
  '{"border-block-color":"var(--color-orange-200)"}': {
    'value': 'border-y-orange-200',
  },
  '{"border-block-color":"var(--color-orange-300)"}': {
    'value': 'border-y-orange-300',
  },
  '{"border-block-color":"var(--color-orange-400)"}': {
    'value': 'border-y-orange-400',
  },
  '{"border-block-color":"var(--color-orange-500)"}': {
    'value': 'border-y-orange-500',
  },
  '{"border-block-color":"var(--color-orange-600)"}': {
    'value': 'border-y-orange-600',
  },
  '{"border-block-color":"var(--color-orange-700)"}': {
    'value': 'border-y-orange-700',
  },
  '{"border-block-color":"var(--color-orange-800)"}': {
    'value': 'border-y-orange-800',
  },
  '{"border-block-color":"var(--color-orange-900)"}': {
    'value': 'border-y-orange-900',
  },
  '{"border-block-color":"var(--color-orange-950)"}': {
    'value': 'border-y-orange-950',
  },
  '{"border-block-color":"var(--color-amber-50)"}': {
    'value': 'border-y-amber-50',
  },
  '{"border-block-color":"var(--color-amber-100)"}': {
    'value': 'border-y-amber-100',
  },
  '{"border-block-color":"var(--color-amber-200)"}': {
    'value': 'border-y-amber-200',
  },
  '{"border-block-color":"var(--color-amber-300)"}': {
    'value': 'border-y-amber-300',
  },
  '{"border-block-color":"var(--color-amber-400)"}': {
    'value': 'border-y-amber-400',
  },
  '{"border-block-color":"var(--color-amber-500)"}': {
    'value': 'border-y-amber-500',
  },
  '{"border-block-color":"var(--color-amber-600)"}': {
    'value': 'border-y-amber-600',
  },
  '{"border-block-color":"var(--color-amber-700)"}': {
    'value': 'border-y-amber-700',
  },
  '{"border-block-color":"var(--color-amber-800)"}': {
    'value': 'border-y-amber-800',
  },
  '{"border-block-color":"var(--color-amber-900)"}': {
    'value': 'border-y-amber-900',
  },
  '{"border-block-color":"var(--color-amber-950)"}': {
    'value': 'border-y-amber-950',
  },
  '{"border-block-color":"var(--color-yellow-50)"}': {
    'value': 'border-y-yellow-50',
  },
  '{"border-block-color":"var(--color-yellow-100)"}': {
    'value': 'border-y-yellow-100',
  },
  '{"border-block-color":"var(--color-yellow-200)"}': {
    'value': 'border-y-yellow-200',
  },
  '{"border-block-color":"var(--color-yellow-300)"}': {
    'value': 'border-y-yellow-300',
  },
  '{"border-block-color":"var(--color-yellow-400)"}': {
    'value': 'border-y-yellow-400',
  },
  '{"border-block-color":"var(--color-yellow-500)"}': {
    'value': 'border-y-yellow-500',
  },
  '{"border-block-color":"var(--color-yellow-600)"}': {
    'value': 'border-y-yellow-600',
  },
  '{"border-block-color":"var(--color-yellow-700)"}': {
    'value': 'border-y-yellow-700',
  },
  '{"border-block-color":"var(--color-yellow-800)"}': {
    'value': 'border-y-yellow-800',
  },
  '{"border-block-color":"var(--color-yellow-900)"}': {
    'value': 'border-y-yellow-900',
  },
  '{"border-block-color":"var(--color-yellow-950)"}': {
    'value': 'border-y-yellow-950',
  },
  '{"border-block-color":"var(--color-lime-50)"}': {
    'value': 'border-y-lime-50',
  },
  '{"border-block-color":"var(--color-lime-100)"}': {
    'value': 'border-y-lime-100',
  },
  '{"border-block-color":"var(--color-lime-200)"}': {
    'value': 'border-y-lime-200',
  },
  '{"border-block-color":"var(--color-lime-300)"}': {
    'value': 'border-y-lime-300',
  },
  '{"border-block-color":"var(--color-lime-400)"}': {
    'value': 'border-y-lime-400',
  },
  '{"border-block-color":"var(--color-lime-500)"}': {
    'value': 'border-y-lime-500',
  },
  '{"border-block-color":"var(--color-lime-600)"}': {
    'value': 'border-y-lime-600',
  },
  '{"border-block-color":"var(--color-lime-700)"}': {
    'value': 'border-y-lime-700',
  },
  '{"border-block-color":"var(--color-lime-800)"}': {
    'value': 'border-y-lime-800',
  },
  '{"border-block-color":"var(--color-lime-900)"}': {
    'value': 'border-y-lime-900',
  },
  '{"border-block-color":"var(--color-lime-950)"}': {
    'value': 'border-y-lime-950',
  },
  '{"border-block-color":"var(--color-green-50)"}': {
    'value': 'border-y-green-50',
  },
  '{"border-block-color":"var(--color-green-100)"}': {
    'value': 'border-y-green-100',
  },
  '{"border-block-color":"var(--color-green-200)"}': {
    'value': 'border-y-green-200',
  },
  '{"border-block-color":"var(--color-green-300)"}': {
    'value': 'border-y-green-300',
  },
  '{"border-block-color":"var(--color-green-400)"}': {
    'value': 'border-y-green-400',
  },
  '{"border-block-color":"var(--color-green-500)"}': {
    'value': 'border-y-green-500',
  },
  '{"border-block-color":"var(--color-green-600)"}': {
    'value': 'border-y-green-600',
  },
  '{"border-block-color":"var(--color-green-700)"}': {
    'value': 'border-y-green-700',
  },
  '{"border-block-color":"var(--color-green-800)"}': {
    'value': 'border-y-green-800',
  },
  '{"border-block-color":"var(--color-green-900)"}': {
    'value': 'border-y-green-900',
  },
  '{"border-block-color":"var(--color-green-950)"}': {
    'value': 'border-y-green-950',
  },
  '{"border-block-color":"var(--color-emerald-50)"}': {
    'value': 'border-y-emerald-50',
  },
  '{"border-block-color":"var(--color-emerald-100)"}': {
    'value': 'border-y-emerald-100',
  },
  '{"border-block-color":"var(--color-emerald-200)"}': {
    'value': 'border-y-emerald-200',
  },
  '{"border-block-color":"var(--color-emerald-300)"}': {
    'value': 'border-y-emerald-300',
  },
  '{"border-block-color":"var(--color-emerald-400)"}': {
    'value': 'border-y-emerald-400',
  },
  '{"border-block-color":"var(--color-emerald-500)"}': {
    'value': 'border-y-emerald-500',
  },
  '{"border-block-color":"var(--color-emerald-600)"}': {
    'value': 'border-y-emerald-600',
  },
  '{"border-block-color":"var(--color-emerald-700)"}': {
    'value': 'border-y-emerald-700',
  },
  '{"border-block-color":"var(--color-emerald-800)"}': {
    'value': 'border-y-emerald-800',
  },
  '{"border-block-color":"var(--color-emerald-900)"}': {
    'value': 'border-y-emerald-900',
  },
  '{"border-block-color":"var(--color-emerald-950)"}': {
    'value': 'border-y-emerald-950',
  },
  '{"border-block-color":"var(--color-teal-50)"}': {
    'value': 'border-y-teal-50',
  },
  '{"border-block-color":"var(--color-teal-100)"}': {
    'value': 'border-y-teal-100',
  },
  '{"border-block-color":"var(--color-teal-200)"}': {
    'value': 'border-y-teal-200',
  },
  '{"border-block-color":"var(--color-teal-300)"}': {
    'value': 'border-y-teal-300',
  },
  '{"border-block-color":"var(--color-teal-400)"}': {
    'value': 'border-y-teal-400',
  },
  '{"border-block-color":"var(--color-teal-500)"}': {
    'value': 'border-y-teal-500',
  },
  '{"border-block-color":"var(--color-teal-600)"}': {
    'value': 'border-y-teal-600',
  },
  '{"border-block-color":"var(--color-teal-700)"}': {
    'value': 'border-y-teal-700',
  },
  '{"border-block-color":"var(--color-teal-800)"}': {
    'value': 'border-y-teal-800',
  },
  '{"border-block-color":"var(--color-teal-900)"}': {
    'value': 'border-y-teal-900',
  },
  '{"border-block-color":"var(--color-teal-950)"}': {
    'value': 'border-y-teal-950',
  },
  '{"border-block-color":"var(--color-cyan-50)"}': {
    'value': 'border-y-cyan-50',
  },
  '{"border-block-color":"var(--color-cyan-100)"}': {
    'value': 'border-y-cyan-100',
  },
  '{"border-block-color":"var(--color-cyan-200)"}': {
    'value': 'border-y-cyan-200',
  },
  '{"border-block-color":"var(--color-cyan-300)"}': {
    'value': 'border-y-cyan-300',
  },
  '{"border-block-color":"var(--color-cyan-400)"}': {
    'value': 'border-y-cyan-400',
  },
  '{"border-block-color":"var(--color-cyan-500)"}': {
    'value': 'border-y-cyan-500',
  },
  '{"border-block-color":"var(--color-cyan-600)"}': {
    'value': 'border-y-cyan-600',
  },
  '{"border-block-color":"var(--color-cyan-700)"}': {
    'value': 'border-y-cyan-700',
  },
  '{"border-block-color":"var(--color-cyan-800)"}': {
    'value': 'border-y-cyan-800',
  },
  '{"border-block-color":"var(--color-cyan-900)"}': {
    'value': 'border-y-cyan-900',
  },
  '{"border-block-color":"var(--color-cyan-950)"}': {
    'value': 'border-y-cyan-950',
  },
  '{"border-block-color":"var(--color-sky-50)"}': {
    'value': 'border-y-sky-50',
  },
  '{"border-block-color":"var(--color-sky-100)"}': {
    'value': 'border-y-sky-100',
  },
  '{"border-block-color":"var(--color-sky-200)"}': {
    'value': 'border-y-sky-200',
  },
  '{"border-block-color":"var(--color-sky-300)"}': {
    'value': 'border-y-sky-300',
  },
  '{"border-block-color":"var(--color-sky-400)"}': {
    'value': 'border-y-sky-400',
  },
  '{"border-block-color":"var(--color-sky-500)"}': {
    'value': 'border-y-sky-500',
  },
  '{"border-block-color":"var(--color-sky-600)"}': {
    'value': 'border-y-sky-600',
  },
  '{"border-block-color":"var(--color-sky-700)"}': {
    'value': 'border-y-sky-700',
  },
  '{"border-block-color":"var(--color-sky-800)"}': {
    'value': 'border-y-sky-800',
  },
  '{"border-block-color":"var(--color-sky-900)"}': {
    'value': 'border-y-sky-900',
  },
  '{"border-block-color":"var(--color-sky-950)"}': {
    'value': 'border-y-sky-950',
  },
  '{"border-block-color":"var(--color-blue-50)"}': {
    'value': 'border-y-blue-50',
  },
  '{"border-block-color":"var(--color-blue-100)"}': {
    'value': 'border-y-blue-100',
  },
  '{"border-block-color":"var(--color-blue-200)"}': {
    'value': 'border-y-blue-200',
  },
  '{"border-block-color":"var(--color-blue-300)"}': {
    'value': 'border-y-blue-300',
  },
  '{"border-block-color":"var(--color-blue-400)"}': {
    'value': 'border-y-blue-400',
  },
  '{"border-block-color":"var(--color-blue-500)"}': {
    'value': 'border-y-blue-500',
  },
  '{"border-block-color":"var(--color-blue-600)"}': {
    'value': 'border-y-blue-600',
  },
  '{"border-block-color":"var(--color-blue-700)"}': {
    'value': 'border-y-blue-700',
  },
  '{"border-block-color":"var(--color-blue-800)"}': {
    'value': 'border-y-blue-800',
  },
  '{"border-block-color":"var(--color-blue-900)"}': {
    'value': 'border-y-blue-900',
  },
  '{"border-block-color":"var(--color-blue-950)"}': {
    'value': 'border-y-blue-950',
  },
  '{"border-block-color":"var(--color-indigo-50)"}': {
    'value': 'border-y-indigo-50',
  },
  '{"border-block-color":"var(--color-indigo-100)"}': {
    'value': 'border-y-indigo-100',
  },
  '{"border-block-color":"var(--color-indigo-200)"}': {
    'value': 'border-y-indigo-200',
  },
  '{"border-block-color":"var(--color-indigo-300)"}': {
    'value': 'border-y-indigo-300',
  },
  '{"border-block-color":"var(--color-indigo-400)"}': {
    'value': 'border-y-indigo-400',
  },
  '{"border-block-color":"var(--color-indigo-500)"}': {
    'value': 'border-y-indigo-500',
  },
  '{"border-block-color":"var(--color-indigo-600)"}': {
    'value': 'border-y-indigo-600',
  },
  '{"border-block-color":"var(--color-indigo-700)"}': {
    'value': 'border-y-indigo-700',
  },
  '{"border-block-color":"var(--color-indigo-800)"}': {
    'value': 'border-y-indigo-800',
  },
  '{"border-block-color":"var(--color-indigo-900)"}': {
    'value': 'border-y-indigo-900',
  },
  '{"border-block-color":"var(--color-indigo-950)"}': {
    'value': 'border-y-indigo-950',
  },
  '{"border-block-color":"var(--color-violet-50)"}': {
    'value': 'border-y-violet-50',
  },
  '{"border-block-color":"var(--color-violet-100)"}': {
    'value': 'border-y-violet-100',
  },
  '{"border-block-color":"var(--color-violet-200)"}': {
    'value': 'border-y-violet-200',
  },
  '{"border-block-color":"var(--color-violet-300)"}': {
    'value': 'border-y-violet-300',
  },
  '{"border-block-color":"var(--color-violet-400)"}': {
    'value': 'border-y-violet-400',
  },
  '{"border-block-color":"var(--color-violet-500)"}': {
    'value': 'border-y-violet-500',
  },
  '{"border-block-color":"var(--color-violet-600)"}': {
    'value': 'border-y-violet-600',
  },
  '{"border-block-color":"var(--color-violet-700)"}': {
    'value': 'border-y-violet-700',
  },
  '{"border-block-color":"var(--color-violet-800)"}': {
    'value': 'border-y-violet-800',
  },
  '{"border-block-color":"var(--color-violet-900)"}': {
    'value': 'border-y-violet-900',
  },
  '{"border-block-color":"var(--color-violet-950)"}': {
    'value': 'border-y-violet-950',
  },
  '{"border-block-color":"var(--color-purple-50)"}': {
    'value': 'border-y-purple-50',
  },
  '{"border-block-color":"var(--color-purple-100)"}': {
    'value': 'border-y-purple-100',
  },
  '{"border-block-color":"var(--color-purple-200)"}': {
    'value': 'border-y-purple-200',
  },
  '{"border-block-color":"var(--color-purple-300)"}': {
    'value': 'border-y-purple-300',
  },
  '{"border-block-color":"var(--color-purple-400)"}': {
    'value': 'border-y-purple-400',
  },
  '{"border-block-color":"var(--color-purple-500)"}': {
    'value': 'border-y-purple-500',
  },
  '{"border-block-color":"var(--color-purple-600)"}': {
    'value': 'border-y-purple-600',
  },
  '{"border-block-color":"var(--color-purple-700)"}': {
    'value': 'border-y-purple-700',
  },
  '{"border-block-color":"var(--color-purple-800)"}': {
    'value': 'border-y-purple-800',
  },
  '{"border-block-color":"var(--color-purple-900)"}': {
    'value': 'border-y-purple-900',
  },
  '{"border-block-color":"var(--color-purple-950)"}': {
    'value': 'border-y-purple-950',
  },
  '{"border-block-color":"var(--color-fuchsia-50)"}': {
    'value': 'border-y-fuchsia-50',
  },
  '{"border-block-color":"var(--color-fuchsia-100)"}': {
    'value': 'border-y-fuchsia-100',
  },
  '{"border-block-color":"var(--color-fuchsia-200)"}': {
    'value': 'border-y-fuchsia-200',
  },
  '{"border-block-color":"var(--color-fuchsia-300)"}': {
    'value': 'border-y-fuchsia-300',
  },
  '{"border-block-color":"var(--color-fuchsia-400)"}': {
    'value': 'border-y-fuchsia-400',
  },
  '{"border-block-color":"var(--color-fuchsia-500)"}': {
    'value': 'border-y-fuchsia-500',
  },
  '{"border-block-color":"var(--color-fuchsia-600)"}': {
    'value': 'border-y-fuchsia-600',
  },
  '{"border-block-color":"var(--color-fuchsia-700)"}': {
    'value': 'border-y-fuchsia-700',
  },
  '{"border-block-color":"var(--color-fuchsia-800)"}': {
    'value': 'border-y-fuchsia-800',
  },
  '{"border-block-color":"var(--color-fuchsia-900)"}': {
    'value': 'border-y-fuchsia-900',
  },
  '{"border-block-color":"var(--color-fuchsia-950)"}': {
    'value': 'border-y-fuchsia-950',
  },
  '{"border-block-color":"var(--color-pink-50)"}': {
    'value': 'border-y-pink-50',
  },
  '{"border-block-color":"var(--color-pink-100)"}': {
    'value': 'border-y-pink-100',
  },
  '{"border-block-color":"var(--color-pink-200)"}': {
    'value': 'border-y-pink-200',
  },
  '{"border-block-color":"var(--color-pink-300)"}': {
    'value': 'border-y-pink-300',
  },
  '{"border-block-color":"var(--color-pink-400)"}': {
    'value': 'border-y-pink-400',
  },
  '{"border-block-color":"var(--color-pink-500)"}': {
    'value': 'border-y-pink-500',
  },
  '{"border-block-color":"var(--color-pink-600)"}': {
    'value': 'border-y-pink-600',
  },
  '{"border-block-color":"var(--color-pink-700)"}': {
    'value': 'border-y-pink-700',
  },
  '{"border-block-color":"var(--color-pink-800)"}': {
    'value': 'border-y-pink-800',
  },
  '{"border-block-color":"var(--color-pink-900)"}': {
    'value': 'border-y-pink-900',
  },
  '{"border-block-color":"var(--color-pink-950)"}': {
    'value': 'border-y-pink-950',
  },
  '{"border-block-color":"var(--color-rose-50)"}': {
    'value': 'border-y-rose-50',
  },
  '{"border-block-color":"var(--color-rose-100)"}': {
    'value': 'border-y-rose-100',
  },
  '{"border-block-color":"var(--color-rose-200)"}': {
    'value': 'border-y-rose-200',
  },
  '{"border-block-color":"var(--color-rose-300)"}': {
    'value': 'border-y-rose-300',
  },
  '{"border-block-color":"var(--color-rose-400)"}': {
    'value': 'border-y-rose-400',
  },
  '{"border-block-color":"var(--color-rose-500)"}': {
    'value': 'border-y-rose-500',
  },
  '{"border-block-color":"var(--color-rose-600)"}': {
    'value': 'border-y-rose-600',
  },
  '{"border-block-color":"var(--color-rose-700)"}': {
    'value': 'border-y-rose-700',
  },
  '{"border-block-color":"var(--color-rose-800)"}': {
    'value': 'border-y-rose-800',
  },
  '{"border-block-color":"var(--color-rose-900)"}': {
    'value': 'border-y-rose-900',
  },
  '{"border-block-color":"var(--color-rose-950)"}': {
    'value': 'border-y-rose-950',
  },
  '{"border-block-color":"var(--color-slate-50)"}': {
    'value': 'border-y-slate-50',
  },
  '{"border-block-color":"var(--color-slate-100)"}': {
    'value': 'border-y-slate-100',
  },
  '{"border-block-color":"var(--color-slate-200)"}': {
    'value': 'border-y-slate-200',
  },
  '{"border-block-color":"var(--color-slate-300)"}': {
    'value': 'border-y-slate-300',
  },
  '{"border-block-color":"var(--color-slate-400)"}': {
    'value': 'border-y-slate-400',
  },
  '{"border-block-color":"var(--color-slate-500)"}': {
    'value': 'border-y-slate-500',
  },
  '{"border-block-color":"var(--color-slate-600)"}': {
    'value': 'border-y-slate-600',
  },
  '{"border-block-color":"var(--color-slate-700)"}': {
    'value': 'border-y-slate-700',
  },
  '{"border-block-color":"var(--color-slate-800)"}': {
    'value': 'border-y-slate-800',
  },
  '{"border-block-color":"var(--color-slate-900)"}': {
    'value': 'border-y-slate-900',
  },
  '{"border-block-color":"var(--color-slate-950)"}': {
    'value': 'border-y-slate-950',
  },
  '{"border-block-color":"var(--color-gray-50)"}': {
    'value': 'border-y-gray-50',
  },
  '{"border-block-color":"var(--color-gray-100)"}': {
    'value': 'border-y-gray-100',
  },
  '{"border-block-color":"var(--color-gray-200)"}': {
    'value': 'border-y-gray-200',
  },
  '{"border-block-color":"var(--color-gray-300)"}': {
    'value': 'border-y-gray-300',
  },
  '{"border-block-color":"var(--color-gray-400)"}': {
    'value': 'border-y-gray-400',
  },
  '{"border-block-color":"var(--color-gray-500)"}': {
    'value': 'border-y-gray-500',
  },
  '{"border-block-color":"var(--color-gray-600)"}': {
    'value': 'border-y-gray-600',
  },
  '{"border-block-color":"var(--color-gray-700)"}': {
    'value': 'border-y-gray-700',
  },
  '{"border-block-color":"var(--color-gray-800)"}': {
    'value': 'border-y-gray-800',
  },
  '{"border-block-color":"var(--color-gray-900)"}': {
    'value': 'border-y-gray-900',
  },
  '{"border-block-color":"var(--color-gray-950)"}': {
    'value': 'border-y-gray-950',
  },
  '{"border-block-color":"var(--color-zinc-50)"}': {
    'value': 'border-y-zinc-50',
  },
  '{"border-block-color":"var(--color-zinc-100)"}': {
    'value': 'border-y-zinc-100',
  },
  '{"border-block-color":"var(--color-zinc-200)"}': {
    'value': 'border-y-zinc-200',
  },
  '{"border-block-color":"var(--color-zinc-300)"}': {
    'value': 'border-y-zinc-300',
  },
  '{"border-block-color":"var(--color-zinc-400)"}': {
    'value': 'border-y-zinc-400',
  },
  '{"border-block-color":"var(--color-zinc-500)"}': {
    'value': 'border-y-zinc-500',
  },
  '{"border-block-color":"var(--color-zinc-600)"}': {
    'value': 'border-y-zinc-600',
  },
  '{"border-block-color":"var(--color-zinc-700)"}': {
    'value': 'border-y-zinc-700',
  },
  '{"border-block-color":"var(--color-zinc-800)"}': {
    'value': 'border-y-zinc-800',
  },
  '{"border-block-color":"var(--color-zinc-900)"}': {
    'value': 'border-y-zinc-900',
  },
  '{"border-block-color":"var(--color-zinc-950)"}': {
    'value': 'border-y-zinc-950',
  },
  '{"border-block-color":"var(--color-neutral-50)"}': {
    'value': 'border-y-neutral-50',
  },
  '{"border-block-color":"var(--color-neutral-100)"}': {
    'value': 'border-y-neutral-100',
  },
  '{"border-block-color":"var(--color-neutral-200)"}': {
    'value': 'border-y-neutral-200',
  },
  '{"border-block-color":"var(--color-neutral-300)"}': {
    'value': 'border-y-neutral-300',
  },
  '{"border-block-color":"var(--color-neutral-400)"}': {
    'value': 'border-y-neutral-400',
  },
  '{"border-block-color":"var(--color-neutral-500)"}': {
    'value': 'border-y-neutral-500',
  },
  '{"border-block-color":"var(--color-neutral-600)"}': {
    'value': 'border-y-neutral-600',
  },
  '{"border-block-color":"var(--color-neutral-700)"}': {
    'value': 'border-y-neutral-700',
  },
  '{"border-block-color":"var(--color-neutral-800)"}': {
    'value': 'border-y-neutral-800',
  },
  '{"border-block-color":"var(--color-neutral-900)"}': {
    'value': 'border-y-neutral-900',
  },
  '{"border-block-color":"var(--color-neutral-950)"}': {
    'value': 'border-y-neutral-950',
  },
  '{"border-block-color":"var(--color-stone-50)"}': {
    'value': 'border-y-stone-50',
  },
  '{"border-block-color":"var(--color-stone-100)"}': {
    'value': 'border-y-stone-100',
  },
  '{"border-block-color":"var(--color-stone-200)"}': {
    'value': 'border-y-stone-200',
  },
  '{"border-block-color":"var(--color-stone-300)"}': {
    'value': 'border-y-stone-300',
  },
  '{"border-block-color":"var(--color-stone-400)"}': {
    'value': 'border-y-stone-400',
  },
  '{"border-block-color":"var(--color-stone-500)"}': {
    'value': 'border-y-stone-500',
  },
  '{"border-block-color":"var(--color-stone-600)"}': {
    'value': 'border-y-stone-600',
  },
  '{"border-block-color":"var(--color-stone-700)"}': {
    'value': 'border-y-stone-700',
  },
  '{"border-block-color":"var(--color-stone-800)"}': {
    'value': 'border-y-stone-800',
  },
  '{"border-block-color":"var(--color-stone-900)"}': {
    'value': 'border-y-stone-900',
  },
  '{"border-block-color":"var(--color-stone-950)"}': {
    'value': 'border-y-stone-950',
  },
  '{"border-block-color":"var(<custom-property>)"}': {
    'value': 'border-y-(<custom-property>)',
  },
  '{"border-block-color":"<value>"}': { 'value': 'border-y-[<value>]' },
  '{"border-inline-start-color":"inherit"}': { 'value': 'border-s-inherit' },
  '{"border-inline-start-color":"currentColor"}': {
    'value': 'border-s-current',
  },
  '{"border-inline-start-color":"transparent"}': {
    'value': 'border-s-transparent',
  },
  '{"border-inline-start-color":"var(--color-black)"}': {
    'value': 'border-s-black',
  },
  '{"border-inline-start-color":"var(--color-white)"}': {
    'value': 'border-s-white',
  },
  '{"border-inline-start-color":"var(--color-red-50)"}': {
    'value': 'border-s-red-50',
  },
  '{"border-inline-start-color":"var(--color-red-100)"}': {
    'value': 'border-s-red-100',
  },
  '{"border-inline-start-color":"var(--color-red-200)"}': {
    'value': 'border-s-red-200',
  },
  '{"border-inline-start-color":"var(--color-red-300)"}': {
    'value': 'border-s-red-300',
  },
  '{"border-inline-start-color":"var(--color-red-400)"}': {
    'value': 'border-s-red-400',
  },
  '{"border-inline-start-color":"var(--color-red-500)"}': {
    'value': 'border-s-red-500',
  },
  '{"border-inline-start-color":"var(--color-red-600)"}': {
    'value': 'border-s-red-600',
  },
  '{"border-inline-start-color":"var(--color-red-700)"}': {
    'value': 'border-s-red-700',
  },
  '{"border-inline-start-color":"var(--color-red-800)"}': {
    'value': 'border-s-red-800',
  },
  '{"border-inline-start-color":"var(--color-red-900)"}': {
    'value': 'border-s-red-900',
  },
  '{"border-inline-start-color":"var(--color-red-950)"}': {
    'value': 'border-s-red-950',
  },
  '{"border-inline-start-color":"var(--color-orange-50)"}': {
    'value': 'border-s-orange-50',
  },
  '{"border-inline-start-color":"var(--color-orange-100)"}': {
    'value': 'border-s-orange-100',
  },
  '{"border-inline-start-color":"var(--color-orange-200)"}': {
    'value': 'border-s-orange-200',
  },
  '{"border-inline-start-color":"var(--color-orange-300)"}': {
    'value': 'border-s-orange-300',
  },
  '{"border-inline-start-color":"var(--color-orange-400)"}': {
    'value': 'border-s-orange-400',
  },
  '{"border-inline-start-color":"var(--color-orange-500)"}': {
    'value': 'border-s-orange-500',
  },
  '{"border-inline-start-color":"var(--color-orange-600)"}': {
    'value': 'border-s-orange-600',
  },
  '{"border-inline-start-color":"var(--color-orange-700)"}': {
    'value': 'border-s-orange-700',
  },
  '{"border-inline-start-color":"var(--color-orange-800)"}': {
    'value': 'border-s-orange-800',
  },
  '{"border-inline-start-color":"var(--color-orange-900)"}': {
    'value': 'border-s-orange-900',
  },
  '{"border-inline-start-color":"var(--color-orange-950)"}': {
    'value': 'border-s-orange-950',
  },
  '{"border-inline-start-color":"var(--color-amber-50)"}': {
    'value': 'border-s-amber-50',
  },
  '{"border-inline-start-color":"var(--color-amber-100)"}': {
    'value': 'border-s-amber-100',
  },
  '{"border-inline-start-color":"var(--color-amber-200)"}': {
    'value': 'border-s-amber-200',
  },
  '{"border-inline-start-color":"var(--color-amber-300)"}': {
    'value': 'border-s-amber-300',
  },
  '{"border-inline-start-color":"var(--color-amber-400)"}': {
    'value': 'border-s-amber-400',
  },
  '{"border-inline-start-color":"var(--color-amber-500)"}': {
    'value': 'border-s-amber-500',
  },
  '{"border-inline-start-color":"var(--color-amber-600)"}': {
    'value': 'border-s-amber-600',
  },
  '{"border-inline-start-color":"var(--color-amber-700)"}': {
    'value': 'border-s-amber-700',
  },
  '{"border-inline-start-color":"var(--color-amber-800)"}': {
    'value': 'border-s-amber-800',
  },
  '{"border-inline-start-color":"var(--color-amber-900)"}': {
    'value': 'border-s-amber-900',
  },
  '{"border-inline-start-color":"var(--color-amber-950)"}': {
    'value': 'border-s-amber-950',
  },
  '{"border-inline-start-color":"var(--color-yellow-50)"}': {
    'value': 'border-s-yellow-50',
  },
  '{"border-inline-start-color":"var(--color-yellow-100)"}': {
    'value': 'border-s-yellow-100',
  },
  '{"border-inline-start-color":"var(--color-yellow-200)"}': {
    'value': 'border-s-yellow-200',
  },
  '{"border-inline-start-color":"var(--color-yellow-300)"}': {
    'value': 'border-s-yellow-300',
  },
  '{"border-inline-start-color":"var(--color-yellow-400)"}': {
    'value': 'border-s-yellow-400',
  },
  '{"border-inline-start-color":"var(--color-yellow-500)"}': {
    'value': 'border-s-yellow-500',
  },
  '{"border-inline-start-color":"var(--color-yellow-600)"}': {
    'value': 'border-s-yellow-600',
  },
  '{"border-inline-start-color":"var(--color-yellow-700)"}': {
    'value': 'border-s-yellow-700',
  },
  '{"border-inline-start-color":"var(--color-yellow-800)"}': {
    'value': 'border-s-yellow-800',
  },
  '{"border-inline-start-color":"var(--color-yellow-900)"}': {
    'value': 'border-s-yellow-900',
  },
  '{"border-inline-start-color":"var(--color-yellow-950)"}': {
    'value': 'border-s-yellow-950',
  },
  '{"border-inline-start-color":"var(--color-lime-50)"}': {
    'value': 'border-s-lime-50',
  },
  '{"border-inline-start-color":"var(--color-lime-100)"}': {
    'value': 'border-s-lime-100',
  },
  '{"border-inline-start-color":"var(--color-lime-200)"}': {
    'value': 'border-s-lime-200',
  },
  '{"border-inline-start-color":"var(--color-lime-300)"}': {
    'value': 'border-s-lime-300',
  },
  '{"border-inline-start-color":"var(--color-lime-400)"}': {
    'value': 'border-s-lime-400',
  },
  '{"border-inline-start-color":"var(--color-lime-500)"}': {
    'value': 'border-s-lime-500',
  },
  '{"border-inline-start-color":"var(--color-lime-600)"}': {
    'value': 'border-s-lime-600',
  },
  '{"border-inline-start-color":"var(--color-lime-700)"}': {
    'value': 'border-s-lime-700',
  },
  '{"border-inline-start-color":"var(--color-lime-800)"}': {
    'value': 'border-s-lime-800',
  },
  '{"border-inline-start-color":"var(--color-lime-900)"}': {
    'value': 'border-s-lime-900',
  },
  '{"border-inline-start-color":"var(--color-lime-950)"}': {
    'value': 'border-s-lime-950',
  },
  '{"border-inline-start-color":"var(--color-green-50)"}': {
    'value': 'border-s-green-50',
  },
  '{"border-inline-start-color":"var(--color-green-100)"}': {
    'value': 'border-s-green-100',
  },
  '{"border-inline-start-color":"var(--color-green-200)"}': {
    'value': 'border-s-green-200',
  },
  '{"border-inline-start-color":"var(--color-green-300)"}': {
    'value': 'border-s-green-300',
  },
  '{"border-inline-start-color":"var(--color-green-400)"}': {
    'value': 'border-s-green-400',
  },
  '{"border-inline-start-color":"var(--color-green-500)"}': {
    'value': 'border-s-green-500',
  },
  '{"border-inline-start-color":"var(--color-green-600)"}': {
    'value': 'border-s-green-600',
  },
  '{"border-inline-start-color":"var(--color-green-700)"}': {
    'value': 'border-s-green-700',
  },
  '{"border-inline-start-color":"var(--color-green-800)"}': {
    'value': 'border-s-green-800',
  },
  '{"border-inline-start-color":"var(--color-green-900)"}': {
    'value': 'border-s-green-900',
  },
  '{"border-inline-start-color":"var(--color-green-950)"}': {
    'value': 'border-s-green-950',
  },
  '{"border-inline-start-color":"var(--color-emerald-50)"}': {
    'value': 'border-s-emerald-50',
  },
  '{"border-inline-start-color":"var(--color-emerald-100)"}': {
    'value': 'border-s-emerald-100',
  },
  '{"border-inline-start-color":"var(--color-emerald-200)"}': {
    'value': 'border-s-emerald-200',
  },
  '{"border-inline-start-color":"var(--color-emerald-300)"}': {
    'value': 'border-s-emerald-300',
  },
  '{"border-inline-start-color":"var(--color-emerald-400)"}': {
    'value': 'border-s-emerald-400',
  },
  '{"border-inline-start-color":"var(--color-emerald-500)"}': {
    'value': 'border-s-emerald-500',
  },
  '{"border-inline-start-color":"var(--color-emerald-600)"}': {
    'value': 'border-s-emerald-600',
  },
  '{"border-inline-start-color":"var(--color-emerald-700)"}': {
    'value': 'border-s-emerald-700',
  },
  '{"border-inline-start-color":"var(--color-emerald-800)"}': {
    'value': 'border-s-emerald-800',
  },
  '{"border-inline-start-color":"var(--color-emerald-900)"}': {
    'value': 'border-s-emerald-900',
  },
  '{"border-inline-start-color":"var(--color-emerald-950)"}': {
    'value': 'border-s-emerald-950',
  },
  '{"border-inline-start-color":"var(--color-teal-50)"}': {
    'value': 'border-s-teal-50',
  },
  '{"border-inline-start-color":"var(--color-teal-100)"}': {
    'value': 'border-s-teal-100',
  },
  '{"border-inline-start-color":"var(--color-teal-200)"}': {
    'value': 'border-s-teal-200',
  },
  '{"border-inline-start-color":"var(--color-teal-300)"}': {
    'value': 'border-s-teal-300',
  },
  '{"border-inline-start-color":"var(--color-teal-400)"}': {
    'value': 'border-s-teal-400',
  },
  '{"border-inline-start-color":"var(--color-teal-500)"}': {
    'value': 'border-s-teal-500',
  },
  '{"border-inline-start-color":"var(--color-teal-600)"}': {
    'value': 'border-s-teal-600',
  },
  '{"border-inline-start-color":"var(--color-teal-700)"}': {
    'value': 'border-s-teal-700',
  },
  '{"border-inline-start-color":"var(--color-teal-800)"}': {
    'value': 'border-s-teal-800',
  },
  '{"border-inline-start-color":"var(--color-teal-900)"}': {
    'value': 'border-s-teal-900',
  },
  '{"border-inline-start-color":"var(--color-teal-950)"}': {
    'value': 'border-s-teal-950',
  },
  '{"border-inline-start-color":"var(--color-cyan-50)"}': {
    'value': 'border-s-cyan-50',
  },
  '{"border-inline-start-color":"var(--color-cyan-100)"}': {
    'value': 'border-s-cyan-100',
  },
  '{"border-inline-start-color":"var(--color-cyan-200)"}': {
    'value': 'border-s-cyan-200',
  },
  '{"border-inline-start-color":"var(--color-cyan-300)"}': {
    'value': 'border-s-cyan-300',
  },
  '{"border-inline-start-color":"var(--color-cyan-400)"}': {
    'value': 'border-s-cyan-400',
  },
  '{"border-inline-start-color":"var(--color-cyan-500)"}': {
    'value': 'border-s-cyan-500',
  },
  '{"border-inline-start-color":"var(--color-cyan-600)"}': {
    'value': 'border-s-cyan-600',
  },
  '{"border-inline-start-color":"var(--color-cyan-700)"}': {
    'value': 'border-s-cyan-700',
  },
  '{"border-inline-start-color":"var(--color-cyan-800)"}': {
    'value': 'border-s-cyan-800',
  },
  '{"border-inline-start-color":"var(--color-cyan-900)"}': {
    'value': 'border-s-cyan-900',
  },
  '{"border-inline-start-color":"var(--color-cyan-950)"}': {
    'value': 'border-s-cyan-950',
  },
  '{"border-inline-start-color":"var(--color-sky-50)"}': {
    'value': 'border-s-sky-50',
  },
  '{"border-inline-start-color":"var(--color-sky-100)"}': {
    'value': 'border-s-sky-100',
  },
  '{"border-inline-start-color":"var(--color-sky-200)"}': {
    'value': 'border-s-sky-200',
  },
  '{"border-inline-start-color":"var(--color-sky-300)"}': {
    'value': 'border-s-sky-300',
  },
  '{"border-inline-start-color":"var(--color-sky-400)"}': {
    'value': 'border-s-sky-400',
  },
  '{"border-inline-start-color":"var(--color-sky-500)"}': {
    'value': 'border-s-sky-500',
  },
  '{"border-inline-start-color":"var(--color-sky-600)"}': {
    'value': 'border-s-sky-600',
  },
  '{"border-inline-start-color":"var(--color-sky-700)"}': {
    'value': 'border-s-sky-700',
  },
  '{"border-inline-start-color":"var(--color-sky-800)"}': {
    'value': 'border-s-sky-800',
  },
  '{"border-inline-start-color":"var(--color-sky-900)"}': {
    'value': 'border-s-sky-900',
  },
  '{"border-inline-start-color":"var(--color-sky-950)"}': {
    'value': 'border-s-sky-950',
  },
  '{"border-inline-start-color":"var(--color-blue-50)"}': {
    'value': 'border-s-blue-50',
  },
  '{"border-inline-start-color":"var(--color-blue-100)"}': {
    'value': 'border-s-blue-100',
  },
  '{"border-inline-start-color":"var(--color-blue-200)"}': {
    'value': 'border-s-blue-200',
  },
  '{"border-inline-start-color":"var(--color-blue-300)"}': {
    'value': 'border-s-blue-300',
  },
  '{"border-inline-start-color":"var(--color-blue-400)"}': {
    'value': 'border-s-blue-400',
  },
  '{"border-inline-start-color":"var(--color-blue-500)"}': {
    'value': 'border-s-blue-500',
  },
  '{"border-inline-start-color":"var(--color-blue-600)"}': {
    'value': 'border-s-blue-600',
  },
  '{"border-inline-start-color":"var(--color-blue-700)"}': {
    'value': 'border-s-blue-700',
  },
  '{"border-inline-start-color":"var(--color-blue-800)"}': {
    'value': 'border-s-blue-800',
  },
  '{"border-inline-start-color":"var(--color-blue-900)"}': {
    'value': 'border-s-blue-900',
  },
  '{"border-inline-start-color":"var(--color-blue-950)"}': {
    'value': 'border-s-blue-950',
  },
  '{"border-inline-start-color":"var(--color-indigo-50)"}': {
    'value': 'border-s-indigo-50',
  },
  '{"border-inline-start-color":"var(--color-indigo-100)"}': {
    'value': 'border-s-indigo-100',
  },
  '{"border-inline-start-color":"var(--color-indigo-200)"}': {
    'value': 'border-s-indigo-200',
  },
  '{"border-inline-start-color":"var(--color-indigo-300)"}': {
    'value': 'border-s-indigo-300',
  },
  '{"border-inline-start-color":"var(--color-indigo-400)"}': {
    'value': 'border-s-indigo-400',
  },
  '{"border-inline-start-color":"var(--color-indigo-500)"}': {
    'value': 'border-s-indigo-500',
  },
  '{"border-inline-start-color":"var(--color-indigo-600)"}': {
    'value': 'border-s-indigo-600',
  },
  '{"border-inline-start-color":"var(--color-indigo-700)"}': {
    'value': 'border-s-indigo-700',
  },
  '{"border-inline-start-color":"var(--color-indigo-800)"}': {
    'value': 'border-s-indigo-800',
  },
  '{"border-inline-start-color":"var(--color-indigo-900)"}': {
    'value': 'border-s-indigo-900',
  },
  '{"border-inline-start-color":"var(--color-indigo-950)"}': {
    'value': 'border-s-indigo-950',
  },
  '{"border-inline-start-color":"var(--color-violet-50)"}': {
    'value': 'border-s-violet-50',
  },
  '{"border-inline-start-color":"var(--color-violet-100)"}': {
    'value': 'border-s-violet-100',
  },
  '{"border-inline-start-color":"var(--color-violet-200)"}': {
    'value': 'border-s-violet-200',
  },
  '{"border-inline-start-color":"var(--color-violet-300)"}': {
    'value': 'border-s-violet-300',
  },
  '{"border-inline-start-color":"var(--color-violet-400)"}': {
    'value': 'border-s-violet-400',
  },
  '{"border-inline-start-color":"var(--color-violet-500)"}': {
    'value': 'border-s-violet-500',
  },
  '{"border-inline-start-color":"var(--color-violet-600)"}': {
    'value': 'border-s-violet-600',
  },
  '{"border-inline-start-color":"var(--color-violet-700)"}': {
    'value': 'border-s-violet-700',
  },
  '{"border-inline-start-color":"var(--color-violet-800)"}': {
    'value': 'border-s-violet-800',
  },
  '{"border-inline-start-color":"var(--color-violet-900)"}': {
    'value': 'border-s-violet-900',
  },
  '{"border-inline-start-color":"var(--color-violet-950)"}': {
    'value': 'border-s-violet-950',
  },
  '{"border-inline-start-color":"var(--color-purple-50)"}': {
    'value': 'border-s-purple-50',
  },
  '{"border-inline-start-color":"var(--color-purple-100)"}': {
    'value': 'border-s-purple-100',
  },
  '{"border-inline-start-color":"var(--color-purple-200)"}': {
    'value': 'border-s-purple-200',
  },
  '{"border-inline-start-color":"var(--color-purple-300)"}': {
    'value': 'border-s-purple-300',
  },
  '{"border-inline-start-color":"var(--color-purple-400)"}': {
    'value': 'border-s-purple-400',
  },
  '{"border-inline-start-color":"var(--color-purple-500)"}': {
    'value': 'border-s-purple-500',
  },
  '{"border-inline-start-color":"var(--color-purple-600)"}': {
    'value': 'border-s-purple-600',
  },
  '{"border-inline-start-color":"var(--color-purple-700)"}': {
    'value': 'border-s-purple-700',
  },
  '{"border-inline-start-color":"var(--color-purple-800)"}': {
    'value': 'border-s-purple-800',
  },
  '{"border-inline-start-color":"var(--color-purple-900)"}': {
    'value': 'border-s-purple-900',
  },
  '{"border-inline-start-color":"var(--color-purple-950)"}': {
    'value': 'border-s-purple-950',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-50)"}': {
    'value': 'border-s-fuchsia-50',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-100)"}': {
    'value': 'border-s-fuchsia-100',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-200)"}': {
    'value': 'border-s-fuchsia-200',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-300)"}': {
    'value': 'border-s-fuchsia-300',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-400)"}': {
    'value': 'border-s-fuchsia-400',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-500)"}': {
    'value': 'border-s-fuchsia-500',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-600)"}': {
    'value': 'border-s-fuchsia-600',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-700)"}': {
    'value': 'border-s-fuchsia-700',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-800)"}': {
    'value': 'border-s-fuchsia-800',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-900)"}': {
    'value': 'border-s-fuchsia-900',
  },
  '{"border-inline-start-color":"var(--color-fuchsia-950)"}': {
    'value': 'border-s-fuchsia-950',
  },
  '{"border-inline-start-color":"var(--color-pink-50)"}': {
    'value': 'border-s-pink-50',
  },
  '{"border-inline-start-color":"var(--color-pink-100)"}': {
    'value': 'border-s-pink-100',
  },
  '{"border-inline-start-color":"var(--color-pink-200)"}': {
    'value': 'border-s-pink-200',
  },
  '{"border-inline-start-color":"var(--color-pink-300)"}': {
    'value': 'border-s-pink-300',
  },
  '{"border-inline-start-color":"var(--color-pink-400)"}': {
    'value': 'border-s-pink-400',
  },
  '{"border-inline-start-color":"var(--color-pink-500)"}': {
    'value': 'border-s-pink-500',
  },
  '{"border-inline-start-color":"var(--color-pink-600)"}': {
    'value': 'border-s-pink-600',
  },
  '{"border-inline-start-color":"var(--color-pink-700)"}': {
    'value': 'border-s-pink-700',
  },
  '{"border-inline-start-color":"var(--color-pink-800)"}': {
    'value': 'border-s-pink-800',
  },
  '{"border-inline-start-color":"var(--color-pink-900)"}': {
    'value': 'border-s-pink-900',
  },
  '{"border-inline-start-color":"var(--color-pink-950)"}': {
    'value': 'border-s-pink-950',
  },
  '{"border-inline-start-color":"var(--color-rose-50)"}': {
    'value': 'border-s-rose-50',
  },
  '{"border-inline-start-color":"var(--color-rose-100)"}': {
    'value': 'border-s-rose-100',
  },
  '{"border-inline-start-color":"var(--color-rose-200)"}': {
    'value': 'border-s-rose-200',
  },
  '{"border-inline-start-color":"var(--color-rose-300)"}': {
    'value': 'border-s-rose-300',
  },
  '{"border-inline-start-color":"var(--color-rose-400)"}': {
    'value': 'border-s-rose-400',
  },
  '{"border-inline-start-color":"var(--color-rose-500)"}': {
    'value': 'border-s-rose-500',
  },
  '{"border-inline-start-color":"var(--color-rose-600)"}': {
    'value': 'border-s-rose-600',
  },
  '{"border-inline-start-color":"var(--color-rose-700)"}': {
    'value': 'border-s-rose-700',
  },
  '{"border-inline-start-color":"var(--color-rose-800)"}': {
    'value': 'border-s-rose-800',
  },
  '{"border-inline-start-color":"var(--color-rose-900)"}': {
    'value': 'border-s-rose-900',
  },
  '{"border-inline-start-color":"var(--color-rose-950)"}': {
    'value': 'border-s-rose-950',
  },
  '{"border-inline-start-color":"var(--color-slate-50)"}': {
    'value': 'border-s-slate-50',
  },
  '{"border-inline-start-color":"var(--color-slate-100)"}': {
    'value': 'border-s-slate-100',
  },
  '{"border-inline-start-color":"var(--color-slate-200)"}': {
    'value': 'border-s-slate-200',
  },
  '{"border-inline-start-color":"var(--color-slate-300)"}': {
    'value': 'border-s-slate-300',
  },
  '{"border-inline-start-color":"var(--color-slate-400)"}': {
    'value': 'border-s-slate-400',
  },
  '{"border-inline-start-color":"var(--color-slate-500)"}': {
    'value': 'border-s-slate-500',
  },
  '{"border-inline-start-color":"var(--color-slate-600)"}': {
    'value': 'border-s-slate-600',
  },
  '{"border-inline-start-color":"var(--color-slate-700)"}': {
    'value': 'border-s-slate-700',
  },
  '{"border-inline-start-color":"var(--color-slate-800)"}': {
    'value': 'border-s-slate-800',
  },
  '{"border-inline-start-color":"var(--color-slate-900)"}': {
    'value': 'border-s-slate-900',
  },
  '{"border-inline-start-color":"var(--color-slate-950)"}': {
    'value': 'border-s-slate-950',
  },
  '{"border-inline-start-color":"var(--color-gray-50)"}': {
    'value': 'border-s-gray-50',
  },
  '{"border-inline-start-color":"var(--color-gray-100)"}': {
    'value': 'border-s-gray-100',
  },
  '{"border-inline-start-color":"var(--color-gray-200)"}': {
    'value': 'border-s-gray-200',
  },
  '{"border-inline-start-color":"var(--color-gray-300)"}': {
    'value': 'border-s-gray-300',
  },
  '{"border-inline-start-color":"var(--color-gray-400)"}': {
    'value': 'border-s-gray-400',
  },
  '{"border-inline-start-color":"var(--color-gray-500)"}': {
    'value': 'border-s-gray-500',
  },
  '{"border-inline-start-color":"var(--color-gray-600)"}': {
    'value': 'border-s-gray-600',
  },
  '{"border-inline-start-color":"var(--color-gray-700)"}': {
    'value': 'border-s-gray-700',
  },
  '{"border-inline-start-color":"var(--color-gray-800)"}': {
    'value': 'border-s-gray-800',
  },
  '{"border-inline-start-color":"var(--color-gray-900)"}': {
    'value': 'border-s-gray-900',
  },
  '{"border-inline-start-color":"var(--color-gray-950)"}': {
    'value': 'border-s-gray-950',
  },
  '{"border-inline-start-color":"var(--color-zinc-50)"}': {
    'value': 'border-s-zinc-50',
  },
  '{"border-inline-start-color":"var(--color-zinc-100)"}': {
    'value': 'border-s-zinc-100',
  },
  '{"border-inline-start-color":"var(--color-zinc-200)"}': {
    'value': 'border-s-zinc-200',
  },
  '{"border-inline-start-color":"var(--color-zinc-300)"}': {
    'value': 'border-s-zinc-300',
  },
  '{"border-inline-start-color":"var(--color-zinc-400)"}': {
    'value': 'border-s-zinc-400',
  },
  '{"border-inline-start-color":"var(--color-zinc-500)"}': {
    'value': 'border-s-zinc-500',
  },
  '{"border-inline-start-color":"var(--color-zinc-600)"}': {
    'value': 'border-s-zinc-600',
  },
  '{"border-inline-start-color":"var(--color-zinc-700)"}': {
    'value': 'border-s-zinc-700',
  },
  '{"border-inline-start-color":"var(--color-zinc-800)"}': {
    'value': 'border-s-zinc-800',
  },
  '{"border-inline-start-color":"var(--color-zinc-900)"}': {
    'value': 'border-s-zinc-900',
  },
  '{"border-inline-start-color":"var(--color-zinc-950)"}': {
    'value': 'border-s-zinc-950',
  },
  '{"border-inline-start-color":"var(--color-neutral-50)"}': {
    'value': 'border-s-neutral-50',
  },
  '{"border-inline-start-color":"var(--color-neutral-100)"}': {
    'value': 'border-s-neutral-100',
  },
  '{"border-inline-start-color":"var(--color-neutral-200)"}': {
    'value': 'border-s-neutral-200',
  },
  '{"border-inline-start-color":"var(--color-neutral-300)"}': {
    'value': 'border-s-neutral-300',
  },
  '{"border-inline-start-color":"var(--color-neutral-400)"}': {
    'value': 'border-s-neutral-400',
  },
  '{"border-inline-start-color":"var(--color-neutral-500)"}': {
    'value': 'border-s-neutral-500',
  },
  '{"border-inline-start-color":"var(--color-neutral-600)"}': {
    'value': 'border-s-neutral-600',
  },
  '{"border-inline-start-color":"var(--color-neutral-700)"}': {
    'value': 'border-s-neutral-700',
  },
  '{"border-inline-start-color":"var(--color-neutral-800)"}': {
    'value': 'border-s-neutral-800',
  },
  '{"border-inline-start-color":"var(--color-neutral-900)"}': {
    'value': 'border-s-neutral-900',
  },
  '{"border-inline-start-color":"var(--color-neutral-950)"}': {
    'value': 'border-s-neutral-950',
  },
  '{"border-inline-start-color":"var(--color-stone-50)"}': {
    'value': 'border-s-stone-50',
  },
  '{"border-inline-start-color":"var(--color-stone-100)"}': {
    'value': 'border-s-stone-100',
  },
  '{"border-inline-start-color":"var(--color-stone-200)"}': {
    'value': 'border-s-stone-200',
  },
  '{"border-inline-start-color":"var(--color-stone-300)"}': {
    'value': 'border-s-stone-300',
  },
  '{"border-inline-start-color":"var(--color-stone-400)"}': {
    'value': 'border-s-stone-400',
  },
  '{"border-inline-start-color":"var(--color-stone-500)"}': {
    'value': 'border-s-stone-500',
  },
  '{"border-inline-start-color":"var(--color-stone-600)"}': {
    'value': 'border-s-stone-600',
  },
  '{"border-inline-start-color":"var(--color-stone-700)"}': {
    'value': 'border-s-stone-700',
  },
  '{"border-inline-start-color":"var(--color-stone-800)"}': {
    'value': 'border-s-stone-800',
  },
  '{"border-inline-start-color":"var(--color-stone-900)"}': {
    'value': 'border-s-stone-900',
  },
  '{"border-inline-start-color":"var(--color-stone-950)"}': {
    'value': 'border-s-stone-950',
  },
  '{"border-inline-start-color":"var(<custom-property>)"}': {
    'value': 'border-s-(<custom-property>)',
  },
  '{"border-inline-start-color":"<value>"}': { 'value': 'border-s-[<value>]' },
  '{"border-inline-end-color":"inherit"}': { 'value': 'border-e-inherit' },
  '{"border-inline-end-color":"currentColor"}': { 'value': 'border-e-current' },
  '{"border-inline-end-color":"transparent"}': {
    'value': 'border-e-transparent',
  },
  '{"border-inline-end-color":"var(--color-black)"}': {
    'value': 'border-e-black',
  },
  '{"border-inline-end-color":"var(--color-white)"}': {
    'value': 'border-e-white',
  },
  '{"border-inline-end-color":"var(--color-red-50)"}': {
    'value': 'border-e-red-50',
  },
  '{"border-inline-end-color":"var(--color-red-100)"}': {
    'value': 'border-e-red-100',
  },
  '{"border-inline-end-color":"var(--color-red-200)"}': {
    'value': 'border-e-red-200',
  },
  '{"border-inline-end-color":"var(--color-red-300)"}': {
    'value': 'border-e-red-300',
  },
  '{"border-inline-end-color":"var(--color-red-400)"}': {
    'value': 'border-e-red-400',
  },
  '{"border-inline-end-color":"var(--color-red-500)"}': {
    'value': 'border-e-red-500',
  },
  '{"border-inline-end-color":"var(--color-red-600)"}': {
    'value': 'border-e-red-600',
  },
  '{"border-inline-end-color":"var(--color-red-700)"}': {
    'value': 'border-e-red-700',
  },
  '{"border-inline-end-color":"var(--color-red-800)"}': {
    'value': 'border-e-red-800',
  },
  '{"border-inline-end-color":"var(--color-red-900)"}': {
    'value': 'border-e-red-900',
  },
  '{"border-inline-end-color":"var(--color-red-950)"}': {
    'value': 'border-e-red-950',
  },
  '{"border-inline-end-color":"var(--color-orange-50)"}': {
    'value': 'border-e-orange-50',
  },
  '{"border-inline-end-color":"var(--color-orange-100)"}': {
    'value': 'border-e-orange-100',
  },
  '{"border-inline-end-color":"var(--color-orange-200)"}': {
    'value': 'border-e-orange-200',
  },
  '{"border-inline-end-color":"var(--color-orange-300)"}': {
    'value': 'border-e-orange-300',
  },
  '{"border-inline-end-color":"var(--color-orange-400)"}': {
    'value': 'border-e-orange-400',
  },
  '{"border-inline-end-color":"var(--color-orange-500)"}': {
    'value': 'border-e-orange-500',
  },
  '{"border-inline-end-color":"var(--color-orange-600)"}': {
    'value': 'border-e-orange-600',
  },
  '{"border-inline-end-color":"var(--color-orange-700)"}': {
    'value': 'border-e-orange-700',
  },
  '{"border-inline-end-color":"var(--color-orange-800)"}': {
    'value': 'border-e-orange-800',
  },
  '{"border-inline-end-color":"var(--color-orange-900)"}': {
    'value': 'border-e-orange-900',
  },
  '{"border-inline-end-color":"var(--color-orange-950)"}': {
    'value': 'border-e-orange-950',
  },
  '{"border-inline-end-color":"var(--color-amber-50)"}': {
    'value': 'border-e-amber-50',
  },
  '{"border-inline-end-color":"var(--color-amber-100)"}': {
    'value': 'border-e-amber-100',
  },
  '{"border-inline-end-color":"var(--color-amber-200)"}': {
    'value': 'border-e-amber-200',
  },
  '{"border-inline-end-color":"var(--color-amber-300)"}': {
    'value': 'border-e-amber-300',
  },
  '{"border-inline-end-color":"var(--color-amber-400)"}': {
    'value': 'border-e-amber-400',
  },
  '{"border-inline-end-color":"var(--color-amber-500)"}': {
    'value': 'border-e-amber-500',
  },
  '{"border-inline-end-color":"var(--color-amber-600)"}': {
    'value': 'border-e-amber-600',
  },
  '{"border-inline-end-color":"var(--color-amber-700)"}': {
    'value': 'border-e-amber-700',
  },
  '{"border-inline-end-color":"var(--color-amber-800)"}': {
    'value': 'border-e-amber-800',
  },
  '{"border-inline-end-color":"var(--color-amber-900)"}': {
    'value': 'border-e-amber-900',
  },
  '{"border-inline-end-color":"var(--color-amber-950)"}': {
    'value': 'border-e-amber-950',
  },
  '{"border-inline-end-color":"var(--color-yellow-50)"}': {
    'value': 'border-e-yellow-50',
  },
  '{"border-inline-end-color":"var(--color-yellow-100)"}': {
    'value': 'border-e-yellow-100',
  },
  '{"border-inline-end-color":"var(--color-yellow-200)"}': {
    'value': 'border-e-yellow-200',
  },
  '{"border-inline-end-color":"var(--color-yellow-300)"}': {
    'value': 'border-e-yellow-300',
  },
  '{"border-inline-end-color":"var(--color-yellow-400)"}': {
    'value': 'border-e-yellow-400',
  },
  '{"border-inline-end-color":"var(--color-yellow-500)"}': {
    'value': 'border-e-yellow-500',
  },
  '{"border-inline-end-color":"var(--color-yellow-600)"}': {
    'value': 'border-e-yellow-600',
  },
  '{"border-inline-end-color":"var(--color-yellow-700)"}': {
    'value': 'border-e-yellow-700',
  },
  '{"border-inline-end-color":"var(--color-yellow-800)"}': {
    'value': 'border-e-yellow-800',
  },
  '{"border-inline-end-color":"var(--color-yellow-900)"}': {
    'value': 'border-e-yellow-900',
  },
  '{"border-inline-end-color":"var(--color-yellow-950)"}': {
    'value': 'border-e-yellow-950',
  },
  '{"border-inline-end-color":"var(--color-lime-50)"}': {
    'value': 'border-e-lime-50',
  },
  '{"border-inline-end-color":"var(--color-lime-100)"}': {
    'value': 'border-e-lime-100',
  },
  '{"border-inline-end-color":"var(--color-lime-200)"}': {
    'value': 'border-e-lime-200',
  },
  '{"border-inline-end-color":"var(--color-lime-300)"}': {
    'value': 'border-e-lime-300',
  },
  '{"border-inline-end-color":"var(--color-lime-400)"}': {
    'value': 'border-e-lime-400',
  },
  '{"border-inline-end-color":"var(--color-lime-500)"}': {
    'value': 'border-e-lime-500',
  },
  '{"border-inline-end-color":"var(--color-lime-600)"}': {
    'value': 'border-e-lime-600',
  },
  '{"border-inline-end-color":"var(--color-lime-700)"}': {
    'value': 'border-e-lime-700',
  },
  '{"border-inline-end-color":"var(--color-lime-800)"}': {
    'value': 'border-e-lime-800',
  },
  '{"border-inline-end-color":"var(--color-lime-900)"}': {
    'value': 'border-e-lime-900',
  },
  '{"border-inline-end-color":"var(--color-lime-950)"}': {
    'value': 'border-e-lime-950',
  },
  '{"border-inline-end-color":"var(--color-green-50)"}': {
    'value': 'border-e-green-50',
  },
  '{"border-inline-end-color":"var(--color-green-100)"}': {
    'value': 'border-e-green-100',
  },
  '{"border-inline-end-color":"var(--color-green-200)"}': {
    'value': 'border-e-green-200',
  },
  '{"border-inline-end-color":"var(--color-green-300)"}': {
    'value': 'border-e-green-300',
  },
  '{"border-inline-end-color":"var(--color-green-400)"}': {
    'value': 'border-e-green-400',
  },
  '{"border-inline-end-color":"var(--color-green-500)"}': {
    'value': 'border-e-green-500',
  },
  '{"border-inline-end-color":"var(--color-green-600)"}': {
    'value': 'border-e-green-600',
  },
  '{"border-inline-end-color":"var(--color-green-700)"}': {
    'value': 'border-e-green-700',
  },
  '{"border-inline-end-color":"var(--color-green-800)"}': {
    'value': 'border-e-green-800',
  },
  '{"border-inline-end-color":"var(--color-green-900)"}': {
    'value': 'border-e-green-900',
  },
  '{"border-inline-end-color":"var(--color-green-950)"}': {
    'value': 'border-e-green-950',
  },
  '{"border-inline-end-color":"var(--color-emerald-50)"}': {
    'value': 'border-e-emerald-50',
  },
  '{"border-inline-end-color":"var(--color-emerald-100)"}': {
    'value': 'border-e-emerald-100',
  },
  '{"border-inline-end-color":"var(--color-emerald-200)"}': {
    'value': 'border-e-emerald-200',
  },
  '{"border-inline-end-color":"var(--color-emerald-300)"}': {
    'value': 'border-e-emerald-300',
  },
  '{"border-inline-end-color":"var(--color-emerald-400)"}': {
    'value': 'border-e-emerald-400',
  },
  '{"border-inline-end-color":"var(--color-emerald-500)"}': {
    'value': 'border-e-emerald-500',
  },
  '{"border-inline-end-color":"var(--color-emerald-600)"}': {
    'value': 'border-e-emerald-600',
  },
  '{"border-inline-end-color":"var(--color-emerald-700)"}': {
    'value': 'border-e-emerald-700',
  },
  '{"border-inline-end-color":"var(--color-emerald-800)"}': {
    'value': 'border-e-emerald-800',
  },
  '{"border-inline-end-color":"var(--color-emerald-900)"}': {
    'value': 'border-e-emerald-900',
  },
  '{"border-inline-end-color":"var(--color-emerald-950)"}': {
    'value': 'border-e-emerald-950',
  },
  '{"border-inline-end-color":"var(--color-teal-50)"}': {
    'value': 'border-e-teal-50',
  },
  '{"border-inline-end-color":"var(--color-teal-100)"}': {
    'value': 'border-e-teal-100',
  },
  '{"border-inline-end-color":"var(--color-teal-200)"}': {
    'value': 'border-e-teal-200',
  },
  '{"border-inline-end-color":"var(--color-teal-300)"}': {
    'value': 'border-e-teal-300',
  },
  '{"border-inline-end-color":"var(--color-teal-400)"}': {
    'value': 'border-e-teal-400',
  },
  '{"border-inline-end-color":"var(--color-teal-500)"}': {
    'value': 'border-e-teal-500',
  },
  '{"border-inline-end-color":"var(--color-teal-600)"}': {
    'value': 'border-e-teal-600',
  },
  '{"border-inline-end-color":"var(--color-teal-700)"}': {
    'value': 'border-e-teal-700',
  },
  '{"border-inline-end-color":"var(--color-teal-800)"}': {
    'value': 'border-e-teal-800',
  },
  '{"border-inline-end-color":"var(--color-teal-900)"}': {
    'value': 'border-e-teal-900',
  },
  '{"border-inline-end-color":"var(--color-teal-950)"}': {
    'value': 'border-e-teal-950',
  },
  '{"border-inline-end-color":"var(--color-cyan-50)"}': {
    'value': 'border-e-cyan-50',
  },
  '{"border-inline-end-color":"var(--color-cyan-100)"}': {
    'value': 'border-e-cyan-100',
  },
  '{"border-inline-end-color":"var(--color-cyan-200)"}': {
    'value': 'border-e-cyan-200',
  },
  '{"border-inline-end-color":"var(--color-cyan-300)"}': {
    'value': 'border-e-cyan-300',
  },
  '{"border-inline-end-color":"var(--color-cyan-400)"}': {
    'value': 'border-e-cyan-400',
  },
  '{"border-inline-end-color":"var(--color-cyan-500)"}': {
    'value': 'border-e-cyan-500',
  },
  '{"border-inline-end-color":"var(--color-cyan-600)"}': {
    'value': 'border-e-cyan-600',
  },
  '{"border-inline-end-color":"var(--color-cyan-700)"}': {
    'value': 'border-e-cyan-700',
  },
  '{"border-inline-end-color":"var(--color-cyan-800)"}': {
    'value': 'border-e-cyan-800',
  },
  '{"border-inline-end-color":"var(--color-cyan-900)"}': {
    'value': 'border-e-cyan-900',
  },
  '{"border-inline-end-color":"var(--color-cyan-950)"}': {
    'value': 'border-e-cyan-950',
  },
  '{"border-inline-end-color":"var(--color-sky-50)"}': {
    'value': 'border-e-sky-50',
  },
  '{"border-inline-end-color":"var(--color-sky-100)"}': {
    'value': 'border-e-sky-100',
  },
  '{"border-inline-end-color":"var(--color-sky-200)"}': {
    'value': 'border-e-sky-200',
  },
  '{"border-inline-end-color":"var(--color-sky-300)"}': {
    'value': 'border-e-sky-300',
  },
  '{"border-inline-end-color":"var(--color-sky-400)"}': {
    'value': 'border-e-sky-400',
  },
  '{"border-inline-end-color":"var(--color-sky-500)"}': {
    'value': 'border-e-sky-500',
  },
  '{"border-inline-end-color":"var(--color-sky-600)"}': {
    'value': 'border-e-sky-600',
  },
  '{"border-inline-end-color":"var(--color-sky-700)"}': {
    'value': 'border-e-sky-700',
  },
  '{"border-inline-end-color":"var(--color-sky-800)"}': {
    'value': 'border-e-sky-800',
  },
  '{"border-inline-end-color":"var(--color-sky-900)"}': {
    'value': 'border-e-sky-900',
  },
  '{"border-inline-end-color":"var(--color-sky-950)"}': {
    'value': 'border-e-sky-950',
  },
  '{"border-inline-end-color":"var(--color-blue-50)"}': {
    'value': 'border-e-blue-50',
  },
  '{"border-inline-end-color":"var(--color-blue-100)"}': {
    'value': 'border-e-blue-100',
  },
  '{"border-inline-end-color":"var(--color-blue-200)"}': {
    'value': 'border-e-blue-200',
  },
  '{"border-inline-end-color":"var(--color-blue-300)"}': {
    'value': 'border-e-blue-300',
  },
  '{"border-inline-end-color":"var(--color-blue-400)"}': {
    'value': 'border-e-blue-400',
  },
  '{"border-inline-end-color":"var(--color-blue-500)"}': {
    'value': 'border-e-blue-500',
  },
  '{"border-inline-end-color":"var(--color-blue-600)"}': {
    'value': 'border-e-blue-600',
  },
  '{"border-inline-end-color":"var(--color-blue-700)"}': {
    'value': 'border-e-blue-700',
  },
  '{"border-inline-end-color":"var(--color-blue-800)"}': {
    'value': 'border-e-blue-800',
  },
  '{"border-inline-end-color":"var(--color-blue-900)"}': {
    'value': 'border-e-blue-900',
  },
  '{"border-inline-end-color":"var(--color-blue-950)"}': {
    'value': 'border-e-blue-950',
  },
  '{"border-inline-end-color":"var(--color-indigo-50)"}': {
    'value': 'border-e-indigo-50',
  },
  '{"border-inline-end-color":"var(--color-indigo-100)"}': {
    'value': 'border-e-indigo-100',
  },
  '{"border-inline-end-color":"var(--color-indigo-200)"}': {
    'value': 'border-e-indigo-200',
  },
  '{"border-inline-end-color":"var(--color-indigo-300)"}': {
    'value': 'border-e-indigo-300',
  },
  '{"border-inline-end-color":"var(--color-indigo-400)"}': {
    'value': 'border-e-indigo-400',
  },
  '{"border-inline-end-color":"var(--color-indigo-500)"}': {
    'value': 'border-e-indigo-500',
  },
  '{"border-inline-end-color":"var(--color-indigo-600)"}': {
    'value': 'border-e-indigo-600',
  },
  '{"border-inline-end-color":"var(--color-indigo-700)"}': {
    'value': 'border-e-indigo-700',
  },
  '{"border-inline-end-color":"var(--color-indigo-800)"}': {
    'value': 'border-e-indigo-800',
  },
  '{"border-inline-end-color":"var(--color-indigo-900)"}': {
    'value': 'border-e-indigo-900',
  },
  '{"border-inline-end-color":"var(--color-indigo-950)"}': {
    'value': 'border-e-indigo-950',
  },
  '{"border-inline-end-color":"var(--color-violet-50)"}': {
    'value': 'border-e-violet-50',
  },
  '{"border-inline-end-color":"var(--color-violet-100)"}': {
    'value': 'border-e-violet-100',
  },
  '{"border-inline-end-color":"var(--color-violet-200)"}': {
    'value': 'border-e-violet-200',
  },
  '{"border-inline-end-color":"var(--color-violet-300)"}': {
    'value': 'border-e-violet-300',
  },
  '{"border-inline-end-color":"var(--color-violet-400)"}': {
    'value': 'border-e-violet-400',
  },
  '{"border-inline-end-color":"var(--color-violet-500)"}': {
    'value': 'border-e-violet-500',
  },
  '{"border-inline-end-color":"var(--color-violet-600)"}': {
    'value': 'border-e-violet-600',
  },
  '{"border-inline-end-color":"var(--color-violet-700)"}': {
    'value': 'border-e-violet-700',
  },
  '{"border-inline-end-color":"var(--color-violet-800)"}': {
    'value': 'border-e-violet-800',
  },
  '{"border-inline-end-color":"var(--color-violet-900)"}': {
    'value': 'border-e-violet-900',
  },
  '{"border-inline-end-color":"var(--color-violet-950)"}': {
    'value': 'border-e-violet-950',
  },
  '{"border-inline-end-color":"var(--color-purple-50)"}': {
    'value': 'border-e-purple-50',
  },
  '{"border-inline-end-color":"var(--color-purple-100)"}': {
    'value': 'border-e-purple-100',
  },
  '{"border-inline-end-color":"var(--color-purple-200)"}': {
    'value': 'border-e-purple-200',
  },
  '{"border-inline-end-color":"var(--color-purple-300)"}': {
    'value': 'border-e-purple-300',
  },
  '{"border-inline-end-color":"var(--color-purple-400)"}': {
    'value': 'border-e-purple-400',
  },
  '{"border-inline-end-color":"var(--color-purple-500)"}': {
    'value': 'border-e-purple-500',
  },
  '{"border-inline-end-color":"var(--color-purple-600)"}': {
    'value': 'border-e-purple-600',
  },
  '{"border-inline-end-color":"var(--color-purple-700)"}': {
    'value': 'border-e-purple-700',
  },
  '{"border-inline-end-color":"var(--color-purple-800)"}': {
    'value': 'border-e-purple-800',
  },
  '{"border-inline-end-color":"var(--color-purple-900)"}': {
    'value': 'border-e-purple-900',
  },
  '{"border-inline-end-color":"var(--color-purple-950)"}': {
    'value': 'border-e-purple-950',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-50)"}': {
    'value': 'border-e-fuchsia-50',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-100)"}': {
    'value': 'border-e-fuchsia-100',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-200)"}': {
    'value': 'border-e-fuchsia-200',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-300)"}': {
    'value': 'border-e-fuchsia-300',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-400)"}': {
    'value': 'border-e-fuchsia-400',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-500)"}': {
    'value': 'border-e-fuchsia-500',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-600)"}': {
    'value': 'border-e-fuchsia-600',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-700)"}': {
    'value': 'border-e-fuchsia-700',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-800)"}': {
    'value': 'border-e-fuchsia-800',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-900)"}': {
    'value': 'border-e-fuchsia-900',
  },
  '{"border-inline-end-color":"var(--color-fuchsia-950)"}': {
    'value': 'border-e-fuchsia-950',
  },
  '{"border-inline-end-color":"var(--color-pink-50)"}': {
    'value': 'border-e-pink-50',
  },
  '{"border-inline-end-color":"var(--color-pink-100)"}': {
    'value': 'border-e-pink-100',
  },
  '{"border-inline-end-color":"var(--color-pink-200)"}': {
    'value': 'border-e-pink-200',
  },
  '{"border-inline-end-color":"var(--color-pink-300)"}': {
    'value': 'border-e-pink-300',
  },
  '{"border-inline-end-color":"var(--color-pink-400)"}': {
    'value': 'border-e-pink-400',
  },
  '{"border-inline-end-color":"var(--color-pink-500)"}': {
    'value': 'border-e-pink-500',
  },
  '{"border-inline-end-color":"var(--color-pink-600)"}': {
    'value': 'border-e-pink-600',
  },
  '{"border-inline-end-color":"var(--color-pink-700)"}': {
    'value': 'border-e-pink-700',
  },
  '{"border-inline-end-color":"var(--color-pink-800)"}': {
    'value': 'border-e-pink-800',
  },
  '{"border-inline-end-color":"var(--color-pink-900)"}': {
    'value': 'border-e-pink-900',
  },
  '{"border-inline-end-color":"var(--color-pink-950)"}': {
    'value': 'border-e-pink-950',
  },
  '{"border-inline-end-color":"var(--color-rose-50)"}': {
    'value': 'border-e-rose-50',
  },
  '{"border-inline-end-color":"var(--color-rose-100)"}': {
    'value': 'border-e-rose-100',
  },
  '{"border-inline-end-color":"var(--color-rose-200)"}': {
    'value': 'border-e-rose-200',
  },
  '{"border-inline-end-color":"var(--color-rose-300)"}': {
    'value': 'border-e-rose-300',
  },
  '{"border-inline-end-color":"var(--color-rose-400)"}': {
    'value': 'border-e-rose-400',
  },
  '{"border-inline-end-color":"var(--color-rose-500)"}': {
    'value': 'border-e-rose-500',
  },
  '{"border-inline-end-color":"var(--color-rose-600)"}': {
    'value': 'border-e-rose-600',
  },
  '{"border-inline-end-color":"var(--color-rose-700)"}': {
    'value': 'border-e-rose-700',
  },
  '{"border-inline-end-color":"var(--color-rose-800)"}': {
    'value': 'border-e-rose-800',
  },
  '{"border-inline-end-color":"var(--color-rose-900)"}': {
    'value': 'border-e-rose-900',
  },
  '{"border-inline-end-color":"var(--color-rose-950)"}': {
    'value': 'border-e-rose-950',
  },
  '{"border-inline-end-color":"var(--color-slate-50)"}': {
    'value': 'border-e-slate-50',
  },
  '{"border-inline-end-color":"var(--color-slate-100)"}': {
    'value': 'border-e-slate-100',
  },
  '{"border-inline-end-color":"var(--color-slate-200)"}': {
    'value': 'border-e-slate-200',
  },
  '{"border-inline-end-color":"var(--color-slate-300)"}': {
    'value': 'border-e-slate-300',
  },
  '{"border-inline-end-color":"var(--color-slate-400)"}': {
    'value': 'border-e-slate-400',
  },
  '{"border-inline-end-color":"var(--color-slate-500)"}': {
    'value': 'border-e-slate-500',
  },
  '{"border-inline-end-color":"var(--color-slate-600)"}': {
    'value': 'border-e-slate-600',
  },
  '{"border-inline-end-color":"var(--color-slate-700)"}': {
    'value': 'border-e-slate-700',
  },
  '{"border-inline-end-color":"var(--color-slate-800)"}': {
    'value': 'border-e-slate-800',
  },
  '{"border-inline-end-color":"var(--color-slate-900)"}': {
    'value': 'border-e-slate-900',
  },
  '{"border-inline-end-color":"var(--color-slate-950)"}': {
    'value': 'border-e-slate-950',
  },
  '{"border-inline-end-color":"var(--color-gray-50)"}': {
    'value': 'border-e-gray-50',
  },
  '{"border-inline-end-color":"var(--color-gray-100)"}': {
    'value': 'border-e-gray-100',
  },
  '{"border-inline-end-color":"var(--color-gray-200)"}': {
    'value': 'border-e-gray-200',
  },
  '{"border-inline-end-color":"var(--color-gray-300)"}': {
    'value': 'border-e-gray-300',
  },
  '{"border-inline-end-color":"var(--color-gray-400)"}': {
    'value': 'border-e-gray-400',
  },
  '{"border-inline-end-color":"var(--color-gray-500)"}': {
    'value': 'border-e-gray-500',
  },
  '{"border-inline-end-color":"var(--color-gray-600)"}': {
    'value': 'border-e-gray-600',
  },
  '{"border-inline-end-color":"var(--color-gray-700)"}': {
    'value': 'border-e-gray-700',
  },
  '{"border-inline-end-color":"var(--color-gray-800)"}': {
    'value': 'border-e-gray-800',
  },
  '{"border-inline-end-color":"var(--color-gray-900)"}': {
    'value': 'border-e-gray-900',
  },
  '{"border-inline-end-color":"var(--color-gray-950)"}': {
    'value': 'border-e-gray-950',
  },
  '{"border-inline-end-color":"var(--color-zinc-50)"}': {
    'value': 'border-e-zinc-50',
  },
  '{"border-inline-end-color":"var(--color-zinc-100)"}': {
    'value': 'border-e-zinc-100',
  },
  '{"border-inline-end-color":"var(--color-zinc-200)"}': {
    'value': 'border-e-zinc-200',
  },
  '{"border-inline-end-color":"var(--color-zinc-300)"}': {
    'value': 'border-e-zinc-300',
  },
  '{"border-inline-end-color":"var(--color-zinc-400)"}': {
    'value': 'border-e-zinc-400',
  },
  '{"border-inline-end-color":"var(--color-zinc-500)"}': {
    'value': 'border-e-zinc-500',
  },
  '{"border-inline-end-color":"var(--color-zinc-600)"}': {
    'value': 'border-e-zinc-600',
  },
  '{"border-inline-end-color":"var(--color-zinc-700)"}': {
    'value': 'border-e-zinc-700',
  },
  '{"border-inline-end-color":"var(--color-zinc-800)"}': {
    'value': 'border-e-zinc-800',
  },
  '{"border-inline-end-color":"var(--color-zinc-900)"}': {
    'value': 'border-e-zinc-900',
  },
  '{"border-inline-end-color":"var(--color-zinc-950)"}': {
    'value': 'border-e-zinc-950',
  },
  '{"border-inline-end-color":"var(--color-neutral-50)"}': {
    'value': 'border-e-neutral-50',
  },
  '{"border-inline-end-color":"var(--color-neutral-100)"}': {
    'value': 'border-e-neutral-100',
  },
  '{"border-inline-end-color":"var(--color-neutral-200)"}': {
    'value': 'border-e-neutral-200',
  },
  '{"border-inline-end-color":"var(--color-neutral-300)"}': {
    'value': 'border-e-neutral-300',
  },
  '{"border-inline-end-color":"var(--color-neutral-400)"}': {
    'value': 'border-e-neutral-400',
  },
  '{"border-inline-end-color":"var(--color-neutral-500)"}': {
    'value': 'border-e-neutral-500',
  },
  '{"border-inline-end-color":"var(--color-neutral-600)"}': {
    'value': 'border-e-neutral-600',
  },
  '{"border-inline-end-color":"var(--color-neutral-700)"}': {
    'value': 'border-e-neutral-700',
  },
  '{"border-inline-end-color":"var(--color-neutral-800)"}': {
    'value': 'border-e-neutral-800',
  },
  '{"border-inline-end-color":"var(--color-neutral-900)"}': {
    'value': 'border-e-neutral-900',
  },
  '{"border-inline-end-color":"var(--color-neutral-950)"}': {
    'value': 'border-e-neutral-950',
  },
  '{"border-inline-end-color":"var(--color-stone-50)"}': {
    'value': 'border-e-stone-50',
  },
  '{"border-inline-end-color":"var(--color-stone-100)"}': {
    'value': 'border-e-stone-100',
  },
  '{"border-inline-end-color":"var(--color-stone-200)"}': {
    'value': 'border-e-stone-200',
  },
  '{"border-inline-end-color":"var(--color-stone-300)"}': {
    'value': 'border-e-stone-300',
  },
  '{"border-inline-end-color":"var(--color-stone-400)"}': {
    'value': 'border-e-stone-400',
  },
  '{"border-inline-end-color":"var(--color-stone-500)"}': {
    'value': 'border-e-stone-500',
  },
  '{"border-inline-end-color":"var(--color-stone-600)"}': {
    'value': 'border-e-stone-600',
  },
  '{"border-inline-end-color":"var(--color-stone-700)"}': {
    'value': 'border-e-stone-700',
  },
  '{"border-inline-end-color":"var(--color-stone-800)"}': {
    'value': 'border-e-stone-800',
  },
  '{"border-inline-end-color":"var(--color-stone-900)"}': {
    'value': 'border-e-stone-900',
  },
  '{"border-inline-end-color":"var(--color-stone-950)"}': {
    'value': 'border-e-stone-950',
  },
  '{"border-inline-end-color":"var(<custom-property>)"}': {
    'value': 'border-e-(<custom-property>)',
  },
  '{"border-inline-end-color":"<value>"}': { 'value': 'border-e-[<value>]' },
  '{"border-top-color":"inherit"}': { 'value': 'border-t-inherit' },
  '{"border-top-color":"currentColor"}': { 'value': 'border-t-current' },
  '{"border-top-color":"transparent"}': { 'value': 'border-t-transparent' },
  '{"border-top-color":"var(--color-black)"}': { 'value': 'border-t-black' },
  '{"border-top-color":"var(--color-white)"}': { 'value': 'border-t-white' },
  '{"border-top-color":"var(--color-red-50)"}': { 'value': 'border-t-red-50' },
  '{"border-top-color":"var(--color-red-100)"}': {
    'value': 'border-t-red-100',
  },
  '{"border-top-color":"var(--color-red-200)"}': {
    'value': 'border-t-red-200',
  },
  '{"border-top-color":"var(--color-red-300)"}': {
    'value': 'border-t-red-300',
  },
  '{"border-top-color":"var(--color-red-400)"}': {
    'value': 'border-t-red-400',
  },
  '{"border-top-color":"var(--color-red-500)"}': {
    'value': 'border-t-red-500',
  },
  '{"border-top-color":"var(--color-red-600)"}': {
    'value': 'border-t-red-600',
  },
  '{"border-top-color":"var(--color-red-700)"}': {
    'value': 'border-t-red-700',
  },
  '{"border-top-color":"var(--color-red-800)"}': {
    'value': 'border-t-red-800',
  },
  '{"border-top-color":"var(--color-red-900)"}': {
    'value': 'border-t-red-900',
  },
  '{"border-top-color":"var(--color-red-950)"}': {
    'value': 'border-t-red-950',
  },
  '{"border-top-color":"var(--color-orange-50)"}': {
    'value': 'border-t-orange-50',
  },
  '{"border-top-color":"var(--color-orange-100)"}': {
    'value': 'border-t-orange-100',
  },
  '{"border-top-color":"var(--color-orange-200)"}': {
    'value': 'border-t-orange-200',
  },
  '{"border-top-color":"var(--color-orange-300)"}': {
    'value': 'border-t-orange-300',
  },
  '{"border-top-color":"var(--color-orange-400)"}': {
    'value': 'border-t-orange-400',
  },
  '{"border-top-color":"var(--color-orange-500)"}': {
    'value': 'border-t-orange-500',
  },
  '{"border-top-color":"var(--color-orange-600)"}': {
    'value': 'border-t-orange-600',
  },
  '{"border-top-color":"var(--color-orange-700)"}': {
    'value': 'border-t-orange-700',
  },
  '{"border-top-color":"var(--color-orange-800)"}': {
    'value': 'border-t-orange-800',
  },
  '{"border-top-color":"var(--color-orange-900)"}': {
    'value': 'border-t-orange-900',
  },
  '{"border-top-color":"var(--color-orange-950)"}': {
    'value': 'border-t-orange-950',
  },
  '{"border-top-color":"var(--color-amber-50)"}': {
    'value': 'border-t-amber-50',
  },
  '{"border-top-color":"var(--color-amber-100)"}': {
    'value': 'border-t-amber-100',
  },
  '{"border-top-color":"var(--color-amber-200)"}': {
    'value': 'border-t-amber-200',
  },
  '{"border-top-color":"var(--color-amber-300)"}': {
    'value': 'border-t-amber-300',
  },
  '{"border-top-color":"var(--color-amber-400)"}': {
    'value': 'border-t-amber-400',
  },
  '{"border-top-color":"var(--color-amber-500)"}': {
    'value': 'border-t-amber-500',
  },
  '{"border-top-color":"var(--color-amber-600)"}': {
    'value': 'border-t-amber-600',
  },
  '{"border-top-color":"var(--color-amber-700)"}': {
    'value': 'border-t-amber-700',
  },
  '{"border-top-color":"var(--color-amber-800)"}': {
    'value': 'border-t-amber-800',
  },
  '{"border-top-color":"var(--color-amber-900)"}': {
    'value': 'border-t-amber-900',
  },
  '{"border-top-color":"var(--color-amber-950)"}': {
    'value': 'border-t-amber-950',
  },
  '{"border-top-color":"var(--color-yellow-50)"}': {
    'value': 'border-t-yellow-50',
  },
  '{"border-top-color":"var(--color-yellow-100)"}': {
    'value': 'border-t-yellow-100',
  },
  '{"border-top-color":"var(--color-yellow-200)"}': {
    'value': 'border-t-yellow-200',
  },
  '{"border-top-color":"var(--color-yellow-300)"}': {
    'value': 'border-t-yellow-300',
  },
  '{"border-top-color":"var(--color-yellow-400)"}': {
    'value': 'border-t-yellow-400',
  },
  '{"border-top-color":"var(--color-yellow-500)"}': {
    'value': 'border-t-yellow-500',
  },
  '{"border-top-color":"var(--color-yellow-600)"}': {
    'value': 'border-t-yellow-600',
  },
  '{"border-top-color":"var(--color-yellow-700)"}': {
    'value': 'border-t-yellow-700',
  },
  '{"border-top-color":"var(--color-yellow-800)"}': {
    'value': 'border-t-yellow-800',
  },
  '{"border-top-color":"var(--color-yellow-900)"}': {
    'value': 'border-t-yellow-900',
  },
  '{"border-top-color":"var(--color-yellow-950)"}': {
    'value': 'border-t-yellow-950',
  },
  '{"border-top-color":"var(--color-lime-50)"}': {
    'value': 'border-t-lime-50',
  },
  '{"border-top-color":"var(--color-lime-100)"}': {
    'value': 'border-t-lime-100',
  },
  '{"border-top-color":"var(--color-lime-200)"}': {
    'value': 'border-t-lime-200',
  },
  '{"border-top-color":"var(--color-lime-300)"}': {
    'value': 'border-t-lime-300',
  },
  '{"border-top-color":"var(--color-lime-400)"}': {
    'value': 'border-t-lime-400',
  },
  '{"border-top-color":"var(--color-lime-500)"}': {
    'value': 'border-t-lime-500',
  },
  '{"border-top-color":"var(--color-lime-600)"}': {
    'value': 'border-t-lime-600',
  },
  '{"border-top-color":"var(--color-lime-700)"}': {
    'value': 'border-t-lime-700',
  },
  '{"border-top-color":"var(--color-lime-800)"}': {
    'value': 'border-t-lime-800',
  },
  '{"border-top-color":"var(--color-lime-900)"}': {
    'value': 'border-t-lime-900',
  },
  '{"border-top-color":"var(--color-lime-950)"}': {
    'value': 'border-t-lime-950',
  },
  '{"border-top-color":"var(--color-green-50)"}': {
    'value': 'border-t-green-50',
  },
  '{"border-top-color":"var(--color-green-100)"}': {
    'value': 'border-t-green-100',
  },
  '{"border-top-color":"var(--color-green-200)"}': {
    'value': 'border-t-green-200',
  },
  '{"border-top-color":"var(--color-green-300)"}': {
    'value': 'border-t-green-300',
  },
  '{"border-top-color":"var(--color-green-400)"}': {
    'value': 'border-t-green-400',
  },
  '{"border-top-color":"var(--color-green-500)"}': {
    'value': 'border-t-green-500',
  },
  '{"border-top-color":"var(--color-green-600)"}': {
    'value': 'border-t-green-600',
  },
  '{"border-top-color":"var(--color-green-700)"}': {
    'value': 'border-t-green-700',
  },
  '{"border-top-color":"var(--color-green-800)"}': {
    'value': 'border-t-green-800',
  },
  '{"border-top-color":"var(--color-green-900)"}': {
    'value': 'border-t-green-900',
  },
  '{"border-top-color":"var(--color-green-950)"}': {
    'value': 'border-t-green-950',
  },
  '{"border-top-color":"var(--color-emerald-50)"}': {
    'value': 'border-t-emerald-50',
  },
  '{"border-top-color":"var(--color-emerald-100)"}': {
    'value': 'border-t-emerald-100',
  },
  '{"border-top-color":"var(--color-emerald-200)"}': {
    'value': 'border-t-emerald-200',
  },
  '{"border-top-color":"var(--color-emerald-300)"}': {
    'value': 'border-t-emerald-300',
  },
  '{"border-top-color":"var(--color-emerald-400)"}': {
    'value': 'border-t-emerald-400',
  },
  '{"border-top-color":"var(--color-emerald-500)"}': {
    'value': 'border-t-emerald-500',
  },
  '{"border-top-color":"var(--color-emerald-600)"}': {
    'value': 'border-t-emerald-600',
  },
  '{"border-top-color":"var(--color-emerald-700)"}': {
    'value': 'border-t-emerald-700',
  },
  '{"border-top-color":"var(--color-emerald-800)"}': {
    'value': 'border-t-emerald-800',
  },
  '{"border-top-color":"var(--color-emerald-900)"}': {
    'value': 'border-t-emerald-900',
  },
  '{"border-top-color":"var(--color-emerald-950)"}': {
    'value': 'border-t-emerald-950',
  },
  '{"border-top-color":"var(--color-teal-50)"}': {
    'value': 'border-t-teal-50',
  },
  '{"border-top-color":"var(--color-teal-100)"}': {
    'value': 'border-t-teal-100',
  },
  '{"border-top-color":"var(--color-teal-200)"}': {
    'value': 'border-t-teal-200',
  },
  '{"border-top-color":"var(--color-teal-300)"}': {
    'value': 'border-t-teal-300',
  },
  '{"border-top-color":"var(--color-teal-400)"}': {
    'value': 'border-t-teal-400',
  },
  '{"border-top-color":"var(--color-teal-500)"}': {
    'value': 'border-t-teal-500',
  },
  '{"border-top-color":"var(--color-teal-600)"}': {
    'value': 'border-t-teal-600',
  },
  '{"border-top-color":"var(--color-teal-700)"}': {
    'value': 'border-t-teal-700',
  },
  '{"border-top-color":"var(--color-teal-800)"}': {
    'value': 'border-t-teal-800',
  },
  '{"border-top-color":"var(--color-teal-900)"}': {
    'value': 'border-t-teal-900',
  },
  '{"border-top-color":"var(--color-teal-950)"}': {
    'value': 'border-t-teal-950',
  },
  '{"border-top-color":"var(--color-cyan-50)"}': {
    'value': 'border-t-cyan-50',
  },
  '{"border-top-color":"var(--color-cyan-100)"}': {
    'value': 'border-t-cyan-100',
  },
  '{"border-top-color":"var(--color-cyan-200)"}': {
    'value': 'border-t-cyan-200',
  },
  '{"border-top-color":"var(--color-cyan-300)"}': {
    'value': 'border-t-cyan-300',
  },
  '{"border-top-color":"var(--color-cyan-400)"}': {
    'value': 'border-t-cyan-400',
  },
  '{"border-top-color":"var(--color-cyan-500)"}': {
    'value': 'border-t-cyan-500',
  },
  '{"border-top-color":"var(--color-cyan-600)"}': {
    'value': 'border-t-cyan-600',
  },
  '{"border-top-color":"var(--color-cyan-700)"}': {
    'value': 'border-t-cyan-700',
  },
  '{"border-top-color":"var(--color-cyan-800)"}': {
    'value': 'border-t-cyan-800',
  },
  '{"border-top-color":"var(--color-cyan-900)"}': {
    'value': 'border-t-cyan-900',
  },
  '{"border-top-color":"var(--color-cyan-950)"}': {
    'value': 'border-t-cyan-950',
  },
  '{"border-top-color":"var(--color-sky-50)"}': { 'value': 'border-t-sky-50' },
  '{"border-top-color":"var(--color-sky-100)"}': {
    'value': 'border-t-sky-100',
  },
  '{"border-top-color":"var(--color-sky-200)"}': {
    'value': 'border-t-sky-200',
  },
  '{"border-top-color":"var(--color-sky-300)"}': {
    'value': 'border-t-sky-300',
  },
  '{"border-top-color":"var(--color-sky-400)"}': {
    'value': 'border-t-sky-400',
  },
  '{"border-top-color":"var(--color-sky-500)"}': {
    'value': 'border-t-sky-500',
  },
  '{"border-top-color":"var(--color-sky-600)"}': {
    'value': 'border-t-sky-600',
  },
  '{"border-top-color":"var(--color-sky-700)"}': {
    'value': 'border-t-sky-700',
  },
  '{"border-top-color":"var(--color-sky-800)"}': {
    'value': 'border-t-sky-800',
  },
  '{"border-top-color":"var(--color-sky-900)"}': {
    'value': 'border-t-sky-900',
  },
  '{"border-top-color":"var(--color-sky-950)"}': {
    'value': 'border-t-sky-950',
  },
  '{"border-top-color":"var(--color-blue-50)"}': {
    'value': 'border-t-blue-50',
  },
  '{"border-top-color":"var(--color-blue-100)"}': {
    'value': 'border-t-blue-100',
  },
  '{"border-top-color":"var(--color-blue-200)"}': {
    'value': 'border-t-blue-200',
  },
  '{"border-top-color":"var(--color-blue-300)"}': {
    'value': 'border-t-blue-300',
  },
  '{"border-top-color":"var(--color-blue-400)"}': {
    'value': 'border-t-blue-400',
  },
  '{"border-top-color":"var(--color-blue-500)"}': {
    'value': 'border-t-blue-500',
  },
  '{"border-top-color":"var(--color-blue-600)"}': {
    'value': 'border-t-blue-600',
  },
  '{"border-top-color":"var(--color-blue-700)"}': {
    'value': 'border-t-blue-700',
  },
  '{"border-top-color":"var(--color-blue-800)"}': {
    'value': 'border-t-blue-800',
  },
  '{"border-top-color":"var(--color-blue-900)"}': {
    'value': 'border-t-blue-900',
  },
  '{"border-top-color":"var(--color-blue-950)"}': {
    'value': 'border-t-blue-950',
  },
  '{"border-top-color":"var(--color-indigo-50)"}': {
    'value': 'border-t-indigo-50',
  },
  '{"border-top-color":"var(--color-indigo-100)"}': {
    'value': 'border-t-indigo-100',
  },
  '{"border-top-color":"var(--color-indigo-200)"}': {
    'value': 'border-t-indigo-200',
  },
  '{"border-top-color":"var(--color-indigo-300)"}': {
    'value': 'border-t-indigo-300',
  },
  '{"border-top-color":"var(--color-indigo-400)"}': {
    'value': 'border-t-indigo-400',
  },
  '{"border-top-color":"var(--color-indigo-500)"}': {
    'value': 'border-t-indigo-500',
  },
  '{"border-top-color":"var(--color-indigo-600)"}': {
    'value': 'border-t-indigo-600',
  },
  '{"border-top-color":"var(--color-indigo-700)"}': {
    'value': 'border-t-indigo-700',
  },
  '{"border-top-color":"var(--color-indigo-800)"}': {
    'value': 'border-t-indigo-800',
  },
  '{"border-top-color":"var(--color-indigo-900)"}': {
    'value': 'border-t-indigo-900',
  },
  '{"border-top-color":"var(--color-indigo-950)"}': {
    'value': 'border-t-indigo-950',
  },
  '{"border-top-color":"var(--color-violet-50)"}': {
    'value': 'border-t-violet-50',
  },
  '{"border-top-color":"var(--color-violet-100)"}': {
    'value': 'border-t-violet-100',
  },
  '{"border-top-color":"var(--color-violet-200)"}': {
    'value': 'border-t-violet-200',
  },
  '{"border-top-color":"var(--color-violet-300)"}': {
    'value': 'border-t-violet-300',
  },
  '{"border-top-color":"var(--color-violet-400)"}': {
    'value': 'border-t-violet-400',
  },
  '{"border-top-color":"var(--color-violet-500)"}': {
    'value': 'border-t-violet-500',
  },
  '{"border-top-color":"var(--color-violet-600)"}': {
    'value': 'border-t-violet-600',
  },
  '{"border-top-color":"var(--color-violet-700)"}': {
    'value': 'border-t-violet-700',
  },
  '{"border-top-color":"var(--color-violet-800)"}': {
    'value': 'border-t-violet-800',
  },
  '{"border-top-color":"var(--color-violet-900)"}': {
    'value': 'border-t-violet-900',
  },
  '{"border-top-color":"var(--color-violet-950)"}': {
    'value': 'border-t-violet-950',
  },
  '{"border-top-color":"var(--color-purple-50)"}': {
    'value': 'border-t-purple-50',
  },
  '{"border-top-color":"var(--color-purple-100)"}': {
    'value': 'border-t-purple-100',
  },
  '{"border-top-color":"var(--color-purple-200)"}': {
    'value': 'border-t-purple-200',
  },
  '{"border-top-color":"var(--color-purple-300)"}': {
    'value': 'border-t-purple-300',
  },
  '{"border-top-color":"var(--color-purple-400)"}': {
    'value': 'border-t-purple-400',
  },
  '{"border-top-color":"var(--color-purple-500)"}': {
    'value': 'border-t-purple-500',
  },
  '{"border-top-color":"var(--color-purple-600)"}': {
    'value': 'border-t-purple-600',
  },
  '{"border-top-color":"var(--color-purple-700)"}': {
    'value': 'border-t-purple-700',
  },
  '{"border-top-color":"var(--color-purple-800)"}': {
    'value': 'border-t-purple-800',
  },
  '{"border-top-color":"var(--color-purple-900)"}': {
    'value': 'border-t-purple-900',
  },
  '{"border-top-color":"var(--color-purple-950)"}': {
    'value': 'border-t-purple-950',
  },
  '{"border-top-color":"var(--color-fuchsia-50)"}': {
    'value': 'border-t-fuchsia-50',
  },
  '{"border-top-color":"var(--color-fuchsia-100)"}': {
    'value': 'border-t-fuchsia-100',
  },
  '{"border-top-color":"var(--color-fuchsia-200)"}': {
    'value': 'border-t-fuchsia-200',
  },
  '{"border-top-color":"var(--color-fuchsia-300)"}': {
    'value': 'border-t-fuchsia-300',
  },
  '{"border-top-color":"var(--color-fuchsia-400)"}': {
    'value': 'border-t-fuchsia-400',
  },
  '{"border-top-color":"var(--color-fuchsia-500)"}': {
    'value': 'border-t-fuchsia-500',
  },
  '{"border-top-color":"var(--color-fuchsia-600)"}': {
    'value': 'border-t-fuchsia-600',
  },
  '{"border-top-color":"var(--color-fuchsia-700)"}': {
    'value': 'border-t-fuchsia-700',
  },
  '{"border-top-color":"var(--color-fuchsia-800)"}': {
    'value': 'border-t-fuchsia-800',
  },
  '{"border-top-color":"var(--color-fuchsia-900)"}': {
    'value': 'border-t-fuchsia-900',
  },
  '{"border-top-color":"var(--color-fuchsia-950)"}': {
    'value': 'border-t-fuchsia-950',
  },
  '{"border-top-color":"var(--color-pink-50)"}': {
    'value': 'border-t-pink-50',
  },
  '{"border-top-color":"var(--color-pink-100)"}': {
    'value': 'border-t-pink-100',
  },
  '{"border-top-color":"var(--color-pink-200)"}': {
    'value': 'border-t-pink-200',
  },
  '{"border-top-color":"var(--color-pink-300)"}': {
    'value': 'border-t-pink-300',
  },
  '{"border-top-color":"var(--color-pink-400)"}': {
    'value': 'border-t-pink-400',
  },
  '{"border-top-color":"var(--color-pink-500)"}': {
    'value': 'border-t-pink-500',
  },
  '{"border-top-color":"var(--color-pink-600)"}': {
    'value': 'border-t-pink-600',
  },
  '{"border-top-color":"var(--color-pink-700)"}': {
    'value': 'border-t-pink-700',
  },
  '{"border-top-color":"var(--color-pink-800)"}': {
    'value': 'border-t-pink-800',
  },
  '{"border-top-color":"var(--color-pink-900)"}': {
    'value': 'border-t-pink-900',
  },
  '{"border-top-color":"var(--color-pink-950)"}': {
    'value': 'border-t-pink-950',
  },
  '{"border-top-color":"var(--color-rose-50)"}': {
    'value': 'border-t-rose-50',
  },
  '{"border-top-color":"var(--color-rose-100)"}': {
    'value': 'border-t-rose-100',
  },
  '{"border-top-color":"var(--color-rose-200)"}': {
    'value': 'border-t-rose-200',
  },
  '{"border-top-color":"var(--color-rose-300)"}': {
    'value': 'border-t-rose-300',
  },
  '{"border-top-color":"var(--color-rose-400)"}': {
    'value': 'border-t-rose-400',
  },
  '{"border-top-color":"var(--color-rose-500)"}': {
    'value': 'border-t-rose-500',
  },
  '{"border-top-color":"var(--color-rose-600)"}': {
    'value': 'border-t-rose-600',
  },
  '{"border-top-color":"var(--color-rose-700)"}': {
    'value': 'border-t-rose-700',
  },
  '{"border-top-color":"var(--color-rose-800)"}': {
    'value': 'border-t-rose-800',
  },
  '{"border-top-color":"var(--color-rose-900)"}': {
    'value': 'border-t-rose-900',
  },
  '{"border-top-color":"var(--color-rose-950)"}': {
    'value': 'border-t-rose-950',
  },
  '{"border-top-color":"var(--color-slate-50)"}': {
    'value': 'border-t-slate-50',
  },
  '{"border-top-color":"var(--color-slate-100)"}': {
    'value': 'border-t-slate-100',
  },
  '{"border-top-color":"var(--color-slate-200)"}': {
    'value': 'border-t-slate-200',
  },
  '{"border-top-color":"var(--color-slate-300)"}': {
    'value': 'border-t-slate-300',
  },
  '{"border-top-color":"var(--color-slate-400)"}': {
    'value': 'border-t-slate-400',
  },
  '{"border-top-color":"var(--color-slate-500)"}': {
    'value': 'border-t-slate-500',
  },
  '{"border-top-color":"var(--color-slate-600)"}': {
    'value': 'border-t-slate-600',
  },
  '{"border-top-color":"var(--color-slate-700)"}': {
    'value': 'border-t-slate-700',
  },
  '{"border-top-color":"var(--color-slate-800)"}': {
    'value': 'border-t-slate-800',
  },
  '{"border-top-color":"var(--color-slate-900)"}': {
    'value': 'border-t-slate-900',
  },
  '{"border-top-color":"var(--color-slate-950)"}': {
    'value': 'border-t-slate-950',
  },
  '{"border-top-color":"var(--color-gray-50)"}': {
    'value': 'border-t-gray-50',
  },
  '{"border-top-color":"var(--color-gray-100)"}': {
    'value': 'border-t-gray-100',
  },
  '{"border-top-color":"var(--color-gray-200)"}': {
    'value': 'border-t-gray-200',
  },
  '{"border-top-color":"var(--color-gray-300)"}': {
    'value': 'border-t-gray-300',
  },
  '{"border-top-color":"var(--color-gray-400)"}': {
    'value': 'border-t-gray-400',
  },
  '{"border-top-color":"var(--color-gray-500)"}': {
    'value': 'border-t-gray-500',
  },
  '{"border-top-color":"var(--color-gray-600)"}': {
    'value': 'border-t-gray-600',
  },
  '{"border-top-color":"var(--color-gray-700)"}': {
    'value': 'border-t-gray-700',
  },
  '{"border-top-color":"var(--color-gray-800)"}': {
    'value': 'border-t-gray-800',
  },
  '{"border-top-color":"var(--color-gray-900)"}': {
    'value': 'border-t-gray-900',
  },
  '{"border-top-color":"var(--color-gray-950)"}': {
    'value': 'border-t-gray-950',
  },
  '{"border-top-color":"var(--color-zinc-50)"}': {
    'value': 'border-t-zinc-50',
  },
  '{"border-top-color":"var(--color-zinc-100)"}': {
    'value': 'border-t-zinc-100',
  },
  '{"border-top-color":"var(--color-zinc-200)"}': {
    'value': 'border-t-zinc-200',
  },
  '{"border-top-color":"var(--color-zinc-300)"}': {
    'value': 'border-t-zinc-300',
  },
  '{"border-top-color":"var(--color-zinc-400)"}': {
    'value': 'border-t-zinc-400',
  },
  '{"border-top-color":"var(--color-zinc-500)"}': {
    'value': 'border-t-zinc-500',
  },
  '{"border-top-color":"var(--color-zinc-600)"}': {
    'value': 'border-t-zinc-600',
  },
  '{"border-top-color":"var(--color-zinc-700)"}': {
    'value': 'border-t-zinc-700',
  },
  '{"border-top-color":"var(--color-zinc-800)"}': {
    'value': 'border-t-zinc-800',
  },
  '{"border-top-color":"var(--color-zinc-900)"}': {
    'value': 'border-t-zinc-900',
  },
  '{"border-top-color":"var(--color-zinc-950)"}': {
    'value': 'border-t-zinc-950',
  },
  '{"border-top-color":"var(--color-neutral-50)"}': {
    'value': 'border-t-neutral-50',
  },
  '{"border-top-color":"var(--color-neutral-100)"}': {
    'value': 'border-t-neutral-100',
  },
  '{"border-top-color":"var(--color-neutral-200)"}': {
    'value': 'border-t-neutral-200',
  },
  '{"border-top-color":"var(--color-neutral-300)"}': {
    'value': 'border-t-neutral-300',
  },
  '{"border-top-color":"var(--color-neutral-400)"}': {
    'value': 'border-t-neutral-400',
  },
  '{"border-top-color":"var(--color-neutral-500)"}': {
    'value': 'border-t-neutral-500',
  },
  '{"border-top-color":"var(--color-neutral-600)"}': {
    'value': 'border-t-neutral-600',
  },
  '{"border-top-color":"var(--color-neutral-700)"}': {
    'value': 'border-t-neutral-700',
  },
  '{"border-top-color":"var(--color-neutral-800)"}': {
    'value': 'border-t-neutral-800',
  },
  '{"border-top-color":"var(--color-neutral-900)"}': {
    'value': 'border-t-neutral-900',
  },
  '{"border-top-color":"var(--color-neutral-950)"}': {
    'value': 'border-t-neutral-950',
  },
  '{"border-top-color":"var(--color-stone-50)"}': {
    'value': 'border-t-stone-50',
  },
  '{"border-top-color":"var(--color-stone-100)"}': {
    'value': 'border-t-stone-100',
  },
  '{"border-top-color":"var(--color-stone-200)"}': {
    'value': 'border-t-stone-200',
  },
  '{"border-top-color":"var(--color-stone-300)"}': {
    'value': 'border-t-stone-300',
  },
  '{"border-top-color":"var(--color-stone-400)"}': {
    'value': 'border-t-stone-400',
  },
  '{"border-top-color":"var(--color-stone-500)"}': {
    'value': 'border-t-stone-500',
  },
  '{"border-top-color":"var(--color-stone-600)"}': {
    'value': 'border-t-stone-600',
  },
  '{"border-top-color":"var(--color-stone-700)"}': {
    'value': 'border-t-stone-700',
  },
  '{"border-top-color":"var(--color-stone-800)"}': {
    'value': 'border-t-stone-800',
  },
  '{"border-top-color":"var(--color-stone-900)"}': {
    'value': 'border-t-stone-900',
  },
  '{"border-top-color":"var(--color-stone-950)"}': {
    'value': 'border-t-stone-950',
  },
  '{"border-top-color":"var(<custom-property>)"}': {
    'value': 'border-t-(<custom-property>)',
  },
  '{"border-top-color":"<value>"}': { 'value': 'border-t-[<value>]' },
  '{"border-right-color":"inherit"}': { 'value': 'border-r-inherit' },
  '{"border-right-color":"currentColor"}': { 'value': 'border-r-current' },
  '{"border-right-color":"transparent"}': { 'value': 'border-r-transparent' },
  '{"border-right-color":"var(--color-black)"}': { 'value': 'border-r-black' },
  '{"border-right-color":"var(--color-white)"}': { 'value': 'border-r-white' },
  '{"border-right-color":"var(--color-red-50)"}': {
    'value': 'border-r-red-50',
  },
  '{"border-right-color":"var(--color-red-100)"}': {
    'value': 'border-r-red-100',
  },
  '{"border-right-color":"var(--color-red-200)"}': {
    'value': 'border-r-red-200',
  },
  '{"border-right-color":"var(--color-red-300)"}': {
    'value': 'border-r-red-300',
  },
  '{"border-right-color":"var(--color-red-400)"}': {
    'value': 'border-r-red-400',
  },
  '{"border-right-color":"var(--color-red-500)"}': {
    'value': 'border-r-red-500',
  },
  '{"border-right-color":"var(--color-red-600)"}': {
    'value': 'border-r-red-600',
  },
  '{"border-right-color":"var(--color-red-700)"}': {
    'value': 'border-r-red-700',
  },
  '{"border-right-color":"var(--color-red-800)"}': {
    'value': 'border-r-red-800',
  },
  '{"border-right-color":"var(--color-red-900)"}': {
    'value': 'border-r-red-900',
  },
  '{"border-right-color":"var(--color-red-950)"}': {
    'value': 'border-r-red-950',
  },
  '{"border-right-color":"var(--color-orange-50)"}': {
    'value': 'border-r-orange-50',
  },
  '{"border-right-color":"var(--color-orange-100)"}': {
    'value': 'border-r-orange-100',
  },
  '{"border-right-color":"var(--color-orange-200)"}': {
    'value': 'border-r-orange-200',
  },
  '{"border-right-color":"var(--color-orange-300)"}': {
    'value': 'border-r-orange-300',
  },
  '{"border-right-color":"var(--color-orange-400)"}': {
    'value': 'border-r-orange-400',
  },
  '{"border-right-color":"var(--color-orange-500)"}': {
    'value': 'border-r-orange-500',
  },
  '{"border-right-color":"var(--color-orange-600)"}': {
    'value': 'border-r-orange-600',
  },
  '{"border-right-color":"var(--color-orange-700)"}': {
    'value': 'border-r-orange-700',
  },
  '{"border-right-color":"var(--color-orange-800)"}': {
    'value': 'border-r-orange-800',
  },
  '{"border-right-color":"var(--color-orange-900)"}': {
    'value': 'border-r-orange-900',
  },
  '{"border-right-color":"var(--color-orange-950)"}': {
    'value': 'border-r-orange-950',
  },
  '{"border-right-color":"var(--color-amber-50)"}': {
    'value': 'border-r-amber-50',
  },
  '{"border-right-color":"var(--color-amber-100)"}': {
    'value': 'border-r-amber-100',
  },
  '{"border-right-color":"var(--color-amber-200)"}': {
    'value': 'border-r-amber-200',
  },
  '{"border-right-color":"var(--color-amber-300)"}': {
    'value': 'border-r-amber-300',
  },
  '{"border-right-color":"var(--color-amber-400)"}': {
    'value': 'border-r-amber-400',
  },
  '{"border-right-color":"var(--color-amber-500)"}': {
    'value': 'border-r-amber-500',
  },
  '{"border-right-color":"var(--color-amber-600)"}': {
    'value': 'border-r-amber-600',
  },
  '{"border-right-color":"var(--color-amber-700)"}': {
    'value': 'border-r-amber-700',
  },
  '{"border-right-color":"var(--color-amber-800)"}': {
    'value': 'border-r-amber-800',
  },
  '{"border-right-color":"var(--color-amber-900)"}': {
    'value': 'border-r-amber-900',
  },
  '{"border-right-color":"var(--color-amber-950)"}': {
    'value': 'border-r-amber-950',
  },
  '{"border-right-color":"var(--color-yellow-50)"}': {
    'value': 'border-r-yellow-50',
  },
  '{"border-right-color":"var(--color-yellow-100)"}': {
    'value': 'border-r-yellow-100',
  },
  '{"border-right-color":"var(--color-yellow-200)"}': {
    'value': 'border-r-yellow-200',
  },
  '{"border-right-color":"var(--color-yellow-300)"}': {
    'value': 'border-r-yellow-300',
  },
  '{"border-right-color":"var(--color-yellow-400)"}': {
    'value': 'border-r-yellow-400',
  },
  '{"border-right-color":"var(--color-yellow-500)"}': {
    'value': 'border-r-yellow-500',
  },
  '{"border-right-color":"var(--color-yellow-600)"}': {
    'value': 'border-r-yellow-600',
  },
  '{"border-right-color":"var(--color-yellow-700)"}': {
    'value': 'border-r-yellow-700',
  },
  '{"border-right-color":"var(--color-yellow-800)"}': {
    'value': 'border-r-yellow-800',
  },
  '{"border-right-color":"var(--color-yellow-900)"}': {
    'value': 'border-r-yellow-900',
  },
  '{"border-right-color":"var(--color-yellow-950)"}': {
    'value': 'border-r-yellow-950',
  },
  '{"border-right-color":"var(--color-lime-50)"}': {
    'value': 'border-r-lime-50',
  },
  '{"border-right-color":"var(--color-lime-100)"}': {
    'value': 'border-r-lime-100',
  },
  '{"border-right-color":"var(--color-lime-200)"}': {
    'value': 'border-r-lime-200',
  },
  '{"border-right-color":"var(--color-lime-300)"}': {
    'value': 'border-r-lime-300',
  },
  '{"border-right-color":"var(--color-lime-400)"}': {
    'value': 'border-r-lime-400',
  },
  '{"border-right-color":"var(--color-lime-500)"}': {
    'value': 'border-r-lime-500',
  },
  '{"border-right-color":"var(--color-lime-600)"}': {
    'value': 'border-r-lime-600',
  },
  '{"border-right-color":"var(--color-lime-700)"}': {
    'value': 'border-r-lime-700',
  },
  '{"border-right-color":"var(--color-lime-800)"}': {
    'value': 'border-r-lime-800',
  },
  '{"border-right-color":"var(--color-lime-900)"}': {
    'value': 'border-r-lime-900',
  },
  '{"border-right-color":"var(--color-lime-950)"}': {
    'value': 'border-r-lime-950',
  },
  '{"border-right-color":"var(--color-green-50)"}': {
    'value': 'border-r-green-50',
  },
  '{"border-right-color":"var(--color-green-100)"}': {
    'value': 'border-r-green-100',
  },
  '{"border-right-color":"var(--color-green-200)"}': {
    'value': 'border-r-green-200',
  },
  '{"border-right-color":"var(--color-green-300)"}': {
    'value': 'border-r-green-300',
  },
  '{"border-right-color":"var(--color-green-400)"}': {
    'value': 'border-r-green-400',
  },
  '{"border-right-color":"var(--color-green-500)"}': {
    'value': 'border-r-green-500',
  },
  '{"border-right-color":"var(--color-green-600)"}': {
    'value': 'border-r-green-600',
  },
  '{"border-right-color":"var(--color-green-700)"}': {
    'value': 'border-r-green-700',
  },
  '{"border-right-color":"var(--color-green-800)"}': {
    'value': 'border-r-green-800',
  },
  '{"border-right-color":"var(--color-green-900)"}': {
    'value': 'border-r-green-900',
  },
  '{"border-right-color":"var(--color-green-950)"}': {
    'value': 'border-r-green-950',
  },
  '{"border-right-color":"var(--color-emerald-50)"}': {
    'value': 'border-r-emerald-50',
  },
  '{"border-right-color":"var(--color-emerald-100)"}': {
    'value': 'border-r-emerald-100',
  },
  '{"border-right-color":"var(--color-emerald-200)"}': {
    'value': 'border-r-emerald-200',
  },
  '{"border-right-color":"var(--color-emerald-300)"}': {
    'value': 'border-r-emerald-300',
  },
  '{"border-right-color":"var(--color-emerald-400)"}': {
    'value': 'border-r-emerald-400',
  },
  '{"border-right-color":"var(--color-emerald-500)"}': {
    'value': 'border-r-emerald-500',
  },
  '{"border-right-color":"var(--color-emerald-600)"}': {
    'value': 'border-r-emerald-600',
  },
  '{"border-right-color":"var(--color-emerald-700)"}': {
    'value': 'border-r-emerald-700',
  },
  '{"border-right-color":"var(--color-emerald-800)"}': {
    'value': 'border-r-emerald-800',
  },
  '{"border-right-color":"var(--color-emerald-900)"}': {
    'value': 'border-r-emerald-900',
  },
  '{"border-right-color":"var(--color-emerald-950)"}': {
    'value': 'border-r-emerald-950',
  },
  '{"border-right-color":"var(--color-teal-50)"}': {
    'value': 'border-r-teal-50',
  },
  '{"border-right-color":"var(--color-teal-100)"}': {
    'value': 'border-r-teal-100',
  },
  '{"border-right-color":"var(--color-teal-200)"}': {
    'value': 'border-r-teal-200',
  },
  '{"border-right-color":"var(--color-teal-300)"}': {
    'value': 'border-r-teal-300',
  },
  '{"border-right-color":"var(--color-teal-400)"}': {
    'value': 'border-r-teal-400',
  },
  '{"border-right-color":"var(--color-teal-500)"}': {
    'value': 'border-r-teal-500',
  },
  '{"border-right-color":"var(--color-teal-600)"}': {
    'value': 'border-r-teal-600',
  },
  '{"border-right-color":"var(--color-teal-700)"}': {
    'value': 'border-r-teal-700',
  },
  '{"border-right-color":"var(--color-teal-800)"}': {
    'value': 'border-r-teal-800',
  },
  '{"border-right-color":"var(--color-teal-900)"}': {
    'value': 'border-r-teal-900',
  },
  '{"border-right-color":"var(--color-teal-950)"}': {
    'value': 'border-r-teal-950',
  },
  '{"border-right-color":"var(--color-cyan-50)"}': {
    'value': 'border-r-cyan-50',
  },
  '{"border-right-color":"var(--color-cyan-100)"}': {
    'value': 'border-r-cyan-100',
  },
  '{"border-right-color":"var(--color-cyan-200)"}': {
    'value': 'border-r-cyan-200',
  },
  '{"border-right-color":"var(--color-cyan-300)"}': {
    'value': 'border-r-cyan-300',
  },
  '{"border-right-color":"var(--color-cyan-400)"}': {
    'value': 'border-r-cyan-400',
  },
  '{"border-right-color":"var(--color-cyan-500)"}': {
    'value': 'border-r-cyan-500',
  },
  '{"border-right-color":"var(--color-cyan-600)"}': {
    'value': 'border-r-cyan-600',
  },
  '{"border-right-color":"var(--color-cyan-700)"}': {
    'value': 'border-r-cyan-700',
  },
  '{"border-right-color":"var(--color-cyan-800)"}': {
    'value': 'border-r-cyan-800',
  },
  '{"border-right-color":"var(--color-cyan-900)"}': {
    'value': 'border-r-cyan-900',
  },
  '{"border-right-color":"var(--color-cyan-950)"}': {
    'value': 'border-r-cyan-950',
  },
  '{"border-right-color":"var(--color-sky-50)"}': {
    'value': 'border-r-sky-50',
  },
  '{"border-right-color":"var(--color-sky-100)"}': {
    'value': 'border-r-sky-100',
  },
  '{"border-right-color":"var(--color-sky-200)"}': {
    'value': 'border-r-sky-200',
  },
  '{"border-right-color":"var(--color-sky-300)"}': {
    'value': 'border-r-sky-300',
  },
  '{"border-right-color":"var(--color-sky-400)"}': {
    'value': 'border-r-sky-400',
  },
  '{"border-right-color":"var(--color-sky-500)"}': {
    'value': 'border-r-sky-500',
  },
  '{"border-right-color":"var(--color-sky-600)"}': {
    'value': 'border-r-sky-600',
  },
  '{"border-right-color":"var(--color-sky-700)"}': {
    'value': 'border-r-sky-700',
  },
  '{"border-right-color":"var(--color-sky-800)"}': {
    'value': 'border-r-sky-800',
  },
  '{"border-right-color":"var(--color-sky-900)"}': {
    'value': 'border-r-sky-900',
  },
  '{"border-right-color":"var(--color-sky-950)"}': {
    'value': 'border-r-sky-950',
  },
  '{"border-right-color":"var(--color-blue-50)"}': {
    'value': 'border-r-blue-50',
  },
  '{"border-right-color":"var(--color-blue-100)"}': {
    'value': 'border-r-blue-100',
  },
  '{"border-right-color":"var(--color-blue-200)"}': {
    'value': 'border-r-blue-200',
  },
  '{"border-right-color":"var(--color-blue-300)"}': {
    'value': 'border-r-blue-300',
  },
  '{"border-right-color":"var(--color-blue-400)"}': {
    'value': 'border-r-blue-400',
  },
  '{"border-right-color":"var(--color-blue-500)"}': {
    'value': 'border-r-blue-500',
  },
  '{"border-right-color":"var(--color-blue-600)"}': {
    'value': 'border-r-blue-600',
  },
  '{"border-right-color":"var(--color-blue-700)"}': {
    'value': 'border-r-blue-700',
  },
  '{"border-right-color":"var(--color-blue-800)"}': {
    'value': 'border-r-blue-800',
  },
  '{"border-right-color":"var(--color-blue-900)"}': {
    'value': 'border-r-blue-900',
  },
  '{"border-right-color":"var(--color-blue-950)"}': {
    'value': 'border-r-blue-950',
  },
  '{"border-right-color":"var(--color-indigo-50)"}': {
    'value': 'border-r-indigo-50',
  },
  '{"border-right-color":"var(--color-indigo-100)"}': {
    'value': 'border-r-indigo-100',
  },
  '{"border-right-color":"var(--color-indigo-200)"}': {
    'value': 'border-r-indigo-200',
  },
  '{"border-right-color":"var(--color-indigo-300)"}': {
    'value': 'border-r-indigo-300',
  },
  '{"border-right-color":"var(--color-indigo-400)"}': {
    'value': 'border-r-indigo-400',
  },
  '{"border-right-color":"var(--color-indigo-500)"}': {
    'value': 'border-r-indigo-500',
  },
  '{"border-right-color":"var(--color-indigo-600)"}': {
    'value': 'border-r-indigo-600',
  },
  '{"border-right-color":"var(--color-indigo-700)"}': {
    'value': 'border-r-indigo-700',
  },
  '{"border-right-color":"var(--color-indigo-800)"}': {
    'value': 'border-r-indigo-800',
  },
  '{"border-right-color":"var(--color-indigo-900)"}': {
    'value': 'border-r-indigo-900',
  },
  '{"border-right-color":"var(--color-indigo-950)"}': {
    'value': 'border-r-indigo-950',
  },
  '{"border-right-color":"var(--color-violet-50)"}': {
    'value': 'border-r-violet-50',
  },
  '{"border-right-color":"var(--color-violet-100)"}': {
    'value': 'border-r-violet-100',
  },
  '{"border-right-color":"var(--color-violet-200)"}': {
    'value': 'border-r-violet-200',
  },
  '{"border-right-color":"var(--color-violet-300)"}': {
    'value': 'border-r-violet-300',
  },
  '{"border-right-color":"var(--color-violet-400)"}': {
    'value': 'border-r-violet-400',
  },
  '{"border-right-color":"var(--color-violet-500)"}': {
    'value': 'border-r-violet-500',
  },
  '{"border-right-color":"var(--color-violet-600)"}': {
    'value': 'border-r-violet-600',
  },
  '{"border-right-color":"var(--color-violet-700)"}': {
    'value': 'border-r-violet-700',
  },
  '{"border-right-color":"var(--color-violet-800)"}': {
    'value': 'border-r-violet-800',
  },
  '{"border-right-color":"var(--color-violet-900)"}': {
    'value': 'border-r-violet-900',
  },
  '{"border-right-color":"var(--color-violet-950)"}': {
    'value': 'border-r-violet-950',
  },
  '{"border-right-color":"var(--color-purple-50)"}': {
    'value': 'border-r-purple-50',
  },
  '{"border-right-color":"var(--color-purple-100)"}': {
    'value': 'border-r-purple-100',
  },
  '{"border-right-color":"var(--color-purple-200)"}': {
    'value': 'border-r-purple-200',
  },
  '{"border-right-color":"var(--color-purple-300)"}': {
    'value': 'border-r-purple-300',
  },
  '{"border-right-color":"var(--color-purple-400)"}': {
    'value': 'border-r-purple-400',
  },
  '{"border-right-color":"var(--color-purple-500)"}': {
    'value': 'border-r-purple-500',
  },
  '{"border-right-color":"var(--color-purple-600)"}': {
    'value': 'border-r-purple-600',
  },
  '{"border-right-color":"var(--color-purple-700)"}': {
    'value': 'border-r-purple-700',
  },
  '{"border-right-color":"var(--color-purple-800)"}': {
    'value': 'border-r-purple-800',
  },
  '{"border-right-color":"var(--color-purple-900)"}': {
    'value': 'border-r-purple-900',
  },
  '{"border-right-color":"var(--color-purple-950)"}': {
    'value': 'border-r-purple-950',
  },
  '{"border-right-color":"var(--color-fuchsia-50)"}': {
    'value': 'border-r-fuchsia-50',
  },
  '{"border-right-color":"var(--color-fuchsia-100)"}': {
    'value': 'border-r-fuchsia-100',
  },
  '{"border-right-color":"var(--color-fuchsia-200)"}': {
    'value': 'border-r-fuchsia-200',
  },
  '{"border-right-color":"var(--color-fuchsia-300)"}': {
    'value': 'border-r-fuchsia-300',
  },
  '{"border-right-color":"var(--color-fuchsia-400)"}': {
    'value': 'border-r-fuchsia-400',
  },
  '{"border-right-color":"var(--color-fuchsia-500)"}': {
    'value': 'border-r-fuchsia-500',
  },
  '{"border-right-color":"var(--color-fuchsia-600)"}': {
    'value': 'border-r-fuchsia-600',
  },
  '{"border-right-color":"var(--color-fuchsia-700)"}': {
    'value': 'border-r-fuchsia-700',
  },
  '{"border-right-color":"var(--color-fuchsia-800)"}': {
    'value': 'border-r-fuchsia-800',
  },
  '{"border-right-color":"var(--color-fuchsia-900)"}': {
    'value': 'border-r-fuchsia-900',
  },
  '{"border-right-color":"var(--color-fuchsia-950)"}': {
    'value': 'border-r-fuchsia-950',
  },
  '{"border-right-color":"var(--color-pink-50)"}': {
    'value': 'border-r-pink-50',
  },
  '{"border-right-color":"var(--color-pink-100)"}': {
    'value': 'border-r-pink-100',
  },
  '{"border-right-color":"var(--color-pink-200)"}': {
    'value': 'border-r-pink-200',
  },
  '{"border-right-color":"var(--color-pink-300)"}': {
    'value': 'border-r-pink-300',
  },
  '{"border-right-color":"var(--color-pink-400)"}': {
    'value': 'border-r-pink-400',
  },
  '{"border-right-color":"var(--color-pink-500)"}': {
    'value': 'border-r-pink-500',
  },
  '{"border-right-color":"var(--color-pink-600)"}': {
    'value': 'border-r-pink-600',
  },
  '{"border-right-color":"var(--color-pink-700)"}': {
    'value': 'border-r-pink-700',
  },
  '{"border-right-color":"var(--color-pink-800)"}': {
    'value': 'border-r-pink-800',
  },
  '{"border-right-color":"var(--color-pink-900)"}': {
    'value': 'border-r-pink-900',
  },
  '{"border-right-color":"var(--color-pink-950)"}': {
    'value': 'border-r-pink-950',
  },
  '{"border-right-color":"var(--color-rose-50)"}': {
    'value': 'border-r-rose-50',
  },
  '{"border-right-color":"var(--color-rose-100)"}': {
    'value': 'border-r-rose-100',
  },
  '{"border-right-color":"var(--color-rose-200)"}': {
    'value': 'border-r-rose-200',
  },
  '{"border-right-color":"var(--color-rose-300)"}': {
    'value': 'border-r-rose-300',
  },
  '{"border-right-color":"var(--color-rose-400)"}': {
    'value': 'border-r-rose-400',
  },
  '{"border-right-color":"var(--color-rose-500)"}': {
    'value': 'border-r-rose-500',
  },
  '{"border-right-color":"var(--color-rose-600)"}': {
    'value': 'border-r-rose-600',
  },
  '{"border-right-color":"var(--color-rose-700)"}': {
    'value': 'border-r-rose-700',
  },
  '{"border-right-color":"var(--color-rose-800)"}': {
    'value': 'border-r-rose-800',
  },
  '{"border-right-color":"var(--color-rose-900)"}': {
    'value': 'border-r-rose-900',
  },
  '{"border-right-color":"var(--color-rose-950)"}': {
    'value': 'border-r-rose-950',
  },
  '{"border-right-color":"var(--color-slate-50)"}': {
    'value': 'border-r-slate-50',
  },
  '{"border-right-color":"var(--color-slate-100)"}': {
    'value': 'border-r-slate-100',
  },
  '{"border-right-color":"var(--color-slate-200)"}': {
    'value': 'border-r-slate-200',
  },
  '{"border-right-color":"var(--color-slate-300)"}': {
    'value': 'border-r-slate-300',
  },
  '{"border-right-color":"var(--color-slate-400)"}': {
    'value': 'border-r-slate-400',
  },
  '{"border-right-color":"var(--color-slate-500)"}': {
    'value': 'border-r-slate-500',
  },
  '{"border-right-color":"var(--color-slate-600)"}': {
    'value': 'border-r-slate-600',
  },
  '{"border-right-color":"var(--color-slate-700)"}': {
    'value': 'border-r-slate-700',
  },
  '{"border-right-color":"var(--color-slate-800)"}': {
    'value': 'border-r-slate-800',
  },
  '{"border-right-color":"var(--color-slate-900)"}': {
    'value': 'border-r-slate-900',
  },
  '{"border-right-color":"var(--color-slate-950)"}': {
    'value': 'border-r-slate-950',
  },
  '{"border-right-color":"var(--color-gray-50)"}': {
    'value': 'border-r-gray-50',
  },
  '{"border-right-color":"var(--color-gray-100)"}': {
    'value': 'border-r-gray-100',
  },
  '{"border-right-color":"var(--color-gray-200)"}': {
    'value': 'border-r-gray-200',
  },
  '{"border-right-color":"var(--color-gray-300)"}': {
    'value': 'border-r-gray-300',
  },
  '{"border-right-color":"var(--color-gray-400)"}': {
    'value': 'border-r-gray-400',
  },
  '{"border-right-color":"var(--color-gray-500)"}': {
    'value': 'border-r-gray-500',
  },
  '{"border-right-color":"var(--color-gray-600)"}': {
    'value': 'border-r-gray-600',
  },
  '{"border-right-color":"var(--color-gray-700)"}': {
    'value': 'border-r-gray-700',
  },
  '{"border-right-color":"var(--color-gray-800)"}': {
    'value': 'border-r-gray-800',
  },
  '{"border-right-color":"var(--color-gray-900)"}': {
    'value': 'border-r-gray-900',
  },
  '{"border-right-color":"var(--color-gray-950)"}': {
    'value': 'border-r-gray-950',
  },
  '{"border-right-color":"var(--color-zinc-50)"}': {
    'value': 'border-r-zinc-50',
  },
  '{"border-right-color":"var(--color-zinc-100)"}': {
    'value': 'border-r-zinc-100',
  },
  '{"border-right-color":"var(--color-zinc-200)"}': {
    'value': 'border-r-zinc-200',
  },
  '{"border-right-color":"var(--color-zinc-300)"}': {
    'value': 'border-r-zinc-300',
  },
  '{"border-right-color":"var(--color-zinc-400)"}': {
    'value': 'border-r-zinc-400',
  },
  '{"border-right-color":"var(--color-zinc-500)"}': {
    'value': 'border-r-zinc-500',
  },
  '{"border-right-color":"var(--color-zinc-600)"}': {
    'value': 'border-r-zinc-600',
  },
  '{"border-right-color":"var(--color-zinc-700)"}': {
    'value': 'border-r-zinc-700',
  },
  '{"border-right-color":"var(--color-zinc-800)"}': {
    'value': 'border-r-zinc-800',
  },
  '{"border-right-color":"var(--color-zinc-900)"}': {
    'value': 'border-r-zinc-900',
  },
  '{"border-right-color":"var(--color-zinc-950)"}': {
    'value': 'border-r-zinc-950',
  },
  '{"border-right-color":"var(--color-neutral-50)"}': {
    'value': 'border-r-neutral-50',
  },
  '{"border-right-color":"var(--color-neutral-100)"}': {
    'value': 'border-r-neutral-100',
  },
  '{"border-right-color":"var(--color-neutral-200)"}': {
    'value': 'border-r-neutral-200',
  },
  '{"border-right-color":"var(--color-neutral-300)"}': {
    'value': 'border-r-neutral-300',
  },
  '{"border-right-color":"var(--color-neutral-400)"}': {
    'value': 'border-r-neutral-400',
  },
  '{"border-right-color":"var(--color-neutral-500)"}': {
    'value': 'border-r-neutral-500',
  },
  '{"border-right-color":"var(--color-neutral-600)"}': {
    'value': 'border-r-neutral-600',
  },
  '{"border-right-color":"var(--color-neutral-700)"}': {
    'value': 'border-r-neutral-700',
  },
  '{"border-right-color":"var(--color-neutral-800)"}': {
    'value': 'border-r-neutral-800',
  },
  '{"border-right-color":"var(--color-neutral-900)"}': {
    'value': 'border-r-neutral-900',
  },
  '{"border-right-color":"var(--color-neutral-950)"}': {
    'value': 'border-r-neutral-950',
  },
  '{"border-right-color":"var(--color-stone-50)"}': {
    'value': 'border-r-stone-50',
  },
  '{"border-right-color":"var(--color-stone-100)"}': {
    'value': 'border-r-stone-100',
  },
  '{"border-right-color":"var(--color-stone-200)"}': {
    'value': 'border-r-stone-200',
  },
  '{"border-right-color":"var(--color-stone-300)"}': {
    'value': 'border-r-stone-300',
  },
  '{"border-right-color":"var(--color-stone-400)"}': {
    'value': 'border-r-stone-400',
  },
  '{"border-right-color":"var(--color-stone-500)"}': {
    'value': 'border-r-stone-500',
  },
  '{"border-right-color":"var(--color-stone-600)"}': {
    'value': 'border-r-stone-600',
  },
  '{"border-right-color":"var(--color-stone-700)"}': {
    'value': 'border-r-stone-700',
  },
  '{"border-right-color":"var(--color-stone-800)"}': {
    'value': 'border-r-stone-800',
  },
  '{"border-right-color":"var(--color-stone-900)"}': {
    'value': 'border-r-stone-900',
  },
  '{"border-right-color":"var(--color-stone-950)"}': {
    'value': 'border-r-stone-950',
  },
  '{"border-right-color":"var(<custom-property>)"}': {
    'value': 'border-r-(<custom-property>)',
  },
  '{"border-right-color":"<value>"}': { 'value': 'border-r-[<value>]' },
  '{"border-bottom-color":"inherit"}': { 'value': 'border-b-inherit' },
  '{"border-bottom-color":"currentColor"}': { 'value': 'border-b-current' },
  '{"border-bottom-color":"transparent"}': { 'value': 'border-b-transparent' },
  '{"border-bottom-color":"var(--color-black)"}': { 'value': 'border-b-black' },
  '{"border-bottom-color":"var(--color-white)"}': { 'value': 'border-b-white' },
  '{"border-bottom-color":"var(--color-red-50)"}': {
    'value': 'border-b-red-50',
  },
  '{"border-bottom-color":"var(--color-red-100)"}': {
    'value': 'border-b-red-100',
  },
  '{"border-bottom-color":"var(--color-red-200)"}': {
    'value': 'border-b-red-200',
  },
  '{"border-bottom-color":"var(--color-red-300)"}': {
    'value': 'border-b-red-300',
  },
  '{"border-bottom-color":"var(--color-red-400)"}': {
    'value': 'border-b-red-400',
  },
  '{"border-bottom-color":"var(--color-red-500)"}': {
    'value': 'border-b-red-500',
  },
  '{"border-bottom-color":"var(--color-red-600)"}': {
    'value': 'border-b-red-600',
  },
  '{"border-bottom-color":"var(--color-red-700)"}': {
    'value': 'border-b-red-700',
  },
  '{"border-bottom-color":"var(--color-red-800)"}': {
    'value': 'border-b-red-800',
  },
  '{"border-bottom-color":"var(--color-red-900)"}': {
    'value': 'border-b-red-900',
  },
  '{"border-bottom-color":"var(--color-red-950)"}': {
    'value': 'border-b-red-950',
  },
  '{"border-bottom-color":"var(--color-orange-50)"}': {
    'value': 'border-b-orange-50',
  },
  '{"border-bottom-color":"var(--color-orange-100)"}': {
    'value': 'border-b-orange-100',
  },
  '{"border-bottom-color":"var(--color-orange-200)"}': {
    'value': 'border-b-orange-200',
  },
  '{"border-bottom-color":"var(--color-orange-300)"}': {
    'value': 'border-b-orange-300',
  },
  '{"border-bottom-color":"var(--color-orange-400)"}': {
    'value': 'border-b-orange-400',
  },
  '{"border-bottom-color":"var(--color-orange-500)"}': {
    'value': 'border-b-orange-500',
  },
  '{"border-bottom-color":"var(--color-orange-600)"}': {
    'value': 'border-b-orange-600',
  },
  '{"border-bottom-color":"var(--color-orange-700)"}': {
    'value': 'border-b-orange-700',
  },
  '{"border-bottom-color":"var(--color-orange-800)"}': {
    'value': 'border-b-orange-800',
  },
  '{"border-bottom-color":"var(--color-orange-900)"}': {
    'value': 'border-b-orange-900',
  },
  '{"border-bottom-color":"var(--color-orange-950)"}': {
    'value': 'border-b-orange-950',
  },
  '{"border-bottom-color":"var(--color-amber-50)"}': {
    'value': 'border-b-amber-50',
  },
  '{"border-bottom-color":"var(--color-amber-100)"}': {
    'value': 'border-b-amber-100',
  },
  '{"border-bottom-color":"var(--color-amber-200)"}': {
    'value': 'border-b-amber-200',
  },
  '{"border-bottom-color":"var(--color-amber-300)"}': {
    'value': 'border-b-amber-300',
  },
  '{"border-bottom-color":"var(--color-amber-400)"}': {
    'value': 'border-b-amber-400',
  },
  '{"border-bottom-color":"var(--color-amber-500)"}': {
    'value': 'border-b-amber-500',
  },
  '{"border-bottom-color":"var(--color-amber-600)"}': {
    'value': 'border-b-amber-600',
  },
  '{"border-bottom-color":"var(--color-amber-700)"}': {
    'value': 'border-b-amber-700',
  },
  '{"border-bottom-color":"var(--color-amber-800)"}': {
    'value': 'border-b-amber-800',
  },
  '{"border-bottom-color":"var(--color-amber-900)"}': {
    'value': 'border-b-amber-900',
  },
  '{"border-bottom-color":"var(--color-amber-950)"}': {
    'value': 'border-b-amber-950',
  },
  '{"border-bottom-color":"var(--color-yellow-50)"}': {
    'value': 'border-b-yellow-50',
  },
  '{"border-bottom-color":"var(--color-yellow-100)"}': {
    'value': 'border-b-yellow-100',
  },
  '{"border-bottom-color":"var(--color-yellow-200)"}': {
    'value': 'border-b-yellow-200',
  },
  '{"border-bottom-color":"var(--color-yellow-300)"}': {
    'value': 'border-b-yellow-300',
  },
  '{"border-bottom-color":"var(--color-yellow-400)"}': {
    'value': 'border-b-yellow-400',
  },
  '{"border-bottom-color":"var(--color-yellow-500)"}': {
    'value': 'border-b-yellow-500',
  },
  '{"border-bottom-color":"var(--color-yellow-600)"}': {
    'value': 'border-b-yellow-600',
  },
  '{"border-bottom-color":"var(--color-yellow-700)"}': {
    'value': 'border-b-yellow-700',
  },
  '{"border-bottom-color":"var(--color-yellow-800)"}': {
    'value': 'border-b-yellow-800',
  },
  '{"border-bottom-color":"var(--color-yellow-900)"}': {
    'value': 'border-b-yellow-900',
  },
  '{"border-bottom-color":"var(--color-yellow-950)"}': {
    'value': 'border-b-yellow-950',
  },
  '{"border-bottom-color":"var(--color-lime-50)"}': {
    'value': 'border-b-lime-50',
  },
  '{"border-bottom-color":"var(--color-lime-100)"}': {
    'value': 'border-b-lime-100',
  },
  '{"border-bottom-color":"var(--color-lime-200)"}': {
    'value': 'border-b-lime-200',
  },
  '{"border-bottom-color":"var(--color-lime-300)"}': {
    'value': 'border-b-lime-300',
  },
  '{"border-bottom-color":"var(--color-lime-400)"}': {
    'value': 'border-b-lime-400',
  },
  '{"border-bottom-color":"var(--color-lime-500)"}': {
    'value': 'border-b-lime-500',
  },
  '{"border-bottom-color":"var(--color-lime-600)"}': {
    'value': 'border-b-lime-600',
  },
  '{"border-bottom-color":"var(--color-lime-700)"}': {
    'value': 'border-b-lime-700',
  },
  '{"border-bottom-color":"var(--color-lime-800)"}': {
    'value': 'border-b-lime-800',
  },
  '{"border-bottom-color":"var(--color-lime-900)"}': {
    'value': 'border-b-lime-900',
  },
  '{"border-bottom-color":"var(--color-lime-950)"}': {
    'value': 'border-b-lime-950',
  },
  '{"border-bottom-color":"var(--color-green-50)"}': {
    'value': 'border-b-green-50',
  },
  '{"border-bottom-color":"var(--color-green-100)"}': {
    'value': 'border-b-green-100',
  },
  '{"border-bottom-color":"var(--color-green-200)"}': {
    'value': 'border-b-green-200',
  },
  '{"border-bottom-color":"var(--color-green-300)"}': {
    'value': 'border-b-green-300',
  },
  '{"border-bottom-color":"var(--color-green-400)"}': {
    'value': 'border-b-green-400',
  },
  '{"border-bottom-color":"var(--color-green-500)"}': {
    'value': 'border-b-green-500',
  },
  '{"border-bottom-color":"var(--color-green-600)"}': {
    'value': 'border-b-green-600',
  },
  '{"border-bottom-color":"var(--color-green-700)"}': {
    'value': 'border-b-green-700',
  },
  '{"border-bottom-color":"var(--color-green-800)"}': {
    'value': 'border-b-green-800',
  },
  '{"border-bottom-color":"var(--color-green-900)"}': {
    'value': 'border-b-green-900',
  },
  '{"border-bottom-color":"var(--color-green-950)"}': {
    'value': 'border-b-green-950',
  },
  '{"border-bottom-color":"var(--color-emerald-50)"}': {
    'value': 'border-b-emerald-50',
  },
  '{"border-bottom-color":"var(--color-emerald-100)"}': {
    'value': 'border-b-emerald-100',
  },
  '{"border-bottom-color":"var(--color-emerald-200)"}': {
    'value': 'border-b-emerald-200',
  },
  '{"border-bottom-color":"var(--color-emerald-300)"}': {
    'value': 'border-b-emerald-300',
  },
  '{"border-bottom-color":"var(--color-emerald-400)"}': {
    'value': 'border-b-emerald-400',
  },
  '{"border-bottom-color":"var(--color-emerald-500)"}': {
    'value': 'border-b-emerald-500',
  },
  '{"border-bottom-color":"var(--color-emerald-600)"}': {
    'value': 'border-b-emerald-600',
  },
  '{"border-bottom-color":"var(--color-emerald-700)"}': {
    'value': 'border-b-emerald-700',
  },
  '{"border-bottom-color":"var(--color-emerald-800)"}': {
    'value': 'border-b-emerald-800',
  },
  '{"border-bottom-color":"var(--color-emerald-900)"}': {
    'value': 'border-b-emerald-900',
  },
  '{"border-bottom-color":"var(--color-emerald-950)"}': {
    'value': 'border-b-emerald-950',
  },
  '{"border-bottom-color":"var(--color-teal-50)"}': {
    'value': 'border-b-teal-50',
  },
  '{"border-bottom-color":"var(--color-teal-100)"}': {
    'value': 'border-b-teal-100',
  },
  '{"border-bottom-color":"var(--color-teal-200)"}': {
    'value': 'border-b-teal-200',
  },
  '{"border-bottom-color":"var(--color-teal-300)"}': {
    'value': 'border-b-teal-300',
  },
  '{"border-bottom-color":"var(--color-teal-400)"}': {
    'value': 'border-b-teal-400',
  },
  '{"border-bottom-color":"var(--color-teal-500)"}': {
    'value': 'border-b-teal-500',
  },
  '{"border-bottom-color":"var(--color-teal-600)"}': {
    'value': 'border-b-teal-600',
  },
  '{"border-bottom-color":"var(--color-teal-700)"}': {
    'value': 'border-b-teal-700',
  },
  '{"border-bottom-color":"var(--color-teal-800)"}': {
    'value': 'border-b-teal-800',
  },
  '{"border-bottom-color":"var(--color-teal-900)"}': {
    'value': 'border-b-teal-900',
  },
  '{"border-bottom-color":"var(--color-teal-950)"}': {
    'value': 'border-b-teal-950',
  },
  '{"border-bottom-color":"var(--color-cyan-50)"}': {
    'value': 'border-b-cyan-50',
  },
  '{"border-bottom-color":"var(--color-cyan-100)"}': {
    'value': 'border-b-cyan-100',
  },
  '{"border-bottom-color":"var(--color-cyan-200)"}': {
    'value': 'border-b-cyan-200',
  },
  '{"border-bottom-color":"var(--color-cyan-300)"}': {
    'value': 'border-b-cyan-300',
  },
  '{"border-bottom-color":"var(--color-cyan-400)"}': {
    'value': 'border-b-cyan-400',
  },
  '{"border-bottom-color":"var(--color-cyan-500)"}': {
    'value': 'border-b-cyan-500',
  },
  '{"border-bottom-color":"var(--color-cyan-600)"}': {
    'value': 'border-b-cyan-600',
  },
  '{"border-bottom-color":"var(--color-cyan-700)"}': {
    'value': 'border-b-cyan-700',
  },
  '{"border-bottom-color":"var(--color-cyan-800)"}': {
    'value': 'border-b-cyan-800',
  },
  '{"border-bottom-color":"var(--color-cyan-900)"}': {
    'value': 'border-b-cyan-900',
  },
  '{"border-bottom-color":"var(--color-cyan-950)"}': {
    'value': 'border-b-cyan-950',
  },
  '{"border-bottom-color":"var(--color-sky-50)"}': {
    'value': 'border-b-sky-50',
  },
  '{"border-bottom-color":"var(--color-sky-100)"}': {
    'value': 'border-b-sky-100',
  },
  '{"border-bottom-color":"var(--color-sky-200)"}': {
    'value': 'border-b-sky-200',
  },
  '{"border-bottom-color":"var(--color-sky-300)"}': {
    'value': 'border-b-sky-300',
  },
  '{"border-bottom-color":"var(--color-sky-400)"}': {
    'value': 'border-b-sky-400',
  },
  '{"border-bottom-color":"var(--color-sky-500)"}': {
    'value': 'border-b-sky-500',
  },
  '{"border-bottom-color":"var(--color-sky-600)"}': {
    'value': 'border-b-sky-600',
  },
  '{"border-bottom-color":"var(--color-sky-700)"}': {
    'value': 'border-b-sky-700',
  },
  '{"border-bottom-color":"var(--color-sky-800)"}': {
    'value': 'border-b-sky-800',
  },
  '{"border-bottom-color":"var(--color-sky-900)"}': {
    'value': 'border-b-sky-900',
  },
  '{"border-bottom-color":"var(--color-sky-950)"}': {
    'value': 'border-b-sky-950',
  },
  '{"border-bottom-color":"var(--color-blue-50)"}': {
    'value': 'border-b-blue-50',
  },
  '{"border-bottom-color":"var(--color-blue-100)"}': {
    'value': 'border-b-blue-100',
  },
  '{"border-bottom-color":"var(--color-blue-200)"}': {
    'value': 'border-b-blue-200',
  },
  '{"border-bottom-color":"var(--color-blue-300)"}': {
    'value': 'border-b-blue-300',
  },
  '{"border-bottom-color":"var(--color-blue-400)"}': {
    'value': 'border-b-blue-400',
  },
  '{"border-bottom-color":"var(--color-blue-500)"}': {
    'value': 'border-b-blue-500',
  },
  '{"border-bottom-color":"var(--color-blue-600)"}': {
    'value': 'border-b-blue-600',
  },
  '{"border-bottom-color":"var(--color-blue-700)"}': {
    'value': 'border-b-blue-700',
  },
  '{"border-bottom-color":"var(--color-blue-800)"}': {
    'value': 'border-b-blue-800',
  },
  '{"border-bottom-color":"var(--color-blue-900)"}': {
    'value': 'border-b-blue-900',
  },
  '{"border-bottom-color":"var(--color-blue-950)"}': {
    'value': 'border-b-blue-950',
  },
  '{"border-bottom-color":"var(--color-indigo-50)"}': {
    'value': 'border-b-indigo-50',
  },
  '{"border-bottom-color":"var(--color-indigo-100)"}': {
    'value': 'border-b-indigo-100',
  },
  '{"border-bottom-color":"var(--color-indigo-200)"}': {
    'value': 'border-b-indigo-200',
  },
  '{"border-bottom-color":"var(--color-indigo-300)"}': {
    'value': 'border-b-indigo-300',
  },
  '{"border-bottom-color":"var(--color-indigo-400)"}': {
    'value': 'border-b-indigo-400',
  },
  '{"border-bottom-color":"var(--color-indigo-500)"}': {
    'value': 'border-b-indigo-500',
  },
  '{"border-bottom-color":"var(--color-indigo-600)"}': {
    'value': 'border-b-indigo-600',
  },
  '{"border-bottom-color":"var(--color-indigo-700)"}': {
    'value': 'border-b-indigo-700',
  },
  '{"border-bottom-color":"var(--color-indigo-800)"}': {
    'value': 'border-b-indigo-800',
  },
  '{"border-bottom-color":"var(--color-indigo-900)"}': {
    'value': 'border-b-indigo-900',
  },
  '{"border-bottom-color":"var(--color-indigo-950)"}': {
    'value': 'border-b-indigo-950',
  },
  '{"border-bottom-color":"var(--color-violet-50)"}': {
    'value': 'border-b-violet-50',
  },
  '{"border-bottom-color":"var(--color-violet-100)"}': {
    'value': 'border-b-violet-100',
  },
  '{"border-bottom-color":"var(--color-violet-200)"}': {
    'value': 'border-b-violet-200',
  },
  '{"border-bottom-color":"var(--color-violet-300)"}': {
    'value': 'border-b-violet-300',
  },
  '{"border-bottom-color":"var(--color-violet-400)"}': {
    'value': 'border-b-violet-400',
  },
  '{"border-bottom-color":"var(--color-violet-500)"}': {
    'value': 'border-b-violet-500',
  },
  '{"border-bottom-color":"var(--color-violet-600)"}': {
    'value': 'border-b-violet-600',
  },
  '{"border-bottom-color":"var(--color-violet-700)"}': {
    'value': 'border-b-violet-700',
  },
  '{"border-bottom-color":"var(--color-violet-800)"}': {
    'value': 'border-b-violet-800',
  },
  '{"border-bottom-color":"var(--color-violet-900)"}': {
    'value': 'border-b-violet-900',
  },
  '{"border-bottom-color":"var(--color-violet-950)"}': {
    'value': 'border-b-violet-950',
  },
  '{"border-bottom-color":"var(--color-purple-50)"}': {
    'value': 'border-b-purple-50',
  },
  '{"border-bottom-color":"var(--color-purple-100)"}': {
    'value': 'border-b-purple-100',
  },
  '{"border-bottom-color":"var(--color-purple-200)"}': {
    'value': 'border-b-purple-200',
  },
  '{"border-bottom-color":"var(--color-purple-300)"}': {
    'value': 'border-b-purple-300',
  },
  '{"border-bottom-color":"var(--color-purple-400)"}': {
    'value': 'border-b-purple-400',
  },
  '{"border-bottom-color":"var(--color-purple-500)"}': {
    'value': 'border-b-purple-500',
  },
  '{"border-bottom-color":"var(--color-purple-600)"}': {
    'value': 'border-b-purple-600',
  },
  '{"border-bottom-color":"var(--color-purple-700)"}': {
    'value': 'border-b-purple-700',
  },
  '{"border-bottom-color":"var(--color-purple-800)"}': {
    'value': 'border-b-purple-800',
  },
  '{"border-bottom-color":"var(--color-purple-900)"}': {
    'value': 'border-b-purple-900',
  },
  '{"border-bottom-color":"var(--color-purple-950)"}': {
    'value': 'border-b-purple-950',
  },
  '{"border-bottom-color":"var(--color-fuchsia-50)"}': {
    'value': 'border-b-fuchsia-50',
  },
  '{"border-bottom-color":"var(--color-fuchsia-100)"}': {
    'value': 'border-b-fuchsia-100',
  },
  '{"border-bottom-color":"var(--color-fuchsia-200)"}': {
    'value': 'border-b-fuchsia-200',
  },
  '{"border-bottom-color":"var(--color-fuchsia-300)"}': {
    'value': 'border-b-fuchsia-300',
  },
  '{"border-bottom-color":"var(--color-fuchsia-400)"}': {
    'value': 'border-b-fuchsia-400',
  },
  '{"border-bottom-color":"var(--color-fuchsia-500)"}': {
    'value': 'border-b-fuchsia-500',
  },
  '{"border-bottom-color":"var(--color-fuchsia-600)"}': {
    'value': 'border-b-fuchsia-600',
  },
  '{"border-bottom-color":"var(--color-fuchsia-700)"}': {
    'value': 'border-b-fuchsia-700',
  },
  '{"border-bottom-color":"var(--color-fuchsia-800)"}': {
    'value': 'border-b-fuchsia-800',
  },
  '{"border-bottom-color":"var(--color-fuchsia-900)"}': {
    'value': 'border-b-fuchsia-900',
  },
  '{"border-bottom-color":"var(--color-fuchsia-950)"}': {
    'value': 'border-b-fuchsia-950',
  },
  '{"border-bottom-color":"var(--color-pink-50)"}': {
    'value': 'border-b-pink-50',
  },
  '{"border-bottom-color":"var(--color-pink-100)"}': {
    'value': 'border-b-pink-100',
  },
  '{"border-bottom-color":"var(--color-pink-200)"}': {
    'value': 'border-b-pink-200',
  },
  '{"border-bottom-color":"var(--color-pink-300)"}': {
    'value': 'border-b-pink-300',
  },
  '{"border-bottom-color":"var(--color-pink-400)"}': {
    'value': 'border-b-pink-400',
  },
  '{"border-bottom-color":"var(--color-pink-500)"}': {
    'value': 'border-b-pink-500',
  },
  '{"border-bottom-color":"var(--color-pink-600)"}': {
    'value': 'border-b-pink-600',
  },
  '{"border-bottom-color":"var(--color-pink-700)"}': {
    'value': 'border-b-pink-700',
  },
  '{"border-bottom-color":"var(--color-pink-800)"}': {
    'value': 'border-b-pink-800',
  },
  '{"border-bottom-color":"var(--color-pink-900)"}': {
    'value': 'border-b-pink-900',
  },
  '{"border-bottom-color":"var(--color-pink-950)"}': {
    'value': 'border-b-pink-950',
  },
  '{"border-bottom-color":"var(--color-rose-50)"}': {
    'value': 'border-b-rose-50',
  },
  '{"border-bottom-color":"var(--color-rose-100)"}': {
    'value': 'border-b-rose-100',
  },
  '{"border-bottom-color":"var(--color-rose-200)"}': {
    'value': 'border-b-rose-200',
  },
  '{"border-bottom-color":"var(--color-rose-300)"}': {
    'value': 'border-b-rose-300',
  },
  '{"border-bottom-color":"var(--color-rose-400)"}': {
    'value': 'border-b-rose-400',
  },
  '{"border-bottom-color":"var(--color-rose-500)"}': {
    'value': 'border-b-rose-500',
  },
  '{"border-bottom-color":"var(--color-rose-600)"}': {
    'value': 'border-b-rose-600',
  },
  '{"border-bottom-color":"var(--color-rose-700)"}': {
    'value': 'border-b-rose-700',
  },
  '{"border-bottom-color":"var(--color-rose-800)"}': {
    'value': 'border-b-rose-800',
  },
  '{"border-bottom-color":"var(--color-rose-900)"}': {
    'value': 'border-b-rose-900',
  },
  '{"border-bottom-color":"var(--color-rose-950)"}': {
    'value': 'border-b-rose-950',
  },
  '{"border-bottom-color":"var(--color-slate-50)"}': {
    'value': 'border-b-slate-50',
  },
  '{"border-bottom-color":"var(--color-slate-100)"}': {
    'value': 'border-b-slate-100',
  },
  '{"border-bottom-color":"var(--color-slate-200)"}': {
    'value': 'border-b-slate-200',
  },
  '{"border-bottom-color":"var(--color-slate-300)"}': {
    'value': 'border-b-slate-300',
  },
  '{"border-bottom-color":"var(--color-slate-400)"}': {
    'value': 'border-b-slate-400',
  },
  '{"border-bottom-color":"var(--color-slate-500)"}': {
    'value': 'border-b-slate-500',
  },
  '{"border-bottom-color":"var(--color-slate-600)"}': {
    'value': 'border-b-slate-600',
  },
  '{"border-bottom-color":"var(--color-slate-700)"}': {
    'value': 'border-b-slate-700',
  },
  '{"border-bottom-color":"var(--color-slate-800)"}': {
    'value': 'border-b-slate-800',
  },
  '{"border-bottom-color":"var(--color-slate-900)"}': {
    'value': 'border-b-slate-900',
  },
  '{"border-bottom-color":"var(--color-slate-950)"}': {
    'value': 'border-b-slate-950',
  },
  '{"border-bottom-color":"var(--color-gray-50)"}': {
    'value': 'border-b-gray-50',
  },
  '{"border-bottom-color":"var(--color-gray-100)"}': {
    'value': 'border-b-gray-100',
  },
  '{"border-bottom-color":"var(--color-gray-200)"}': {
    'value': 'border-b-gray-200',
  },
  '{"border-bottom-color":"var(--color-gray-300)"}': {
    'value': 'border-b-gray-300',
  },
  '{"border-bottom-color":"var(--color-gray-400)"}': {
    'value': 'border-b-gray-400',
  },
  '{"border-bottom-color":"var(--color-gray-500)"}': {
    'value': 'border-b-gray-500',
  },
  '{"border-bottom-color":"var(--color-gray-600)"}': {
    'value': 'border-b-gray-600',
  },
  '{"border-bottom-color":"var(--color-gray-700)"}': {
    'value': 'border-b-gray-700',
  },
  '{"border-bottom-color":"var(--color-gray-800)"}': {
    'value': 'border-b-gray-800',
  },
  '{"border-bottom-color":"var(--color-gray-900)"}': {
    'value': 'border-b-gray-900',
  },
  '{"border-bottom-color":"var(--color-gray-950)"}': {
    'value': 'border-b-gray-950',
  },
  '{"border-bottom-color":"var(--color-zinc-50)"}': {
    'value': 'border-b-zinc-50',
  },
  '{"border-bottom-color":"var(--color-zinc-100)"}': {
    'value': 'border-b-zinc-100',
  },
  '{"border-bottom-color":"var(--color-zinc-200)"}': {
    'value': 'border-b-zinc-200',
  },
  '{"border-bottom-color":"var(--color-zinc-300)"}': {
    'value': 'border-b-zinc-300',
  },
  '{"border-bottom-color":"var(--color-zinc-400)"}': {
    'value': 'border-b-zinc-400',
  },
  '{"border-bottom-color":"var(--color-zinc-500)"}': {
    'value': 'border-b-zinc-500',
  },
  '{"border-bottom-color":"var(--color-zinc-600)"}': {
    'value': 'border-b-zinc-600',
  },
  '{"border-bottom-color":"var(--color-zinc-700)"}': {
    'value': 'border-b-zinc-700',
  },
  '{"border-bottom-color":"var(--color-zinc-800)"}': {
    'value': 'border-b-zinc-800',
  },
  '{"border-bottom-color":"var(--color-zinc-900)"}': {
    'value': 'border-b-zinc-900',
  },
  '{"border-bottom-color":"var(--color-zinc-950)"}': {
    'value': 'border-b-zinc-950',
  },
  '{"border-bottom-color":"var(--color-neutral-50)"}': {
    'value': 'border-b-neutral-50',
  },
  '{"border-bottom-color":"var(--color-neutral-100)"}': {
    'value': 'border-b-neutral-100',
  },
  '{"border-bottom-color":"var(--color-neutral-200)"}': {
    'value': 'border-b-neutral-200',
  },
  '{"border-bottom-color":"var(--color-neutral-300)"}': {
    'value': 'border-b-neutral-300',
  },
  '{"border-bottom-color":"var(--color-neutral-400)"}': {
    'value': 'border-b-neutral-400',
  },
  '{"border-bottom-color":"var(--color-neutral-500)"}': {
    'value': 'border-b-neutral-500',
  },
  '{"border-bottom-color":"var(--color-neutral-600)"}': {
    'value': 'border-b-neutral-600',
  },
  '{"border-bottom-color":"var(--color-neutral-700)"}': {
    'value': 'border-b-neutral-700',
  },
  '{"border-bottom-color":"var(--color-neutral-800)"}': {
    'value': 'border-b-neutral-800',
  },
  '{"border-bottom-color":"var(--color-neutral-900)"}': {
    'value': 'border-b-neutral-900',
  },
  '{"border-bottom-color":"var(--color-neutral-950)"}': {
    'value': 'border-b-neutral-950',
  },
  '{"border-bottom-color":"var(--color-stone-50)"}': {
    'value': 'border-b-stone-50',
  },
  '{"border-bottom-color":"var(--color-stone-100)"}': {
    'value': 'border-b-stone-100',
  },
  '{"border-bottom-color":"var(--color-stone-200)"}': {
    'value': 'border-b-stone-200',
  },
  '{"border-bottom-color":"var(--color-stone-300)"}': {
    'value': 'border-b-stone-300',
  },
  '{"border-bottom-color":"var(--color-stone-400)"}': {
    'value': 'border-b-stone-400',
  },
  '{"border-bottom-color":"var(--color-stone-500)"}': {
    'value': 'border-b-stone-500',
  },
  '{"border-bottom-color":"var(--color-stone-600)"}': {
    'value': 'border-b-stone-600',
  },
  '{"border-bottom-color":"var(--color-stone-700)"}': {
    'value': 'border-b-stone-700',
  },
  '{"border-bottom-color":"var(--color-stone-800)"}': {
    'value': 'border-b-stone-800',
  },
  '{"border-bottom-color":"var(--color-stone-900)"}': {
    'value': 'border-b-stone-900',
  },
  '{"border-bottom-color":"var(--color-stone-950)"}': {
    'value': 'border-b-stone-950',
  },
  '{"border-bottom-color":"var(<custom-property>)"}': {
    'value': 'border-b-(<custom-property>)',
  },
  '{"border-bottom-color":"<value>"}': { 'value': 'border-b-[<value>]' },
  '{"border-left-color":"inherit"}': { 'value': 'border-l-inherit' },
  '{"border-left-color":"currentColor"}': { 'value': 'border-l-current' },
  '{"border-left-color":"transparent"}': { 'value': 'border-l-transparent' },
  '{"border-left-color":"var(--color-black)"}': { 'value': 'border-l-black' },
  '{"border-left-color":"var(--color-white)"}': { 'value': 'border-l-white' },
  '{"border-left-color":"var(--color-red-50)"}': { 'value': 'border-l-red-50' },
  '{"border-left-color":"var(--color-red-100)"}': {
    'value': 'border-l-red-100',
  },
  '{"border-left-color":"var(--color-red-200)"}': {
    'value': 'border-l-red-200',
  },
  '{"border-left-color":"var(--color-red-300)"}': {
    'value': 'border-l-red-300',
  },
  '{"border-left-color":"var(--color-red-400)"}': {
    'value': 'border-l-red-400',
  },
  '{"border-left-color":"var(--color-red-500)"}': {
    'value': 'border-l-red-500',
  },
  '{"border-left-color":"var(--color-red-600)"}': {
    'value': 'border-l-red-600',
  },
  '{"border-left-color":"var(--color-red-700)"}': {
    'value': 'border-l-red-700',
  },
  '{"border-left-color":"var(--color-red-800)"}': {
    'value': 'border-l-red-800',
  },
  '{"border-left-color":"var(--color-red-900)"}': {
    'value': 'border-l-red-900',
  },
  '{"border-left-color":"var(--color-red-950)"}': {
    'value': 'border-l-red-950',
  },
  '{"border-left-color":"var(--color-orange-50)"}': {
    'value': 'border-l-orange-50',
  },
  '{"border-left-color":"var(--color-orange-100)"}': {
    'value': 'border-l-orange-100',
  },
  '{"border-left-color":"var(--color-orange-200)"}': {
    'value': 'border-l-orange-200',
  },
  '{"border-left-color":"var(--color-orange-300)"}': {
    'value': 'border-l-orange-300',
  },
  '{"border-left-color":"var(--color-orange-400)"}': {
    'value': 'border-l-orange-400',
  },
  '{"border-left-color":"var(--color-orange-500)"}': {
    'value': 'border-l-orange-500',
  },
  '{"border-left-color":"var(--color-orange-600)"}': {
    'value': 'border-l-orange-600',
  },
  '{"border-left-color":"var(--color-orange-700)"}': {
    'value': 'border-l-orange-700',
  },
  '{"border-left-color":"var(--color-orange-800)"}': {
    'value': 'border-l-orange-800',
  },
  '{"border-left-color":"var(--color-orange-900)"}': {
    'value': 'border-l-orange-900',
  },
  '{"border-left-color":"var(--color-orange-950)"}': {
    'value': 'border-l-orange-950',
  },
  '{"border-left-color":"var(--color-amber-50)"}': {
    'value': 'border-l-amber-50',
  },
  '{"border-left-color":"var(--color-amber-100)"}': {
    'value': 'border-l-amber-100',
  },
  '{"border-left-color":"var(--color-amber-200)"}': {
    'value': 'border-l-amber-200',
  },
  '{"border-left-color":"var(--color-amber-300)"}': {
    'value': 'border-l-amber-300',
  },
  '{"border-left-color":"var(--color-amber-400)"}': {
    'value': 'border-l-amber-400',
  },
  '{"border-left-color":"var(--color-amber-500)"}': {
    'value': 'border-l-amber-500',
  },
  '{"border-left-color":"var(--color-amber-600)"}': {
    'value': 'border-l-amber-600',
  },
  '{"border-left-color":"var(--color-amber-700)"}': {
    'value': 'border-l-amber-700',
  },
  '{"border-left-color":"var(--color-amber-800)"}': {
    'value': 'border-l-amber-800',
  },
  '{"border-left-color":"var(--color-amber-900)"}': {
    'value': 'border-l-amber-900',
  },
  '{"border-left-color":"var(--color-amber-950)"}': {
    'value': 'border-l-amber-950',
  },
  '{"border-left-color":"var(--color-yellow-50)"}': {
    'value': 'border-l-yellow-50',
  },
  '{"border-left-color":"var(--color-yellow-100)"}': {
    'value': 'border-l-yellow-100',
  },
  '{"border-left-color":"var(--color-yellow-200)"}': {
    'value': 'border-l-yellow-200',
  },
  '{"border-left-color":"var(--color-yellow-300)"}': {
    'value': 'border-l-yellow-300',
  },
  '{"border-left-color":"var(--color-yellow-400)"}': {
    'value': 'border-l-yellow-400',
  },
  '{"border-left-color":"var(--color-yellow-500)"}': {
    'value': 'border-l-yellow-500',
  },
  '{"border-left-color":"var(--color-yellow-600)"}': {
    'value': 'border-l-yellow-600',
  },
  '{"border-left-color":"var(--color-yellow-700)"}': {
    'value': 'border-l-yellow-700',
  },
  '{"border-left-color":"var(--color-yellow-800)"}': {
    'value': 'border-l-yellow-800',
  },
  '{"border-left-color":"var(--color-yellow-900)"}': {
    'value': 'border-l-yellow-900',
  },
  '{"border-left-color":"var(--color-yellow-950)"}': {
    'value': 'border-l-yellow-950',
  },
  '{"border-left-color":"var(--color-lime-50)"}': {
    'value': 'border-l-lime-50',
  },
  '{"border-left-color":"var(--color-lime-100)"}': {
    'value': 'border-l-lime-100',
  },
  '{"border-left-color":"var(--color-lime-200)"}': {
    'value': 'border-l-lime-200',
  },
  '{"border-left-color":"var(--color-lime-300)"}': {
    'value': 'border-l-lime-300',
  },
  '{"border-left-color":"var(--color-lime-400)"}': {
    'value': 'border-l-lime-400',
  },
  '{"border-left-color":"var(--color-lime-500)"}': {
    'value': 'border-l-lime-500',
  },
  '{"border-left-color":"var(--color-lime-600)"}': {
    'value': 'border-l-lime-600',
  },
  '{"border-left-color":"var(--color-lime-700)"}': {
    'value': 'border-l-lime-700',
  },
  '{"border-left-color":"var(--color-lime-800)"}': {
    'value': 'border-l-lime-800',
  },
  '{"border-left-color":"var(--color-lime-900)"}': {
    'value': 'border-l-lime-900',
  },
  '{"border-left-color":"var(--color-lime-950)"}': {
    'value': 'border-l-lime-950',
  },
  '{"border-left-color":"var(--color-green-50)"}': {
    'value': 'border-l-green-50',
  },
  '{"border-left-color":"var(--color-green-100)"}': {
    'value': 'border-l-green-100',
  },
  '{"border-left-color":"var(--color-green-200)"}': {
    'value': 'border-l-green-200',
  },
  '{"border-left-color":"var(--color-green-300)"}': {
    'value': 'border-l-green-300',
  },
  '{"border-left-color":"var(--color-green-400)"}': {
    'value': 'border-l-green-400',
  },
  '{"border-left-color":"var(--color-green-500)"}': {
    'value': 'border-l-green-500',
  },
  '{"border-left-color":"var(--color-green-600)"}': {
    'value': 'border-l-green-600',
  },
  '{"border-left-color":"var(--color-green-700)"}': {
    'value': 'border-l-green-700',
  },
  '{"border-left-color":"var(--color-green-800)"}': {
    'value': 'border-l-green-800',
  },
  '{"border-left-color":"var(--color-green-900)"}': {
    'value': 'border-l-green-900',
  },
  '{"border-left-color":"var(--color-green-950)"}': {
    'value': 'border-l-green-950',
  },
  '{"border-left-color":"var(--color-emerald-50)"}': {
    'value': 'border-l-emerald-50',
  },
  '{"border-left-color":"var(--color-emerald-100)"}': {
    'value': 'border-l-emerald-100',
  },
  '{"border-left-color":"var(--color-emerald-200)"}': {
    'value': 'border-l-emerald-200',
  },
  '{"border-left-color":"var(--color-emerald-300)"}': {
    'value': 'border-l-emerald-300',
  },
  '{"border-left-color":"var(--color-emerald-400)"}': {
    'value': 'border-l-emerald-400',
  },
  '{"border-left-color":"var(--color-emerald-500)"}': {
    'value': 'border-l-emerald-500',
  },
  '{"border-left-color":"var(--color-emerald-600)"}': {
    'value': 'border-l-emerald-600',
  },
  '{"border-left-color":"var(--color-emerald-700)"}': {
    'value': 'border-l-emerald-700',
  },
  '{"border-left-color":"var(--color-emerald-800)"}': {
    'value': 'border-l-emerald-800',
  },
  '{"border-left-color":"var(--color-emerald-900)"}': {
    'value': 'border-l-emerald-900',
  },
  '{"border-left-color":"var(--color-emerald-950)"}': {
    'value': 'border-l-emerald-950',
  },
  '{"border-left-color":"var(--color-teal-50)"}': {
    'value': 'border-l-teal-50',
  },
  '{"border-left-color":"var(--color-teal-100)"}': {
    'value': 'border-l-teal-100',
  },
  '{"border-left-color":"var(--color-teal-200)"}': {
    'value': 'border-l-teal-200',
  },
  '{"border-left-color":"var(--color-teal-300)"}': {
    'value': 'border-l-teal-300',
  },
  '{"border-left-color":"var(--color-teal-400)"}': {
    'value': 'border-l-teal-400',
  },
  '{"border-left-color":"var(--color-teal-500)"}': {
    'value': 'border-l-teal-500',
  },
  '{"border-left-color":"var(--color-teal-600)"}': {
    'value': 'border-l-teal-600',
  },
  '{"border-left-color":"var(--color-teal-700)"}': {
    'value': 'border-l-teal-700',
  },
  '{"border-left-color":"var(--color-teal-800)"}': {
    'value': 'border-l-teal-800',
  },
  '{"border-left-color":"var(--color-teal-900)"}': {
    'value': 'border-l-teal-900',
  },
  '{"border-left-color":"var(--color-teal-950)"}': {
    'value': 'border-l-teal-950',
  },
  '{"border-left-color":"var(--color-cyan-50)"}': {
    'value': 'border-l-cyan-50',
  },
  '{"border-left-color":"var(--color-cyan-100)"}': {
    'value': 'border-l-cyan-100',
  },
  '{"border-left-color":"var(--color-cyan-200)"}': {
    'value': 'border-l-cyan-200',
  },
  '{"border-left-color":"var(--color-cyan-300)"}': {
    'value': 'border-l-cyan-300',
  },
  '{"border-left-color":"var(--color-cyan-400)"}': {
    'value': 'border-l-cyan-400',
  },
  '{"border-left-color":"var(--color-cyan-500)"}': {
    'value': 'border-l-cyan-500',
  },
  '{"border-left-color":"var(--color-cyan-600)"}': {
    'value': 'border-l-cyan-600',
  },
  '{"border-left-color":"var(--color-cyan-700)"}': {
    'value': 'border-l-cyan-700',
  },
  '{"border-left-color":"var(--color-cyan-800)"}': {
    'value': 'border-l-cyan-800',
  },
  '{"border-left-color":"var(--color-cyan-900)"}': {
    'value': 'border-l-cyan-900',
  },
  '{"border-left-color":"var(--color-cyan-950)"}': {
    'value': 'border-l-cyan-950',
  },
  '{"border-left-color":"var(--color-sky-50)"}': { 'value': 'border-l-sky-50' },
  '{"border-left-color":"var(--color-sky-100)"}': {
    'value': 'border-l-sky-100',
  },
  '{"border-left-color":"var(--color-sky-200)"}': {
    'value': 'border-l-sky-200',
  },
  '{"border-left-color":"var(--color-sky-300)"}': {
    'value': 'border-l-sky-300',
  },
  '{"border-left-color":"var(--color-sky-400)"}': {
    'value': 'border-l-sky-400',
  },
  '{"border-left-color":"var(--color-sky-500)"}': {
    'value': 'border-l-sky-500',
  },
  '{"border-left-color":"var(--color-sky-600)"}': {
    'value': 'border-l-sky-600',
  },
  '{"border-left-color":"var(--color-sky-700)"}': {
    'value': 'border-l-sky-700',
  },
  '{"border-left-color":"var(--color-sky-800)"}': {
    'value': 'border-l-sky-800',
  },
  '{"border-left-color":"var(--color-sky-900)"}': {
    'value': 'border-l-sky-900',
  },
  '{"border-left-color":"var(--color-sky-950)"}': {
    'value': 'border-l-sky-950',
  },
  '{"border-left-color":"var(--color-blue-50)"}': {
    'value': 'border-l-blue-50',
  },
  '{"border-left-color":"var(--color-blue-100)"}': {
    'value': 'border-l-blue-100',
  },
  '{"border-left-color":"var(--color-blue-200)"}': {
    'value': 'border-l-blue-200',
  },
  '{"border-left-color":"var(--color-blue-300)"}': {
    'value': 'border-l-blue-300',
  },
  '{"border-left-color":"var(--color-blue-400)"}': {
    'value': 'border-l-blue-400',
  },
  '{"border-left-color":"var(--color-blue-500)"}': {
    'value': 'border-l-blue-500',
  },
  '{"border-left-color":"var(--color-blue-600)"}': {
    'value': 'border-l-blue-600',
  },
  '{"border-left-color":"var(--color-blue-700)"}': {
    'value': 'border-l-blue-700',
  },
  '{"border-left-color":"var(--color-blue-800)"}': {
    'value': 'border-l-blue-800',
  },
  '{"border-left-color":"var(--color-blue-900)"}': {
    'value': 'border-l-blue-900',
  },
  '{"border-left-color":"var(--color-blue-950)"}': {
    'value': 'border-l-blue-950',
  },
  '{"border-left-color":"var(--color-indigo-50)"}': {
    'value': 'border-l-indigo-50',
  },
  '{"border-left-color":"var(--color-indigo-100)"}': {
    'value': 'border-l-indigo-100',
  },
  '{"border-left-color":"var(--color-indigo-200)"}': {
    'value': 'border-l-indigo-200',
  },
  '{"border-left-color":"var(--color-indigo-300)"}': {
    'value': 'border-l-indigo-300',
  },
  '{"border-left-color":"var(--color-indigo-400)"}': {
    'value': 'border-l-indigo-400',
  },
  '{"border-left-color":"var(--color-indigo-500)"}': {
    'value': 'border-l-indigo-500',
  },
  '{"border-left-color":"var(--color-indigo-600)"}': {
    'value': 'border-l-indigo-600',
  },
  '{"border-left-color":"var(--color-indigo-700)"}': {
    'value': 'border-l-indigo-700',
  },
  '{"border-left-color":"var(--color-indigo-800)"}': {
    'value': 'border-l-indigo-800',
  },
  '{"border-left-color":"var(--color-indigo-900)"}': {
    'value': 'border-l-indigo-900',
  },
  '{"border-left-color":"var(--color-indigo-950)"}': {
    'value': 'border-l-indigo-950',
  },
  '{"border-left-color":"var(--color-violet-50)"}': {
    'value': 'border-l-violet-50',
  },
  '{"border-left-color":"var(--color-violet-100)"}': {
    'value': 'border-l-violet-100',
  },
  '{"border-left-color":"var(--color-violet-200)"}': {
    'value': 'border-l-violet-200',
  },
  '{"border-left-color":"var(--color-violet-300)"}': {
    'value': 'border-l-violet-300',
  },
  '{"border-left-color":"var(--color-violet-400)"}': {
    'value': 'border-l-violet-400',
  },
  '{"border-left-color":"var(--color-violet-500)"}': {
    'value': 'border-l-violet-500',
  },
  '{"border-left-color":"var(--color-violet-600)"}': {
    'value': 'border-l-violet-600',
  },
  '{"border-left-color":"var(--color-violet-700)"}': {
    'value': 'border-l-violet-700',
  },
  '{"border-left-color":"var(--color-violet-800)"}': {
    'value': 'border-l-violet-800',
  },
  '{"border-left-color":"var(--color-violet-900)"}': {
    'value': 'border-l-violet-900',
  },
  '{"border-left-color":"var(--color-violet-950)"}': {
    'value': 'border-l-violet-950',
  },
  '{"border-left-color":"var(--color-purple-50)"}': {
    'value': 'border-l-purple-50',
  },
  '{"border-left-color":"var(--color-purple-100)"}': {
    'value': 'border-l-purple-100',
  },
  '{"border-left-color":"var(--color-purple-200)"}': {
    'value': 'border-l-purple-200',
  },
  '{"border-left-color":"var(--color-purple-300)"}': {
    'value': 'border-l-purple-300',
  },
  '{"border-left-color":"var(--color-purple-400)"}': {
    'value': 'border-l-purple-400',
  },
  '{"border-left-color":"var(--color-purple-500)"}': {
    'value': 'border-l-purple-500',
  },
  '{"border-left-color":"var(--color-purple-600)"}': {
    'value': 'border-l-purple-600',
  },
  '{"border-left-color":"var(--color-purple-700)"}': {
    'value': 'border-l-purple-700',
  },
  '{"border-left-color":"var(--color-purple-800)"}': {
    'value': 'border-l-purple-800',
  },
  '{"border-left-color":"var(--color-purple-900)"}': {
    'value': 'border-l-purple-900',
  },
  '{"border-left-color":"var(--color-purple-950)"}': {
    'value': 'border-l-purple-950',
  },
  '{"border-left-color":"var(--color-fuchsia-50)"}': {
    'value': 'border-l-fuchsia-50',
  },
  '{"border-left-color":"var(--color-fuchsia-100)"}': {
    'value': 'border-l-fuchsia-100',
  },
  '{"border-left-color":"var(--color-fuchsia-200)"}': {
    'value': 'border-l-fuchsia-200',
  },
  '{"border-left-color":"var(--color-fuchsia-300)"}': {
    'value': 'border-l-fuchsia-300',
  },
  '{"border-left-color":"var(--color-fuchsia-400)"}': {
    'value': 'border-l-fuchsia-400',
  },
  '{"border-left-color":"var(--color-fuchsia-500)"}': {
    'value': 'border-l-fuchsia-500',
  },
  '{"border-left-color":"var(--color-fuchsia-600)"}': {
    'value': 'border-l-fuchsia-600',
  },
  '{"border-left-color":"var(--color-fuchsia-700)"}': {
    'value': 'border-l-fuchsia-700',
  },
  '{"border-left-color":"var(--color-fuchsia-800)"}': {
    'value': 'border-l-fuchsia-800',
  },
  '{"border-left-color":"var(--color-fuchsia-900)"}': {
    'value': 'border-l-fuchsia-900',
  },
  '{"border-left-color":"var(--color-fuchsia-950)"}': {
    'value': 'border-l-fuchsia-950',
  },
  '{"border-left-color":"var(--color-pink-50)"}': {
    'value': 'border-l-pink-50',
  },
  '{"border-left-color":"var(--color-pink-100)"}': {
    'value': 'border-l-pink-100',
  },
  '{"border-left-color":"var(--color-pink-200)"}': {
    'value': 'border-l-pink-200',
  },
  '{"border-left-color":"var(--color-pink-300)"}': {
    'value': 'border-l-pink-300',
  },
  '{"border-left-color":"var(--color-pink-400)"}': {
    'value': 'border-l-pink-400',
  },
  '{"border-left-color":"var(--color-pink-500)"}': {
    'value': 'border-l-pink-500',
  },
  '{"border-left-color":"var(--color-pink-600)"}': {
    'value': 'border-l-pink-600',
  },
  '{"border-left-color":"var(--color-pink-700)"}': {
    'value': 'border-l-pink-700',
  },
  '{"border-left-color":"var(--color-pink-800)"}': {
    'value': 'border-l-pink-800',
  },
  '{"border-left-color":"var(--color-pink-900)"}': {
    'value': 'border-l-pink-900',
  },
  '{"border-left-color":"var(--color-pink-950)"}': {
    'value': 'border-l-pink-950',
  },
  '{"border-left-color":"var(--color-rose-50)"}': {
    'value': 'border-l-rose-50',
  },
  '{"border-left-color":"var(--color-rose-100)"}': {
    'value': 'border-l-rose-100',
  },
  '{"border-left-color":"var(--color-rose-200)"}': {
    'value': 'border-l-rose-200',
  },
  '{"border-left-color":"var(--color-rose-300)"}': {
    'value': 'border-l-rose-300',
  },
  '{"border-left-color":"var(--color-rose-400)"}': {
    'value': 'border-l-rose-400',
  },
  '{"border-left-color":"var(--color-rose-500)"}': {
    'value': 'border-l-rose-500',
  },
  '{"border-left-color":"var(--color-rose-600)"}': {
    'value': 'border-l-rose-600',
  },
  '{"border-left-color":"var(--color-rose-700)"}': {
    'value': 'border-l-rose-700',
  },
  '{"border-left-color":"var(--color-rose-800)"}': {
    'value': 'border-l-rose-800',
  },
  '{"border-left-color":"var(--color-rose-900)"}': {
    'value': 'border-l-rose-900',
  },
  '{"border-left-color":"var(--color-rose-950)"}': {
    'value': 'border-l-rose-950',
  },
  '{"border-left-color":"var(--color-slate-50)"}': {
    'value': 'border-l-slate-50',
  },
  '{"border-left-color":"var(--color-slate-100)"}': {
    'value': 'border-l-slate-100',
  },
  '{"border-left-color":"var(--color-slate-200)"}': {
    'value': 'border-l-slate-200',
  },
  '{"border-left-color":"var(--color-slate-300)"}': {
    'value': 'border-l-slate-300',
  },
  '{"border-left-color":"var(--color-slate-400)"}': {
    'value': 'border-l-slate-400',
  },
  '{"border-left-color":"var(--color-slate-500)"}': {
    'value': 'border-l-slate-500',
  },
  '{"border-left-color":"var(--color-slate-600)"}': {
    'value': 'border-l-slate-600',
  },
  '{"border-left-color":"var(--color-slate-700)"}': {
    'value': 'border-l-slate-700',
  },
  '{"border-left-color":"var(--color-slate-800)"}': {
    'value': 'border-l-slate-800',
  },
  '{"border-left-color":"var(--color-slate-900)"}': {
    'value': 'border-l-slate-900',
  },
  '{"border-left-color":"var(--color-slate-950)"}': {
    'value': 'border-l-slate-950',
  },
  '{"border-left-color":"var(--color-gray-50)"}': {
    'value': 'border-l-gray-50',
  },
  '{"border-left-color":"var(--color-gray-100)"}': {
    'value': 'border-l-gray-100',
  },
  '{"border-left-color":"var(--color-gray-200)"}': {
    'value': 'border-l-gray-200',
  },
  '{"border-left-color":"var(--color-gray-300)"}': {
    'value': 'border-l-gray-300',
  },
  '{"border-left-color":"var(--color-gray-400)"}': {
    'value': 'border-l-gray-400',
  },
  '{"border-left-color":"var(--color-gray-500)"}': {
    'value': 'border-l-gray-500',
  },
  '{"border-left-color":"var(--color-gray-600)"}': {
    'value': 'border-l-gray-600',
  },
  '{"border-left-color":"var(--color-gray-700)"}': {
    'value': 'border-l-gray-700',
  },
  '{"border-left-color":"var(--color-gray-800)"}': {
    'value': 'border-l-gray-800',
  },
  '{"border-left-color":"var(--color-gray-900)"}': {
    'value': 'border-l-gray-900',
  },
  '{"border-left-color":"var(--color-gray-950)"}': {
    'value': 'border-l-gray-950',
  },
  '{"border-left-color":"var(--color-zinc-50)"}': {
    'value': 'border-l-zinc-50',
  },
  '{"border-left-color":"var(--color-zinc-100)"}': {
    'value': 'border-l-zinc-100',
  },
  '{"border-left-color":"var(--color-zinc-200)"}': {
    'value': 'border-l-zinc-200',
  },
  '{"border-left-color":"var(--color-zinc-300)"}': {
    'value': 'border-l-zinc-300',
  },
  '{"border-left-color":"var(--color-zinc-400)"}': {
    'value': 'border-l-zinc-400',
  },
  '{"border-left-color":"var(--color-zinc-500)"}': {
    'value': 'border-l-zinc-500',
  },
  '{"border-left-color":"var(--color-zinc-600)"}': {
    'value': 'border-l-zinc-600',
  },
  '{"border-left-color":"var(--color-zinc-700)"}': {
    'value': 'border-l-zinc-700',
  },
  '{"border-left-color":"var(--color-zinc-800)"}': {
    'value': 'border-l-zinc-800',
  },
  '{"border-left-color":"var(--color-zinc-900)"}': {
    'value': 'border-l-zinc-900',
  },
  '{"border-left-color":"var(--color-zinc-950)"}': {
    'value': 'border-l-zinc-950',
  },
  '{"border-left-color":"var(--color-neutral-50)"}': {
    'value': 'border-l-neutral-50',
  },
  '{"border-left-color":"var(--color-neutral-100)"}': {
    'value': 'border-l-neutral-100',
  },
  '{"border-left-color":"var(--color-neutral-200)"}': {
    'value': 'border-l-neutral-200',
  },
  '{"border-left-color":"var(--color-neutral-300)"}': {
    'value': 'border-l-neutral-300',
  },
  '{"border-left-color":"var(--color-neutral-400)"}': {
    'value': 'border-l-neutral-400',
  },
  '{"border-left-color":"var(--color-neutral-500)"}': {
    'value': 'border-l-neutral-500',
  },
  '{"border-left-color":"var(--color-neutral-600)"}': {
    'value': 'border-l-neutral-600',
  },
  '{"border-left-color":"var(--color-neutral-700)"}': {
    'value': 'border-l-neutral-700',
  },
  '{"border-left-color":"var(--color-neutral-800)"}': {
    'value': 'border-l-neutral-800',
  },
  '{"border-left-color":"var(--color-neutral-900)"}': {
    'value': 'border-l-neutral-900',
  },
  '{"border-left-color":"var(--color-neutral-950)"}': {
    'value': 'border-l-neutral-950',
  },
  '{"border-left-color":"var(--color-stone-50)"}': {
    'value': 'border-l-stone-50',
  },
  '{"border-left-color":"var(--color-stone-100)"}': {
    'value': 'border-l-stone-100',
  },
  '{"border-left-color":"var(--color-stone-200)"}': {
    'value': 'border-l-stone-200',
  },
  '{"border-left-color":"var(--color-stone-300)"}': {
    'value': 'border-l-stone-300',
  },
  '{"border-left-color":"var(--color-stone-400)"}': {
    'value': 'border-l-stone-400',
  },
  '{"border-left-color":"var(--color-stone-500)"}': {
    'value': 'border-l-stone-500',
  },
  '{"border-left-color":"var(--color-stone-600)"}': {
    'value': 'border-l-stone-600',
  },
  '{"border-left-color":"var(--color-stone-700)"}': {
    'value': 'border-l-stone-700',
  },
  '{"border-left-color":"var(--color-stone-800)"}': {
    'value': 'border-l-stone-800',
  },
  '{"border-left-color":"var(--color-stone-900)"}': {
    'value': 'border-l-stone-900',
  },
  '{"border-left-color":"var(--color-stone-950)"}': {
    'value': 'border-l-stone-950',
  },
  '{"border-left-color":"var(<custom-property>)"}': {
    'value': 'border-l-(<custom-property>)',
  },
  '{"border-left-color":"<value>"}': { 'value': 'border-l-[<value>]' },
  '{"transition-duration":"var(--default-transition-duration)"}': {
    '{"transition-property":"color, background-color, border-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter"}':
      {
        '{"transition-timing-function":"var(--default-transition-timing-function)"}':
          { 'value': 'transition' },
      },
    '{"transition-property":"all"}': {
      '{"transition-timing-function":"var(--default-transition-timing-function)"}':
        { 'value': 'transition-all' },
    },
    '{"transition-property":"color, background-color, border-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"}':
      {
        '{"transition-timing-function":"var(--default-transition-timing-function)"}':
          { 'value': 'transition-colors' },
      },
    '{"transition-property":"opacity"}': {
      '{"transition-timing-function":"var(--default-transition-timing-function)"}':
        { 'value': 'transition-opacity' },
    },
    '{"transition-property":"box-shadow"}': {
      '{"transition-timing-function":"var(--default-transition-timing-function)"}':
        { 'value': 'transition-shadow' },
    },
    '{"transition-property":"transform, translate, scale, rotate"}': {
      '{"transition-timing-function":"var(--default-transition-timing-function)"}':
        { 'value': 'transition-transform' },
    },
    '{"transition-property":"var(<custom-property>)"}': {
      '{"transition-timing-function":"var(--default-transition-timing-function)"}':
        { 'value': 'transition-(<custom-property>)' },
    },
    '{"transition-property":"<value>"}': {
      '{"transition-timing-function":"var(--default-transition-timing-function)"}':
        { 'value': 'transition-[<value>]' },
    },
  },
  '{"transition-property":"none"}': { 'value': 'transition-none' },
  '{"will-change":"auto"}': { 'value': 'will-change-auto' },
  '{"will-change":"scroll-position"}': { 'value': 'will-change-scroll' },
  '{"will-change":"contents"}': { 'value': 'will-change-contents' },
  '{"will-change":"transform"}': { 'value': 'will-change-transform' },
  '{"will-change":"var(<custom-property>)"}': {
    'value': 'will-change-<custom-property>',
  },
  '{"will-change":"<value>"}': { 'value': 'will-change-[<value>]' },
  '{"text-indent":"calc(var(--spacing) * <number>)"}': {
    'value': 'indent-<number>',
  },
  '{"text-indent":"calc(var(--spacing) * -<number>)"}': {
    'value': '-indent-<number>',
  },
  '{"text-indent":"1px"}': { 'value': 'indent-px' },
  '{"text-indent":"-1px"}': { 'value': '-indent-px' },
  '{"text-indent":"var(<custom-property>)"}': {
    'value': 'indent-(<custom-property>)',
  },
  '{"text-indent":"<value>"}': { 'value': 'indent-[<value>]' },
  '{"transform-style":"preserve-3d"}': { 'value': 'transform-3d' },
  '{"transform-style":"flat"}': { 'value': 'transform-flat' },
  '{"scale":"none"}': { 'value': 'scale-none' },
  '{"scale":"<number>% <number>%"}': { 'value': 'scale-<number>' },
  '{"scale":"calc(<number>% * -1) calc(<number>% * -1)"}': {
    'value': '-scale-<number>',
  },
  '{"scale":"var(<custom-property>) var(<custom-property>)"}': {
    'value': 'scale-(<custom-property>)',
  },
  '{"scale":"<value>"}': { 'value': 'scale-[<value>]' },
  '{"scale":"<number>% var(--tw-scale-y)"}': { 'value': 'scale-x-<number>' },
  '{"scale":"calc(<number>% * -1) var(--tw-scale-y)"}': {
    'value': '-scale-x-<number>',
  },
  '{"scale":"var(<custom-property>) var(--tw-scale-y)"}': {
    'value': 'scale-x-(<custom-property>)',
  },
  '{"scale":"<value> var(--tw-scale-y)"}': { 'value': 'scale-x-[<value>]' },
  '{"scale":"var(--tw-scale-x) <number>%"}': { 'value': 'scale-y-<number>' },
  '{"scale":"var(--tw-scale-x) calc(<number>% * -1)"}': {
    'value': '-scale-y-<number>',
  },
  '{"scale":"var(--tw-scale-x) var(<custom-property>)"}': {
    'value': 'scale-y-(<custom-property>)',
  },
  '{"scale":"var(--tw-scale-x) <value>"}': { 'value': 'scale-y-[<value>]' },
  '{"scale":"var(--tw-scale-x) var(--tw-scale-y) <number>%"}': {
    'value': 'scale-z-<number>',
  },
  '{"scale":"var(--tw-scale-x) var(--tw-scale-y) calc(<number>% * -1)"}': {
    'value': '-scale-z-<number>',
  },
  '{"scale":"var(--tw-scale-x) var(--tw-scale-y) var(<custom-property>)"}': {
    'value': 'scale-z-(<custom-property>)',
  },
  '{"scale":"var(--tw-scale-x) var(--tw-scale-y) <value>"}': {
    'value': 'scale-z-[<value>]',
  },
  '{"scale":"var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"}': {
    'value': 'scale-3d',
  },
  '{"backdrop-filter":"sepia(100%)"}': { 'value': 'backdrop-sepia' },
  '{"backdrop-filter":"sepia(<number>%)"}': {
    'value': 'backdrop-sepia-<number>',
  },
  '{"backdrop-filter":"sepia(var(<custom-property>))"}': {
    'value': 'backdrop-sepia-(<custom-property>)',
  },
  '{"backdrop-filter":"sepia(<value>)"}': {
    'value': 'backdrop-sepia-[<value>]',
  },
  '{"field-sizing":"fixed"}': { 'value': 'field-sizing-fixed' },
  '{"field-sizing":"content"}': { 'value': 'field-sizing-content' },
  '{"white-space":"normal"}': { 'value': 'whitespace-normal' },
  '{"white-space":"nowrap"}': { 'value': 'whitespace-nowrap' },
  '{"white-space":"pre"}': { 'value': 'whitespace-pre' },
  '{"white-space":"pre-line"}': { 'value': 'whitespace-pre-line' },
  '{"white-space":"pre-wrap"}': { 'value': 'whitespace-pre-wrap' },
  '{"white-space":"break-spaces"}': { 'value': 'whitespace-break-spaces' },
  '{"border-radius":"var(--radius-xs)"}': { 'value': 'rounded-xs' },
  '{"border-radius":"var(--radius-sm)"}': { 'value': 'rounded-sm' },
  '{"border-radius":"var(--radius-md)"}': { 'value': 'rounded-md' },
  '{"border-radius":"var(--radius-lg)"}': { 'value': 'rounded-lg' },
  '{"border-radius":"var(--radius-xl)"}': { 'value': 'rounded-xl' },
  '{"border-radius":"var(--radius-2xl)"}': { 'value': 'rounded-2xl' },
  '{"border-radius":"var(--radius-3xl)"}': { 'value': 'rounded-3xl' },
  '{"border-radius":"var(--radius-4xl)"}': { 'value': 'rounded-4xl' },
  '{"border-radius":"0"}': { 'value': 'rounded-none' },
  '{"border-radius":"calc(infinity * 1px)"}': { 'value': 'rounded-full' },
  '{"border-radius":"var(<custom-property>)"}': {
    'value': 'rounded-(<custom-property>)',
  },
  '{"border-radius":"<value>"}': { 'value': 'rounded-[<value>]' },
  '{"border-end-start-radius":"var(--radius-xs)"}': {
    '{"border-start-start-radius":"var(--radius-xs)"}': {
      'value': 'rounded-s-xs',
    },
    'value': 'rounded-es-xs',
  },
  '{"border-end-start-radius":"var(--radius-sm)"}': {
    '{"border-start-start-radius":"var(--radius-sm)"}': {
      'value': 'rounded-s-sm',
    },
    'value': 'rounded-es-sm',
  },
  '{"border-end-start-radius":"var(--radius-md)"}': {
    '{"border-start-start-radius":"var(--radius-md)"}': {
      'value': 'rounded-s-md',
    },
    'value': 'rounded-es-md',
  },
  '{"border-end-start-radius":"var(--radius-lg)"}': {
    '{"border-start-start-radius":"var(--radius-lg)"}': {
      'value': 'rounded-s-lg',
    },
    'value': 'rounded-es-lg',
  },
  '{"border-end-start-radius":"var(--radius-xl)"}': {
    '{"border-start-start-radius":"var(--radius-xl)"}': {
      'value': 'rounded-s-xl',
    },
    'value': 'rounded-es-xl',
  },
  '{"border-end-start-radius":"var(--radius-2xl)"}': {
    '{"border-start-start-radius":"var(--radius-2xl)"}': {
      'value': 'rounded-s-2xl',
    },
    'value': 'rounded-es-2xl',
  },
  '{"border-end-start-radius":"var(--radius-3xl)"}': {
    '{"border-start-start-radius":"var(--radius-3xl)"}': {
      'value': 'rounded-s-3xl',
    },
    'value': 'rounded-es-3xl',
  },
  '{"border-end-start-radius":"var(--radius-4xl)"}': {
    '{"border-start-start-radius":"var(--radius-4xl)"}': {
      'value': 'rounded-s-4xl',
    },
    'value': 'rounded-es-4xl',
  },
  '{"border-end-start-radius":"0"}': {
    '{"border-start-start-radius":"0"}': { 'value': 'rounded-s-none' },
    'value': 'rounded-es-none',
  },
  '{"border-end-start-radius":"calc(infinity * 1px)"}': {
    '{"border-start-start-radius":"calc(infinity * 1px)"}': {
      'value': 'rounded-s-full',
    },
    'value': 'rounded-es-full',
  },
  '{"border-end-start-radius":"var(<custom-property>)"}': {
    '{"border-start-start-radius":"var(<custom-property>)"}': {
      'value': 'rounded-s-(<custom-property>)',
    },
    'value': 'rounded-es-(<custom-property>)',
  },
  '{"border-end-start-radius":"<value>"}': {
    '{"border-start-start-radius":"<value>"}': {
      'value': 'rounded-s-[<value>]',
    },
    'value': 'rounded-es-[<value>]',
  },
  '{"border-end-end-radius":"var(--radius-xs)"}': {
    '{"border-start-end-radius":"var(--radius-xs)"}': {
      'value': 'rounded-e-xs',
    },
    'value': 'rounded-ee-xs',
  },
  '{"border-end-end-radius":"var(--radius-sm)"}': {
    '{"border-start-end-radius":"var(--radius-sm)"}': {
      'value': 'rounded-e-sm',
    },
    'value': 'rounded-ee-sm',
  },
  '{"border-end-end-radius":"var(--radius-md)"}': {
    '{"border-start-end-radius":"var(--radius-md)"}': {
      'value': 'rounded-e-md',
    },
    'value': 'rounded-ee-md',
  },
  '{"border-end-end-radius":"var(--radius-lg)"}': {
    '{"border-start-end-radius":"var(--radius-lg)"}': {
      'value': 'rounded-e-lg',
    },
    'value': 'rounded-ee-lg',
  },
  '{"border-end-end-radius":"var(--radius-xl)"}': {
    '{"border-start-end-radius":"var(--radius-xl)"}': {
      'value': 'rounded-e-xl',
    },
    'value': 'rounded-ee-xl',
  },
  '{"border-end-end-radius":"var(--radius-2xl)"}': {
    '{"border-start-end-radius":"var(--radius-2xl)"}': {
      'value': 'rounded-e-2xl',
    },
    'value': 'rounded-ee-2xl',
  },
  '{"border-end-end-radius":"var(--radius-3xl)"}': {
    '{"border-start-end-radius":"var(--radius-3xl)"}': {
      'value': 'rounded-e-3xl',
    },
    'value': 'rounded-ee-3xl',
  },
  '{"border-end-end-radius":"var(--radius-4xl)"}': {
    '{"border-start-end-radius":"var(--radius-4xl)"}': {
      'value': 'rounded-e-4xl',
    },
    'value': 'rounded-ee-4xl',
  },
  '{"border-end-end-radius":"0"}': {
    '{"border-start-end-radius":"0"}': { 'value': 'rounded-e-none' },
    'value': 'rounded-ee-none',
  },
  '{"border-end-end-radius":"calc(infinity * 1px)"}': {
    '{"border-start-end-radius":"calc(infinity * 1px)"}': {
      'value': 'rounded-e-full',
    },
    'value': 'rounded-ee-full',
  },
  '{"border-end-end-radius":"var(<custom-property>)"}': {
    '{"border-start-end-radius":"var(<custom-property>)"}': {
      'value': 'rounded-e-(<custom-property>)',
    },
    'value': 'rounded-ee-(<custom-property>)',
  },
  '{"border-end-end-radius":"<value>"}': {
    '{"border-start-end-radius":"<value>"}': { 'value': 'rounded-e-[<value>]' },
    'value': 'rounded-ee-[<value>]',
  },
  '{"border-top-left-radius":"var(--radius-xs)"}': {
    '{"border-top-right-radius":"var(--radius-xs)"}': {
      'value': 'rounded-t-xs',
    },
    'value': 'rounded-tl-xs',
  },
  '{"border-top-left-radius":"var(--radius-sm)"}': {
    '{"border-top-right-radius":"var(--radius-sm)"}': {
      'value': 'rounded-t-sm',
    },
    'value': 'rounded-tl-sm',
  },
  '{"border-top-left-radius":"var(--radius-md)"}': {
    '{"border-top-right-radius":"var(--radius-md)"}': {
      'value': 'rounded-t-md',
    },
    'value': 'rounded-tl-md',
  },
  '{"border-top-left-radius":"var(--radius-lg)"}': {
    '{"border-top-right-radius":"var(--radius-lg)"}': {
      'value': 'rounded-t-lg',
    },
    'value': 'rounded-tl-lg',
  },
  '{"border-top-left-radius":"var(--radius-xl)"}': {
    '{"border-top-right-radius":"var(--radius-xl)"}': {
      'value': 'rounded-t-xl',
    },
    'value': 'rounded-tl-xl',
  },
  '{"border-top-left-radius":"var(--radius-2xl)"}': {
    '{"border-top-right-radius":"var(--radius-2xl)"}': {
      'value': 'rounded-t-2xl',
    },
    'value': 'rounded-tl-2xl',
  },
  '{"border-top-left-radius":"var(--radius-3xl)"}': {
    '{"border-top-right-radius":"var(--radius-3xl)"}': {
      'value': 'rounded-t-3xl',
    },
    'value': 'rounded-tl-3xl',
  },
  '{"border-top-left-radius":"var(--radius-4xl)"}': {
    '{"border-top-right-radius":"var(--radius-4xl)"}': {
      'value': 'rounded-t-4xl',
    },
    'value': 'rounded-tl-4xl',
  },
  '{"border-top-left-radius":"0"}': {
    '{"border-top-right-radius":"0"}': { 'value': 'rounded-t-none' },
    'value': 'rounded-tl-none',
  },
  '{"border-top-left-radius":"calc(infinity * 1px)"}': {
    '{"border-top-right-radius":"calc(infinity * 1px)"}': {
      'value': 'rounded-t-full',
    },
    'value': 'rounded-tl-full',
  },
  '{"border-top-left-radius":"var(<custom-property>)"}': {
    '{"border-top-right-radius":"var(<custom-property>)"}': {
      'value': 'rounded-t-(<custom-property>)',
    },
    'value': 'rounded-tl-(<custom-property>)',
  },
  '{"border-top-left-radius":"<value>"}': {
    '{"border-top-right-radius":"<value>"}': { 'value': 'rounded-t-[<value>]' },
    'value': 'rounded-tl-[<value>]',
  },
  '{"border-bottom-right-radius":"var(--radius-xs)"}': {
    '{"border-top-right-radius":"var(--radius-xs)"}': {
      'value': 'rounded-r-xs',
    },
    'value': 'rounded-br-xs',
  },
  '{"border-bottom-right-radius":"var(--radius-sm)"}': {
    '{"border-top-right-radius":"var(--radius-sm)"}': {
      'value': 'rounded-r-sm',
    },
    'value': 'rounded-br-sm',
  },
  '{"border-bottom-right-radius":"var(--radius-md)"}': {
    '{"border-top-right-radius":"var(--radius-md)"}': {
      'value': 'rounded-r-md',
    },
    'value': 'rounded-br-md',
  },
  '{"border-bottom-right-radius":"var(--radius-lg)"}': {
    '{"border-top-right-radius":"var(--radius-lg)"}': {
      'value': 'rounded-r-lg',
    },
    'value': 'rounded-br-lg',
  },
  '{"border-bottom-right-radius":"var(--radius-xl)"}': {
    '{"border-top-right-radius":"var(--radius-xl)"}': {
      'value': 'rounded-r-xl',
    },
    'value': 'rounded-br-xl',
  },
  '{"border-bottom-right-radius":"var(--radius-2xl)"}': {
    '{"border-top-right-radius":"var(--radius-2xl)"}': {
      'value': 'rounded-r-2xl',
    },
    'value': 'rounded-br-2xl',
  },
  '{"border-bottom-right-radius":"var(--radius-3xl)"}': {
    '{"border-top-right-radius":"var(--radius-3xl)"}': {
      'value': 'rounded-r-3xl',
    },
    'value': 'rounded-br-3xl',
  },
  '{"border-bottom-right-radius":"var(--radius-4xl)"}': {
    '{"border-top-right-radius":"var(--radius-4xl)"}': {
      'value': 'rounded-r-4xl',
    },
    'value': 'rounded-br-4xl',
  },
  '{"border-bottom-right-radius":"0"}': {
    '{"border-top-right-radius":"0"}': { 'value': 'rounded-r-none' },
    'value': 'rounded-br-none',
  },
  '{"border-bottom-right-radius":"calc(infinity * 1px)"}': {
    '{"border-top-right-radius":"calc(infinity * 1px)"}': {
      'value': 'rounded-r-full',
    },
    'value': 'rounded-br-full',
  },
  '{"border-bottom-right-radius":"var(<custom-property>)"}': {
    '{"border-top-right-radius":"var(<custom-property>)"}': {
      'value': 'rounded-r-(<custom-property>)',
    },
    'value': 'rounded-br-(<custom-property>)',
  },
  '{"border-bottom-right-radius":"<value>"}': {
    '{"border-top-right-radius":"<value>"}': { 'value': 'rounded-r-[<value>]' },
    'value': 'rounded-br-[<value>]',
  },
  '{"border-bottom-left-radius":"var(--radius-xs)"}': {
    '{"border-bottom-right-radius":"var(--radius-xs)"}': {
      'value': 'rounded-b-xs',
    },
    '{"border-top-left-radius":"var(--radius-xs)"}': {
      'value': 'rounded-l-xs',
    },
    'value': 'rounded-bl-xs',
  },
  '{"border-bottom-left-radius":"var(--radius-sm)"}': {
    '{"border-bottom-right-radius":"var(--radius-sm)"}': {
      'value': 'rounded-b-sm',
    },
    '{"border-top-left-radius":"var(--radius-sm)"}': {
      'value': 'rounded-l-sm',
    },
    'value': 'rounded-bl-sm',
  },
  '{"border-bottom-left-radius":"var(--radius-md)"}': {
    '{"border-bottom-right-radius":"var(--radius-md)"}': {
      'value': 'rounded-b-md',
    },
    '{"border-top-left-radius":"var(--radius-md)"}': {
      'value': 'rounded-l-md',
    },
    'value': 'rounded-bl-md',
  },
  '{"border-bottom-left-radius":"var(--radius-lg)"}': {
    '{"border-bottom-right-radius":"var(--radius-lg)"}': {
      'value': 'rounded-b-lg',
    },
    '{"border-top-left-radius":"var(--radius-lg)"}': {
      'value': 'rounded-l-lg',
    },
    'value': 'rounded-bl-lg',
  },
  '{"border-bottom-left-radius":"var(--radius-xl)"}': {
    '{"border-bottom-right-radius":"var(--radius-xl)"}': {
      'value': 'rounded-b-xl',
    },
    '{"border-top-left-radius":"var(--radius-xl)"}': {
      'value': 'rounded-l-xl',
    },
    'value': 'rounded-bl-xl',
  },
  '{"border-bottom-left-radius":"var(--radius-2xl)"}': {
    '{"border-bottom-right-radius":"var(--radius-2xl)"}': {
      'value': 'rounded-b-2xl',
    },
    '{"border-top-left-radius":"var(--radius-2xl)"}': {
      'value': 'rounded-l-2xl',
    },
    'value': 'rounded-bl-2xl',
  },
  '{"border-bottom-left-radius":"var(--radius-3xl)"}': {
    '{"border-bottom-right-radius":"var(--radius-3xl)"}': {
      'value': 'rounded-b-3xl',
    },
    '{"border-top-left-radius":"var(--radius-3xl)"}': {
      'value': 'rounded-l-3xl',
    },
    'value': 'rounded-bl-3xl',
  },
  '{"border-bottom-left-radius":"var(--radius-4xl)"}': {
    '{"border-bottom-right-radius":"var(--radius-4xl)"}': {
      'value': 'rounded-b-4xl',
    },
    '{"border-top-left-radius":"var(--radius-4xl)"}': {
      'value': 'rounded-l-4xl',
    },
    'value': 'rounded-bl-4xl',
  },
  '{"border-bottom-left-radius":"0"}': {
    '{"border-bottom-right-radius":"0"}': { 'value': 'rounded-b-none' },
    '{"border-top-left-radius":"0"}': { 'value': 'rounded-l-none' },
    'value': 'rounded-bl-none',
  },
  '{"border-bottom-left-radius":"calc(infinity * 1px)"}': {
    '{"border-bottom-right-radius":"calc(infinity * 1px)"}': {
      'value': 'rounded-b-full',
    },
    '{"border-top-left-radius":"calc(infinity * 1px)"}': {
      'value': 'rounded-l-full',
    },
    'value': 'rounded-bl-full',
  },
  '{"border-bottom-left-radius":"var(<custom-property>)"}': {
    '{"border-bottom-right-radius":"var(<custom-property>)"}': {
      'value': 'rounded-b-(<custom-property>)',
    },
    '{"border-top-left-radius":"var(<custom-property>)"}': {
      'value': 'rounded-l-(<custom-property>)',
    },
    'value': 'rounded-bl-(<custom-property>)',
  },
  '{"border-bottom-left-radius":"<value>"}': {
    '{"border-bottom-right-radius":"<value>"}': {
      'value': 'rounded-b-[<value>]',
    },
    '{"border-top-left-radius":"<value>"}': { 'value': 'rounded-l-[<value>]' },
    'value': 'rounded-bl-[<value>]',
  },
  '{"border-start-start-radius":"var(--radius-xs)"}': {
    'value': 'rounded-ss-xs',
  },
  '{"border-start-start-radius":"var(--radius-sm)"}': {
    'value': 'rounded-ss-sm',
  },
  '{"border-start-start-radius":"var(--radius-md)"}': {
    'value': 'rounded-ss-md',
  },
  '{"border-start-start-radius":"var(--radius-lg)"}': {
    'value': 'rounded-ss-lg',
  },
  '{"border-start-start-radius":"var(--radius-xl)"}': {
    'value': 'rounded-ss-xl',
  },
  '{"border-start-start-radius":"var(--radius-2xl)"}': {
    'value': 'rounded-ss-2xl',
  },
  '{"border-start-start-radius":"var(--radius-3xl)"}': {
    'value': 'rounded-ss-3xl',
  },
  '{"border-start-start-radius":"var(--radius-4xl)"}': {
    'value': 'rounded-ss-4xl',
  },
  '{"border-start-start-radius":"0"}': { 'value': 'rounded-ss-none' },
  '{"border-start-start-radius":"calc(infinity * 1px)"}': {
    'value': 'rounded-ss-full',
  },
  '{"border-start-start-radius":"var(<custom-property>)"}': {
    'value': 'rounded-ss-(<custom-property>)',
  },
  '{"border-start-start-radius":"<value>"}': {
    'value': 'rounded-ss-[<value>]',
  },
  '{"border-start-end-radius":"var(--radius-xs)"}': {
    'value': 'rounded-se-xs',
  },
  '{"border-start-end-radius":"var(--radius-sm)"}': {
    'value': 'rounded-se-sm',
  },
  '{"border-start-end-radius":"var(--radius-md)"}': {
    'value': 'rounded-se-md',
  },
  '{"border-start-end-radius":"var(--radius-lg)"}': {
    'value': 'rounded-se-lg',
  },
  '{"border-start-end-radius":"var(--radius-xl)"}': {
    'value': 'rounded-se-xl',
  },
  '{"border-start-end-radius":"var(--radius-2xl)"}': {
    'value': 'rounded-se-2xl',
  },
  '{"border-start-end-radius":"var(--radius-3xl)"}': {
    'value': 'rounded-se-3xl',
  },
  '{"border-start-end-radius":"var(--radius-4xl)"}': {
    'value': 'rounded-se-4xl',
  },
  '{"border-start-end-radius":"0"}': { 'value': 'rounded-se-none' },
  '{"border-start-end-radius":"calc(infinity * 1px)"}': {
    'value': 'rounded-se-full',
  },
  '{"border-start-end-radius":"var(<custom-property>)"}': {
    'value': 'rounded-se-(<custom-property>)',
  },
  '{"border-start-end-radius":"<value>"}': { 'value': 'rounded-se-[<value>]' },
  '{"border-top-right-radius":"var(--radius-xs)"}': {
    'value': 'rounded-tr-xs',
  },
  '{"border-top-right-radius":"var(--radius-sm)"}': {
    'value': 'rounded-tr-sm',
  },
  '{"border-top-right-radius":"var(--radius-md)"}': {
    'value': 'rounded-tr-md',
  },
  '{"border-top-right-radius":"var(--radius-lg)"}': {
    'value': 'rounded-tr-lg',
  },
  '{"border-top-right-radius":"var(--radius-xl)"}': {
    'value': 'rounded-tr-xl',
  },
  '{"border-top-right-radius":"var(--radius-2xl)"}': {
    'value': 'rounded-tr-2xl',
  },
  '{"border-top-right-radius":"var(--radius-3xl)"}': {
    'value': 'rounded-tr-3xl',
  },
  '{"border-top-right-radius":"var(--radius-4xl)"}': {
    'value': 'rounded-tr-4xl',
  },
  '{"border-top-right-radius":"0"}': { 'value': 'rounded-tr-none' },
  '{"border-top-right-radius":"calc(infinity * 1px)"}': {
    'value': 'rounded-tr-full',
  },
  '{"border-top-right-radius":"var(<custom-property>)"}': {
    'value': 'rounded-tr-(<custom-property>)',
  },
  '{"border-top-right-radius":"<value>"}': { 'value': 'rounded-tr-[<value>]' },
  '{"filter":"brightness(<number>%)"}': { 'value': 'brightness-<number>' },
  '{"filter":"brightness(var(<custom-property>))"}': {
    'value': 'brightness-(<custom-property>)',
  },
  '{"filter":"brightness(<value>)"}': { 'value': 'brightness-[<value>]' },
  '{"caption-side":"top"}': { 'value': 'caption-top' },
  '{"caption-side":"bottom"}': { 'value': 'caption-bottom' },
};
