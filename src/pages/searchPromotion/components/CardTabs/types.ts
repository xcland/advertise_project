export interface CardItemType {
  name: string
  currentValue: string | number
  contemporaryValue: string | number
  isSelected: boolean
  id: string
  onClick?: (selectedId: string) => void
}
