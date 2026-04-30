/**
 * Shared cursor state — read by <CustomCursor />,
 * written by hoverable elements via useCursorHover().
 */
type CursorMode = 'default' | 'hover' | 'image'

export const useCursor = () => {
  const mode = useState<CursorMode>('cursor-mode', () => 'default')
  const label = useState<string>('cursor-label', () => '')

  const setMode = (m: CursorMode, l = '') => {
    mode.value = m
    label.value = l
  }

  const reset = () => {
    mode.value = 'default'
    label.value = ''
  }

  return { mode, label, setMode, reset }
}

/**
 * Utility to wire up hover/leave listeners on an element.
 */
export const useCursorHover = (
  el: Ref<HTMLElement | null>,
  options: { mode?: CursorMode; label?: string } = {},
) => {
  const { setMode, reset } = useCursor()
  const { mode = 'hover', label = '' } = options

  const onEnter = () => setMode(mode, label)
  const onLeave = () => reset()

  onMounted(() => {
    if (!el.value) return
    el.value.addEventListener('mouseenter', onEnter)
    el.value.addEventListener('mouseleave', onLeave)
  })

  onBeforeUnmount(() => {
    if (!el.value) return
    el.value.removeEventListener('mouseenter', onEnter)
    el.value.removeEventListener('mouseleave', onLeave)
    reset()
  })
}
