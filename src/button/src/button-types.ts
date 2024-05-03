import type { ExtractPropTypes, PropType } from "vue";

export type ButtonType = 'primary' | 'secondary' | 'text'
export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'secondary'
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  }
  
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>